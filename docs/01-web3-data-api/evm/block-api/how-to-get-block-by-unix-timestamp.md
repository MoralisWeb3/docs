---
title: "How to get the closest block by unix timestamp"
slug: "../how-to-get-block-by-unix-timestamp"
description: "Learn how to get the closest block by a given unix timestamp using Moralis Block API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

First [register](/web3-data-api/get-your-api-key) your Moralis account and get your Moralis API Key.

Once you have your Moralis API Key, install the Moralis SDK in your project.

```shell npm
npm install moralis @moralisweb3/common-evm-util
```
```shell yarn
yarn add moralis @moralisweb3/common-evm-util
```
```shell pnpm
pnpm add moralis @moralisweb3/common-evm-util
```
```Text pip
pip install moralis
```



## Step 2: Get block by unix timestamp

In order to get the closest block by unix timestamp, Moralis provides you a `[getDateToBlock](https://docs.moralis.io/reference/getdatetoblock)` endpoint to do so.

Here you'll need two parameters: `date` and `chain`.

Once you have obtained both the `date` and `chain`, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-util');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const date = '1667823435';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.block.getDateToBlock({
    date,
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

  const date = '1667823435';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.block.getDateToBlock({
    date,
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
    "date": "1667823435", 
    "chain": "eth"
}

result = evm_api.block.get_date_to_block(
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
```Text Shell (Python)
python index.py
```



In your terminal, you should see the following response:

```json
{
  "block": 15918090,
  "date": "2022-11-07T12:17:15+00:00",
  "timestamp": 1667823435
}
```



Congratulations 🥳 You just got the closest block using a unix timestamp with just a few lines of code using the Moralis Block API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getDateToBlock](https://docs.moralis.io/reference/getdatetoblock)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.