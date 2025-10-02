---
title: "Moonbeam JSON RPC API"
slug: "/rpc-nodes/moonbeam-json-rpc-api"
sidebar_position: 9
---

# Moonbeam JSON RPC API

## Introduction

Moonbeam is a smart contract platform that makes it easy to build native interoperable applications. It is fully Ethereum-compatible, allowing Ethereum developers to use their existing tools and deploy decentralized applications (dApps) with minimal changes. Moonbeam focuses on providing an Ethereum-like environment on Polkadot, ensuring scalability and low transaction costs while maintaining interoperability with other blockchains.

## Supported Networks

The Moonbeam RPC API is available for the following networks:

1. **Moonbeam Mainnet**
2. **Moonriver Testnet**

## Network Details

| Network              | Chain ID     | EVM Chain          | RPC URLs                                                                                 |
| -------------------- | ------------ | ------------------ | ---------------------------------------------------------------------------------------- |
| **Moonbeam Mainnet** | 0x504 (1284) | EvmChain.MOONBEAM  | [https://site1.moralis-nodes.com/moonbeam/](https://site1.moralis-nodes.com/moonbeam/)   |
|                      |              |                    | [https://site2.moralis-nodes.com/moonbeam/](https://site2.moralis-nodes.com/moonbeam/)   |
| **Moonriver**        | 0x505 (1285) | EvmChain.MOONRIVER | [https://site1.moralis-nodes.com/moonriver/](https://site1.moralis-nodes.com/moonriver/) |
|                      |              |                    | [https://site2.moralis-nodes.com/moonriver/](https://site2.moralis-nodes.com/moonriver/) |

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

