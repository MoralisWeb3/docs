---
title: "Lisk JSON RPC API"
slug: "/rpc-nodes/lisk-json-rpc-api"
sidebar_position: 16
---

# Lisk JSON RPC API

## Introduction

Lisk is pioneering a transformative journey by integrating with the Ethereum ecosystem as a Layer-2 (L2) solution. Focused on bringing real-world assets (RWA), off-chain assets (OCA), and decentralized physical infrastructure networks (DePIN) onchain, Lisk empowers developers with a robust, scalable platform designed to enhance the Ethereum network. By leveraging Lisk's L2 architecture, developers can build dApps that bridge the gap between traditional systems and the decentralized future.

## Supported Networks

The Lisk RPC API is available for the following networks:

1. **Lisk Mainnet**
2. **Lisk Sepolia Testnet**

## Network Details

| Network                  | Chain ID      | EVM Chain             | RPC URLs                                                                                       |
| ------------------------ | ------------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| **Lisk Mainnet**         | 0x46f (1135)  | EvmChain.LISK         | [https://site1.moralis-nodes.com/lisk/](https://site1.moralis-nodes.com/lisk/)                 |
|                          |               |                       | [https://site2.moralis-nodes.com/lisk/](https://site2.moralis-nodes.com/lisk/)                 |
| **Lisk Sepolia Testnet** | 0x106a (4202) | EvmChain.LISK_SEPOLIA | [https://site1.moralis-nodes.com/lisk-sepolia/](https://site1.moralis-nodes.com/lisk-sepolia/) |
|                          |               |                       | [https://site2.moralis-nodes.com/lisk-sepolia/](https://site2.moralis-nodes.com/lisk-sepolia/) |

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

## Supported Extended RPC Methods

- [eth_getTransactions](/rpc-nodes/reference/extended-rpc/eth_getTransactions)
- [eth_getDecodedTransactions](/rpc-nodes/reference/extended-rpc/eth_getDecodedTransactions)
- [eth_getTokenBalances](/rpc-nodes/reference/extended-rpc/eth_getTokenBalances)
- [eth_getTokenPrice](/rpc-nodes/reference/extended-rpc/eth_getTokenPrice)
- [eth_getTokenMetadata](/rpc-nodes/reference/extended-rpc/eth_getTokenMetadata)
- [eth_getNFTBalances](/rpc-nodes/reference/extended-rpc/eth_getNFTBalances)
- [eth_getNFTCollections](/rpc-nodes/reference/extended-rpc/eth_getNFTCollections)
