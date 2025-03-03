---
title: "How to get the top NFT collections by trading volume"
slug: "../how-to-get-the-top-nft-collections-by-trading-volume"
description: "Learn how to get the top NFT collections by trading volume using Market Data API."
sidebar_label: "Get the top NFT collections by trading volume"
sidebar_position: 3
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get the top NFT collections by trading volume

In order to get the top NFT collections by trading volume, Moralis provides you with a [getHottestNFTCollectionsByTradingVolume] endpoint to do so. To use the API, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const response =
    await Moralis.EvmApi.marketData.getHottestNFTCollectionsByTradingVolume();

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const response =
    await Moralis.EvmApi.marketData.getHottestNFTCollectionsByTradingVolume();

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"

result = evm_api.market_data.get_hottest_nft_collections_by_trading_volume(
  api_key=api_key,
)

print(result)
```

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
[
  {
    "rank": 1,
    "collection_title": "Bored Ape Yacht Club",
    "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x2f1ef58880d01489b8d2c9ba759cf7b14db4ee8a55fd6e6b222ad050e7e00fb0.png",
    "volume_usd": "8261189.224011",
    "volume_24hr_perecent_change": "17.09",
    "floor_price_usd": "79591.5288",
    "floor_price_24hr_percent_change": "0.05",
    "average_price_usd": "39717.255884668266"
  },
  {
    "rank": 2,
    "collection_title": "Mutant Ape Yacht Club",
    "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xab57ba0f4ce4424e60c477627f6551790b8946d45720240a3d258956e436f2e5.png",
    "volume_usd": "3374077.733755",
    "volume_24hr_perecent_change": "6.29",
    "floor_price_usd": "16028.433180000002",
    "floor_price_24hr_percent_change": "-0.69",
    "average_price_usd": "15915.461008278302"
  },
  {
    "rank": 3,
    "collection_title": "CryptoPunks",
    "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x8e4d149625faffbdb3b63eb36668a4b470714c0e6c765e66200095a4ccb0234e.png",
    "volume_usd": "1835336.891",
    "volume_24hr_perecent_change": "30.13",
    "floor_price_usd": "90913.539",
    "floor_price_24hr_percent_change": "3.43",
    "average_price_usd": "101963.16061111112"
  }
]
```

Congratulations 🥳 you just got the top NFT collections by trading volume using Market Data API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getHottestNFTCollectionsByTradingVolume]

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
