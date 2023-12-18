---
title: "How to Get Transaction Hash"
slug: "../../how-to-find-transaction-hash-id-on-blockchain"
description: "Learn how to get a transaction content by a given transaction hash using Moralis API."
sidebar_label: "Get a transaction by hash"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get Transaction Hash on Blockchain

In this tutorial, you will explore how to check transaction details by hash ID using Moralis Web3 API.

Whether you're looking to check, get, or confirm a transaction hash ID, this guide provides the comprehensive insights and code examples you need. Our script, written in JavaScript, TypeScript, and Python, demonstrates finding a transaction by hash id on blockchain using Moralis' [getTransaction](/web3-data-api/evm/reference/get-transaction) endpoint.

The guide focuses on filtering these transactions to identify a particular transaction by its hash ID. This method is vital for blockchain developers needing to track or confirm specific transactions.

The article concludes by emphasizing the effectiveness and simplicity of Moralis API for blockchain queries, making it a valuable tool for accurate and quick transaction identification on the blockchain.

### Full Example Script

:::tip
If you do not have the transaction hash, then you use [getWalletTransactions](/web3-data-api/evm/how-to-get-all-transactions-of-an-address) endpoint to find transaction hash id.
:::

Below is the complete script that will serve as our basis for retrieving blockchain transaction with hash ID.

Here you'll need two parameters: `transactionHash` and `chain`.

Once you've obtained both the `transactionHash` and `chain`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
// Import the Moralis library and EvmChain module
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// Define the main function to run the application
const runApp = async () => {
  // Initialize Moralis with your API key and other configurations
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  // Specify the transaction hash to retrieve details
  const transactionHash =
    "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875";

  // Specify the blockchain chain (Ethereum in this case)
  const chain = EvmChain.ETHEREUM;

  // Fetch details of the specified transaction using Moralis API
  const response = await Moralis.EvmApi.transaction.getTransaction({
    transactionHash,
    chain,
  });

  // Log the response details to the console in JSON format
  console.log(response.toJSON());
};

// Execute the application by calling the main function
runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
// Import Moralis library and EvmChain module from the specified paths
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

// Define the main function to run the application
const runApp = async (): Promise<void> => {
  // Initialize Moralis with your API key and other configurations
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  // Specify the transaction hash to retrieve details
  const transactionHash =
    "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875";

  // Specify the blockchain chain (Ethereum in this case)
  const chain = EvmChain.ETHEREUM;

  // Fetch details of the specified transaction using Moralis API
  const response = await Moralis.EvmApi.transaction.getTransaction({
    transactionHash,
    chain,
  });

  // Log the response details to the console in JSON format
  console.log(response.toJSON());
};

// Execute the application by calling the main function
runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
# Import the necessary module from the Moralis library
from moralis import evm_api

# Specify your Moralis API key for authentication
api_key = "YOUR_API_KEY"

# Define parameters, including the transaction hash and blockchain chain (Ethereum in this case)
params = {
    "transaction_hash": "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875",
    "chain": "eth",
}

# Use Moralis API to fetch details of the specified transaction
result = evm_api.transaction.get_transaction(
    api_key=api_key,
    params=params,
)

# Print the result, which contains information about the transaction
print(result)
```

</TabItem>
</Tabs>

### Step-by-Step Explanation: How to Get and Check Transaction by Hash ID

1. **Initialize Moralis**: Start by initializing Moralis in your preferred programming language (JavaScript, TypeScript, or Python) using your unique API key.

2. **Specify Transaction Hash**: Identify the transaction you want to explore by specifying its hash ID. This alphanumeric code uniquely represents a transaction on the blockchain.

3. **Set Blockchain Chain**: Define the blockchain chain on which the transaction occurred. For instance, in Ethereum, the chain parameter would be set to "eth."

4. **Fetch Transaction Details**: Utilize Moralis API's `get_transaction` or similar endpoint to retrieve comprehensive details of the specified transaction. This may include information such as sender, receiver, amount, and timestamp.

5. **Print or Process Results**: Print the fetched results or process them as needed for your application. This step is crucial for developers integrating this functionality into their projects.

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{
  "hash": "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875",
  "nonce": "6637",
  "transaction_index": "203",
  "from_address": "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5",
  "to_address": "0x388c818ca8b9251b393131c08a736a67ccb19297",
  "value": "62754610757602656",
  "gas": "30000",
  "gas_price": "10350264493",
  "input": "0x",
  "receipt_cumulative_gas_used": "19314887",
  "receipt_gas_used": "22111",
  "receipt_contract_address": null,
  "receipt_root": null,
  "receipt_status": "1",
  "block_timestamp": "2022-11-07T08:36:11.000Z",
  "block_number": "15916991",
  "block_hash": "0xd517ab9abb4beed9efb6b74ecbabc141d8550abe11aedb715ce9d133dcb32c9b",
  "transfer_index": [15916991, 203],
  "logs": [
    {
      "log_index": "299",
      "transaction_hash": "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875",
      "transaction_index": "203",
      "transaction_value": "62754610757602656",
      "address": "0x388c818ca8b9251b393131c08a736a67ccb19297",
      "data": "0x00000000000000000000000000000000000000000000000000def2fc6a398d60",
      "topic0": "0x27f12abfe35860a9a927b465bb3d4a9c23c8428174b83f278fe45ed7b4da2662",
      "topic1": null,
      "topic2": null,
      "topic3": null,
      "block_timestamp": "2022-11-07T08:36:11.000Z",
      "block_number": "15916991",
      "block_hash": "0xd517ab9abb4beed9efb6b74ecbabc141d8550abe11aedb715ce9d133dcb32c9b",
      "transfer_index": [15916991, 203, 299]
    }
  ]
}
```

Congratulations 🥳! You have successfully retrieved blockchain transaction with hash ID using the Moralis [Wallet API](https://moralis.io/api/wallet/).

## Video Tutorial: How to Get Transaction Content By Hash ID Using Next.js & Node.js

For a visual guide, check out our YouTube tutorial:

[Watch the Tutorial](https://www.youtube.com/watch?v=AbGDqxtL6XM)

## Get 24/7 Developer Support

Should you encounter any challenges while following this tutorial, our community engineers are here to assist you. Reach out to us on [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to receive 24/7 developer support. Your success is our priority!

## API Reference

If you want to explore more details about other blockchain endpoints and optional parameters, refer to the [API Reference](/web3-data-api/evm/reference#blockchain-api).
