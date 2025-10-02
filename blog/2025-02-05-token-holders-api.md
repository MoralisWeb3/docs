---
title: "New Token Holders APIs"
slug: "token-holders-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API]
---

## Changelog: Token Holders APIs

### Release Date: February 5, 2025

We're excited to announce the release of new Token Holders APIs for EVM chains! These powerful new tools enable developers to analyze token holder data, track holder changes over time, and get detailed holder statistics.

<!-- truncate -->

### What's New?

| Name                             | Description                                                           | API Reference                                                                     |
| -------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Get Token Owners**             | Get detailed list of current token holders with balances and metadata | [Method Documentation](/web3-data-api/evm/reference/get-token-holders)            |
| **Get Token Holder Stats**       | Get comprehensive holder statistics and distribution metrics          | [Method Documentation](/web3-data-api/evm/reference/get-token-holder-stats)       |
| **Get Historical Token Holders** | Track holder changes over time with detailed timeseries data          | [Method Documentation](/web3-data-api/evm/reference/get-historical-token-holders) |

### Key Features:

- **Detailed Holder Information**:

  - Current token balance and USD value
  - Percentage of total supply held
  - Contract vs EOA identification
  - Entity labels and logos where available

- **Comprehensive Statistics**:

  - Total holder count
  - Holder acquisition breakdown (swap/transfer/airdrop)
  - Holder concentration metrics (top 10/25/50/100/250/500)
  - Supply distribution analysis

- **Historical Analysis**:
  - Track holder changes across multiple timeframes (5min to 30d)
  - Net holder changes and percentage movements
  - Holder categorization (whales, sharks, dolphins etc.)
  - Acquisition source tracking

### Example Use Cases:

- **Holder Analysis**: Track and analyze token holder distribution and changes
- **Whale Watching**: Monitor large holder movements and concentration
- **Community Growth**: Track holder acquisition and retention metrics
- **Market Analysis**: Analyze holder behavior during different market conditions
