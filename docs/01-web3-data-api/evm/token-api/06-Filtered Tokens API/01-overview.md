---
title: "Filtered Tokens API Overview"
description: "Discover the power of the Filtered Tokens API - a comprehensive token discovery and analysis endpoint that enables you to find trending tokens, analyze market movements, and build sophisticated token screening tools across multiple blockchains."
slug: "/web3-data-api/evm/tutorials/filtered-tokens-api/overview"
sidebar_label: "Overview"
sidebar_position: 1
---

# Filtered Tokens API Overview

The Filtered Tokens API is one of the most powerful endpoints in the Moralis Web3 Data API suite. It enables developers to build sophisticated token discovery platforms, market analysis tools, and trading dashboards by providing granular filtering capabilities across multiple metrics and blockchains.

## Why Use the Filtered Tokens API?

Traditional token APIs require you to fetch large datasets and filter them client-side, which is inefficient and resource-intensive. The Filtered Tokens API solves this by allowing you to:

- **Query across multiple chains** in a single request
- **Apply complex filters** server-side for optimal performance
- **Sort by any metric** to find exactly what you need
- **Access rich metadata** including holder distribution, security scores, and trading activity
- **Analyze time-based trends** across 8 different time frames

## Key Features

### 🌐 Multi-Chain Support

Query tokens across 12+ major blockchains including:

- Ethereum, Solana, Base, Arbitrum
- Polygon, BNB Chain, Avalanche
- Optimism, Ronin, Linea, Fantom, PulseChain

### 📊 40+ Filterable Metrics

Access comprehensive token data:

- **Market metrics**: Market cap, FDV, liquidity
- **Trading metrics**: Volume, price changes, buyer/seller activity
- **Holder metrics**: Total holders, distribution by wallet size
- **Security metrics**: Security score, token age
- **Acquisition metrics**: How holders acquired tokens (swap, transfer, airdrop)

### ⏱️ Time-Based Analysis

Track changes across multiple time frames:

- Short-term: 10 minutes, 30 minutes, 1 hour
- Medium-term: 4 hours, 12 hours, 1 day
- Long-term: 1 week, 1 month

### 🎯 Advanced Filtering

Combine multiple conditions to find exactly what you need:

- Use `gt` (greater than) and `lt` (less than) operators
- Apply filters on both snapshot and time-based metrics
- Include or exclude specific token categories

## Real-World Use Cases

### 🚀 Token Discovery Platforms

Build platforms that help users discover new tokens based on customizable criteria like market cap ranges, holder patterns, and trading activity.

### 📈 Market Analysis Tools

Create dashboards showing top gainers, losers, and trending tokens with real-time data updates every 10 seconds.

### 🤖 Trading Bots

Develop bots that monitor specific token patterns like whale accumulation, retail FOMO, or liquidity injections.

### 🔍 Portfolio Research Tools

Build tools that help investors find tokens matching specific investment criteria like security scores, holder distribution, and market metrics.

## How It Works

The API uses a POST request with a JSON body containing your query parameters:

```json
{
  "chains": ["eth", "base"],
  "filters": [
    {
      "metric": "marketCap",
      "gt": 1000000,
      "lt": 100000000
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 500000
    }
  ],
  "sortBy": {
    "metric": "usdPricePercentChange",
    "timeFrame": "oneDay",
    "type": "DESC"
  },
  "limit": 50
}
```

This query would return:

- Tokens on Ethereum and Base
- With market cap between $1M and $100M
- Daily volume over $500K
- Sorted by daily price change (highest first)
- Limited to top 50 results

## Getting Started

To use the Filtered Tokens API, you'll need:

1. **A Moralis API Key** - Sign up at [developers.moralis.com](https://developers.moralis.com)
2. **API Endpoint** - `POST /api/v2.2/discovery/tokens`
3. **Required Headers** - `X-API-Key: YOUR_API_KEY`

## Best Practices

### 1. Always Include Safety Filters

Protect users from scams and dead tokens:

```json
{
  "filters": [
    { "metric": "marketCap", "gt": 0, "lt": 5000000000000 },
    { "metric": "totalLiquidityUsd", "gt": 500 },
    { "metric": "volumeUsd", "timeFrame": "oneDay", "gt": 1000 }
  ]
}
```

### 2. Use Appropriate Time Frames

- For day trading: `tenMinutes`, `oneHour`
- For swing trading: `oneDay`, `oneWeek`
- For investing: `oneWeek`, `oneMonth`

### 3. Optimize Your Queries

- Start with broader filters and refine
- Use sorting to prioritize results
- Leverage category filters to focus on specific token types

## Data Freshness

- **Price & Volume Data**: Updated every 10 seconds
- **Holder Metrics**: Updated every 10 seconds (up to 5-minute delay for extremely active tokens)
- **Security Scores**: Updated as new information becomes available

## Limitations

- **Results**: Maximum 100 tokens per request
- **Pagination**: Not currently supported - use filters to narrow results
- **Rate Limits**: Standard Moralis API rate limits apply

## Next Steps

Now that you understand the Filtered Tokens API's capabilities, explore our tutorials to learn how to:

1. [Find Trending Tokens →](/web3-data-api/evm/tutorials/filtered-tokens-api/trending-tokens)
2. [Discover Top Gainers & Losers →](/web3-data-api/evm/tutorials/filtered-tokens-api/top-gainers-losers)
3. [Identify Solid Performers →](/web3-data-api/evm/tutorials/filtered-tokens-api/solid-performers)
4. [Find Blue Chip Tokens →](/web3-data-api/evm/tutorials/filtered-tokens-api/blue-chip-tokens)
5. [Find Tokens with Buying Pressure →](/web3-data-api/evm/tutorials/filtered-tokens-api/buying-pressure)
