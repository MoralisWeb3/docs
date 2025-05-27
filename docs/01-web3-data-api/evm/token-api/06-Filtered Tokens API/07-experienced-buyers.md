---
title: "Tokens with Experienced Buyers"
description: "Learn how to use the Filtered Tokens API to find tokens being accumulated by experienced traders, often indicating smart money movement and quality opportunities."
slug: "/web3-data-api/evm/tutorials/filtered-tokens-api/experienced-buyers"
sidebar_label: "Experienced Buyers"
sidebar_position: 7
---

# Tokens with Experienced Buyers

This tutorial shows you how to find tokens being bought by experienced traders - wallets with proven trading history and larger portfolios, often called "smart money."

## Basic Experienced Buyers Query

Find tokens attracting experienced traders:

```json
{
  "chains": ["eth"],
  "filters": [
    {
      "metric": "experiencedBuyers",
      "timeFrame": "oneDay",
      "gt": 50
    },
    {
      "metric": "netExperiencedBuyers",
      "timeFrame": "oneDay",
      "gt": 20
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 100000
    },
    {
      "metric": "marketCap",
      "gt": 5000000
    }
  ],
  "sortBy": {
    "metric": "experiencedBuyers",
    "timeFrame": "oneDay",
    "type": "DESC"
  },
  "limit": 50
}
```

### Query Breakdown:

- `experiencedBuyers > 50`: At least 50 experienced buyers in 24h
- `netExperiencedBuyers > 20`: More experienced buyers than sellers
- `volumeUsd > $100K`: Significant trading activity
- `marketCap > $5M`: Mid-cap or larger tokens

## Full cURL Example

```bash
curl -X POST \
  'https://deep-index.moralis.io/api/v2.2/discovery/tokens' \
  -H 'X-API-Key: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "chains": ["eth", "base"],
    "filters": [
      {
        "metric": "experiencedBuyers",
        "timeFrame": "oneDay",
        "gt": 100
      },
      {
        "metric": "netExperiencedBuyers",
        "timeFrame": "oneDay",
        "gt": 50
      },
      {
        "metric": "securityScore",
        "gt": 80
      },
      {
        "metric": "totalLiquidityUsd",
        "gt": 100000
      }
    ],
    "sortBy": {
      "metric": "netExperiencedBuyers",
      "timeFrame": "oneDay",
      "type": "DESC"
    },
    "limit": 30
  }'
```

## Smart Money Accumulation

Track sustained experienced buyer interest:

```json
{
  "chains": ["eth", "arbitrum"],
  "filters": [
    {
      "metric": "experiencedBuyers",
      "timeFrame": "oneWeek",
      "gt": 200
    },
    {
      "metric": "experiencedSellers",
      "timeFrame": "oneWeek",
      "lt": 100
    },
    {
      "metric": "netExperiencedBuyers",
      "timeFrame": "oneWeek",
      "gt": 100
    },
    {
      "metric": "holdersWhale",
      "gt": 5
    }
  ],
  "metricsToReturn": [
    "experiencedBuyers",
    "experiencedSellers",
    "netExperiencedBuyers",
    "holdersWhale",
    "volumeUsd"
  ],
  "timeFramesToReturn": ["oneDay", "oneWeek"]
}
```

### Accumulation Signals:

- High experienced buyers over longer periods
- Low experienced sellers (holding, not flipping)
- Whale participation increasing
- Consistent volume

## Early Smart Money

Catch experienced buyers entering new positions:

```json
{
  "chains": ["solana", "base"],
  "filters": [
    {
      "metric": "experiencedBuyers",
      "timeFrame": "oneHour",
      "gt": 10
    },
    {
      "metric": "netExperiencedBuyers",
      "timeFrame": "oneHour",
      "gt": 5
    },
    {
      "metric": "tokenAge",
      "lt": 30
    },
    {
      "metric": "marketCap",
      "lt": 10000000
    }
  ],
  "sortBy": {
    "metric": "experiencedBuyers",
    "timeFrame": "oneHour",
    "type": "DESC"
  }
}
```

## Experienced vs Retail Comparison

Find tokens where smart money leads retail:

```json
{
  "chains": ["eth"],
  "filters": [
    {
      "metric": "experiencedBuyers",
      "timeFrame": "oneDay",
      "gt": 50
    },
    {
      "metric": "buyers",
      "timeFrame": "oneDay",
      "lt": 500
    },
    {
      "metric": "netExperiencedBuyers",
      "timeFrame": "oneDay",
      "gt": 30
    }
  ],
  "metricsToReturn": [
    "buyers",
    "experiencedBuyers",
    "netBuyers",
    "netExperiencedBuyers"
  ],
  "sortBy": {
    "metric": "netExperiencedBuyers",
    "timeFrame": "oneDay",
    "type": "DESC"
  }
}
```

## Response Analysis

Smart money patterns to recognize:

```json
{
  "tokenSymbol": "ARB",
  "experiencedBuyers": {
    "oneHour": 25,
    "oneDay": 150,
    "oneWeek": 450
  },
  "experiencedSellers": {
    "oneHour": 10,
    "oneDay": 50,
    "oneWeek": 120
  },
  "netExperiencedBuyers": {
    "oneHour": 15,
    "oneDay": 100,
    "oneWeek": 330
  },
  "buyers": {
    "oneDay": 2500
  },
  "holdersWhale": 8.5,
  "marketCap": 1250000000
}
```

### Key Indicators:

- High ratio of experienced to total buyers
- Positive net experienced buyers
- Growing whale percentage
- Price stability or gradual increase

## Smart Money Strategies

### Following Smart Money

1. **Early Entry**: Experienced buyers + low market cap
2. **Confirmation**: Multiple days of accumulation
3. **Exit Signal**: Experienced sellers increasing

### Quality Filters

```json
{
  "filters": [
    { "metric": "securityScore", "gt": 85 },
    { "metric": "experiencedBuyers", "timeFrame": "oneWeek", "gt": 100 },
    { "metric": "holderSupplyPercentTop10", "lt": 70 }
  ]
}
```

## Different Types of Experienced Buyer Activity

### Quiet Accumulation

- Steady experienced buyers
- Low overall volume
- Price relatively stable
- Best entry opportunity

### Smart Money Rush

- Sudden spike in experienced buyers
- High volume
- Price moving up
- May be late to enter

### Rotation Pattern

- Experienced buyers increasing
- Experienced sellers also present
- Smart money rotating positions
- Wait for clearer direction

## Combining with Other Metrics

Enhanced smart money query:

```json
{
  "chains": ["eth", "polygon"],
  "filters": [
    {
      "metric": "experiencedBuyers",
      "timeFrame": "oneDay",
      "gt": 30
    },
    {
      "metric": "liquidityChangeUSD",
      "timeFrame": "oneDay",
      "gt": 50000
    },
    {
      "metric": "holders",
      "timeFrame": "oneDay",
      "gt": 50
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "gt": 0
    }
  ]
}
```

## Warning Signs

Watch for these red flags:

- Experienced sellers > experienced buyers
- Declining liquidity with experienced selling
- Only experienced buyers (no retail interest)
- Price pumping without fundamental support

## Best Practices

1. **Confirm Across Timeframes**: Check 1h, 1d, and 1w patterns
2. **Volume Matters**: Experienced buyers need volume to impact price
3. **Check Holder Distribution**: Ensure healthy token distribution
4. **Monitor Liquidity**: Smart money needs exit liquidity
5. **Security First**: Always check security score
