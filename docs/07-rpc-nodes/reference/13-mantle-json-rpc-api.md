---
title: "Mantle JSON RPC API"
slug: "/rpc-nodes/mantle-json-rpc-api"
sidebar_position: 12
---

# Mantle JSON RPC API

## Introduction

Mantle is a high-performance, scalable Layer 2 blockchain built on Ethereum. By leveraging rollup technology, Mantle provides developers and users with faster and cheaper transactions while maintaining the security of Ethereum. Mantle is ideal for decentralized finance (DeFi), NFTs, and other decentralized applications (dApps) that require low-latency, high-throughput transaction processing.

## Supported Networks

The Mantle RPC API is available for the following networks:

1. **Mantle Mainnet**
2. **Mantle Sepolia Testnet**

## Network Details

| Network            | Chain ID      | EVM Chain               | RPC URLs                                                                                           |
| ------------------ | ------------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| **Mantle Mainnet** | 0x1388 (5000) | EvmChain.MANTLE         | [https://site1.moralis-nodes.com/mantle/](https://site1.moralis-nodes.com/mantle/)                 |
|                    |               |                         | [https://site2.moralis-nodes.com/mantle/](https://site2.moralis-nodes.com/mantle/)                 |
| **Mantle Sepolia** | 0x138b (5003) | EvmChain.MANTLE_SEPOLIA | [https://site1.moralis-nodes.com/mantle-sepolia/](https://site1.moralis-nodes.com/mantle-sepolia/) |
|                    |               |                         | [https://site2.moralis-nodes.com/mantle-sepolia/](https://site2.moralis-nodes.com/mantle-sepolia/) |

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
