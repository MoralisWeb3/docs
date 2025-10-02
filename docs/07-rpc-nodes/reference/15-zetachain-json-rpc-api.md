---
title: "Zetachain JSON RPC API"
slug: "/rpc-nodes/zetachain-json-rpc-api"
sidebar_position: 14
---

# Zetachain JSON RPC API

## Introduction

Zetachain is a Layer 1 blockchain designed for cross-chain interoperability, allowing developers to create decentralized applications (dApps) that interact seamlessly with multiple blockchains. By enabling direct cross-chain messaging and asset transfers, Zetachain eliminates the need for bridges and wrapped assets, providing a more secure and user-friendly solution for decentralized finance (DeFi), NFTs, and multi-chain applications.

## Supported Networks

The Zetachain RPC API is available for the following networks:

1. **Zetachain Mainnet**
2. **Zetachain Testnet**

## Network Details

| Network               | Chain ID      | EVM Chain                  | RPC URLs                                                                                                 |
| --------------------- | ------------- | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Zetachain Mainnet** | 0x1b58 (7000) | EvmChain.ZETACHAIN         | [https://site1.moralis-nodes.com/zetachain/](https://site1.moralis-nodes.com/zetachain/)                 |
|                       |               |                            | [https://site2.moralis-nodes.com/zetachain/](https://site2.moralis-nodes.com/zetachain/)                 |
| **Zetachain Testnet** | 0x1b59 (7001) | EvmChain.ZETACHAIN_TESTNET | [https://site1.moralis-nodes.com/zetachain-testnet/](https://site1.moralis-nodes.com/zetachain-testnet/) |
|                       |               |                            | [https://site2.moralis-nodes.com/zetachain-testnet/](https://site2.moralis-nodes.com/zetachain-testnet/) |

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

