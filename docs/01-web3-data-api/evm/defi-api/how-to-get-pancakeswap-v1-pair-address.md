---
title: "How to get Pancakeswap V1 pair address"
slug: "../how-to-get-pancakeswap-v1-pair-address"
description: "Learn how to get the pair address of a Pancakeswap V1 liquidity pool using Moralis DeFi API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get Pair Address of A Pancakeswap V1 Liquidity Pool

In order to get pair address of a liquidity, Moralis provides you a [getPairAddress](/web3-data-api/reference/get-pair-address) endpoint to do so.

Here you'll need three parameters: `token0`, `token1` and `address`.

Once you've obtained all three parameters, you can copy the following code:

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

  const chain = EvmChain.BSC;

  // token 0 address, e.g. WBNB token address
  const token0Address = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';

  // token 1 address, e.g. LINK token address
  const token1Address = '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD';

  const response = await Moralis.EvmApi.defi.getPairAddress({
     token0Address,
     token1Address,
     chain,
     exchange: 'pancakeswapv1',
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

  const chain = EvmChain.BSC;

  // token 0 address, e.g. WBNB token address
  const token0Address = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';

  // token 1 address, e.g. LINK token address
  const token1Address = '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD';

  const response = await Moralis.EvmApi.defi.getPairAddress({
     token0Address,
     token1Address,
     chain,
     exchange: 'pancakeswapv1',
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
    "exchange": "pancakeswapv1",
    # token 0 address, e.g. WBNB token address
    "token0_address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 
    # token 1 address, e.g. LINK token address
    "token1_address": "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD", 
    "chain": "bsc"
}

result = evm_api.defi.get_pair_address(
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
  "token0": {
    "address": "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    "name": "Wrapped BNB",
    "symbol": "WBNB",
    "logo": null,
    "logo_hash": null,
    "thumbnail": null,
    "decimals": "18",
    "block_number": "8242108",
    "validated": 1,
    "created_at": "2022-01-20T10:41:03.034Z"
  },
  "token1": {
    "address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
    "name": "ChainLink Token",
    "symbol": "LINK",
    "logo": null,
    "logo_hash": null,
    "thumbnail": null,
    "decimals": "18",
    "block_number": "8242108",
    "validated": 1,
    "created_at": "2022-01-20T10:41:03.034Z"
  },
  "pairAddress": "0xaebe45e3a03b734c68e5557ae04bfc76917b4686"
}
```

Congratulations 🥳 You just get the pair address of a Pancakeswap V1 liquidity pool with just a few lines of code using the Moralis DeFi API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getPairAddress](/web3-data-api/reference/get-pair-address)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.