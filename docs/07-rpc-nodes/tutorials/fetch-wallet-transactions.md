---
title: "Fetch Wallet Transactions"
slug: "/tutorials/fetching-wallet-transactions"
sidebar_position: 2
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# Fetching All Wallet Transactions Using ethers.js

In this tutorial, we’ll guide you through fetching all transactions associated with a specific wallet using Moralis RPC Nodes and `ethers.js`. You will learn how to make an RPC call to retrieve the transaction history for a wallet on the Ethereum blockchain.

By the end of this tutorial, you'll be able to query all wallet transactions using a single RPC call.

For full API details, you can refer to the documentation of the [eth_getTransactions](/rpc-nodes/reference/extended-rpc/eth_getTransactions) method.

## Video Tutorial

Watch the full tutorial on fetching wallet transactions here:

<iframe width="600" height="315" src="https://www.youtube.com/embed/HJMI8R-aEVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Prerequisites

Before you start, make sure you have the following:

1. **Node.js** installed on your machine.
2. Basic familiarity with JavaScript and command line.
3. Access to a **Moralis Node URL**. If you don’t have one, refer to the [Setting Up RPC Nodes](./get-your-node-api-key) guide.
4. A wallet address with transactions you want to query.

---

### Step 1: Install Dependencies

Start by creating a project and installing the necessary dependencies. You’ll need `ethers.js` and `dotenv` to securely handle your environment variables.

```bash
# Create a new Node.js project
mkdir wallet-transaction-fetcher
cd wallet-transaction-fetcher
npm init -y

# Install ethers.js and dotenv
npm install ethers dotenv
```

### Step 2: Set Up Environment Variables

Create a `.env` file in the root directory of your project to store your Moralis Node URL. This is essential for connecting to the Ethereum network.

```bash
MORALIS_NODE_URL=YOUR_NODE_URL
# Replace YOUR_NODE_URL with the actual node URL from your Moralis dashboard.
```

### Step 3: Write the Code to Fetch Wallet Transactions

Next, create a new file called `fetchTransactions.js` in your project directory. This script will make an RPC call to retrieve all transactions for the provided wallet address.

```javascript
// Load environment variables from the .env file
require("dotenv").config();

// Import ethers.js
const { ethers } = require("ethers");

async function getWalletTransactions() {
  // Initialize the provider using the Moralis RPC URL from the .env file
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.MORALIS_NODE_URL
  );

  // Send the eth_getTransactions request with the wallet address
  const response = await provider.send("eth_getTransactions", [
    {
      address: "0xE6D5514b8De7ef9E5F5c4cc2E8cA0207129DEB65", // Replace with the wallet address to query
    },
  ]);

  // Log the transaction details to the console
  console.log(response);
}

// Call the function to fetch wallet transactions
getWalletTransactions();
```

### Breakdown of the Code:

- provider: Connects to the Ethereum network using the Moralis RPC URL stored in the `.env` file.
- eth_getTransactions: This method fetches all transactions for the given wallet address.
- address: Replace this with the wallet address for which you want to retrieve transactions.

### Step 4: Run the Script

Once the script is set up, you can run it from the command line to fetch the transaction history for the provided wallet address.

```bash
node fetchTransactions.js
```

If everything is configured correctly, you will see the list of transactions associated with the specified wallet address printed in the console.

### Example Response

Here is an example of the response that you might see in the console:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "cursor": null,
    "page_size": 100,
    "page": 0,
    "result": [
      {
        "hash": "0x18974227cd70d2806fc9ab0b4a5702fb0e0f301d9e70fa1a720accf0498b92d2",
        "nonce": "80",
        "transaction_index": "61",
        "from_address": "0xe6d5514b8de7ef9e5f5c4cc2e8ca0207129deb65",
        "to_address": "0xc026395860db2d07ee33e05fe50ed7bd583189c7",
        "value": "21041290431188",
        "gas": "346309",
        "gas_price": "1785758179",
        "block_timestamp": "2024-09-03T19:37:59.000Z",
        "block_number": "20672192",
        "transaction_fee": "0.000604293424740884"
      }
    ]
  }
}
```

### Conclusion

Congratulations! You’ve successfully made an RPC call to fetch all transactions associated with a given wallet using ethers.js and Moralis. You can extend this by integrating the transaction data into your decentralized application (dApp) or using it for analytical purposes.

For full API details, you can refer to the documentation of the [eth_getTransactions](/rpc-nodes/reference/extended-rpc/eth_getTransactions) method.

Happy coding with Moralis!
