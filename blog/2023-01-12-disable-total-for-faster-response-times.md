---
title: "[API] New disable_total flag for faster response times"
slug: "disable-total-for-faster-response-times"
authors:
  name: Reuben Salisbury
---

In order to vastly improve the response times on a number of endpoints (by up to x10!), we are planning to phase out support for `total` within our API responses.

A new flag called `disable_total` exists on the below endpoints which defaults to `false`. When users set this to `true`, the `total` count from the response will return as `null`, and the endpoint's response time is greatly improved. We strongly recommend to begin using this flag.
A new flag called `disable_total` exists on the below endpoints which defaults to `false`. When users set this to `true`, the `total` count from the response will return as `null`, and the endpoint's response time is greatly improved. We strongly recommend to begin using this flag.

### Planned Change

From **February 1st 2023** the default value of `disable_total` will be set to `true`, and unless you specify `disable_total=false`, the `total` value will be returned as `null`.

### Example

Let's say you called the API using a request URL like this:
`https://deep-index.moralis.io/api/v2/${address}?chain=eth`

Notice that this request URL does not explicitly provide any parameter for `disable_total`

Up until Feb 1st, this request automatically defaults `disable_total` to `false` meaning you get the `total` count value in the reponse.

As from Feb 1st, this flag will default to `true` and the `total` response will return as `null`.

If you rely on a `total` count value, you will need to explicitly set the `disable_total` flag in your request to `false`:
`https://deep-index.moralis.io/api/v2/0x0a46413965858A6AC4ED5184d7643DC055A4feA3?chain=eth&disable_total=false`

### Endpoints

- [Get NFTs by wallet](/web3-data-api/evm/reference/get-wallet-nfts)
- [Get NFT Transfers by wallet](/web3-data-api/evm/reference/get-wallet-nft-transfers)
- [Get NFT collections by wallet](/web3-data-api/evm/reference/get-wallet-nft-collections)
- [Get NFTs by contract](/web3-data-api/evm/reference/get-contract-nfts)
- [Get NFTs owners by contract](/web3-data-api/evm/reference/get-nft-owners)
- [Get NFT transfers by contract](/web3-data-api/evm/reference/get-nft-contract-transfers)
- [Get NFT transfers from a block to block](/web3-data-api/evm/reference/get-nft-transfers-from-to-block)
- [Get NFT transfers by block](/web3-data-api/evm/reference/get-nft-transfers-by-block)
- [Get NFT trades by marketplace](/web3-data-api/evm/reference/get-nft-trades)
- [Get NFT transfers by token ID](/web3-data-api/evm/reference/get-nft-transfers)
- [Get NFT owners token ID](/web3-data-api/evm/reference/get-nft-token-id-owners)
- [Search NFTs](/web3-data-api/evm/reference/search-nfts)
- [Get ERC20 token transfers by wallet](/web3-data-api/evm/reference/get-wallet-token-transfers)
- [Get ERC20 token transfers by contract](/web3-data-api/evm/reference/get-token-transfers)
- [Get native transactions by wallet](/web3-data-api/evm/reference/get-wallet-transactions)
- [Get verbose transactions by wallet](/web3-data-api/evm/reference/get-wallet-transactions-verbose)
- [Get logs by contract](/web3-data-api/evm/reference/get-contract-logs)
