---
title: "NFT API - Full Guide & Walkthrough"
slug: "/guides/nft-api-full-guide-walkthrough"
description: "This tutorial teaches you what an NFT API is, what are some of its most common use cases, and how to use it within your tech stack."
tags: [NFT API, Ethereum, Polygon, EVM, ETH NFT API, Polygon NFT API]
---

## What is an NFT API?

![](/img/content/0d1bb91-image.webp)

An [NFT API](https://moralis.io/api/nft/) is a collection of APIs that can be used to index NFT data, e.g. NFT balance, NFT metadata, from multiple [EVM chains](http://localhost:3000/web3-data-api/evm#supported-chains) that we support.

The [NFT API](https://moralis.io/api/nft/) is divided into **6 categories** based on their use cases as follows:

### NFT Stats API

The [NFT Stats API](/web3-data-api/evm/reference/get-multiple-nfts) is a collection of [NFT API](https://moralis.io/api/nft/) that provides developer with.

This API category comprised of 4 APIs:

| API Name                                                          | Path                 | Description | Application                                                         |
| ----------------------------------------------------------------- | -------------------- | ----------- | ------------------------------------------------------------------- |
| [getMultipleNFTs](/web3-data-api/evm/reference/get-multiple-nfts) | /nft/getMultipleNFTs |             | Portfolio Dashboard, Wallets, Token Explorer, NFT-based Games, etc. |
| [getWalletNFTs](/web3-data-api/evm/reference/get-wallet-nfts)     | /{address}/nft       |             | Portfolio Dashboard, Wallets, Token Explorer, NFT-based Games, etc. |
| [getContractNFTs](/web3-data-api/evm/reference/get-contract-nfts) | /nft/{address}       |             | Portfolio Dashboard, Wallets, Token Explorer, NFT-based Games, etc. |
| [searchNFTs](/web3-data-api/evm/reference/search-nfts)            | /nft/search          |             | Portfolio Dashboard, Wallets, Token Explorer, NFT-based Games, etc. |

### NFT Transfers API

This API category comprised of 5 APIs:

| API Name | Path | Description | Application |
| -------- | ---- | ----------- | ----------- |
|          |      |             |             |

### NFT Collections API

This API category comprised of 3 APIs:

| API Name | Path | Description | Application |
| -------- | ---- | ----------- | ----------- |
|          |      |             |             |

### NFT Ownership API

This API category comprised of 2 APIs:

| API Name                                                                    | Path                             | Description | Application |
| --------------------------------------------------------------------------- | -------------------------------- | ----------- | ----------- |
| [getNFTOwners](/web3-data-api/evm/reference/get-nft-owners)                 | /nft/{address}/owners            |             |             |
| [getNFTTokenIdOwners](/web3-data-api/evm/reference/get-nft-token-id-owners) | /nft/{address}/{token_id}/owners |             |             |

### NFT Marketplace API

This API category comprised of 2 APIs:

| API Name | Path | Description | Application |
| -------- | ---- | ----------- | ----------- |
|          |      |             |             |

### NFT Metadata API

This API comprised of 2 APIs:

| API Name | Path | Description | Application |
| -------- | ---- | ----------- | ----------- |
|          |      |             |             |

## How to get started?

To get started with [Moralis NFT API](https://moralis.io/api/nft/), there are two methods that can be used, depending on the programming language that you are using:

| Programming Languages                 | Method       |
| ------------------------------------- | ------------ |
| JavaScript/TypeScript, Python         | Moralis SDKs |
| Others (e.g. Java, C/C++, Ruby, etc.) | REST API     |

### Step 1: Install the Moralis SDK

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

### Step 2: Add to Your Code

### Step 3: Going Live!
