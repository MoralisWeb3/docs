---
title: "How to Authenticate Users with MetaMask using React"
slug: "../how-to-authenticate-users-with-metamask-using-react"
---

Learn how Moralis authentication works and see how to add secure authentication to your React dapp. This tutorial covers how to 
create full-stack Web3 authentication using the popular React framework.

## Introduction

This tutorial demonstrates how to create a React app that allows users to log in using their Web3 wallets.

After Web3 wallet authentication, the server creates a session cookie with a signed [JWT](https://jwt.io/introduction) stored inside. It contains session info (such as an address, signed message) in the user's browser.

Once the user is logged in, they will be able to visit a page that displays all their user data.

## Prerequisites

1. Follow the [Your First Dapp - React](https://docs.moralis.io/docs/your-first-dapp-react) tutorial to set up your React dapp and server

## Install the Required Dependencies

To implement authentication using a Web3 wallet (e.g., MetaMask), we will use a Web3 library. For the tutorial, we will use [wagmi](https://wagmi.sh).

1. Install `wagmi` and `ethers` in your React app:

```bash npm2yarn
npm install wagmi ethers
```

## Initial Setup

First we will add an environment variable that will be used when calling our API.

1. Create a file called `.env` in the root of your project (where `package.json` is) and add:

```
REACT_APP_SERVER_URL=http://localhost:4000
```

Next we will add the providers required for `wagmi` and `next-auth`.

2. Open `src/App.js` and add our required imports:

```javascript
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet } from "wagmi/chains";

import Signin from './signin';
import User from './user';
```



3. We will add the client and providers, and update the routes for our `/signin` component (to be set up next):

```javascript
const { provider, webSocketProvider } = configureChains([mainnet], [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/user',
    element: <User />,
  },
]);

function App() {
  return (
    <WagmiConfig client={client}>
      <RouterProvider router={router} />
    </WagmiConfig>
  );
}
```



## Server Setup

Back in our server directory we will update our server's `index.js` for the code we need for authentication. In this demo, cookies will be used for the user data.

1. Install the required dependencies for our server:

```shell
npm install cookie-parser jsonwebtoken dotenv
```

2. Create a file called `.env` in your server's root directory (where `package.json` is):

- **APP_DOMAIN**: RFC 4501 DNS authority that is requesting the signing.
- **MORALIS_API_KEY**: You can get it [here](https://admin.moralis.io/account/profile).
- **REACT_URL**: Your app address. By default React uses [`http://localhost:3000`](http://localhost:3000).
- **AUTH_SECRET**: Used for signing JWT tokens of users. You can put any value here or generate it on [`https://generate-secret.now.sh/32`](https://generate-secret.now.sh/32). 

```
APP_DOMAIN=amazing.finance
MORALIS_API_KEY=xxxx
REACT_URL=http://localhost:3000
AUTH_SECRET=1234
```



3. Open `index.js`. We will create a `/request-message` endpoint for making requests to `Moralis.Auth` to generate a unique message (React will use this endpoint on the `/signin` page):

```javascript
// to use our .env variables
require('dotenv').config(); 

app.use(express.json());

// for our server's method of setting a user session
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const config = {
  domain: process.env.APP_DOMAIN,
  statement: 'Please sign this message to confirm your identity.',
  uri: process.env.REACT_URL,
  timeout: 60,
};

app.post('/request-message', async (req, res) => {
  const { address, chain, network } = req.body;

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      network,
      ...config,
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});
```



4. We will create a `/verify` endpoint for verifying the signed message from the user. After the user successfully verifies, they will be redirected to the `/user` page where their info will be displayed:

```javascript
app.post('/verify', async (req, res) => {
  try {
    const { message, signature } = req.body;

    const { address, profileId } = (
      await Moralis.Auth.verify({
        message,
        signature,
        networkType: 'evm',
      })
    ).raw;

    const user = { address, profileId, signature };

    // create JWT token
    const token = jwt.sign(user, process.env.AUTH_SECRET);

    // set JWT cookie
    res.cookie('jwt', token, {
      httpOnly: true,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});
```



5. We will create an `/authenticate` endpoint for checking the JWT cookie we previously set to allow the user access to the `/user` page:

```javascript
app.get('/authenticate', async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) return res.sendStatus(403); // if the user did not send a jwt token, they are unauthorized

  try {
    const data = jwt.verify(token, process.env.AUTH_SECRET);
    res.json(data);
  } catch {
    return res.sendStatus(403);
  }
});
```



6. Lastly we will create a `/logout` endpoint for removing the cookie:

```javascript
app.get('/logout', async (req, res) => {
  try {
    res.clearCookie('jwt');
    return res.sendStatus(200);
  } catch {
    return res.sendStatus(403);
  }
});
```



Your final `index.js` should look like this:

```javascript
const Moralis = require('moralis').default;

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// to use our .env variables
require('dotenv').config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cookieParser());

// allow access to React app domain
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

const config = {
  domain: process.env.APP_DOMAIN,
  statement: 'Please sign this message to confirm your identity.',
  uri: process.env.REACT_URL,
  timeout: 60,
};

// request message to be signed by client
app.post('/request-message', async (req, res) => {
  const { address, chain, network } = req.body;

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      network,
      ...config,
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});

app.post('/verify', async (req, res) => {
  try {
    const { message, signature } = req.body;

    const { address, profileId } = (
      await Moralis.Auth.verify({
        message,
        signature,
        networkType: 'evm',
      })
    ).raw;

    const user = { address, profileId, signature };

    // create JWT token
    const token = jwt.sign(user, process.env.AUTH_SECRET);

    // set JWT cookie
    res.cookie('jwt', token, {
      httpOnly: true,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});

app.get('/authenticate', async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) return res.sendStatus(403); // if the user did not send a jwt token, they are unauthorized

  try {
    const data = jwt.verify(token, process.env.AUTH_SECRET);
    res.json(data);
  } catch {
    return res.sendStatus(403);
  }
});

app.get('/logout', async (req, res) => {
  try {
    res.clearCookie('jwt');
    return res.sendStatus(200);
  } catch {
    return res.sendStatus(403);
  }
});

const startServer = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();
```



## Bringing It All Together

Now we will finish setting up our React pages to integrate with our server. 

1. In `src`, create a file called `signin.jsx` and add:

```javascript
import { useNavigate } from 'react-router-dom';

import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import axios from 'axios';

export default function SignIn() {
  const navigate = useNavigate();

  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const handleAuth = async () => {
    //disconnects the web3 provider if it's already active
    if (isConnected) {
      await disconnectAsync();
    }
    // enabling the web3 provider metamask
    const { account, chain } = await connectAsync({
      connector: new InjectedConnector(),
    });

    const userData = { address: account, chain: chain.id, network: 'evm' };
    // making a post request to our 'request-message' endpoint
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/request-message`,
      userData,
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    const message = data.message;
    // signing the received message via metamask
    const signature = await signMessageAsync({ message });

    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/verify`,
      {
        message,
        signature,
      },
      { withCredentials: true } // set cookie from Express server
    );

    // redirect to /user
    navigate('/user');
  };

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <button onClick={() => handleAuth()}>Authenticate via MetaMask</button>
    </div>
  );
}
```



2. In `src`, create a file called `user.jsx` and add:

```
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function User() {
  const navigate = useNavigate();

  const [session, setSession] = useState({});

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER_URL}/authenticate`, {
      withCredentials: true,
    })
      .then(({ data }) => {
        const { iat, ...authData } = data; // remove unimportant iat value

        setSession(authData);
      })
      .catch((err) => {
        navigate('/signin');
      });
  }, []);

  async function signOut() {
    await axios(`${process.env.REACT_APP_SERVER_URL}/logout`, {
      withCredentials: true,
    });

    navigate('/signin');
  }

  return (
    <div>
      <h3>User session:</h3>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}
```



## Testing the MetaMask Wallet Connector

In your teminal run `npm run start` and visit [`http://localhost:3000/signin`](http://localhost:3000/signin) to test the authentication.

1. Click on the `Authenticate via MetaMask` button:

![](https://files.readme.io/26e5dc4-React_-_1.png)

2. Connect the MetaMask wallet and sign the message:

![](https://files.readme.io/5f4b0f6-React_-_2.png)

3. After successful authentication, you will be redirected to the `/user` page:

![](https://files.readme.io/0ff471c-React_-_3.png)

- When a user authenticates, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page. 
- When a user is authenticated, we show the user's info on the page, even refreshing after the page.