---
title: "Market Data API"
sidebar_label: "Overview"
sidebar_class_name: "sidebar-market-data-api"
sidebar_position: 0
slug: "/market-insights-api/reference/market-data-api/overview"
---

The **Market Data API** allows you to explore the latest trends in NFT collections, keep an eye on the top coins, and monitor the largest ERC20 gainers and losers. We're introducing four new endpoints with this launch, including:

| No. | Method                                   | Description                                | API Reference                                                                                                                             | URL                                                                       |
|-----|------------------------------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 1   | `getTopERC20TokensByMarketCap`           | Get the top ERC20 tokens by market cap     | [Method Documentation](/market-insights-api/reference/get-top-erc20-tokens-by-market-cap) | [https://deep-index.moralis.io/api/v2.2/market-data/erc20s/top-tokens](https://deep-index.moralis.io/api/v2.2/market-data/erc20s/top-tokens)                     |
| 2   | `getTopERC20TokensByPriceChange`         | Get the top ERC20 tokens by price change   | [Method Documentation](/market-insights-api/reference/get-top-erc20-tokens-by-price-movers) | [https://deep-index.moralis.io/api/v2.2/market-data/erc20s/top-movers](https://deep-index.moralis.io/api/v2.2/market-data/erc20s/top-movers)                     |
| 3   | `getTopNFTCollectionsByMarketCap`        | Get the top NFT collections by market cap  | [Method Documentation](/market-insights-api/reference/get-top-nft-collections-by-market-cap) | [https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections](https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections)                     |
| 4   | `getTopNFTCollectionsByTradingVolume`    | Get the top NFT collections by trading volume | [Method Documentation](/market-insights-api/reference/get-top-nft-collections-by-trading-volume) | [https://deep-index.moralis.io/api/v2.2/market-data/nfts/hottest-collections](https://deep-index.moralis.io/api/v2.2/market-data/nfts/hottest-collections)                     |


## Example use cases

The use cases for our NFT API are truly endless! Some popular use cases include:

- Display trending NFT collections as part of an NFT Marketplace
- Display top NFT collections by market cap as part of a Wallet dapp
- Display the top ERC20s by market cap as part of a Dex
- Display the top movers (gainers and losers) as part of a Wallet dapp

## Supported chains

Our initial launch only supports Ethereum. Future chains will be coming!

| Chain Name        | Chain Id (HEX) | Chain Id (INT) |
| ----------------- | -------------- | -------------- |
| eth               | 0x1            | 1              |

## How often is the data refreshed?
All endpoints are refreshed on an hourly basis and report on the last 24 hours of data.

## Is the Market Data API available on all plans?
No, this set of endpoints is not available to users on our free plan (requires Pro plan or above).

## Feature requests or feedback
We would welcome your feature requests or feedback on how we can improve the next iteration of our Market Data API. Please submit all feedback here: https://moralis.typeform.com/to/fcCh9UEC
