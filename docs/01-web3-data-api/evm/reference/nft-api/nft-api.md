---
title: "NFT API"
sidebar_label: "NFT API"
slug: "../nft-api"
sidebar_class_name: "sidebar-nft-api"
sidebar_position: 2
---

Select what you want to achieve:


- <a href="#get-nfts">Get NFTs</a>
- <a href="#get-nft-metadata">Get NFT Metadata</a>
- <a href="#get-nft-transfers">Get NFT Transfers</a>
- <a href="#get-nft-collections">Get NFT Collections</a>
- <a href="#get-nft-owners">Get NFT Owners</a>
- <a href="#get-nft-prices">Get NFT Prices</a>
- <a href="#get-nft-trades">Get NFT Trades</a>
- <a href="#get-nft-stats">Get NFT Stats</a>
- <a href="#get-nft-traits-and-rarity">Get NFT Traits and Rarity</a>
- <a href="#get-trending-nfts">Get Trending NFTs</a>


### Get NFTs

| No. | Method            | Description          | API Reference                                                          | URL                                                                                                                      | Spam Detection |
| --- | ----------------- | -------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 1   | `getWalletNFTs`   | Get NFTs by wallet   | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nfts)   | [https://deep-index.moralis.io/api/v2.2/:address/nft](https://deep-index.moralis.io/api/v2.2/:address/nft)               | ✅             |
| 2   | `getMultipleNFTs` | Get multiple NFTs    | [Method Documentation](/web3-data-api/evm/reference/get-multiple-nfts) | [https://deep-index.moralis.io/api/v2.2/nft/getMultipleNFTs](https://deep-index.moralis.io/api/v2.2/nft/getMultipleNFTs) | ✅             |
| 3   | `getContractNFTs` | Get NFTs by contract | [Method Documentation](/web3-data-api/evm/reference/get-contract-nfts) | [https://deep-index.moralis.io/api/v2.2/nft/:address](https://deep-index.moralis.io/api/v2.2/nft/:address)               | ✅             |

### Get NFT Metadata

| No. | Method           | Description     | API Reference                                                         | URL                                                                                                                                                            | Spam Detection |
| --- | ---------------- | --------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 4   | `reSyncMetadata` | Resync metadata | [Method Documentation](/web3-data-api/evm/reference/resync-metadata)  | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync) |                |
| 5   | `getNFTMetadata` | Get NFT data    | [Method Documentation](/web3-data-api/evm/reference/get-nft-metadata) | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id)                                 |                |

### Get NFT Transfers

| No. | Method                    | Description                            | API Reference                                                                   | URL                                                                                                                                                | Spam Detection |
| --- | ------------------------- | -------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 6   | `getWalletNFTTransfers`   | Get transfers by wallet                | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nft-transfers)   | [https://deep-index.moralis.io/api/v2.2/:address/nft/transfers](https://deep-index.moralis.io/api/v2.2/:address/nft/transfers)                     | ✅             |
| 7   | `getNFTContractTransfers` | Get transfers by contract              | [Method Documentation](/web3-data-api/evm/reference/get-nft-contract-transfers) | [https://deep-index.moralis.io/api/v2.2/nft/:address/transfers](https://deep-index.moralis.io/api/v2.2/nft/:address/transfers)                     | ✅             |
| 8   | `getNFTTransfers`         | Get transfers by contract and token ID | [Method Documentation](/web3-data-api/evm/reference/get-nft-transfers)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers) | ✅             |

### Get NFT Collections

| No. | Method                    | Description               | API Reference                                                                   | URL                                                                                                                                | Spam Detection |
| --- | ------------------------- | ------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 9   | `getWalletNFTCollections` | Get collections by wallet | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nft-collections) | [https://deep-index.moralis.io/api/v2.2/:address/nft/collections](https://deep-index.moralis.io/api/v2.2/:address/nft/collections) | ✅             |
| 10  | `getNFTContractMetadata`  | Get contract metadata     | [Method Documentation](/web3-data-api/evm/reference/get-nft-contract-metadata)  | [https://deep-index.moralis.io/api/v2.2/nft/:address/metadata](https://deep-index.moralis.io/api/v2.2/nft/:address/metadata)       | ✅             |
| 11  | `syncNFTContract`         | Sync NFT contract         | [Method Documentation](/web3-data-api/evm/reference/sync-nft-contract)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/sync](https://deep-index.moralis.io/api/v2.2/nft/:address/sync)               |                |

### Get NFT Owners

| No. | Method                | Description         | API Reference                                                                | URL                                                                                                                                          | Spam Detection |
| --- | --------------------- | ------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 12  | `getNFTOwners`        | Get NFT owners      | [Method Documentation](/web3-data-api/evm/reference/get-nft-owners)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/owners](https://deep-index.moralis.io/api/v2.2/nft/:address/owners)                     | ✅             |
| 13  | `getNFTTokenIdOwners` | Get token ID owners | [Method Documentation](/web3-data-api/evm/reference/get-nft-token-id-owners) | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners) | ✅             |

### Get NFT Prices

| No. | Method                                 | Description                                | API Reference                                                                                   | URL                                                                                                                                                      |
| --- | -------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | `getNFTFloorPriceByContract`           | Get NFT floor price by contract            | [Method Documentation](/web3-data-api/evm/reference/get-nft-floor-price-by-contract)            | [https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price](https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price)                       |
| 15  | `getNFTFloorPriceByToken`              | Get NFT floor price by token               | [Method Documentation](/web3-data-api/evm/reference/get-nft-floor-price-by-token)               | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/floor-price](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/floor-price)   |
| 16  | `getNFTHistoricalFloorPriceByContract` | Get historical NFT floor price by contract | [Method Documentation](/web3-data-api/evm/reference/get-nft-historical-floor-price-by-contract) | [https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price/historical](https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price/historical) |
| 17  | `getNFTContractSalePrices`             | Get contract sale prices                   | [Method Documentation](/web3-data-api/evm/reference/get-nft-contract-sale-prices)               | [https://deep-index.moralis.io/api/v2.2/nft/:address/price](https://deep-index.moralis.io/api/v2.2/nft/:address/price)                                   |
| 18  | `getNFTSalePrices`                     | Get sale prices                            | [Method Documentation](/web3-data-api/evm/reference/get-nft-sale-prices)                        | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price)               |

### Get NFT Trades

| No. | Method                 | Description          | API Reference                                                                 | URL                                                                                                                                          | Spam Detection |
| --- | ---------------------- | -------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 19  | `getNFTTrades`         | Get NFT trades       | [Method Documentation](/web3-data-api/evm/reference/get-nft-trades)           | [https://deep-index.moralis.io/api/v2.2/nft/:address/trades](https://deep-index.moralis.io/api/v2.2/nft/:address/trades)                     | ✅             |
| 20  | `getNFTTradesByToken`  | Get trades by token  | [Method Documentation](/web3-data-api/evm/reference/get-nft-trades-by-token)  | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/trades](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/trades) |                |
| 21  | `getNFTTradesByWallet` | Get trades by wallet | [Method Documentation](/web3-data-api/evm/reference/get-nft-trades-by-wallet) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades](https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades)   |                |

### Get NFT Stats

| No. | Method                  | Description          | API Reference                                                                 | URL                                                                                                                    | Spam Detection |
| --- | ----------------------- | -------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------- |
| 22  | `getNFTCollectionStats` | Get collection stats | [Method Documentation](/web3-data-api/evm/reference/get-nft-collection-stats) | [https://deep-index.moralis.io/api/v2.2/nft/:address/stats](https://deep-index.moralis.io/api/v2.2/nft/:address/stats) |                |

### Get NFT Traits and Rarity

| No. | Method                             | Description                                                             | API Reference                                                                              | URL                                                                                                                                        | Spam Detection |
| --- | ---------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 23  | `getNFTTraitsByCollection`         | Get NFT traits by collection (single response, limited to 5,000 traits) | [Method Documentation](/web3-data-api/evm/reference/get-nft-traits-by-collection)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/traits](https://deep-index.moralis.io/api/v2.2/nft/:address/traits)                   |                |
| 24  | `getNFTTraitsByCollectionPaginate` | Get NFT traits by collection (paginated, no limit)                      | [Method Documentation](/web3-data-api/evm/reference/get-nft-traits-by-collection-paginate) | [https://deep-index.moralis.io/api/v2.2/nft/:address/traits/paginate](https://deep-index.moralis.io/api/v2.2/nft/:address/traits/paginate) |                |
| 25  | `getNFTsByTraits`                  | Get NFTs by traits                                                      | [Method Documentation](/web3-data-api/evm/reference/get-nfts-by-traits)                    | [https://deep-index.moralis.io/api/v2.2/nft/:address/nfts-by-traits](https://deep-index.moralis.io/api/v2.2/nft/:address/nfts-by-traits)   | ✅             |
| 26  | `resyncNFTTraitsByCollection`      | Resync NFT traits by collection                                         | [Method Documentation](/web3-data-api/evm/reference/resync-nft-traits-by-collection)       | [https://deep-index.moralis.io/api/v2.2/nft/:address/traits/resync](https://deep-index.moralis.io/api/v2.2/nft/:address/traits/resync)     |                |

## Get Trending NFTs

| No. | Method                                | Description                                   | API Reference                                                                                  | URL                                                                                                                                                        |
| --- | ------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | `getTopNFTCollectionsByMarketCap`     | Get the top NFT collections by market cap     | [Method Documentation](/web3-data-api/evm/reference/get-top-nft-collections-by-market-cap)     | [https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections](https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections)         |
| 28  | `getTopNFTCollectionsByTradingVolume` | Get the top NFT collections by trading volume | [Method Documentation](/web3-data-api/evm/reference/get-top-nft-collections-by-trading-volume) | [https://deep-index.moralis.io/api/v2.2/market-data/nfts/hottest-collections](https://deep-index.moralis.io/api/v2.2/market-data/nfts/hottest-collections) |
