---
title: "How to resolve an Unstoppable domain"
slug: "../how-to-reverse-resolve-an-address"
description: "Learn how to resolve an Unstoppable domain to a wallet address using Moralis Resolve API."
sidebar_label: "Get address by Unstoppable domain"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Resolve Unstoppable Domain

In order to resolve an Unstoppable domain to an ETH address, Moralis provides you a [resolveDomain](/web3-data-api/evm/reference/wallet-api/resolve-domain) endpoint to do so.

Here you'll need one parameter: `address`.

Once you've obtained the `address`, you can copy the following code:

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

  const domain = "brad.crypto";

  const response = await Moralis.EvmApi.resolve.resolveDomain({
    domain,
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

  const domain = "brad.crypto";

  const response = await Moralis.EvmApi.resolve.resolveDomain({
    domain,
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
    "domain": "brad.crypto",
    "currency": "eth",
}

result = evm_api.resolve.resolve_domain(
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
  "address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
}
```

Congratulations 🥳 You just resolved an Unstoppable domain to a wallet address with just a few lines of code using the Moralis Resolve API!

## Youtube Video

https://www.youtube.com/watch?v=KgZuwI_A320

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [resolveDomain](/web3-data-api/evm/reference/wallet-api/resolve-domain)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
