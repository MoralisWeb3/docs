---
title: "How to get coin metadata by creator addresses"
slug: "../../how-to-get-coin-metadata-by-creator-addresses"
description: "Learn how to get coin metadata by creator addresses using Moralis Coin API."
sidebar_label: Get Coin Metadata By Creator Addresses
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

## Step 2: Get transactions

In order to get coin metadata by creator addresses, Moralis provides you a [getCoinsByCreators](/web3-data-api/aptos/reference/get-coins-by-creators) endpoint to do so.

Here you'll need two parameters: `limit` and `creatorAddresses`.

Once you have obtained both the `limit` and `creatorAddresses`, you can copy the following code:

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

  const creatorAddresses =
    "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa";

  const response = await Moralis.AptosApi.coins.getCoinsByCreators({
    limit,
    creatorAddresses,
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

  const creatorAddresses =
    "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa";

  const response = await Moralis.AptosApi.coins.getCoinsByCreators({
    limit,
    creatorAddresses,
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
    "creator_addresses": ["0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa"]
}

result = aptos_api.coins.get_coins_by_creators(
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
  "cursor": null,
  "hasNextPage": false,
  "result": [
    {
      "coin_type": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDD",
      "coin_type_hash": "01c715215141a93bd423637fda0ca77f619a60f2038db6205df3dab00cf4955f",
      "name": "Decentralized USD",
      "creator_address": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      "decimals": 6,
      "supply_aggregator_table_handle": null,
      "supply_aggregator_table_key": null,
      "symbol": "USDD",
      "transaction_created_timestamp": "2022-10-27T17:21:45.000Z",
      "transaction_version_created": "15017856"
    },
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
    },
    {
      "coin_type": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
      "coin_type_hash": "6bcbe340e5091769502fb9a6c83157e66850ed1e151ccfcd5577ea952e5035e9",
      "name": "USD Coin",
      "creator_address": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      "decimals": 6,
      "supply_aggregator_table_handle": null,
      "supply_aggregator_table_key": null,
      "symbol": "USDC",
      "transaction_created_timestamp": "2022-10-19T02:44:02.000Z",
      "transaction_version_created": "2413754"
    },
    {
      "coin_type": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH",
      "coin_type_hash": "980da8a2350c887ac01c05f390204e13b52be3ca86e7781783fd2b874445827e",
      "name": "Wrapped Ether",
      "creator_address": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      "decimals": 6,
      "supply_aggregator_table_handle": null,
      "supply_aggregator_table_key": null,
      "symbol": "WETH",
      "transaction_created_timestamp": "2022-10-19T02:43:21.000Z",
      "transaction_version_created": "2412846"
    }
  ]
}
```

Congratulations 🥳 You just got coin metadata by creator addresses with just a few lines of code using the Moralis Coin API!

## Youtube Video

https://www.youtube.com/watch?v=Nx2hUqB0NWo

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getCoinsByCreators](/web3-data-api/aptos/reference/get-coins-by-creators)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
