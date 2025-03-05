---
title: "New Token Analytics APIs"
slug: "token-analytics-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API]
---

## Changelog: Token Analytics APIs

### Release Date: February 28, 2025

We're excited to announce the release of powerful new Token Analytics APIs for both EVM chains and Solana! These new endpoints enable developers to retrieve comprehensive analytics for tokens, including volume metrics, transaction counts, and valuation data.

### What's New?

| Name                             | Description                                             | API Reference                                                                     |
| -------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Get Token Analytics**          | Get comprehensive analytics for a specific token        | [Method Documentation](/web3-data-api/evm/reference/get-token-analytics)          |
| **Get Multiple Token Analytics** | Fetch analytics for multiple tokens in a single request | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-analytics) |

### Key Features:

- **Detailed Volume Metrics**:

  - Buy/sell volume breakdowns across multiple timeframes (5m, 1h, 6h, 24h)
  - Total transaction counts for buys and sells
  - Active buyer and seller counts

- **Valuation Data**:

  - Current liquidity in USD
  - Fully diluted valuation
  - Market capitalization metrics

- **Cross-Chain Support**:
  - Available for all major EVM chains (Ethereum, Polygon, BSC, etc.)
  - Full Solana integration with comparable metrics

### Example Use Cases:

- **Token Analysis**: Comprehensive analysis of token performance metrics
- **Market Monitoring**: Track buy/sell ratios and transaction volumes
- **Liquidity Assessment**: Evaluate token liquidity and trading activity
- **Multi-Chain Comparison**: Compare token performance across different blockchains

### Getting Started

To start using the new Token Analytics APIs, check out our [documentation](/web3-data-api/evm/reference/get-token-analytics) for detailed usage examples and integration guides.
