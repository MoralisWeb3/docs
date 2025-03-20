---
title: "New Solana Token Holders APIs"
slug: "solana-token-holders-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API, Solana]
---

## Changelog: Solana Token Holders APIs

### Release Date: April 19, 2025

We're excited to announce our new Solana Token Holders APIs! These powerful endpoints give developers comprehensive insights into token distribution and holder statistics across the Solana ecosystem, enabling detailed analysis of token metrics and holder behavior over time.

### What's New?

| Name                                  | Description                             | API Reference                                                                        |
| ------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| **Get Token Holder Stats**            | Get token holder summary statistics     | [Method Documentation](/web3-data-api/solana/reference/get-token-holder-stats)       |
| **Get Historical Token Holder Stats** | Get time-series token holder statistics | [Method Documentation](/web3-data-api/solana/reference/get-historical-token-holders) |

### Key Features:

- **Comprehensive Holder Analytics**:

  - Total number of token holders with detailed breakdowns
  - Distribution analysis across wallet size categories
  - Acquisition analytics showing how tokens were acquired (swap, transfer, airdrop)

- **Detailed Change Metrics**:

  - Precise holder change percentages across multiple time periods (5min to 30d)
  - Net holder changes with percentage calculations
  - Wallet category movement for whales, sharks, dolphins, fish, etc.

- **Historical Timeseries Analysis**:
  - Track holder statistics over custom date ranges
  - Flexible timeframe options from 1 minute to 1 month intervals
  - Inflow and outflow analytics by wallet size category
  - Historical acquisition method tracking

### Example Use Cases:

- **Holder Concentration Analysis**: Evaluate token distribution patterns and concentration risks
- **Community Growth Tracking**: Monitor the growth or decline of token holder communities over time
- **Whale Movement Detection**: Track large holder behaviors and potential market impacts
- **Token Marketing Effectiveness**: Analyze how airdrops and other acquisition methods affect holder growth
- **Comparative Token Analysis**: Compare holder metrics across multiple tokens for investment research

### Getting Started

To start leveraging the Solana Token Holders APIs, check out our [documentation](/web3-data-api/solana/reference/get-token-holder-stats) for detailed usage examples and integration guides.
