---
title: "Filtered Tokens API Tutorials"
description: "Learn how to use the Filtered Tokens API to discover trending tokens, analyze market movements, and filter tokens by various metrics across multiple blockchains."
slug: "/web3-data-api/evm/tutorials/filtered-tokens-api/overview"
sidebar_label: "Overview"
sidebar_position: 1
---

> For the complete API reference, please see the [Get Filtered Tokens API documentation](/web3-data-api/evm/reference/get-filtered-tokens) and for FAQ, please see the [Filtered Tokens API FAQ](/web3-data-api/evm/filtered-token-api-faq).

The Filtered Tokens API enables you to discover and analyze tokens across multiple blockchains using powerful filtering, sorting, and metric selection capabilities.

## What is the Filtered Tokens API?

It's a POST endpoint (`/api/v2.2/discovery/tokens`) that allows you to:

- Search tokens across multiple chains in one request
- Filter by various metrics like volume, market cap, and holder activity
- Sort results by any supported metric
- Analyze time-based changes in token performance

## Supported Chains

Query tokens across these blockchains:

- `eth` - Ethereum
- `solana` - Solana
- `base` - Base
- `arbitrum` - Arbitrum
- `polygon` - Polygon
- `binance` - BNB Chain
- `avalanche` - Avalanche
- `optimism` - Optimism
- `ronin` - Ronin
- `linea` - Linea
- `fantom` - Fantom
- `pulse` - PulseChain

## Key Metrics

### Time-Based Metrics (require timeFrame)

- `volumeUsd` - Trading volume
- `usdPricePercentChange` - Price change percentage
- `liquidityChange` / `liquidityChangeUSD` - Liquidity changes
- `holders` - Change in holder count
- `buyers` / `sellers` / `netBuyers` - Trading activity
- `experiencedBuyers` / `experiencedSellers` / `netExperiencedBuyers` - Smart money activity

### Snapshot Metrics (current state, no timeFrame)

- `marketCap` - Market capitalization
- `fullyDilutedValuation` - FDV
- `totalLiquidityUsd` - Total liquidity
- `totalHolders` - Current holder count
- `securityScore` - Token security (0-100)
- `tokenAge` - Days since creation
- Acquisition methods: `holdersBySwap`, `holdersByTransfer`, `holdersByAirdrop`

## Time Frames

Available time periods for analysis:

- `tenMinutes`, `thirtyMinutes`
- `oneHour`, `fourHours`, `twelveHours`
- `oneDay`, `oneWeek`, `oneMonth`

## Basic Request Structure

```json
{
  "chains": ["eth", "base"],
  "filters": [
    {
      "metric": "marketCap",
      "gt": 1000000
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 100000
    }
  ],
  "sortBy": {
    "metric": "volumeUsd",
    "timeFrame": "oneDay",
    "type": "DESC"
  },
  "limit": 50
}
```

## Filter Operators

- `gt` - Greater than
- `lt` - Less than
- Can combine both for ranges

## Categories

Include or exclude token categories:

```json
{
  "categories": {
    "include": ["meme", "gaming"],
    "exclude": ["stablecoin", "wrapped"]
  }
}
```

## Recommended Safety Filters

Always include these to avoid low-quality tokens:

```json
{
  "filters": [
    { "metric": "marketCap", "gt": 0, "lt": 5000000000000 },
    { "metric": "totalLiquidityUsd", "gt": 500 },
    { "metric": "volumeUsd", "timeFrame": "oneDay", "gt": 1000 }
  ]
}
```

## Authentication

Required header:

```
X-API-Key: YOUR_API_KEY
```

## Limitations

- Maximum 100 tokens per request
- No pagination support
- Use filters to narrow results

## Data Updates

- Most metrics update every 10 seconds
- Acquisition metrics may have up to 5-minute delay for very active tokens

## Common Use Cases

1. **Trending Tokens** - High volume and buyer activity
2. **Top Gainers/Losers** - Biggest price movements
3. **Blue Chip Tokens** - Large cap, established tokens
4. **Smart Money Tracking** - Following experienced buyers
5. **New Token Discovery** - Recently launched tokens

## Next Steps

Explore our tutorials to see what you can do with the Filtered Tokens API:

<ul>
  <li><a href="/web3-data-api/evm/tutorials/filtered-tokens-api/trending-tokens">Finding Trending Tokens</a></li>
  <li><a href="/web3-data-api/evm/tutorials/filtered-tokens-api/top-gainers-losers">Top Gainers & Losers</a></li>
  <li><a href="/web3-data-api/evm/tutorials/filtered-tokens-api/solid-performers">Solid Performers</a></li>
  <li><a href="/web3-data-api/evm/tutorials/filtered-tokens-api/blue-chip-tokens">Blue Chip Tokens</a></li>
  <li><a href="/web3-data-api/evm/tutorials/filtered-tokens-api/buying-pressure">Tokens with Buying Pressure</a></li>
  <li><a href="/web3-data-api/evm/tutorials/filtered-tokens-api/experienced-buyers">Tokens with Experienced Buyers</a></li>
  <li><a href="/web3-data-api/evm/tutorials/filtered-tokens-api/risky-bets">Risky Bets</a></li>
</ul>
