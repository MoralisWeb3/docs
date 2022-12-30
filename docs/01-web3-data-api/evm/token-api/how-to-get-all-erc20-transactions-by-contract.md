---
title: "How to get all ERC20 transactions by contract"
slug: "../how-to-get-all-erc20-transactions-by-contract"
description: "Learn how to get all ERC20 transactions by wallet using Moralis Token API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get all ERC20 transactions by contract

In order to get all ERC20 transactions by contract, Moralis provides you with an [getTokenTransfers](/web3-data-api/reference/get-token-transfers) endpoint.

Here you'll need two parameters: `address` and `chain`.

Once you have obtained the `address` and `chain`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenTransfers({
    address,
    chain,
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
  
  const address = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenTransfers({
    address,
    chain,
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
    "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", 
    "chain": "eth"
}

result = evm_api.token.get_token_transfers(
    api_key=api_key,
    params=params,
)

print(result)
```

</TabItem>
</Tabs>



## Step 3: Run the script

import RunTheScript from '/docs/partials/_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{
  "total": 3779405,
  "page": 0,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHgxZjk4NDBhODVkNWFmNWJmMWQxNzYyZjkyNWJkYWRkYzQyMDFmOTg0IiwiY2hhaW4iOiJldGgiLCJhcGlLZXlJZCI6MTkwNjU5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjE2MDY4NTg4IiwicGFnZSI6MSwidG90YWwiOjM3Nzk0MDUsIm9mZnNldCI6MSwidWMiOnRydWUsImlhdCI6MTY2OTY0NzYwNH0.A_F4jCBNybeIMvG4CBwTnc5-40hIY7QtBu5SrKEiih8",
  "result": [
    {
      "transaction_hash": "0xf7cbf949d921cf53ce7bb4c5b944aa166327459c61c56a7c5057b0c9e89eaf2b",
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "block_timestamp": "2022-11-28T14:58:35.000Z",
      "block_number": "16069234",
      "block_hash": "0x00301a6e8320bd721539cc8f6de4ced806f1b1a0543d4d52153122731880523b",
      "to_address": "0x174b75731fe5fbf32ac1d0fac9e2cee544122bdd",
      "from_address": "0x28c6c06298d514db089934071355e5743bf21d60",
      "value": "2374470000000000000000",
      "transaction_index": 37,
      "log_index": 35
    },
    {
      "transaction_hash": "0x99701c5bcc132e3af83dc243ee406af978cc41ddb5e5a8b6616a48e198522881",
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "block_timestamp": "2022-11-28T14:18:11.000Z",
      "block_number": "16069032",
      "block_hash": "0x370a71c6eecde6be92616207c5d8bea1234d9ec187f56e585ec5335f7c7dfdd5",
      "to_address": "0xe8c638de7d7ea80f3d103becd51a445cf46b1648",
      "from_address": "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
      "value": "1831220100000000000",
      "transaction_index": 109,
      "log_index": 163
    },
    {
      "transaction_hash": "0xfcbc8637fc36f709f291f9cb45d095ba8da502b8cd2a2d023866a4d237553457",
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "block_timestamp": "2022-11-28T14:14:59.000Z",
      "block_number": "16069016",
      "block_hash": "0x67a0fbe9d4a86c655c2d93103b86cc4e265230b7af5c31acc407689c0f10bcd7",
      "to_address": "0xee61f5fb0db81d3a09392375ee96f723c0620e07",
      "from_address": "0x5be862ce64b3ff8d3928e5d15c73b9a5064d0ff3",
      "value": "545480000000000000000",
      "transaction_index": 106,
      "log_index": 239
    },
  ]
}
```

Congratulations 🥳 You just got all ERC20 transactions by contract with just a few lines of code using the Moralis Token API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTokenTransfers](/web3-data-api/reference/get-token-transfers)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.