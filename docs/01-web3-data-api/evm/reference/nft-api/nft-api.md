---
title: "NFT API"
sidebar_label: "NFT API"
slug: "../nft-api"
sidebar_class_name: "sidebar-nft-api"
sidebar_position: 2
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

Select what you want to achieve:

* [Get NFTs](#get-nfts)
* [Get NFT Metadata](#get-nft-metadata)
* [Get NFT Transfers](#get-nft-transfers)
* [Get NFT Collections](#get-nft-collections)
* [Get NFT Owners](#get-nft-owners)
* [Get NFT Market Data](#get-nft-market-data)
* [Get NFT Stats](#get-nft-stats)

### Get NFTs

| No. | Method               | Description           | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|----------------------|-----------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 1   | `getWalletNFTs`      | Get NFTs by wallet    | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nfts) | [https://deep-index.moralis.io/api/v2.2/:address/nft](https://deep-index.moralis.io/api/v2.2/:address/nft) | ✅             |
| 2   | `getMultipleNFTs`    | Get multiple NFTs     | [Method Documentation](/web3-data-api/evm/reference/get-multiple-nfts) | [https://deep-index.moralis.io/api/v2.2/nft/getMultipleNFTs](https://deep-index.moralis.io/api/v2.2/nft/getMultipleNFTs) | ✅             |
| 3   | `getContractNFTs`    | Get NFTs by contract  | [Method Documentation](/web3-data-api/evm/reference/get-contract-nfts) | [https://deep-index.moralis.io/api/v2.2/nft/:address](https://deep-index.moralis.io/api/v2.2/nft/:address) | ✅             |

### Get NFT Metadata

| No. | Method            | Description    | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|-------------------|----------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 4   | `reSyncMetadata`  | Resync metadata | [Method Documentation](/web3-data-api/evm/reference/resync-metadata) | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync) |                |
| 5   | `getNFTMetadata`  | Get NFT data   | [Method Documentation](/web3-data-api/evm/reference/get-nft-metadata) | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id) |                |

### Get NFT Transfers

| No. | Method                         | Description      | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|--------------------------------|------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 6   | `getWalletNFTTransfers`        | Get transfers by wallet | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nft-transfers) | [https://deep-index.moralis.io/api/v2.2/:address/nft/transfers](https://deep-index.moralis.io/api/v2.2/:address/nft/transfers) | ✅             |
| 7   | `getNFTContractTransfers`      | Get transfers by contract | [Method Documentation](/web3-data-api/evm/reference/get-nft-contract-transfers) | [https://deep-index.moralis.io/api/v2.2/nft/:address/transfers](https://deep-index.moralis.io/api/v2.2/nft/:address/transfers) | ✅             |
| 8   | `getNFTTransfersFromToBlock`   | Get transfers from block to block | [Method Documentation](/web3-data-api/evm/reference/get-nft-transfers-from-to-block) | [https://deep-index.moralis.io/api/v2.2/nft/transfers](https://deep-index.moralis.io/api/v2.2/nft/transfers) | ✅             |
| 9   | `getNFTTransfersByBlock`       | Get transfers by block | [Method Documentation](/web3-data-api/evm/reference/get-nft-transfers-by-block) | [https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash/nft/transfers](https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash/nft/transfers) | ✅             |
| 10  | `getNFTTransfers`              | Get transfers by contract and token ID | [Method Documentation](/web3-data-api/evm/reference/get-nft-transfers) | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers) | ✅             |

### Get NFT Collections

| No. | Method                      | Description       | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|-----------------------------|-------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 11  | `getWalletNFTCollections`    | Get collections by wallet | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nft-collections) | [https://deep-index.moralis.io/api/v2.2/:address/nft/collections](https://deep-index.moralis.io/api/v2.2/:address/nft/collections) | ✅             |
| 12  | `getNFTContractMetadata`     | Get contract metadata | [Method Documentation](/web3-data-api/evm/reference/get-nft-contract-metadata) | [https://deep-index.moralis.io/api/v2.2/nft/:address/metadata](https://deep-index.moralis.io/api/v2.2/nft/:address/metadata) | ✅             |
| 13  | `syncNFTContract`            | Sync NFT contract  | [Method Documentation](/web3-data-api/evm/reference/sync-nft-contract) | [https://deep-index.moralis.io/api/v2.2/nft/:address/sync](https://deep-index.moralis.io/api/v2.2/nft/:address/sync)       |                |

### Get NFT Owners

| No. | Method                   | Description             | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|--------------------------|-------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 14  | `getNFTOwners`               | Get NFT owners     | [Method Documentation](/web3-data-api/evm/reference/get-nft-owners) | [https://deep-index.moralis.io/api/v2.2/nft/:address/owners](https://deep-index.moralis.io/api/v2.2/nft/:address/owners) | ✅             |
| 15  | `getNFTTokenIdOwners`    | Get token ID owners      | [Method Documentation](/web3-data-api/evm/reference/get-nft-token-id-owners) | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners) | ✅             |


### Get NFT Market Data

| No. | Method                   | Description             | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|--------------------------|-------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 16  | `getNFTTrades`           | Get NFT trades          | [Method Documentation](/web3-data-api/evm/reference/get-nft-trades) | [https://deep-index.moralis.io/api/v2.2/nft/:address/trades](https://deep-index.moralis.io/api/v2.2/nft/:address/trades) | ✅             |
| 17  | `getNFTLowestPrice`      | Get lowest price         | [Method Documentation](/web3-data-api/evm/reference/get-nft-lowest-price) | [https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice](https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice) |                |


### Get NFT Stats

| No. | Method                   | Description             | API Reference                                                                                              | URL                                                        | Spam Detection |
|-----|--------------------------|-------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|
| 18  | `getNFTCollectionStats`  | Get collection stats     | [Method Documentation](/web3-data-api/evm/reference/get-nft-collection-stats) | [https://deep-index.moralis.io/api/v2.2/nft/:address/stats](https://deep-index.moralis.io/api/v2.2/nft/:address/stats) |                |
| 19  | `getNFTTokenStats`       | Get token stats          | [Method Documentation](/web3-data-api/evm/reference/get-nft-token-stats) | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/stats](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/stats)
