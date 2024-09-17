---
title: "How to build a Revoke.cash clone using Moralis"
slug: "../how-to-build-revoke-cash-clone"
description: "Learn how to build a Revoke.cash clone using the Moralis Token Approvals API in just a few lines of code."
sidebar_label: "Build a Revoke.cash Clone"
sidebar_position: 0
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

## Watch the Full Video Tutorial

For a complete walkthrough on building a `revoke.cash` clone, check out the following video:

[![Watch the video](https://img.youtube.com/vi/0L-NspOuiHU/0.jpg)](https://youtu.be/0L-NspOuiHU)

This video covers the entire process in detail, from setting up Moralis to building a fully functional Revoke.cash clone. You'll learn how to fetch token approvals, display them in a user interface, and revoke approvals using the Moralis API and the `approve` function on token contracts.

## What is Revoke.cash?

Revoke.cash is a service that allows users to review and revoke token approvals that they have given to third-party applications. In decentralized finance (DeFi), when interacting with smart contracts, users often give permissions to spend tokens on their behalf. If these permissions are not revoked, it could pose a security risk.

This tutorial will guide you through building a `revoke.cash` clone using Moralis' [Token Approvals API](/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals). Moralis provides a simple API that allows you to fetch the entire token approval data for a wallet address in one API call.

Follow along to learn how to easily fetch token approvals for a given address using Moralis, and how to implement the core features of a Revoke.cash clone.

## Step 1: Setup Moralis

To begin, you will need to set up Moralis. If you haven't done this already, follow the [Getting Started with Moralis API](/web3-data-api/evm/get-your-api-key) guide to get your API key and configure the Moralis SDK.

Once you're set up with the API key, you can move on to the next step where you'll call the Token Approvals API.

## Step 2: Call the Token Approvals API

Moralis provides an easy-to-use endpoint for getting token approvals for a given wallet address. The API call will return a list of all token approvals across various chains. You can see the full documentation for the endpoint [here](/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals).

### Example JavaScript Code

Below is an example of how to fetch token approvals using the Moralis API in JavaScript:

```javascript
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
  });

  const address = "0xYourWalletAddress";

  // Fetching token approvals across multiple chains
  const response = await Moralis.EvmApi.wallets.getWalletApprovals({
    address,
    chain: EvmChain.ETHEREUM,
  });

  console.log(response.toJSON());
};

runApp();
```

In the example above, the getWalletTokenApprovals API call is fetching the token approvals for the provided wallet address on the Ethereum network. You can expand this to fetch approvals on other chains like BSC, Polygon, and more by adjusting the chain parameter.

### Key API Features

- Fetch all token approvals in one API call: Moralis lets you get a comprehensive view of all token approvals for a given wallet in a single API call.
- Support for multiple chains: Use Moralis to fetch token approvals across Ethereum, BSC, Polygon, and other chains.
- Fast and efficient: With just a few lines of code, you can retrieve all token approvals for an address, saving time and effort compared to manually querying multiple smart contracts.

### Example Response

```json
{
  "page": 2,
  "page_size": 100,
  "cursor": "",
  "result": [
    {
      "block_number": "12526958",
      "block_timestamp": "2021-04-02T10:07:54.000Z",
      "transaction_hash": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
      "value": "8409770570506626",
      "value_formatted": "0.1",
      "token": {
        "address": "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c",
        "address_label": "",
        "name": "Tether USD",
        "symbol": "USDT",
        "logo": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
        "possible_spam": "",
        "verified_contract": "",
        "current_balance": "1000000000000000",
        "current_balance_formatted": "0.1",
        "usd_price": "1000000000000000",
        "usd_at_risk": "1000000000000000"
      },
      "spender": {
        "address": "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c",
        "address_label": "Binance 1",
        "entity": "Opensea",
        "entity_logo": "https://opensea.io/favicon.ico"
      }
    }
  ]
}
```

The response provides all the details about token approvals, including the spender address, approved value, token symbol, and USD value at risk.

### Step 3: Building the Revoke Cash Clone

The next step is to build a simple interface that allows users to view their token approvals and revoke them if necessary.

1. Create a simple user interface: Display the token approvals in a list or table format. Each row should show the token symbol, spender address, approved amount, and a button to revoke the approval.
2. Call the approve function: To revoke approval, call the approve function on the ERC20 token contract, setting the spender's allowance to 0.

Here's a high-level overview of how the revocation process works:

```javascript
const { ethers } = require("ethers");

const revokeApproval = async (tokenAddress, spenderAddress) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const tokenContract = new ethers.Contract(
    tokenAddress,
    [
      "function approve(address spender, uint256 value) external returns (bool)",
    ],
    signer
  );

  await tokenContract.approve(spenderAddress, 0);
  alert("Approval revoked successfully!");
};
```

This function connects to MetaMask and calls the approve function on the token contract to set the spender's allowance to 0, effectively revoking their access.

## Summary

In this tutorial, you learned how to build a `revoke.cash` clone using Moralis' Token Approvals API. We covered how to:

1. **Set up Moralis**: You began by setting up Moralis to get your API key and connect to the API.
2. **Fetch token approvals with one API call**: You used the Moralis Token Approvals API to fetch all token approvals for a given wallet address in one API call.
3. **Revoke token approvals**: You implemented the logic to revoke token approvals by calling the `approve` function on the token contract.
4. **Build a simple user interface**: You created a basic interface to display token approvals and provide users with the option to revoke approvals.

By following these steps, you now have a fully functional clone of Revoke.cash that leverages Moralis' Web3 API for fetching token approvals across multiple chains.

### Why Moralis?

Moralis simplifies the process of interacting with token approvals by providing all the necessary data in a single API call. With Moralis, you can retrieve the complete list of token approvals for any wallet, across multiple chains, without needing to interact directly with smart contracts or blockchain nodes.

- **Multi-chain support**: Fetch token approvals across Ethereum, BSC, Polygon, and more.
- **One API call**: Get all the token approvals in one API call, making it faster and more efficient.
- **Easy integration**: Moralis provides SDKs for JavaScript, TypeScript, and Python, making it easy to integrate into any tech stack.

Get started with Moralis today and take advantage of its powerful Web3 API features!

## API Reference

For more information on the Token Approvals API, check out the official documentation:

- [Token Approvals API](/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals)

The documentation provides in-depth details on all available parameters, response formats, and chain support for the API.

---

Happy building! 🚀
