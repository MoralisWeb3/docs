---
title: "Authentication API"
sidebar_label: "Overview"
slug: "/authentication-api/evm"
sidebar_position: 1
description: "Auth API allows your user to authenticate and verify signed messages with their web3 wallets when using your dapp."
sidebar_class_name: "sidebar-overview"
---




## What is the Auth API?

Auth API allows your user to authenticate and verify signed messages with their web3 wallets when using your dapp. Built accordingly to the [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) standard, enables your user to do off-chain authentication with their EVM or Solana-compatible wallets to establish user sessions with your dapp.

## What are the benefits of the Auth API?

We developed the Auth API to simplify the process of managing different wallets and blockchain networks when building the backend for moralis.com.

With the Auth API, every user is assigned a unique `profileId`, regardless of which wallet or blockchain they use to log in.

This approach allows us to design a backend where users are identified by their `profileId`, making it easier to add support for additional blockchains and wallets without modifying the backend.

If your application needs to support multiple blockchains and wallets, the Auth API could be a valuable solution.

## Can you use Auth API with Magic.link, Privy, Web3Auth and other MPC wallets/Web3 Authentication methods?

Yes, as long as you can sign a message using the user's private key, you can use any type of web3 wallet or authentication method.

At moralis.com, we offer Magic.link as an option for users to log in. To support Magic.link we use the Auth API in exactly the same way as we would in order to support Metamask or any other wallet.

Here are some tutorials on this topic:


  - <a href="/authentication-api/evm/how-to-sign-in-with-web3authio">How to Authenticate Users with Web3Auth</a>
  - <a href="/authentication-api/evm/how-to-sign-in-with-magiclink">How to Authenticate Users with Magic.Link</a>


## Auth API Features

The Auth API provides out-of-the-box all the necessary APIs you need to authenticate your user wallet to your dapp, which includes:

- Requesting challenge message for wallet signature on both [EVM](/authentication-api/evm/reference/request-challenge-evm) and [Solana](/authentication-api/solana/reference/request-challenge-solana)
- Verifying signed challenge message signature on both [EVM](https://swagger.moralis.io/auth/#/Challenge/verifyChallengeEvm) and [Solana](https://swagger.moralis.io/auth/#/Challenge/verifyChallengeSolana)

:::info

The Auth API currently does not support [EIP-1271](https://eips.ethereum.org/EIPS/eip-1271) signature. Therefore, authentication using the Auth API with smart contract wallet is impossible.

:::

## How Does it Work?

![](/img/content/bcd1597-image.webp)

## Popular use cases

The use cases for our Auth API are truly endless! Some popular use cases include:


  - <a href="/authentication-api/evm/how-to-sign-in-with-metamask">How to Authenticate Users with Metamask</a>
  - <a href="/authentication-api/evm/how-to-sign-in-with-walletconnect">How to Authenticate Users with WalletConnect</a>
  - <a href="/authentication-api/evm/how-to-sign-in-with-rainbowkit">How to Authenticate Users with RainbowKit</a>
  - <a href="/authentication-api/evm/how-to-sign-in-with-coinbase-wallet">How to Authenticate Users with Coinbase Wallet</a>
  - <a href="/authentication-api/evm/how-to-sign-in-with-web3authio">How to Authenticate Users with Web3Auth</a>
  - <a href="/authentication-api/evm/how-to-sign-in-with-magiclink">How to Authenticate Users with Magic.Link</a>
  - <a href="/authentication-api/evm/how-to-sign-in-with-particle">How to Authenticate Users with Particle Network</a>

