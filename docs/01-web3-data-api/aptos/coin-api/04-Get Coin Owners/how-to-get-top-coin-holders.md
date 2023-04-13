---
title: "How to get top coin holders"
slug: "../how-to-get-top-coin-holders"
description: "Learn how to get top coin holders using Moralis Coin API."
sidebar_label: Get Top Coin Holders
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

## Step 2: Get Top Coin Holders

In order to get top coin holders, Moralis provides you a [getTopHoldersByCoin](/web3-data-api/aptos/reference/get-top-holders-by-coin) endpoint to do so.

Here you'll need two parameters: `limit`, `coinTypeHash`, and `network`.

Once you have obtained both the `limit`, `coinTypeHash`, and `network`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const limit = 10;

  const coinTypeHash = "91ceb1308a98389691e05158b07ed5f079ab78461a6bb8d5a4054b1bb5cb8bb6";

  const network = "mainnet";

  const response = await Moralis.AptosApi.coins.getTopHoldersByCoin({
    limit,
    coinTypeHash,
    network,
  });

  console.log(response.result);
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const limit = 10;

  const coinTypeHash = "91ceb1308a98389691e05158b07ed5f079ab78461a6bb8d5a4054b1bb5cb8bb6";

  const response = await Moralis.AptosApi.coins.getTopHoldersByCoin({
    limit,
    coinTypeHash,
    network: "mainnet"
  });

  console.log(response.result);
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import aptos_api

api_key = "YOUR_API_KEY"

params = {
    "network": "mainnet",
    "limit": 10,
    "coin_type_hash": "91ceb1308a98389691e05158b07ed5f079ab78461a6bb8d5a4054b1bb5cb8bb6"
}

result = aptos_api.coins.get_top_holders_by_coin(
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
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoiODYxODkwODQxOTY2Njg0IiwibyI6MSwiaWF0IjoxNjgxMzA5MjQ0fQ.UMcD4qEsRGd6ZQMGqQ4gdj_t-RjGzTgVjn196G--jMg",
  "hasNextPage": true,
  "result": [
    {
      "amount": "4304356444212969",
      "coin_type_hash": "91ceb1308a98389691e05158b07ed5f079ab78461a6bb8d5a4054b1bb5cb8bb6",
      "owner_address": "0xc739507214d0e1bf9795485299d709e00024e92f7c0d055a4c2c39717882bdfd",
      "coin_type": "0x1::aptos_coin::AptosCoin",
      "last_transaction_timestamp": "2023-04-09T02:27:11.000Z",
      "last_transaction_version": "117257615"
    },
    {
      "amount": "1999997899860150",
      "coin_type_hash": "91ceb1308a98389691e05158b07ed5f079ab78461a6bb8d5a4054b1bb5cb8bb6",
      "owner_address": "0xcd30fbbda98b2aed026772c13e5ed90a7f056b589ef9e78cd96415e1af12451c",
      "coin_type": "0x1::aptos_coin::AptosCoin",
      "last_transaction_timestamp": "2023-03-26T21:02:33.000Z",
      "last_transaction_version": "108462050"
    },
    {
      "amount": "1698818070543346",
      "coin_type_hash": "91ceb1308a98389691e05158b07ed5f079ab78461a6bb8d5a4054b1bb5cb8bb6",
      "owner_address": "0xae1a6f3d3daccaf77b55044cea133379934bba04a11b9d0bbd643eae5e6e9c70",
      "coin_type": "0x1::aptos_coin::AptosCoin",
      "last_transaction_timestamp": "2023-04-12T14:20:01.000Z",
      "last_transaction_version": "119794359"
    },
    {
      "amount": "1035261098578310",
      "coin_type_hash": "91ceb1308a98389691e05158b07ed5f079ab78461a6bb8d5a4054b1bb5cb8bb6",
      "owner_address": "0xaaa9c5fb3b4855e1569321041febcc1146b44af3f08893d4ce41846cc7e25645",
      "coin_type": "0x1::aptos_coin::AptosCoin",
      "last_transaction_timestamp": "2023-03-17T16:08:56.000Z",
      "last_transaction_version": "103430718"
    },
    {
      "amount": "861890841966684",
      "coin_type_hash": "91ceb1308a98389691e05158b07ed5f079ab78461a6bb8d5a4054b1bb5cb8bb6",
      "owner_address": "0xcc03e04e08c028a4848ce270b8d8077ad9ec14f8586727b9ed7792039f1b207e",
      "coin_type": "0x1::aptos_coin::AptosCoin",
      "last_transaction_timestamp": "2023-04-12T07:33:48.000Z",
      "last_transaction_version": "119555828"
    }
  ]
}
```

Congratulations 🥳 You just got top coin holders with just a few lines of code using the Moralis Coin API!

## Youtube Video

https://www.youtube.com/watch?v=msCTuz4Z3dc

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTopHoldersByCoin](/web3-data-api/aptos/reference/get-top-holders-by-coin)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
