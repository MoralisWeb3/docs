---
title: "How to Authenticate Users with Magic.Link"
slug: "../how-to-sign-in-with-magiclink"
description: "This tutorial will teach you how to add secure Web3 Moralis authentication to your NextJS application by walking you through the task of creating a full-stack Web3 authentication solution using the popular NextJS framework."
---

This tutorial will teach you how to add secure Web3 Moralis authentication to your NextJS application by walking you through the task of creating a full-stack Web3 authentication solution using the popular NextJS framework.

<video controls>
  <source src="/video/3e566e9-magic.mp4"/>
</video>

## Before Starting

You can start this tutorial if you already have a NextJS dapp with [MetaMask sign-in](/authentication-api/how-to-sign-in-with-metamask) functionality.

## Installing the Magic Connector

[WAGMI Magic Connector](https://www.npmjs.com/package/@everipedia/wagmi-magic-connector) - the easiest way to add [Magic.Link authentication](https://magic.link/auth) for dapps using [wagmi](https://wagmi.sh/):

```bash npm2yarn
npm install @everipedia/wagmi-magic-connector
```

## Configuring the Magic Connector

1. Open the`pages/signin.jsx` file and add `MagicConnector` as a connector to the `useConnect()` hook:

```javascript
import { MagicAuthConnector } from "@everipedia/wagmi-magic-connector";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";

function SignIn() {
  const { connectAsync } = useConnect({
    connector: new MagicAuthConnector({
      options: {
        apiKey: "YOUR_MAGIC_LINK_API_KEY", //required
      },
    }),
  });
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
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
      <button onClick={() => handleAuth()}>Authenticate via Magic.Link</button>
    </div>
  );
}

export default SignIn;
```

## Testing the WalletConnect Connector

Visit [`http://localhost:3000/signin`](http://localhost:3000/signin) to test authentication.

1. Click on `Authenticate via Magic.Link`:

![Sign In Page](/img/content/68b667b-122.webp)

2. Enter your email:

![Magic.Link Modal](/img/content/6818115-73.webp)

3. Verify the login from your email:

![Message from Magic.Link in Gmail](/img/content/e26217b-204.webp)

4. After successful authentication, you will be redirected to the `/user` page:

![User Page](/img/content/afe14c1-391.webp)

5. Visit [`http://localhost:3000/user`](http://localhost:3000/user) to test the user session's functionality:

- When a user is authenticated, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page.
- When a user is authenticated, we show the user's info on the page, even refreshing after the page. (_**Explanation:** After Web3 wallet authentication, the `next-auth` library creates a session cookie with an encrypted [JWT](https://jwt.io/introduction) [JWE] stored inside. It contains session info [such as an address and signed message] in the user's browser._)
