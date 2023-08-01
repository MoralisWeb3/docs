---
title: "Verified Collections & Spam Filtering"
slug: "verified-collections"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

[![verified collections video](https://github.com/MoralisWeb3/docs/assets/13417464/833af97f-b2da-4dfa-9854-4dc2b18888bd)](https://www.youtube.com/watch?v=UZoAu9YG3Nw)

Our NFT API now includes a new property called `verified_collections` 🎉 This property can be `true` or `false`, and reflects whether or not the collection has been verified on OpenSea. This new property can be field on all NFT endpoints.

Additionally, we have added a new query parameter called `exclude_spam`. When this is set to `true`, any NFTs that have been marked as spam will be excluded from the API response. This query parameter is available on [get NFTs by wallet](/web3-data-api/evm/reference/wallet-api/get-nfts-by-wallet) as well as [get NFT collections by wallet](/web3-data-api/evm/reference/wallet-api/get-nft-collections-by-wallet).
