---
title: "How to get the logs for a contract"
slug: "how-to-get-the-logs-for-a-contract"
description: "Learn how to get the logs for a contract using the Moralis Events API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

First [register](https://docs.moralis.io/docs/quickstart) your Moralis account and get your Moralis API Key.

Once you have your Moralis API Key, install [Moralis SDK](https://docs.moralis.io/docs/moralis-sdk) in your project.

```shell npm
npm install moralis @moralisweb3/common-evm-util
```
```shell yarn
yarn add moralis @moralisweb3/common-evm-util
```
```shell pnpm
pnpm add moralis @moralisweb3/common-evm-util
```
```python pip
pip install moralis
```



## Step 2: Get logs by contract

In order to get the logs for a contract, Moralis provides you a `[getContractLogs](https://docs.moralis.io/reference/getcontractlogs)` endpoint to do so.

Here you'll need two parameters: `address` and `chain`.

Once you have obtained both the `address` and `chain`, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-util');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = '0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.events.getContractLogs({
    address,
    chain,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-util";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = '0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.events.getContractLogs({
    address,
    chain,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
    "address": "0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782", 
    "chain": "eth", 
}

result = evm_api.events.get_contract_logs(
    api_key=api_key,
    params=params,
)

print(result)
```



To execute the program, run the following command:

```shell Shell (JavaScript)
node index.js
```
```Text Shell (TypeScript)
npx ts-node index.ts
```
```python Shell (Python)
python index.py
```



In your terminal, you should see the following response:

```json
{
  "total": 3386,
  "page_size": 100,
  "page": 1,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFpbiI6ImV0aCIsImNoYWluX25hbWUiOiJtYWlubmV0Iiwic3ViZG9tYWluIjpudWxsLCJhcGlLZXlJZCI6MTkwNjU5LCJjdXJzb3IiOm51bGwsImZ1bmN0aW9uTmFtZSI6bnVsbCwiYWRkcmVzcyI6IjB4ZDRlNDA3OGNhMzQ5NWRlNWIxZDRkYjQzNGJlYmM1YTk4NjE5Nzc4MiIsImZyb21fYmxvY2siOm51bGwsInRvX2Jsb2NrIjoiMTUwNzIxODkiLCJmcm9tX2RhdGUiOm51bGwsInRvX2RhdGUiOm51bGwsInNvcnQiOiJkZXNjIiwibGltaXQiOjEwMCwidG90YWwiOjMzODYsInBhZ2UiOjEsImtleXMiOlsiMTUwNzIxODkiXSwib2Zmc2V0IjoxLCJpYXQiOjE2Njc0MTIyNjR9.CUyM77Lz6JVRz6TT8xlrM3MVzuMj5WUyznkqsl3wZS4",
  "result": [
    {
      "transaction_hash": "0x07dc3a3fbfb4af52720e97c4365781845bd05a07adaab358bd564ae05b23a9bc",
      "address": "0xd4e4078ca3495de5b1d4db434bebc5a986197782",
      "block_timestamp": "2022-11-02T17:08:35.000Z",
      "block_number": "15883729",
      "block_hash": "0x814edb37d3341b4aa8039d0fcfb878f0e17aa10d6a83529a7734972ee5e0a63f",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000001",
      "topic0": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
      "topic1": "0x0000000000000000000000006301add4fb128de9778b8651a2a9278b86761423",
      "topic2": "0x0000000000000000000000001e0049783f008a0085193e00003d00cd54003c71",
      "topic3": null
    },
    {
      "transaction_hash": "0x243595be3c88ef34b19a4999b6f5e0b416a651502fe9c71243378fb014bddebf",
      "address": "0xd4e4078ca3495de5b1d4db434bebc5a986197782",
      "block_timestamp": "2022-11-02T17:04:11.000Z",
      "block_number": "15883707",
      "block_hash": "0x5f45eb1324ccc380abc05805c40526c1031b388e04f16c01519b4a3fda2b98fd",
      "data": "0x",
      "topic0": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "topic1": "0x0000000000000000000000002c81cee7050c9d03295560851ffde123bdf9696a",
      "topic2": "0x0000000000000000000000006301add4fb128de9778b8651a2a9278b86761423",
      "topic3": "0x00000000000000000000000000000000000000000000000000000000000001f9"
    },
    {
      "transaction_hash": "0xb7c7aca77e87580c1982643c7f405054f3dcb3507d76a87cd209df07417ebd44",
      "address": "0xd4e4078ca3495de5b1d4db434bebc5a986197782",
      "block_timestamp": "2022-10-29T20:15:59.000Z",
      "block_number": "15856035",
      "block_hash": "0x31fd9e6cf123eabbe82542c4fa6f31613465513d545603acbfb3bd765cb85b8b",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "topic0": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
      "topic1": "0x000000000000000000000000d68c599a549e8518b2e0dab9cd437c930ac2f12b",
      "topic2": "0x00000000000000000000000062660eb258e17899e3b72dd1987e62d1022f1157",
      "topic3": null
    }
  ]
}  
```



Congratulations 🥳 You just got the logs for a contract address with just a few lines of code using the Moralis Events API!

## API Reference

- [getContractLogs](https://docs.moralis.io/reference/getcontractlogs)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.