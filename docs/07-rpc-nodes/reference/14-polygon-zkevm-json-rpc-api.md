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

- [eth_blockNumber](/rpc-nodes/reference/eth_blockNumber)
- [eth_call](/rpc-nodes/reference/eth_call)
- [eth_chainId](/rpc-nodes/reference/eth_chainId)
- [eth_createAccessList](/rpc-nodes/reference/eth_createAccessList)
- [eth_estimateGas](/rpc-nodes/reference/eth_estimateGas)
- [eth_feeHistory](/rpc-nodes/reference/eth_feeHistory)
- [eth_gasPrice](/rpc-nodes/reference/eth_gasPrice)
- [eth_getBalance](/rpc-nodes/reference/eth_getBalance)
- [eth_getBlockByHash](/rpc-nodes/reference/eth_getBlockByHash)
- [eth_getBlockByNumber](/rpc-nodes/reference/eth_getBlockByNumber)
- [eth_getBlockTransactionCountByHash](/rpc-nodes/reference/eth_getBlockTransactionCountByHash)
- [eth_getBlockTransactionCountByNumber](/rpc-nodes/reference/eth_getBlockTransactionCountByNumber)
- [eth_getBlockReceipts](/rpc-nodes/reference/eth_getBlockReceipts)
- [eth_getCode](/rpc-nodes/reference/eth_getCode)
- [eth_getLogs](/rpc-nodes/reference/eth_getLogs)
- [eth_getProof](/rpc-nodes/reference/eth_getProof)
- [eth_getStorageAt](/rpc-nodes/reference/eth_getStorageAt)
- [eth_getTransactionByHash](/rpc-nodes/reference/eth_getTransactionByHash)
- [eth_getTransactionByBlockHashAndIndex](/rpc-nodes/reference/eth_getTransactionByBlockHashAndIndex)
- [eth_getTransactionByBlockNumberAndIndex](/rpc-nodes/reference/eth_getTransactionByBlockNumberAndIndex)
- [eth_getTransactionCount](/rpc-nodes/reference/eth_getTransactionCount)
- [eth_getTransactionReceipt](/rpc-nodes/reference/eth_getTransactionReceipt)
- [eth_getUncleByBlockHashAndIndex](/rpc-nodes/reference/eth_getUncleByBlockHashAndIndex)
- [eth_getUncleByBlockNumberAndIndex](/rpc-nodes/reference/eth_getUncleByBlockNumberAndIndex)
- [eth_getUncleCountByBlockHash](/rpc-nodes/reference/eth_getUncleCountByBlockHash)
- [eth_getUncleCountByBlockNumber](/rpc-nodes/reference/eth_getUncleCountByBlockNumber)
- [eth_maxPriorityFeePerGas](/rpc-nodes/reference/eth_maxPriorityFeePerGas)
- [eth_sendRawTransaction](/rpc-nodes/reference/eth_sendRawTransaction)
