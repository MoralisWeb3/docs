---
title: "ERC20 Price Enhancements"
slug: "erc20-price-enhancements"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we're excited to announce a number of improvements to our ERC20 price endpoints 🎉

<!-- truncate -->

### Fetch multiple ERC20 prices
We've added a new endpoint, `/erc20/prices`, that allows you to fetch the prices of up to 25 ERC20s in one API call. No more fetching prices one by one 😍

[View docs](/web3-data-api/evm/reference/get-multiple-token-prices)

### 24hr change
We've added `24hrPercentChange` to all of our price endpoints, so you can now easily fetch a token's 24 hour performance. We've introduced a new query parameter, `include=percent_change`, which when included will add `24hrPercentChange` to the response body. Note: using this query parameter incurs an additional cost of +5 CUs per request.

[View docs](/web3-data-api/evm/reference/get-token-price)

### Pretty prices 
No more displaying ugly prices 🫣 We've added `usdPriceFormatted` to our price endpoints meaning you'll always be returned with prices in a nice clean decimal format (for example, `3.0526340931742754e-8` will appear as `0.00000003052`).

[View docs](/web3-data-api/evm/reference/get-token-price)
