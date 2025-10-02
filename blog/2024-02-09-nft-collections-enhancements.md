---
title: "NFT Collection Enhancements"
slug: "nft-collection-enhancements"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we've launched a number of enhancements to our NFT collection endpoints 🔥 They include:

<!-- truncate -->

- Richer NFT collection metadata
- Expansion of `verified_collection` status across more chains
- Token counts on NFT collections by wallet
- Bulk fetch NFT collection metadata

#### Richer Collection Metadata
We've added the following properties to our NFT Collection metadata:

- `collection_logo`
- `collection_banner_image` 
- `collection_category`
- `project_url`
- `wiki_url`
- `discord_url`
- `telegram_url`
- `twitter_username`
- `instagram_username`

Enhanced metadata can be found on the following endpoints:

- [Get NFT Collection metadata](/web3-data-api/evm/reference/get-nft-contract-metadata)
- [Get NFT Metadata](/web3-data-api/evm/reference/get-nft-metadata)
- [Get NFT Collections by wallet](/web3-data-api/evm/reference/get-wallet-nft-collections)
- [Get NFTs by wallet](/web3-data-api/evm/reference/get-wallet-nfts)
- [Get multiple NFTs](/web3-data-api/evm/reference/get-multiple-nfts)

#### Expansion of Verified Collections
Our `verified_collection` status, which was previously only supported on Ethereum, is now available on these additional chains:

- Polygon
- Binance
- Arbitrum
- Avalanche
- Optimism
- Base

This status reflects whether or not the collection has been verified on OpenSea.

#### Token Counts
We've introduced a new query parameter when fetching [NFT Collections by wallet](/web3-data-api/evm/reference/get-wallet-nft-collections) call `token_counts`. When set to `true`, this will add the total number of NFTs held in each collection by the wallet to the response data.

#### Bulk Fetch Collection Metadata
We've added a new endpoint, [Get metadata for multiple NFT Collections](/web3-data-api/evm/reference/get-nft-bulk-contract-metadata), that allows you to fetch metadata for up to 25 NFT collections in one request.



