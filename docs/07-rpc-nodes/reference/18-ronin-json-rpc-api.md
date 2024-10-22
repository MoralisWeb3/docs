---
title: "Ronin JSON RPC API"
slug: "/rpc-nodes/ronin-json-rpc-api"
sidebar_position: 17
---

# Ronin JSON RPC API

## Introduction

Ronin is a blockchain built by Sky Mavis, designed specifically to power Axie Infinity and other decentralized applications (dApps). It provides an easy-to-use experience with low fees, fast transactions, and high security, making it ideal for gaming and NFT applications.

## Supported Networks

The Ronin RPC API is available for the following networks:

1. **Ronin Mainnet**
2. **Ronin Saigon Testnet**

## Network Details

| Network                  | Chain ID     | EVM Chain              | RPC URLs                                                                                         |
| ------------------------ | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Ronin Mainnet**        | 0x7e4 (2020) | EvmChain.RONIN         | [https://site1.moralis-nodes.com/ronin/](https://site1.moralis-nodes.com/ronin/)                 |
|                          |              |                        | [https://site2.moralis-nodes.com/ronin/](https://site2.moralis-nodes.com/ronin/)                 |
| **Ronin Saigon Testnet** | 0x7e5 (2021) | EvmChain.RONIN_TESTNET | [https://site1.moralis-nodes.com/ronin-testnet/](https://site1.moralis-nodes.com/ronin-testnet/) |
|                          |              |                        | [https://site2.moralis-nodes.com/ronin-testnet/](https://site2.moralis-nodes.com/ronin-testnet/) |

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
