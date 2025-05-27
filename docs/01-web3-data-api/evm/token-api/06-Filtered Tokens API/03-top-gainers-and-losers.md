---
title: "Top Gainers & Losers"
description: "Learn how to use the Filtered Tokens API to find the biggest price movers - tokens with significant gains or losses across different time frames."
slug: "/web3-data-api/evm/tutorials/filtered-tokens-api/top-gainers-losers"
sidebar_label: "Get Top Gainers & Losers"
sidebar_position: 3
---

# Top Gainers & Losers

This tutorial shows you how to find tokens with the biggest price movements using the Filtered Tokens API. These queries help identify market opportunities and track significant price action.

## Top Gainers

Find tokens with the highest price increases:

```json
{
  "chains": ["eth"],
  "filters": [
    {
      "metric": "marketCap",
      "gt": 5000000
    },
    {
      "metric": "securityScore",
      "gt": 80
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "gt": 25
    }
  ],
  "sortBy": {
    "metric": "usdPricePercentChange",
    "timeFrame": "oneDay",
    "type": "DESC"
  },
  "limit": 100
}
```

### Query Breakdown:

- `marketCap > $5M`: Filters out micro-cap tokens
- `securityScore > 80`: Ensures high security rating
- `usdPricePercentChange > 25%`: Minimum 25% daily gain
- Sorted by highest gainers first

## Top Losers

Find tokens with the biggest price drops:

```json
{
  "chains": ["eth"],
  "filters": [
    {
      "metric": "marketCap",
      "gt": 5000000
    },
    {
      "metric": "securityScore",
      "gt": 80
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "lt": -25
    }
  ],
  "sortBy": {
    "metric": "usdPricePercentChange",
    "timeFrame": "oneDay",
    "type": "ASC"
  },
  "limit": 100
}
```

### Query Breakdown:

- Same safety filters as gainers
- `usdPricePercentChange < -25%`: Minimum 25% daily loss
- Sorted by biggest losers first (ASC)

## Multi-Chain Gainers

Search for gainers across multiple chains:

```json
{
  "chains": ["eth", "base", "solana", "arbitrum"],
  "filters": [
    {
      "metric": "marketCap",
      "gt": 1000000,
      "lt": 1000000000
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 100000
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "gt": 50
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

### Additional Filters:

- Market cap between $1M - $1B (mid-cap focus)
- Daily volume > $100K (ensures liquidity)
- Sorted by volume to find most traded gainers

## Weekly Movers

For longer-term perspective, use weekly time frames:

```json
{
  "chains": ["eth"],
  "filters": [
    {
      "metric": "marketCap",
      "gt": 10000000
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneWeek",
      "gt": 100
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneWeek",
      "gt": 5000000
    }
  ],
  "sortBy": {
    "metric": "usdPricePercentChange",
    "timeFrame": "oneWeek",
    "type": "DESC"
  }
}
```

## Intraday Movers

For day traders, find short-term movers:

```json
{
  "chains": ["solana"],
  "filters": [
    {
      "metric": "totalLiquidityUsd",
      "gt": 50000
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneHour",
      "gt": 10
    },
    {
      "metric": "buyers",
      "timeFrame": "oneHour",
      "gt": 100
    }
  ],
  "sortBy": {
    "metric": "buyers",
    "timeFrame": "oneHour",
    "type": "DESC"
  }
}
```

## Quality Filters for Movers

To avoid pump and dumps, add these filters:

```json
{
  "filters": [
    { "metric": "securityScore", "gt": 70 },
    { "metric": "totalHolders", "gt": 500 },
    { "metric": "tokenAge", "gt": 30 },
    { "metric": "totalLiquidityUsd", "gt": 10000 }
  ]
}
```

## Excluding Categories

Focus on specific token types:

```json
{
  "categories": {
    "include": ["meme"],
    "exclude": ["stablecoin", "wrapped"]
  },
  "filters": [
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "gt": 20
    }
  ]
}
```

## Response Fields to Watch

Key metrics in the response:

```json
{
  "tokenSymbol": "DOGE",
  "usdPricePercentChange": {
    "tenMinutes": 2.5,
    "oneHour": 8.3,
    "oneDay": 45.7,
    "oneWeek": 125.4
  },
  "volumeUsd": {
    "oneDay": 15000000
  },
  "marketCap": 250000000,
  "buyers": {
    "oneDay": 5420
  },
  "sellers": {
    "oneDay": 3210
  }
}
```

## Full cURL Example - Top Gainers

Test this command to find top gainers:

```bash
curl -X POST \
  'https://deep-index.moralis.io/api/v2.2/discovery/tokens' \
  -H 'X-API-Key: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "chains": ["eth"],
    "filters": [
      {
        "metric": "marketCap",
        "gt": 5000000
      },
      {
        "metric": "securityScore",
        "gt": 80
      },
      {
        "metric": "usdPricePercentChange",
        "timeFrame": "oneDay",
        "gt": 25
      }
    ],
    "sortBy": {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "type": "DESC"
    },
    "limit": 100
  }'
```

Replace `YOUR_API_KEY` with your actual Moralis API key.

## Tips for Trading Movers

1. **Check Multiple Time Frames**: A token up 100% daily but down 50% weekly might be recovering
2. **Volume Confirms Moves**: High volume validates price movements
3. **Watch Buyer/Seller Ratio**: More buyers than sellers supports gains
4. **Set Stop Losses**: Big movers can reverse quickly
5. **Check Liquidity**: Ensure you can exit positions

## Common Pitfalls to Avoid

- Don't chase tokens already up 200%+ without research
- Avoid tokens with very low liquidity
- Be cautious of tokens with security scores under 70
- Check if gains are sustained across multiple time frames
