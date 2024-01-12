---
title: "NFT Image Previews ⚡"
slug: "nft-image-previews"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Time to optimize your NFTs!

All NFTs served through our API now include an optional `media` object that includes `low`, `medium` and `high` resolution thumbnails, along with the original image 🎉

This makes it super easy to build apps and webpages that are optimized for speed and that load in a flash ⚡

<!--truncate-->

This feature is now live across the following EVM endpoints, when using the new query parameter `media_items=true`:

* [Get Multiple NFTs](/web3-data-api/evm/reference/get-multiple-nfts)
* [Get NFTs by wallet](/web3-data-api/evm/reference/get-wallet-nfts)
* [Get NFTs by contract](/web3-data-api/evm/reference/get-contract-nfts)
* [Get NFT owners by contract](/web3-data-api/evm/reference/get-nft-owners)
* [Get NFT owners by token id](/web3-data-api/evm/reference/get-nft-token-id-owners)
* [Get NFT metadata](/web3-data-api/evm/reference/get-nft-metadata)

For more information about this feature, including how it impacts pricing, [check out our docs](/web3-data-api/evm/nft-image-previews).

Happy optimizing! ✨
