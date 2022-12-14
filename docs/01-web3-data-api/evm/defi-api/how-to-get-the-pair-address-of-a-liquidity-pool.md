---
title: "How to get Uniswap V2 pair address"
slug: "../how-to-get-the-pair-address-of-a-liquidity-pool"
description: "Learn how to get the pair address of a Uniswap V2 liquidity pool using Moralis DeFi API."
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
```python pip
pip install moralis
```



## Step 2: Get Pair Address of A Uniswap V2 Liquidity Pool

In order to get pair address of a liquidity, Moralis provides you a `[getPairAddress](https://docs.moralis.io/reference/getpairaddress)` endpoint to do so.

Here you'll need three parameters: `token0`, `token1` and `address`.

Once you've obtained all three parameters, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-util');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const chain = EvmChain.ETHEREUM;

  // token 0 address, e.g. WETH token address
  const token0Address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

  // token 1 address, e.g. LINK token address
  const token1Address = '0x514910771AF9Ca656af840dff83E8264EcF986CA';

  const response = await Moralis.EvmApi.defi.getPairAddress({
     token0Address,
     token1Address,
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

  const chain = EvmChain.ETHEREUM;

  // token 0 address, e.g. WETH token address
  const token0Address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

  // token 1 address, e.g. LINK token address
  const token1Address = '0x514910771AF9Ca656af840dff83E8264EcF986CA';

  const response = await Moralis.EvmApi.defi.getPairAddress({
     token0Address,
     token1Address,
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
    "exchange": "uniswapv2", 
    "token0_address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 
    "token1_address": "0x514910771AF9Ca656af840dff83E8264EcF986CA", 
    "chain": "eth"
}

result = evm_api.defi.get_pair_address(
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
```python Shell (Python)
python index.py
```



In your terminal, you should see the following response:

```json
{
  "token0": {
    "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
    "name": "Chain Link",
    "symbol": "LINK",
    "decimals": "18",
    "logo": "https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca.png",
    "logo_hash": "fd74ea1227adb458733847c09aab05d89c35c14b640c5ee1e0a8bffa79193eb4",
    "thumbnail": "https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca_thumb.png",
    "block_number": null,
    "validated": null,
    "created_at": "2022-01-20T10:39:55.818Z"
  },
  "token1": {
    "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "name": "Wrapped Ether",
    "symbol": "WETH",
    "decimals": "18",
    "logo": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
    "logo_hash": "0a7fc292596820fe066ce8ce3fd6e2ad9d479c2993f905e410ef74f2062a83ec",
    "thumbnail": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2_thumb.png",
    "block_number": null,
    "validated": null,
    "created_at": "2022-01-20T10:39:55.818Z"
  },
  "pairAddress": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974"
}
```



Congratulations 🥳 You just get the pair address of a Uniswap V2 liquidity pool with just a few lines of code using the Moralis DeFi API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getPairAddress](https://docs.moralis.io/reference/getpairaddress)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.