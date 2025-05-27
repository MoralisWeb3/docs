---
title: "Solid Performers"
description: "Learn how to use the Filtered Tokens API to find stable, consistently performing tokens with good security scores and steady growth across multiple time frames."
slug: "/web3-data-api/evm/tutorials/filtered-tokens-api/solid-performers"
sidebar_label: "Get Solid Performers"
sidebar_position: 4
---

# Solid Performers

This tutorial shows you how to find solid performing tokens - those with consistent growth, good security, and steady trading activity across multiple time frames.

## Solid Performers Query

Find tokens with consistent performance metrics:

```json
{
  "chains": ["eth"],
  "filters": [
    {
      "metric": "securityScore",
      "gt": 70
    },
    {
      "metric": "sellers",
      "timeFrame": "oneDay",
      "gt": 1
    },
    {
      "metric": "sellers",
      "timeFrame": "oneWeek",
      "gt": 10
    },
    {
      "metric": "sellers",
      "timeFrame": "oneMonth",
      "gt": 100
    },
    {
      "metric": "buyers",
      "timeFrame": "oneDay",
      "gt": 1
    },
    {
      "metric": "buyers",
      "timeFrame": "oneWeek",
      "gt": 10
    },
    {
      "metric": "buyers",
      "timeFrame": "oneMonth",
      "gt": 100
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "gt": 1
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneWeek",
      "gt": 1
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneMonth",
      "gt": 1
    }
  ],
  "sortBy": {
    "metric": "marketCap",
    "type": "DESC"
  },
  "limit": 100
}
```

### What Makes a Solid Performer:

- **Good Security**: Score above 70
- **Consistent Trading**: Buyers and sellers across all time frames
- **Steady Growth**: Positive price change daily, weekly, and monthly
- **Market Cap Sorting**: Larger, more established tokens first

## Full cURL Example

Test this command to find solid performers:

```bash
curl -X POST \
  'https://deep-index.moralis.io/api/v2.2/discovery/tokens' \
  -H 'X-API-Key: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "chains": ["eth"],
    "filters": [
      {
        "metric": "securityScore",
        "gt": 70
      },
      {
        "metric": "sellers",
        "timeFrame": "oneDay",
        "gt": 1
      },
      {
        "metric": "sellers",
        "timeFrame": "oneWeek",
        "gt": 10
      },
      {
        "metric": "buyers",
        "timeFrame": "oneDay",
        "gt": 1
      },
      {
        "metric": "buyers",
        "timeFrame": "oneWeek",
        "gt": 10
      },
      {
        "metric": "usdPricePercentChange",
        "timeFrame": "oneDay",
        "gt": 1
      },
      {
        "metric": "usdPricePercentChange",
        "timeFrame": "oneWeek",
        "gt": 1
      }
    ],
    "sortBy": {
      "metric": "marketCap",
      "type": "DESC"
    },
    "limit": 50
  }'
```

## Enhanced Solid Performers

Add more quality filters for even better results:

```json
{
  "chains": ["eth", "base"],
  "filters": [
    {
      "metric": "securityScore",
      "gt": 80
    },
    {
      "metric": "marketCap",
      "gt": 10000000,
      "lt": 1000000000
    },
    {
      "metric": "totalLiquidityUsd",
      "gt": 100000
    },
    {
      "metric": "totalHolders",
      "gt": 1000
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneWeek",
      "gt": 1000000
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneMonth",
      "gt": 10
    }
  ],
  "sortBy": {
    "metric": "volumeUsd",
    "timeFrame": "oneWeek",
    "type": "DESC"
  }
}
```

### Additional Quality Filters:

- Market cap between $10M - $1B (mid-cap range)
- Minimum $100K liquidity
- At least 1,000 holders
- Weekly volume over $1M

## Multi-Chain Solid Performers

Search across multiple chains:

```json
{
  "chains": ["eth", "base", "arbitrum", "polygon"],
  "categories": {
    "exclude": ["stablecoin", "wrapped"]
  },
  "filters": [
    {
      "metric": "securityScore",
      "gt": 75
    },
    {
      "metric": "tokenAge",
      "gt": 90
    },
    {
      "metric": "buyers",
      "timeFrame": "oneMonth",
      "gt": 500
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneMonth",
      "gt": 5
    }
  ],
  "timeFramesToReturn": ["oneDay", "oneWeek", "oneMonth"],
  "metricsToReturn": [
    "volumeUsd",
    "usdPricePercentChange",
    "buyers",
    "marketCap"
  ]
}
```

## Characteristics of Solid Performers

Look for these patterns in the response:

```json
{
  "tokenSymbol": "LINK",
  "securityScore": 92,
  "usdPricePercentChange": {
    "oneDay": 3.2,
    "oneWeek": 8.5,
    "oneMonth": 15.7
  },
  "buyers": {
    "oneDay": 2100,
    "oneWeek": 14500,
    "oneMonth": 58000
  },
  "sellers": {
    "oneDay": 1950,
    "oneWeek": 13200,
    "oneMonth": 54000
  },
  "totalHolders": 125000,
  "marketCap": 8500000000
}
```

### Key Indicators:

- Gradual, consistent price increases
- Balanced buyer/seller ratios
- High security score
- Large holder base
- Steady volume growth

## Investment Considerations

1. **Consistency Over Spikes**: Look for steady growth rather than explosive moves
2. **Time in Market**: Tokens older than 90 days have proven staying power
3. **Holder Growth**: Increasing holder count indicates growing adoption
4. **Volume Stability**: Consistent volume shows sustained interest
5. **Security First**: Never compromise on security score

## Recommended Filters for Long-Term Holdings

```json
{
  "filters": [
    { "metric": "securityScore", "gt": 85 },
    { "metric": "tokenAge", "gt": 180 },
    { "metric": "totalHolders", "gt": 5000 },
    { "metric": "marketCap", "gt": 50000000 },
    { "metric": "holderSupplyPercentTop10", "lt": 50 }
  ]
}
```

## Common Patterns in Solid Performers

- **Gradual Appreciation**: 1-5% daily, 5-20% weekly, 10-50% monthly
- **High Holder Retention**: More buyers than sellers consistently
- **Good Distribution**: Not overly concentrated in top wallets
- **Active Development**: Often correlates with project updates
