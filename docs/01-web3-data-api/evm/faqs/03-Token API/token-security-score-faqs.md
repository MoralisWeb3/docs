---
title: "Token Security Score FAQs"
slug: "/web3-data-api/evm/token-security-score-faqs"
sidebar_position: 3
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

# Moralis Token Score

The **Moralis Token Score** is a unified 0–100 rating that evaluates the onchain quality of a token using **six weighted metrics**, supported across all EVM chains and Solana mainnet. 

---

## What is the Token Score?

The Token Score summarizes a token's onchain fundamentals into a single value between **0 and 100**, where:

- **Higher scores** indicate stronger onchain quality  
- **Lower scores** indicate weaker liquidity, activity, distribution, or unrealistic valuations  

It is designed to be:

- Simple to display  
- Easy to filter and sort  
- Transparent and easy to explain  

---

## How is the Token Score calculated?

Each of the six metrics produces a sub-score from 0 to 100, and the final score is a weighted average. The metrics are:

1. **Age** - token activity across multiple timeframes  
2. **Liquidity** - liquidity depth
3. **FDV** - fully diluted valuation reasonableness  
4. **Holder Supply** - distribution of supply among top holders  
5. **Volume** - trading volume 
6. **Activity** - transaction counts  

---

## Metrics Overview

### 1. Token Age & Maturity
- Evaluates activity across timeframes (10m → 30d).  
- Tokens that sustain or grow activity over longer periods receive higher scores.

### 2. Liquidity Depth
- Measures liquidity across all pools belonging to a token.
- Higher liquidity generally indicates healthier and more resilient markets.

### 3. Fully Diluted Valuation (FDV)
- Penalizes extreme or unrealistic valuations.  
- Reasonably valued tokens receive higher FDV scores.

### 4. Holder Distribution
- Assesses how much of the supply is concentrated in the top holders.  
- More decentralization = higher score.

### 5. Trading Volume
- Measures trading volume across all time windows.  
- High volume in any timeframe positively impacts the score.

### 6. Transaction Activity
- Measures frequency of swaps and transfers.  
- High transaction counts indicate stronger adoption and usage.

---

## Dynamic Scoring

The Token Score is **dynamic**, meaning it updates automatically as new onchain data becomes available. Because the model incorporates multiple rolling timeframes (10 minutes up to 1 month), a token’s score may change due to:

- Increased or decreased transaction activity  
- Shifts in liquidity  
- Changes in trading volume  
- Supply distribution evolving  
- Market valuation moving significantly  

Scores naturally **decay over time** if a token becomes inactive, as older datapoints fall out of the model.  
This ensures the score always reflects **current** onchain conditions.

---

## Early & New Tokens

Scores for very new tokens can sometimes be **volatile or appear inconsistent** in the earliest stages of trading.  
This is expected, as the scoring model is still collecting activity patterns across its time horizons.

**Key points about new-token scoring:**

- Early activity is often spiky and unstable  
- Short-term timeframes dominate the score until longer periods accumulate  
- As data builds up, the score stabilizes and becomes more representative  
- Tokens with genuine early adoption will quickly rise into their appropriate score range  

> The model adapts rapidly to real onchain traction — tokens with strong fundamentals will see their scores normalize within a short timeframe.

---

## Score Updates

- Scores are recalculated whenever a token has activity  
- As long as trading continues, the score stays up to date  
- If activity stops, older data decays out of the model and the score may decline

---

## How can the Token Score be used?

The Token Score is an informational onchain quality signal suitable for:

### Wallets & Explorers
- Displaying token quality at a glance  
- Highlighting high-quality tokens  
- Warning users about low-scoring assets  

### DEXs & Trading Interfaces
- Supporting safer trading experiences  
- Powering token discovery and ranking flows  

### Analytics & Discovery Tools
- Filtering tokens by score (e.g., score ≥ 70)  
- Sorting tokens by onchain quality  
- Highlighting trending or improving tokens  

### Risk & Monitoring Systems
- Triggering alerts for sharp score drops  
- Flagging potentially risky assets for review  

> Note: The Token Score is not investment advice. It is an onchain quality indicator.

---

## Accessing Detailed Score Data

Developers can fetch the full scoring breakdown via:

```
GET /tokens/{address}/score
```

This endpoint returns:

- Final score (0–100)  
- Sub-scores for all six metrics  
- Raw onchain metrics used in the calculation  
- Timestamp of last update

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

> Note: This endpoint is available on **Pro plans and above**.

---

## Supported Endpoints
Token Scores are returned as part of token metadata across the following endpoints:

| Name                                  | Network | Endpoint                    | API Reference                                                                        |
| ------------------------------------- | ------- | -------------------- | ------------------------------------------------------------------------------------ |
| Get Wallet History                    | EVM | `/wallets/:address/history` | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-history)   |
| Get ERC20 Transfers by Wallet         | EVM | `/:address/erc20/transfers` | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-transfers)      |
| Get ERC20 Transfers by Contract       | EVM | `/erc20/:address/transfers` | [Method Documentation](/web3-data-api/evm/reference/get-token-transfers)             |
| Get ERC20 Price                       | EVM | `/erc20/:address/price`     | [Method Documentation](/web3-data-api/evm/reference/get-token-price)                 |
| Get Multiple ERC20 Prices             | EVM | `/erc20/prices`             | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices)       |
| Get Wallet Token Balances             | EVM | `/:address/erc20`           | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances)       |
| Get Wallet Token Balances with Prices | EVM | `/wallets/{address}/tokens` | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances-price) |
| Get ERC20 Metadata by Contract        | EVM | `/erc20/metadata`           | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata)              |
| Get ERC20 Metadata by Symbol          | EVM | `/erc20/metadata/symbols`   | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata-by-symbol)    |
| Get Filtered Tokens                   | EVM & Solana | `/discovery/tokens`         | [Method Documentation](/web3-data-api/evm/reference/get-filtered-tokens)             |
| Token Search                          | EVM & Solana | `/tokens/search`            | [Method Documentation](/web3-data-api/evm/reference/search-tokens)    |
| Get Top Gainers                       | EVM & Solana | `/discovery/tokens/top-gainers`   | [Method Documentation](/web3-data-api/evm/reference/get-tokens-with-top-gainers)    |
| Get Top Losers                        | EVM & Solana | `/discovery/tokens/top-losers`    | [Method Documentation](/web3-data-api/evm/reference/get-tokens-with-top-losers)    |
| Get Wallet Token Balances             | Solana | `/account/:network/:address/tokens`   | [Method Documentation](/web3-data-api/solana/reference/get-spl-token-balances)    |
| Get Wallet Portfolio             | Solana | `/account/:network/:address/portfolio`   | [Method Documentation](/web3-data-api/solana/reference/get-native-and-spl-balances)    |
| Get Token Metadata             | Solana | `/account/:network/:address/metadata`   | [Method Documentation](/web3-data-api/solana/reference/get-token-metadata)    |
| Get Token Price             | Solana | `/token/:network/:address/price`   | [Method Documentation](/web3-data-api/solana/reference/get-sol-token-price)    |
| Get Multiple Token Prices             | Solana | `/token/:network/prices`   | [Method Documentation](/web3-data-api/solana/reference/get-multiple-token-prices)    |

## Supported Chains

The Token Score is available on all mainnet chains, for **both EVM and Solana tokens**. This allows you to **compare token quality across EVM chains and Solana using a unified metric**, while still respecting chain-specific data structures under the hood.
