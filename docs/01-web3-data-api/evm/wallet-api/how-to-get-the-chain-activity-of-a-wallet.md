---
title: "How to get the chain activity of a wallet"
slug: "../how-to-get-the-chain-activity-of-a-wallet"
description: "Learn how to get the chain activity of a wallet using the Moralis Wallet API."
sidebar_label: "Get chain activity of address"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Install Moralis SDK

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get the chain activity of a wallet address

In order to get the chain activity of a wallet address, Moralis provides you the [getChainActivity](/web3-data-api/evm/reference/get-chain-activity-by-wallet) API endpoint.

Here you'll need two parameters: `address` and `chain`.

Once you have obtained both the `address` and `chain`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript
// const Moralis = require("moralis").default;
// const { EvmChain } = require("@moralisweb3/common-evm-utils");

// const runApp = () => {
//   await Moralis.start({
//     apiKey: "YOUR_API_KEY",
//     // ...and any other configuration
//   });

//   const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';

//   const chain = EvmChain.ETHEREUM;

//   const response = await Moralis.EvmApi.balance.getNativeBalance({
//     address,
//     chain,
//   });

// 	console.log(response.toJSON());
// }

// runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript
// import Moralis from "moralis";
// import { EvmChain } from "@moralisweb3/common-evm-utils";

// const runApp = () => {
//   await Moralis.start({
//     apiKey: "YOUR_API_KEY",
//     // ...and any other configuration
//   });

//   const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

//   const chain = EvmChain.ETHEREUM;

//   const response = await Moralis.EvmApi.balance.getNativeBalance({
//     address,
//     chain,
//   });

//   console.log(response.toJSON());
// };

// runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python
# from moralis import evm_api

# api_key = "YOUR_API_KEY"

# params = {
#     "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
#     "chain": "eth",
# }

# result = evm_api.balance.get_native_balance(
#     api_key=api_key,
#     params=params,
# )

# print(result)
```

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
// [
//   {
//     "balance": "900051407680925461166"
//   }
// ]
```

Congratulations 🥳 You just got the native balance of a wallet address with just a few lines of code using the Moralis Balance API!

## Youtube Video


## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getChainActivity](/web3-data-api/evm/reference/get-chain-activity-by-wallet)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
