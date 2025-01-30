---
title: "Building with Eliza OS"
slug: "../building-with-eliza-os"
description: "Learn how to build and deploy AI agents using Moralis."
sidebar_label: "Building with Eliza OS"
sidebar_position: 1
---

### What is ElizaOS?

ElizaOS is a powerful multi-agent simulation framework designed to create, deploy, and manage autonomous AI agents. Built with TypeScript, it provides a flexible and extensible platform for developing intelligent agents that can interact across multiple platforms while maintaining consistent personalities and knowledge.

### Key Features

- **Multi-Agent Architecture**: Deploy and manage multiple unique AI personalities simultaneously.
- **Character System**: Create diverse agents using the character file framework.
- **Memory Management**: Advanced Retrieval Augmented Generation (RAG) system for long-term memory and context awareness.
- **Platform Integration**: Seamless connectivity with Discord, Twitter, and other platforms.

### Installing the Moralis Plugin

To integrate Moralis with ElizaOS:

1. **Clone the ElizaOS Repository**:

   ```bash
   git clone https://github.com/elizaOS/eliza.git
   cd eliza
   ```

2. **Switch to the Latest Stable Version**:

   ```bash
   git checkout $(git describe --tags --abbrev=0)

   ```

3. **Install Dependencies**:

   ```bash
   pnpm install --no-frozen-lockfile
   ```

4. **Install the Moralis Plugin**:

   ```bash
   pnpm install @elizaos/plugin-moralis

   ```

5. **Configure Environment Variables**:

   Set up the necessary environment variables in the `.env` file. Refer to the `.env.example` for guidance.

6. **Initialize the Plugin**:

   Import and register the plugin in your character configuration:

   ```typescript
   import { MoralisPlugin } from "@elizaos/plugin-moralis";
   const character = {
     // ... other character config
     plugins: [moralisPlugin],
   };
   ```

7. **Start ElizaOS with the Moralis Plugin**:

   ```bash
   pnpm start --character="path/to/your/character.json"
   ```

## Using Pre-Built Data Handlers

The Moralis plugin for ElizaOS comes with pre-built data handlers that simplify the retrieval of blockchain data:

- **Token Pairs Handler**: Fetch all trading pairs, exchange information, price and volume data, and liquidity information for a specific token

- **Pair Statistics Handler**: Get detailed statistics including current price, liquidity, price changes, volume stats, buy/sell ratios, and unique trader counts for a specific trading pair

- **Token Statistics Handler**: Retrieve aggregated metrics across all pairs including total liquidity, number of active pairs/DEXes, combined volume stats, and trading activity

- **OHLCV Data Handler**: Access historical price data with customizable timeframes and date ranges for any trading pair

- **Token Price Handler**: Get current token prices from main liquidity sources in both USD and native currency

- **Token Metadata Handler**: Fetch comprehensive token information including supply metrics, FDV, decimals and other token standards

## Implementing Natural Language Queries

With the Moralis plugin, ElizaOS agents can process natural language queries to interact with blockchain data. For example, an agent can respond to questions like:

- "Get all Solana trading pairs for token So11111111111111111111111111111111111111112"

- "Get stats for Solana pair A8nPhpCJqtqHdqUk35Uj9Hy2YsGXFkCZGuNwvkD3k7VC"

- "Get aggregated stats for Solana token SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"

- "Get hourly candlestick prices for Solana pair 83v8iPyZihDEjDdY8RdZddyZNyUtXngz69Lgo9Kt5d6d"

- "Get current price of Solana token 6Rwcmkz9yiYVM5EzyMcr4JsQPGEAWhcUvLvfBperYnUt"

- "Show me metadata for token EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
