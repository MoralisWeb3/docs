---
title: "Understanding Account Abstraction: How to Get Native Balances from Smart Accounts"
slug: "../how-to-get-the-native-balance-of-a-smart-contract-account"
description: "How to get the native balance from a smart contract account using Moralis Wallet API."
sidebar_label: "Get native balance of a smart contract account"
---

There are two primary account types:
* Contract Accounts
* Token Accounts

**Token Accounts** provide users direct control over their tokens via private keys, enabling transactions and interaction with dApps.

**Contract Accounts** function autonomously, controlled by pre-defined smart contract code without private keys.

:::tip
As an example of account types, you can read the [Ethereum Accounts](https://ethereum.org/en/developers/docs/accounts/#types-of-account) article.
:::

Now, let's explore how Moralis simplifies the process of getting the native balance of a smart contract account.

This step-by-step tutorial shows how to retrieve the native balance from a smart account, simplifying the process and offering code examples in multiple programming languages.

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

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
// Import the Moralis library and necessary modules
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// Define an asynchronous function runApp to retrieve the native balance of a smart contract account
const runApp = async() => {
  // Initialize the Moralis SDK with your API key and other configurations
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...add any other relevant configuration options
  });

  // Define the address of a smart contract account for which you want to fetch the native balance
  const address = "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5";

  // Specify the blockchain that you are working with (e.g., Ethereum)
  const chain = EvmChain.ETHEREUM;

  // Use the Moralis getNativeBalance method to request the native balance
  const response = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  // Log the JSON response containing the native balance to the console
  console.log(response.toJSON());
}

// Invoke the runApp function to start the process
runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript
// Import the Moralis library and necessary modules
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

// Define an asynchronous function runApp to retrieve the native balance of a smart contract account
const runApp = async () => {
  // Initialize the Moralis SDK with your API key and other configurations
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration options
  });

  // Define the address of a smart contract account for which you want to fetch the native balance
  const address = "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5";

  // Specify the blockchain that you are working with (e.g., Ethereum)
  const chain = EvmChain.ETHEREUM;

  // Use the Moralis getNativeBalance method to request the native balance
  const response = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  // Log the response as a JSON object, which contains the native balance information
  console.log(response.toJSON());
};

// Execute the runApp function to start the process
runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python
# Import the necessary modules from the Moralis library
from moralis import evm_api

# Replace "YOUR_API_KEY" with your actual API key
api_key = "YOUR_API_KEY"

# Define the parameters required for fetching the native balance
params = {
    # Replace with the target address of smart contract account
    "address": "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5",

    # Specify the blockchain you are working with (e.g., Ethereum)
    "chain": "eth",
}

# Use the Moralis get_native_balance method to retrieve the native balance
result = evm_api.balance.get_native_balance(
    api_key=api_key,
    params=params,
)

# Print the result, which contains the native balance information
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

Congratulations 🥳! You have successfully retrieved the native balance of a smart account using the Moralis [Wallet API](https://moralis.io/api/wallet/).

## Video Tutorial: Get Any Wallet Native Crypto Balance

For a visual guide, check out our YouTube tutorial:

[Watch the Tutorial](https://www.youtube.com/watch?v=sL5t07JE0aE)

## Get 24/7 Developer Support

Should you encounter any challenges while following this tutorial, our community engineers are here to assist you. Reach out to us on [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to receive 24/7 developer support. Your success is our priority!

## API Reference

If you want to explore more details about other wallet endpoints and optional parameters, refer to the [API Reference](/web3-data-api/evm/reference#wallet-api).

## See Also

* [How to Get Transaction History for an Address of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-transactions-of-smart-contract-account)
* [How to Get ERC-20 Tokens of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-ERC-20-token-by-smart-account)
* [How to Get NFT Transfers of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-NFT-transfers-of-smart-account)
* [How to Get ERC-20 Transfers of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-erc-20-transfers-of-smart-contract-account)
