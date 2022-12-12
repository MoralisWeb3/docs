---
title: "Parse Server Authentication"
slug: "web3-parse-server-authentication"
---
This section will show you how to use Moralis V2 with a self-hosted Parse Server.

To achieve this, we will need to:

1. Set up a Parse Server
2. Set up the parse-server dashboard to access db
3. Integrate Moralis Auth with your Parse Server

![](/img/content/3199457-parse-server.gif "parse-server.gif")

For this tutorial, we'll be building with Express, which Parse makes use of. Let's get started!

## Install the parse-server package

First, we will install the parse-server package.

```bash
yarn add parse-server
```



Next, we need to initialize the parsing server.

To do so, we'll create a file called `parseServer.ts` which will initialize the parse server.

```ts
import { ParseServer } from 'parse-server';

export const parseServer = new ParseServer({
  databaseURI: config.DATABASE_URI, // Connection string for your MongoDB database
  cloud: config.CLOUD_PATH, // Absolute path to your Cloud Code
  appId: config.APPLICATION_ID, // Application ID
  masterKey: config.MASTER_KEY, // Master key
  serverURL: config.SERVER_URL, // Server URL
});
```



[Learn more about Parse Server](https://github.com/parse-community/parse-server)

## Set up the Parse Server dashboard

Now we need to set up a dashboard to access the database and features provided by parse-server.

```bash
yarn add parse-dashboard
```



We'll start by initializing the dashboard using `parseDashboard.ts`

```ts
import ParseDashboard from 'parse-dashboard';

export const parseDashboard = new ParseDashboard({
  apps: [
    {
      appId: config.APPLICATION_ID, // Server Application ID
      masterKey: config.MASTER_KEY, // Server Master Key
      serverURL: config.SERVER_URL, // Server URL
      appName: config.APP_NAME, // Application Name
    },
  ],
});
```



[Learn more about parse dashboard](https://github.com/parse-community/parse-dashboard)

## Integrate Moralis Auth with parse-server

Now the server and dashboard are set up, we can integrate Moralis Web3 authentication with parse authentication.

The Web3 authentication flow will be managed using the Moralis Auth API. We will leverage parse server 0Auth support to create our custom authentication.

To do this, we need to install the Moralis package.

```bash
yarn add moralis
```



We must remember to initialize Moralis!

```ts
import Moralis from 'moralis';

Moralis.start({
  apiKey: 'your_api_key_here',
});
```



Now let's make our own authentication adapter. To verify authentication requests, we will use the Moralis Auth API in this adapter. Let's create a file called `MoralisAuthAdapter.ts` and code:

```ts
function validateAuthData(authData: any) {
  const { message, signature, network, id, authId } = authData;

  return Moralis.Auth.verify({
    message,
    signature,
    network,
  })
    .then((result) => {
      const data = result.toJSON();

      if (id === data.profileId && authId === data.id) {
        authData.chainId = result.result.chain.decimal;
        authData.nonce = data.nonce;
        authData.address = result.result.address.checksum;
        authData.version = data.version;
        authData.domain = data.domain;
        authData.expirationTime = data.expirationTime;
        authData.notBefore = data.notBefore;
        authData.resources = data.resources;
        authData.statement = data.statement;
        authData.uri = data.uri;
        return;
      }

      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'Moralis auth failed, invalid data');
    })
    .catch(() => {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'Moralis auth failed, invalid data');
    });
}

function validateAppId() {
  return Promise.resolve();
}

export default {
  validateAuthData,
  validateAppId,
};
```



The last thing we need to do to set up the adapter is to add it to our `ParseServer` initialization.

Parse server initialization should look like this:

```ts
import { ParseServer } from 'parse-server';
import MoralisAuthAdapter from './auth/MoralisAuthAdapter';

export const parseServer = new ParseServer({
  databaseURI: config.DATABASE_URI,
  cloud: config.CLOUD_PATH,
  appId: config.APPLICATION_ID,
  masterKey: config.MASTER_KEY,
  serverURL: config.SERVER_URL,
  auth: {
    moralis: {
      module: MoralisAuthAdapter,
    },
  },
});
```



We called this auth adapter `moralis`.

[Learn more about parse custom authentication](http://docs.parseplatform.org/parse-server/guide/#custom-authentication)

Lastly, we need to create the authentication service. This is where we will request the message and also authenticate with the Parse Server.  
Let's create a file and call it `authService.ts` and code:

```ts
import Moralis from 'moralis';
import { authRequests } from '../store';
import { ParseServerRequest } from '../utils/ParseServerRequest';

export async function requestMessage({ address, chain, network }: { address: string; chain: string; network: 'evm' }) {
  const result = await Moralis.Auth.requestMessage({
    address,
    chain,
    network,
    domain: 'defi.finance',
    statement: 'Please sign this message to confirm your identity.',
    uri: 'https://defi.finance',
    expirationTime: '2023-01-01T00:00:00.000Z',
    timeout: 15,
  });

  const { message, id, profileId } = result.toJSON();
  authRequests.set(message, { id, profileId });

  return message;
}

export async function verifyMessage({ network, signature, message }) {
  const storedData = authRequests.get(message);

  if (!storedData) {
    throw new Error('Invalid message');
  }

  const { id: storedId, profileId: storedProfileId } = storedData;

  const authData = {
    id: storedProfileId,
    authId: storedId,
    message,
    signature,
    network,
  };

  // Authenticate
  const user = await serverRequest.post({
    endpoint: `/users`,
    params: {
      authData: {
        moralis: authData,
      },
    },
    useMasterKey: true,
  });

  // Update user moralisProfile column
  await serverRequest.put({
    endpoint: `/users/${user.objectId}`,
    params: {
      moralisProfileId: storedProfileId,
    },
    useMasterKey: true,
  });

  // Get authenticated user
  const updatedUser = await serverRequest.get({
    endpoint: `/users/${user.objectId}`,
    useMasterKey: true,
  });

  return updatedUser;
}
```



We export two functions here:

- **requestMessage**; here, we utilize the Moralis Auth API to make a request for an authentication message, which we can then send to users to sign with their wallet. We also store the `id` and `profileId` in a store (any store of choice). We will need this information when verifying the message.
- **verifyMessage**; the stored `id` and `profileId` are retrieved in this method, and an authData is prepared to be used for authentication using the `moralis` auth adapter we previously created.

And with that, we are set.

Now let's put everything together using Express by creating the Express router for our authentication functions.

We'll make two files. `authController.ts` 

```typescript
import { requestMessage, verifyMessage } from './authService';
import { NextFunction, Request, Response } from 'express';

export async function request(req: Request, res: Response, next: NextFunction) {
  try {
    const { address, chain, network } = req.body;

    const message = await requestMessage({
      address,
      chain,
      network,
    });

    res.status(200).json({ message });
  } catch (err) {
    next(err);
  }
}

export async function verify(req: Request, res: Response, next: NextFunction) {
  try {
    const { network, message, signature } = req.body;

    const user = await verifyMessage({
      network,
      message,
      signature,
    });

    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}
```



and `authRouter.ts`

```typescript
import express from 'express';
import { verify, request } from './authController';

export const authRouter = express.Router();

authRouter.route('/request-message').post(request);
authRouter.route('/sign-message').post(verify);

```



Finally, our Express `index.ts` fill will look like this

```typescript
import Moralis from 'moralis';
import express from 'express';
import cors from 'cors';
import { parseDashboard } from './parseDashboard';
import { parseServer } from './parseServer';
import { errorHandler } from './middlewares/errorHandler';
import config from './config';
import { authRouter } from './auth/authRouter';

const app = express();

Moralis.start({
  apiKey: config.MORALIS_API_KEY,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use('/server', parseServer);
app.use('/dashboard', parseDashboard);
app.use('/auth', authRouter);
app.use(errorHandler);

app.use(express.static('public'));

app.listen(config.PORT, () => {
  console.log(`${config.APP_NAME} is running on port ${config.PORT}`);
});
```



# Client side

Making sure that everything functions on the client side is the final step. 

We need to add the following dependencies using CDN:

- Ether.js so we can sign messages with our wallet (MetaMask in the case of this demo)
- Axios (for making HTTP requests)

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
```



We now need some code to retrieve basic information about a user's wallet. The following code only works with the MetaMask provider.

```js
const connectToMetamask = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

  const [accounts, chainId] = await Promise.all([
    provider.send('eth_requestAccounts', []),
    provider.send('eth_chainId', []),
  ]);

  const signer = provider.getSigner();
  return { signer, chain: chainId, account: accounts[0] };
};
```



Now that everything is in place, we can authenticate a user. The authentication flow follows a very straightforward pattern:

- Read basic information about a user's wallet.
- Generate a message by the back-end function to sign it by the user.
- Sign the message by the user's wallet.
- Send the signed message to the back-end function, which verifies and authenticates with parse-server.

This flow is in the function below:

```js
const handleAuth = async () => {
  // Connect to Metamask
  const { signer, chain, account } = await connectToMetamask();

  if (!account) {
    throw new Error('No account found');
  }
  if (!chain) {
    throw new Error('No chain found');
  }

  const { message } = await requestMessage(account, chain);

  const signature = await signer.signMessage(message);

  const { user } = await verifyMessage(message, signature);

  renderUser(user);
};
```



## Demo project

You can find the repository with the final code here: [parse-server](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/parse-server).