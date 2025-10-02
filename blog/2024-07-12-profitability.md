---
title: "Wallet & Token Profitability (PnL)"
slug: "profitability"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we've launched our new Realized Profit and Loss (PnL) feature, designed to provide comprehensive insights into wallet and token profitability. 🎉 

<!-- truncate -->

These new endpoints will make it easier than ever to track and analyze your profits and losses across various tokens, as well as allow you to identify the most profitable wallets for a given ERC20 token. 🤩

### New Endpoints
- **[Wallet PnL Summary](https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-wallet-profitability-summary?address=0xd8da6bf26964af9d7eed9e03e53415d37aa96045&chain=eth):** This endpoint provides an overall profitability summary for a given wallet over a specified timeframe. It includes total profit or loss and other key metrics.
- **[Wallet PnL Breakdown](https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-wallet-profitability?address=0xd8da6bf26964af9d7eed9e03e53415d37aa96045&chain=eth&token_addresses=[]):** This endpoint offers a detailed breakdown of buys, sells, and profit/loss for each token traded by a given wallet. It helps you understand the performance of individual tokens in your portfolio.
- **[Top Profitable Wallets by Token](https://docs.moralis.io/web3-data-api/evm/reference/get-top-profitable-wallet-per-token?address=0x7c9f4c87d911613fe9ca58b579f737911aad2d43&days=all&chain=eth):** This endpoint returns the top profitable wallets that have traded a specific token, giving insights into the most successful traders for that token.

### Supported Chains
This initial release supports the following chains:
- Ethereum
- Polygon
- Base

More chain support is coming soon!

For detailed information on how these endpoints work, please visit our [FAQs page](/web3-data-api/evm/profitability-faqs).
