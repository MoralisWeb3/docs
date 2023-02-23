---
title: "Client connection"
sidebar_position: 5
---

:::info overview
This guide will teach you how to **connect** to your **self-hosted Moralis Server** from different **client environments**. 
:::info

:::caution Important
The completion of the [**Local Environment Setup**](/web3-data-api/self-hosting-moralis-server/local-environment-setup) is required to continue.
The completion of the [**Production Environment Setup**](/web3-data-api/self-hosting-moralis-server/production-environment-setup) is **NOT required** but it is **strongly recommended**.
:::

## React App

### Get the sample project

:::info
To speed up the connection process, we have the [`parse-server-migration-react-client`](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/parse-server-migration-react-client) project ready for you.
:::

:::note
This project uses [`react-moralis`](https://github.com/MoralisWeb3/react-moralis), which is a thin wrapper on [`Moralis-JS-SDK-v1`](https://github.com/MoralisWeb3/Moralis-JS-SDK-v1).
:::

[**Download**](https://moralisweb3.github.io/Moralis-JS-SDK/downloads/parse-server-migration-react-client.zip) it and open it with your code editor:

![](/img/content/client-1.webp)

### Installation

Open the terminal and **install dependencies** by running:

```shell
yarn install
```

### Configuration

Run the following command to get the `.env` file:

```shell
cp .env.example .env
```

![](/img/content/client-2.webp)

Set the `REACT_APP_SERVER_URL` to your **`SERVER_URL`**:

```shell
REACT_APP_SERVER_URL = 'http://localhost:1337/server'
```

:::note
Your `SERVER_URL` will be different if you're [running your Moralis Server in a hosting service](/web3-data-api/self-hosting-moralis-server/deployment).
:::

Set the `REACT_APP_APPLICATION_ID` to your **`APPLICATION_ID`**:

```shell
REACT_APP_APPLICATION_ID = 001
```

### Testing

:::tip remember
Make sure your **self-hosted Moralis Server** is running, **locally** or in a **hosting service**.
:::

Run the client locally:

```shell
yarn start
```

Now you can try to ***Authenticate*** and for example ***getBlock*** data:

![](/img/content/client-3.webp)

### Information about `Authentication`

:::note
The following information serves as a *good-to-know*. The [`parse-server-migration-react-client`](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/parse-server-migration-react-client) project already implements it.
:::

The **authentication flow differs slightly** between the **self-hosted Moralis Server** and the **Moralis-hosted Server**. This is because the first is using the [**Auth Api**](https://docs.moralis.io/reference/requestchallengeevm). 

The following **code snippets** show how to handle it on a **`react-moralis` app** and how you would do it with **`Moralis-JS-SDK-v1`** alone.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="react-moralis">

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
  <TabItem value="javascript" label="Moralis-JS-SDK-v1" default>

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
</Tabs>

## Unity client

:::info
We will use the last release of the [**`unity-web3-game-kit`**](https://github.com/MoralisWeb3/unity-web3-game-kit).
:::

:::caution

:::

### Prerequisites

- 

### Installation

[Download the `.unitypackage`](https://github.com/MoralisWeb3/unity-web3-game-kit/releases/download/v1.2.11/moralisweb3sdk_v1_2_11.unitypackage) and drag it into your Unity project:

![](/img/content/unity-1.webp)

Import all the files:

![](/img/content/unity-2.webp)

The ***Moralis Web3 Setup*** panel will appear. Enter your `SERVER_URL` and your `APPLICATION_ID` and choose ***Done***:

![](/img/content/unity-3.webp)

:::note
Your `SERVER_URL` will be different if you're [running your Moralis Server in a hosting service](/web3-data-api/self-hosting-moralis-server/deployment).
:::

### Configuration

:::info overview
To use the **`unity-web3-game-kit`** with your **self-hosted Moralis Server** you need to **apply some modifications** to the package. 

This section goes through **all the steps** but if you need more help you can head over to the [**related forum thread**](https://forum.moralis.io/t/using-unity-sdk-with-self-hosted-server/20527).
:::

Open `Packages > Moralis Web3 Unity SDK package > Runtime > Kits > AuthenticationKit > Scripts > AuthenticationKit.cs`:

![](/img/content/unity-4.webp)

Edit the `getServerTime` code at lines 257 and 358 to check if the response is `null`: