---
title: "Blue Chip Tokens"
description: "Learn how to use the Filtered Tokens API to identify established, high-quality tokens with large market caps, proven track records, and substantial trading activity."
slug: "/web3-data-api/evm/tutorials/filtered-tokens-api/blue-chip-tokens"
sidebar_position: 5
---

# Blue Chip Tokens

This tutorial shows you how to find blue chip tokens - established cryptocurrencies with large market caps, high security scores, proven longevity, and significant trading volumes.

## Blue Chip Query

Find high-quality, established tokens:

```json
{
  "chains": ["eth"],
  "filters": [
    {
      "metric": "securityScore",
      "gt": 70
    },
    {
      "metric": "marketCap",
      "gt": 150000000,
      "lt": 3000000000
    },
    {
      "metric": "tokenAge",
      "gt": 365
    },
    {
      "metric": "buyers",
      "timeFrame": "oneMonth",
      "gt": 100
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneMonth",
      "gt": 500000
    }
  ],
  "sortBy": {
    "metric": "marketCap",
    "type": "DESC"
  },
  "limit": 100
}
```

### Blue Chip Criteria:

- **High Security**: Score above 70
- **Large Market Cap**: $150M - $3B range
- **Proven History**: Over 1 year old
- **Active Trading**: 100+ monthly buyers
- **High Volume**: Over $500K monthly volume

## Full cURL Example

Test this command to find blue chip tokens:

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
        "metric": "marketCap",
        "gt": 150000000,
        "lt": 3000000000
      },
      {
        "metric": "tokenAge",
        "gt": 365
      },
      {
        "metric": "buyers",
        "timeFrame": "oneMonth",
        "gt": 100
      },
      {
        "metric": "volumeUsd",
        "timeFrame": "oneMonth",
        "gt": 500000
      }
    ],
    "sortBy": {
      "metric": "marketCap",
      "type": "DESC"
    },
    "limit": 100
  }'
```

## Premium Blue Chips

For the highest quality tokens, use stricter filters:

```json
{
  "chains": ["eth"],
  "filters": [
    {
      "metric": "securityScore",
      "gt": 85
    },
    {
      "metric": "marketCap",
      "gt": 1000000000
    },
    {
      "metric": "tokenAge",
      "gt": 730
    },
    {
      "metric": "totalHolders",
      "gt": 10000
    },
    {
      "metric": "totalLiquidityUsd",
      "gt": 5000000
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneMonth",
      "gt": 50000000
    }
  ],
  "sortBy": {
    "metric": "marketCap",
    "type": "DESC"
  }
}
```

### Premium Criteria:

- Market cap over $1B
- 2+ years old
- 10,000+ holders
- $5M+ liquidity
- $50M+ monthly volume

## Multi-Chain Blue Chips

Search for blue chips across major chains:

```json
{
  "chains": ["eth", "polygon", "arbitrum", "binance"],
  "categories": {
    "exclude": ["stablecoin", "wrapped", "meme"]
  },
  "filters": [
    {
      "metric": "marketCap",
      "gt": 100000000
    },
    {
      "metric": "securityScore",
      "gt": 75
    },
    {
      "metric": "tokenAge",
      "gt": 180
    },
    {
      "metric": "holderSupplyPercentTop10",
      "lt": 60
    }
  ],
  "metricsToReturn": [
    "marketCap",
    "totalHolders",
    "volumeUsd",
    "securityScore"
  ],
  "sortBy": {
    "metric": "marketCap",
    "type": "DESC"
  }
}
```

### Additional Filters:

- Excludes meme coins for serious investments
- Checks holder distribution (top 10 hold < 60%)
- Returns only essential metrics

## Sector-Specific Blue Chips

Find blue chips in specific categories:

```json
{
  "chains": ["eth"],
  "categories": {
    "include": ["defi", "infrastructure"]
  },
  "filters": [
    {
      "metric": "marketCap",
      "gt": 200000000
    },
    {
      "metric": "securityScore",
      "gt": 80
    },
    {
      "metric": "volumeUsd",
      "timeFrame": "oneWeek",
      "gt": 10000000
    }
  ],
  "sortBy": {
    "metric": "totalHolders",
    "type": "DESC"
  }
}
```

## Blue Chip Response Example

Typical blue chip token characteristics:

```json
{
  "tokenSymbol": "UNI",
  "tokenName": "Uniswap",
  "marketCap": 4500000000,
  "securityScore": 95,
  "tokenAge": 1200,
  "totalHolders": 354000,
  "totalLiquidityUsd": 125000000,
  "volumeUsd": {
    "oneDay": 85000000,
    "oneWeek": 620000000,
    "oneMonth": 2400000000
  },
  "holderSupplyPercentTop10": 42.5,
  "usdPricePercentChange": {
    "oneDay": 2.1,
    "oneWeek": -3.4,
    "oneMonth": 8.7
  }
}
```

## Blue Chip Indicators

Key metrics to evaluate:

1. **Market Cap**: Generally > $100M, ideally > $1B
2. **Age**: Minimum 6 months, preferably 1+ years
3. **Holders**: Thousands to hundreds of thousands
4. **Liquidity**: Deep liquidity for large trades
5. **Volume**: Consistent high volume across time frames
6. **Distribution**: Not overly concentrated in few wallets

## Investment Strategy

### Portfolio Allocation

- **Core Holdings**: Top 10 by market cap (50-70%)
- **Satellite Positions**: Smaller blue chips (20-30%)
- **Emerging Blue Chips**: $100M-$500M caps (10-20%)

### Risk Management

```json
{
  "filters": [
    { "metric": "securityScore", "gt": 90 },
    { "metric": "holderSupplyPercentTop10", "lt": 50 },
    { "metric": "totalLiquidityUsd", "gt": 1000000 }
  ]
}
```

## Blue Chip vs Growth Comparison

Use this query to find emerging blue chips:

```json
{
  "filters": [
    {
      "metric": "marketCap",
      "gt": 50000000,
      "lt": 200000000
    },
    {
      "metric": "tokenAge",
      "gt": 90,
      "lt": 365
    },
    {
      "metric": "holders",
      "timeFrame": "oneMonth",
      "gt": 1000
    }
  ]
}
```

## Common Blue Chip Categories

- **DeFi Protocols**: Uniswap, Aave, Compound
- **Layer 2s**: Arbitrum, Optimism, Polygon
- **Infrastructure**: Chainlink, The Graph
- **Exchange Tokens**: Platform-specific tokens
