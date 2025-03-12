---
title: "Get Bonding Pump.fun Tokens with Moralis API"
slug: "../get-bonding-pump-fun-tokens"
description: "Learn how to retrieve tokens in the bonding phase from Pump.fun using Moralis' Solana APIs."
sidebar_label: "Get Bonding Pump.fun Tokens"
sidebar_position: 7
---

# Get Bonding Pump.fun Tokens with Moralis API

Retrieve **tokens in the bonding phase** on **Pump.fun** using the **Moralis Solana API**. This guide will show you how to fetch tokens currently in bonding along with their progress, pricing, and valuation data! 🚀

## ✨ What You Can Do

Using this API, you can:

- Fetch a list of tokens **currently in the bonding phase** on Pump.fun
- Get the **bonding curve progress** for each token
- View **pricing information** in both SOL and USD
- See token **liquidity** and **fully diluted valuation**

## 🛠 Step 1: Get Your Moralis API Key

Before making API calls, you **need an API key**. Here's how to get one:

1. Go to [developers.moralis.com](https://developers.moralis.com/) and **sign up** (it's free!).
2. Navigate to the **"API Keys"** section in your dashboard.
3. Copy your **API Key** – you'll need this for making requests.

## ⚡ Step 2: Fetch Bonding Tokens via API

Visit the [bonding tokens API page](https://docs.moralis.com/web3-data-api/solana/reference/get-bonding-tokens-by-exchange) and make an API request.

You can use **cURL, Postman, or your favorite programming language**.

### 📝 Example API Request

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/bonding?limit=100' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

### 📝 Example API Response

```json
{
  "result": [
    {
      "tokenAddress": "H2p8S7Ssd3mrBft1bcDGnzW8KNRAGtPTtJLv1tnupump",
      "name": "SKYTO",
      "symbol": "SKYTO",
      "logo": "https://d23exngyjlavgo.cloudfront.net/solana_H2p8S7Ssd3mrBft1bcDGnzW8KNRAGtPTtJLv1tnupump",
      "decimals": "6",
      "priceNative": "0.000000346",
      "priceUsd": "0.000050522",
      "liquidity": "30803.481504874",
      "fullyDilutedValuation": "50522",
      "bondingCurveProgress": 96.85384504519783
    },
    {
      "tokenAddress": "BnYS74gQuStmksR3PPGz3yPEhy5rD6mTAiYo4iQ8pump",
      "name": "Fuck Around & Find Out",
      "symbol": "FAFO",
      "logo": null,
      "decimals": "6",
      "priceNative": "0.000000330",
      "priceUsd": "0.000048279",
      "liquidity": "30148.547804968",
      "fullyDilutedValuation": "48279",
      "bondingCurveProgress": 95.92357915846021
    }
  ]
}
```

## 📖 Step 3: Understanding the Response

Here's what the response tells you about each bonding token:

- `tokenAddress` → The Solana address of the token
- `name` → The token's name
- `symbol` → The token ticker
- `logo` → URL to the token's logo (if available)
- `decimals` → The token's decimal places
- `priceNative` → Current price in SOL
- `priceUsd` → Current price in USD
- `liquidity` → The token's available liquidity
- `fullyDilutedValuation` → Market cap if all tokens were in circulation
- `bondingCurveProgress` → Percentage of the bonding curve that has been completed (0-100%)

## 🔍 Step 4: Pagination with Cursor

If there are more than 100 tokens in bonding, you can paginate through results using the `cursor` parameter:

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/bonding?limit=100&cursor=YOUR_CURSOR' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

The cursor value will be returned in the response when more results are available.

## 🛠 Step 5: Integrate into Your Project

Now that you have bonding token data, you can use it in your app!

🎯 Some ideas:

- Build a **Pump.fun bonding tracker** dashboard
- Create a **notification system** for tokens nearing graduation
- Develop a **trading strategy** based on bonding progression
- Analyze which tokens are **gaining momentum** in the bonding phase

## 📊 Code Example: Tracking Bonding Progress

Here's a simple JavaScript example that fetches bonding tokens and visualizes their progress:

```javascript
async function fetchBondingTokens() {
  const response = await fetch(
    "https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/bonding?limit=10",
    {
      headers: {
        accept: "application/json",
        "X-API-Key": "YOUR_API_KEY",
      },
    }
  );

  const data = await response.json();

  // Display the tokens
  const tokenList = document.getElementById("bonding-tokens");

  data.result.forEach((token) => {
    const tokenElement = document.createElement("div");
    tokenElement.className = "token-card";

    // Calculate progress bar color based on percentage
    let progressColor = "#ff9900"; // Default orange
    if (token.bondingCurveProgress > 90) {
      progressColor = "#00cc00"; // Green for nearly complete
    } else if (token.bondingCurveProgress < 30) {
      progressColor = "#ff3300"; // Red for early phase
    }

    tokenElement.innerHTML = `
      <h3>${token.name} (${token.symbol})</h3>
      <p>Price: $${parseFloat(token.priceUsd).toFixed(8)}</p>
      <p>Liquidity: $${parseInt(token.liquidity).toLocaleString()}</p>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${
          token.bondingCurveProgress
        }%; background-color: ${progressColor}"></div>
        <span>${token.bondingCurveProgress.toFixed(2)}%</span>
      </div>
      <a href="https://solscan.io/token/${
        token.tokenAddress
      }" target="_blank">View on Solscan</a>
    `;

    tokenList.appendChild(tokenElement);
  });
}

fetchBondingTokens();
```

With this API, you can closely monitor tokens going through the bonding curve process on Pump.fun!
