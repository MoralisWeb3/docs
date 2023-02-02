---
title: "[API] Update to disable_total flag"
slug: "disable-total-set-to-true"
authors:
  name: Reuben Salisbury
---

As outlined in an [earlier update](https://docs.moralis.io/changelog/disable-total-for-faster-response-times), today we've made a change to the default behaviour of `disable_total` on a number of endpoints in order to vastly improve their response times.

This flag now defaults to `true` and the `total` response will be returned as `null`. Customers wanting to continue using the `total` will need to specify `disable_total=false` in their requests.

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
- [Get logs by contract](https://docs.moralis.io/web3-data-api/reference/get-contract-logs)
