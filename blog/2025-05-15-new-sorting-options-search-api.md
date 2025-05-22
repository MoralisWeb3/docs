---
title: "New Sorting Options for Search API"
slug: "new-sorting-options-search-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API, Search API, Token Verification]
---

# New Sorting Options for Search API

## Changelog: Search API Sorting Enhancements

### Release Date: May 15, 2025

We're pleased to announce new customization options for our Search API that provide greater control over search results. These enhancements build upon our search API and are now available for all users.

### What's New?

- **Custom Sorting**: New `sortBy` parameter to order results by different metrics
- **Verified Contract Boosting**: Control whether verified tokens are prioritized in results

### Key Improvements:

#### New Query Parameter: sortBy

The `sortBy` parameter lets you sort search results by various metrics:

- `volume1hDesc` (default): Sort by 1-hour trading volume (highest first)
- `volume24hDesc`: Sort by 24-hour trading volume (highest first)
- `liquidityDesc`: Sort by liquidity amount (highest first)
- `marketCapDesc`: Sort by market capitalization (highest first)

This gives you greater flexibility in how search results are presented to your users, enabling use cases like finding the most liquid tokens or those with the highest market capitalization.

#### New Query Parameter: boostVerifiedContracts

- When set to `true` (default): Verified contracts (e.g., tokens listed on CoinGecko) are boosted in search rankings
- When set to `false`: Results are returned based purely on the search relevance without verification boosting

This parameter gives you control over whether verified tokens should be prioritized in search results, allowing for more customized search experiences.

### Use Cases:

- **Trading Platforms**: Sort tokens by recent volume to highlight actively traded assets
- **Investment Applications**: Sort by market cap to focus on established tokens
- **DeFi Explorers**: Sort by liquidity to find the most liquid trading pairs
- **Research Tools**: Toggle verification boosting for different research scenarios

For implementation details and examples, please refer to our [API documentation](/web3-data-api/evm/reference/search-tokens).
