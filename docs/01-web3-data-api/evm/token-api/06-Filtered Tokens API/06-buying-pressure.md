---
title: "Tokens with Buying Pressure"
description: "Learn how to use the Filtered Tokens API to find tokens with strong buying pressure, indicating potential upward price movement and market interest."
slug: "/web3-data-api/evm/tutorials/filtered-tokens-api/buying-pressure"
sidebar_label: "Buying Pressure"
sidebar_position: 6
---

# Tokens with Buying Pressure

This tutorial shows you how to find tokens experiencing strong buying pressure - where buyers significantly outnumber sellers, indicating potential upward momentum.

## Basic Buying Pressure Query

Find tokens with more buyers than sellers:

```json
{
  "chains": ["eth", "base"],
  "filters": [
    {
      "metric": "netBuyers",
      "timeFrame": "oneHour",
      "gt": 100
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneHour",
      "gt": 50000
    },
    {
      "metric": "marketCap",
      "gt": 1000000
    }
  ],
  "sortBy": {
    "metric": "netBuyers",
    "timeFrame": "oneHour",
    "type": "DESC"
  },
  "limit": 50
}
```

### Query Breakdown:

- `netBuyers > 100`: At least 100 more buyers than sellers in the last hour
- `volumeUsd > $50K`: Ensures real trading activity
- `marketCap > $1M`: Filters out micro-caps
- Sorted by highest net buyers

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
        "metric": "netBuyers",
        "timeFrame": "oneHour",
        "gt": 100
      },
      {
        "metric": "volumeUsd",
        "timeFrame": "oneHour",
        "gt": 50000
      },
      {
        "metric": "buyers",
        "timeFrame": "oneHour",
        "gt": 200
      },
      {
        "metric": "securityScore",
        "gt": 70
      }
    ],
    "sortBy": {
      "metric": "netBuyers",
      "timeFrame": "oneHour",
      "type": "DESC"
    },
    "limit": 30
  }'
```

## Strong Buying Pressure

For tokens with overwhelming buyer dominance:

```json
{
  "chains": ["solana"],
  "filters": [
    {
      "metric": "buyers",
      "timeFrame": "oneDay",
      "gt": 1000
    },
    {
      "metric": "sellers",
      "timeFrame": "oneDay",
      "lt": 500
    },
    {
      "metric": "netBuyers",
      "timeFrame": "oneDay",
      "gt": 500
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "gt": 5
    }
  ],
  "sortBy": {
    "metric": "buyers",
    "timeFrame": "oneDay",
    "type": "DESC"
  }
}
```

### Strong Pressure Indicators:

- 2:1 or higher buyer to seller ratio
- Positive price movement
- High absolute buyer count
- Sustained over longer time frames

## Multi-Timeframe Buying Pressure

Confirm buying pressure across multiple periods:

```json
{
  "chains": ["eth"],
  "filters": [
    {
      "metric": "netBuyers",
      "timeFrame": "oneHour",
      "gt": 50
    },
    {
      "metric": "netBuyers",
      "timeFrame": "fourHours",
      "gt": 200
    },
    {
      "metric": "netBuyers",
      "timeFrame": "oneDay",
      "gt": 500
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 500000
    }
  ],
  "timeFramesToReturn": ["oneHour", "fourHours", "oneDay"],
  "metricsToReturn": [
    "buyers",
    "sellers",
    "netBuyers",
    "volumeUsd",
    "usdPricePercentChange"
  ]
}
```

## Early Buying Pressure

Catch buying pressure early:

```json
{
  "chains": ["base", "arbitrum"],
  "filters": [
    {
      "metric": "netBuyers",
      "timeFrame": "tenMinutes",
      "gt": 20
    },
    {
      "metric": "buyers",
      "timeFrame": "tenMinutes",
      "gt": 30
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "tenMinutes",
      "gt": 10000
    }
  ],
  "sortBy": {
    "metric": "netBuyers",
    "timeFrame": "tenMinutes",
    "type": "DESC"
  }
}
```

## Response Analysis

Look for these patterns in buying pressure:

```json
{
  "tokenSymbol": "PEPE",
  "buyers": {
    "tenMinutes": 125,
    "oneHour": 850,
    "oneDay": 5200
  },
  "sellers": {
    "tenMinutes": 45,
    "oneHour": 320,
    "oneDay": 2100
  },
  "netBuyers": {
    "tenMinutes": 80,
    "oneHour": 530,
    "oneDay": 3100
  },
  "usdPricePercentChange": {
    "oneHour": 8.5,
    "oneDay": 24.3
  }
}
```

### Healthy Buying Pressure Shows:

- Consistently more buyers than sellers
- Growing buyer count over time
- Price appreciation following buyer influx
- Volume supporting the buyer activity

## Trading Strategies

### Entry Signals

1. **New Buying Pressure**: NetBuyers turns positive after being negative
2. **Accelerating Pressure**: NetBuyers increasing across time frames
3. **Volume Confirmation**: High volume accompanying buyer influx

### Risk Management

```json
{
  "filters": [
    { "metric": "securityScore", "gt": 75 },
    { "metric": "totalLiquidityUsd", "gt": 50000 },
    { "metric": "marketCap", "gt": 500000 }
  ]
}
```

## Buying Pressure Patterns

### FOMO Pattern

- Sudden spike in buyers (10min/1hr)
- Price already up significantly
- Use caution - may be late

### Accumulation Pattern

- Steady buyer increase over days
- Price relatively stable
- Good entry opportunity

### Institutional Pattern

- Large netBuyers with high volume
- Experienced buyers increasing
- Often precedes major moves

## Common Mistakes

1. **Ignoring Sellers**: High buyers mean nothing if sellers are also high
2. **No Volume Check**: Buying pressure needs volume to move price
3. **Single Timeframe**: Always confirm across multiple periods
4. **Chasing Spikes**: Best entries are early in buying pressure

## Advanced Filters

Combine with holder metrics:

```json
{
  "filters": [
    {
      "metric": "netBuyers",
      "timeFrame": "oneDay",
      "gt": 200
    },
    {
      "metric": "holders",
      "timeFrame": "oneDay",
      "gt": 100
    },
    {
      "metric": "holdersBySwap",
      "gt": 70
    }
  ]
}
```
