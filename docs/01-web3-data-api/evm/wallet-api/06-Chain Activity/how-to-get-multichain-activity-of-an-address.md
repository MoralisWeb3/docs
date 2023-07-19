---
title: "How to get multi-chain activity of an address"
slug: "../how-to-get-multichain-activity-of-an-address"
description: "Learn how to get multi-chain activity of an address using the Moralis Wallet API."
sidebar_label: "Get chain activity of address"
sidebar_position: 4
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get multi-chain activity for a wallet address

In order to get the chain activity, Moralis provides you a [getWalletActiveChains](/web3-data-api/evm/reference/get-chain-activity-by-wallet) endpoint to do so.

Here you'll need two parameters: `address` and `chain`.

Once you've obtained both the `address` and `chain`, you can copy the following code:

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

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

  const response = await Moralis.EvmApi.wallets.getWalletActiveChains({
    address,
    chains,
  });
  
  console.log(response.toJSON());
}

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

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

  const response = await Moralis.EvmApi.wallets.getWalletActiveChains({
    address,
    chains,
  });
  
  console.log(response.toJSON());
}

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    "chains": ["eth", "bsc", "polygon"],
}

result = evm_api.transaction.get_wallet_active_chains(
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

In your terminal, you should see the following JSON response with the data about chain activity:

```json
{
  "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
  "active_chains": [
    {
      "chain": "eth",
      "chain_id": "0x1",
      "first_transaction": {
        "block_timestamp": "2015-09-28T08:24:43.000Z",
        "block_number": "302086",
        "transaction_hash": "0x9b629147b75dc0b275d478fa34d97c5d4a26926457540b15a5ce871df36c23fd"
      },
      "last_transaction": {
        "block_timestamp": "2023-07-18T22:00:59.000Z",
        "block_number": "17722945",
        "transaction_hash": "0xde35173f86138e2c0accd780b08cf986009c6ac577d441fe49050764666493e4"
      }
    },
    {
      "chain": "bsc",
      "chain_id": "0x38",
      "first_transaction": {
        "block_timestamp": "2022-03-22T08:29:46.000Z",
        "block_number": "16275630",
        "transaction_hash": "0x144bf655f6ad276c42e6380997db73eff30725923a2c089fb7e57b3e3d07a32b"
      },
      "last_transaction": {
        "block_timestamp": "2023-06-12T11:37:50.000Z",
        "block_number": "29035694",
        "transaction_hash": "0x18e5043a363ba33ad2320f7980efd50372bc021fb1b3041e7831db9058492551"
      }
    },
    {
      "chain": "polygon",
      "chain_id": "0x89",
      "first_transaction": {
        "block_timestamp": "2021-07-20T02:38:06.000Z",
        "block_number": "17055069",
        "transaction_hash": "0x482328171e8549129acd9dde9408602410909adac2e4e46a9591592b2e0e1a24"
      },
      "last_transaction": {
        "block_timestamp": "2023-07-14T08:55:47.000Z",
        "block_number": "45062599",
        "transaction_hash": "0x7dd9979c5d57ac74c2787f47e8ff9942d0eebf6375ab5262ac48d0455b9c3de3"
      }
    }
  ]
}
```

Congratulations 🥳 you just found the activity of a wallet address on multiple chains with only a few lines of code using the Moralis Wallet API!


## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getWalletActiveChains](/web3-data-api/evm/reference/get-chain-activity-by-wallet)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
