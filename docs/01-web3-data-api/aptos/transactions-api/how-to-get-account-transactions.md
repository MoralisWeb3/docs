---
title: "How to get account transactions"
slug: "../how-to-get-account-transactions"
description: "Learn how to get account transactions using Moralis Transaction API."
sidebar_label: Get Account Transactions
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/aptos/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get account transactions

In order to get account transactions, Moralis provides you a [getAccountTransactions](/web3-data-api/aptos/reference/get-account-transactions) endpoint to do so.

Here you'll need one parameter: `address`.

Once you have obtained the `address`, you can copy the following code:

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

  const address =
    "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75";

  const response = await Moralis.AptosApi.transactions.getAccountTransactions({
    address,
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

  const address =
    "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75";

  const response = await Moralis.AptosApi.transactions.getAccountTransactions({
    address,
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
    "address": "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75"
}

result = aptos_api.transactions.get_account_transactions(
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
[
  {
    "version": "6852991",
    "hash": "0x03524e73442a80150c0b52dfd3c36b2ea011dbcf308dd3373371d551d3307b93",
    "state_change_hash": "0x725b1bed203aafdde092f812875b94b32fe79a3547925c9288abcd1a018b6b90",
    "event_root_hash": "0x9ebee63cf1931bcd38cd3d6da7e2fa4da21fd8e24280bcdcae1ed7d1e2b06149",
    "state_checkpoint_hash": null,
    "gas_used": "996",
    "success": true,
    "vm_status": "Executed successfully",
    "accumulator_root_hash": "0xd4cd155653e22a6ed5565b9f00cfecfd83619bbab5e49d5c78cf0e1520b840d4",
    "changes": [
      {
        "address": "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75",
        "state_key_hash": "0xee9fb421704f68a5bc00743eb118d0ba0ee00c18d8d696506fb67416d2df6d65",
        "data": {
          "type": "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
          "data": {
            "coin": {
              "value": "87900400"
            },
            "deposit_events": {
              "counter": "1",
              "guid": {
                "id": {
                  "addr": "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75",
                  "creation_num": "2"
                }
              }
            },
            "frozen": false,
            "withdraw_events": {
              "counter": "0",
              "guid": {
                "id": {
                  "addr": "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75",
                  "creation_num": "3"
                }
              }
            }
          }
        },
        "type": "write_resource"
      }
    ],
    "sender": "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75",
    "sequence_number": "0",
    "max_gas_amount": "3740",
    "gas_unit_price": "100",
    "expiration_timestamp_secs": "1666344115",
    "payload": {
      "function": "0x1::managed_coin::register",
      "type_arguments": [
        "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC"
      ],
      "arguments": [],
      "type": "entry_function_payload"
    },
    "signature": {
      "public_key": "0xfe2d8fa3748e8994782b9eaffb76202a79fc7179c736019ecb7c1c2c6670737a",
      "signature": "0x7f374b7c10234ae8b95aa75ab4e68f28ea364b7f4267364ebd7d0efbc9a8c760804d265a1cf2df6db35354e62f4df7725ea90e539185768b05efb346cf3c910a",
      "type": "ed25519_signature"
    },
    "events": [
      {
        "guid": {
          "creation_number": "0",
          "account_address": "0x34d54bca84f3a0e34b351d173d5934e93a6f1bb36892832de314239c96506d75"
        },
        "sequence_number": "1",
        "type": "0x1::account::CoinRegisterEvent",
        "data": {
          "type_info": {
            "account_address": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
            "module_name": "0x6173736574",
            "struct_name": "0x55534443"
          }
        }
      }
    ],
    "timestamp": "1666344095447148",
    "type": "user_transaction"
  }
]
```

Congratulations 🥳 You just got account transactions with just a few lines of code using the Moralis Transaction API!

## Youtube Video

https://www.youtube.com/watch?v=Z6kN01OJRM0

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getAccountTransactions](/web3-data-api/aptos/reference/get-account-transactions)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
