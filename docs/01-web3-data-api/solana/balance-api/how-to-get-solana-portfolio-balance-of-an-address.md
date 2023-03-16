---
title: "How to get Solana portfolio balance of an address"
slug: "../how-to-get-solana-portfolio-balance-of-an-address"
description: "Learn how to retrieve the Solana portfolio balance of a wallet address using the Moralis Solana API."
sidebar_label: "Get Solana portfolio balance of address"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-sol-utils" python="moralis" />

## Step 2: Get Solana portfolio balance of an address

In order to get the Solana portfolio balance of a wallet address, Moralis provides you the [getPortfolio](/web3-data-api/solana/reference/get-sol-portfolio) API endpoint to do so.

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

  const response = await Moralis.SolApi.account.getPortfolio({
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

  const response = await Moralis.SolApi.account.getPortfolio({
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
    "address": "BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen",
    "network": "mainnet",
}

result = sol_api.account.get_portfolio(
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
  "tokens": [
    {
      "associatedTokenAddress": "Dpmpwm93Amvj4uEFpYhjv8ZzfpgARq6zxKTi6mrj97gW",
      "mint": "BXWuzb3jEuGsGUe29xdApu8Z3jVgrFbr3wWdsZmLWYk9",
      "amountRaw": "100000000000",
      "amount": "100",
      "decimals": "9"
    }
  ],
  "nfts": [
    {
      "associatedTokenAddress": "AUmHKB9srYgzHW2E5NuEWyG9wp5g4Cbewxurr1geV1iR",
      "mint": "53kauHy6PJx9iykDV9BxpCBbXe2yPwA5tRcKcNDmfCxn",
      "amountRaw": "1",
      "amount": "1",
      "decimals": "0"
    }
  ],
  "nativeBalance": {
    "lamports": "5999980000",
    "solana": "5.99998"
  }
}
```

Congratulations 🥳 You just got the Solana Portfolio balance of a wallet address with just a few lines of code using the Moralis Solana API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getPortfolio](/web3-data-api/solana/reference/get-sol-portfolio)

## YouTube Tutorial

https://www.youtube.com/watch?v=3bPu7S0TDE0

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
