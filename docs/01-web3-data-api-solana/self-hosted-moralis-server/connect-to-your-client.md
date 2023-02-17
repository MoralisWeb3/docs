---
title: "Connect to your client"
slug: "connect-to-your-client"
---

Once you have setup your self-hosted parse-server, you can connect it to your client with version 1 of the Moralis JS SDK (`moralis-v1`). See <https://github.com/MoralisWeb3/Moralis-JS-SDK-v1/>. Additional you can also use `react-moralis` 

You can connect to your app by providing the serverUrl and applicationId that you have set in [the previous step](run-parse-server-locally)

## Example

For a client-side example that is compatible with the self-hosted parse-server see the [`parse-server-migration-react-client`](https://docs.moralis.io/docs/nodejs-demo-parse-server-migration-react-client) project:

- [See on Github](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/parse-server-migration-react-client)
- [Download](https://moralisweb3.github.io/Moralis-JS-SDK/downloads/parse-server-migration-react-client.zip)

## Authentication

The authentication flow works a bit different when using the self-hosted server. This is because it is using the ([Auth Api](https://docs.moralis.io/reference/requestchallengeevm). 

For this to work, we need tor request the message that needs to be signed from the server. An example on how to adjust for this is shown in the snippet below:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="Vanilla Javascript" default>

```javascript
async function handleAuth(provider) {
    await Moralis.enableWeb3({
        throwOnError: true,
        provider,
    });

    const { account, chainId } = Moralis;

    if (!account) {
        throw new Error("Connecting to chain failed, as no connected account was found");
    }
    if (!chainId) {
        throw new Error("Connecting to chain failed, as no connected chain was found");
    }

    const { message } = await Moralis.Cloud.run("requestMessage", {
        address: account,
        chain: parseInt(chainId, 16),
        network: "evm",
    });

    await Moralis.authenticate({
        signingMessage: message,
        throwOnError: true,
    }).then((user) => {
        console.log(user);
    });
}

// Example
handleAuth('metamask')
```

  </TabItem>
  <TabItem value="react" label="React">

```javascript React
import { useMoralis } from 'react-moralis';
import Moralis from 'moralis-v1';

export const Example = () => {
  const { authenticate, enableWeb3 } = useMoralis();
  const [authError, setAuthError] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleAuth = async (provider) => {
    try {
      setAuthError(null);
      setIsAuthenticating(true);

      // Enable web3 to get user address and chain
      await enableWeb3({ throwOnError: true, provider });
      const { account, chainId } = Moralis;

      if (!account) {
        throw new Error('Connecting to chain failed, as no connected account was found');
      }
      if (!chainId) {
        throw new Error('Connecting to chain failed, as no connected chain was found');
      }

      // Get message to sign from the auth api
      const { message } = await Moralis.Cloud.run('requestMessage', {
        address: account,
        chain: parseInt(chainId, 16),
        network: 'evm',
      });

      // Authenticate and login via parse
      await authenticate({
        signingMessage: message,
        throwOnError: true,
      });
    } catch (error) {
      setAuthError(error);
    } finally {
      setIsAuthenticating(false);
    }
  };

	return (<div>
    <button onClick={() => handleAuth("metamask")}>Authenticate via metamask</button>
  </div>
  )
}
```

  </TabItem>
</Tabs>