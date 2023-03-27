---
title: "How to get coin balances by wallet addresses"
slug: "../how-to-get-coin-balances-by-wallet-addresses"
description: "Learn how to get coin balances by wallet addresses using Moralis Wallet API."
sidebar_label: "Get Coin Balances By Wallet Addresse"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

## Step 2: Get Coin Balances by Wallet Addresses

In order to get coin balances by wallet addresses, Moralis provides you a [getCoinBalancesByWallets](/web3-data-api/aptos/reference/get-coin-balances-by-wallets) endpoint to do so.

Here you'll need two parameters: `limit` and `ownerAddresses`.

Once you have obtained both the `limit` and `ownerAddresses`, you can copy the following code:

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

  const ownerAddresses = [
    "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75",
  ];

  const response = await Moralis.AptosApi.wallets.getCoinBalancesByWallets({
    limit: 10,
    ownerAddresses,
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

  const ownerAddresses = [
    "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75",
  ];

  const response = await Moralis.AptosApi.wallets.getCoinBalancesByWallets({
    limit: 10,
    ownerAddresses,
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
    "owner_addresses": ["0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75"]
}

result = aptos_api.wallets.get_coin_balances_by_wallets(
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
      "amount": "821827502",
      "coin_type_hash": "91ceb1308a98389691e05158b07ed5f079ab78461a6bb8d5a4054b1bb5cb8bb6",
      "owner_address": "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75",
      "coin_type": "0x1::aptos_coin::AptosCoin",
      "last_transaction_timestamp": "2023-01-21T05:43:47.000Z",
      "last_transaction_version": "73068385"
    }
  ]
}
```

Congratulations 🥳 You just got coin balances by wallet addresses with just a few lines of code using the Moralis Wallet API!

## Youtube Video

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getCoinBalancesByWallets](/web3-data-api/aptos/reference/get-coin-balances-by-wallets)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
