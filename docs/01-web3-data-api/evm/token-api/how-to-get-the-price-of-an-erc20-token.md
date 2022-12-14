---
title: "How to get the price of an ERC20 token"
slug: "../how-to-get-the-price-of-an-erc20-token"
description: "Learn how to get the price of an ERC20 token with Moralis Token API."
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



## Step 2: Get the price of an ERC20 token

In order to get the price of an ERC20 token, Moralis provides you with an `getTokenPrice` endpoint.

Here you'll need two parameters: `address` and `chain`.

Once you have obtained the `address` and `chain`, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-util');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenPrice({
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
  
  const address = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenPrice({
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
    "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", 
    "chain": "eth"
}

result = evm_api.token.get_token_price(
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
  "nativePrice": {
    "value": "13753134139373781549",
    "decimals": 18,
    "name": "Ether",
    "symbol": "ETH"
  },
  "usdPrice": 16115.165641767926,
  "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
  "exchangeName": "Uniswap v3"
}
```



Congratulations 🥳 You just got the price of an ERC20 Token with just a few lines of code using the Moralis Token API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTokenPrice](https://docs.moralis.io/reference/gettokenprice)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.