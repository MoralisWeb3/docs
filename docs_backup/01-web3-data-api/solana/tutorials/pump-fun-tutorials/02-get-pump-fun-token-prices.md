---
title: "Get Pump.fun Token Prices with Moralis API"
slug: "../get-pump-fun-token-prices"
description: "Learn how to retrieve Pump.fun token prices using Moralis' Solana APIs."
sidebar_label: "Get Pump.fun Token Prices"
sidebar_position: 2
---

# Get Pump.fun Token Prices with Moralis API

Easily fetch the latest **USD and native prices** for any **Pump.fun token** using the **Moralis Solana API**. This guide will walk you through everything step by step! 🚀

## ✨ What You Can Do

Using this API, you can:

- Retrieve **real-time token prices** (in USD and native SOL)
- Get **the best price** from the most **liquid DEX pair**
- Use this data to **build trading dashboards, price bots, or DeFi tools**

## 🛠 Step 1: Get Your Moralis API Key

Before making API calls, you **need an API key**. Here’s how to get one:

1. Go to [developers.moralis.com](https://developers.moralis.com/) and **sign up** (it’s free!).
2. Navigate to the **"API Keys"** section in your dashboard.
3. Copy your **API Key** – you’ll need this for making requests.

## 🔍 Step 2: Find Your Pump.fun Token Address

Every **Pump.fun token** has a **unique contract address** on Solana. You’ll need this to fetch price data.

- If you already know the token’s **Solana address**, you’re good to go!
- If not, you can **find it on Pump.fun** or **Solana explorers like Solscan**.

Example token address for **$PUMP** token:  
`9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump`

## ⚡ Step 3: Fetch Token Price via API

Visit the [token price API page](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-token-price?network=mainnet&address=SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt) and make an API request.

You can also use **cURL, Postman, or your favorite programming language**.

### 📝 Example API Request

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump/price' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

### 📝 Example Response

```json
{
  "tokenAddress": "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
  "pairAddress": "6wJ7W3oHj7ex6MVFp2o26NSof3aey7U8Brs8E371WCXA",
  "exchangeName": "Meteora DLMM",
  "exchangeAddress": "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo",
  "nativePrice": {
    "value": "4905814",
    "symbol": "WSOL",
    "name": "Wrapped Solana",
    "decimals": 9
  },
  "usdPrice": 1.178151922
}
```

### 📖 Step 4: Understanding the Response

- `tokenAddress`: The Pump.fun token contract address.
- `pairAddress`: The liquidity pool pair address.
- `exchangeName`: Name of the decentralized exchange (DEX) providing the price.
- `exchangeAddress`: Address of the DEX.
- `nativePrice`: Price of the token in the native asset (WSOL in this case).
- `usdPrice`: Price of the token in USD.

### 🛠 Step 5: Integrate into Your Project

Now that you have token price data, you can use it in your app!

🎯 Some ideas:

- Create a live token price dashboard
- Build a Telegram bot to track prices
- Set up price alerts for Pump.fun tokens
- Embed real-time price widgets in your website
