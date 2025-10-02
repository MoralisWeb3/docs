---
title: "Enhanced Solana NFT Metadata API"
slug: "solana-nft-metadata-api-update"
authors:
  name: Bharath Babu
tags: [Web3 Data API, Solana, NFT, Metadata]
---

## Changelog: Solana NFT Metadata API Update

### Release Date: April 5, 2025

We're excited to announce significant improvements to our Solana NFT Metadata API! This update enhances the response structure and expands the metadata information returned when querying NFT details on Solana.

<!-- truncate -->

### What's Updated?

| Name                 | Description                                                   | API Reference                                                                |
| -------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Get NFT Metadata** | Enhanced NFT metadata retrieval with expanded response format | [Method Documentation](/web3-data-api/solana/reference/get-sol-nft-metadata) |

### Key Improvements:

- **Expanded Response Format**:

  - Added comprehensive NFT attributes section with trait types and values
  - Included detailed contract information with token type and symbol
  - Added collection details including external links and verification status
  - Incorporated creator information with share percentages and verification status

- **Enhanced Metadata Structure**:

  - Standardized image URL references across different metadata sources
  - Added separate fields for original content URLs and external references
  - Improved metadata origination tracking with explicit source URLs
  - Added token minting and creation timestamps

- **New Properties Section**:
  - Added file information with content type and URI references
  - Included category classification for improved filtering
  - Creator attribution with share percentages
  - Additional properties specific to NFT collections

### Response Format Changes:

The API now returns a significantly more comprehensive response that includes:

- **Before**: Basic token information with limited metadata

  - Mint address, name, symbol
  - Simple metadata URL reference
  - Limited seller fee information
  - Basic mintable status

- **After**: Detailed NFT information with complete metadata
  - Complete NFT address and identification details
  - Comprehensive description and image references
  - Detailed attribute listing with trait types and values
  - Contract information with token standards
  - Collection association and verification
  - Creator details with share percentages
  - File properties and category information
  - Creation timestamps and transaction details

### Example Use Cases:

- **NFT Marketplaces**: Display richer NFT details including traits and creator information
- **Collection Analytics**: Better analyze NFT collections with improved metadata consistency
- **Creator Attribution**: Properly credit and compensate NFT creators with verified share information
- **Enhanced Filtering**: Build more powerful search and filtering using the expanded attributes data

### Breaking Changes:

- Response format now follows a more structured hierarchy with nested objects
- Some field names have been standardized for consistency
- For backward compatibility, applications should be updated to handle both response formats
