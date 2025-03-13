---
title: "New Volume Stats APIs"
slug: "volume-stats-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API]
---

## Changelog: Volume Stats APIs

### Release Date: February 22, 2025

We're excited to introduce our new Volume Stats APIs! These powerful new endpoints provide comprehensive volume statistics across multiple chains and token categories, enabling developers to analyze trading activity and track volume trends over time.

### What's New?

| Name                                   | Description                                 | API Reference                                                                           |
| -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Get Volume Stats By Chain**          | Get volume statistics by chain              | [Method Documentation](/web3-data-api/evm/reference/get-volume-stats-by-chain)          |
| **Get Volume Stats By Category**       | Get volume and chain data by categories     | [Method Documentation](/web3-data-api/evm/reference/get-volume-stats-by-category)       |
| **Get Time Series Volume**             | Retrieve timeseries volume data by chain    | [Method Documentation](/web3-data-api/evm/reference/get-time-series-volume)             |
| **Get Time Series Volume By Category** | Retrieve timeseries volume data by category | [Method Documentation](/web3-data-api/evm/reference/get-time-series-volume-by-category) |

### Key Features:

- **Cross-Chain Volume Metrics**:

  - Total trading volume across multiple timeframes (5m, 1h, 6h, 24h)
  - Active wallet statistics
  - Transaction count metrics
  - Support for all major EVM chains and Solana

- **Category-Based Analysis**:

  - Volume breakdowns by token categories (DeFi, AI, Gaming, etc.)
  - Buy/sell volume ratios
  - Buyer and seller counts by category
  - Transaction counts and trading activity metrics

- **Historical Timeseries Data**:
  - Volume trends across customizable timeframes (1d, 7d, 30d)
  - Category-specific buy/sell volume comparisons
  - Historical performance tracking for chains and categories

### Example Use Cases:

- **Market Analysis**: Compare trading volumes across different blockchains
- **Sector Tracking**: Monitor which token categories are seeing increased activity
- **Trend Identification**: Spot emerging trends in blockchain usage and adoption
- **Trading Strategy Development**: Analyze volume patterns for trading signal development

### Getting Started

To start using the Volume Stats APIs, check out our [documentation](/web3-data-api/reference/get-volume-stats-by-chain) for detailed usage examples and integration guides.
