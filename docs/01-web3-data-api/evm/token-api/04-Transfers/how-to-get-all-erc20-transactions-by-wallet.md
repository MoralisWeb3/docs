---
title: "How to get all ERC20 transfers by wallet"
slug: "../../how-to-get-all-erc20-transfers-by-wallet"
description: "Learn how to get all ERC20 transfers by wallet using Moralis Token API."
sidebar_label: "Get ERC20 transfers by wallet"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";



## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get all ERC20 transfers by wallet

In order to get all ERC20 transfers by wallet, Moralis provides you with an [getWalletTokenTransfers](/web3-data-api/evm/reference/get-wallet-token-transfers) endpoint.

Here you'll need two parameters: `address` and `chain`.

Once you have obtained the `address` and `chain`, you can copy the following code:

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

  const address = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
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

  const address = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
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
    "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "chain": "eth"
}

result = evm_api.token.get_wallet_token_transfers(
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
  "total": 126,
  "page": 0,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHgyMjYwZmFjNWU1NTQyYTc3M2FhNDRmYmNmZWRmN2MxOTNiYzJjNTk5IiwiY2hhaW4iOiJldGgiLCJhcGlLZXlJZCI6MTkwNjU5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjExMTAwMDQ1IiwicGFnZSI6MSwidG90YWwiOjEyNiwib2Zmc2V0IjoxLCJ1YyI6dHJ1ZSwiaWF0IjoxNjY5NjQ2ODMzfQ.NIWg35DjoTMlaE6JaoJld24p9zBgGL56Zp8PPzQnJk4",
  "result": [
    {
      "transaction_hash": "0x1f1c8971dec959d38bcaa5606eb474d028617752240727692cd5ef21a435d847",
      "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "block_timestamp": "2022-11-19T20:01:23.000Z",
      "block_number": "16006313",
      "block_hash": "0x415f96c01f32d38046e250a357e471000c0876cc2122167056cf4c4c1113a522",
      "to_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "from_address": "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
      "value": "4489517",
      "transaction_index": 48,
      "log_index": 66
    },
    {
      "transaction_hash": "0x089786eccd4bc2e4b0bda3eaf4f8602c501bbe8aa8f839b723dcd5fafdb28fbc",
      "address": "0x01e849040c418c3b7f130351a6e4630c08a7d98e",
      "block_timestamp": "2022-11-19T14:56:35.000Z",
      "block_number": "16004796",
      "block_hash": "0x773c6065dbe90b8d74a8e77a2d8717c2f5b22c4c2be6f910971db80bd0f47911",
      "to_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "from_address": "0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801",
      "value": "3848",
      "transaction_index": 75,
      "log_index": 153
    },
    {
      "transaction_hash": "0xb63ceb48f54cf711b4f74c83f6f27c5ad82cdf2a7285afefedc5f28645a72ef3",
      "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "block_timestamp": "2022-11-18T20:56:11.000Z",
      "block_number": "15999424",
      "block_hash": "0x0b98ef7048c1398b9fc1caa394cf1e24bd860606caff4c2dd359b8cddd678b18",
      "to_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "from_address": "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
      "value": "1162013",
      "transaction_index": 41,
      "log_index": 76
    }
  ]
}
```

Congratulations 🥳 You just got all ERC20 transfers by wallet with just a few lines of code using the Moralis Token API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getWalletTokenTransfers](/web3-data-api/evm/reference/get-wallet-token-transfers)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
