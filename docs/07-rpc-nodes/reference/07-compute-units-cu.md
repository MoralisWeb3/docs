---
title: "RPC Node Compute Units"
slug: "compute-units-cu"
sidebar_label: "Compute Units (CU)"
description: "Learn more about what is Compute Units and how does it affects your pricing."
sidebar_position: 8
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

<NodeBanner />

All [Moralis plans](/web3-data-api/evm/pricing-plans) have generous limits on the number of requests you can make per month. How many included requests you have depends on the plan you have, check the [pricing page](https://moralis.io/pricing) for more details.

Some requests are more expensive than others. By giving some heavy requests higher weight, we ensure that you only pay for what you use and not a cent more.

## What is a Compute Unit (CU)?

A compute unit is a measure of the requests needed to query computationally expensive API endpoints. Each request has both **CU Weight** and **Archive CU Weight** that are measured in terms of compute units.

### Price

Request price refers to the amount of compute units that will be calculated towards your API usage billing.

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
