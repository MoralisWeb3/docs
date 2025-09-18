---
title: "Get Pump.fun Token Swaps with Moralis API"
slug: "../get-pump-fun-token-swaps"
description: "Learn how to retrieve swap transactions for Pump.fun tokens using Moralis' Solana APIs."
sidebar_label: "Get Pump.fun Token Swaps"
sidebar_position: 4
---

# Get Pump.fun Token Swaps with Moralis API

Track **buy and sell swaps** for any **Pump.fun token** using the **Moralis Solana API**. This guide will walk you through retrieving swap transactions **by token address**! 🚀

## ✨ What You Can Do

With this API, you can:

- Fetch **real-time swap transactions** for Pump.fun tokens
- Track **buys, sells, and new positions**
- Get **swap details** (wallet address, amounts, token pairs, exchange name)
- Use this data for **trading bots, analytics, or dashboards**

---

## 🔍 3 Ways to Fetch Pump.fun Swaps

The Moralis API lets you **fetch swaps in 3 ways**:

1. **By Wallet Address** – Get all swaps for a specific **user wallet**
2. **By Token Address** (💡 This example) – Get all swaps for a specific **Pump.fun token**
3. **By Pair Address** – Get all swaps for a **specific token pair**

In this guide, we'll focus on **retrieving swaps by token address**.

---

## 🛠 Step 1: Get Your Moralis API Key

Before making API calls, you **need an API key**. Here's how to get one:

1. Go to [developers.moralis.com](https://developers.moralis.com/) and **sign up** (it's free!).
2. Navigate to the **"API Keys"** section in your dashboard.
3. Copy your **API Key** – you'll need this for making requests.

---

## ⚡ Step 2: Fetch Swaps by Token Address

Visit the [swap API documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-token-swaps?network=mainnet&address=9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) and make an API request.

You can also use **cURL, Postman, or your favorite programming language**.

### 📝 Example API Request

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump/swaps?order=DESC' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

## 📖 Step 3: Understanding Query Parameters

| Parameter        | Type   | Required | Description                                           |
| ---------------- | ------ | -------- | ----------------------------------------------------- |
| network          | string | ✅       | The blockchain network (e.g., mainnet)                |
| tokenAddress     | string | ✅       | The Pump.fun token address                            |
| fromDate         | string | ❌       | (Optional) Start date for fetching swaps              |
| toDate           | string | ❌       | (Optional) End date for fetching swaps                |
| cursor           | string | ❌       | (Optional) Use cursor for pagination                  |
| limit            | number | ❌       | (Optional) Number of results to return                |
| order            | string | ❌       | Sort order: ASC (oldest first) or DESC (newest first) |
| transactionTypes | string | ❌       | Filter by buy, sell                                   |

🔄 Example Response

```json
{
  "cursor": "eyJhbGciOiJIUzI1NiJ9.IntcInBrVmFsdWVcIjpcImM5dTJrc2s2a2t3dmxlZW81eXVxN3h1NDZ4N256ZWJqdGQ5cGJmdXhhdXNtX1NXQVBcIixcImhhc2hWYWx1ZVwiOlwiOWJiNm5mZWNqYmN0bm5sZmtvMmZxdnFicThoaG0xM2tjeXljZHFiZ3B1bXBcIixcImJsb2NrTnVtYmVyXCI6XCIzMTczNDgzMTNcIixcImJsb2NrVGltZXN0YW1wXCI6XCIxNzM4MjQxNDI0XCIsXCJ0cmFuc2FjdGlvbkluZGV4XCI6XCI0NTFcIixcImxvZ0luZGV4XCI6XCIzXCIsXCJwYWdlXCI6MX0i...",
  "page": 1,
  "pageSize": 100,
  "result": [
    {
      "transactionHash": "3S8wDKHkP9si7YajUuub8t7bKwGGc7umSo1bkwhwyT3yQpJJxmSfiGYjUVHD1s6EFt2tuDU1aT3zJdrcQu8xJKLy",
      "transactionType": "buy",
      "transactionIndex": 93,
      "subCategory": "newPosition",
      "blockTimestamp": "2025-01-30T12:51:16.000Z",
      "blockNumber": 317348443,
      "walletAddress": "9Mt5Z4k49NYa1va4i91nziJURWS1KmkVMxSd6BiLhESL",
      "pairAddress": "AbCuhWFpcqspj4Cip3FEdJHqzouJqSa9PJLFd8TuvnPw",
      "pairLabel": "Fartcoin /SOL",
      "exchangeAddress": "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo",
      "exchangeName": "Meteora DLMM",
      "exchangeLogo": "https://entities-logos.s3.amazonaws.com/meteora.png",
      "baseToken": "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
      "quoteToken": "So11111111111111111111111111111111111111112",
      "bought": {
        "address": "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
        "name": "Fartcoin",
        "symbol": "Fartcoin",
        "logo": null,
        "amount": "16.236165000",
        "usdPrice": 1.175495875,
        "usdAmount": 19.085544983319373,
        "tokenType": "token0"
      },
      "sold": {
        "address": "So11111111111111111111111111111111111111112",
        "name": "Wrapped SOL",
        "symbol": "SOL",
        "logo": null,
        "amount": "0.079320000",
        "usdPrice": 240.614535941,
        "usdAmount": 19.08554499084012,
        "tokenType": "token1"
      },
      "baseQuotePrice": "0.004885390113289905",
      "totalValueUsd": 19.08554499
    }
  ]
}
```

## 📖 Step 4: Understanding the Response

| Field           | Description                             |
| --------------- | --------------------------------------- |
| transactionHash | The swap transaction ID                 |
| transactionType | buy or sell swap                        |
| walletAddress   | The trader's wallet                     |
| pairLabel       | Token pair name (e.g., Fartcoin/SOL)    |
| exchangeName    | Name of the DEX                         |
| baseToken       | Address of the main token being swapped |
| quoteToken      | Address of the quote token used in swap |
| usdAmount       | The total swap value in USD             |
| blockTimestamp  | The exact time of the swap              |

## 🛠 Step 5: Use Swap Data in Your App

🎯 Some use cases:

- Build a swap tracking dashboard
- Create a trading bot for Pump.fun tokens
- Monitor high-value swaps for insights
