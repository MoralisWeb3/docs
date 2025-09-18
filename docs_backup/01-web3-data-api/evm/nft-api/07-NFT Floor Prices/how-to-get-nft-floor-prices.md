---
title: "How to Get NFT Floor Prices with 1 API Call Using Moralis"
slug: "../how-to-get-nft-floor-prices"
description: "Learn how to fetch NFT floor prices in a single API call using Moralis' powerful NFT Floor Price API. Perfect for developers building NFT tools and applications."
sidebar_label: "Get NFT Floor Prices"
sidebar_position: 0
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<head>
    <title>How to Get NFT Floor Prices with 1 API Call | Moralis API Documentation</title>
</head>

## Watch the Full Video Tutorial

To see a full walkthrough of fetching NFT floor prices using the Moralis API, check out the video tutorial below:

[![Watch the video](https://img.youtube.com/vi/wQO-EtW-I7E/0.jpg)](https://youtu.be/wQO-EtW-I7E)

This video will guide you through the process of using Moralis' **NFT Floor Price API** to retrieve the floor price for any NFT collection in just one API call.

## Why Track NFT Floor Prices?

Tracking NFT floor prices is essential for developers building NFT tools, marketplaces, portfolio trackers, or analytics dashboards. The **floor price** represents the lowest price an NFT is listed for in a particular collection, making it a key indicator of a collection’s market value. Accurate floor prices help users make informed buying and selling decisions.

Moralis' **NFT Floor Price API** allows developers to retrieve this data effortlessly, reducing the need for manual tracking across marketplaces and multiple chains.

## Step 1: Setting Up Moralis

First, you need to set up Moralis to start using the NFT Floor Price API. If you haven't done so yet, follow the [Getting Started with Moralis API](/web3-data-api/evm/get-your-api-key) guide to get your API key.

Once you're ready, you can proceed to fetch the NFT floor price for a collection or a specific token.

## Step 2: Fetching NFT Floor Prices by Contract

Moralis makes it simple to get the floor price for any NFT contract with just one API call. The following example shows how to fetch the floor price for the **NFT Worlds** collection on the Ethereum network.

### Example JavaScript Code

```javascript
import Moralis from "moralis";

try {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
  });

  const response = await Moralis.EvmApi.nft.getNFTFloorPriceByContract({
    chain: "0x1", // Ethereum Mainnet
    address: "0x524cab2ec69124574082676e6f654a18df49a048", // NFT Worlds Contract
  });

  console.log(response.raw);
} catch (e) {
  console.error(e);
}
```

In this example:

- Chain: Set to "0x1" for Ethereum Mainnet.
- Address: The contract address for the NFT collection (in this case, NFT Worlds).

### Key API Features:

- Real-Time Data: Fetch the latest floor prices from multiple marketplaces, including Blur, OpenSea, and more.
- Efficient: Get all the data in one API call, including the floor price in both cryptocurrency and USD.

### Example Response

```json
{
  "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  "floor_price": "0.2176",
  "floor_price_usd": "564.24",
  "currency": "eth",
  "marketplace": [
    {
      "name": "blur",
      "logo": "https://cdn.moralis.io/marketplaces/blur.png"
    }
  ],
  "last_updated": "2024-08-21T15:59:11.000Z"
}
```

In this response:

- Address: The contract address of the NFT collection.
- Floor Price: The floor price in cryptocurrency (ETH).
- Floor Price USD: The floor price converted to USD.
- Marketplace: A list of marketplaces where the floor price was found, including logos.
- Last Updated: The timestamp of the most recent floor price update.

## Step 3: Fetching Historical NFT Floor Prices

You can also retrieve historical NFT floor prices using Moralis. This is useful for tracking price trends over time, which can provide insights into market fluctuations and collection value.

### Example JavaScript Code for Historical Floor Prices

```javascript
const response = await Moralis.EvmApi.nft.getNFTHistoricalFloorPriceByContract({
  chain: "0x1", // Ethereum Mainnet
  address: "0x524cab2ec69124574082676e6f654a18df49a048", // NFT Worlds Contract
  interval: "1d", // Interval options: 1d, 7d, 30d, etc.
});
console.log(response.raw);
```

## Why Use Moralis NFT Floor Price API?

Moralis simplifies the process of tracking NFT floor prices by providing a comprehensive API that pulls real-time data from multiple sources, including major NFT marketplaces.

- Multi-Chain Support: Moralis supports Ethereum and Base, allowing you to fetch floor prices.
- Marketplace Integration: Get floor prices from a variety of NFT marketplaces like OpenSea, Blur, and others.
- Fast and Efficient: With just one API call, you can retrieve all relevant data, saving time and improving the performance of your application.

Whether you’re building NFT marketplaces, portfolio trackers, or analytical tools, the Moralis NFT Floor Price API provides all the data you need to make informed decisions.

## API Reference

For more detailed information on the NFT Floor Price APIs, check out the official documentation:

- [Get NFT Floor Price by Contract](/web3-data-api/evm/reference/price/get-nft-floor-price-by-contract) - Retrieve the floor price for any NFT collection by contract address
- [Get NFT Floor Price by Token](/web3-data-api/evm/reference/price/get-nft-floor-price-by-token) - Get the floor price for a specific token within an NFT collection.
- [Get Historical NFT Floor Prices](/web3-data-api/evm/reference/price/get-nft-historical-floor-price-by-contract) - Fetch historical floor prices for any NFT collection, perfect for tracking price trends over time.

For additional guidance and frequently asked questions, visit our[NFT Floor Price API FAQs](/web3-data-api/evm/nft-floor-price-faqs)

These resources provide in-depth details on available parameters, response formats, and more. Whether you're tracking floor prices for analytics or building real-time NFT tools, these APIs have you covered.
