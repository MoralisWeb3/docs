---
title: "Arbitrum JSON RPC API"
slug: "/rpc-nodes/arbitrum-json-rpc-api"
sidebar_position: 3
---

import Admonition from "@theme/Admonition";

# Arbitrum JSON RPC API

## Introduction

Arbitrum is a Layer 2 scaling solution for Ethereum that leverages optimistic rollups to improve transaction speed and reduce fees. By bundling multiple transactions together and posting them on the Ethereum main chain, Arbitrum significantly enhances the throughput while retaining the security of Ethereum. Arbitrum is ideal for decentralized finance (DeFi) applications and developers seeking fast and affordable Ethereum-compatible solutions.

## Supported Networks

The Arbitrum RPC API is available for the following networks:

1. **Arbitrum Mainnet**
2. **Arbitrum Sepolia Testnet**

## Network Details

| Network              | Chain ID         | EVM Chain                 | RPC URLs                                                                                               |
| -------------------- | ---------------- | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Arbitrum Mainnet** | 0xa4b1 (42161)   | EvmChain.ARBITRUM         | [https://site1.moralis-nodes.com/arbitrum/](https://site1.moralis-nodes.com/arbitrum/)                 |
|                      |                  |                           | [https://site2.moralis-nodes.com/arbitrum/](https://site2.moralis-nodes.com/arbitrum/)                 |
| **Arbitrum Sepolia** | 0x66eee (421614) | EvmChain.ARBITRUM_SEPOLIA | [https://site1.moralis-nodes.com/arbitrum-sepolia/](https://site1.moralis-nodes.com/arbitrum-sepolia/) |
|                      |                  |                           | [https://site2.moralis-nodes.com/arbitrum-sepolia/](https://site2.moralis-nodes.com/arbitrum-sepolia/) |

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

<Admonition type="note" title="Network Support Notice">
  <p>
    The Extended RPC APIs are only supported on the <b>Arbitrum</b> Mainnet.
  </p>
</Admonition>

- [eth_getTransactions](/rpc-nodes/reference/extended-rpc/eth_getTransactions)
- [eth_getDecodedTransactions](/rpc-nodes/reference/extended-rpc/eth_getDecodedTransactions)
- [eth_getTokenBalances](/rpc-nodes/reference/extended-rpc/eth_getTokenBalances)
- [eth_getTokenPrice](/rpc-nodes/reference/extended-rpc/eth_getTokenPrice)
- [eth_getTokenMetadata](/rpc-nodes/reference/extended-rpc/eth_getTokenMetadata)
- [eth_getNFTBalances](/rpc-nodes/reference/extended-rpc/eth_getNFTBalances)
- [eth_getNFTCollections](/rpc-nodes/reference/extended-rpc/eth_getNFTCollections)
