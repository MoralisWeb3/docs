---
title: "How to get the spender allowance of an ERC20 token"
slug: "../../how-to-get-the-spender-allowance"
description: "Learn how to get the spender allowance of an ERC20 token using Moralis Token API."
sidebar_label: "Get ERC20 token spender allowance"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get the spender allowance of an ERC20 token

In order to get the spender allowance, Moralis provides you with an [getTokenAllowance] endpoint.

Here you'll need four parameters: `address` , `chain`, `ownerAddress` , `spenderAddress`.

- `address`: The address of the token contract.
- `chain`: The chain to query.
- `ownerAddress`: The address of the token owner.
- `spenderAddress`: The address of the token spender.

Once you have obtained the parameters, you can copy the following code:

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

  const chain = EvmChain.ETHEREUM;

  const address = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

  const ownerAddress = "0x7c470D1633711E4b77c8397EBd1dF4095A9e9E02";

  const spenderAddress = "0xed33259a056f4fb449ffb7b7e2ecb43a9b5685bf";

  const response = await Moralis.EvmApi.token.getTokenAllowance({
    address,
    chain,
    ownerAddress,
    spenderAddress,
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

  const chain = EvmChain.ETHEREUM;

  const address = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

  const ownerAddress = "0x7c470D1633711E4b77c8397EBd1dF4095A9e9E02";

  const spenderAddress = "0xed33259a056f4fb449ffb7b7e2ecb43a9b5685bf";

  const response = await Moralis.EvmApi.token.getTokenAllowance({
    address,
    chain,
    ownerAddress,
    spenderAddress,
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
    "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    "owner_address": "0x7c470D1633711E4b77c8397EBd1dF4095A9e9E02",
    "spender_address": "0xed33259a056f4fb449ffb7b7e2ecb43a9b5685bf",
    "chain": "eth"
}

result = evm_api.token.get_token_allowance(
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
  "allowance": "0"
}
```

Congratulations 🥳 You just got the spender allowance with just a few lines of code using the Moralis Token API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTokenAllowance]

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
