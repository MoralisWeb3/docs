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

