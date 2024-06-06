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

### Get Token Prices

| No. | Method                   | Description               | API Reference                                                                        | URL                                                                                                                        |
| --- | ------------------------ | ------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getTokenPrice`          | Get ERC20 token price     | [Method Documentation](/web3-data-api/evm/reference/price/get-token-price)           | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price) |
| 2   | `getMultipleTokenPrices` | Get multiple token prices | [Method Documentation](/web3-data-api/evm/reference/price/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)                 |

| No. | Method                     | Description              | API Reference                                                                           | URL                                                                                                                                        | Spam Detection |
| --- | -------------------------- | ------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 3   | `getNFTContractSalePrices` | Get contract sale prices | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-contract-sale-prices) | [https://deep-index.moralis.io/api/v2.2/nft/:address/price](https://deep-index.moralis.io/api/v2.2/nft/:address/price)                     |                |
| 4   | `getNFTSalePrices`         | Get sale prices          | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-sale-prices)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price) |                |
| 5   | `getNFTLowestPrice`        | Get lowest price         | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-lowest-price)         | [https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice](https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice)         |                |
