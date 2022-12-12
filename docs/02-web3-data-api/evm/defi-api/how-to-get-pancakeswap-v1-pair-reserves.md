---
title: "How to get Pancakeswap V1 pair reserves"
slug: "how-to-get-pancakeswap-v1-pair-reserves"
description: "Learn how to get the pair reserves of a given pair address from Pancakeswap V1 using Moralis DeFi API."
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
```Text pip
pip install moralis
```



## Step 2: Get Pair Reserves of A Pancakeswap V1 Liquidity Pool

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
  
  const pairAddress = '0xaebe45e3a03b734c68e5557ae04bfc76917b4686'

  const chain = EvmChain.BSC;

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

  const pairAddress = '0xaebe45e3a03b734c68e5557ae04bfc76917b4686'

  const chain = EvmChain.BSC;

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
    "pair_address": "0xaebe45e3a03b734c68e5557ae04bfc76917b4686", 
    "chain": "bsc", 
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
  "reserve0": "54905537425359452861",
  "reserve1": "2165856852288790099409"
}
```



Congratulations 🥳 You just get the pair reserves of a Pancakeswap V1 liquidity pool with just a few lines of code using the Moralis DeFi API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getPairReserves](https://docs.moralis.io/reference/getpairreserves)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.