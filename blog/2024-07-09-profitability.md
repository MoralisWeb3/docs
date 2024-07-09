---
title: "Wallet & Token Profitability"
slug: "profitability"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we've launched our new Realized Profit and Loss (PnL) feature, designed to provide comprehensive insights into wallet and token profitability. 🎉 

These new endpoints will make it easier than ever to track and analyze your profits and losses across various tokens, as well as allow you to identify the most profitable wallets for a given ERC20 token. 🤩

### New Endpoints
- **[Wallet PnL Summary](https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getWalletProfitabilitySummary):** This endpoint provides an overall profitability summary for a given wallet over a specified timeframe. It includes total profit or loss and other key metrics.
- **[Wallet PnL](https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getWalletProfitability):** This endpoint offers a detailed breakdown of buys, sells, and profit/loss for each token traded by a given wallet. It helps you understand the performance of individual tokens in your portfolio.
- **[Top Profitable Wallets by Token](https://deep-index.moralis.io/api-docs-2.2/#/Token/getTopProfitableWalletPerToken):** This endpoint returns the top profitable wallets that have traded a specific token, giving insights into the most successful traders for that token.

### Supported Chains
This initial release supports the following chains:
- Ethereum
- Polygon
- Base

More chain support is coming soon!

For detailed information on how these endpoints work, please visit our [FAQs page](/web3-data-api/evm/profitability-faqs).
