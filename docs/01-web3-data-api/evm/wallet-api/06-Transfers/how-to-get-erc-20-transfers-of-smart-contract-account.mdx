---
title: "How to Get ERC-20 Transfers of a Smart Account"
slug: "../how-to-get-erc-20-transfers-of-smart-contract-account"
description: "Learn how to query and get ERC-20 transfers in smart contract using the Moralis Wallet API."
sidebar_label: Get ERC-20 transfers of a smart contract account
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";



:::tip
If you'd like examples of account types, read the [Ethereum Accounts](https://ethereum.org/en/developers/docs/accounts/#types-of-account) article.
:::

When you're working with ERC-20 tokens, it can be beneficial to track and analyze token transfers associated with a specific contract address. The [Wallet API](https://moralis.io/api/wallet/) offers a convenient solution to retrieve all the transfers of an ERC-20 token efficiently.

This step-by-step tutorial shows how to track, retrieve, and query an ERC-20 token in a smart account using the account address and the token contract, simplifying the process and offering code examples in multiple programming languages.

:::tip
This tutorial uses Moralis' [`getWalletTokenTransfers`](/web3-data-api/evm/reference/get-wallet-token-transfers) RPC method.
:::

## Step 1: Set Up Moralis

Please read our [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) article and finish all of its steps. Only after that can you go ahead and complete this guide.

## Step 2: Method to Get and Retrieve ERC-20 Transfers for a Given Smart Account Address

You can use the [`getWalletTokenTransfers`](/web3-data-api/evm/reference/get-wallet-token-transfers) API endpoint to get all transactions from a specific address of a smart account. Moreover, this endpoint allows you to fetch transactions for a given address of a smart account.

You will need two essential parameters:

* `address`
* `chain`

Once you have obtained both `address` and `chain`, you can use the code snippets below to retrieve the transactions:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript
// Import the required libraries and modules
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// Define an asynchronous function to run the application
const runApp = async () => {
  // Initialize Moralis with your API key and any other required configurations
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...other configuration options
  });

  // Define the smart account address you want to retrieve ERC-20 transfers for
  const address = "0x9b722B2aA4Cc119aCf8c95bBF5244092Be6880b9";

  // Specify the chain you want to interact with (Polygon in this case)
  const chain = EvmChain.POLYGON;

  // Use Moralis' EvmApi to get wallet token transfers for the specified address and chain
  const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
    address,
    chain,
  });

  // Log the response data to the console in JSON format
  console.log(response.toJSON());
};

// Invoke the runApp function to start the application
runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript
// Import the required libraries and modules
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

// Define an asynchronous function to run the application
const runApp = async () => {
  // Initialize Moralis with your API key and any other required configurations
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...other configuration options
  });

    // Define the smart account address you want to retrieve ERC-20 token transfers for
  const address = "0x9b722B2aA4Cc119aCf8c95bBF5244092Be6880b9";

  // Specify the chain you want to interact with (Polygon in this case)
  const chain = EvmChain.POLYGON;

  // Use Moralis' EvmApi to get wallet token transfers for the specified address and chain
  const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
    address,
    chain,
  });

  // Log the response data to the console in JSON format
  console.log(response.toJSON());
};

// Invoke the runApp function to start the application
runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python
# Import the required modules from the Moralis library
from moralis import evm_api

# Define your Moralis API key
api_key = "YOUR_API_KEY"

# Define the parameters for the API request
params = {
    "address": "0x9b722B2aA4Cc119aCf8c95bBF5244092Be6880b9",
    "chain": "polygon"
}

# Make an API request to get wallet token transfers for the specified address and chain
result = evm_api.token.get_wallet_token_transfers(
    api_key=api_key,
    params=params,
)

# Print the result
print(result)
```

</TabItem>
</Tabs>

## Step 3: Run the Script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

Code example of the JSON response:

```json
{
  "total": 126,
  "page": 0,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHgyMjYwZmFjNWU1NTQyYTc3M2FhNDRmYmNmZWRmN2MxOTNiYzJjNTk5IiwiY2hhaW4iOiJldGgiLCJhcGlLZXlJZCI6MTkwNjU5LCJsaW1pdCI6MTAwLCJ0b3BpYzMiOiI9Om51bGwiLCJ0b19ibG9jayI6IjExMTAwMDQ1IiwicGFnZSI6MSwidG90YWwiOjEyNiwib2Zmc2V0IjoxLCJ1YyI6dHJ1ZSwiaWF0IjoxNjY5NjQ2ODMzfQ.NIWg35DjoTMlaE6JaoJld24p9zBgGL56Zp8PPzQnJk4",
  "result": [
    {
      "transaction_hash": "0x1f1c8971dec959d38bcaa5606eb474d028617752240727692cd5ef21a435d847",
      "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "block_timestamp": "2022-11-19T20:01:23.000Z",
      "block_number": "16006313",
      "block_hash": "0x415f96c01f32d38046e250a357e471000c0876cc2122167056cf4c4c1113a522",
      "to_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "from_address": "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
      "value": "4489517",
      "transaction_index": 48,
      "log_index": 66
    },
    {
      "transaction_hash": "0x089786eccd4bc2e4b0bda3eaf4f8602c501bbe8aa8f839b723dcd5fafdb28fbc",
      "address": "0x01e849040c418c3b7f130351a6e4630c08a7d98e",
      "block_timestamp": "2022-11-19T14:56:35.000Z",
      "block_number": "16004796",
      "block_hash": "0x773c6065dbe90b8d74a8e77a2d8717c2f5b22c4c2be6f910971db80bd0f47911",
      "to_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "from_address": "0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801",
      "value": "3848",
      "transaction_index": 75,
      "log_index": 153
    },
    {
      "transaction_hash": "0xb63ceb48f54cf711b4f74c83f6f27c5ad82cdf2a7285afefedc5f28645a72ef3",
      "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "block_timestamp": "2022-11-18T20:56:11.000Z",
      "block_number": "15999424",
      "block_hash": "0x0b98ef7048c1398b9fc1caa394cf1e24bd860606caff4c2dd359b8cddd678b18",
      "to_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "from_address": "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
      "value": "1162013",
      "transaction_index": 41,
      "log_index": 76
    }
  ]
}
```

Congratulations! 🥳 You have successfully fetched ERC-20 transfers for a given smart account address on Polygon using the Moralis Wallet API.

## Video Tutorial: How to Get All ERC-20 Transfers by Wallet Using Next.js & Node.js

For a visual guide, you can check out our YouTube tutorial:

[Watch the Tutorial](https://www.youtube.com/watch?v=90gGk-ZXpf8)

## Get 24/7 Developer Support

Should you encounter any challenges while following this tutorial, our community engineers are here to assist you. Reach out to us on [Discord](https://moralis.io/discord) or our [Moralis forum](https://forum.moralis.io) to receive 24/7 developer support. Your success is our priority!

## API Reference

If you want to explore more details about other wallet endpoints and optional parameters, check out our [API Reference](/web3-data-api/evm/reference#wallet-api) page.

## See Also

* [Understanding Account Abstraction: How to Get Native Balances from Smart Accounts](/web3-data-api/evm/wallet-api/how-to-get-the-native-balance-of-a-smart-contract-account)
* [How to Get Transaction History for an Address of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-transactions-of-smart-contract-account)
* [How to Get ERC-20 Tokens of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-erc-20-token-of-smart-contract-account)
* [How to Get NFT Transfers of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-nft-transfers-of-smart-contract-account)
