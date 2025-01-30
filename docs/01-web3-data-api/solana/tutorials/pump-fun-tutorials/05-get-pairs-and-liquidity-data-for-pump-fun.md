---
title: "Get Pump.fun Token Pairs with Moralis API"
slug: "../get-pump-fun-token-pairs"
description: "Learn how to retrieve token pairs, pair stats, and aggregated pair stats for Pump.fun tokens using Moralis' Solana APIs."
sidebar_label: "Get Pump.fun Token Pairs"
sidebar_position: 5
---

# Get Pump.fun Token Pairs with Moralis API

Retrieve **all token pairs, pair stats, and aggregated stats** for any **Pump.fun token** using the **Moralis Solana API**. This guide will show you how to fetch token pairs **by token address**! 🚀

## ✨ What You Can Do

With this API, you can:

- Retrieve **all token pairs** for a given Pump.fun token
- Get **detailed stats for a specific pair** (price, volume, liquidity)
- Fetch **aggregated stats across all pairs** for a token
- Use this data for **DEX analytics, trading dashboards, and more**

---

## 🔍 3 Ways to Fetch Pump.fun Token Pairs

The Moralis API lets you **fetch token pair data in 3 ways**:

1. **By Token Address** (💡 This example) – Retrieve all trading pairs for a specific **Pump.fun token**
2. **Pair Stats** – Get **detailed stats for a specific pair** (volume, price, liquidity)
3. **Aggregated Pair Stats** – Get **overall stats across all pairs** for a token

In this guide, we’ll focus on **retrieving token pairs by token address**.

---

## 🛠 Step 1: Get Your Moralis API Key

Before making API calls, you **need an API key**. Here’s how to get one:

1. Go to [developers.moralis.com](https://developers.moralis.com/) and **sign up** (it’s free!).
2. Navigate to the **"API Keys"** section in your dashboard.
3. Copy your **API Key** – you’ll need this for making requests.

---

## ⚡ Step 2: Fetch Token Pairs by Address

Visit the [token pairs API documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-token-pairs?network=mainnet&address=9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) and make an API request.

You can also use **cURL, Postman, or your favorite programming language**.

### 📝 Example API Request

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump/pairs' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

### 📖 Step 3: Understanding Query Parameters

| Parameter    | Type   | Required | Description                            |
| ------------ | ------ | -------- | -------------------------------------- |
| network      | string | ✅       | The blockchain network (e.g., mainnet) |
| tokenAddress | string | ✅       | The Pump.fun token address             |

🔄 Example Response

```json
{
  "pairs": [
    {
      "exchangeAddress": "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
      "exchangeName": "Raydium AMM v4",
      "exchangeLogo": "https://entities-logos.s3.amazonaws.com/raydium.png",
      "pairAddress": "Bzc9NZfMqkXR6fz1DBph7BDf9BroyEf6pnzESP7v5iiw",
      "pairLabel": "Fartcoin /SOL",
      "usdPrice": 1.199318671,
      "usdPrice24hrPercentChange": 22.664745257790372,
      "usdPrice24hrUsdChange": 22.664745257790372,
      "volume24hrNative": 273987.170173767,
      "volume24hrUsd": 63991693.95772195,
      "liquidityUsd": 25907004.26453429,
      "baseToken": "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
      "quoteToken": "So11111111111111111111111111111111111111112",
      "inactivePair": false,
      "pair": [
        {
          "tokenAddress": "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
          "tokenName": "Fartcoin ",
          "tokenSymbol": "Fartcoin ",
          "tokenLogo": null,
          "tokenDecimals": "6",
          "pairTokenType": "token0",
          "liquidityUsd": 12937540.20684488
        },
        {
          "tokenAddress": "So11111111111111111111111111111111111111112",
          "tokenName": "Wrapped SOL",
          "tokenSymbol": "SOL",
          "tokenLogo": null,
          "tokenDecimals": "9",
          "pairTokenType": "token1",
          "liquidityUsd": 12969464.057689412
        }
      ]
    }
  ]
}
```

### 🛠 Step 4: Understanding the Response

| Field                     | Description                                  |
| ------------------------- | -------------------------------------------- |
| exchangeName              | The DEX where the token is traded            |
| pairAddress               | The liquidity pool pair address              |
| pairLabel                 | Token pair name (e.g., Fartcoin/SOL)         |
| usdPrice                  | Current price of the token in USD            |
| usdPrice24hrPercentChange | 24-hour price change in percentage           |
| volume24hrUsd             | Total 24-hour trading volume in USD          |
| liquidityUsd              | Total liquidity available in USD             |
| baseToken                 | Address of the main token in the pair        |
| quoteToken                | Address of the quote token (SOL, USDC, etc.) |

### 🛠 Step 5: Use Token Pair Data in Your App

🎯 Some use cases:

- Build a DEX analytics dashboard
- Show price charts for Pump.fun token pairs
- Track liquidity and trading volume across exchanges
