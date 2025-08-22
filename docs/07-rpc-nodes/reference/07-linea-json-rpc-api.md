---
title: "Linea JSON RPC API"
slug: "/rpc-nodes/linea-json-rpc-api"
sidebar_position: 6
---

# Linea JSON RPC API

## Introduction

Linea is a high-performance Layer 2 solution for Ethereum, designed to provide low-cost and fast transactions while maintaining Ethereum’s security through zk-rollups. Linea’s architecture allows for greater scalability, enabling decentralized applications (dApps) to process more transactions at lower costs, making it ideal for decentralized finance (DeFi), gaming, and NFT ecosystems.

## Supported Networks

The Linea RPC API is available for the following networks:

1. **Linea Mainnet**
2. **Linea Sepolia Testnet**

## Network Details

| Network           | Chain ID       | EVM Chain              | RPC URLs                                                                                         |
| ----------------- | -------------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Linea Mainnet** | 0xe708 (59144) | EvmChain.LINEA         | [https://site1.moralis-nodes.com/linea/](https://site1.moralis-nodes.com/linea/)                 |
|                   |                |                        | [https://site2.moralis-nodes.com/linea/](https://site2.moralis-nodes.com/linea/)                 |
| **Linea Sepolia** | 0xe705 (59141) | EvmChain.LINEA_SEPOLIA | [https://site1.moralis-nodes.com/linea-sepolia/](https://site1.moralis-nodes.com/linea-sepolia/) |
|                   |                |                        | [https://site2.moralis-nodes.com/linea-sepolia/](https://site2.moralis-nodes.com/linea-sepolia/) |

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
