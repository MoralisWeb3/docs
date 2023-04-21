---
title: "How to get transactions by hash"
slug: "../how-to-get-transactions-by-hash"
description: "Learn how to get transactions by hash using Moralis Transaction API."
sidebar_label: Get Transactions By Hash
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

## Step 2: Get transactions

In order to get transactions, Moralis provides you a [getTransactionByHash](/web3-data-api/aptos/reference/get-transaction-by-hash) endpoint to do so.

Here you'll need two parameter: `transactionHash` and `network`.

Once you have obtained `transactionHash` and `network`, you can copy the following code:

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

  const transactionHash = "0x40b19053969a956b051d91a616d0e5f53f4212ce5c01a38c182d7450d756987a";
  const network = "mainnet";

  const response = await Moralis.AptosApi.transactions.getTransactionByHash({
    transactionHash,
    network
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

  const transactionHash = "0x40b19053969a956b051d91a616d0e5f53f4212ce5c01a38c182d7450d756987a";
  const network = "mainnet";

  const response = await Moralis.AptosApi.transactions.getTransactionByHash({
    transactionHash,
    network
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
    "txn_hash": "0x40b19053969a956b051d91a616d0e5f53f4212ce5c01a38c182d7450d756987a"
    "network": "mainnet",
}

result = aptos_api.transactions.get_transactions_by_hash(
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
  "version": "126645608",
  "hash": "0x40b19053969a956b051d91a616d0e5f53f4212ce5c01a38c182d7450d756987a",
  "state_change_hash": "0x778e2c49d35752f8878c3d8538b61822fc453dafc863c6f8b876da26cc5d72bd",
  "event_root_hash": "0x49211bd8c20c8c7d35238ac6fa436ea1b04c34d7597ca6fa7f79023e215ffcbb",
  "state_checkpoint_hash": null,
  "gas_used": "1019",
  "success": true,
  "vm_status": "Executed successfully",
  "accumulator_root_hash": "0x5ddd1348c46c84af3eebb3e1de9c57a14c6be4eb307c39b8630a99887390dd57",
  "changes": [
    {
      "address": "0x56b8075798601e6834eea5fc85a553bff3f2304810467e7bfd13f19c181f44d2",
      "state_key_hash": "0x01c1b4331023c134c7ec33f89022088f96663753fbe06928eb16f1c53289ab67",
      "data": {
        "type": "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
        "data": {
          "coin": {
            "value": "114306304"
          },
          "deposit_events": {
            "counter": "1",
            "guid": {
              "id": {
                "addr": "0x56b8075798601e6834eea5fc85a553bff3f2304810467e7bfd13f19c181f44d2",
                "creation_num": "2"
              }
            }
          },
          "frozen": false,
          "withdraw_events": {
            "counter": "0",
            "guid": {
              "id": {
                "addr": "0x56b8075798601e6834eea5fc85a553bff3f2304810467e7bfd13f19c181f44d2",
                "creation_num": "3"
              }
            }
          }
        }
      },
      "type": "write_resource"
    },
    {
      "address": "0x56b8075798601e6834eea5fc85a553bff3f2304810467e7bfd13f19c181f44d2",
      "state_key_hash": "0x78682ab0ce778424f82f29b76959318a69e360d2c2cd28352875a1ebf1661b57",
      "data": {
        "type": "0x1::account::Account",
        "data": {
          "authentication_key": "0x56b8075798601e6834eea5fc85a553bff3f2304810467e7bfd13f19c181f44d2",
          "coin_register_events": {
            "counter": "1",
            "guid": {
              "id": {
                "addr": "0x56b8075798601e6834eea5fc85a553bff3f2304810467e7bfd13f19c181f44d2",
                "creation_num": "0"
              }
            }
          },
          "guid_creation_num": "4",
          "key_rotation_events": {
            "counter": "0",
            "guid": {
              "id": {
                "addr": "0x56b8075798601e6834eea5fc85a553bff3f2304810467e7bfd13f19c181f44d2",
                "creation_num": "1"
              }
            }
          },
          "rotation_capability_offer": {
            "for": {
              "vec": []
            }
          },
          "sequence_number": "0",
          "signer_capability_offer": {
            "for": {
              "vec": []
            }
          }
        }
      },
      "type": "write_resource"
    },
    {
      "address": "0x5bd7de5c56d5691f32ea86c973c73fec7b1445e59736c97158020018c080bb00",
      "state_key_hash": "0xe618932ccc6572f913fa75bef324732081f425e1561f7b2f86298865734c852e",
      "data": {
        "type": "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
        "data": {
          "coin": {
            "value": "3489731378099"
          },
          "deposit_events": {
            "counter": "396",
            "guid": {
              "id": {
                "addr": "0x5bd7de5c56d5691f32ea86c973c73fec7b1445e59736c97158020018c080bb00",
                "creation_num": "2"
              }
            }
          },
          "frozen": false,
          "withdraw_events": {
            "counter": "96001",
            "guid": {
              "id": {
                "addr": "0x5bd7de5c56d5691f32ea86c973c73fec7b1445e59736c97158020018c080bb00",
                "creation_num": "3"
              }
            }
          }
        }
      },
      "type": "write_resource"
    },
    {
      "address": "0x5bd7de5c56d5691f32ea86c973c73fec7b1445e59736c97158020018c080bb00",
      "state_key_hash": "0x68d66434ae9eb9c55afddaaf464d4db8c5237286edd40a096cada33948bd4f11",
      "data": {
        "type": "0x1::account::Account",
        "data": {
          "authentication_key": "0x5bd7de5c56d5691f32ea86c973c73fec7b1445e59736c97158020018c080bb00",
          "coin_register_events": {
            "counter": "1",
            "guid": {
              "id": {
                "addr": "0x5bd7de5c56d5691f32ea86c973c73fec7b1445e59736c97158020018c080bb00",
                "creation_num": "0"
              }
            }
          },
          "guid_creation_num": "4",
          "key_rotation_events": {
            "counter": "0",
            "guid": {
              "id": {
                "addr": "0x5bd7de5c56d5691f32ea86c973c73fec7b1445e59736c97158020018c080bb00",
                "creation_num": "1"
              }
            }
          },
          "rotation_capability_offer": {
            "for": {
              "vec": []
            }
          },
          "sequence_number": "96010",
          "signer_capability_offer": {
            "for": {
              "vec": []
            }
          }
        }
      },
      "type": "write_resource"
    },
    {
      "state_key_hash": "0x6e4b28d40f98a106a65163530924c0dcb40c1349d3aa915d108b4d6cfc1ddb19",
      "handle": "0x1b854694ae746cdbd8d44186ca4929b2b337df21d1c74633be19b2710552fdca",
      "key": "0x0619dc29a0aac8fa146714058e8dd6d2d0f3bdf5f6331907bf91f3acd81e6935",
      "value": "0x0407dd3bc81d6e010000000000000000",
      "data": {
        "key": "0x619dc29a0aac8fa146714058e8dd6d2d0f3bdf5f6331907bf91f3acd81e6935",
        "key_type": "address",
        "value": "103052587311105796",
        "value_type": "u128"
      },
      "type": "write_table_item"
    }
  ],
}
```

Congratulations 🥳 You just got a transaction by hash with just a few lines of code using the Moralis Transaction API!

## Youtube Video

https://www.youtube.com/watch?v=berC8PvTS7M

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTransactionByHash](/web3-data-api/aptos/reference/get-transaction-by-hash)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
