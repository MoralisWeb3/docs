---
title: "How to Get Aggregated Token Pair Stats with Moralis"
slug: "../how-to-get-aggregated-token-pair-stats"
description: "Learn how to fetch aggregated token pair stats including liquidity, active pairs, and DEX coverage using Moralis' powerful API. Ideal for developers building DeFi dashboards and liquidity trackers."
sidebar_label: "Get Aggregated Token Pair Stats"
sidebar_position: 1
tags:
  [
    "Aggregated Token Pair Stats API",
    "Liquidity API",
    "DeFi API",
    "Moralis API",
    "Crypto API",
  ]
keywords:
  [
    "aggregated token pair stats",
    "liquidity API",
    "fetch token pairs",
    "Moralis API",
    "DEX stats",
    "crypto liquidity data",
  ]
---

# Get Aggregated Token Pair Stats with Moralis API - Full Tutorial

In this tutorial, we'll guide you through how to use the **Moralis Aggregated Token Pair Stats API** to fetch aggregated statistics for a specific ERC20 token. This is ideal for developers looking to retrieve liquidity, active pairs, and DEX (decentralized exchange) stats in one API call. Whether you’re building DeFi dashboards, liquidity trackers, or analytics tools, this tutorial will help you get started quickly.

## Watch the Full Video Tutorial

To see a complete walkthrough of how to fetch aggregated token pair statistics using the Moralis API, check out the video below:

[![Watch the video](https://img.youtube.com/vi/djoAlbLOsks/0.jpg)](https://youtu.be/djoAlbLOsks)

## Key Features of the Aggregated Token Pair Stats API

- **Real-Time Liquidity Data**: Get the total liquidity for a given ERC20 token in USD, aggregated across multiple decentralized exchanges (DEXes).
- **Active Token Pairs**: Fetch the total number of active trading pairs for a specified token, providing insights into token activity across platforms.
- **DEX Coverage**: Retrieve the number of decentralized exchanges where the token is actively traded, helping track token distribution across various DEXes.
- **Cross-Chain Support**: Supports multiple blockchain networks such as Ethereum, Binance Smart Chain, and more, allowing you to retrieve token pair data across different ecosystems.
- **Efficient Data Retrieval**: Fetch all relevant token stats in one API call, making it simpler and faster to develop DeFi applications, liquidity trackers, or dashboards.
- **Comprehensive Analytics**: Get detailed stats on liquidity and pair activity for improved token analysis and market insights.

## Step 1: Set Up the Moralis API

To get started, you'll need to set up Moralis and obtain your API key. If you haven't done so yet, follow the [Getting Started with Moralis API](https://docs.moralis.io/docs/getting-started) guide.

Once you have your API key, you can start making requests to fetch aggregated token pair stats.

## Step 2: Install Dependencies

Before we begin, make sure you have the necessary dependencies installed. Run the following command to install `node-fetch`, which we'll use for making HTTP requests:

```bash
$ npm install node-fetch --save
```

Additionally, add `"type": "module"` to your `package.json` file to enable ES module support.

### Example package.json

```json
{
  "name": "aggregated-token-pair-stats",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "node-fetch": "^3.0.0"
  }
}
```

## Step 3: Fetch Aggregated Token Pair Stats

Now you can use the following JavaScript code to fetch aggregated stats for a specific token. In this example, we’ll retrieve stats for the USDC token on the Ethereum network.

### Example JavaScript Code

```javascript
import fetch from "node-fetch";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-Key": "YOUR_API_KEY", // Replace with your actual API key
  },
};

fetch(
  "https://deep-index.moralis.io/api/v2.2/erc20/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/pairs/stats?chain=eth",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
```

In this example:

- chain: Set to eth for the Ethereum network.
- token address: The contract address for USDC (0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48).

### Example API Response

```json
{
  "total_liquidity_usd": 1184543489313.2297,
  "total_active_pairs": 217,
  "total_active_dexes": 163
}
```

## Use Cases for the Aggregated Token Pair Stats API

The **Aggregated Token Pair Stats API** is perfect for the following use cases:

- **DeFi Dashboards**: Track total liquidity, active pairs, and DEX activity for specific tokens in real-time.
- **Liquidity Trackers**: Monitor liquidity across decentralized exchanges to inform trading and investment strategies.
- **Token Analytics**: Analyze the performance, trading volume, and liquidity of a token across multiple decentralized exchanges.
- **Portfolio Monitoring**: Use aggregated data to track how tokens in a portfolio are performing in terms of liquidity and pair activity, giving users a comprehensive view of their assets.
- **Market Insights**: Provide insights into token liquidity trends, helping users identify potential opportunities and risks in the DeFi ecosystem.

## Conclusion

With the **Moralis Aggregated Token Pair Stats API**, you can easily access real-time liquidity and token pair statistics across decentralized exchanges. This API provides a powerful tool for developers building **DeFi applications**, **analytics dashboards**, and **liquidity trackers**. By aggregating key token data across multiple DEXes, you can create more efficient and informative tools for your users.
