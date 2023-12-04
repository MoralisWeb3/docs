---
title: "How to Get Transaction History for an Address of a Smart Account"
slug: "../how-to-get-transactions-of-smart-contract-account"
description: "Understanding account abstraction and how to get all transactions from a smart contract account using the Moralis Wallet API."
sidebar_label: Get transactions of a smart contract account
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

:::tip
As an example of account types, you can read the [Ethereum Accounts](https://ethereum.org/en/developers/docs/accounts/#types-of-account) article.
:::

The Moralis [Wallet API](https://moralis.io/api/wallet/) streamlines the retrieval of transaction history, making it easier for developers to access and use transaction data for various purposes.

**Why Retrieve Address Transaction History?**

1. **Display Full Transaction History:** Provide users with a complete view of their blockchain transactions for wallet and financial tracking.

2. **Filter Smart Contract Interactions:** Easily review transactions related to smart contract interactions for auditing and analysis.

3. **Analyze Profit and Loss:** Calculate gains and losses by accessing historical transaction data for investment evaluation.

4. **Security Auditing:** Conduct security audits and vulnerability assessments on smart contracts and blockchain applications.

5. **Dispute Resolution:** Resolve disputes and investigate discrepancies using an objective transaction record.

Learn the most efficient method for obtaining and getting a complete transaction history for smart contract accounts. It includes external, internal, token, ERC-20, ERC-721, and ERC-1155 token transfers, all in a single API request.

This step-by-step tutorial shows how to retrieve transactions from a smart account, simplifying the process and offering code examples in multiple programming languages.

:::tip
This tutorial uses Moralis' [`getWalletTransactions`](/web3-data-api/evm/reference/get-wallet-transactions) RPC method.
:::

## Step 1: Set Up Moralis

Read our article, [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key), and make sure to finish all the steps. Only after that can you go ahead to complete this guide.

## Step 2: Method to Get and Retrieve Transactions for a Given Smart Account Address

You can use the [`getWalletTransactions`](/web3-data-api/evm/reference/get-wallet-transactions) API endpoint to get all transactions for an address of a smart account. This endpoint allows you to fetch transactions for a given address of a smart account.

You will need two essential parameters:

* `address`
* `chain`

Once you have obtained both `address` and `chain`, you can use the code snippets below to retrieve the transactions:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript
// Import Moralis and EvmChain from required libraries
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// Define the main function to retrieve transactions
const runApp = async () => {
  // Initialize Moralis with your API key and other configurations
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  // Define the smart account address you want to retrieve transactions for
  const address = "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5";

  // Specify the Ethereum chain (e.g., ETHEREUM) for the transactions
  const chain = EvmChain.ETHEREUM;

  // Use Moralis.EvmApi.transaction.getWalletTransactions to fetch transactions
  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
  });

  // Log the JSON response
  console.log(response.toJSON());
};

// Run the main function to retrieve transactions
runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript
// Import Moralis and EvmChain from required libraries
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

// Define the main function to retrieve transactions
const runApp = async () => {
  // Initialize Moralis with your API key and other configurations
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  // Define the smart account address you want to retrieve transactions for
  const address = "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5";

  // Specify the Ethereum chain (e.g., ETHEREUM) for the transactions
  const chain = EvmChain.ETHEREUM;

  // Use Moralis.EvmApi.transaction.getWalletTransactions to fetch transactions
  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
  });

  // Log the JSON response
  console.log(response.toJSON());
};

// Run the main function to retrieve transactions
runApp();

```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python
# Import the required module from Moralis
from moralis import evm_api

# Define your API key
api_key = "YOUR_API_KEY"

# Define parameters for retrieving transactions
params = {
    "address": "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5",
    "chain": "eth",
}

# Use evm_api.transaction.get_wallet_transactions to fetch transactions
result = evm_api.transaction.get_wallet_transactions(
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
  "total": "2000",
  "page": "2",
  "page_size": "100",
  "result": [
    {
      "hash": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "nonce": 326595425,
      "transaction_index": 25,
      "from_address": "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
      "to_address": "0xa71db868318f0a0bae9411347cd4a6fa23d8d4ef",
      "value": 650000000000000000,
      "gas": 6721975,
      "gas_price": 20000000000,
      "input": "string",
      "receipt_cumulative_gas_used": 1340925,
      "receipt_gas_used": 1340925,
      "receipt_contract_address": "0x1d6a4cf64b52f6c73f201839aded7379ce58059c",
      "receipt_root": "string",
      "receipt_status": 1,
      "block_timestamp": "2021-04-02T10:07:54.000Z",
      "block_number": 12526958,
      "block_hash": "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86"
    }
  ]
}
```

Congratulations! 🥳 You have successfully fetched transactions for a given smart account address on Ethereum using the Moralis Wallet API.

## Video Tutorial: Get All Transactions for Any Wallet

For a visual guide, you can check out our YouTube tutorial:

[Watch the Tutorial](https://www.youtube.com/watch?v=kpxgYuC4uyA)

## Get 24/7 Developer Support

Should you encounter any challenges while following this tutorial, our community engineers are here to assist you. Reach out to us on [Discord](https://moralis.io/discord) or our [Moralis forum](https://forum.moralis.io) to receive 24/7 developer support. Your success is our priority!

## API Reference

If you want to explore more details about other wallet endpoints and optional parameters, check out our [API Reference](/web3-data-api/evm/reference#wallet-api) page.

## See Also

* [Understanding Account Abstraction: How to Get Native Balances from Smart Accounts](/web3-data-api/evm/wallet-api/how-to-get-the-native-balance-of-a-smart-contract-account)
* [How to Get ERC-20 Tokens of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-erc-20-token-of-smart-contract-account)
* [How to Get NFT Transfers of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-nft-transfers-of-smart-contract-account)
* [How to Get ERC-20 Transfers of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-erc-20-transfers-of-smart-contract-account)
