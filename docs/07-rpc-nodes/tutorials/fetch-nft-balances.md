---
title: "Fetch NFT Balances"
slug: "/tutorials/fetching-nft-balances"
sidebar_position: 1
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# Fetching NFT Balances Using ethers.js

In this tutorial, you will learn how to fetch all NFTs held by a specific wallet address using Moralis RPC Nodes and `ethers.js`. We’ll use the `eth_getNFTBalances` method to retrieve the list of NFTs held by a particular Ethereum wallet.

For full API details, you can refer to the documentation of the [eth_getNFTBalances](/rpc-nodes/reference/extended-rpc/eth_getNFTBalances) method.

## Video Tutorial

Watch the full tutorial on how to fetch NFT balances here:

<iframe width="600" height="315" src="https://www.youtube.com/embed/TplvuImqEVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Prerequisites

Before you start, make sure you have the following:

1. **Node.js** installed on your machine.
2. Basic familiarity with JavaScript and command line.
3. Access to a **Moralis Node URL**. If you don’t have one, refer to the [Setting Up RPC Nodes](./get-your-node-api-key) guide.
4. A wallet address with NFTs to query.

---

### Step 1: Install Dependencies

Start by creating a project and installing the required dependencies. You’ll need `ethers.js` and `dotenv` to securely handle your environment variables.

```bash
# Create a new Node.js project
mkdir nft-balance-fetcher
cd nft-balance-fetcher
npm init -y

# Install ethers.js and dotenv
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

### Breakdown of the Code:

- provider: Connects to the Ethereum network using the Moralis RPC URL stored in the `.env` file.
- eth_getNFTBalances: This method fetches all NFTs held by the given wallet address.
- address: Replace this with the wallet address for which you want to query NFTs.
- chain: Specify the blockchain network (in this case, "eth" for Ethereum).

### Step 4: Run the Script

Once the code is set up, you can run the script to fetch NFTs for the given wallet address.

```bash
node fetchNFTs.js
```

If everything is set up correctly, you will see a list of NFTs, including details such as contract addresses, token IDs, and metadata, printed in the console.

### Conclusion

You’ve now learned how to make an RPC call to fetch all NFTs held by a given wallet using ethers.js and Moralis. This method allows you to efficiently retrieve NFT data in one request, which is essential for dApps that display a user’s NFT portfolio.

For full API details, you can refer to the documentation of the [eth_getNFTBalances](/rpc-nodes/reference/extended-rpc/eth_getNFTBalances) method.

Happy coding with Moralis!
