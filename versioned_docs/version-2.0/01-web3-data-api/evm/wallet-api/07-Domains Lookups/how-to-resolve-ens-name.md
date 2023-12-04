---
title: "How to reverse resolve an ENS name"
slug: "../how-to-resolve-ens-name"
description: "Learn how to reverse resolve the ENS name from an address using the Moralis Resolve API."
sidebar_label: "Get ENS name by address"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Reverse Resolve ENS name

In order to reverse resolve the ENS name from an ETH address, Moralis provides you a [resolveAddress](/web3-data-api/evm/reference/wallet-api/resolve-address) endpoint to do so.

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

  const address = "0x26fcbd3afebbe28d0a8684f790c48368d21665b5";

  const response = await Moralis.EvmApi.resolve.resolveAddress({
    address,
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

  const address = "0x26fcbd3afebbe28d0a8684f790c48368d21665b5";

  const response = await Moralis.EvmApi.resolve.resolveAddress({
    address,
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
  "address": "0x26fcbd3afebbe28d0a8684f790c48368d21665b5",
}

result = evm_api.resolve.resolve_address(
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
  "name": "vitalik.eth"
}
```

Congratulations 🥳 You just reverse resolved the ENS name from a wallet address with just a few lines of code using the Moralis Resolve API!

## Youtube Video

https://www.youtube.com/watch?v=Q0tPFW0nf1E

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [resolveAddress](/web3-data-api/evm/reference/wallet-api/resolve-address)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
