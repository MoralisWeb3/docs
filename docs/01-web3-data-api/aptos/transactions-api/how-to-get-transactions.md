---
title: "How to get transactions"
slug: "../how-to-get-transactions"
description: "Learn how to get transactions using Moralis Transaction API."
sidebar_label: Get Transactions
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/aptos/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get transactions

In order to get transactions, Moralis provides you a [getTransactions](/web3-data-api/aptos/reference/get-transactions) endpoint to do so.

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

  const limit = 2;

  const response = await Moralis.AptosApi.transactions.getTransactions({
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

  const limit = 2;

  const response = await Moralis.AptosApi.transactions.getTransactions({
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
    "limit": 2
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
    "version": "108804932",
    "hash": "0xa481099e54933f60efbf2a634147940e7f9a0bf85ab234570c05b2cb342fe038",
    "state_change_hash": "0xb47559a44e11e649a1e329529c3aeb645c38a896afcbf566796c220557ebdc76",
    "event_root_hash": "0x35f5e92896dcd866730c8237d90041c0a5cd05fc35029d6e12a98c832eb064a4",
    "state_checkpoint_hash": null,
    "gas_used": "0",
    "success": true,
    "vm_status": "Executed successfully",
    "accumulator_root_hash": "0x117e2af5111cda9f019755aaaeac2eea075e838dd14488b40e292c71b84befb3",
    "changes": [
      {
        "address": "0x1",
        "state_key_hash": "0x5ddf404c60e96e9485beafcabb95609fed8e38e941a725cae4dcec8296fb32d7",
        "data": {
          "type": "0x1::block::BlockResource",
          "data": {
            "epoch_interval": "7200000000",
            "height": "42164648",
            "new_block_events": {
              "counter": "42164649",
              "guid": {
                "id": {
                  "addr": "0x1",
                  "creation_num": "3"
                }
              }
            },
            "update_epoch_interval_events": {
              "counter": "0",
              "guid": {
                "id": {
                  "addr": "0x1",
                  "creation_num": "4"
                }
              }
            }
          }
        },
        "type": "write_resource"
      },
      {
        "address": "0x1",
        "state_key_hash": "0x8048c954221814b04533a9f0a9946c3a8d472ac62df5accb9f47c097e256e8b6",
        "data": {
          "type": "0x1::stake::ValidatorPerformance",
          "data": {
            "validators": [
              {
                "failed_proposals": "0",
                "successful_proposals": "26"
              }
            ]
          }
        },
        "type": "write_resource"
      },
      {
        "address": "0x1",
        "state_key_hash": "0x7b1615bf012d3c94223f3f76287ee2f7bdf31d364071128b256aeff0841b626d",
        "data": {
          "type": "0x1::timestamp::CurrentTimeMicroseconds",
          "data": {
            "microseconds": "1679919856642661"
          }
        },
        "type": "write_resource"
      }
    ],
    "id": "0x98a8420b13861cf4fe0fa830bcd7073c26eeb53fbdfca29450f6460959c029fc",
    "epoch": "1992",
    "round": "10444",
    "events": [
      {
        "guid": {
          "creation_number": "3",
          "account_address": "0x1"
        },
        "sequence_number": "42164648",
        "type": "0x1::block::NewBlockEvent",
        "data": {
          "epoch": "1992",
          "failed_proposer_indices": [],
          "hash": "0x98a8420b13861cf4fe0fa830bcd7073c26eeb53fbdfca29450f6460959c029fc",
          "height": "42164648",
          "previous_block_votes_bitvec": "0xfdff0f05849633eb405b4a5362",
          "proposer": "0x9da88926fd4d773fd499fc41830a82fe9c9ff3508435e7a16b2d8f529e77cdda",
          "round": "10444",
          "time_microseconds": "1679919856642661"
        }
      }
    ],
    "previous_block_votes_bitvec": [
      253, 255, 15, 5, 132, 150, 51, 235, 64, 91, 74, 83, 98
    ],
    "proposer": "0x9da88926fd4d773fd499fc41830a82fe9c9ff3508435e7a16b2d8f529e77cdda",
    "failed_proposer_indices": [],
    "timestamp": "1679919856642661",
    "type": "block_metadata_transaction"
  },
  {
    "version": "108804933",
    "hash": "0x2916dae9cde321ff5ce25552f7f72716287c3875a8ad9410114e1d9928a47b46",
    "state_change_hash": "0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6",
    "event_root_hash": "0x414343554d554c41544f525f504c414345484f4c4445525f4841534800000000",
    "state_checkpoint_hash": "0xa9884d61be2ed7209e34bc14b85b388c1cd5f34071bebb9dd60f7c09870f8edc",
    "gas_used": "0",
    "success": true,
    "vm_status": "Executed successfully",
    "accumulator_root_hash": "0x37e6264a585492bf26623b08a11b928be80c2975e2845e153f003861e9a144cd",
    "changes": [],
    "timestamp": "1679919856642661",
    "type": "state_checkpoint_transaction"
  }
]
```

Congratulations 🥳 You just got transactions with just a few lines of code using the Moralis Transaction API!

## Youtube Video

https://www.youtube.com/watch?v=3ks_vd4A3pE

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTransactions](/web3-data-api/aptos/reference/get-transactions)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
