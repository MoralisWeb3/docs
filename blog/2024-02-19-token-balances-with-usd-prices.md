---
title: "Token Balances & USD Prices"
slug: "token-balances-with-usd-prices"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

We've launched a new endpoint for fetching [ERC20 tokens by wallet](/web3-data-api/evm/reference/get-wallet-token-balances-price) which includes token balances, metadata, USD prices and a whole lot more for every token 🤩

<!-- truncate -->

Compared to our regular token balances endpoint, this endpoint includes the following extra data points per token:

- `balance_formatted`: decimal formatted balance
- `usd_price`: current price of the token
- `usd_price_24hr_percent_change`: 24hr change as a percentage
- `usd_price_24hr_usd_change`: 24hr change in usd value
- `usd_value`: the value of the wallet's holdings
- `usd_value_24hr_usd_change`: 24hr change in value of the wallet's holdings
- `portfolio_percentage`: the percentage that this token represents of the wallet's token portfolio
- `native_token`: this can be `true` or `false` and is used to identify the chain's native token

It also includes some powerful new query parameters:
- `exclude_spam`: when set to `true` this will exclude all tokens marked as spam from the response (defaults to `false`)
- `exclude_unverified_contracts`: when set to `true` this will exclude all tokens that are not verified on Coingecko (defaults to `false`)
- `exclude_native`: when set to `true` this will exclude the chain's native token from the holdings (defaults to `false`)

Check-out the [API reference for more information](/web3-data-api/evm/reference/get-wallet-token-balances-price), and see this endpoint in action over [on our YouTube channel](https://www.youtube.com/watch?v=doEBbQklDUE&).
