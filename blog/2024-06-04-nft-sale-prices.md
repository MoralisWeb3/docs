---
title: "NFT Sale Prices"
slug: "nft-sale-prices"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we've launched two new endpoints allowing you to fetch NFT sale prices by collection and by token id 🤩

<!-- truncate -->

Both of these endpoints provide you with rich insights into the `last_sale`, `lowest_sale`, `highest_sale` and `average_sale` for a given timeframe.

These endpoints are supported across the following NFT Marketplaces:
- OpenSea (Ethereum, Polygon, Binance, Arbitrum, Avalanche, Optimism, Base)
- Blur (Ethereum)
- LooksRare (Ethereum)
- X2Y2 (Ethereum)
- 0xProtocol (Ethereum)

The initial release of these endpoints support native-token sales, with full ERC20-support coming very soon 🚀

Check-out the endpoints on our Swagger:

- [NFT Sale Prices by Contract](https://deep-index.moralis.io/api-docs-2.2/#/NFT/getNFTContractSalePrices)
- [NFT Sale Prices by Token ID](https://deep-index.moralis.io/api-docs-2.2/#/NFT/getNFTSalePrices)
