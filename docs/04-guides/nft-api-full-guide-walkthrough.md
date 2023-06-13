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

### Get NFTs API

The [Get NFTs API](/web3-data-api/evm/reference/get-multiple-nfts) is a collection of [NFT API](https://moralis.io/api/nft/) that provides developer with.

This API category comprised of 4 APIs:

| API Name                                                          | Path                 | Use Cases |
| ----------------------------------------------------------------- | -------------------- | --------- |
| [getMultipleNFTs](/web3-data-api/evm/reference/get-multiple-nfts) | /nft/getMultipleNFTs |           |
| [getWalletNFTs](/web3-data-api/evm/reference/get-wallet-nfts)     | /{address}/nft       |           |
| [getContractNFTs](/web3-data-api/evm/reference/get-contract-nfts) | /nft/{address}       |           |
| [searchNFTs](/web3-data-api/evm/reference/search-nfts)            | /nft/search          |           |

### Get NFT Transfers API

This API category comprised of 5 APIs:

| API Name                                                                                   | Path                                        | Use Cases |
| ------------------------------------------------------------------------------------------ | ------------------------------------------- | --------- |
| [getWalletNFTTransfers](/web3-data-api/evm/reference/get-wallet-nft-transfers)             | /{address}/nft/transfers                    |           |
| [getNFTContractTransfers](/web3-data-api/evm/reference/get-nft-contract-transfers)         | /nft/{address}/transfers                    |           |
| [getNFTTransfersFromToBlock](/web3-data-api/evm/reference/get-nft-transfers-from-to-block) | /nft/transfers                              |           |
| [getNFTTransfersByBlock](/web3-data-api/evm/reference/get-nft-transfers-by-block)          | /block/{block_number_or_hash}/nft/transfers |           |
| [getNFTTransfers](/web3-data-api/evm/reference/get-nft-transfers)                          | /nft/{address}/{token_id}/transfers         |           |

### Get NFT Collections API

This API category comprised of 3 APIs:

| API Name                                                                           | Path                       | Use Cases |
| ---------------------------------------------------------------------------------- | -------------------------- | --------- |
| [getWalletNFTCollections](/web3-data-api/evm/reference/get-wallet-nft-collections) | /{address}/nft/collections |           |
| [getNFTContractMetadata](/web3-data-api/evm/reference/get-nft-contract-metadata)   | /nft/{address}/metadata    |           |
| [syncNFTContract](/web3-data-api/evm/reference/sync-nft-contract)                  | /nft/{address}/sync        |           |

### Get NFT Owners API

This API category comprised of 2 APIs:

| API Name                                                                    | Path                             | Use Cases                                                   |
| --------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------- |
| [getNFTOwners](/web3-data-api/evm/reference/get-nft-owners)                 | /nft/{address}/owners            | Fetch all the token holders/owners of a given NFT `address` |
| [getNFTTokenIdOwners](/web3-data-api/evm/reference/get-nft-token-id-owners) | /nft/{address}/{token_id}/owners |                                                             |

### Get NFT Market Data API

This API category comprised of 2 APIs:

| API Name                                                               | Path                       | Use Cases |
| ---------------------------------------------------------------------- | -------------------------- | --------- |
| [getNFTTrades](/web3-data-api/evm/reference/get-nft-trades)            | /nft/{address}/trades      |           |
| [getNFTLowestPrice](/web3-data-api/evm/reference/get-nft-lowest-price) | /nft/{address}/lowestprice |           |

### Get NFT Metadata API

This API comprised of 2 APIs:

| API Name                                                        | Path                                     | Use Cases                                                               |
| --------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| [getNFTMetadata](/web3-data-api/evm/reference/get-nft-metadata) | /nft/{address}/{token_id}                | Fetch the metadata a specific NFT with a given `address` and `token_id` |
| [reSyncMetadata](/web3-data-api/evm/reference/resync-metadata)  | nft/{address}/{token_id}/metadata/resync | Resync/Update NFT metadata to its latest, if it dynamically changes     |

## How to get started?

To get started with [Moralis NFT API](https://moralis.io/api/nft/), there are two methods that can be used, depending on the programming language that you are using:

| Programming Languages                 | Method       |
| ------------------------------------- | ------------ |
| JavaScript/TypeScript, Python         | Moralis SDKs |
| Others (e.g. Java, C/C++, Ruby, etc.) | REST API     |

For this guide, we'll particularly use the Moralis SDK for examples.

If you would like to use other languages calling the Moralis NFT API using regular REST API call, then make sure to check the [NFT API reference pages](/web3-data-api/evm/reference/get-multiple-nfts) to get all the parameters and responses type.

### Step 1: Install the Moralis SDK

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

### Step 2: Add to Your Code

### Step 3: Going Live!

Once you have all your code set and functioning properly, it's time to push your code to production.

Before doing so, make sure that your API key is stored in a secure place. The best practice for this will be:

- Storing your API key in an environment variable (secrets) `process.env`
- Have your API called on the backend. While it is possible to call the NFT API on the fronted, it is highly discouraged as it can easily reveal your API key on the browser.

Once everything checks out, your app is good to go live with [Moralis NFT API](https://moralis.io/api/nft/)! 🚀
