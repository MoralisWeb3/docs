---
title: "Polygon JSON RPC API"
slug: "/rpc-nodes/polygon-json-rpc-api"
sidebar_position: 1
---

# Polygon JSON RPC API

## Introduction

Polygon (formerly Matic Network) is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. It offers a highly scalable, low-cost platform for decentralized applications (dApps) without sacrificing security. Polygon is known for its fast finality and low transaction fees, making it ideal for various use cases, including DeFi, NFTs, and gaming.

## Supported Networks

The Polygon RPC API is available for the following networks:

1. **Polygon Mainnet**
2. **Polygon Amoy Testnet**

## Network Details

| Network             | Chain ID        | EVM Chain             | RPC URLs                                                                             |
| ------------------- | --------------- | --------------------- | ------------------------------------------------------------------------------------ |
| **Polygon Mainnet** | 0x89 (137)      | EvmChain.POLYGON      | [https://site1.moralis-nodes.com/polygon/](https://site1.moralis-nodes.com/polygon/) |
|                     |                 |                       | [https://site2.moralis-nodes.com/polygon/](https://site2.moralis-nodes.com/polygon/) |
| **Polygon Amoy**    | 0x13882 (80002) | EvmChain.POLYGON_AMOY | [https://site1.moralis-nodes.com/amoy/](https://site1.moralis-nodes.com/amoy/)       |
|                     |                 |                       | [https://site2.moralis-nodes.com/amoy/](https://site2.moralis-nodes.com/amoy/)       |

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
