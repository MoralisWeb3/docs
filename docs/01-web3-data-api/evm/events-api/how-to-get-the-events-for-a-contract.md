---
title: "How to get the events for a contract"
slug: "../how-to-get-the-events-for-a-contract"
description: "Learn how to get the events for a contract using the Moralis Events API."
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get events by contract

In order to get the events for a contract, Moralis provides you a [getContractEvents](/web3-data-api/reference/get-contract-events) endpoint to do so.

Here you'll need four parameters: `address`, `chain`, `topic`, and `abi`.

Once you have obtained both the `address`, `chain`, `topic`, and `abi`, you can copy the following code:

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

  const address = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";

  const chain = EvmChain.ETHEREUM;

  const topic =
    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

  const abi = {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  };

  const response = await Moralis.EvmApi.events.getContractEvents({
    address,
    chain,
    topic,
    abi,
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

  const address = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";

  const chain = EvmChain.ETHEREUM;

  const topic =
    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

  const abi = {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  };

  const response = await Moralis.EvmApi.events.getContractEvents({
    address,
    chain,
    topic,
    abi,
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
  "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
  "chain": "eth",
  "topic": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
  "abi": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  }
}

result = evm_api.events.get_contract_logs(
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
  "total": 3872827,
  "page": 0,
  "page_size": 100,
  "result": [
    {
      "transaction_hash": "0xced1507250bf1ca24f364c0469c4b636238a39d611c1c6604a445465e4d5180d",
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "block_timestamp": "2023-01-17T03:40:23.000Z",
      "block_number": "16423886",
      "block_hash": "0x0d02e216160ebaf717ab27463208556be1da8d88ac87551f6835c7c2eb802e51",
      "data": {
        "from": "0x33ddd548fe3a082d753e5fe721a26e1ab43e3598",
        "to": "0xdc685e9b6a410ddb832666e2f7dd99ed6f01d1c8",
        "amount": "1000000000000000000"
      }
    },
    {
      "transaction_hash": "0x71347fcdf4f8d02d0d33b74bf843c2b25706260263e83d23003a3fe7b4072e7a",
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "block_timestamp": "2023-01-17T03:40:23.000Z",
      "block_number": "16423886",
      "block_hash": "0x0d02e216160ebaf717ab27463208556be1da8d88ac87551f6835c7c2eb802e51",
      "data": {
        "from": "0xe822446bbc57a5b9e5503ff03f74f37727b97eb2",
        "to": "0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801",
        "amount": "13662108510360931896332"
      }
    },
    {
      "transaction_hash": "0x4d0d06c708ceea8727bf841429fc854b1698914ab281e44c02c002a94ed1e986",
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "block_timestamp": "2023-01-17T03:39:59.000Z",
      "block_number": "16423884",
      "block_hash": "0x483fbab9a3517cf75804d867d6de6e33bc408aff5f4571c3d698141505e6943f",
      "data": {
        "from": "0x5f65f7b609678448494de4c87521cdf6cef1e932",
        "to": "0xd25404fa6e47c81ed9a5dc6588715040678d72f8",
        "amount": "12446301797964504131"
      }
    }
  ]
}
```

Congratulations 🥳 You just got the events for a contract address with just a few lines of code using the Moralis Events API!

## API Reference

- [getContractEvents](/web3-data-api/reference/get-contract-events)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
