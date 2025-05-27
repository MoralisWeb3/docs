---
title: "Risky Bets"
description: "Learn how to use the Filtered Tokens API to find high-risk, high-reward tokens with explosive potential but significant downside risk."
slug: "/web3-data-api/evm/tutorials/filtered-tokens-api/risky-bets"
sidebar_label: "Risky Bets"
sidebar_position: 8
---

# Risky Bets

This tutorial shows you how to find high-risk, high-reward tokens. These are typically newer, smaller market cap tokens with high volatility and potential for significant gains or losses.

## Basic Risky Bets Query

Find volatile, high-risk opportunities:

```json
{
  "chains": ["solana", "base"],
  "filters": [
    {
      "metric": "marketCap",
      "gt": 100000,
      "lt": 5000000
    },
    {
      "metric": "tokenAge",
      "lt": 30
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneDay",
      "gt": 50
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 100000
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

### Risk Indicators:

- Low market cap ($100K - $5M)
- New tokens (< 30 days old)
- High volatility (50%+ daily moves)
- Significant volume relative to market cap

## Full cURL Example

```bash
curl -X POST \
  'https://deep-index.moralis.io/api/v2.2/discovery/tokens' \
  -H 'X-API-Key: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "chains": ["solana", "base"],
    "filters": [
      {
        "metric": "marketCap",
        "gt": 50000,
        "lt": 2000000
      },
      {
        "metric": "tokenAge",
        "lt": 7
      },
      {
        "metric": "volumeUsd",
        "timeFrame": "oneHour",
        "gt": 50000
      },
      {
        "metric": "buyers",
        "timeFrame": "oneHour",
        "gt": 100
      },
      {
        "metric": "totalLiquidityUsd",
        "gt": 10000
      }
    ],
    "sortBy": {
      "metric": "volumeUsd",
      "timeFrame": "oneHour",
      "type": "DESC"
    },
    "limit": 30
  }'
```

## Ultra High-Risk Moonshots

For maximum risk/reward (gambles):

```json
{
  "chains": ["solana"],
  "filters": [
    {
      "metric": "marketCap",
      "lt": 500000
    },
    {
      "metric": "tokenAge",
      "lt": 3
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneHour",
      "gt": 25000
    },
    {
      "metric": "buyers",
      "timeFrame": "oneHour",
      "gt": 50
    },
    {
      "metric": "usdPricePercentChange",
      "timeFrame": "oneHour",
      "gt": 20
    }
  ],
  "sortBy": {
    "metric": "buyers",
    "timeFrame": "oneHour",
    "type": "DESC"
  }
}
```

### Moonshot Characteristics:

- Micro cap (< $500K)
- Brand new (< 3 days)
- High hourly activity
- Rapid price movement

## Meme Coin Risky Bets

Focus on volatile meme tokens:

```json
{
  "chains": ["eth", "base", "solana"],
  "categories": {
    "include": ["meme"]
  },
  "filters": [
    {
      "metric": "marketCap",
      "gt": 100000,
      "lt": 10000000
    },
    {
      "metric": "holders",
      "timeFrame": "oneDay",
      "gt": 100
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 500000
    }
  ],
  "sortBy": {
    "metric": "holders",
    "timeFrame": "oneDay",
    "type": "DESC"
  }
}
```

## High Volume Risky Plays

Risky tokens with unusual volume:

```json
{
  "chains": ["solana", "base"],
  "filters": [
    {
      "metric": "marketCap",
      "lt": 1000000
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneDay",
      "gt": 1000000
    },
    {
      "metric": "totalLiquidityUsd",
      "gt": 5000,
      "lt": 50000
    }
  ],
  "metricsToReturn": [
    "marketCap",
    "volumeUsd",
    "totalLiquidityUsd",
    "usdPricePercentChange"
  ],
  "sortBy": {
    "metric": "volumeUsd",
    "timeFrame": "oneDay",
    "type": "DESC"
  }
}
```

### Volume/MC Ratio Alert:

- Volume > Market Cap = Extreme volatility
- High turnover rate
- Potential pump activity

## Response Analysis for Risk

High-risk token characteristics:

```json
{
  "tokenSymbol": "MOON",
  "marketCap": 250000,
  "tokenAge": 2,
  "totalLiquidityUsd": 15000,
  "volumeUsd": {
    "oneHour": 125000,
    "oneDay": 1500000
  },
  "usdPricePercentChange": {
    "oneHour": 85,
    "oneDay": 450
  },
  "buyers": {
    "oneHour": 250
  },
  "totalHolders": 850,
  "securityScore": 45,
  "holderSupplyPercentTop10": 65
}
```

### Red Flags:

- Low security score
- High concentration in top holders
- Volume 6x market cap
- Extreme price volatility

## Avoiding Scams

Essential safety filters even for risky bets:

```json
{
  "filters": [
    { "metric": "totalLiquidityUsd", "gt": 5000 },
    { "metric": "securityScore", "gt": 30 },
    { "metric": "totalHolders", "gt": 100 },
    { "metric": "contractVerified", "eq": true }
  ]
}
```
