---
title: "Filtered Tokens API FAQ"
description: "Learn how to discover and analyze tokens using powerful filtering capabilities. Filter by metrics like market cap, volume, holders, and more across different time frames to identify market opportunities."
slug: "/web3-data-api/evm/filtered-token-api-faq"
sidebar_position: 1
---

> For the complete API reference, please see the [Get Filtered Tokens API documentation](/web3-data-api/evm/reference/get-filtered-tokens).

## Overview

### What is the Filtered Tokens API?

The Filtered Tokens API is a powerful POST endpoint that enables you to discover and analyze tokens across multiple blockchain networks. It provides advanced filtering, sorting, and metric selection capabilities, making it ideal for building token discovery platforms, market analysis tools, and trading dashboards.

### What makes this API unique?

- **Multi-chain support**: Query tokens across Ethereum, Solana, Base, Arbitrum, and more
- **Advanced filtering**: Combine multiple metrics with comparison operators
- **Time-based analysis**: Track changes across 8 different time frames
- **Flexible sorting**: Sort by any metric in ascending or descending order
- **Category filtering**: Include or exclude specific token categories
- **Rich metrics**: Access over 40 different metrics including holder distribution, security scores, and acquisition methods

## Core Features

### What chains are supported?

The API supports major blockchain networks:

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

### What metrics can I filter and analyze?

**Market Metrics:**

- `marketCap` - Current market capitalization
- `fullyDilutedValuation` - FDV calculation
- `totalLiquidityUsd` - Total liquidity in USD

**Trading Metrics:**

- `volumeUsd` - Trading volume (time-based)
- `usdPricePercentChange` - Price change percentage (time-based)
- `liquidityChange` - Liquidity change amount (time-based)
- `liquidityChangeUSD` - Liquidity change in USD (time-based)

**Holder Metrics:**

- `totalHolders` - Current holder count
- `holders` - Holder count change (time-based)
- `buyers` / `sellers` - Active traders (time-based)
- `netBuyers` - Net buyer flow (time-based)
- `experiencedBuyers` / `experiencedSellers` - Experienced trader activity (time-based)

**Distribution Metrics:**

- `holdersWhale`, `holdersShark`, `holdersDolphin`, `holdersFish`, `holdersOctopus`, `holdersCrab`, `holdersShrimp` - Holder size distribution
- `holderSupplyPercentTop10` through `holderSupplyPercentTop500` - Supply concentration

**Acquisition Metrics:**

- `holdersBySwap` - % acquired via DEX
- `holdersByTransfer` - % acquired via transfer
- `holdersByAirdrop` - % acquired via airdrop

**Security & Age:**

- `securityScore` - Token security rating (0-100)
- `tokenAge` - Days since token creation

### What time frames are available?

- `tenMinutes` - Ultra short-term trends
- `thirtyMinutes` - Short-term momentum
- `oneHour` - Hourly analysis
- `fourHours` - Intraday patterns
- `twelveHours` - Half-day trends
- `oneDay` - Daily performance
- `oneWeek` - Weekly trends
- `oneMonth` - Monthly analysis

## Common Use Cases

### How do I find trending tokens?

Combine volume, buyer activity, and price momentum:

```json
{
  "chains": ["eth", "base"],
  "filters": [
    { "metric": "volumeUsd", "timeFrame": "oneDay", "gt": 1000000 },
    { "metric": "buyers", "timeFrame": "oneHour", "gt": 50 },
    { "metric": "usdPricePercentChange", "timeFrame": "oneDay", "gt": 10 }
  ],
  "sortBy": {
    "metric": "volumeUsd",
    "timeFrame": "oneDay",
    "type": "DESC"
  }
}
```

### How do I filter for quality tokens?

Apply safety filters to avoid scams and dead tokens:

```json
{
  "filters": [
    { "metric": "marketCap", "gt": 100000, "lt": 5000000000000 },
    { "metric": "totalLiquidityUsd", "gt": 500 },
    { "metric": "volumeUsd", "timeFrame": "oneDay", "gt": 1000 },
    { "metric": "securityScore", "gt": 70 }
  ]
}
```

### How do I find retail-driven tokens?

Look for tokens with high small holder percentages:

```json
{
  "filters": [
    { "metric": "holdersShrimp", "gt": 60 },
    { "metric": "holdersCrab", "gt": 20 },
    { "metric": "holdersWhale", "lt": 5 },
    { "metric": "holderSupplyPercentTop10", "lt": 30 }
  ]
}
```

### How do I identify newly launched tokens?

Use tokenAge to find recent launches:

```json
{
  "filters": [
    { "metric": "tokenAge", "lt": 7 },
    { "metric": "marketCap", "gt": 500000 },
    { "metric": "totalHolders", "gt": 100 }
  ],
  "sortBy": {
    "metric": "volumeUsd",
    "timeFrame": "oneDay",
    "type": "DESC"
  }
}
```

## Advanced Filtering

### How do I use category filters?

Include or exclude specific token types:

```json
{
  "categories": {
    "include": ["meme", "gaming"],
    "exclude": ["stablecoin", "wrapped"]
  }
}
```

### How do I combine multiple filters effectively?

Filters use AND logic - all conditions must be met:

```json
{
  "filters": [
    { "metric": "marketCap", "gt": 1000000, "lt": 100000000 },
    { "metric": "volumeUsd", "timeFrame": "oneDay", "gt": 500000 },
    { "metric": "holders", "timeFrame": "oneWeek", "gt": 1000 },
    { "metric": "securityScore", "gt": 80 }
  ]
}
```

### Can I use grouped metrics?

Yes, use these to get multiple related metrics at once:

- `holderDistribution` - Returns all holder size percentages
- `holderAcquisition` - Returns all acquisition method percentages
- `holderSupply` - Returns all top holder supply percentages

## Best Practices

### What are recommended default filters?

For most queries, include these safety filters:

- `marketCap`: > $100K and < $5 trillion
- `totalLiquidityUsd`: > $500
- `volumeUsd` (oneDay): > $1,000
- `securityScore`: > 70

### How should I handle the 100 token limit?

1. Use specific filters to narrow results
2. Combine multiple metrics for precision
3. Use appropriate time frames
4. Sort by the most relevant metric for your use case

### What's the difference between time-based and snapshot metrics?

- **Time-based metrics** require a timeFrame and show changes over that period
- **Snapshot metrics** show current state and don't accept timeFrame
- Using timeFrame with snapshot metrics will cause an error

## Common Patterns

### Top Gainers Pattern

```json
{
  "filters": [
    { "metric": "marketCap", "gt": 5000000 },
    { "metric": "securityScore", "gt": 80 },
    { "metric": "usdPricePercentChange", "timeFrame": "oneDay", "gt": 25 }
  ],
  "sortBy": {
    "metric": "usdPricePercentChange",
    "timeFrame": "oneDay",
    "type": "DESC"
  }
}
```

### Blue Chip Discovery Pattern

```json
{
  "filters": [
    { "metric": "marketCap", "gt": 150000000, "lt": 3000000000 },
    { "metric": "securityScore", "gt": 70 },
    { "metric": "tokenAge", "gt": 365 },
    { "metric": "volumeUsd", "timeFrame": "oneMonth", "gt": 10000000 }
  ]
}
```

### Whale Accumulation Pattern

```json
{
  "filters": [
    { "metric": "holdersWhale", "gt": 20 },
    { "metric": "holders", "timeFrame": "oneWeek", "gt": 100 },
    { "metric": "volumeUsd", "timeFrame": "oneWeek", "gt": 1000000 }
  ]
}
```

## Troubleshooting

### Why am I getting timeFrame errors?

Ensure you're only using timeFrame with time-based metrics. Snapshot metrics like `marketCap`, `totalHolders`, and holder distribution metrics don't support timeFrame.

### Why are some tokens missing logos?

Not all tokens have logo data available. Always check if the logo field exists before using it in your application.

### How do I handle rate limits?

The API has standard rate limits. For high-volume applications:

1. Implement caching for frequently requested data
2. Batch similar queries when possible
3. Use appropriate time frames to reduce query frequency

### Why am I getting fewer than 100 results?

This happens when:

1. Your filters are too restrictive
2. The chain has fewer tokens meeting your criteria
3. Some tokens lack required metric data

## Data Freshness

### How often is data updated?

- Most metrics update every 10 seconds
- Holder distribution and acquisition metrics may have up to 5-minute delays for highly active tokens
- Price and volume data are near real-time

### What about historical data?

The API provides historical data based on the supported time frames. For deeper historical analysis, consider combining multiple queries with different time frames.
