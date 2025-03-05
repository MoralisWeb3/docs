---
title: "Token API"
sidebar_label: "Token API"
slug: "../token-api"
sidebar_class_name: "sidebar-token-api"
sidebar_position: 0
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

Select what you want to achieve:

- [Get Token Metadata](#get-token-metadata)
- [Get Token Balances](#get-token-balances)
- [Get Token Swaps](#get-token-swaps)
- [Get Pairs & Liquidity](#get-pairs--liquidity)
- [Get Token Analytics](#get-token-analytics)
- [Get Token Prices](#get-token-prices)
- [Get Token Snipers](#get-token-snipers)
- [Get Filtered Tokens](#get-filtered-tokens)
- [Get Trending Tokens](#get-trending-tokens)
- [Search Tokens](#search-tokens)

### Get Token Metadata

| No. | Method             | Description        | API Reference                                                              | URL                                                                                                                                      |
| --- | ------------------ | ------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getTokenMetadata` | Get token metadata | [Method Documentation](/web3-data-api/solana/reference/get-token-metadata) | [https://solana-gateway.moralis.io/token/:network/:address/metadata](https://solana-gateway.moralis.io/token/:network/:address/metadata) |

### Get Token Balances

| No. | Method         | Description                  | API Reference                                                             | URL                                                                                                                                            |
| --- | -------------- | ---------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | `getSPL`       | Get token balance by wallet  | [Method Documentation](/web3-data-api/solana/reference/get-spl)           | [https://solana-gateway.moralis.io/account/:network/:address/tokens](https://solana-gateway.moralis.io/account/:network/:address/tokens)       |
| 3   | `balance`      | Get native balance by wallet | [Method Documentation](/web3-data-api/solana/reference/sol-balance)       | [https://solana-gateway.moralis.io/account/:network/:address/balance](https://solana-gateway.moralis.io/account/:network/:address/balance)     |
| 4   | `getPortfolio` | Get portfolio by wallet      | [Method Documentation](/web3-data-api/solana/reference/get-sol-portfolio) | [https://solana-gateway.moralis.io/account/:network/:address/portfolio](https://solana-gateway.moralis.io/account/:network/:address/portfolio) |

### Get Token Swaps

| No. | Method                    | Description                 | API Reference                                                                       | URL                                                                                                                                                    |
| --- | ------------------------- | --------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 5   | `getSwapsByPairAddress`   | Get swaps by pair address   | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-pair-address)   | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps) |
| 6   | `getSwapsByWalletAddress` | Get swaps by wallet address | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-wallet-address) | [https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps](https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps)           |
| 7   | `getSwapsByTokenAddress`  | Get swaps by token address  | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-token-address)  | [https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps](https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps)     |

### Get Pairs & Liquidity

| No. | Method                        | Description                          | API Reference                                                                           | URL                                                                                                                                                    |
| --- | ----------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8   | `getTokenPairs`               | Get token pairs by address           | [Method Documentation](/web3-data-api/solana/reference/get-token-pairs-by-address)      | [https://solana-gateway.moralis.io/token/:network/:address/pairs](https://solana-gateway.moralis.io/token/:network/:address/pairs)                     |
| 9   | `getTokenPairStats`           | Get token pair statistics            | [Method Documentation](/web3-data-api/solana/reference/get-token-pair-stats)            | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/stats](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/stats) |
| 10  | `getAggregatedTokenPairStats` | Get aggregated token pair statistics | [Method Documentation](/web3-data-api/solana/reference/get-aggregated-token-pair-stats) | [https://solana-gateway.moralis.io/token/:network/:address/pairs/stats](https://solana-gateway.moralis.io/token/:network/:address/pairs/stats)         |

### Get Token Analytics

| No. | Method                      | Description                  | API Reference                                                                        | URL                                                                                                                                  |
| --- | --------------------------- | ---------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 11  | `getTokenAnalytics`         | Get token analytics          | [Method Documentation](/web3-data-api/solana/reference/get-token-analytics)          | [https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics](https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics) |
| 12  | `getMultipleTokenAnalytics` | Get multiple token analytics | [Method Documentation](/web3-data-api/solana/reference/get-multiple-token-analytics) | [https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics](https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics) |

### Get Token Prices

| No. | Method            | Description                            | API Reference                                                                     | URL                                                                                                                                                    |
| --- | ----------------- | -------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 13  | `getTokenPrice`   | Get token price                        | [Method Documentation](/web3-data-api/solana/reference/get-sol-token-price)       | [https://solana-gateway.moralis.io/token/:network/:address/price](https://solana-gateway.moralis.io/token/:network/:address/price)                     |
| 14  | `getCandleSticks` | Get OHLCV candlesticks by pair address | [Method Documentation](/web3-data-api/solana/reference/get-ohlcv-by-pair-address) | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv) |

### Get Token Snipers

| No. | Method                    | Description                 | API Reference                                                                       | URL                                                                                                                                                        |
| --- | ------------------------- | --------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | `getSnipersByPairAddress` | Get snipers by pair address | [Method Documentation](/web3-data-api/solana/reference/get-snipers-by-pair-address) | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/snipers](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/snipers) |

### Get Filtered Tokens

| No. | Method              | Description         | API Reference                                                               | URL                                                                                                                |
| --- | ------------------- | ------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 16  | `getFilteredTokens` | Get filtered tokens | [Method Documentation](/web3-data-api/solana/reference/get-filtered-tokens) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens](https://deep-index.moralis.io/api/v2.2/discovery/tokens) |

### Get Trending Tokens

| No. | Method              | Description         | API Reference                                                            | URL                                                                                                              |
| --- | ------------------- | ------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 17  | `getTrendingTokens` | Get trending tokens | [Method Documentation](/web3-data-api/evm/reference/get-trending-tokens) | [https://deep-index.moralis.io/api/v2.2/tokens/trending](https://deep-index.moralis.io/api/v2.2/tokens/trending) |

### Search Tokens

| No. | Method         | Description   | API Reference                                                         | URL                                                                                                          |
| --- | -------------- | ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 18  | `searchTokens` | Search tokens | [Method Documentation](/web3-data-api/solana/reference/search-tokens) | [https://deep-index.moralis.io/api/v2.2/tokens/search](https://deep-index.moralis.io/api/v2.2/tokens/search) |
