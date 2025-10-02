---
title: "zkSync JSON RPC API"
slug: "/rpc-nodes/zksync-json-rpc-api"
sidebar_position: 11
---

# zkSync JSON RPC API

## Introduction

zkSync is a Layer 2 scaling solution for Ethereum that uses zero-knowledge rollups to provide low-cost, high-throughput transactions while maintaining the security of the Ethereum network. It enables developers to build scalable decentralized applications (dApps) with faster transaction finality and lower fees. zkSync’s architecture is ideal for decentralized finance (DeFi), NFTs, and other applications requiring high-speed processing.

## Supported Networks

The zkSync RPC API is available for the following networks:

1. **zkSync Mainnet**
2. **zkSync Sepolia Testnet**

## Network Details

| Network            | Chain ID    | EVM Chain               | RPC URLs                                                                                           |
| ------------------ | ----------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| **zkSync Mainnet** | 0x144 (324) | EvmChain.ZKSYNC         | [https://site1.moralis-nodes.com/zksync/](https://site1.moralis-nodes.com/zksync/)                 |
|                    |             |                         | [https://site2.moralis-nodes.com/zksync/](https://site2.moralis-nodes.com/zksync/)                 |
| **zkSync Sepolia** | 0x12c (300) | EvmChain.ZKSYNC_SEPOLIA | [https://site1.moralis-nodes.com/zksync-sepolia/](https://site1.moralis-nodes.com/zksync-sepolia/) |
|                    |             |                         | [https://site2.moralis-nodes.com/zksync-sepolia/](https://site2.moralis-nodes.com/zksync-sepolia/) |

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

