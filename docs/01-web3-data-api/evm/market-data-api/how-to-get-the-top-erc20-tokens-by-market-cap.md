---
title: "How to get the top ERC20 tokens by market cap"
slug: "../../how-to-get-the-top-erc20-tokens-by-market-cap"
description: "Learn how to get the top ERC20 tokens by market cap using Market Data API."
sidebar_label: "Get the top ERC20 tokens by market cap"
sidebar_position: 0
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get The Top ERC20 Tokens By Market Cap

In order to get the top ERC20 tokens by market cap, Moralis provides you with a [getTopERC20TokensByMarketCap](/web3-data-api/evm/reference/get-top-erc20-tokens-by-market-cap) endpoint to do so. To use the API, you can copy the following code:

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

  const response =
    await Moralis.EvmApi.marketData.getTopERC20TokensByMarketCap();

  console.log(response.raw);
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

  const response =
    await Moralis.EvmApi.marketData.getTopERC20TokensByMarketCap();

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"

result = evm_api.market_data.get_top_erc20_tokens_by_market_cap(
  api_key=api_key,
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
[
  {
    "rank": "1",
    "token_name": "Wrapped Ether",
    "token_symbol": "WETH",
    "token_logo": "1",
    "token_decimals": "18",
    "contract_address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "price_usd": "0.0285",
    "price_24h_percent_change": "0.0285",
    "price_7d_percent_change": "0.0285",
    "market_cap_usd": "0.0285"
  }
]
```

Congratulations 🥳 you just got the top ERC20 tokens by market cap using Market Data API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTopERC20TokensByMarketCap](/web3-data-api/evm/reference/get-top-erc20-tokens-by-market-cap)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
