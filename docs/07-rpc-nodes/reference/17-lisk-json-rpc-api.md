---
title: "Lisk JSON RPC API"
slug: "/rpc-nodes/lisk-json-rpc-api"
sidebar_position: 16
---

# Lisk JSON RPC API

## Introduction

Lisk is pioneering a transformative journey by integrating with the Ethereum ecosystem as a Layer-2 (L2) solution. Focused on bringing real-world assets (RWA), off-chain assets (OCA), and decentralized physical infrastructure networks (DePIN) onchain, Lisk empowers developers with a robust, scalable platform designed to enhance the Ethereum network. By leveraging Lisk's L2 architecture, developers can build dApps that bridge the gap between traditional systems and the decentralized future.

## Supported Networks

The Lisk RPC API is available for the following networks:

1. **Lisk Mainnet**
2. **Lisk Sepolia Testnet**

## Network Details

| Network                  | Chain ID      | EVM Chain             | RPC URLs                                                                                       |
| ------------------------ | ------------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| **Lisk Mainnet**         | 0x46f (1135)  | EvmChain.LISK         | [https://site1.moralis-nodes.com/lisk/](https://site1.moralis-nodes.com/lisk/)                 |
|                          |               |                       | [https://site2.moralis-nodes.com/lisk/](https://site2.moralis-nodes.com/lisk/)                 |
| **Lisk Sepolia Testnet** | 0x106a (4202) | EvmChain.LISK_SEPOLIA | [https://site1.moralis-nodes.com/lisk-sepolia/](https://site1.moralis-nodes.com/lisk-sepolia/) |
|                          |               |                       | [https://site2.moralis-nodes.com/lisk-sepolia/](https://site2.moralis-nodes.com/lisk-sepolia/) |

## Supported RPC Methods


  - <a href="/rpc-nodes/reference/eth_blockNumber">eth_blockNumber</a>
  - <a href="/rpc-nodes/reference/eth_call">eth_call</a>
  - <a href="/rpc-nodes/reference/eth_chainId">eth_chainId</a>
  - <a href="/rpc-nodes/reference/eth_createAccessList">eth_createAccessList</a>
  - <a href="/rpc-nodes/reference/eth_estimateGas">eth_estimateGas</a>
  - <a href="/rpc-nodes/reference/eth_feeHistory">eth_feeHistory</a>
  - <a href="/rpc-nodes/reference/eth_gasPrice">eth_gasPrice</a>
  - <a href="/rpc-nodes/reference/eth_getBalance">eth_getBalance</a>
  - <a href="/rpc-nodes/reference/eth_getBlockByHash">eth_getBlockByHash</a>
  - <a href="/rpc-nodes/reference/eth_getBlockByNumber">eth_getBlockByNumber</a>
  - <a href="/rpc-nodes/reference/eth_getBlockTransactionCountByHash">eth_getBlockTransactionCountByHash</a>
  - <a href="/rpc-nodes/reference/eth_getBlockTransactionCountByNumber">eth_getBlockTransactionCountByNumber</a>
  - <a href="/rpc-nodes/reference/eth_getBlockReceipts">eth_getBlockReceipts</a>
  - <a href="/rpc-nodes/reference/eth_getCode">eth_getCode</a>
  - <a href="/rpc-nodes/reference/eth_getLogs">eth_getLogs</a>
  - <a href="/rpc-nodes/reference/eth_getProof">eth_getProof</a>
  - <a href="/rpc-nodes/reference/eth_getStorageAt">eth_getStorageAt</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionByHash">eth_getTransactionByHash</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionByBlockHashAndIndex">eth_getTransactionByBlockHashAndIndex</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionByBlockNumberAndIndex">eth_getTransactionByBlockNumberAndIndex</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionCount">eth_getTransactionCount</a>
  - <a href="/rpc-nodes/reference/eth_getTransactionReceipt">eth_getTransactionReceipt</a>
  - <a href="/rpc-nodes/reference/eth_getUncleByBlockHashAndIndex">eth_getUncleByBlockHashAndIndex</a>
  - <a href="/rpc-nodes/reference/eth_getUncleByBlockNumberAndIndex">eth_getUncleByBlockNumberAndIndex</a>
  - <a href="/rpc-nodes/reference/eth_getUncleCountByBlockHash">eth_getUncleCountByBlockHash</a>
  - <a href="/rpc-nodes/reference/eth_getUncleCountByBlockNumber">eth_getUncleCountByBlockNumber</a>
  - <a href="/rpc-nodes/reference/eth_maxPriorityFeePerGas">eth_maxPriorityFeePerGas</a>
  - <a href="/rpc-nodes/reference/eth_sendRawTransaction">eth_sendRawTransaction</a>


## Supported Extended RPC Methods


  - <a href="/rpc-nodes/reference/extended-rpc/eth_getTransactions">eth_getTransactions</a>
  - <a href="/rpc-nodes/reference/extended-rpc/eth_getDecodedTransactions">eth_getDecodedTransactions</a>
  - <a href="/rpc-nodes/reference/extended-rpc/eth_getTokenBalances">eth_getTokenBalances</a>
  - <a href="/rpc-nodes/reference/extended-rpc/eth_getTokenPrice">eth_getTokenPrice</a>
  - <a href="/rpc-nodes/reference/extended-rpc/eth_getTokenMetadata">eth_getTokenMetadata</a>
  - <a href="/rpc-nodes/reference/extended-rpc/eth_getNFTBalances">eth_getNFTBalances</a>
  - <a href="/rpc-nodes/reference/extended-rpc/eth_getNFTCollections">eth_getNFTCollections</a>

