---
title: "How to get historical ERC20 token price"
slug: "../../how-to-get-historical-erc20-token-price"
description: "Learn how to get historical ERC20 token price using Moralis Token API."
sidebar_label: "Get ERC20 token historical price"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get the price of an ERC20 token

In order to get the historical price of an ERC20 token, Moralis provides you with an [getTokenPrice](/web3-data-api/evm/reference/get-token-price) endpoint.

Here you'll need two parameters: `address` and `chain`.

Once you have obtained the `address` and `chain`, you can copy the following code:

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

  const historicalPrice = [];

  const address = "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0";

  const chain = EvmChain.ETHEREUM;

  for (let toBlock = 16323500; toBlock < 16323550; toBlock += 10) {
    const response = await Moralis.EvmApi.token.getTokenPrice({
      address,
      chain,
      toBlock,
    });

    historicalPrice.push(response?.toJSON());
  }

  console.log(historicalPrice);
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

  const historicalPrice = [];

  const address = "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0";

  const chain = EvmChain.ETHEREUM;

  for (let toBlock = 16323500; toBlock < 16323550; toBlock += 10) {
    const response = await Moralis.EvmApi.token.getTokenPrice({
      address,
      chain,
      toBlock,
    });

    historicalPrice.push(response?.toJSON());
  }

  console.log(historicalPrice);
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"
historicalPrice = []

for to_block in range(16323500, 16323550, 10):
  params = {
    "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "chain": "eth",
    "to_block": to_block
  }
  result = evm_api.token.get_token_price(
    api_key=api_key,
    params=params,
  )

  historicalPrice.append(result)

print(historicalPrice)
```

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
[
  {
    "nativePrice": {
      "value": "642828540698243",
      "decimals": 18,
      "name": "Ether",
      "symbol": "ETH"
    },
    "usdPrice": 0.7811524052648599,
    "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
    "exchangeName": "Uniswap v3"
  },
  {
    "nativePrice": {
      "value": "642828540698243",
      "decimals": 18,
      "name": "Ether",
      "symbol": "ETH"
    },
    "usdPrice": 0.7811524052648599,
    "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
    "exchangeName": "Uniswap v3"
  },
  {
    "nativePrice": {
      "value": "642892823552313",
      "decimals": 18,
      "name": "Ether",
      "symbol": "ETH"
    },
    "usdPrice": 0.7812305205053863,
    "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
    "exchangeName": "Uniswap v3"
  },
  {
    "nativePrice": {
      "value": "642892823552313",
      "decimals": 18,
      "name": "Ether",
      "symbol": "ETH"
    },
    "usdPrice": 0.7812305205053863,
    "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
    "exchangeName": "Uniswap v3"
  },
  {
    "nativePrice": {
      "value": "642892823552313",
      "decimals": 18,
      "name": "Ether",
      "symbol": "ETH"
    },
    "usdPrice": 0.7812305205053863,
    "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
    "exchangeName": "Uniswap v3"
  }
]
```

Congratulations 🥳 You just got the historical price of an ERC20 Token with just a few lines of code using the Moralis Token API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTokenPrice](/web3-data-api/evm/reference/get-token-price)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
