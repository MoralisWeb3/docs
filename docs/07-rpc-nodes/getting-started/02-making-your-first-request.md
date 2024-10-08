---
title: "Making Your First RPC Call"
slug: "/make-your-first-rpc-call"
description: "How to make your first request with the RPC Node"
sidebar_position: 1
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# Making Your First RPC Call to Fetch NFTs Using ethers.js

In this guide, you will learn how to make your first JSON-RPC call using `ethers.js` to fetch all the NFTs associated with a given wallet address. We’ll be using Moralis as the blockchain data provider to interact with the Ethereum blockchain. You will need to set up an API key and obtain your RPC node URL from Moralis.

## Prerequisites

Before you begin, make sure you have the following:

1. **Node.js** installed on your machine.
2. Basic familiarity with JavaScript and the command line.
3. A wallet address with NFTs that you want to query (e.g., an Ethereum-based wallet).
4. Access to a **Moralis Node URL**. If you haven't created one yet, refer to the [Setting Up RPC Nodes](./get-your-node-api-key) guide.

---

### Step 1: Install Dependencies

To get started, you’ll need to install the required packages in your project. If you don’t already have a project, you can create one:

```bash
# Create a new Node.js project
mkdir nft-fetcher
cd nft-fetcher
npm init -y

# Install ethers.js and dotenv for managing environment variables
npm install ethers dotenv
```

### Step 2: Set Up Environment Variables

You’ll need to store your Moralis Node URL in an environment file for security. In the root directory of your project, create a `.env file` and add your Moralis Node URL as follows:

```bash
MORALIS_NODE_URL=YOUR_URL_OBTAINED_FROM_DASHBOARD
```

### Step 3: Write the Code to Fetch NFTs

In your project directory, create a new file called `fetchNFTs.js`. This script will use ethers.js to make the RPC call and retrieve all the NFTs that belong to a specific wallet address.

```javascript
// Load environment variables
require("dotenv").config();

// Import ethers.js
const { ethers } = require("ethers");

async function getAllNFTs() {
  // Initialize the provider using the Moralis RPC URL from the .env file
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.MORALIS_NODE_URL
  );

  // Send the eth_getNFTBalances request with the wallet address
  const response = await provider.send("eth_getNFTBalances", [
    {
      address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", // Replace this with the wallet address you want to query
      chain: "eth", // Specify the chain, e.g., Ethereum Mainnet
    },
  ]);

  // Log the response to the console
  console.log(response);
}

// Call the function to fetch NFTs
getAllNFTs();
```

### Step 4: Run the Script

Once the code is set up, you can run the script to fetch NFTs for the given wallet address.

```bash
node fetchNFTs.js
```

### Conclusion

Congratulations! You have successfully made your first JSON-RPC call to fetch NFTs for a given wallet address using ethers.js and Moralis. You can expand on this by querying other blockchain data or integrating the results into a decentralized application (dApp).
