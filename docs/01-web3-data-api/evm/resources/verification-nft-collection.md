---
title: "Verification For NFT Collections"
slug: "../../evm/verification-nft-collections"
sidebar_position: 2
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

### What are Verified NFT Collections?

Verified NFT collections are those that have undergone a vetting process by an NFT marketplace. When you notice a checkmark next to an NFT collection on platforms like OpenSea, Rarible, or Blur, it typically means that the collection has been authenticated and verified by the marketplace itself.

This feature is invaluable for marketplace creators, wallet services, and analytics platforms where verification directly influences user confidence and the perceived legitimacy of a collection.

## Verification using NFT API

When you use [Moralis's NFT API endpoints](/web3-data-api/evm/reference/nft-api), you will notice a `verified_collection` property within the JSON Response. This property is to determine the authenticity of NFT collections by indicating if a contract is verified. This feature, similar to the blue tick verification on OpenSea, indicates whether a collection has been officially verified.

For example, when you use the [getWalletNFTCollections](/web3-data-api/evm/reference/get-wallet-nft-collections) endpoint, each collection returned will include a `verified_collection` property set to either `true` or `false`. The `true` indicates that the NFT collection is verified.

## Supported Chains

The verification feature is currently available for NFT collections on the following blockchains:

- Ethereum
- Polygon
- Binance Smart Chain
- Arbitrum
- Avalanche
- Optimism
