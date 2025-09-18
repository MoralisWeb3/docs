---
title: "Binance Smart Chain JSON RPC API"
slug: "/rpc-nodes/binance-smart-chain-json-rpc-api"
sidebar_label: BSC JSON RPC API
sidebar_position: 2
---

# Binance Smart Chain JSON RPC API

## Introduction

Binance Smart Chain (BSC) is a blockchain network built for running smart contract–based applications. BSC is compatible with the Ethereum Virtual Machine (EVM), which allows Ethereum dApps and tools to be easily ported over. The network is known for its fast transactions and low fees, making it ideal for decentralized finance (DeFi), decentralized exchanges (DEXs), and other blockchain applications.

## Supported Networks

The Binance Smart Chain RPC API is available for the following networks:

1. **Binance Smart Chain Mainnet**
2. **Binance Smart Chain Testnet**

## Network Details

| Network                         | Chain ID  | EVM Chain            | RPC URLs                                                                                     |
| ------------------------------- | --------- | -------------------- | -------------------------------------------------------------------------------------------- |
| **Binance Smart Chain Mainnet** | 0x38 (56) | EvmChain.BSC         | [https://site1.moralis-nodes.com/bsc/](https://site1.moralis-nodes.com/bsc/)                 |
|                                 |           |                      | [https://site2.moralis-nodes.com/bsc/](https://site2.moralis-nodes.com/bsc/)                 |
| **Binance Smart Chain Testnet** | 0x61 (97) | EvmChain.BSC_TESTNET | [https://site1.moralis-nodes.com/bsc-testnet/](https://site1.moralis-nodes.com/bsc-testnet/) |
|                                 |           |                      | [https://site2.moralis-nodes.com/bsc-testnet/](https://site2.moralis-nodes.com/bsc-testnet/) |

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
