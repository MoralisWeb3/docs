---
title: "How to get NFT trades by Markeplace"
slug: "../../how-to-get-all-nft-trades"
description: "Learn how to get NFT trades by Markeplace using the Moralis NFT API."
sidebar_label: "Get NFT trades by Markeplace"
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get All Transfers Of An NFT

In order to get all the trades of an NFT by marketplace, Moralis provides you with an [getNFTTrades](/web3-data-api/evm/reference/get-nft-trades) endpoint.

Here you'll need three parameters: `address`, `marketplace`, and `chain`.

Once you have obtained the `address`, `marketplace` and `chain`, you can copy the following code:

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

  const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

  const chain = EvmChain.ETHEREUM;

  const marketplace = "opensea";

  const response = await Moralis.EvmApi.nft.getNFTTrades({
    address,
    chain,
    marketplace,
  });

  console.log(response.toJSON());
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

  const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

  const chain = EvmChain.ETHEREUM;

  const marketplace = "opensea";

  const response = await Moralis.EvmApi.nft.getNFTTrades({
    address,
    chain,
    marketplace,
  });

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
  "chain": "eth",
  "marketplace": "opensea",
  "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
}

result = evm_api.nft.get_nft_trades(
  api_key=api_key,
  params=params,
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
{
  "total": null,
  "page": 0,
  "page_size": 100,
  "cursor": null,
  "result": [
    {
      "transaction_hash": "0x5eba5d8d84c20a7f30b92d74afaee764d9476b62a1637b017319c721269245ed",
      "transaction_index": "90",
      "token_ids": ["1002", "7228", "1", "1"],
      "seller_address": "0xe7f35f06a80a6a2a5edc823379fa147d9f9948a8",
      "buyer_address": "0xd7c708080553068217a2fe6f44eccf9cac309915",
      "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
      "marketplace_address": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
      "price": "18980000000000000000",
      "price_token_address": "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
      "block_timestamp": "2022-03-18T22:21:07.000Z",
      "block_number": "14413068",
      "block_hash": "0x50e740dd733efc1e7252e3863e76368624d146e1a8447fab32c9697685cf581d",
      "verified_collection": true
    }
  ]
}
```

Congratulations 🥳 You just got all the trades of an NFT with just a few lines of code using the Moralis NFT API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

<ul>
  <li><a href="/web3-data-api/evm/reference/get-nft-trades">getNFTTrades</a></li>
</ul>

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
