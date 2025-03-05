---
title: "New Pump.fun APIs"
slug: "pump-fun-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API, Solana]
---

## Changelog: Pump.fun APIs

### Release Date: March 3, 2025

We're thrilled to announce our new Pump.fun APIs for the Solana ecosystem! These powerful new endpoints give developers direct access to Pump.fun's innovative token ecosystem, enabling tracking of new tokens, bonding phases, and graduated tokens.

### What's New?

| Name                                 | Description                                      | API Reference                                                                               |
| ------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **Get New Tokens By Exchange**       | Get newly created tokens on Pump.fun             | [Method Documentation](/web3-data-api/solana/reference/get-new-tokens-by-exchange)          |
| **Get Bonding Tokens By Exchange**   | Get tokens currently in the bonding phase        | [Method Documentation](/web3-data-api/solana/reference/get-bonding-tokens-by-exchange)      |
| **Get Graduated Tokens By Exchange** | Get tokens that have completed the bonding phase | [Method Documentation](/web3-data-api/solana/reference/get-graduated-tokens-by-exchange)    |
| **Get Token Bonding Status**         | Check the bonding progress of a specific token   | [Method Documentation](/web3-data-api/solana/reference/get-bonding-status-by-token-address) |

### Key Features:

- **Complete Pump.fun Lifecycle Coverage**:

  - Track newly created tokens in real-time
  - Monitor tokens in various stages of the bonding curve
  - Identify tokens that have recently graduated to full trading

- **Detailed Token Information**:

  - Token addresses, names, symbols, and logos
  - Current prices in both SOL and USD
  - Liquidity metrics and fully diluted valuations
  - Creation and graduation timestamps

- **Bonding Phase Analytics**:
  - Precise bonding curve progress percentages
  - Estimated time to graduation
  - Liquidity and valuation metrics during bonding

### Example Use Cases:

- **New Token Discovery**: Identify new tokens as soon as they launch on Pump.fun
- **Bonding Phase Tracking**: Monitor tokens approaching graduation for potential opportunities
- **Trading Analytics**: Build analytics tools around Pump.fun's unique tokenomics model
- **Portfolio Tracking**: Track the performance of Pump.fun tokens at different lifecycle stages

### Getting Started

To start leveraging the Pump.fun APIs, check out our [documentation](/web3-data-api/solana/reference/get-new-tokens-by-exchange) for detailed usage examples and integration guides.
