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

<ul>
  <li><a href="/rpc-nodes/reference/eth_blockNumber">eth_blockNumber</a></li>
  <li><a href="/rpc-nodes/reference/eth_call">eth_call</a></li>
  <li><a href="/rpc-nodes/reference/eth_chainId">eth_chainId</a></li>
  <li><a href="/rpc-nodes/reference/eth_createAccessList">eth_createAccessList</a></li>
  <li><a href="/rpc-nodes/reference/eth_estimateGas">eth_estimateGas</a></li>
  <li><a href="/rpc-nodes/reference/eth_feeHistory">eth_feeHistory</a></li>
  <li><a href="/rpc-nodes/reference/eth_gasPrice">eth_gasPrice</a></li>
  <li><a href="/rpc-nodes/reference/eth_getBalance">eth_getBalance</a></li>
  <li><a href="/rpc-nodes/reference/eth_getBlockByHash">eth_getBlockByHash</a></li>
  <li><a href="/rpc-nodes/reference/eth_getBlockByNumber">eth_getBlockByNumber</a></li>
  <li><a href="/rpc-nodes/reference/eth_getBlockTransactionCountByHash">eth_getBlockTransactionCountByHash</a></li>
  <li><a href="/rpc-nodes/reference/eth_getBlockTransactionCountByNumber">eth_getBlockTransactionCountByNumber</a></li>
  <li><a href="/rpc-nodes/reference/eth_getBlockReceipts">eth_getBlockReceipts</a></li>
  <li><a href="/rpc-nodes/reference/eth_getCode">eth_getCode</a></li>
  <li><a href="/rpc-nodes/reference/eth_getLogs">eth_getLogs</a></li>
  <li><a href="/rpc-nodes/reference/eth_getProof">eth_getProof</a></li>
  <li><a href="/rpc-nodes/reference/eth_getStorageAt">eth_getStorageAt</a></li>
  <li><a href="/rpc-nodes/reference/eth_getTransactionByHash">eth_getTransactionByHash</a></li>
  <li><a href="/rpc-nodes/reference/eth_getTransactionByBlockHashAndIndex">eth_getTransactionByBlockHashAndIndex</a></li>
  <li><a href="/rpc-nodes/reference/eth_getTransactionByBlockNumberAndIndex">eth_getTransactionByBlockNumberAndIndex</a></li>
  <li><a href="/rpc-nodes/reference/eth_getTransactionCount">eth_getTransactionCount</a></li>
  <li><a href="/rpc-nodes/reference/eth_getTransactionReceipt">eth_getTransactionReceipt</a></li>
  <li><a href="/rpc-nodes/reference/eth_getUncleByBlockHashAndIndex">eth_getUncleByBlockHashAndIndex</a></li>
  <li><a href="/rpc-nodes/reference/eth_getUncleByBlockNumberAndIndex">eth_getUncleByBlockNumberAndIndex</a></li>
  <li><a href="/rpc-nodes/reference/eth_getUncleCountByBlockHash">eth_getUncleCountByBlockHash</a></li>
  <li><a href="/rpc-nodes/reference/eth_getUncleCountByBlockNumber">eth_getUncleCountByBlockNumber</a></li>
  <li><a href="/rpc-nodes/reference/eth_maxPriorityFeePerGas">eth_maxPriorityFeePerGas</a></li>
  <li><a href="/rpc-nodes/reference/eth_sendRawTransaction">eth_sendRawTransaction</a></li>
</ul>

## Supported Extended RPC Methods

<ul>
  <li><a href="/rpc-nodes/reference/extended-rpc/eth_getTransactions">eth_getTransactions</a></li>
  <li><a href="/rpc-nodes/reference/extended-rpc/eth_getDecodedTransactions">eth_getDecodedTransactions</a></li>
  <li><a href="/rpc-nodes/reference/extended-rpc/eth_getTokenBalances">eth_getTokenBalances</a></li>
  <li><a href="/rpc-nodes/reference/extended-rpc/eth_getTokenPrice">eth_getTokenPrice</a></li>
  <li><a href="/rpc-nodes/reference/extended-rpc/eth_getTokenMetadata">eth_getTokenMetadata</a></li>
  <li><a href="/rpc-nodes/reference/extended-rpc/eth_getNFTBalances">eth_getNFTBalances</a></li>
  <li><a href="/rpc-nodes/reference/extended-rpc/eth_getNFTCollections">eth_getNFTCollections</a></li>
</ul>
