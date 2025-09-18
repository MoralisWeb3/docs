---
title: "Mantle JSON RPC API"
slug: "/rpc-nodes/mantle-json-rpc-api"
sidebar_position: 12
---

# Mantle JSON RPC API

## Introduction

Mantle is a high-performance, scalable Layer 2 blockchain built on Ethereum. By leveraging rollup technology, Mantle provides developers and users with faster and cheaper transactions while maintaining the security of Ethereum. Mantle is ideal for decentralized finance (DeFi), NFTs, and other decentralized applications (dApps) that require low-latency, high-throughput transaction processing.

## Supported Networks

The Mantle RPC API is available for the following networks:

1. **Mantle Mainnet**
2. **Mantle Sepolia Testnet**

## Network Details

| Network            | Chain ID      | EVM Chain               | RPC URLs                                                                                           |
| ------------------ | ------------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| **Mantle Mainnet** | 0x1388 (5000) | EvmChain.MANTLE         | [https://site1.moralis-nodes.com/mantle/](https://site1.moralis-nodes.com/mantle/)                 |
|                    |               |                         | [https://site2.moralis-nodes.com/mantle/](https://site2.moralis-nodes.com/mantle/)                 |
| **Mantle Sepolia** | 0x138b (5003) | EvmChain.MANTLE_SEPOLIA | [https://site1.moralis-nodes.com/mantle-sepolia/](https://site1.moralis-nodes.com/mantle-sepolia/) |
|                    |               |                         | [https://site2.moralis-nodes.com/mantle-sepolia/](https://site2.moralis-nodes.com/mantle-sepolia/) |

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
