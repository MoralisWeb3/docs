---
title: "New Filtered Tokens API"
slug: "filtered-tokens-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API]
---

## Changelog: Filtered Tokens API

### Release Date: January 31, 2025

We're excited to announce the release of the **Filtered Tokens API**, now available for both **EVM chains** and **Solana**! This powerful new tool enables developers to discover and analyze tokens based on various metrics and parameters across multiple blockchains, making it easier than ever to identify market opportunities and trends.

<!-- truncate -->

### What's New?

| Name                    | Description                                                         | API Reference                                                            |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Get Filtered Tokens** | Filter and analyze tokens based on multiple metrics and parameters. | [Method Documentation](/web3-data-api/evm/reference/get-filtered-tokens) |

### Key Features:

- **Cross-Chain Support**: Filter tokens across multiple networks:

  - All major EVM chains (Ethereum, BSC, Polygon, etc.)
  - Solana network support
  - Chain-specific filtering options
  - Unified response format

- **Comprehensive Filtering**: Filter tokens based on multiple metrics:

  - Market metrics (marketCap, volumeUsd, fullyDilutedValuation)
  - User activity (holders, buyers, sellers, netBuyers)
  - Experience metrics (experiencedBuyers, experiencedSellers)
  - Price and liquidity changes
  - Security scores and token age

- **Flexible Time Frames**:

  - Short term: tenMinutes, thirtyMinutes
  - Medium term: oneHour, fourHours, twelveHours, oneDay
  - Long term: oneWeek, oneMonth

- **Detailed Token Data**:

  - Token address and metadata
  - Market metrics and pricing
  - User activity statistics
  - Security information
  - Liquidity metrics

### Example Use Cases:

- **Token Discovery**: Build powerful token screening and discovery tools across chains
- **Market Analysis**: Track and analyze token trends and metrics
- **Trading Tools**: Identify trading opportunities based on multiple parameters
- **Security Analysis**: Filter tokens based on security scores and metrics
