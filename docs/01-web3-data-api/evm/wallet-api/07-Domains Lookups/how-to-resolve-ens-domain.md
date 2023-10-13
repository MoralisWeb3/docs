---
title: "How to resolve an ENS domain"
slug: "../how-to-resolve-ens-domain"
description: "Learn how to resolve the ENS domain using the Moralis Resolve API."
sidebar_label: "Get address by ENS domain"
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Resolve ENS domain

In order to resolve the ENS domain to an ETH address, Moralis provides you a [resolveENSDomain](/web3-data-api/evm/reference/wallet-api/resolve-ens-domain) endpoint to do so.

Here you'll need one parameter: `domain`.

Once you've obtained the `domain`, you can copy the following code:

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

  const domain = "vitalik.eth";

  const response = await Moralis.EvmApi.resolve.resolveENSDomain({
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

  const domain = "vitalik.eth";

  const response = await Moralis.EvmApi.resolve.resolveENSDomain({
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
  "domain": "vitalik.eth",
}

result = evm_api.resolve.resolve_ens_domain(
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
  "address": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
}
```

Congratulations 🥳 You just resolved the address to an ENS domain with just a few lines of code using the Moralis Resolve API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [resolveENSDomain](/web3-data-api/evm/reference/wallet-api/resolve-ens-domain)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
