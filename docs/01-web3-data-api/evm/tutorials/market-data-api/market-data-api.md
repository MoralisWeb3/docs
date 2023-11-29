---
title: "Market Data API Guides"
description: "Fetch trending NFT collections, top ERC20s by market cap, top movers, and much more with the most popular cross-chain Market Data API in Web3."
sidebar_position: 5
sidebar_class_name: "sidebar-market-data-api"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

The **Market Data API** allows you to explore the latest trends in NFT collections, keep an eye on the top coins, and monitor the largest ERC20 gainers and losers. We're introducing four new endpoints with this launch, including:

- [ERC20 top movers](/web3-data-api/evm/reference/get-top-erc20-tokens-by-market-cap)
- [ERC20 top 50 tokens](/web3-data-api/evm/reference/get-top-erc20-tokens-by-price-movers)
- [Top NFT collections by market cap](/web3-data-api/evm/reference/get-top-nft-collections-by-market-cap)
- [Hot NFT collections by trading volume](/web3-data-api/evm/reference/get-top-nft-collections-by-trading-volume)

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
