---
title: "How to get Sushiswap V2 pair reserves"
slug: "how-to-get-sushiswap-v2-pair-reserves"
description: "Learn how to get the pair reserves of a given pair address from Sushiswap V2 using Moralis DeFi API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

First [register](/docs/quickstart) your Moralis account and get your Moralis API Key.

Once you have your Moralis API Key, install [Moralis SDK](/docs/moralis-sdk) in your project.

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



## Step 2: Get Pair Reserves of A Sushiswap V2 Liquidity Pool

In order to get pair address of a liquidity, Moralis provides you a `[getPairAddress](/reference/getpairaddress)` endpoint to do so.

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
  
  const pairAddress = '0xc40d16476380e4037e6b1a2594caf6a6cc8da967'

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

  const pairAddress = '0xc40d16476380e4037e6b1a2594caf6a6cc8da967'

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
    "pair_address": "0xc40d16476380e4037e6b1a2594caf6a6cc8da967", 
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
  "reserve0": "164603264012529614075996",
  "reserve1": "854278497345719157300"
}
```



Congratulations 🥳 You just get the pair reserves of a Sushiswap V2 liquidity pool with just a few lines of code using the Moralis DeFi API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getPairReserves](/reference/getpairreserves)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.