---
title: "How to get Pancakeswap V1 pair reserves"
slug: "../how-to-get-pancakeswap-v1-pair-reserves"
description: "Learn how to get the pair reserves of a given pair address from Pancakeswap V1 using Moralis DeFi API."
sidebar_label: "Get Pancakeswap V1 pair reserves"
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get Pair Reserves of A Pancakeswap V1 Liquidity Pool

In order to get pair address of a liquidity, Moralis provides you a [getPairAddress](/web3-data-api/evm/reference/get-pair-address) endpoint to do so.

Here you'll need two parameters: `pairAddress` and `address`.

Once you've obtained the `pairAddress` and `address`, you can copy the following code:

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

  const pairAddress = "0xaebe45e3a03b734c68e5557ae04bfc76917b4686";

  const chain = EvmChain.BSC;

  const response = await Moralis.EvmApi.defi.getPairReserves({
    pairAddress,
    chain,
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

  const pairAddress = "0xaebe45e3a03b734c68e5557ae04bfc76917b4686";

  const chain = EvmChain.BSC;

  const response = await Moralis.EvmApi.defi.getPairReserves({
    pairAddress,
    chain,
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

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{
  "reserve0": "54905537425359452861",
  "reserve1": "2165856852288790099409"
}
```

Congratulations 🥳 You just get the pair reserves of a Pancakeswap V1 liquidity pool with just a few lines of code using the Moralis DeFi API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getPairReserves](/web3-data-api/evm/reference/get-pair-reserves)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
