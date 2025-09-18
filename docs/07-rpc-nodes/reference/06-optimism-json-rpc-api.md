---
title: "Optimism JSON RPC API"
slug: "/rpc-nodes/optimism-json-rpc-api"
sidebar_position: 5
---

import Admonition from "@theme/Admonition";

# Optimism JSON RPC API

## Introduction

Optimism is a Layer 2 scaling solution built on Ethereum that uses optimistic rollups to bundle transactions, providing faster and cheaper transactions while retaining the security of Ethereum. Optimism focuses on scalability, low gas fees, and maintaining compatibility with the Ethereum ecosystem, making it an ideal platform for decentralized applications (dApps), decentralized finance (DeFi), and NFTs.

## Supported Networks

The Optimism RPC API is available for the following networks:

1. **Optimism Mainnet**
2. **Optimism Sepolia Testnet**

## Network Details

| Network              | Chain ID            | EVM Chain                 | RPC URLs                                                                                               |
| -------------------- | ------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Optimism Mainnet** | 0xa (10)            | EvmChain.OPTIMISM         | [https://site1.moralis-nodes.com/optimism/](https://site1.moralis-nodes.com/optimism/)                 |
|                      |                     |                           | [https://site2.moralis-nodes.com/optimism/](https://site2.moralis-nodes.com/optimism/)                 |
| **Optimism Sepolia** | 0xaa37dc (11155420) | EvmChain.OPTIMISM_SEPOLIA | [https://site1.moralis-nodes.com/optimism-sepolia/](https://site1.moralis-nodes.com/optimism-sepolia/) |
|                      |                     |                           | [https://site2.moralis-nodes.com/optimism-sepolia/](https://site2.moralis-nodes.com/optimism-sepolia/) |

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
    The Extended RPC APIs are only supported on the <b>Optimism</b> Mainnet.
  </p>
</Admonition>

- [eth_getTransactions](/rpc-nodes/reference/extended-rpc/eth_getTransactions)
- [eth_getDecodedTransactions](/rpc-nodes/reference/extended-rpc/eth_getDecodedTransactions)
- [eth_getTokenBalances](/rpc-nodes/reference/extended-rpc/eth_getTokenBalances)
- [eth_getTokenPrice](/rpc-nodes/reference/extended-rpc/eth_getTokenPrice)
- [eth_getTokenMetadata](/rpc-nodes/reference/extended-rpc/eth_getTokenMetadata)
- [eth_getNFTBalances](/rpc-nodes/reference/extended-rpc/eth_getNFTBalances)
- [eth_getNFTCollections](/rpc-nodes/reference/extended-rpc/eth_getNFTCollections)
