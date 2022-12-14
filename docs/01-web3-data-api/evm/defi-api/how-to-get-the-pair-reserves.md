---
title: "How to get Uniswap V2 pair reserves"
slug: "../how-to-get-the-pair-reserves"
description: "Learn how to get the pair reserves of a given pair address from Uniswap V2 using Moralis DeFi API."
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



## Step 2: Get Pair Reserves of A Uniswap V2 Liquidity Pool

In order to get pair address of a liquidity, Moralis provides you a `[getPairAddress](https://docs.moralis.io/reference/getpairaddress)` endpoint to do so.

Here you'll need two parameters: `pairAddress` and `address`.

Once you've obtained the `pairAddress` and `address`, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-util');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const pairAddress = '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974'

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.defi.getPairReserves({
    pairAddress,
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

  const pairAddress = '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974'

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.defi.getPairReserves({
    pairAddress,
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
    "pair_address": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974", 
    "chain": "eth", 
    # "to_block": "", 
    # "to_date": "", 
}

result = evm_api.defi.get_pair_reserves(
    api_key=api_key,
    params=params,
)

print(result)

```



To execute the program, run the following command:

```Text Shell (JavaScript)
node index.js
```
```Text Shell (TypeScript)
node index.ts
```
```Text Shell (Python)
python index.py
```



In your terminal, you should see the following response:

```json
{
  "reserve0": "153821290283758699698748",
  "reserve1": "794388536599735508826"
}
```



Congratulations 🥳 You just get the pair reserves of a Uniswap V2 liquidity pool with just a few lines of code using the Moralis DeFi API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getPairReserves](https://docs.moralis.io/reference/getpairreserves)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.