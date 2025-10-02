---
title: "New Multiple Token Prices APIs"
slug: "multiple-token-prices-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API, Solana]
---

## Changelog: Multiple Token Prices APIs

### Release Date: February 15, 2025

We're pleased to announce the release of our Multiple Token Prices API for Solana! This new endpoint allows developers to retrieve pricing information for multiple Solana tokens in a single request, significantly improving efficiency for applications tracking multiple assets.

<!-- truncate -->

### What's New?

| Name                          | Description                                   | API Reference                                                                     |
| ----------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------- |
| **Get Multiple Token Prices** | Get prices for multiple Solana tokens at once | [Method Documentation](/web3-data-api/solana/reference/get-multiple-token-prices) |

### Key Features:

- **Bulk Price Retrieval**:

  - Fetch prices for multiple tokens in a single API call
  - Reduce network overhead and latency for multi-token applications
  - Optimized for tracking large token portfolios or watchlists

- **Comprehensive Price Data**:

  - Current USD and native SOL prices
  - 24-hour price changes (absolute and percentage)
  - Exchange and liquidity pair information
  - Token metadata (name, symbol, logo)

- **Exchange Details**:
  - Source exchange information
  - Pair addresses for direct trading
  - Exchange identification for routing transactions

### Example Use Cases:

- **Portfolio Tracking**: Track multiple Solana tokens efficiently
- **Price Comparison**: Compare token prices across multiple assets
- **Trading Dashboards**: Build price monitoring dashboards with lower API overhead
- **Watchlist Applications**: Create token watchlists with real-time pricing

### Getting Started

To start using the Multiple Token Prices API, check out our [documentation](/web3-data-api/solana/reference/get-multiple-token-prices) for detailed usage examples and integration guides.
