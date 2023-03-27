---
title: "How to get latest deployed coins"
slug: "../how-to-get-latest-deployed-coins"
description: "Learn how to get latest deployed coins using Moralis Coin API."
sidebar_label: Get Latest Deployed Coins
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

## Step 2: Get transactions

In order to get latest deployed coins, Moralis provides you a [getLatestCoins](/web3-data-api/aptos/reference/get-latest-coins) endpoint to do so.

Here you'll need one parameter: `limit`.

Once you have obtained the `limit`, you can copy the following code:

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

  const limit = 3;

  const response = await Moralis.AptosApi.coins.getLatestCoins({
    limit,
  });

  console.log(response);
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

  const limit = 3;

  const response = await Moralis.AptosApi.coins.getLatestCoins({
    limit,
  });

  console.log(response);
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
    "limit": 3
}

result = aptos_api.coins.get_latest_coins(
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
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoiMjAyMy0wMy0yN1QwMTowNDo1NC4wMDBaIiwibyI6MSwiaWF0IjoxNjc5OTIwOTU5fQ.iJsiKKfrSpmifRu3Za7URQ2QEXgh53p3ap-d8oRYbnM",
  "hasNextPage": true,
  "result": [
    {
      "coin_type": "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x27fafcc4e39daac97556af8a803dbb52bcb03f0821898dc845ac54225b9793eb::move_coin::MoveCoin, 0xfbab9fb68bd2103925317b6a540baa20087b1e7a7a4eb90badee04abb6b5a16f::blt::Blt>",
      "coin_type_hash": "44dde4738cd88f6f14ebcbb0b921ac95ac6eaf8e9c8169ea9fc4931346f6d75e",
      "name": "Pancake-MOVE-BLT-LP",
      "creator_address": "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa",
      "decimals": 8,
      "supply_aggregator_table_handle": null,
      "supply_aggregator_table_key": null,
      "symbol": "Cake-LP",
      "transaction_created_timestamp": "2023-03-27T11:01:53.000Z",
      "transaction_version_created": "108772811"
    },
    {
      "coin_type": "0x61d2c22a6cb7831bee0f48363b0eec92369357aece0d1142062f7d5d85c7bef8::lp_coin::LP<0x2e2e8cd27dc9b44046771a1bed44fba38baba28173d0ee5ae6ce256cb352a8aa::jujubeMeme::MEME, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC, 0x163df34fccbf003ce219d3f1d9e70d140b60622cb9dd47599c25fb2f797ba6e::curves::Uncorrelated>",
      "coin_type_hash": "ef366b1b94609714a0ea668b0cef83f9e9c5a7800df8deefd938353206b3744f",
      "name": "LS05 LP-ack-USDC-U",
      "creator_address": "0x61d2c22a6cb7831bee0f48363b0eec92369357aece0d1142062f7d5d85c7bef8",
      "decimals": 6,
      "supply_aggregator_table_handle": null,
      "supply_aggregator_table_key": null,
      "symbol": "ack-USDCU",
      "transaction_created_timestamp": "2023-03-27T06:08:39.000Z",
      "transaction_version_created": "108657740"
    },
    {
      "coin_type": "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::LPToken<0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdtCoin, 0xe9c192ff55cffab3963c695cff6dbf9dad6aff2bb5ac19a6415cad26a81860d9::mee_coin::MeeCoin>",
      "coin_type_hash": "4285cb7dcc5287755be14cbbb36a6494ca6a2324a685cad43cfbab734dc71cad",
      "name": "Pancake-USDT-MEE-LP",
      "creator_address": "0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa",
      "decimals": 8,
      "supply_aggregator_table_handle": null,
      "supply_aggregator_table_key": null,
      "symbol": "Cake-LP",
      "transaction_created_timestamp": "2023-03-27T01:04:54.000Z",
      "transaction_version_created": "108547052"
    }
  ]
}
```

Congratulations 🥳 You just got latest deployed coins with just a few lines of code using the Moralis Coin API!

## Youtube Video

https://www.youtube.com/watch?v=384hn0Vi5-0

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getLatestCoins](/web3-data-api/aptos/reference/get-latest-coins)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
