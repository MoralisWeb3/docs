---
title: "RPC Node Compute Units"
slug: "/rpc-nodes/reference/compute-units-cu"
sidebar_label: "Compute Units (CU)"
description: "Learn more about what Compute Units are and how they affect your pricing."
sidebar_position: 0
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# RPC Node Compute Units (CU)

All [Moralis plans](https://moralis.io/pricing) come with generous monthly limits on the number of requests you can make. The specific number of included requests depends on the plan you choose. Please check the [pricing page](https://moralis.io/pricing) for details on the different plans.

Some API requests are more computationally expensive than others. To ensure fair usage and pricing, heavier requests are assigned higher **Compute Unit (CU) weights**, meaning you only pay for what you use.

---

## What is a Compute Unit (CU)?

A **Compute Unit (CU)** is a measure of computational load assigned to different API requests. Each request is assigned a **CU Weight** and an optional **Archive CU Weight** (if you're querying historical data or archive nodes). The weight of the request will be deducted from your total available CUs.

---

## CU Pricing Overview

Each RPC method has a specific **CU Weight** that reflects the computational cost of the request. Heavier operations consume more CUs, and this affects the total number of requests you can make within your plan. Archive requests (queries made to archive nodes) are often more expensive, and thus, have a higher **Archive CU Weight**.

Here’s a detailed breakdown of the CU pricing for different standard RPC methods:

| RPC Method                                | CU Weight | Archive CU Weight (if applicable) |
| ----------------------------------------- | --------- | --------------------------------- |
| `eth_blockNumber`                         | 3         | 3                                 |
| `eth_call`                                | 3         | 12                                |
| `eth_chainId`                             | 3         | 3                                 |
| `eth_createAccessList`                    | 3         | 3                                 |
| `eth_estimateGas`                         | 5         | 5                                 |
| `eth_feeHistory`                          | 3         | 3                                 |
| `eth_gasPrice`                            | 3         | 3                                 |
| `eth_getBalance`                          | 3         | 12                                |
| `eth_getBlockByHash`                      | 12        | 12                                |
| `eth_getBlockByNumber`                    | 3         | 12                                |
| `eth_getBlockTransactionCountByHash`      | 12        | 12                                |
| `eth_getBlockTransactionCountByNumber`    | 3         | 12                                |
| `eth_getBlockReceipts`                    | 3         | 12                                |
| `eth_getCode`                             | 3         | 12                                |
| `eth_getLogs`                             | 12        | 12                                |
| `eth_getProof`                            | 3         | 12                                |
| `eth_getStorageAt`                        | 3         | 12                                |
| `eth_getTransactionByHash`                | 12        | 12                                |
| `eth_getTransactionByBlockHashAndIndex`   | 12        | 12                                |
| `eth_getTransactionByBlockNumberAndIndex` | 3         | 12                                |
| `eth_getTransactionCount`                 | 2         | 8                                 |
| `eth_getTransactionReceipt`               | 8         | 8                                 |
| `eth_getUncleByBlockHashAndIndex`         | 8         | 8                                 |
| `eth_getUncleByBlockNumberAndIndex`       | 2         | 8                                 |
| `eth_getUncleCountByBlockHash`            | 8         | 8                                 |
| `eth_getUncleCountByBlockNumber`          | 2         | 8                                 |
| `eth_maxPriorityFeePerGas`                | 2         | 2                                 |
| `eth_sendRawTransaction`                  | 3         | 3                                 |

---

## Extended RPC Methods and Compute Units

Moralis also provides **Extended RPC Methods** that offer more advanced data retrieval options. These methods are more computationally intensive, and therefore have higher CU weights associated with them. Below is a list of the available **Extended RPC Methods** and their corresponding CU weights:

| Custom Method                | Description                                | API Mapping                   | CU Weight |
| ---------------------------- | ------------------------------------------ | ----------------------------- | --------- |
| `eth_getTransactions`        | Get native transactions by wallet address. | `getWalletTransactions`       | 15        |
| `eth_getDecodedTransactions` | Get wallet history by wallet address.      | `getWalletHistory`            | 30        |
| `eth_getTokenBalances`       | Get ERC20 token balances by wallet.        | `getWalletTokenBalancesPrice` | 25        |
| `eth_getTokenPrice`          | Get ERC20 token price by token address.    | `getTokenPrice`               | 25        |
| `eth_getTokenMetadata`       | Get ERC20 token metadata by token address. | `getTokenMetadata`            | 8         |
| `eth_getNFTBalances`         | Get NFTs by wallet address.                | `getWalletNFTs`               | 20        |
| `eth_getNFTCollections`      | Get NFT collections by wallet address.     | `getWalletNFTCollections`     | 20        |

---

## Archive Nodes and CU Weight

**Archive Nodes** store historical blockchain data that extends far beyond the most recent blocks. Because of the additional computational and storage resources required to maintain archive nodes, querying these nodes comes with a higher **Archive CU Weight**. If your use case involves accessing deep historical data, be mindful of the increased CU cost.

---

## Optimize Your CU Usage

To maximize your CU allocation, you can:

- **Batch Requests**: Where possible, batch multiple requests into a single API call. Just note that batch requests have a maximum size of 20.
- **Limit Block Range**: The default block range for queries is 100 blocks. Requesting larger block ranges or querying archive data will result in higher CU consumption.
- **Monitor Usage**: Regularly track your CU usage in the Moralis dashboard to avoid hitting your rate limits unexpectedly.

---

## Need Higher Limits?

If you find that your use case requires more CUs than your current plan offers, consider upgrading to a higher plan or reaching out to our support team for custom solutions.

For more information on rate limits and usage caps, visit our [FAQ](/rpc-faqs).

---
