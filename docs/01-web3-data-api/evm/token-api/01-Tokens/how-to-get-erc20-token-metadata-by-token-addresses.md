---
title: "How to get ERC20 token metadata by token addresses"
slug: "../../how-to-get-erc20-token-metadata-by-token-addresses"
description: "Learn how to get ERC20 token metadata by multiple token addresses using Moralis Token API."
sidebar_label: "Get ERC20 token metadata by token addresses"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";



## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get ERC20 Token Metadata By Multiple Token Addresses

In order to an ERC20 token metadata, Moralis provides you a [getTokenMetadata](/web3-data-api/evm/reference/get-token-metadata) API endpoint to do so.

Here you'll need two parameters: `addresses` and `chain`.

Once you've obtained both the `addresses` and `chain`, you can copy the following code:

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

  const addresses = [
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  ];

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses,
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
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const addresses = [
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  ];

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses,
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
    "addresses": [
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "0x514910771AF9Ca656af840dff83E8264EcF986CA"
    ],
    "chain": "eth",
}

result = evm_api.token.get_token_metadata(
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
  {
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
  }
]
```

Congratulations 🥳 you just got the price of an ERC20 metadata by multiple token addresses with just a few lines of code using the Moralis Token API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

<ul>
  <li><a href="/web3-data-api/evm/reference/get-token-metadata">getTokenMetadata</a></li>
</ul>

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
