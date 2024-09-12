---
title: "Overview"
slug: "/rpc-nodes"
sidebar_position: 0
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# RPC Nodes Overview

Welcome to the Moralis RPC Nodes documentation! This section will guide you through everything you need to know to effectively use Moralis RPC Nodes for accessing blockchain data across various supported networks. Our RPC nodes provide a powerful and reliable gateway for interacting with blockchain networks using standard JSON-RPC calls.

---

## What Are RPC Nodes?

RPC (Remote Procedure Call) nodes allow developers to interact with blockchain networks without the need to run their own full node. By sending **JSON-RPC** requests to Moralis RPC Nodes, you can:

- Query blockchain data (e.g., block and transaction information).
- Interact with smart contracts.
- Fetch NFT and token balances.
- Send transactions and monitor on-chain events.

Moralis simplifies this process by providing reliable, scalable access to RPC nodes across major blockchain networks.

---

## Key Features of Moralis RPC Nodes

Here are some key benefits of using Moralis RPC Nodes:

- **Multi-Chain Support**: Access RPC nodes for Ethereum, Binance Smart Chain, Polygon, Avalanche, and other popular blockchains.
- **High Performance**: Low-latency, reliable infrastructure for handling large amounts of traffic.
- **JSON-RPC Standard**: Fully compliant with the JSON-RPC 2.0 specification, ensuring compatibility with existing Ethereum and EVM-compatible blockchain tools.
- **Extended RPC Methods**: In addition to standard methods, Moralis offers **extended RPC methods** for advanced functionalities like fetching token balances, NFTs, and transaction history.

---

## Getting Started

Ready to start using Moralis RPC Nodes? Here’s what you need to do:

1. **Create a Moralis Account**: [Sign up](https://admin.moralis.io/) for free and access your RPC nodes.
2. **Set Up Your Node**: Visit our [Setting Up RPC Nodes](./get-your-node-api-key) guide to create and configure your RPC node.
3. **Make Your First RPC Call**: Once you have your node set up, follow our [tutorial](./make-your-first-rpc-call) to make your first JSON-RPC call using `ethers.js`.

---

## Supported Networks

Moralis supports a wide variety of blockchain networks, including:

- **Ethereum** (Mainnet and Testnets)
- **Binance Smart Chain**
- **Polygon**
- **Avalanche**
- **Fantom**
- **Arbitrum**
- **Optimism**

For a complete list of supported networks, check out the [Supported Networks](./supported-networks) page.

---

## JSON-RPC and Extended RPC Methods

Moralis offers full support for the standard **JSON-RPC** 2.0 specification, making it easy to integrate with any existing Ethereum or EVM-compatible tools.

In addition to standard JSON-RPC methods, Moralis provides **extended RPC methods** that allow for more advanced queries, such as:

- Fetching token balances.
- Fetching NFT holdings.
- Fetching transaction history.

To learn more about the available methods, visit the [Standard vs Extended RPC Methods](./rpc-methods) page.

---

## Rate Limiting and Usage Limits

Moralis enforces rate limits at the **account level** to ensure fair usage across all users. Each account has a set number of allowed requests per minute, based on your plan. For more information on rate limits and how to optimize your usage, visit our [FAQ](./resources/rpc-faqs) page.

---

## Next Steps

- [Setting Up RPC Nodes](./get-your-node-api-key): Learn how to set up your first RPC node.
- [Fetching ERC20 Balances](./tutorials/fetching-erc20-token-balances): Step-by-step guide on how to fetch token balances.
- [Fetching Wallet Transactions](./tutorials/fetching-wallet-transactions): Guide for retrieving all transactions associated with a wallet.

---

## Need Help?

If you have any questions or need further assistance, check out our [FAQ](./resources/rpc-faqs) or reach out to our support team.

---

Happy building with Moralis RPC Nodes!
