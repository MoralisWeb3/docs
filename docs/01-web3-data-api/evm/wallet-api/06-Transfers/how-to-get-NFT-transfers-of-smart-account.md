---
title: "How to Get NFT transfers of a Smart Account"
slug: "../how-to-get-nft-transfers-of-smart-contract-account"
description: "Learn how to query and get NFT transfers in smart contract using the Moralis Wallet API."
sidebar_label: Get NFT transfers of a smart contract account
---

:::tip
As an example of account types, you can read the [Ethereum Accounts](https://ethereum.org/en/developers/docs/accounts/#types-of-account) article.
:::

Gaining access to the historical transfer data of a Non-Fungible Token (NFT) opens up a world of possibilities for developers and enthusiasts alike. This data treasure trove provides a comprehensive and transparent record of an NFT's journey through various smart contracts, showcasing crucial information such as previous owners, sale prices, and the exact moments of transfer. [Wallet API](https://moralis.io/api/wallet/) offers a convenient solution to retrieve all the transfers of NFT efficiently.

This step-by-step tutorial shows how to track, retrieve, and query NFT transfers in a smart account using the account address and the token contract, simplifying the process and offering code examples in multiple programming languages.

:::tip
This tutorial uses Moralis' [`getWalletNFTTransfers`](/web3-data-api/evm/reference/get-wallet-nft-transfers) RPC method.
:::

## Step 1: Set Up Moralis

Read our article, [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key), and make sure to finish all the steps. Only after that can you go ahead to complete this guide.

## Step 2: Method to Get and Retrieve NFT transfers for a Given Smart Account Address

To transfer an NFT to another user, the current owner initiates the transfer process. This typically involves interacting with the NFT smart contract and specifying the recipient's wallet address. The transfer request is then broadcast to the blockchain network.

You can use the [`getWalletNFTTransfers`](/web3-data-api/evm/reference/get-wallet-nft-transfers) API endpoint to get all transactions for an address of a smart account. This endpoint allows you to fetch transactions for a given address of a smart account.

You will need two essential parameters:

* `address`
* `chain`

Once you have obtained both `address` and `chain`, you can use the code snippets below to retrieve the transactions:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript
// Import necessary libraries and modules
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// Define an asynchronous function to run the application
const runApp = async () => {
  // Initialize Moralis with your API key and configuration
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...other configuration options
  });

  // Define the Ethereum address you want to query NFT transfers for
  const address = "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5";

  // Specify the Ethereum chain (in this case, ETHEREUM)
  const chain = EvmChain.ETHEREUM;

  // Retrieve NFT transfer data using Moralis's EvmApi
  const response = await Moralis.EvmApi.nft.getWalletNFTTransfers({
    address,
    chain,
  });

  // Output the JSON response to the console
  console.log(response.toJSON());
};

// Execute the runApp function
runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript
// Import necessary libraries and modules
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

// Define an asynchronous function to run the application
const runApp = async () => {
  // Initialize Moralis with your API key and configuration
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...other configuration options
  });

  // Define the Ethereum address you want to query NFT transfers for
  const address = "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5";

  // Specify the Ethereum chain (in this case, ETHEREUM)
  const chain = EvmChain.ETHEREUM;

  // Retrieve NFT transfer data using Moralis's EvmApi
  const response = await Moralis.EvmApi.nft.getWalletNFTTransfers({
    address,
    chain,
  });

  // Output the JSON response to the console
  console.log(response.toJSON());
};

// Execute the runApp function
runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python
# Import the necessary module from the Moralis library
from moralis import evm_api

# Define your API key
api_key = "YOUR_API_KEY"

# Define the parameters for the NFT transfer query
params = {
    "address": "0x350845DD3f03F1355233a3A7CEBC24b5aAD05eC5",
    "chain": "eth"
}

# Use Moralis's EvmApi to retrieve NFT transfer data
result = evm_api.nft.get_wallet_nft_transfers(
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
  "total": null,
  "page": 0,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0IjoxMDAsImRpc2FibGVfdG90YWwiOnRydWUsIndoZXJlIjp7fSwiZnJvbV9hZGRyZXNzIjoiMHhkOGRhNmJmMjY5NjRhZjlkN2VlZDllMDNlNTM0MTVkMzdhYTk2MDQ1IiwidG9fYWRkcmVzcyI6IjB4ZDhkYTZiZjI2OTY0YWY5ZDdlZWQ5ZTAzZTUzNDE1ZDM3YWE5NjA0NSIsInBhZ2UiOjEsImtleSI6IjE3NDMzNDI5LjUzLjEzMy4wIiwidG90YWwiOm51bGwsImlhdCI6MTY4OTc1ODUzNH0.MIBO5T05EbJruMe_ywWXEs99WJZ4jabI5IciWQugpYE",
  "result": [
    {
      "block_number": "17715655",
      "block_timestamp": "2023-07-17T21:27:59.000Z",
      "block_hash": "0x58f8652ecb7025849a740fe0d6d270c61f9d0d59b41ab6460f4d9d6bb292b80d",
      "transaction_hash": "0xf5e701f9f16f66ec8cdd3fa9f5c52b15410188392a0ffc128777bb89b2c73243",
      "transaction_index": 80,
      "log_index": 225,
      "value": "0",
      "contract_type": "ERC1155",
      "transaction_type": "Single",
      "token_address": "0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401",
      "token_id": "32861001645432232115677216693187330961962340035243999304845689030250465478890",
      "from_address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      "from_address_label": null,
      "to_address": "0xea97bb00daa1880e0a575b38e723066a398595ea",
      "to_address_label": null,
      "amount": "1",
      "verified": 1,
      "operator": "0x11be6670e94c6862dcd92bd4c27753f4df50890d",
      "possible_spam": false,
      "verified_collection": true
    },
    // ....
  ]
}
```

Congratulations! 🥳 You have successfully fetched ERC-20 transfers for a given smart account address on Ethereum using the Moralis Wallet API.

## Video Tutorial: Get All NFT Transfers by a Contract Address

For a visual guide, you can check out our YouTube tutorial:

[Watch the Tutorial](https://www.youtube.com/shorts/MrmYDqMzcf0)

## Get 24/7 Developer Support

Should you encounter any challenges while following this tutorial, our community engineers are here to assist you. Reach out to us on [Discord](https://moralis.io/discord) or our [Moralis forum](https://forum.moralis.io) to receive 24/7 developer support. Your success is our priority!

## API Reference

If you want to explore more details about other wallet endpoints and optional parameters, check out our [API Reference](/web3-data-api/evm/reference#wallet-api) page.

## See Also

* [Understanding Account Abstraction: How to Get Native Balances from Smart Accounts](/web3-data-api/evm/wallet-api/how-to-get-the-native-balance-of-a-smart-contract-account)
* [How to Get Transaction History for an Address of a Smart Account](/web3-data-api/evm/wallet-api/how-to-get-transactions-of-smart-contract-account)
* [Get All NFT Transfers – How to Get All NFT Transfers for Any Wallet](https://moralis.io/get-all-nft-transfers-how-to-get-all-nft-transfers-for-any-wallet/)
