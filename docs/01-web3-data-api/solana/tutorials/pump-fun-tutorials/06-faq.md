---
title: "Pump.fun API - Frequently Asked Questions (FAQ)"
slug: "../pump-fun-api-faq"
description: "Find answers to common questions about using Moralis APIs for Pump.fun tokens."
sidebar_label: "Pump.fun API FAQ"
sidebar_position: 7
---

# Pump.fun API - Frequently Asked Questions (FAQ)

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

### **Do Moralis APIs support pre-bonded Pump.fun tokens?**

Yes, Moralis fully supports pre-bonded Pump.fun tokens. You can retrieve metadata, prices, swaps, and more for these tokens using the same API endpoints.

### **Do I need an API key to use the Pump.fun API?**

Yes. To access Moralis APIs, you need an API key. Sign up at [developers.moralis.com](https://developers.moralis.com/) to get one.

### **How often is the Pump.fun token price updated?**

The price data is real-time and fetched from the most liquid DEX pair available.

### **Can I get all swaps for a Pump.fun token?**

Yes. You can fetch buy and sell swap transactions for a Pump.fun token using its contract address. You can also retrieve swaps by wallet address or pair address.

### **Can I get token pairs and liquidity data for a Pump.fun token?**

Yes. Moralis APIs allow you to retrieve all trading pairs for a given Pump.fun token, get detailed stats for a specific trading pair (price, liquidity, volume), and fetch aggregated stats across all pairs for a token.

### **Can I retrieve OHLCV (historical price data) for Pump.fun tokens?**

Yes. The Moralis OHLCV API provides open, high, low, close, and volume data for Pump.fun tokens. This is useful for trading bots, price analysis, and historical tracking.

### **Can I embed a TradingView candlestick chart for a Pump.fun token?**

Yes. Moralis provides a price chart widget that lets you embed real-time TradingView-style charts. You can customize the chart with:

- Token address or pair address
- Background color, candle colors, grid color, text color
- Time intervals (e.g., 1D, 1H, 5M)
- Toolbar visibility options

To configure and embed the chart, visit the [Moralis Price Chart Widget page](https://moralis.com/widgets/price-chart).

### **Can I display price charts for pre-bonded Pump.fun tokens?**

Yes. The TradingView chart widget works for pre-bonded tokens, so you can track their price action in real time.

## **Additional Resources**

Watch the full video tutorial for using the Moralis Pump.fun APIs:

[![Watch the video](https://img.youtube.com/vi/pHuqtseaxj8/0.jpg)](https://www.youtube.com/watch?v=pHuqtseaxj8)
