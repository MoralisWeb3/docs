---
title: "Token Security Score FAQs"
slug: "/web3-data-api/evm/token-security-score-faqs"
sidebar_position: 3
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

# Moralis Token Score

The **Moralis Token Score** is a unified 0–100 rating that evaluates the onchain quality of a token using **six weighted metrics**.  

---

## What is the Token Score?

The Token Score summarizes a token's onchain fundamentals into a single value between **0 and 100**, where:

- **Higher scores** indicate stronger on-chain quality  
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
- Sorting tokens by on-chain quality  
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
- Raw on-chain metrics used in the calculation  
- Timestamp of last update  

> Note: This endpoint is available on **Pro plans and above**.

---

## Supported Endpoints
Token Scores are returned as part of token metadata across the following endpoints:

| Name                                  | Endpoint                    | API Reference                                                                        |
| ------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------ |
| Get Wallet History                    | `/wallets/:address/history` | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-history)   |
| Get ERC20 Transfers by Wallet         | `/:address/erc20/transfers` | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-transfers)      |
| Get ERC20 Transfers by Contract       | `/erc20/:address/transfers` | [Method Documentation](/web3-data-api/evm/reference/get-token-transfers)             |
| Get ERC20 Price                       | `/erc20/:address/price`     | [Method Documentation](/web3-data-api/evm/reference/get-token-price)                 |
| Get Multiple ERC20 Prices             | `/erc20/prices`             | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices)       |
| Get Wallet Token Balances             | `/:address/erc20`           | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances)       |
| Get Wallet Token Balances with Prices | `/wallets/{address}/tokens` | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances-price) |
| Get ERC20 Metadata by Contract        | `/erc20/metadata`           | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata)              |
| Get ERC20 Metadata by Symbol          | `/erc20/metadata/symbols`   | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata-by-symbol)    |
| Get Filtered Tokens                   | `/discovery/tokens`         | [Method Documentation](/web3-data-api/evm/reference/get-filtered-tokens)             |
| Token Search                          | `/tokens/search`            | [Method Documentation](/web3-data-api/evm/reference/search-tokens)    |
| Get Top Gainers                       | `/discovery/tokens/top-gainers`   | [Method Documentation](/web3-data-api/evm/reference/get-tokens-with-top-gainers)    |
| Get Top Losers                        | `/discovery/tokens/top-losers`    | [Method Documentation](/web3-data-api/evm/reference/get-tokens-with-top-losers)    |


## Supported Chains

The Token Score is available on all mainnet chains.
