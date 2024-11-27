---
title: "Token Pair Stats API"
slug: "token-pair-stats-api"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

## Changelog: Token Pair Stats API

### Release Date: November 26, 2024

We’re thrilled to announce the release of the **Token Pair Stats API**, now live across both **EVM chains** and **Solana**! This powerful new API provides real-time and historical data for token pairs, enabling developers to build advanced analytics and trading applications.

### What’s New?

#### Solana API

| Name                     | Description                                                                                     | API Reference                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Get Token Pair Stats** | Retrieve detailed statistics for a specific token pair, including price, liquidity, and volume. | [Method Documentation](/web3-data-api/solana/reference/get-token-pair-stats) |

#### EVM API

| Name                     | Description                                                                                     | API Reference                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Get Token Pair Stats** | Retrieve detailed statistics for a specific token pair, including price, liquidity, and volume. | [Method Documentation](/web3-data-api/evm/reference/get-token-pair-stats) |

### Key Features:

- **Real-Time Data**: Access up-to-the-minute statistics for token pairs, including:

  - Current price and liquidity
  - Price and liquidity percent changes (5m, 1h, 4h, 24h)
  - Total, buy, and sell volumes (5m, 1h, 4h, 24h)
  - Buyer and seller statistics (5m, 1h, 4h, 24h)

- **Historical Insights**: Track trends over time to identify patterns in token pair performance.

- **Cross-Chain Support**: Available for all supported **EVM chains** and **Solana**.

### Example Use Cases:

- **Trading Dashboards**: Display live token pair prices, liquidity, and trade volumes to help users make informed decisions.
- **DeFi Analytics Tools**: Analyze token pair trends across chains to spot opportunities or assess market conditions.
- **Market Insights Apps**: Provide traders with insights into buyer/seller activities and trading volume fluctuations.
