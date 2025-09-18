---
title: "Get Graduated Pump.fun Tokens with Moralis API"
slug: "../get-graduated-pump-fun-tokens"
description: "Learn how to retrieve tokens that have completed the bonding phase from Pump.fun using Moralis' Solana APIs."
sidebar_label: "Get Graduated Pump.fun Tokens"
sidebar_position: 8
---

# Get Graduated Pump.fun Tokens with Moralis API

Retrieve **graduated tokens** on **Pump.fun** using the **Moralis Solana API**. This guide will show you how to fetch tokens that have completed the bonding phase along with their pricing, liquidity, and graduation timestamp! 🚀

## ✨ What You Can Do

Using this API, you can:

- Fetch a list of tokens that have **graduated from the bonding phase** on Pump.fun
- See **when each token graduated**
- Get **pricing information** in both SOL and USD
- View token **liquidity** and **fully diluted valuation**

## 🛠 Step 1: Get Your Moralis API Key

Before making API calls, you **need an API key**. Here's how to get one:

1. Go to [developers.moralis.com](https://developers.moralis.com/) and **sign up** (it's free!).
2. Navigate to the **"API Keys"** section in your dashboard.
3. Copy your **API Key** – you'll need this for making requests.

## ⚡ Step 2: Fetch Graduated Tokens via API

Visit the [graduated tokens API page](https://docs.moralis.com/web3-data-api/solana/reference/get-graduated-tokens-by-exchange) and make an API request.

You can use **cURL, Postman, or your favorite programming language**.

### 📝 Example API Request

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/graduated?limit=100' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

### 📝 Example API Response

```json
{
  "result": [
    {
      "tokenAddress": "Cy12AGDENaqgdM7A6o8R7TUATdDY2rudLMTpbzbGpump",
      "name": "Ginkgo",
      "symbol": "Ginkgo",
      "logo": "https://d23exngyjlavgo.cloudfront.net/solana_Cy12AGDENaqgdM7A6o8R7TUATdDY2rudLMTpbzbGpump",
      "decimals": "6",
      "priceNative": "0.000000559",
      "priceUsd": "0.000081556",
      "liquidity": "28183.83084726",
      "fullyDilutedValuation": "81556",
      "graduatedAt": "2025-03-05T09:30:42.000Z"
    },
    {
      "tokenAddress": "9iD9XGK6vrzU7qHAodixwP7YWDUWyjoVZhjTsHEmvdRQ",
      "name": "First Muslim Elephant",
      "symbol": "Ali-Phant",
      "logo": "https://d23exngyjlavgo.cloudfront.net/solana_9iD9XGK6vrzU7qHAodixwP7YWDUWyjoVZhjTsHEmvdRQ",
      "decimals": "6",
      "priceNative": "0.000003031",
      "priceUsd": "0.000441674",
      "liquidity": "69272.788967737",
      "fullyDilutedValuation": "441674",
      "graduatedAt": "2025-03-05T09:15:48.000Z"
    }
  ]
}
```

## 📖 Step 3: Understanding the Response

Here's what the response tells you about each graduated token:

- `tokenAddress` → The Solana address of the token
- `name` → The token's name
- `symbol` → The token ticker
- `logo` → URL to the token's logo (if available)
- `decimals` → The token's decimal places
- `priceNative` → Current price in SOL
- `priceUsd` → Current price in USD
- `liquidity` → The token's available liquidity
- `fullyDilutedValuation` → Market cap if all tokens were in circulation
- `graduatedAt` → Timestamp when the token completed its bonding phase

## 🔍 Step 4: Pagination with Cursor

If there are more than 100 graduated tokens, you can paginate through results using the `cursor` parameter:

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/graduated?limit=100&cursor=YOUR_CURSOR' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

The cursor value will be returned in the response when more results are available.

## 🛠 Step 5: Integrate into Your Project

Now that you have graduated token data, you can use it in your app!

🎯 Some ideas:

- Build a **Pump.fun graduated token explorer**
- Create a **performance tracker** for post-graduation price action
- Develop a **historical analysis tool** for graduation trends
- Build a **portfolio tracker** for graduated tokens

## 📊 Code Example: Analyzing Recently Graduated Tokens

Here's a simple JavaScript example that fetches recently graduated tokens and analyzes their performance:

```javascript
async function analyzeGraduatedTokens() {
  const response = await fetch(
    "https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/graduated?limit=20",
    {
      headers: {
        accept: "application/json",
        "X-API-Key": "YOUR_API_KEY",
      },
    }
  );

  const data = await response.json();

  // Display the tokens
  const tokenList = document.getElementById("graduated-tokens");
  const now = new Date();

  data.result.forEach((token) => {
    const tokenElement = document.createElement("div");
    tokenElement.className = "token-card";

    // Calculate days since graduation
    const graduatedDate = new Date(token.graduatedAt);
    const daysSinceGraduation = Math.floor(
      (now - graduatedDate) / (1000 * 60 * 60 * 24)
    );

    tokenElement.innerHTML = `
      <h3>${token.name} (${token.symbol})</h3>
      <p>Price: $${parseFloat(token.priceUsd).toFixed(8)}</p>
      <p>Liquidity: $${parseInt(token.liquidity).toLocaleString()}</p>
      <p>FDV: $${parseInt(token.fullyDilutedValuation).toLocaleString()}</p>
      <p>Graduated: ${daysSinceGraduation} days ago (${graduatedDate.toLocaleDateString()})</p>
      <a href="https://solscan.io/token/${
        token.tokenAddress
      }" target="_blank">View on Solscan</a>
    `;

    tokenList.appendChild(tokenElement);
  });

  // Simple analytics on the data
  const totalLiquidity = data.result.reduce(
    (sum, token) => sum + parseFloat(token.liquidity),
    0
  );
  const avgLiquidity = totalLiquidity / data.result.length;

  const analytics = document.getElementById("analytics");
  analytics.innerHTML = `
    <h3>Analytics</h3>
    <p>Total tokens analyzed: ${data.result.length}</p>
    <p>Total liquidity: $${totalLiquidity.toLocaleString()}</p>
    <p>Average liquidity per token: $${avgLiquidity.toLocaleString()}</p>
  `;
}

analyzeGraduatedTokens();
```

With this API, you can track how tokens perform after completing their bonding phase on Pump.fun!
