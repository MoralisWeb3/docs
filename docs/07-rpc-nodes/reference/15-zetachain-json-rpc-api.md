---
title: "Zetachain JSON RPC API"
slug: "/rpc-nodes/zetachain-json-rpc-api"
sidebar_position: 14
---

# Zetachain JSON RPC API

## Introduction

Zetachain is a Layer 1 blockchain designed for cross-chain interoperability, allowing developers to create decentralized applications (dApps) that interact seamlessly with multiple blockchains. By enabling direct cross-chain messaging and asset transfers, Zetachain eliminates the need for bridges and wrapped assets, providing a more secure and user-friendly solution for decentralized finance (DeFi), NFTs, and multi-chain applications.

## Supported Networks

The Zetachain RPC API is available for the following networks:

1. **Zetachain Mainnet**
2. **Zetachain Testnet**

## Network Details

| Network               | Chain ID      | EVM Chain                  | RPC URLs                                                                                                 |
| --------------------- | ------------- | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Zetachain Mainnet** | 0x1b58 (7000) | EvmChain.ZETACHAIN         | [https://site1.moralis-nodes.com/zetachain/](https://site1.moralis-nodes.com/zetachain/)                 |
|                       |               |                            | [https://site2.moralis-nodes.com/zetachain/](https://site2.moralis-nodes.com/zetachain/)                 |
| **Zetachain Testnet** | 0x1b59 (7001) | EvmChain.ZETACHAIN_TESTNET | [https://site1.moralis-nodes.com/zetachain-testnet/](https://site1.moralis-nodes.com/zetachain-testnet/) |
|                       |               |                            | [https://site2.moralis-nodes.com/zetachain-testnet/](https://site2.moralis-nodes.com/zetachain-testnet/) |

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
