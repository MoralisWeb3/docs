---
title: "Ronin JSON RPC API"
slug: "/rpc-nodes/ronin-json-rpc-api"
sidebar_position: 17
---

# Ronin JSON RPC API

## Introduction

Ronin is a blockchain built by Sky Mavis, designed specifically to power Axie Infinity and other decentralized applications (dApps). It provides an easy-to-use experience with low fees, fast transactions, and high security, making it ideal for gaming and NFT applications.

## Supported Networks

The Ronin RPC API is available for the following networks:

1. **Ronin Mainnet**
2. **Ronin Saigon Testnet**

## Network Details

| Network                  | Chain ID     | EVM Chain              | RPC URLs                                                                                         |
| ------------------------ | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Ronin Mainnet**        | 0x7e4 (2020) | EvmChain.RONIN         | [https://site1.moralis-nodes.com/ronin/](https://site1.moralis-nodes.com/ronin/)                 |
|                          |              |                        | [https://site2.moralis-nodes.com/ronin/](https://site2.moralis-nodes.com/ronin/)                 |
| **Ronin Saigon Testnet** | 0x7e5 (2021) | EvmChain.RONIN_TESTNET | [https://site1.moralis-nodes.com/ronin-testnet/](https://site1.moralis-nodes.com/ronin-testnet/) |
|                          |              |                        | [https://site2.moralis-nodes.com/ronin-testnet/](https://site2.moralis-nodes.com/ronin-testnet/) |

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
