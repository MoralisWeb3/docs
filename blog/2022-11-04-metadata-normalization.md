---
title: "Metadata Normalization 🔤"
slug: "metadata-normalization"
authors:
  name: Reuben Salisbury
tags: [API]
---

We just made working with NFT metadata a breeze! 💨 Get predictable, structured outputs at each endpoint thanks to our new built-in NFT API Metadata Normalization.

Taking the original source `metadata` field, which comes through the API as a string with an unpredictable format, we now output this into a nice clean, predictable object on the below endpoints - meaning it's now much easier for you to work with NFT metadata!

You'll find a new query parameter named `normalizeMetadata` on the below endpoints. When this is set to `true`, we normalize and transform the source metadata into a standardized structure (based on ERC721, CryptoPunks, OpenSea etc) and output this in a new object called `normalized_metadata`

**Endpoints**

- Get NFTs by wallet - `/{address}/nft`
- Get NFTs by contract - `/nft/{address}`
- Get NFT owners by contract - `/nft/{address}/owners`
- Get NFT metadata - `/nft/{address}/{token_id}`
- Get owners by token ID - `/nft/{address}/{token_id}/owners`
