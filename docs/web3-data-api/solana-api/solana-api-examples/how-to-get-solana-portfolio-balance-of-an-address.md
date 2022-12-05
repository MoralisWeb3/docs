---
title: "How to get Solana portfolio balance of an address"
slug: "how-to-get-solana-portfolio-balance-of-an-address"
hidden: false
createdAt: "2022-11-07T08:46:37.374Z"
updatedAt: "2022-11-28T12:08:26.046Z"
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

First [register](https://docs.moralis.io/docs/quickstart) your Moralis account and get your Moralis API Key.

Once you have your Moralis API Key, install [Moralis SDK](https://docs.moralis.io/docs/moralis-sdk) in your project.

```shell npm
npm install moralis
```
```shell yarn
yarn add moralis
```
```shell pnpm
pnpm add moralis
```
```Text pip
pip install moralis
```



## Step 2: Get Solana portfolio balance of an address

In order to get the Solana portfolio balance of a wallet address, Moralis provides you the `[getPortfolio](https://docs.moralis.io/reference/getsolportfolio)` API endpoint to do so.

Here you'll need two parameters: `address` and `network`.

Once you have obtained both the `address` and `network`, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { SolNetwork } = require('@moralisweb3/sol-utils');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = 'BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen';

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.account.getPortfolio({
    address,
    network,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```typescript index.ts
import Moralis from "moralis";
import { SolNetwork } from "@moralisweb3/sol-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = 'BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen';

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.account.getPortfolio({
    address,
    network,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```python index.py
from moralis import sol_api

api_key = "YOUR_API_KEY"
params = {
    "address": "BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen", 
    "network": "mainnet", 
}

result = sol_api.account.get_portfolio(
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
  "tokens": [
    {
      "associatedTokenAddress": "Dpmpwm93Amvj4uEFpYhjv8ZzfpgARq6zxKTi6mrj97gW",
      "mint": "BXWuzb3jEuGsGUe29xdApu8Z3jVgrFbr3wWdsZmLWYk9",
      "amountRaw": "100000000000",
      "amount": "100",
      "decimals": "9"
    }
  ],
  "nfts": [
    {
      "associatedTokenAddress": "AUmHKB9srYgzHW2E5NuEWyG9wp5g4Cbewxurr1geV1iR",
      "mint": "53kauHy6PJx9iykDV9BxpCBbXe2yPwA5tRcKcNDmfCxn",
      "amountRaw": "1",
      "amount": "1",
      "decimals": "0"
    }
  ],
  "nativeBalance": {
    "lamports": "5999980000",
    "solana": "5.99998"
  }
}
```



Congratulations 🥳 You just got the Solana Portfolio balance of a wallet address with just a few lines of code using the Moralis Solana API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getPortfolio](https://docs.moralis.io/reference/getsolportfolio)

## YouTube Tutorial

https://www.youtube.com/watch?v=3bPu7S0TDE0

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.