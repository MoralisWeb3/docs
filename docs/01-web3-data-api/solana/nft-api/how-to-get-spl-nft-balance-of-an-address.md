---
title: "How to get SPL NFT balance of an address"
slug: "../how-to-get-spl-nft-balance-of-an-address"
description: "Learn how to get SPL NFT balance of an address using Moralis Solana API."
sidebar_label: "Get SPL NFT balance of address"
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/solana/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get SPL NFT balance of an address

In order to get the SPL NFT balance of a wallet address, Moralis provides you the [getNFTs](/web3-data-api/solana/reference/get-sol-nfts) API endpoint to do so.

Here you'll need two parameters: `address` and `network`.

Once you have obtained both the `address` and `network`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const { SolNetwork } = require("@moralisweb3/common-sol-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen";

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.account.getNFTs({
    address,
    network,
  });

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";
import { SolNetwork } from "@moralisweb3/common-sol-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen";

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.account.getNFTs({
    address,
    network,
  });

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import sol_api

api_key = "YOUR_API_KEY"
params = {
    "network": "mainnet",
    "address": "BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen",
}

result = sol_api.account.get_nfts(
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
    "associatedTokenAddress": "AUmHKB9srYgzHW2E5NuEWyG9wp5g4Cbewxurr1geV1iR",
    "mint": "53kauHy6PJx9iykDV9BxpCBbXe2yPwA5tRcKcNDmfCxn"
  }
]
```

Congratulations 🥳 You just got the SPL NFT balance of a wallet address with just a few lines of code using the Moralis Solana API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTs](/web3-data-api/solana/reference/get-sol-nfts)

## YouTube Tutorial

https://www.youtube.com/watch?v=GLTGGq23Et4

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
