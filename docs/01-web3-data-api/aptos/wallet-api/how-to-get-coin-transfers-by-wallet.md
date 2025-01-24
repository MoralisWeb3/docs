---
title: "How to get coin transfers by wallet(s)"
slug: "../how-to-get-wallets-coin-transfers-by-wallet"
description: "Learn how to get coin transfers by wallet(s) using Moralis Wallet API."
sidebar_label: "Get Coin Transfers By Wallet(s)"
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/aptos/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get Coin Transfers By Wallet(s)

In order to get coin transfers by wallet(s), Moralis provides you a [getCoinTransfersByOwnerAddresses](/web3-data-api/aptos/reference/get-coin-transfers-by-owner-addresses) endpoint to do so.

Here you'll need three parameters: `limit`, `ownerAddresses` and `network`.

Once you have obtained the `limit`, `ownerAddresses` and `network`, you can copy the following code:

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
    "0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50",
  ];

  const network = "mainnet";

  const response = Moralis.AptosApi.coins.getCoinTransfersByOwnerAddresses({
    limit,
    walletAddresses,
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

  const ownerAddresses = [
    "0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50",
  ];

  const network = "mainnet";

  const response = Moralis.AptosApi.coins.getCoinTransfersByOwnerAddresses({
    limit,
    walletAddresses,
    network,
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
    "limit": 10,
    "owner_addresses": ["0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50"]
    "network": "mainnet",
}

result = aptos_api.coins.get_coin_transfers_by_owner_addresses(
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
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoiMjAyMy0wMy0yMVQyMTo1NTo0MS4wMDBaIiwibyI6MiwiaWF0IjoxNjgyMDY3NTc2fQ.505lbLYPA4Vg4aUNbZIqv9CsgbcyaHeSgcySFwgOqpM",
  "hasNextPage": true,
  "result": [
    {
      "activity_type": "0x1::coin::WithdrawEvent",
      "amount": "18620000",
      "block_height": "42022697",
      "coin_type": "0x1::aptos_coin::AptosCoin",
      "event_account_address": "0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50",
      "event_creation_number": "3",
      "event_sequence_number": "11",
      "is_gas_fee": false,
      "entry_function_id_str": "0x1::aptos_account::transfer",
      "is_transaction_success": true,
      "owner_address": "0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50",
      "transaction_timestamp": "2023-03-26T21:48:28.000Z",
      "transaction_version": "108478684"
    }
  ]
}
```

Congratulations 🥳 You just got the NFT transfers by wallet(s) with just a few lines of code using the Moralis Wallet API!

## Youtube Video

https://www.youtube.com/watch?v=8T7Zhs1r1R0

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getCoinTransfersByOwnerAddresses](/web3-data-api/aptos/reference/get-coin-transfers-by-owner-addresses)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
