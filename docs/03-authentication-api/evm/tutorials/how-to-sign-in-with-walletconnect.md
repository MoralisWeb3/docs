---
title: "How to Authenticate Users with WalletConnect"
slug: "../how-to-sign-in-with-walletconnect"
description: "This tutorial will teach you how to add secure Web3 Moralis authentication to your NextJS application by walking you through the process of creating a full-stack Web3 authentication solution using the popular NextJS framework."
---


## Before the Start

You can start this tutorial if you already have a NextJS dapp with [MetaMask](/authentication-api/evm/how-to-sign-in-with-metamask) functionality.

## Configuring the WalletConnect Connector

1. Open the`pages/signin.jsx` file and add `WalletConnectConnector` as a connector to `connectAsync()`. You should have your [Project ID](https://cloud.walletconnect.com/sign-in) for the WalletConnect configuration and replace `xxx` with it in the code below.

```javascript
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";

function SignIn() {
  const { connectAsync } = useConnect({
    connector: new WalletConnectConnector({
      options: { projectId: "xxx", showQrModal: true },
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

    const { account, chain } = await connectAsync();

    const { message } = await requestChallengeAsync({
      address: account,
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

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <button onClick={handleAuth}>Authenticate via WalletConnect</button>
    </div>
  );
}

export default SignIn;
```

## Testing the WalletConnect Connector

Visit [`http://localhost:3000/signin`](http://localhost:3000/signin`) to test authentication.

1. Click on `Authenticate via WalletConnect`:

![Sign In Page](/img/content/1a876b9-notconnected.webp)

2. Scan the QR code with your wallet:

![WalletConnect Modal](/img/content/2541b11-wc.webp)

3. Connect your wallet:

![TrustWallet Connect - Confirm](/img/content/0037a38-photo_2022-08-15_18-18-43.webp)

4. Sign the message:

![TrustWallet Message - Signing](/img/content/0242a69-photo_2022-08-15_18-18-44.webp)

5. Visit [`http://localhost:3000/user`](http://localhost:3000/user) to test the user session's functionality:

- When a user is authenticated, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page.
- When a user is authenticated, we show the user's info on the page, even refreshing after the page. (_Explanation: After Web3 wallet authentication, the `next-auth` library creates a session cookie with an encrypted [JWT](https://jwt.io/introduction) [JWE] stored inside. It contains session info [such as an address and signed message] in the user's browser._)
