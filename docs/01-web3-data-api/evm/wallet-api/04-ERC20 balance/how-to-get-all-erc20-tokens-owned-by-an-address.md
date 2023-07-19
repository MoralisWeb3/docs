---
title: "How to get all ERC20 tokens owned by an address"
slug: "../how-to-get-all-erc20-tokens-owned-by-an-address"
description: "Learn how to get all ERC20 tokens owned by an address by Moralis Wallet API."
sidebar_label: "Get ERC20 tokens owned by address"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get all ERC20 tokens owned by an address

In order to get all ERC20 tokens owned by an address, Moralis provides you with an [getWalletTokenBalances](/web3-data-api/evm/reference/get-wallet-token-balances) endpoint.

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

  const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
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

  const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
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
    "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "chain": "eth",
}

result = evm_api.token.get_wallet_token_balances(
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
[
  {
    "token_address": "0xefd6c64533602ac55ab64442307f6fe2c9307305",
    "name": "APE",
    "symbol": "APE",
    "logo": null,
    "thumbnail": null,
    "decimals": 18,
    "balance": "101715701444169451516503179"
  },
  {
    "token_address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "name": "Wrapped Ether",
    "symbol": "WETH",
    "logo": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.webp",
    "thumbnail": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2_thumb.webp",
    "decimals": 18,
    "balance": "85000000000000000"
  }
]
```

Congratulations 🥳 You just got all ERC20 tokens owned by an address with just a few lines of code using the Moralis Token API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getWalletTokenBalances](/web3-data-api/evm/reference/get-wallet-token-balances)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
