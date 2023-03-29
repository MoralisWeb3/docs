---
title: "Update to disable_total flag"
slug: "disable-total-set-to-true"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

As outlined in an [earlier update](/changelog/disable-total-for-faster-response-times), today we've made a change to the default behaviour of `disable_total` on a number of endpoints in order to vastly improve their response times.

This flag now defaults to `true` and the `total` response will be returned as `null`. Customers wanting to continue using the `total` will need to specify `disable_total=false` in their requests.

<!--truncate-->

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
- [Get logs by contract](/web3-data-api/evm/reference/get-contract-logs)
