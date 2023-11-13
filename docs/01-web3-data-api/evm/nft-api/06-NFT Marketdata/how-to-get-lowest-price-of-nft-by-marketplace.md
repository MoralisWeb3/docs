---
title: "How to get lowest price of an NFT by Markeplace"
slug: "../../how-to-get-lowest-price-of-nft-by-marketplace"
description: "Learn how to get lowest price of an NFT by Markeplace using the Moralis NFT API."
sidebar_label: "Get NFT lowest price"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get All Transfers Of An NFT

In order to get lowest price of an NFT, Moralis provides you with an [getNFTLowestPrice](/web3-data-api/evm/reference/get-nft-lowest-price) endpoint.

Here you'll need three parameters: `address`, `marketplace`, and `chain`.

Once you have obtained the `address`, `marketplace` and `chain`, you can copy the following code:

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

  const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

  const chain = EvmChain.ETHEREUM;

  const marketplace = "opensea";

  const response = await Moralis.EvmApi.nft.getNFTLowestPrice({
    address,
    chain,
    marketplace,
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

  const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

  const chain = EvmChain.ETHEREUM;

  const marketplace = "opensea";

  const response = await Moralis.EvmApi.nft.getNFTLowestPrice({
    address,
    chain,
    marketplace,
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
  "chain": "eth",
  "marketplace": "opensea",
  "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
}

result = evm_api.nft.get_nft_lowest_price(
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
  "transaction_hash": "0x7f144f0ba4a412b8b683b126e10962754d80f1010531f57f425e499c23983c9a",
  "transaction_index": "47",
  "token_ids": [
    "3644"
  ],
  "seller_address": "0xdacc47d22370a3cc940160efbe62750c47900f44",
  "buyer_address": "0x756dcf63d25ba456c492a892db61719e5861a872",
  "token_address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  "marketplace_address": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
  "price": "33460000000000000000",
  "block_timestamp": "2023-07-23T13:58:47.000Z",
  "block_number": "17756263",
  "block_hash": "0x75706cd5532f12eaeeece29bbe926e2afd435fd6c9d71fc9c893094bd751dc14"
}
```

Congratulations 🥳 You just got lowest price of an NFT with just a few lines of code using the Moralis NFT API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTLowestPrice](/web3-data-api/evm/reference/get-nft-lowest-price)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
