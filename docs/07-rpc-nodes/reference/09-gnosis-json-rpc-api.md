---
title: "Gnosis JSON RPC API"
slug: "/rpc-nodes/gnosis-json-rpc-api"
sidebar_position: 8
---

# Gnosis JSON RPC API

## Introduction

Gnosis Chain is an Ethereum Layer 1 network focused on open finance and decentralized governance. It operates in conjunction with Ethereum, leveraging Ethereum’s security while providing faster and cheaper transactions. Gnosis Chain is EVM-compatible, making it easy for Ethereum developers to deploy their decentralized applications (dApps) with minimal changes. It’s widely used for governance, decentralized finance (DeFi), and DAO tooling.

## Supported Networks

The Gnosis RPC API is available for the following networks:

1. **Gnosis Mainnet**
2. **Gnosis Chiado Testnet**

## Network Details

| Network            | Chain ID       | EVM Chain               | RPC URLs                                                                                           |
| ------------------ | -------------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| **Gnosis Mainnet** | 0x64 (100)     | EvmChain.GNOSIS         | [https://site1.moralis-nodes.com/gnosis/](https://site1.moralis-nodes.com/gnosis/)                 |
|                    |                |                         | [https://site2.moralis-nodes.com/gnosis/](https://site2.moralis-nodes.com/gnosis/)                 |
| **Gnosis Chiado**  | 0x27d8 (10200) | EvmChain.GNOSIS_TESTNET | [https://site1.moralis-nodes.com/gnosis-testnet/](https://site1.moralis-nodes.com/gnosis-testnet/) |
|                    |                |                         | [https://site2.moralis-nodes.com/gnosis-testnet/](https://site2.moralis-nodes.com/gnosis-testnet/) |

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
