---
title: "Get Tokens by Exchange API"
slug: "get-tokens-by-exchange-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API, Token API, DEX]
---

# Changelog: Get Tokens by Exchange API

## Release Date: May 15, 2025

We're excited to announce our new Get Tokens by Exchange API endpoints! This powerful addition to our Token API suite enables developers to track tokens at various lifecycle stages on decentralized exchanges, with tama.meme as our initial supported DEX.

<!-- truncate -->

### What's New?

| Name                          | Description                                                           | API Reference                                                                         |
| ----------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Get Newly Launched Tokens** | Retrieve a list of newly created tokens on a specific exchange        | [Method Documentation](/web3-data-api/evm/reference/get-new-tokens-by-exchange)       |
| **Get Bonding Tokens**        | Access tokens currently in bonding curve phase on a specific exchange | [Method Documentation](/web3-data-api/evm/reference/get-bonding-tokens-by-exchange)   |
| **Get Graduated Tokens**      | List tokens that have graduated from bonding curve to full trading    | [Method Documentation](/web3-data-api/evm/reference/get-graduated-tokens-by-exchange) |
| **Get Token Bonding Status**  | Check the bonding curve status and progress for a specific token      | [Method Documentation](/web3-data-api/evm/reference/get-token-bonding-status)         |

### Key Features:

- **Complete Token Lifecycle Tracking**:

  - Monitor newly launched tokens as they enter the market
  - Track tokens during their bonding curve phase with progress indicators
  - Identify tokens that have successfully graduated to full trading
  - Check detailed bonding status for any specific token

- **Comprehensive Token Data**:

  - Token metadata (name, symbol, decimals)
  - Current price in native currency and USD
  - Liquidity metrics
  - Fully diluted valuation
  - Token logos and creation timestamps

- **Exchange-Specific Information**:
  - Initial support for tama.meme DEX
  - Bonding curve progress percentages
  - Graduation timestamps
  - Exchange-specific metrics

### Example Use Cases:

- **New Token Discovery**: Identify newly launched tokens for early investment opportunities
- **Bonding Curve Analysis**: Track tokens in bonding phase to determine optimal entry points
- **Market Research**: Study graduation patterns to inform tokenomics strategies
- **Portfolio Tracking**: Monitor the status of tokens across different lifecycle stages
- **DApp Development**: Integrate token lifecycle data into trading platforms and analytics dashboards

Check out our documentation for detailed usage examples, response formats, and integration guides for each endpoint.
