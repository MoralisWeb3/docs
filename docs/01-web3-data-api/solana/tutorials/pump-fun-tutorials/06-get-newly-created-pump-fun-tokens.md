---
title: "Get New Pump.fun Tokens with Moralis API"
slug: "../get-new-pump-fun-tokens"
description: "Learn how to retrieve new tokens from Pump.fun using Moralis' Solana APIs."
sidebar_label: "Get New Pump.fun Tokens"
sidebar_position: 6
---

# Get New Pump.fun Tokens with Moralis API

Retrieve **newly created tokens** on **Pump.fun** using the **Moralis Solana API**. This guide will show you how to fetch the latest tokens along with their pricing, liquidity, and valuation data! 🚀

## ✨ What You Can Do

Using this API, you can:

- Fetch a list of **newly created tokens** on Pump.fun
- Get **pricing information** in both SOL and USD
- View token **liquidity** and **fully diluted valuation**
- See when each token was **created**

## 🛠 Step 1: Get Your Moralis API Key

Before making API calls, you **need an API key**. Here's how to get one:

1. Go to [developers.moralis.com](https://developers.moralis.com/) and **sign up** (it's free!).
2. Navigate to the **"API Keys"** section in your dashboard.
3. Copy your **API Key** – you'll need this for making requests.

## ⚡ Step 2: Fetch New Tokens via API

Visit the [new tokens API page](https://docs.moralis.com/web3-data-api/solana/reference/get-new-tokens-by-exchange) and make an API request.

You can use **cURL, Postman, or your favorite programming language**.

### 📝 Example API Request

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/new?limit=100' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

### 📝 Example API Response

```json
{
  "result": [
    {
      "tokenAddress": "HcUx4pSPpWoKZCPhHApnMVp3ZE29TM9ZB9JtVFr1LjoB",
      "name": "Test",
      "symbol": "$TEST",
      "logo": null,
      "decimals": "6",
      "priceNative": "0.0000000280515",
      "priceUsd": "0.000004092",
      "liquidity": "8768.063894688",
      "fullyDilutedValuation": "4092",
      "createdAt": "2025-03-05T09:34:11.000Z"
    },
    {
      "tokenAddress": "8RVXB9B6bmWU1uVoySnfSw2UPkuxuNMkxvVcK24Epump",
      "name": "Tsu-chan",
      "symbol": "Tsu-chan",
      "logo": null,
      "decimals": "6",
      "priceNative": "0.0000000312390",
      "priceUsd": "0.000004560",
      "liquidity": "9259.399261434",
      "fullyDilutedValuation": "4560",
      "createdAt": "2025-03-05T09:34:02.000Z"
    }
  ]
}
```

## 📖 Step 3: Understanding the Response

Here's what the response tells you about each new token:

- `tokenAddress` → The Solana address of the token
- `name` → The token's name
- `symbol` → The token ticker
- `logo` → URL to the token's logo (if available)
- `decimals` → The token's decimal places
- `priceNative` → Current price in SOL
- `priceUsd` → Current price in USD
- `liquidity` → The token's available liquidity
- `fullyDilutedValuation` → Market cap if all tokens were in circulation
- `createdAt` → When the token was created on Pump.fun

## 🔍 Step 4: Pagination with Cursor

If there are more than 100 tokens, you can paginate through results using the `cursor` parameter:

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/new?limit=100&cursor=YOUR_CURSOR' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

The cursor value will be returned in the response when more results are available.

## 🛠 Step 5: Integrate into Your Project

Now that you have new token data, you can use it in your app!

🎯 Some ideas:

- Build a **Pump.fun new token alert system**
- Create a **dashboard for monitoring new launches**
- Develop a **trading bot** that acts on new token listings
- Analyze **launch statistics** and trends

## 📊 Code Example: Displaying New Tokens

Here's a simple JavaScript example that fetches and displays new Pump.fun tokens:

```javascript
async function fetchNewPumpFunTokens() {
  const response = await fetch(
    "https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/new?limit=10",
    {
      headers: {
        accept: "application/json",
        "X-API-Key": "YOUR_API_KEY",
      },
    }
  );

  const data = await response.json();

  // Display the tokens
  const tokenList = document.getElementById("token-list");

  data.result.forEach((token) => {
    const tokenElement = document.createElement("div");
    tokenElement.className = "token-card";
    tokenElement.innerHTML = `
      <h3>${token.name} (${token.symbol})</h3>
      <p>Price: $${parseFloat(token.priceUsd).toFixed(8)}</p>
      <p>Liquidity: $${parseInt(token.liquidity).toLocaleString()}</p>
      <p>Created: ${new Date(token.createdAt).toLocaleString()}</p>
      <a href="https://solscan.io/token/${
        token.tokenAddress
      }" target="_blank">View on Solscan</a>
    `;

    tokenList.appendChild(tokenElement);
  });
}

fetchNewPumpFunTokens();
```

With this API, you can stay on top of all the latest Pump.fun token launches!
