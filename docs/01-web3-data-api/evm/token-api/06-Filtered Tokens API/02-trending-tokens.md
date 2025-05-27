---
title: "Finding Trending Tokens"
description: "Learn how to use the Filtered Tokens API to discover trending tokens across multiple blockchains based on volume, buyer activity, and price momentum."
slug: "/web3-data-api/evm/tutorials/filtered-tokens-api/trending-tokens"
sidebar_label: "Trending Tokens"
sidebar_position: 2
---

# Finding Trending Tokens

This tutorial shows you how to find trending tokens using the Filtered Tokens API. Trending tokens typically have high trading volume, increasing buyer activity, and positive price momentum.

## Basic Trending Tokens Query

Here's a simple query to find trending tokens on Ethereum and Solana:

```json
{
  "chains": ["eth", "solana"],
  "filters": [
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 1000000
    },
    {
      "metric": "buyers",
      "timeFrame": "oneHour",
      "gt": 50
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "gt": 10
    }
  ],
  "sortBy": {
    "metric": "volumeUsd",
    "timeFrame": "oneDay",
    "type": "DESC"
  },
  "limit": 20
}
```

### What This Query Does:

- Searches on Ethereum and Solana chains
- Filters for tokens with daily volume > $1M
- Requires at least 50 buyers in the last hour
- Only shows tokens up 10%+ in the last day
- Sorts by highest daily volume first
- Returns top 20 results

## Enhanced Trending Query with Safety Filters

For better quality results, add safety filters:

```json
{
  "chains": ["solana", "eth"],
  "filters": [
    {
      "metric": "fullyDilutedValuation",
      "gt": 500000
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneHour",
      "gt": 500000
    },
    {
      "metric": "buyers",
      "timeFrame": "tenMinutes",
      "gt": 10
    },
    {
      "metric": "sellers",
      "timeFrame": "tenMinutes",
      "gt": 10
    },
    {
      "metric": "securityScore",
      "gt": 70
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

### Additional Filters Explained:

- `fullyDilutedValuation > 500000`: Ensures token has meaningful value
- `securityScore > 70`: Filters out potentially risky tokens
- `buyers` and `sellers` in 10 minutes: Ensures active trading

## Short-Term Trending (Scalping)

For very short-term trends, use smaller time frames:

```json
{
  "chains": ["solana"],
  "filters": [
    {
      "metric": "volumeUsd",
      "timeFrame": "tenMinutes",
      "gt": 50000
    },
    {
      "metric": "buyers",
      "timeFrame": "tenMinutes",
      "gt": 20
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "thirtyMinutes",
      "gt": 5
    }
  ],
  "sortBy": {
    "metric": "buyers",
    "timeFrame": "tenMinutes",
    "type": "DESC"
  },
  "limit": 10
}
```

## Excluding Categories

To focus on specific token types, exclude unwanted categories:

```json
{
  "chains": ["eth", "base"],
  "categories": {
    "exclude": ["stablecoin", "wrapped"]
  },
  "filters": [
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 2000000
    },
    {
      "metric": "netBuyers",
      "timeFrame": "oneHour",
      "gt": 100
    }
  ],
  "sortBy": {
    "metric": "volumeUsd",
    "timeFrame": "oneDay",
    "type": "DESC"
  }
}
```

## Recommended Safety Filters

Always include these filters to avoid low-quality tokens:

```json
{
  "filters": [
    { "metric": "marketCap", "gt": 0, "lt": 5000000000000 },
    { "metric": "totalLiquidityUsd", "gt": 500 },
    { "metric": "volumeUsd", "timeFrame": "oneDay", "gt": 1000 }
  ]
}
```

## Response Example

The API returns an array of tokens with their metrics:

```json
[
  {
    "tokenAddress": "0x...",
    "tokenSymbol": "PEPE",
    "tokenName": "Pepe",
    "tokenLogo": "https://...",
    "chainId": "0x1",
    "volumeUsd": {
      "oneDay": 25000000
    },
    "usdPricePercentChange": {
      "oneDay": 35.5
    },
    "buyers": {
      "oneHour": 1250
    },
    "marketCap": 500000000,
    "securityScore": 85
  }
]
```

## Full cURL Example

Here's a complete cURL command you can test:

```bash
curl -X POST \
  'https://deep-index.moralis.io/api/v2.2/discovery/tokens' \
  -H 'X-API-Key: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "chains": ["eth", "solana"],
    "filters": [
      {
        "metric": "volumeUsd",
        "timeFrame": "oneDay",
        "gt": 1000000
      },
      {
        "metric": "buyers",
        "timeFrame": "oneHour",
        "gt": 50
      },
      {
        "metric": "usdPricePercentChange",
        "timeFrame": "oneDay",
        "gt": 10
      }
    ],
    "sortBy": {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "type": "DESC"
    },
    "limit": 20
  }'
```

Replace `YOUR_API_KEY` with your actual Moralis API key.

## Tips for Finding Trending Tokens

1. **Volume is Key**: High volume indicates real interest
2. **Check Buyer/Seller Ratio**: More buyers than sellers suggests upward pressure
3. **Use Multiple Time Frames**: Compare 1-hour vs 1-day trends
4. **Monitor New Listings**: Tokens with `tokenAge < 7` can trend quickly
5. **Set Realistic Filters**: Don't make filters too restrictive
