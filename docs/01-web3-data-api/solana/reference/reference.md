---
title: "All Web3 Data Endpoints - Solana"
sidebar_label: "Overview"
slug: "/web3-data-api/solana/reference"
description: "Get started on Moralis Enterprise-Grade Web3 API Reference for Solana."
sidebar_position: 1
sidebar_class_name: "sidebar-api-reference"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />


This section contains a full list of all methods within the Solana Web3 data.

## Full List of APIs by Category

Find your favorite method by selecting one of the following categories:  

* [NFT API](#nft-api)
* [Token API](#token-api)
* [Balance API](#balance-api)

### NFT API

| No. | Method            | Description    | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|-------------------|----------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 1   | `getNFTs`  | Get NFTs by wallet | [Method Documentation](/web3-data-api/solana/reference/get-sol-nfts) | [https://solana-gateway.moralis.io/account/:network/:address/nft](https://solana-gateway.moralis.io/account/:network/:address/nft) |                |
| 2   | `getNFTMetadata`  | Get NFT metadata   | [Method Documentation](/web3-data-api/solana/reference/get-sol-nft-metadata) | [https://solana-gateway.moralis.io/nft/:network/:address/metadata](https://solana-gateway.moralis.io/nft/:network/:address/metadata) |                |

### Token API

| No. | Method            | Description    | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|-------------------|----------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 3   | `getTokenPrice`  | Get token price | [Method Documentation](/web3-data-api/solana/reference/get-sol-token-price) | [https://solana-gateway.moralis.io/token/:network/:address/price](https://solana-gateway.moralis.io/token/:network/:address/price) |                |
| 4   | `getTokenMetadata`  | Get the global token metadata for a given network and contract | [Method Documentation](/web3-data-api/solana/reference/get-token-metadata) | [https://solana-gateway.moralis.io/token/:network/:address/metadata](https://solana-gateway.moralis.io/token/:network/:address/metadata) |                |

### Balance API

| No. | Method            | Description    | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|-------------------|----------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 5   | `balance`  | Get native balance by wallet | [Method Documentation](/web3-data-api/solana/reference/sol-balance) | [https://solana-gateway.moralis.io/account/:network/:address/balance](https://solana-gateway.moralis.io/account/:network/:address/balance) |                |
| 6   | `getSPL`  | Get token balance by wallet   | [Method Documentation](/web3-data-api/solana/reference/get-spl) | [https://solana-gateway.moralis.io/account/:network/:address/tokens](https://solana-gateway.moralis.io/account/:network/:address/tokens) |                |
| 7   | `getPortfolio`  | Gets portfolio by wallet  | [Method Documentation](/web3-data-api/solana/reference/get-sol-portfolio) | [https://solana-gateway.moralis.io/account/:network/:address/portfolio](https://solana-gateway.moralis.io/account/:network/:address/portfolio) |                |
