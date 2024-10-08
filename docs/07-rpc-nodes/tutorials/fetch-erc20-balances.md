---
title: "Fetch ERC20 Balances"
slug: "/tutorials/fetching-erc20-token-balances"
sidebar_position: 0
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# Fetching ERC20 Token Balances Using ethers.js

In this tutorial, we will guide you through the process of fetching the ERC20 token balances of a given wallet using Moralis RPC Nodes and `ethers.js`. You will learn how to make an RPC call to fetch the token balances for a specific Ethereum wallet address.

By the end of this tutorial, you’ll be able to query all ERC20 token balances for any wallet address using just one RPC call.

For full API details, you can refer to the documentation of the [eth_getTokenBalances](/rpc-nodes/reference/extended-rpc/eth_getTokenBalances) method.

## Video Tutorial

Watch the full tutorial on how to fetch ERC20 balances in one RPC call here:

<iframe width="600" height="315" src="https://www.youtube.com/embed/UNp5M8hoViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Prerequisites

Before you start, make sure you have the following:

1. **Node.js** installed on your machine.
2. Basic familiarity with JavaScript and command line.
3. Access to a **Moralis Node URL**. If you don’t have one, refer to the [Setting Up RPC Nodes](./get-your-node-api-key) guide.
4. A wallet address with ERC20 tokens to query.

---

### Step 1: Install Dependencies

Start by creating a project and installing the necessary dependencies. You’ll need `ethers.js` and `dotenv` to securely handle your environment variables.

```bash
# Create a new Node.js project
mkdir erc20-balance-fetcher
cd erc20-balance-fetcher
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

### Step 3: Write the Code to Fetch ERC20 Token Balances

Next, create a new file called `fetchERC20Balances.js` in your project directory. This script will make an RPC call to retrieve all ERC20 token balances for the provided wallet address.

```javascript
// Load environment variables from the .env file
require("dotenv").config();

// Import ethers.js
const { ethers } = require("ethers");

async function getERC20TokenBalances() {
  // Initialize the provider using the Moralis RPC URL from the .env file
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.MORALIS_NODE_URL
  );

  // Prepare the request payload to fetch ERC20 token balances
  const response = await provider.send("eth_getTokenBalances", [
    {
      address: "0xcB1C1FdE09f811B294172696404e88E658659905", // Replace with the wallet address to query
      excludeSpam: true, // Optionally exclude spam tokens
      toBlock: "latest", // You can specify a block number, or use 'latest' for the most recent block
    },
  ]);

  // Log the token balances to the console
  console.log(response);
}

// Call the function to fetch ERC20 token balances
getERC20TokenBalances();
```

### Breakdown of the Code:

- provider: Connects to the Ethereum network using the Moralis RPC URL stored in the `.env` file.
- eth_getTokenBalances: This method fetches the ERC20 token balances for the given wallet address.
- address: Replace this with the wallet address for which you want to query token balances.
- excludeSpam: Set to true to ignore spam tokens.
- toBlock: You can specify a particular block or use "latest" to get the most recent data.

### Step 4: Run the Script

Once the script is set up, you can run it from the command line to fetch the ERC20 balances for the given wallet address.

```bash
node fetchERC20Balances.js
```

If everything is configured correctly, you will see the list of ERC20 tokens held by the specified wallet address, along with their balances, printed in the console.

### Conclusion

You've now learned how to make an RPC call to fetch all ERC20 token balances for a given wallet using ethers.js and Moralis. This method allows you to efficiently query token balances with a single call, which is useful when building decentralized applications (dApps) that need to display a user's token portfolio.

For full details on the [eth_getTokenBalances](/rpc-nodes/reference/extended-rpc/eth_getTokenBalances) method, check out the official API documentation.

Feel free to explore more advanced use cases by modifying the parameters or integrating this data into your app.

Happy coding with Moralis!
