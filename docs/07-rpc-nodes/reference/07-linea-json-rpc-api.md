---
title: "Linea JSON RPC API"
slug: "/rpc-nodes/linea-json-rpc-api"
sidebar_position: 6
---

# Linea JSON RPC API

## Introduction

Linea is a high-performance Layer 2 solution for Ethereum, designed to provide low-cost and fast transactions while maintaining Ethereum’s security through zk-rollups. Linea’s architecture allows for greater scalability, enabling decentralized applications (dApps) to process more transactions at lower costs, making it ideal for decentralized finance (DeFi), gaming, and NFT ecosystems.

## Supported Networks

The Linea RPC API is available for the following networks:

1. **Linea Mainnet**
2. **Linea Sepolia Testnet**

## Network Details

| Network           | Chain ID       | EVM Chain              | RPC URLs                                                                                         |
| ----------------- | -------------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Linea Mainnet** | 0xe708 (59144) | EvmChain.LINEA         | [https://site1.moralis-nodes.com/linea/](https://site1.moralis-nodes.com/linea/)                 |
|                   |                |                        | [https://site2.moralis-nodes.com/linea/](https://site2.moralis-nodes.com/linea/)                 |
| **Linea Sepolia** | 0xe705 (59141) | EvmChain.LINEA_SEPOLIA | [https://site1.moralis-nodes.com/linea-sepolia/](https://site1.moralis-nodes.com/linea-sepolia/) |
|                   |                |                        | [https://site2.moralis-nodes.com/linea-sepolia/](https://site2.moralis-nodes.com/linea-sepolia/) |

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
