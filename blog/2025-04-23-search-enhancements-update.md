---
title: "Search API Enhancements Update"
slug: "search-api-enhancements"
authors:
  name: Bharath Babu
tags: [Web3 Data API, Search API, Token Verification]
---

# Search API Enhancements Update

## Changelog: Search API Improvements

### Release Date: April 24, 2025

We're excited to announce several improvements to our Search API that enhance token search capabilities and relevance. These updates are now live and can be seen working on [Moralis.com](https://moralis.com).

<!-- truncate -->

### What's New?

- **Verified Tokens**: CoinGecko-listed tokens are now prioritized in search results
- **Verified Contract Filter**: New query parameter to filter for verified tokens only
- **Pair Address Search**: Search for tokens using pair addresses

### Key Improvements:

#### Verified Tokens Prioritization

- **Enhanced ranking algorithm** that gives higher scores to tokens listed on CoinGecko
- **Improved search relevance** by prioritizing verified tokens in results
- **Better quality results** for token searches across all supported chains

#### New Query Parameter: isVerifiedContract

- When set to `true`, this parameter will **filter results to only include verified tokens**
- Useful for applications that need to ensure token legitimacy
- Helps prevent display of unverified or potentially unsafe tokens

#### Pair Address Search Capability

- **Search for tokens by their pair address** on decentralized exchanges
- Enables new use cases for DEX analytics and trading applications
- Simplifies token discovery through liquidity pair relationships

### Use Cases:

- **DeFi Dashboards**: Display only verified tokens for enhanced security
- **Trading Applications**: Find tokens using their pair addresses
- **Token Explorers**: Provide higher quality search results with verified tokens prioritized
- **Portfolio Trackers**: Ensure tracked tokens are verified for accurate valuations

For more information, please refer to our [API documentation](/web3-data-api/evm/reference/search-tokens).
