---
title: "How to get Uniswap V3 pair address"
slug: "../how-to-get-uniswap-v3-pair-address"
description: "Learn how to get the pair address of a Uniswap V3 liquidity pool using Moralis DeFi API."
sidebar_label: "Get Uniswap V3 pair address"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";



## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get Pair Address of A Uniswap V3 Liquidity Pool

In order to get pair address of a liquidity, Moralis provides you a [getPairAddress](/web3-data-api/evm/reference/get-pair-address) endpoint to do so.

Here you'll need three parameters: `token0`, `token1` and `address`.

Once you've obtained all three parameters, you can copy the following code:

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

  const chain = EvmChain.ETHEREUM;

  // token 0 address, e.g. WETH token address
  const token0Address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

  // token 1 address, e.g. LINK token address
  const token1Address = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

  const response = await Moralis.EvmApi.defi.getPairAddress({
    token0Address,
    token1Address,
    chain,
    exchange: "uniswapv3",
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

  const chain = EvmChain.ETHEREUM;

  // token 0 address, e.g. WETH token address
  const token0Address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

  // token 1 address, e.g. LINK token address
  const token1Address = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

  const response = await Moralis.EvmApi.defi.getPairAddress({
    token0Address,
    token1Address,
    chain,
    exchange: "uniswapv3",
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
    "exchange": "uniswapv3",
    # token 0 address, e.g. WETH token address
    "token0_address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    # token 1 address, e.g. LINK token address
    "token1_address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    "chain": "eth"
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

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{
  "token0": {
    "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
    "name": "Chain Link",
    "symbol": "LINK",
    "decimals": "18",
    "logo": "https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca.webp",
    "logo_hash": "fd74ea1227adb458733847c09aab05d89c35c14b640c5ee1e0a8bffa79193eb4",
    "thumbnail": "https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca_thumb.webp",
    "block_number": null,
    "validated": null,
    "created_at": "2022-01-20T10:39:55.818Z"
  },
  "token1": {
    "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "name": "Wrapped Ether",
    "symbol": "WETH",
    "decimals": "18",
    "logo": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.webp",
    "logo_hash": "0a7fc292596820fe066ce8ce3fd6e2ad9d479c2993f905e410ef74f2062a83ec",
    "thumbnail": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2_thumb.webp",
    "block_number": null,
    "validated": null,
    "created_at": "2022-01-20T10:39:55.818Z"
  },
  "pairAddress": "0xa6cc3c2531fdaa6ae1a3ca84c2855806728693e8"
}
```

Congratulations 🥳 You just get the pair address of a Uniswap V3 liquidity pool with just a few lines of code using the Moralis DeFi API!

## Youtube Video

https://www.youtube.com/watch?v=TocrId1UeDg

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getPairAddress](/web3-data-api/evm/reference/get-pair-address)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
