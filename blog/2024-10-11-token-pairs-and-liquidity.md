---
title: "New Token Pairs & Liquidity APIs"
slug: "token-pairs-liquidity-apis"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

## Changelog: New Token Pairs & Liquidity APIs

### Release Date: October 11, 2024

We’re excited to announce the addition of new **Token Pairs** and **Liquidity APIs** across both Solana and EVM networks! These updates provide you with deeper insights into token pairings and liquidity data, enabling you to build more comprehensive DeFi and trading applications.

### What’s New?

#### Solana APIs

| Name                                | Description                                             | API Reference                                                                           |
| ----------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Get Token Pairs by Address**      | Retrieve the supported token pairs for a given address. | [Method Documentation](/web3-data-api/solana/reference/get-token-pairs-by-address)      |
| **Get Aggregated Token Pair Stats** | Retrieve aggregated stats for a token across all pairs. | [Method Documentation](/web3-data-api/solana/reference/get-aggregated-token-pair-stats) |

#### EVM APIs

| Name                                | Description                                             | API Reference                                                                        |
| ----------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Get Token Pairs by Address**      | Retrieve the supported token pairs for a given address. | [Method Documentation](/web3-data-api/evm/reference/get-token-pairs)                 |
| **Get Aggregated Token Pair Stats** | Retrieve aggregated stats for a token across all pairs. | [Method Documentation](/web3-data-api/evm/reference/get-aggregated-token-pair-stats) |

### What Can You Do?

With these new APIs, you can:

- **Track Token Pairings**: Discover token pairings across various exchanges on Solana and EVM chains.
- **Monitor Liquidity**: Retrieve real-time liquidity data for specific token pairs.
- **Access Aggregated Data**: Gain insights into the total number of active pairs and DEXes for a token across supported networks.

### Example Use Cases:

- **DeFi Dashboards**: Display detailed token pair statistics for users to track liquidity pools and potential trading pairs.
- **Analytics Tools**: Analyze liquidity trends and token pair activity across multiple DEXes.
- **Portfolio Management**: Help users manage their assets by showing token pair data and liquidity stats for the tokens in their portfolios.
