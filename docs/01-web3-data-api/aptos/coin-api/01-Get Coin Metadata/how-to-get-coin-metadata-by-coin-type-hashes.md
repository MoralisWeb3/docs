---
title: "How to get coin metadata by coin type hashes"
slug: "../how-to-get-coin-metadata-by-coin-type-hashes"
description: "Learn how to get coin metadata by coin type hashes using Moralis Coin API."
sidebar_label: Get Coin Metadata By Coin Type Hashes
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

## Step 2: Get transactions

In order to get coin metadata by coin type hashes, Moralis provides you a [getCoinsByCoinTypeHash](/web3-data-api/aptos/reference/get-coin-info-by-coin-type-hashes) endpoint to do so.

Here you'll need one parameter: `coinTypeHashes`.

Once you have obtained the `coinTypeHashes`, you can copy the following code:

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

  const coinTypeHashes = [
    "175cc6491b0d75a131a36391318cde4c4b1312de70675c7e46cc54dacfe7ae29",
  ];

  const response = await Moralis.AptosApi.coins.getCoinInfoByCoinTypeHashes({
    coinTypeHashes,
    network: "mainnet",
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

  const coinTypeHashes = [
    "175cc6491b0d75a131a36391318cde4c4b1312de70675c7e46cc54dacfe7ae29",
  ];

  const response = await Moralis.AptosApi.coins.getCoinInfoByCoinTypeHashes({
    coinTypeHashes,
    network: "mainnet",
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
    "coin_type_hashes": ["175cc6491b0d75a131a36391318cde4c4b1312de70675c7e46cc54dacfe7ae29"]
}

result = aptos_api.coins.get_coins_by_coin_type_hashes(
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
  [
    {
      "coin_type": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT",
      "coin_type_hash": "175cc6491b0d75a131a36391318cde4c4b1312de70675c7e46cc54dacfe7ae29",
      "name": "Tether USD",
      "creator_address": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      "decimals": 6,
      "supply_aggregator_table_handle": null,
      "supply_aggregator_table_key": null,
      "symbol": "USDT",
      "transaction_created_timestamp": "2022-10-19T02:43:38.000Z",
      "transaction_version_created": "2413215"
    }
  ]
}
```

Congratulations 🥳 You just got coin metadata by creator addresses with just a few lines of code using the Moralis Coin API!

## Youtube Video

https://www.youtube.com/watch?v=CaRx5pbrhbE

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getCoinsByCoinTypeHash](/web3-data-api/aptos/reference/get-coin-info-by-coin-type-hashes)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
