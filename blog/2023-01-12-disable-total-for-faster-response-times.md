---
title: "[API] New disable_total flag for faster response times"
slug: "disable-total-for-faster-response-times"
authors:
  name: Reuben Salisbury
---

In order to vastly improve the response times on a number of endpoints (by up to x10!), we are planning to phase out support for `total` within our API responses.

A new flag called `disable_total` exists on the below endpoints which defaults to `false`. When users set this to `true`, the `total` count from the response will return as `null`, and the endpoint's response time is greatly improved. We strongly recommend to begin using this flag. 

### Planned Change
From **February 1st 2023** the default value of `disable_total` will be set to `true`, and unless you specify `disable_total=false`, the `total` value will be returned as `null`.

### Endpoints

- [Get NFTs by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-nfts)
- [Get NFT Transfers by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-nft-transfers)
- [Get NFT collections by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-nft-collections)
- [Get NFTs by contract](https://docs.moralis.io/web3-data-api/reference/get-contract-nfts)
- [Get NFTs owners by contract](https://docs.moralis.io/web3-data-api/reference/get-nft-owners)
- [Get NFT transfers by contract](https://docs.moralis.io/web3-data-api/reference/get-nft-contract-transfers)
- [Get NFT transfers from a block to block](https://docs.moralis.io/web3-data-api/reference/get-nft-transfers-from-to-block)
- [Get NFT transfers by block](https://docs.moralis.io/web3-data-api/reference/get-nft-transfers-by-block)
- [Get NFT trades by marketplace](https://docs.moralis.io/web3-data-api/reference/get-nft-trades)
- [Get NFT transfers by token ID](https://docs.moralis.io/web3-data-api/reference/get-nft-transfers)
- [Get NFT owners token ID](https://docs.moralis.io/web3-data-api/reference/get-nft-token-id-owners)
- [Search NFTs](https://docs.moralis.io/web3-data-api/reference/search-nfts)
- [Get ERC20 token transfers by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-token-transfers)
- [Get ERC20 token transfers by contract](https://docs.moralis.io/web3-data-api/reference/get-token-transfers)
- [Get native transactions by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-transactions)
- [Get verbose transactions by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-transactions-verbose)
- [Get logs by contract](https://docs.moralis.io/web3-data-api/reference/get-contract-logs)
