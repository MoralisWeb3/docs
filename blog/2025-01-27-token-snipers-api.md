---
title: "New Token Snipers API"
slug: "token-snipers-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API]
---

## Changelog: New Token Snipers API

### Release Date: January 27, 2025

We're excited to announce the release of the **Token Snipers API**, now available for both **EVM chains** and **Solana**! This powerful new API provides real-time data about sniper activity on token pairs, enabling developers to build advanced trading and analytics applications.

### What's New?

#### Solana API

| Name                  | Description                                                          | API Reference                                                                       |
| --------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Get Token Snipers** | Retrieve detailed sniper activity for a specific token pair address. | [Method Documentation](/web3-data-api/solana/reference/get-snipers-by-pair-address) |

#### EVM API

| Name                  | Description                                                          | API Reference                                                                    |
| --------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Get Token Snipers** | Retrieve detailed sniper activity for a specific token pair address. | [Method Documentation](/web3-data-api/evm/reference/get-snipers-by-pair-address) |

### Key Features:

- **Real-Time Sniper Detection**: Monitor and analyze sniper activity, including:

  - Number of active snipers
  - Sniper wallet addresses
  - Transaction volumes from snipers
  - Timing of sniper activities
  - Impact on token price and liquidity

- **Historical Analysis**: Track sniper patterns over time to understand their behavior and impact.

- **Cross-Chain Support**: Available for all supported **EVM chains** and **Solana**.

### Example Use Cases:

- **Trading Security**: Identify and monitor sniper activity to protect your trading operations.
- **Market Analysis**: Understand how snipers affect token launches and trading patterns.
- **Risk Management**: Assess the level of sniper activity before making trading decisions.
