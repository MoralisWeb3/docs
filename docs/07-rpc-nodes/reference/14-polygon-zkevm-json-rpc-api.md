---
title: "Polygon zkEVM JSON RPC API"
slug: "/rpc-nodes/polygon-zkevm-json-rpc-api"
sidebar_position: 13
---

# Polygon zkEVM JSON RPC API

## Introduction

Polygon zkEVM is a Layer 2 scaling solution that combines the security of Ethereum with the scalability of zero-knowledge rollups. zkEVM allows for fast and low-cost transactions while maintaining compatibility with the Ethereum Virtual Machine (EVM), making it easier for developers to deploy their existing Ethereum applications. Polygon zkEVM is ideal for decentralized finance (DeFi), NFTs, and other decentralized applications requiring high throughput.

## Supported Networks

The Polygon zkEVM RPC API is available for the following networks:

1. **Polygon zkEVM Mainnet**
2. **Polygon zkEVM Cardona Testnet**

## Network Details

| Network                   | Chain ID     | EVM Chain                      | RPC URLs                                                                                                         |
| ------------------------- | ------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Polygon zkEVM Mainnet** | 0x44d (1101) | EvmChain.POLYGON_ZKEVM         | [https://site1.moralis-nodes.com/polygon-zkevm/](https://site1.moralis-nodes.com/polygon-zkevm/)                 |
|                           |              |                                | [https://site2.moralis-nodes.com/polygon-zkevm/](https://site2.moralis-nodes.com/polygon-zkevm/)                 |
| **Polygon zkEVM Cardona** | 0x98a (2442) | EvmChain.POLYGON_ZKEVM_CARDONA | [https://site1.moralis-nodes.com/polygon-zkevm-cardona/](https://site1.moralis-nodes.com/polygon-zkevm-cardona/) |
|                           |              |                                | [https://site2.moralis-nodes.com/polygon-zkevm-cardona/](https://site2.moralis-nodes.com/polygon-zkevm-cardona/) |

## Supported RPC Methods


  - <a href="/rpc-nodes/reference/eth_blockNumber">eth_blockNumber</a>
  - <a href="/rpc-nodes/reference/eth_call">eth_call</a>
  - <a href="/rpc-nodes/reference/eth_chainId">eth_chainId</a>
  - <a href="/rpc-nodes/reference/eth_createAccessList">eth_createAccessList</a>
  - <a href="/rpc-nodes/reference/eth_estimateGas">eth_estimateGas</a>
  - <a href="/rpc-nodes/reference/eth_feeHistory">eth_feeHistory</a>
  - <a href="/rpc-nodes/reference/eth_gasPrice">eth_gasPrice</a>
  - <a href="/rpc-nodes/reference/eth_getBalance">eth_getBalance</a>
  - <a href="/rpc-nodes/reference/eth_getBlockByHash">eth_getBlockByHash</a>
  - <a href="/rpc-nodes/reference/eth_getBlockByNumber">eth_getBlockByNumber</a>
  - <a href="/rpc-nodes/reference/eth_getBlockTransactionCountByHash">eth_getBlockTransactionCountByHash</a>
  - <a href="/rpc-nodes/reference/eth_getBlockTransactionCountByNumber">eth_getBlockTransactionCountByNumber</a>
  - <a href="/rpc-nodes/reference/eth_getBlockReceipts">eth_getBlockReceipts</a>
  - <a href="/rpc-nodes/reference/eth_getCode">eth_getCode</a>
  - <a href="/rpc-nodes/reference/eth_getLogs">eth_getLogs</a>
  - <a href="/rpc-nodes/reference/eth_getProof">eth_getProof</a>
  - <a href="/rpc-nodes/reference/eth_getStorageAt">eth_getStorageAt</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionByHash">eth_getTransactionByHash</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionByBlockHashAndIndex">eth_getTransactionByBlockHashAndIndex</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionByBlockNumberAndIndex">eth_getTransactionByBlockNumberAndIndex</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionCount">eth_getTransactionCount</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionReceipt">eth_getTransactionReceipt</a>
  - <a href="/rpc-nodes/reference/eth_getUncleByBlockHashAndIndex">eth_getUncleByBlockHashAndIndex</a>
  - <a href="/rpc-nodes/reference/eth_getUncleByBlockNumberAndIndex">eth_getUncleByBlockNumberAndIndex</a>
  - <a href="/rpc-nodes/reference/eth_getUncleCountByBlockHash">eth_getUncleCountByBlockHash</a>
  - <a href="/rpc-nodes/reference/eth_getUncleCountByBlockNumber">eth_getUncleCountByBlockNumber</a>
  - <a href="/rpc-nodes/reference/eth_maxPriorityFeePerGas">eth_maxPriorityFeePerGas</a>
  - <a href="/rpc-nodes/reference/eth_sendRawTransaction">eth_sendRawTransaction</a>

