---
title: "New Token Search API"
slug: "token-search-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API]
---

## Changelog: Token Search API

### Release Date: January 30, 2025

We're excited to announce the release of the **Token Search API**, now available for both **EVM chains** and **Solana** through a single unified endpoint! This powerful new API enables developers to search for tokens across multiple blockchains simultaneously, making it easier than ever to build cross-chain applications.

### What's New?

| Name              | Description                                                      | API Reference                                                      |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Search Tokens** | Search for tokens by name or symbol across multiple blockchains. | [Method Documentation](/web3-data-api/evm/reference/search-tokens) |

### Key Features:

- **Cross-Chain Token Search**: Search across multiple networks with a single API call:

  - All major EVM chains (Ethereum, BSC, Polygon, etc.)
  - Solana network support
  - Chain-specific filtering options
  - Unified response format

- **Flexible Search Options**:

  - Search by token name or symbol
  - Partial matching support
  - Case-insensitive searching
  - Prioritized exact matches

- **Comprehensive Token Data**:

  - Token address and chain identifier
  - Token name and symbol
  - Current USD price
  - Market capitalization
  - Additional metadata

### Example Use Cases:

- **Token Explorers**: Build powerful token search functionality into your DApp or website.
- **Cross-Chain Portfolio Tools**: Enable users to easily find and track tokens across networks.
- **Trading Interfaces**: Implement token search for DEX aggregators and trading platforms.
