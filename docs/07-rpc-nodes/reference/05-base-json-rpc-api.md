---
title: "Base JSON RPC API"
slug: "/rpc-nodes/base-json-rpc-api"
sidebar_position: 4
---

# Base JSON RPC API

## Introduction

Base is an Ethereum Layer 2 (L2) network that offers high-speed, low-cost transactions with the security of Ethereum. It leverages the Optimism rollup technology to process transactions off-chain, reducing fees and improving throughput. Base is designed to bring the power of Ethereum to more developers and users, enabling a more scalable decentralized finance (DeFi) ecosystem, NFTs, and other dApps.

## Supported Networks

The Base RPC API is available for the following networks:

1. **Base Mainnet**
2. **Base Sepolia Testnet**

## Network Details

| Network          | Chain ID        | EVM Chain             | RPC URLs                                                                                       |
| ---------------- | --------------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| **Base Mainnet** | 0x2105 (8453)   | EvmChain.BASE         | [https://site1.moralis-nodes.com/base/](https://site1.moralis-nodes.com/base/)                 |
|                  |                 |                       | [https://site2.moralis-nodes.com/base/](https://site2.moralis-nodes.com/base/)                 |
| **Base Sepolia** | 0x14a34 (84532) | EvmChain.BASE_SEPOLIA | [https://site1.moralis-nodes.com/base-sepolia/](https://site1.moralis-nodes.com/base-sepolia/) |
|                  |                 |                       | [https://site2.moralis-nodes.com/base-sepolia/](https://site2.moralis-nodes.com/base-sepolia/) |

## Supported RPC Methods

<ul>
  <li>
    <a href="/rpc-nodes/reference/eth_blockNumber">eth_blockNumber</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_call">eth_call</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_chainId">eth_chainId</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_createAccessList">eth_createAccessList</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_estimateGas">eth_estimateGas</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_feeHistory">eth_feeHistory</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_gasPrice">eth_gasPrice</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getBalance">eth_getBalance</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getBlockByHash">eth_getBlockByHash</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getBlockByNumber">eth_getBlockByNumber</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getBlockTransactionCountByHash">eth_getBlockTransactionCountByHash</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getBlockTransactionCountByNumber">eth_getBlockTransactionCountByNumber</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getBlockReceipts">eth_getBlockReceipts</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getCode">eth_getCode</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getLogs">eth_getLogs</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getProof">eth_getProof</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getStorageAt">eth_getStorageAt</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getTransactionByHash">eth_getTransactionByHash</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getTransactionByBlockHashAndIndex">eth_getTransactionByBlockHashAndIndex</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getTransactionByBlockNumberAndIndex">eth_getTransactionByBlockNumberAndIndex</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getTransactionCount">eth_getTransactionCount</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getTransactionReceipt">eth_getTransactionReceipt</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getUncleByBlockHashAndIndex">eth_getUncleByBlockHashAndIndex</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getUncleByBlockNumberAndIndex">eth_getUncleByBlockNumberAndIndex</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getUncleCountByBlockHash">eth_getUncleCountByBlockHash</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_getUncleCountByBlockNumber">eth_getUncleCountByBlockNumber</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_maxPriorityFeePerGas">eth_maxPriorityFeePerGas</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/eth_sendRawTransaction">eth_sendRawTransaction</a>
  </li>
</ul>

## Supported Extended RPC Methods

<ul>
  <li>
    <a href="/rpc-nodes/reference/extended-rpc/eth_getTransactions">eth_getTransactions</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/extended-rpc/eth_getDecodedTransactions">eth_getDecodedTransactions</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/extended-rpc/eth_getTokenBalances">eth_getTokenBalances</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/extended-rpc/eth_getTokenPrice">eth_getTokenPrice</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/extended-rpc/eth_getTokenMetadata">eth_getTokenMetadata</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/extended-rpc/eth_getNFTBalances">eth_getNFTBalances</a>
  </li>
  <li>
    <a href="/rpc-nodes/reference/extended-rpc/eth_getNFTCollections">eth_getNFTCollections</a>
  </li>
</ul>
