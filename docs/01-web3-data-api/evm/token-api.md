---
title: "Overview"
slug: "/web3-data-api/evm/token-api"
description: "Fetch real-time ERC20 token data into your applications with Moralis's powerful cross-chain Token API, providing seamless access to price, ownership and transfer data."
sidebar_position: 1
sidebar_class_name: "sidebar-token-api"
---

The **Moralis Token API** enables Web3 developers to build and scale dapps quickly and efficiently. Access all the information you need for any ERC20 tokens from multiple blockchains.

## Token API features

The Token API provides out-of-the-box functionality for the most popular features when working with ERC20s, including:

- Fetching ERC20 prices (native and USD)
- Fetching ERC20 owned by a given wallet
- Fetching ERC20 balances for a given wallet
- Fetching ERC20 transfers for a given wallet
- Tracking tokens at various lifecycle stages on decentralized exchanges
- Monitoring newly launched tokens, bonding tokens, and graduated tokens
- Support for all ERC20 tokens
- Real-time ERC20 token price discovery and metadata

Plus so much more!

## Get Tokens by Exchange APIs

Our newly launched Get Tokens by Exchange feature allows you to track tokens at different stages of their lifecycle on decentralized exchanges. Currently supporting tama.meme as the initial DEX, these APIs enable you to:

| API                                                                                   | Description                                                           |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [Get Newly Launched Tokens](/web3-data-api/evm/reference/get-new-tokens-by-exchange)  | Retrieve a list of newly created tokens on a specific exchange        |
| [Get Bonding Tokens](/web3-data-api/evm/reference/get-bonding-tokens-by-exchange)     | Access tokens currently in bonding curve phase on a specific exchange |
| [Get Graduated Tokens](/web3-data-api/evm/reference/get-graduated-tokens-by-exchange) | List tokens that have graduated from bonding curve to full trading    |
| [Get Token Bonding Status](/web3-data-api/evm/reference/get-token-bonding-status)     | Check the bonding curve status and progress for a specific token      |

These endpoints provide comprehensive data including token metadata, current prices, liquidity metrics, fully diluted valuation, and exchange-specific information such as bonding curve progress and graduation timestamps.

## Popular use cases

The Token API is extremely flexible, meaning it can support a wide range of use cases, including:

- Live Price Feeds
- Portfolio Apps
- Transaction Monitoring
- Ownership Verification
- New Token Discovery
- Bonding Curve Analysis
- DEX Token Lifecycle Tracking

## API Reference

| Method                                                                                        | Description                                         |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [getTokenPrice](/web3-data-api/evm/reference/get-token-price)                                 | Get the token price                                 |
| [getMultipleTokenPrices](/web3-data-api/evm/reference/get-multiple-token-prices)              | Get multiple token prices                           |
| [getTokenMetadata](/web3-data-api/evm/reference/get-token-metadata)                           | Get the token metadata                              |
| [getTokenMetadataBySymbol](/web3-data-api/evm/reference/get-token-metadata-by-symbol)         | Get the token metadata by symbol                    |
| [getTokenAllowance](/web3-data-api/evm/reference/get-token-allowance)                         | Get the token allowance                             |
| [getWalletTokenBalances](/web3-data-api/evm/reference/get-wallet-token-balances)              | Get the token balances by wallet                    |
| [getWalletTokenTransfers](/web3-data-api/evm/reference/get-wallet-token-transfers)            | Get the token transfers by wallet                   |
| [getTokenTransfers](/web3-data-api/evm/reference/get-token-transfers)                         | Get the token transfers by contract                 |
| [getTokenStats](/web3-data-api/evm/reference/get-token-stats)                                 | Get the token stats                                 |
| [getTokenAnalytics](/web3-data-api/evm/reference/get-token-analytics)                         | Get comprehensive token analytics                   |
| [getNewTokensByExchange](/web3-data-api/evm/reference/get-new-tokens-by-exchange)             | Get newly launched tokens on an exchange            |
| [getBondingTokensByExchange](/web3-data-api/evm/reference/get-bonding-tokens-by-exchange)     | Get tokens in bonding curve phase on an exchange    |
| [getGraduatedTokensByExchange](/web3-data-api/evm/reference/get-graduated-tokens-by-exchange) | Get tokens graduated to full trading on an exchange |
| [getTokenBondingStatus](/web3-data-api/evm/reference/get-token-bonding-status)                | Get bonding status for a specific token             |

## Supported chains

Moralis Token APIs are continuously adding new chains and integrations.

:::tip
Please, check the [full list of supported chains](/supported-chains).
:::
