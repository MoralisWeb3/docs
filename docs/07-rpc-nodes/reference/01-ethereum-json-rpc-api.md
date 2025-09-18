---
title: "Ethereum JSON RPC API"
slug: "/rpc-nodes/ethereum-json-rpc-api"
sidebar_position: 0
---

# Ethereum JSON RPC API

## Introduction

Ethereum is the pioneering smart contract platform that enables developers to build decentralized applications (dApps) on a permissionless blockchain. It supports smart contracts, decentralized finance (DeFi), and a broad array of token standards, including ERC-20 and ERC-721. Ethereum’s consensus mechanism transitioned from Proof of Work (PoW) to Proof of Stake (PoS) with the Ethereum 2.0 upgrade, making it more energy-efficient. As the largest smart contract platform by market capitalization and developer activity, Ethereum remains a leader in the blockchain space.

## Supported Networks

The Ethereum RPC API is available for the following networks:

1. **Ethereum Mainnet**
2. **Ethereum Sepolia Testnet**
3. **Ethereum Holesky Testnet**

## Network Details

| Network              | Chain ID            | EVM Chain         | RPC URLs                                                                             |
| -------------------- | ------------------- | ----------------- | ------------------------------------------------------------------------------------ |
| **Ethereum Mainnet** | 0x1 (1)             | EvmChain.ETHEREUM | [https://site1.moralis-nodes.com/eth/](https://site1.moralis-nodes.com/eth/)         |
|                      |                     |                   | [https://site2.moralis-nodes.com/eth/](https://site2.moralis-nodes.com/eth/)         |
| **Ethereum Sepolia** | 0xaa36a7 (11155111) | EvmChain.SEPOLIA  | [https://site1.moralis-nodes.com/sepolia/](https://site1.moralis-nodes.com/sepolia/) |
|                      |                     |                   | [https://site2.moralis-nodes.com/sepolia/](https://site2.moralis-nodes.com/sepolia/) |
| **Ethereum Holesky** | 0x4268 (17000)      | EvmChain.HOLESKY  | [https://site1.moralis-nodes.com/holesky/](https://site1.moralis-nodes.com/holesky/) |
|                      |                     |                   | [https://site2.moralis-nodes.com/holesky/](https://site2.moralis-nodes.com/holesky/) |

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
