---
title: "Authentication API"
sidebar_label: "Overview"
slug: "/authentication-api/evm"
sidebar_position: 1
description: "Auth API allows your user to authenticate and verify signed messages with their web3 wallets when using your dapp."
sidebar_class_name: "sidebar-overview"
--- 

![](/img/content/594b455-image.webp)

## What is the Auth API?

Auth API allows your user to authenticate and verify signed messages with their web3 wallets when using your dapp. Built accordingly to the [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) standard, enables your user to do off-chain authentication with their EVM or Solana-compatible wallets to establish user sessions with your dapp.

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

- [How to Authenticate Users with Metamask](/authentication-api/evm/how-to-sign-in-with-metamask)
- [How to Authenticate Users with WalletConnect](/authentication-api/evm/how-to-sign-in-with-walletconnect)
- [How to Authenticate Users with RainbowKit](/authentication-api/evm/how-to-sign-in-with-rainbowkit)
- [How to Authenticate Users with Coinbase Wallet](/authentication-api/evm/how-to-sign-in-with-coinbase-wallet)
- [How to Authenticate Users with Web3Auth](/authentication-api/evm/how-to-sign-in-with-web3authio)
- [How to Authenticate Users with Magic.Link](/authentication-api/evm/how-to-sign-in-with-magiclink)
- [How to Authenticate Users with Particle Network](/authentication-api/evm/how-to-sign-in-with-particle)
