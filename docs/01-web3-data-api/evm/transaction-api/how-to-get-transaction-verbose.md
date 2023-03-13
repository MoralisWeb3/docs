---
title: "How to get verbose transactions of an address"
slug: "../how-to-get-transaction-verbose"
description: "Learn how to get verbose transactions of an address using Moralis Transaction API."
sidebar_label: "Get verbose transactions of address"
sidebar_position: 2
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get the verbose transaction of an address

In order to get the verbose transactions of an address, Moralis provides you a [getWalletTransactionsVerbose](/web3-data-api/evm/reference/get-decoded-wallet-transaction) endpoint to do so.

Here you'll need two parameters: `transactionHash` and `chain`.

Once you've obtained both the `transactionHash` and `chain`, you can copy the following code:

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

  const chain = EvmChain.ETHEREUM;

  const response =
    await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
      address,
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

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chain = EvmChain.ETHEREUM;

  const response =
    await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
      address,
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
  "address": "",
  "chain": "eth"
}

result = evm_api.nft.get_wallet_nfts(
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
  "page_size": 100,
  "page": 1,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFpbiI6ImV0aCIsImNoYWluX25hbWUiOiJtYWlubmV0Iiwic3ViZG9tYWluIjpudWxsLCJhcGlLZXlJZCI6MTkwNjU5LCJjdXJzb3IiOm51bGwsImZ1bmN0aW9uTmFtZSI6bnVsbCwibGltaXQiOjEwMCwiYWRkcmVzcyI6IjB4ZDhkYTZiZjI2OTY0YWY5ZDdlZWQ5ZTAzZTUzNDE1ZDM3YWE5NjA0NSIsImZyb21fYmxvY2siOm51bGwsInRvX2Jsb2NrIjoiMTU3ODE1NDAiLCJmcm9tX2RhdGUiOm51bGwsInRvX2RhdGUiOm51bGwsInBhZ2UiOjEsImtleXMiOlsiMTU3ODE1NDAiXSwiYmxvY2tfb2Zmc2V0IjoxLCJpYXQiOjE2NzA4Mzk4MjN9.EVOoyaTeuMF0cF2xe2J4uJr41Ipx7QbgGxeu5Rpn3E0",
  "result": [
    {
      "hash": "0x1e67156f8cef5668c69392876f9ff99ca655d43ec366c6cf62217dd633e809b4",
      "nonce": "949",
      "transaction_index": "74",
      "from_address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      "to_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "value": "0",
      "gas": "66163",
      "gas_price": "14219353417",
      "input": "0xa9059cbb000000000000000000000000c79b96044906550a5652bcf20a6ea02f139b9ae5000000000000000000000000000000000000000000000000000000007ea8ed40",
      "receipt_cumulative_gas_used": "7069740",
      "receipt_gas_used": "65625",
      "receipt_contract_address": null,
      "receipt_root": null,
      "receipt_status": "1",
      "block_timestamp": "2022-12-08T16:35:11.000Z",
      "block_number": "16141217",
      "block_hash": "0xc6d379902054169a094ded6e37953549e6c4d59c3dc5b253d5db3ff2dd5a173c",
      "transfer_index": [16141217, 74],
      "logs": [
        {
          "log_index": "147",
          "transaction_hash": "0x1e67156f8cef5668c69392876f9ff99ca655d43ec366c6cf62217dd633e809b4",
          "transaction_index": "74",
          "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "data": "0x000000000000000000000000000000000000000000000000000000007ea8ed40",
          "topic0": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "topic1": "0x000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045",
          "topic2": "0x000000000000000000000000c79b96044906550a5652bcf20a6ea02f139b9ae5",
          "topic3": null,
          "block_timestamp": "2022-12-08T16:35:11.000Z",
          "block_number": "16141217",
          "block_hash": "0xc6d379902054169a094ded6e37953549e6c4d59c3dc5b253d5db3ff2dd5a173c",
          "transfer_index": [16141217, 74, 147],
          "transaction_value": "0"
        }
      ]
    }
  ]
}
```

Congratulations 🥳 you just got the verbose transactions of an address with only a few lines of code using the Moralis Transaction API!

## Youtube Video

https://www.youtube.com/watch?v=kpxgYuC4uyA

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getWalletTransactionsVerbose](/web3-data-api/evm/reference/get-decoded-wallet-transaction)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
