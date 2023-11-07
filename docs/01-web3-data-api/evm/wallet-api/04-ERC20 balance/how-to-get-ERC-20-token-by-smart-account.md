---
title: "How to Get ERC-20 tokens of a Smart Account"
slug: "../how-to-get-erc-20-token-of-smart-contract-account"
description: "Learn how to query and get ERC-20 tokens smart contract using the Moralis Wallet API."
sidebar_label: Get ERC-20 tokens of a smart contract account
---

:::tip
As an example of account types, you can read the [Ethereum Accounts](https://ethereum.org/en/developers/docs/accounts/#types-of-account) article.
:::

The Moralis [Wallet API](https://moralis.io/api/wallet/) streamlines the retrieval of ERC-20 tokens, it allows developers to access tokens data for various purposes.

When you make a new token on the Ethereum network, it usually has the ERC-20 specification. For an Ethereum token to align with the ERC-20 standard, it must possess an array of diverse methods and attributes. These elements collectively form the essential building blocks that enable smart contracts to function seamlessly within the Ethereum network as tokens.

The ERC-20 standard serves as a universal blueprint and interface, providing a common set of guidelines for smart contracts to adhere to when operating as tokens on the Ethereum blockchain. This standardized framework fosters interoperability, consistency, and compatibility, making ERC-20 tokens the cornerstone of decentralized finance (DeFi) and blockchain-based ecosystems.

This step-by-step tutorial shows how to retrieve and query an ERC-20 token in a smart account using the account address and the token contract, simplifying the process and offering code examples in multiple programming languages.

:::tip
This tutorial uses Moralis' [`getWalletTokenBalances`](/web3-data-api/evm/reference/get-wallet-token-balances) RPC method.
:::

## Step 1: Set Up Moralis

Read our article, [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key), and make sure to finish all the steps. Only after that can you go ahead to complete this guide.

## Step 2: Method to Get and Retrieve ERC-20 Tokens for a Given Smart Account Address

You can use the [`getWalletTokenBalances`](/web3-data-api/evm/reference/get-wallet-token-balances) API endpoint to get all transactions for an address of a smart account. This endpoint allows you to fetch transactions for a given address of a smart account.

You will need two essential parameters:

* `address`
* `chain`

Once you have obtained both `address` and `chain`, you can use the code snippets below to retrieve the transactions:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript
// Import Moralis and EvmChain from Moralis and Common EVM Utils respectively
    const Moralis = require("moralis").default;
    const { EvmChain } = require("@moralisweb3/common-evm-utils");

    // Define an asynchronous function runApp
    const runApp = async () => {
      // Initialize Moralis with your API key and other configurations
      await Moralis.start({
        apiKey: "YOUR_API_KEY",
        // ...and any other configuration
      });

      // Define the smart account address you want to retrieve ERC-20 tokens for
      const address = "0x9b722B2aA4Cc119aCf8c95bBF5244092Be6880b9";

      // Specify the (EVM) you are working with
      const chain = EvmChain.POLYGON;

      // Use Moralis EvmApi to get wallet token balances for the address and chain
      const response = await Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain,
      });

      // Log the JSON response to the console
      console.log(response.toJSON());
    };

    // Call the runApp function to start the application
    runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript
// Import the Moralis module for TypeScript
import Moralis from "moralis";
// Import EvmChain from Common EVM Utils
import { EvmChain } from "@moralisweb3/common-evm-utils";

// Define an asynchronous function runApp
const runApp = async () => {
  // Initialize Moralis with your API key and other configurations
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  // Define the smart account address you want to retrieve ERC-20 tokens for
  const address = "0x9b722B2aA4Cc119aCf8c95bBF5244092Be6880b9";

  // Specify the chain (EVM) you are working with
  const chain = EvmChain.POLYGON;

  // Use Moralis EvmApi to get wallet token balances for the address and chain
  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });

  // Log the JSON response to the console
  console.log(response.toJSON());
};

// Call the runApp function to start the application
runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python
# Import the necessary module from Moralis
from moralis import evm_api

# Define your Moralis API key
api_key = "YOUR_API_KEY"

# Create a dictionary of parameters with the smart account address and chain
params = {
    "address": "0x9b722B2aA4Cc119aCf8c95bBF5244092Be6880b9",
    "chain": "polygon",
}

# Use the Moralis evm_api to get wallet token balances
result = evm_api.token.get_wallet_token_balances(
    api_key=api_key,
    params=params,
)

# Print the result to the console
print(result)
```

</TabItem>
</Tabs>

## Step 3: Run the Script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

Code example of the JSON response:

```json
[
  {
    "token_address": "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5",
    "name": "APE",
    "symbol": "APE",
    "logo": null,
    "thumbnail": null,
    "decimals": 18,
    "balance": "101715701444169451516503179"
  },
  {
    "token_address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "name": "Wrapped Ether",
    "symbol": "WETH",
    "logo": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.webp",
    "thumbnail": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2_thumb.webp",
    "decimals": 18,
    "balance": "85000000000000000"
  }
]
```

Congratulations! 🥳 You have successfully fetched ERC-20 tokens for a given smart account address on Ethereum using the Moralis Wallet API.

## Video Tutorial: How to Get All ERC-20 Tokens

For a visual guide, you can check out our YouTube tutorial:

[Watch the Tutorial](https://www.youtube.com/watch?v=VdnMRiMYibA)

## Get 24/7 Developer Support

Should you encounter any challenges while following this tutorial, our community engineers are here to assist you. Reach out to us on [Discord](https://moralis.io/discord) or our [Moralis forum](https://forum.moralis.io) to receive 24/7 developer support. Your success is our priority!

## API Reference

If you want to explore more details about other wallet endpoints and optional parameters, check out our [API Reference](/web3-data-api/evm/reference#wallet-api) page.

## See Also

* [Understanding Account Abstraction: How to Get Native Balances from Smart Accounts](/web3-data-api/evm/wallet-api/how-to-get-the-native-balance-of-a-smart-contract-account)
* [How to Get Transaction History for an Address of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-transactions-of-smart-contract-account)
