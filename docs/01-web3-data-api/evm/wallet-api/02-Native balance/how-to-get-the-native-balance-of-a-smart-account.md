---
title: "Understanding Account Abstraction: How to Get Native Balances from Smart Accounts"
slug: "../how-to-get-the-native-balance-of-a-smart-account"
description: "How to get the native balance from a smart account using Moralis Wallet API."
sidebar_label: "Get native balance of a smart contract account"
---

Moralis simplifies the process of getting the native balance of an ERC20 token vault associated with a smart contract account.

This article provides a comprehensive guide on using Moralis Wallet API to retrieve the native balance from a smart account associated with an ERC20 token vault, simplifying the process and offering code examples in multiple programming languages.

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get the Native Balance of a Smart Account

You can use the API endpoint [getNativeBalance](/web3-data-api/evm/reference/get-native-balance) to get the native balance for a specific wallet address. You will need two essential parameters:

* `address`
* `chain`

Once you have obtained both the `address` and `chain`, you can use the code snippets below to retrieve the native balance:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

	console.log(response.toJSON());
}

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    "chain": "eth",
}

result = evm_api.balance.get_native_balance(
    api_key=api_key,
    params=params,
)

print(result)
```

</TabItem>
</Tabs>

## Step 3: Run the Script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
[
  {
    "balance": "3989233490541891348056490"
  }
]
```

Congratulations 🥳! You have successfully retrieved the native balance of an ERC20 token vault associated with a smart account using the Moralis Wallet API.

## Video Tutorial: Get Any Wallet Native Crypto Balance

For a visual guide, check out our YouTube tutorial:

[Watch the Tutorial](https://www.youtube.com/watch?v=sL5t07JE0aE)

## Get 24/7 Developer Support

Should you encounter any challenges while following this tutorial, our community engineers are here to assist you. Reach out to us on [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to receive 24/7 developer support. Your success is our priority!

## API Reference

If you want to explore more details about other wallet endpoints and optional parameters, refer to the [API Reference](/web3-data-api/evm/reference#wallet-api).
