---
title: "How to Authenticate Users with Web3Auth"
slug: "../how-to-sign-in-with-web3authio"
description: "This tutorial will teach you how to add secure Web3 Moralis authentication to your NextJS application by walking you through the process of developing a full-stack Web3 authentication solution using the popular NextJS framework."
---

<video controls>
  <source src="/video/2ebfdfe-web3auth.mp4"/>
</video>

## What is Web3Auth?

:::info

Visit [Web3Auth docs](https://web3auth.io/docs/index.html) to get more information.

:::

Web3Auth is a pluggable auth infrastructure for Web3 wallets and applications. It streamlines the onboarding of mainstream and crypto-native users in under a minute by providing experiences they're most comfortable with. With support for all social logins, web and mobile-native platforms, wallets, and other key management methods, Web3Auth results in a standard cryptographic key provider specific to the user and application.

## Before Starting

You can start this tutorial if you already have a NextJS dapp with [MetaMask sign-in](/authentication-api/how-to-sign-in-with-metamask) functionality.

## Installing the Web3Auth Wagmi Connector

Install the `@web3auth/web3auth-wagmi-connector` dependency:

```bash npm2yarn
npm install @web3auth/web3auth-wagmi-connector@1.0.0
```

## Configuring the Web3Auth Wagmi Connector

1. Open the `pages/signin.jsx` file and add `Web3AuthConnector` as a connector to the `useConnect()` hook:

```javascript
import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";

function SignIn() {
  const { connectAsync } = useConnect({
    connector: new Web3AuthConnector({
      chains: ["0x1"],
      options: {
        clientId: "YOUR_CLIENT_ID", // Get your own client id from https://dashboard.web3auth.io
      },
    }),
  });
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account } = await connectAsync();

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: "0x1",
    });

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
  };

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <button onClick={() => handleAuth()}>Authenticate via Web3Auth</button>
    </div>
  );
}

export default SignIn;
```

## Testing the Web3Auth Connector

Visit [`http://localhost:3000/signin`](http://localhost:3000/signin) to test authentication.

1. Click on `Authenticate via Web3Auth`:

![Sign In Page](/img/content/6cccf79-17.webp)

2. Select the preferred sign-in method:

![Web3Auth Authentication](/img/content/e8fa976-26.webp)

3. After successful authentication, you will be redirected to the `/user` page:

![User Page](/img/content/e6f4aef-433.webp)

4. Visit [`http://localhost:3000/user`](http://localhost:3000/user) to test the user session's functionality:

- When a user is authenticated, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page.
- When a user is authenticated, we show the user's info on the page, even refreshing after the page. (_**Explanation:** After Web3 wallet authentication, the `next-auth` library creates a session cookie with an encrypted [JWT](https://jwt.io/introduction) [JWE] stored inside. It contains session info [such as an address and signed message] in the user's browser._)
