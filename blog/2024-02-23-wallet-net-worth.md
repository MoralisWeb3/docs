---
title: "Wallet Net-worth"
slug: "wallet-net-worth"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

We’ve just launched our [Wallet Net-worth endpoint](/web3-data-api/evm/reference/wallet-api/get-wallet-net-worth), allowing you to fetch the USD value of a wallet, across all chains and assets, with a **single API call** 🤯

This endpoint features three query parameters:

- `chains`: specify multiple chains 🥳
- `exclude_spam`: when set to `true`, this will exclude spam tokens from the calculation (**recommended**)
- `exclude_unverified_contracts`: when set to `true`, this will exclude tokens that are not verified on CoinGecko (**recommended**)

Check-out the [API reference for more information](/web3-data-api/evm/reference/wallet-api/get-wallet-net-worth), and see this endpoint in action over [on our YouTube channel](https://www.youtube.com/watch?v=TXsBAIcT6jA).
