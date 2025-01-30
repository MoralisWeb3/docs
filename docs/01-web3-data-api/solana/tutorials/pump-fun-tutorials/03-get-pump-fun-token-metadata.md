---
title: "Get Pump.fun Token Metadata with Moralis API"
slug: "../get-pump-fun-token-metadata"
description: "Learn how to retrieve metadata for Pump.fun tokens using Moralis' Solana APIs."
sidebar_label: "Get Pump.fun Token Metadata"
sidebar_position: 3
---

# Get Pump.fun Token Metadata with Moralis API

Retrieve **detailed metadata** for any **Pump.fun token** using the **Moralis Solana API**. This guide will show you how to fetch a token’s name, symbol, logo, total supply, and more! 🚀

## ✨ What You Can Do

Using this API, you can:

- Fetch a **Pump.fun token’s metadata** (name, symbol, decimals, logo, supply)
- Retrieve **Metaplex metadata** (URI, update authority, primary sale status)
- Get the token’s **fully diluted valuation (FDV)**

## 🛠 Step 1: Get Your Moralis API Key

Before making API calls, you **need an API key**. Here’s how to get one:

1. Go to [developers.moralis.com](https://developers.moralis.com/) and **sign up** (it’s free!).
2. Navigate to the **"API Keys"** section in your dashboard.
3. Copy your **API Key** – you’ll need this for making requests.

## 🔍 Step 2: Find Your Pump.fun Token Address

Every **Pump.fun token** has a **unique contract address** on Solana. You’ll need this to fetch metadata.

- If you already know the token’s **Solana address**, you’re good to go!
- If not, you can **find it on Pump.fun** or **Solana explorers like Solscan**.

Example token address for **$PUMP** token:  
`9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump`

## ⚡ Step 3: Fetch Token Metadata via API

Visit the [token metadata API page](https://docs.moralis.com/web3-data-api/solana/reference/get-token-metadata?network=mainnet&address=9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) and make an API request.

You can also use **cURL, Postman, or your favorite programming language**.

### 📝 Example API Request

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump/metadata' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

### 📝 Example API Response

```json
{
  "mint": "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
  "standard": "metaplex",
  "name": "Fartcoin ",
  "symbol": "Fartcoin ",
  "logo": "https://d23exngyjlavgo.cloudfront.net/solana_9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
  "decimals": "6",
  "metaplex": {
    "metadataUri": "https://ipfs.io/ipfs/QmYfe8zVGHA1heej47AkBX3Nnetg2h2kqj5yymz1xyKeHb",
    "masterEdition": false,
    "isMutable": false,
    "sellerFeeBasisPoints": 0,
    "updateAuthority": "TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM",
    "primarySaleHappened": 0
  },
  "fullyDilutedValue": "1147224812.01",
  "totalSupply": "999995434231329",
  "totalSupplyFormatted": "999995434.231329",
  "links": null,
  "description": null
}
```

## 📖 Step 4: Understanding the Response

Here’s what the response tells you:

- `name` → The Pump.fun token’s name
- `symbol` → The token ticker
- `logo` → A URL to the token’s logo image
- `decimals` → The token’s decimal places
- `totalSupplyFormatted` → The total supply formatted for display
- `fullyDilutedValue` → The market cap assuming all tokens are in circulation
- `metaplex.metadataUri` → The IPFS link to extended metadata
- `metaplex.updateAuthority` → The address that can update metadata
- `metaplex.sellerFeeBasisPoints` → The creator fee percentage on secondary sales

## 🛠 Step 5: Integrate into Your Project

Now that you have token metadata, you can use it in your app!

🎯 Some ideas:

- Build a Pump.fun token explorer
- Display metadata on a trading dashboard
- Show token details in a DeFi dApp
