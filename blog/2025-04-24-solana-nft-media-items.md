---
title: "Solana NFT Media Items Now Available"
slug: "solana-nft-media-items"
authors:
  name: Bharath Babu
tags: [Web3 Data API, Solana, NFT, Media]
---

# Solana NFT Media Items Now Available

## Changelog: Solana NFT Media Items Update

### Release Date: April 24, 2025

We're excited to announce that NFT Media Items are now available for Solana NFTs! This feature brings the same image preview capabilities that EVM users have enjoyed to our Solana API endpoints.

### What's New?

- **NFT Media Items for Solana**: Get image previews and media information for Solana NFTs
- **Processing Status**: Track the status of media processing for each NFT
- **Original Media URLs**: Access the original media URLs for all your NFTs

### Endpoints with NFT Media Support:

- **getNFTMetadata**
- **getNFTs**
- **getPortfolio**

### Media Response Format:

Each supported endpoint now returns a media object in the response with the following structure:

```json
"media": {
  "status": "processing",
  "originalMediaUrl": "https://madlads.s3.us-west-2.amazonaws.com/images/7256.png",
  "updatedAt": "2025-04-24T10:19:26.056Z"
}
```

### Key Benefits:

- **Enhanced NFT Display**: Show rich media previews in your NFT applications
- **Media Processing Status**: Know when media is being processed
- **Consistent Experience**: Same media features across EVM and Solana chains
- **Original Media Access**: Direct access to original media URLs

### Documentation:

For more information on how to use these endpoints with NFT media, please refer to our documentation:

- [Get NFT Metadata](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nft-metadata)
- [Get NFTs](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nfts)
- [Get Portfolio](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-portfolio)
