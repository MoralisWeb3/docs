---
title: "Binance Smart Chain JSON RPC API"
slug: "/rpc-nodes/binance-smart-chain-json-rpc-api"
sidebar_label: BSC JSON RPC API
sidebar_position: 2
---

# Binance Smart Chain JSON RPC API

## Introduction

Binance Smart Chain (BSC) is a blockchain network built for running smart contract–based applications. BSC is compatible with the Ethereum Virtual Machine (EVM), which allows Ethereum dApps and tools to be easily ported over. The network is known for its fast transactions and low fees, making it ideal for decentralized finance (DeFi), decentralized exchanges (DEXs), and other blockchain applications.

## Supported Networks

The Binance Smart Chain RPC API is available for the following networks:

1. **Binance Smart Chain Mainnet**
2. **Binance Smart Chain Testnet**

## Network Details

| Network                         | Chain ID  | EVM Chain            | RPC URLs                                                                                     |
| ------------------------------- | --------- | -------------------- | -------------------------------------------------------------------------------------------- |
| **Binance Smart Chain Mainnet** | 0x38 (56) | EvmChain.BSC         | [https://site1.moralis-nodes.com/bsc/](https://site1.moralis-nodes.com/bsc/)                 |
|                                 |           |                      | [https://site2.moralis-nodes.com/bsc/](https://site2.moralis-nodes.com/bsc/)                 |
| **Binance Smart Chain Testnet** | 0x61 (97) | EvmChain.BSC_TESTNET | [https://site1.moralis-nodes.com/bsc-testnet/](https://site1.moralis-nodes.com/bsc-testnet/) |
|                                 |           |                      | [https://site2.moralis-nodes.com/bsc-testnet/](https://site2.moralis-nodes.com/bsc-testnet/) |

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
