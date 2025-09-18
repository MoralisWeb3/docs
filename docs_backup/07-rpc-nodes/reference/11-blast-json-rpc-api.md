---
title: "Blast JSON RPC API"
slug: "/rpc-nodes/blast-json-rpc-api"
sidebar_position: 10
---

# Blast JSON RPC API

## Introduction

Blast is a high-performance blockchain network designed for scalable decentralized applications (dApps) and digital assets. With its robust infrastructure, Blast aims to offer fast finality, low transaction fees, and high throughput, making it ideal for developers building decentralized finance (DeFi) applications, gaming platforms, and NFTs. Its architecture ensures seamless compatibility with Ethereum, offering developers an easy path to migrate or build on Blast.

## Supported Networks

The Blast RPC API is available for the following networks:

1. **Blast Mainnet**
2. **Blast Sepolia Testnet**

## Network Details

| Network           | Chain ID              | EVM Chain              | RPC URLs                                                                                         |
| ----------------- | --------------------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Blast Mainnet** | 0x13e31 (81457)       | EvmChain.BLAST         | [https://site1.moralis-nodes.com/blast/](https://site1.moralis-nodes.com/blast/)                 |
|                   |                       |                        | [https://site2.moralis-nodes.com/blast/](https://site2.moralis-nodes.com/blast/)                 |
| **Blast Sepolia** | 0xa0c71fd (168587773) | EvmChain.BLAST_SEPOLIA | [https://site1.moralis-nodes.com/blast-sepolia/](https://site1.moralis-nodes.com/blast-sepolia/) |
|                   |                       |                        | [https://site2.moralis-nodes.com/blast-sepolia/](https://site2.moralis-nodes.com/blast-sepolia/) |

## Supported RPC Methods

- [eth_blockNumber](/rpc-nodes/reference/eth_blockNumber)
- [eth_call](/rpc-nodes/reference/eth_call)
- [eth_chainId](/rpc-nodes/reference/eth_chainId)
- [eth_createAccessList](/rpc-nodes/reference/eth_createAccessList)
- [eth_estimateGas](/rpc-nodes/reference/eth_estimateGas)
- [eth_feeHistory](/rpc-nodes/reference/eth_feeHistory)
- [eth_gasPrice](/rpc-nodes/reference/eth_gasPrice)
- [eth_getBalance](/rpc-nodes/reference/eth_getBalance)
- [eth_getBlockByHash](/rpc-nodes/reference/eth_getBlockByHash)
- [eth_getBlockByNumber](/rpc-nodes/reference/eth_getBlockByNumber)
- [eth_getBlockTransactionCountByHash](/rpc-nodes/reference/eth_getBlockTransactionCountByHash)
- [eth_getBlockTransactionCountByNumber](/rpc-nodes/reference/eth_getBlockTransactionCountByNumber)
- [eth_getBlockReceipts](/rpc-nodes/reference/eth_getBlockReceipts)
- [eth_getCode](/rpc-nodes/reference/eth_getCode)
- [eth_getLogs](/rpc-nodes/reference/eth_getLogs)
- [eth_getProof](/rpc-nodes/reference/eth_getProof)
- [eth_getStorageAt](/rpc-nodes/reference/eth_getStorageAt)
- [eth_getTransactionByHash](/rpc-nodes/reference/eth_getTransactionByHash)
- [eth_getTransactionByBlockHashAndIndex](/rpc-nodes/reference/eth_getTransactionByBlockHashAndIndex)
- [eth_getTransactionByBlockNumberAndIndex](/rpc-nodes/reference/eth_getTransactionByBlockNumberAndIndex)
- [eth_getTransactionCount](/rpc-nodes/reference/eth_getTransactionCount)
- [eth_getTransactionReceipt](/rpc-nodes/reference/eth_getTransactionReceipt)
- [eth_getUncleByBlockHashAndIndex](/rpc-nodes/reference/eth_getUncleByBlockHashAndIndex)
- [eth_getUncleByBlockNumberAndIndex](/rpc-nodes/reference/eth_getUncleByBlockNumberAndIndex)
- [eth_getUncleCountByBlockHash](/rpc-nodes/reference/eth_getUncleCountByBlockHash)
- [eth_getUncleCountByBlockNumber](/rpc-nodes/reference/eth_getUncleCountByBlockNumber)
- [eth_maxPriorityFeePerGas](/rpc-nodes/reference/eth_maxPriorityFeePerGas)
- [eth_sendRawTransaction](/rpc-nodes/reference/eth_sendRawTransaction)
