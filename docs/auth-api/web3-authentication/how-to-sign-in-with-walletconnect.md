---
title: "How to sign in with WalletConnect"
slug: "how-to-sign-in-with-walletconnect"
excerpt: "This tutorial will teach you how to add secure Web3 Moralis authentication to your NextJS application by walking you through the process of creating a full-stack Web3 authentication solution using the popular NextJS framework."
hidden: false
createdAt: "2022-08-15T10:18:30.441Z"
updatedAt: "2022-12-03T06:28:45.958Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5ded2e2-morsign.gif",
        "morsign.gif",
        650
      ],
      "caption": "End Result of Using Web3 Moralis Authentication with WalletConnect"
    }
  ]
}
[/block]

## Before the Start

You can start this tutorial if you already have a NextJS dapp with [MetaMask](doc:sign-in-with-metamask) functionality. 

## Configuring the WalletConnect Connector

1. Open the`pages/signin.jsx` file and add `WalletConnectConnector` as a connector to `connectAsync()`:

```javascript
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';

function SignIn() {
    const { connectAsync } = useConnect({
            connector: new WalletConnectConnector({ options: { qrcode: true } }),
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

        const { message } = await requestChallengeAsync({ address: account, chainId: chain.id });

        const signature = await signMessageAsync({ message });

        // redirect user after success authentication to '/user' page
        const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/user' });
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

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1a876b9-notconnected.png",
        "notconnected.png",
        674
      ],
      "sizing": "80",
      "caption": "Sign In Page"
    }
  ]
}
[/block]

2. Scan the QR code with your wallet:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2541b11-wc.png",
        "wc.png",
        672
      ],
      "sizing": "80",
      "caption": "WalletConnect Modal"
    }
  ]
}
[/block]

3. Connect your wallet:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0037a38-photo_2022-08-15_18-18-43.jpg",
        "photo_2022-08-15_18-18-43.jpg",
        591
      ],
      "sizing": "80",
      "caption": "TrustWallet Connect - Confirm"
    }
  ]
}
[/block]

4. Sign the message:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0242a69-photo_2022-08-15_18-18-44.jpg",
        "photo_2022-08-15_18-18-44.jpg",
        591
      ],
      "sizing": "80",
      "caption": "TrustWallet Message - Signing"
    }
  ]
}
[/block]

5. Visit [`http://localhost:3000/user`](http://localhost:3000/user) to test the user session's functionality: 

- When a user is authenticated, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page. 
- When a user is authenticated, we show the user's info on the page, even refreshing after the page. (_Explanation: After Web3 wallet authentication, the `next-auth` library creates a session cookie with an encrypted [JWT](https://jwt.io/introduction) [JWE] stored inside. It contains session info [such as an address and signed message] in the user's browser._)