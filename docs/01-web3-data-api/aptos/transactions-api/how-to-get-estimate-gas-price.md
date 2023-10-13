---
title: "How to estimate the gas price"
slug: "../how-to-estimate-the-gas-price"
description: "Learn how to estimate the gas price using Moralis Transaction API."
sidebar_label: Estimate Gas Price
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/aptos/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Estimate gas price

In order to estimate the gas price, Moralis provides you a [estimateGasPrice](/web3-data-api/aptos/reference/estimate-gas-price) endpoint to do so.

Here you'll need one parameter: `network`.

Once you have obtained the `network`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const network = "mainnet";

  const response = await Moralis.AptosApi.transactions.estimateGasPrice({
    network,
  });

  console.log(response);
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const network = "mainnet";

  const response = await Moralis.AptosApi.transactions.estimateGasPrice({
    network,
  });

  console.log(response);
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import aptos_api

api_key = "YOUR_API_KEY"

params = {
    "network": "mainnet",
}

result = aptos_api.transactions.estimate-gas-price(
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
  "deprioritized_gas_estimate": 100,
  "gas_estimate": 100,
  "prioritized_gas_estimate": 150,
  "__headers": {
    "date": "Wed, 12 Apr 2023 15:09:16 GMT",
    "content-type": "application/json",
    "content-length": "84",
    "connection": "close",
    "x-aptos-chain-id": "1",
    "x-aptos-ledger-version": "119821921",
    "x-aptos-ledger-oldest-version": "0",
    "x-aptos-ledger-timestampusec": "1681312155079381",
    "x-aptos-epoch": "2186",
    "x-aptos-block-height": "46554718",
    "x-aptos-oldest-block-height": "0"
  }
}
```

Congratulations 🥳 You just estimate the gas price with just a few lines of code using the Moralis Transaction API!

## Youtube Video

https://www.youtube.com/watch?v=1GKfY3Pw458

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [estimateGasPrice](/web3-data-api/aptos/reference/estimate-gas-price)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
