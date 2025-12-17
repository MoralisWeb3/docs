---
title: "New: Token Scores"
slug: "new-token-scores"
authors:
  name: Moralis Team
tags: ["Data API"]
---

We've launched the **Moralis Token Score** - a unified **0–100 rating** that summarizes a token's onchain quality in a single, easy-to-use metric.

## What it is
The Token Score evaluates tokens using **six weighted onchain signals**:
- Token age & maturity  
- Liquidity depth  
- Fully Diluted Valuation (FDV) reasonableness  
- Holder supply distribution  
- Trading volume  
- Transaction activity  

Higher scores indicate stronger onchain fundamentals, while lower scores highlight weaker liquidity, activity, distribution, or unrealistic valuations.

## Availability
- 🌐 **Supported on both EVM and Solana**
- ✅ **Available across all endpoints where `security_score` is exposed**
- 🔄 **Dynamic & real-time** — scores update automatically as onchain data changes  
- ⏳ Scores decay naturally if a token becomes inactive  
- ⚠️ New tokens may appear volatile initially as data accumulates  

## New endpoint: Fetch full Token Score
We've also introduced a **dedicated endpoint** to retrieve the **full Token Score breakdown**, including underlying metrics:

```
GET /tokens/{address}/score
```

- 📊 Returns the overall score plus detailed metric data
- 🔐 **Available on Pro plans and above**
- 🧠 Ideal for token discovery, filtering, ranking, and risk analysis

Example response:
```
{
  "tokenAddress": "0x6982508145454ce325ddbe47a25d4ec3d2311933",
  "chainId": "0x1",
  "score": 94,
  "updatedAt": "2025-12-17T13:13:16.000Z",
  "metrics": {
    "usdPrice": 0.00000402842434389702,
    "liquidityUsd": 17796503.766060613,
    "volumeUsd": {
      "10m": 450.2313257520407,
      "30m": 1698.933789208249,
      "1h": 12046.524987589466,
      "4h": 258302.39298010131,
      "12h": 364831.1304703939,
      "1d": 775582.3422029199,
      "7d": 6831957.3632850265,
      "30d": 40129952.32714323
    },
    "transactions": {
      "10m": 4,
      "30m": 27,
      "1h": 47,
      "4h": 106,
      "12h": 389,
      "1d": 1393,
      "7d": 9614,
      "30d": 87370
    },
    "supply": {
      "total": 420689899653542.56,
      "top10Percent": 41.53
    }
  }
}
```

For a full breakdown of the methodology and FAQs, see the docs:  
👉 https://docs.moralis.com/web3-data-api/evm/token-security-score-faqs
