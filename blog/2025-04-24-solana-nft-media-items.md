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
- **Multiple Resolution Options**: Each NFT includes low (100x100), medium (250x250), and high (500x500) resolution images
- **Processing Status**: Track the status of media processing for each NFT
- **Media Type Information**: Get mimetype and other media metadata
- **Original Media URLs**: Access the original media URLs for all your NFTs

### Endpoints with NFT Media Support:

- **getNFTMetadata**
- **getNFTs**
- **getPortfolio**

### Media Response Format:

Each supported endpoint now returns a media object in the response with the following structure:

```json
"media": {
  "status": "success",
  "updatedAt": "2025-04-21T16:34:37.665Z",
  "mimetype": "image/png",
  "parent_hash": "0xd74c7c0ec9fdc611cb86317d7505be611a38feeb2abfea866bb9b695c6ac358e",
  "media_collection": {
    "low": {
      "height": 100,
      "width": 100,
      "url": "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0x22429fbf9d7fccfdcd86bb1f4a8551127c408c920b392e220b43b4b89a3e9b4e/low.png"
    },
    "medium": {
      "height": 250,
      "width": 250,
      "url": "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0x22429fbf9d7fccfdcd86bb1f4a8551127c408c920b392e220b43b4b89a3e9b4e/medium.png"
    },
    "high": {
      "height": 500,
      "width": 500,
      "url": "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0x22429fbf9d7fccfdcd86bb1f4a8551127c408c920b392e220b43b4b89a3e9b4e/high.png"
    }
  },
  "original_media_url": "https://www.larvalabs.com/cryptopunks/cryptopunk001.png"
}
```

### Key Benefits:

- **Multiple Resolution Options**: Access low, medium, and high-resolution versions of NFT images
- **Enhanced NFT Display**: Show rich media previews in your NFT applications
- **Media Format Information**: Get mimetype and detailed media metadata
- **Consistent Experience**: Same media features across EVM and Solana chains
- **Original Media Access**: Direct access to original media URLs

### Documentation:

For more information on how to use these endpoints with NFT media, please refer to our documentation:

- [Get NFT Metadata](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nft-metadata)
- [Get NFTs](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nfts)
- [Get Portfolio](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-portfolio)
