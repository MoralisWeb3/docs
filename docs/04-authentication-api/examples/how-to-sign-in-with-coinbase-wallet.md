---
title: "How to sign in with Coinbase Wallet"
slug: "how-to-sign-in-with-coinbase-wallet"
excerpt: "This tutorial will teach you how to add secure Web3 Moralis authentication to your NextJS application by walking you through creating a full-stack Web3 authentication solution using the popular NextJS framework."
hidden: false
createdAt: "2022-08-15T10:52:16.468Z"
updatedAt: "2022-12-03T06:29:05.269Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/50e491e-cb.gif",
        "cb.gif",
        750
      ],
      "caption": "Web3 Moralis Authentication with Coinbase Wallet - Result"
    }
  ]
}
[/block]

## Before Starting

You can start this tutorial if you already have a NextJS dapp with [MetaMask sign-in](doc:sign-in-with-metamask) functionality. 

## Configuring the Coinbase Wallet Connector

1. Open the `pages/signin.jsx` file and add `CoinbaseWalletConnector` as a connector to `connectAsync()`:

```javascript
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { signIn } from 'next-auth/react'
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi'
import { useRouter } from 'next/router'
import axios from 'axios'

function SignIn() {
  const { connectAsync } = useConnect()
  const { disconnectAsync } = useDisconnect()
  const { isConnected } = useAccount()
  const { signMessageAsync } = useSignMessage()
  const { push } = useRouter()

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync()
    }

    const { account, chain } = await connectAsync({
      connector: new CoinbaseWalletConnector({
        options: {
          appName: 'youramazing.finance',
        },
      }),
    })

    const userData = { address: account, chain: chain.id, network: 'evm' }

    const { data } = await axios.post('/api/auth/request-message', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const message = data.message

    const signature = await signMessageAsync({ message })

    // redirect user after success authentication to '/user' page
    const { url } = await signIn('credentials', {
      message,
      signature,
      redirect: false,
      callbackUrl: '/user',
    })
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url)
  }

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <button onClick={() => handleAuth()}>Authenticate via Coinbase Wallet</button>
    </div>
  )
}

export default SignIn
```



## Testing the Coinbase Wallet Connector

Visit [`http://localhost:3000/signin`](http://localhost:3000/signin) to test authentication.

1. Click on `Authenticate via Coinbase Wallet`:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0ead0ca-8.png",
        "8.png",
        750
      ],
      "caption": "Sign In Page"
    }
  ]
}
[/block]

2. Connect Coinbase Wallet:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/532fc36-42.png",
        "42.png",
        750
      ],
      "caption": "Coinbase Wallet - Connecting"
    }
  ]
}
[/block]

3. Sign the message:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f486cbb-84.png",
        "84.png",
        750
      ],
      "caption": "Signing the Message"
    }
  ]
}
[/block]

4. After successful authentication, you will be redirected to the `/user` page:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a45ec1e-122.png",
        "122.png",
        750
      ],
      "caption": "User Page"
    }
  ]
}
[/block]

5. Visit [`http://localhost:3000/user`](http://localhost:3000/user) to test the user session's functionality: 

- When a user is authenticated, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page. 
- When a user is authenticated, we show the user's info on the page, even refreshing after the page. (_**Explanation**: After Web3 wallet authentication, the `next-auth` library creates a session cookie with an encrypted [JWT](https://jwt.io/introduction) [JWE] stored inside. It contains session info [such as an address and signed message] in the user's browser._)