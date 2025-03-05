---
title: "Pump.fun API - Frequently Asked Questions (FAQ)"
slug: "../pump-fun-api-faq"
description: "Find answers to common questions about using Moralis APIs for Pump.fun tokens."
sidebar_label: "Pump.fun API FAQ"
sidebar_position: 10
---

# Pump.fun API - Frequently Asked Questions (FAQ)

## General Information

### **What data can I retrieve using the Moralis Pump.fun API?**

Moralis APIs allow you to retrieve:

- Token metadata (name, symbol, logo, supply, etc.)
- Token prices (USD and native SOL price)
- Token pairs (all trading pairs for a token)
- Pair stats (price, liquidity, and volume for a specific pair)
- Aggregated pair stats (stats across all pairs for a token)
- Swap transactions (buy and sell swaps)
- Historical price data (OHLCV) (open, high, low, close, volume)
- Real-time TradingView charts for Pump.fun tokens
- New tokens recently created on Pump.fun
- Tokens currently in the bonding phase
- Tokens that have graduated from bonding
- Specific token bonding progress

### **Do Moralis APIs support pre-bonded Pump.fun tokens?**

Yes, Moralis fully supports pre-bonded Pump.fun tokens. You can retrieve metadata, prices, swaps, and more for these tokens using the same API endpoints.

### **Do I need an API key to use the Pump.fun API?**

Yes. To access Moralis APIs, you need an API key. Sign up at [developers.moralis.com](https://developers.moralis.com/) to get one.

### **Are there rate limits for the Pump.fun API?**

Yes, API requests are subject to rate limits based on your Moralis plan. Free plans typically allow 25 requests per second with a daily quota. Check your Moralis dashboard for your specific limits.

### **What programming languages can I use with the Pump.fun API?**

The Pump.fun API can be used with any programming language that supports HTTP requests. Moralis provides SDKs for JavaScript/TypeScript, Python, and other popular languages to make integration easier.

## Token Data

### **How often is the Pump.fun token price updated?**

The price data is real-time and fetched from the most liquid DEX pair available.

### **Can I get all swaps for a Pump.fun token?**

Yes. You can fetch buy and sell swap transactions for a Pump.fun token using its contract address. You can also retrieve swaps by wallet address or pair address.

### **How can I identify a Pump.fun token in the API response?**

Pump.fun tokens often (but not always) have addresses that end with "pump". Additionally, the token metadata will show details about the token's origin and exchange information.

### **Can I get token pairs and liquidity data for a Pump.fun token?**

Yes. Moralis APIs allow you to retrieve all trading pairs for a given Pump.fun token, get detailed stats for a specific trading pair (price, liquidity, volume), and fetch aggregated stats across all pairs for a token.

### **Can I retrieve OHLCV (historical price data) for Pump.fun tokens?**

Yes. The Moralis OHLCV API provides open, high, low, close, and volume data for Pump.fun tokens. This is useful for trading bots, price analysis, and historical tracking.

## Bonding Phase Information

### **What is the bonding phase for Pump.fun tokens?**

The bonding phase is a token launch mechanism unique to Pump.fun where tokens follow a predefined bonding curve. Tokens must complete this phase (reach 100% bonding progress) before they can graduate to full trading status.

### **How do I track a token's progress through the bonding phase?**

You can use the `getTokenBondingStatus` endpoint to check a specific token's bonding progress percentage. For multiple tokens, use the `getBondingTokensByExchange` endpoint to get a list of all tokens currently in the bonding phase.

### **How often is the bonding progress updated in the API?**

Bonding progress is updated in near real-time, reflecting the actual on-chain status of the bonding curve. For the most accurate tracking, we recommend polling the API every few minutes for tokens nearing completion.

### **Can I get notified when a token is about to graduate?**

The API itself doesn't provide push notifications, but you can build a notification system by regularly checking the bonding status and triggering alerts when tokens reach a threshold (e.g., 95% complete).

### **What happens after a token graduates?**

After graduation, tokens appear in the `getGraduatedTokensByExchange` endpoint results. Graduated tokens typically experience increased trading activity and may have different price dynamics compared to when they were in the bonding phase.

## UI Integration

### **Can I embed a TradingView candlestick chart for a Pump.fun token?**

Yes. Moralis provides a price chart widget that lets you embed real-time TradingView-style charts. You can customize the chart with:

- Token address or pair address
- Background color, candle colors, grid color, text color
- Time intervals (e.g., 1D, 1H, 5M)
- Toolbar visibility options

To configure and embed the chart, visit the [Moralis Price Chart Widget page](https://moralis.com/widgets/price-chart).

### **Can I display price charts for pre-bonded Pump.fun tokens?**

Yes. The TradingView chart widget works for pre-bonded tokens, so you can track their price action in real time.

### **How can I show a list of new Pump.fun tokens on my website?**

Use the `getNewTokensByExchange` endpoint to fetch recently created tokens, then display them in a list or grid on your website. You can customize the display to show token names, symbols, logos, prices, and other metadata.

### **Is it possible to build a real-time Pump.fun token explorer?**

Yes, by combining multiple API endpoints, you can build a comprehensive token explorer. Use `getNewTokensByExchange`, `getBondingTokensByExchange`, and `getGraduatedTokensByExchange` to categorize tokens by phase, and supplement with token price and metadata information.

## Technical Questions

### **Does the API return pagination information?**

Yes, for endpoints that return multiple results, the API supports pagination through a cursor-based system. The response includes a cursor value that you can use in subsequent requests to fetch the next batch of results.

### **What's the difference between the token address and mint address?**

In Solana terminology, these terms are interchangeable. The "mint" refers to the token's contract address on the Solana blockchain. In API responses, you may see both terms used to reference the same address.

### **How do I handle rate limiting or API errors?**

Implement proper error handling in your code and consider adding exponential backoff for retry logic. The API returns standard HTTP status codes - 429 for rate limiting, 401 for authentication issues, etc. Always check response status before processing the data.

### **Can I use the API to track wallet holdings of Pump.fun tokens?**

Yes, although not directly through the Pump.fun specific endpoints. Use the Moralis Solana API's wallet endpoints to retrieve token balances for any wallet address, which will include Pump.fun tokens.

### **How can I detect new token launches programmatically?**

Regularly poll the `getNewTokensByExchange` endpoint and keep track of the most recently seen token creation timestamp. This allows you to identify newly added tokens since your last check.

### **Video Tutorial**

Watch the full video tutorial for using the Moralis Pump.fun APIs:

[![Watch the video](https://img.youtube.com/vi/pHuqtseaxj8/0.jpg)](https://www.youtube.com/watch?v=pHuqtseaxj8)
