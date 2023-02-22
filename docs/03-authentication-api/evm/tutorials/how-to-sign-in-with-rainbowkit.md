---
title: "How to Authenticate Users with RainbowKit"
slug: "../how-to-sign-in-with-rainbowkit"
description: "This tutorial will teach you how to add secure Web3 Moralis authentication to your NextJS application by walking you through the task of creating a full-stack Web3 authentication solution using the popular NextJS framework."
---

<video controls>
  <source src="/video/9dcbe29-rainbow.mp4"/>
</video>

## Before Starting

You can start this tutorial if you already have a NextJS dapp with [MetaMask sign-in](/authentication-api/evm/how-to-sign-in-with-metamask) functionality.

## RainbowKit Installation

```bash npm2yarn
npm install @rainbow-me/rainbowkit
```

## RainbowKit Configuration

Modify `pages/_app.jsx`:

```javascript
import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet } from "wagmi/chains";
import { SessionProvider } from "next-auth/react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const { provider, webSocketProvider, chains } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  // added connectors from rainbowkit
  connectors,
});

// added RainbowKitProvider wrapper
function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
```

## Authentication with RainbowKit

The logic we're achieving works as this. A user connects his wallet using `ConnectButton` from `rainbowkit`. Once the wallet is connected, we get `address` and `chain` from the following **wagmi** hooks: `useAccount()` and `useNetwork()`. In case the user is not authenticated, we will start the authentication flow (request and **sign** message).

1. Open the `pages/signin.jsx` file and replace the old `Authenticate via MetaMask` button with `<ConnectButton />` from `@rainbow-me/rainbowkit`:

```javascript
import { ConnectButton } from '@rainbow-me/rainbowkit';
...

return (
  <div>
  	<h3>Web3 Authentication</h3>
    <ConnectButton />
  </div>
);
...
```

2. Edit `handleAuth()` and move it under `useEffect()`:

```javascript
...
  useEffect(() => {
    const handleAuth = async () => {
      const { message } = await requestChallengeAsync({
        address: address,
        chainId: chain.id,
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
    if (status === "unauthenticated" && isConnected) {
      handleAuth();
    }
  }, [status, isConnected]);
...
```

3. Update missing imports and add new hooks. This is the final code of `pages/signin.jsx`:

```javascript
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { signIn, useSession } from "next-auth/react";
import { useAccount, useSignMessage, useNetwork } from "wagmi";
import { useEffect } from "react";

function SignIn() {
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const { status } = useSession();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();

  useEffect(() => {
    const handleAuth = async () => {
      const { message } = await requestChallengeAsync({
        address: address,
        chainId: chain.id,
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
    if (status === "unauthenticated" && isConnected) {
      handleAuth();
    }
  }, [status, isConnected]);

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <ConnectButton />
    </div>
  );
}

export default SignIn;
```

## Testing the RainbowKit Connector

Visit [`http://localhost:3000/signin`](http://localhost:3000/signin) to test authentication.

1. Click on `Connect Wallet`:

![Sign In Page](/img/content/240a10d-10.webp)

2. Select and connect a wallet you want to use for authentication from the RainbowKit modal:

![RainbowKit Modal](/img/content/17386f9-27.webp)

3. Sign the message:

![Signing the Message with MetaMask](/img/content/6ac66db-109.webp)

4. After successful authentication, you will be redirected to the `/user` page:

![User Page](/img/content/2642448-169.webp)

5. Visit [`http://localhost:3000/user`](http://localhost:3000/user) to test the user session's functionality:

- When a user is authenticated, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page.
- When a user is authenticated, we show the user's info on the page, even refreshing after the page. (_**Explanation:** After Web3 wallet authentication, the `next-auth` library creates a session cookie with an encrypted [JWT](https://jwt.io/introduction) [JWE] stored inside. It contains session info [such as an address and signed message] in the user's browser._)
