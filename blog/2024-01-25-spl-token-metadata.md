---
title: "SPL Token Metadata"
slug: "spl-token-metadata"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API, Solana API]
---

We've launched a new endpoint that allows you to fetch SPL Token metadata on Solana 🔥 

In the same way you could already fetch NFT metadata, it's now possible to fetch metadata for all SPL tokens. For each token we return:

- Mint
- Standard
- Name
- Symbol
- Metaplex details

We are aware of a bug on our current [NFT Metadata endpoint](https://docs.moralis.io/web3-data-api/solana/reference/get-sol-nft-metadata), which returns SPL Token metadata for certain tokens. If you are using the NFT endpoint in this way, we strongly advise that you begin using the new SPL Token Metadata endpoint.

Try it out over on our [Solana swagger](https://solana-gateway.moralis.io/api/#/Token/getTokenMetadata).
