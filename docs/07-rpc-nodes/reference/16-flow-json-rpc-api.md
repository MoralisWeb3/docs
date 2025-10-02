---
title: "Flow JSON RPC API"
slug: "/rpc-nodes/flow-json-rpc-api"
sidebar_position: 15
---

# Flow JSON RPC API

## Introduction

Flow is a fast, decentralized, and developer-friendly blockchain designed to support the next generation of digital assets and applications. It is built to scale without sharding, providing a great developer experience and making it easier to build dApps, NFTs, and games with real-world usability. Flow enables the seamless creation of decentralized applications that prioritize security, scalability, and ease of use.

## Supported Networks

The Flow RPC API is available for the following networks:

1. **Flow Mainnet**
2. **Flow Testnet**

## Network Details

| Network          | Chain ID    | EVM Chain             | RPC URLs                                                                                       |
| ---------------- | ----------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| **Flow Mainnet** | 0x2eb (747) | EvmChain.FLOW         | [https://site1.moralis-nodes.com/flow/](https://site1.moralis-nodes.com/flow/)                 |
|                  |             |                       | [https://site2.moralis-nodes.com/flow/](https://site2.moralis-nodes.com/flow/)                 |
| **Flow Testnet** | 0x221 (545) | EvmChain.FLOW_TESTNET | [https://site1.moralis-nodes.com/flow-testnet/](https://site1.moralis-nodes.com/flow-testnet/) |
|                  |             |                       | [https://site2.moralis-nodes.com/flow-testnet/](https://site2.moralis-nodes.com/flow-testnet/) |

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

