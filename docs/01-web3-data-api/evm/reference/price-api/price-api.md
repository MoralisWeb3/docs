---
title: "Price API"
sidebar_label: "Price API"
slug: "../price-api"
sidebar_class_name: "sidebar-price-api"
sidebar_position: 4
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

Select what you want to achieve:

- [Get Token Prices](#get-token-prices)
- [Get NFT Prices](#get-nft-prices)

### Get NFT Prices

| No. | Method                                 | Description                                | API Reference                                                                                         | URL                                                                                                                                                      |
| --- | -------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getNFTFloorPriceByContract`           | Get NFT floor price by contract            | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-floor-price-by-contract)            | [https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price](https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price)                       |
| 2   | `getNFTFloorPriceByToken`              | Get NFT floor price by token               | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-floor-price-by-token)               | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/floor-price](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/floor-price)   |
| 3   | `getNFTHistoricalFloorPriceByContract` | Get historical NFT floor price by contract | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-historical-floor-price-by-contract) | [https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price/historical](https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price/historical) |
| 4   | `getNFTContractSalePrices`             | Get contract sale prices                   | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-contract-sale-prices)               | [https://deep-index.moralis.io/api/v2.2/nft/:address/price](https://deep-index.moralis.io/api/v2.2/nft/:address/price)                                   |
| 5   | `getNFTSalePrices`                     | Get sale prices                            | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-sale-prices)                        | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price)               |
| 6   | `getNFTLowestPrice`                    | Get lowest price                           | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-lowest-price)                       | [https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice](https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice)                       |

### Get Token Prices

| No. | Method                   | Description               | API Reference                                                                        | URL                                                                                                                        |
| --- | ------------------------ | ------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 7   | `getTokenPrice`          | Get ERC20 token price     | [Method Documentation](/web3-data-api/evm/reference/price/get-token-price)           | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price) |
| 8   | `getMultipleTokenPrices` | Get multiple token prices | [Method Documentation](/web3-data-api/evm/reference/price/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)                 |
