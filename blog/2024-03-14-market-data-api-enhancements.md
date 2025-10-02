---
title: "Market Data API Enhancements"
slug: "market-data-api-enhancements"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we're excited to unveil a series of enhancements to our Market Data API, including two new endpoints, making our data even more accessible and comprehensive. And the best part? All these features are now available to our free plan users as well! 🤩

<!-- truncate -->

### 🚀 New Endpoints

Dive deeper into the crypto market with our latest additions:

- [Top Cryptocurrencies by Market Cap]: Discover the leading cryptocurrencies by market cap
- [Top Cryptocurrencies by Trading Volume]: Uncover the most actively traded cryptocurrencies

### ✨ Enhanced Endpoints

We've enriched our existing endpoints with valuable data points to offer you a more detailed market overview:

- [Top NFT Collections by Market Cap] now includes:
  - `collection_address`: returns the token address for the NFT Collection
  - `floor_price`: returns the floor price in the native currency (in addition to the previously supported `floor_price_usd`)
  - `floor_price_usd_24hr_percent_change`: returns the percentage change in the USD floor price, over a 24-hour period
- [Top NFT Collections by Trading Volume] now includes:
  - `collection_address`: returns the token address for the NFT Collection
  - `average_price`: returns the average native price this collection has sold for, considering all sales, in the last 24 hours
  - `floor_price`: returns the floor price in the native currency (in addition to the previously supported `floor_price_usd`)
  - `floor_price_usd_24hr_percent_change`: returns the percentage change in the USD floor price, over a 24-hour period
  - `floor_price_7d_percent_change`: returns the percentage change in the native currency floor price, over a 7-day period
  - `floor_price_usd_7d_percent_change`: returns the percentage change in the USD floor price, over a 7-day period
  - `floor_price_30d_percent_change`: returns the percentage change in the native currency floor price, over a 30-day period
  - `floor_price_usd_30d_percent_change`: returns the percentage change in the USD floor price, over a 30-day period

### 🎉 Free Access

All these enriched features and data points are now part of our free plan, ensuring that everyone has access to comprehensive market insights. 🎉

[Explore the Updated Market Data API Docs] for more information.
