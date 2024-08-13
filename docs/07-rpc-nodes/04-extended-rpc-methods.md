---
title: "Extended RPC Methods"
slug: "/extended-rpc-methods"
sidebar_label: "Extended RPC Methods"
sidebar_position: 4
sidebar_class_name: "sidebar-overview"
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# Extended RPC Methods Overview

Moralis offers a powerful suite of extended RPC methods to enhance your blockchain development experience. These methods provide deep insights and functionalities beyond standard RPC calls, making it easier for developers to interact with and analyze blockchain data. Below, you’ll find an overview of the available extended RPC methods, what they do, and how they can be utilized.

## What are Extended RPC Methods?

Extended RPC methods are custom API calls provided by Moralis that allow developers to perform advanced queries and retrieve additional data about transactions, tokens, and NFTs on various blockchains. These methods build upon traditional RPC calls by offering more specific and detailed information, making blockchain data more accessible and useful for your applications.

### Available Methods

Here is a summary of the extended RPC methods available through Moralis:

| Custom Method                | Description                                | API Mapping                   | CUs |
| ---------------------------- | ------------------------------------------ | ----------------------------- | --- |
| `eth_getTransactions`        | Get native transactions by wallet address. | `getWalletTransactions`       | 15  |
| `eth_getDecodedTransactions` | Get wallet history by wallet address.      | `getWalletHistory`            | 30  |
| `eth_getTokenBalances`       | Get ERC20 token balances by wallet.        | `getWalletTokenBalancesPrice` | 25  |
| `eth_getTokenPrice`          | Get ERC20 token price by token address.    | `getTokenPrice`               | 25  |
| `eth_getTokenMetadata`       | Get ERC20 token metadata by token address. | `getTokenMetadata`            | 8   |
| `eth_getNFTBalances`         | Get NFTs by wallet address.                | `getWalletNFTs`               | 20  |
| `eth_getNFTCollections`      | Get NFT collections by wallet address.     | `getWalletNFTCollections`     | 20  |

### Pricing

Pricing for the extended RPC methods is based on Consumption Units (CUs), which reflect the usage of these methods. The CUs are categorized as "Node CUs," meaning they contribute towards the throughput of the customer's Node CU/s. For detailed pricing information, refer to the CU table above.

Moralis provides these extended RPC methods to streamline blockchain development and give developers powerful tools to build and manage blockchain-based applications with ease.
