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
