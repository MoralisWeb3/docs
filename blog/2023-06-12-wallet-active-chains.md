---
title: "Cross-chain Wallet Age & Active Chains"
slug: "wallet-active-chains"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

From today you can now easily establish a wallet's age as well as detect which chains it has been active on 🔥

This latest endpointadded to our Wallet API, `/wallets/{address}/chains`, is our first truly cross-chain API. Rather than the usual `chain` query parameter, it has a new `chains` parameter, allowing you to specify one or many chains in one API call 🤩

For each chain that a wallet has been detected on, we return its `first_transaction` details and `last_transaction` details. 

Perfect for wallet analytics, user engagement, wallet age gated sites plus so much more 🙌

[Check out the docs](/web3-data-api/evm/reference/get-wallet-active-chains)
