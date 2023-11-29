---
title: "How to get internal transactions by hash"
slug: "../../how-to-get-internal-transactions-by-hash"
description: "Learn how to get internal transactions by hash using the Moralis Transaction API."
sidebar_label: "Get internal transactions by hash"
sidebar_position: 3
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get all transactions for an address

In order to get all the transactions for an address, Moralis provides you a [getWalletTransactions](/web3-data-api/evm/reference/get-wallet-transactions) endpoint to do so.

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

  const transactionHash =
    "0xae5f9a43f424624376ea7479ce7b0ab25e9eba11f1c4791ec4e68f0206b5e071";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.transaction.getInternalTransactions({
    transactionHash,
    chain,
  });

  console.log(response.toJSON());
};

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

  const transactionHash =
    "0xae5f9a43f424624376ea7479ce7b0ab25e9eba11f1c4791ec4e68f0206b5e071";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.transaction.getInternalTransactions({
    transactionHash,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "transaction_hash": "0xae5f9a43f424624376ea7479ce7b0ab25e9eba11f1c4791ec4e68f0206b5e071",
    "chain": "eth",
}

result = evm_api.transaction.get_internal_transactions(
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
    "transaction_hash": "0xae5f9a43f424624376ea7479ce7b0ab25e9eba11f1c4791ec4e68f0206b5e071",
    "block_number": 16768916,
    "block_hash": "0xc4d8920e33578f4f0d0341738e5fb1d744b0d6bfdc78fc24ce4d4cb593011959",
    "type": "STATICCALL",
    "from": "0x7becef300c5873ba138d29e0d5e5bf2db1d5e983",
    "to": "0x0000000000000000000000000000000000000001",
    "value": "0",
    "gas": "36019",
    "gas_used": "3000",
    "input": "0x5ac2dc77eb0e3a92a62f7fd96f9bd6aaa8a2d4b5755300687d252fe3ed94a842000000000000000000000000000000000000000000000000000000000000001beee44e8fea3feec053e41bb2e1300f960f5fccb46e0592fa81ad2e778725b84c4237c475a8354bfa465d1a72e59fb4ea88943d10d6d35bc24f3a55627fb0c325",
    "output": "0x00000000000000000000000003ce74eb2e0e1f4ef6b079fe54112f52bfa34be6"
  },
  {
    "transaction_hash": "0xae5f9a43f424624376ea7479ce7b0ab25e9eba11f1c4791ec4e68f0206b5e071",
    "block_number": 16768916,
    "block_hash": "0xc4d8920e33578f4f0d0341738e5fb1d744b0d6bfdc78fc24ce4d4cb593011959",
    "type": "STATICCALL",
    "from": "0x7becef300c5873ba138d29e0d5e5bf2db1d5e983",
    "to": "0x0000000000000000000000000000000000000001",
    "value": "0",
    "gas": "32177",
    "gas_used": "3000",
    "input": "0x5ac2dc77eb0e3a92a62f7fd96f9bd6aaa8a2d4b5755300687d252fe3ed94a842000000000000000000000000000000000000000000000000000000000000001b6281037b7de24db835d162860a4f7ba9517ff4ded3372f253713d690c3cea2f124e3ad1299ef0f7d4899ac2d9e5f074592f093fbcd6f7d567e7cf25d820b3ade",
    "output": "0x000000000000000000000000c9e9d6ce434c4c853ccc65bf705801e2d051ba15"
  }
]
```

Congratulations 🥳 you just got all the internal transactions by transaction hash with only a few lines of code using the Moralis Transaction API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getInternalTransactions](/web3-data-api/evm/reference/get-internal-transactions)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
