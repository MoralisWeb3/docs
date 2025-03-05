---
title: "Solana API"
sidebar_label: "Overview"
slug: "/web3-data-api/solana/reference"
description: "Get started on Moralis Enterprise-Grade Web3 API Reference for Solana."
sidebar_position: 0
sidebar_class_name: "sidebar-api-reference"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

This section contains a full list of all methods within the Solana Web3 data.

:::tip Swagger Interface
https://solana-gateway.moralis.io/api/
:::

## Full List of APIs by Category

Find your favorite method by selecting one of the following categories:

- [Token API](#token-api)
- [Wallet API](#wallet-api)
- [NFT API](#nft-api)
- [Price API](#price-api)

## Token API

Select what you want to achieve:

- [Get Token Metadata](#get-token-metadata)
- [Get Token Balances](#get-token-balances)
- [Get Pump Fun Tokens](#get-pump-fun-tokens)
- [Get Token Swaps](#get-token-swaps)
- [Get Pairs & Liquidity](#get-pairs--liquidity)
- [Get Token Analytics](#get-token-analytics)
- [Get Volume Stats](#get-volume-stats)
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

### Get Pump Fun Tokens

| No. | Method                         | Description                             | API Reference                                                                               | URL                                                                                                                                                                                         |
| --- | ------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | `getNewTokensByExchange`       | Get new tokens by exchange              | [Method Documentation](/web3-data-api/solana/reference/get-new-tokens-by-exchange)          | [https://solana-gateway.moralis.io/token/mainnet/exchange/:exchange/new](https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/new?limit=100)                                    |
| 6   | `getBondingTokensByExchange`   | Get tokens in bonding phase by exchange | [Method Documentation](/web3-data-api/solana/reference/get-bonding-tokens-by-exchange)      | [https://solana-gateway.moralis.io/token/mainnet/exchange/:exchange/bonding](https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/bonding?limit=100)                            |
| 7   | `getGraduatedTokensByExchange` | Get graduated tokens by exchange        | [Method Documentation](/web3-data-api/solana/reference/get-graduated-tokens-by-exchange)    | [https://solana-gateway.moralis.io/token/mainnet/exchange/:exchange/graduated](https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/graduated?limit=100)                        |
| 8   | `getTokenBondingStatus`        | Get bonding status by token address     | [Method Documentation](/web3-data-api/solana/reference/get-bonding-status-by-token-address) | [https://solana-gateway.moralis.io/token/mainnet/:tokenAddress/bonding-status](https://solana-gateway.moralis.io/token/mainnet/H2p8S7Ssd3mrBft1bcDGnzW8KNRAGtPTtJLv1tnupump/bonding-status) |

### Get Token Swaps

| No. | Method                    | Description                 | API Reference                                                                       | URL                                                                                                                                                    |
| --- | ------------------------- | --------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 9   | `getSwapsByPairAddress`   | Get swaps by pair address   | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-pair-address)   | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps) |
| 10  | `getSwapsByWalletAddress` | Get swaps by wallet address | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-wallet-address) | [https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps](https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps)           |
| 11  | `getSwapsByTokenAddress`  | Get swaps by token address  | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-token-address)  | [https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps](https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps)     |

### Get Pairs & Liquidity

| No. | Method                        | Description                          | API Reference                                                                           | URL                                                                                                                                                    |
| --- | ----------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 12  | `getTokenPairs`               | Get token pairs by address           | [Method Documentation](/web3-data-api/solana/reference/get-token-pairs-by-address)      | [https://solana-gateway.moralis.io/token/:network/:address/pairs](https://solana-gateway.moralis.io/token/:network/:address/pairs)                     |
| 13  | `getTokenPairStats`           | Get token pair statistics            | [Method Documentation](/web3-data-api/solana/reference/get-token-pair-stats)            | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/stats](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/stats) |
| 14  | `getAggregatedTokenPairStats` | Get aggregated token pair statistics | [Method Documentation](/web3-data-api/solana/reference/get-aggregated-token-pair-stats) | [https://solana-gateway.moralis.io/token/:network/:address/pairs/stats](https://solana-gateway.moralis.io/token/:network/:address/pairs/stats)         |

### Get Token Analytics

| No. | Method                      | Description                  | API Reference                                                                        | URL                                                                                                                                  |
| --- | --------------------------- | ---------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 15  | `getTokenAnalytics`         | Get token analytics          | [Method Documentation](/web3-data-api/solana/reference/get-token-analytics)          | [https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics](https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics) |
| 16  | `getMultipleTokenAnalytics` | Get multiple token analytics | [Method Documentation](/web3-data-api/solana/reference/get-multiple-token-analytics) | [https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics](https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics) |

### Get Volume Stats

| No. | Method                          | Description                                 | API Reference                                                                              | URL                                                                                                                                                                                                     |
| --- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | `getVolumeStatsByChain`         | Get volume statistics by chain              | [Method Documentation](/web3-data-api/solana/reference/get-volume-stats-by-chain)          | [https://deep-index.moralis.io/api/v2.2/volume/chains](https://deep-index.moralis.io/api/v2.2/volume/chains)                                                                                            |
| 18  | `getVolumeStatsByCategory`      | Get volume and chain data by categories     | [Method Documentation](/web3-data-api/solana/reference/get-volume-stats-by-category)       | [https://deep-index.moralis.io/api/v2.2/volume/categories?chain=solana](https://deep-index.moralis.io/api/v2.2/volume/categories?chain=solana)                                                          |
| 19  | `getTimeSeriesVolume`           | Retrieve timeseries volume data by chain    | [Method Documentation](/web3-data-api/solana/reference/get-time-series-volume)             | [https://deep-index.moralis.io/api/v2.2/volume/timeseries?chain=eth&timeframe=1d](https://deep-index.moralis.io/api/v2.2/volume/timeseries?chain=solana&timeframe=1d)                                   |
| 20  | `getTimeSeriesVolumeByCategory` | Retrieve timeseries volume data by category | [Method Documentation](/web3-data-api/solana/reference/get-time-series-volume-by-category) | [https://deep-index.moralis.io/api/v2.2/volume/timeseries/artificial-intelligence?chain=eth&timeframe=1d](https://deep-index.moralis.io/api/v2.2/volume/timeseries/ai-agents?chain=solana&timeframe=1d) |

### Get Token Prices

| No. | Method                   | Description                            | API Reference                                                                     | URL                                                                                                                                                    |
| --- | ------------------------ | -------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21  | `getTokenPrice`          | Get token price                        | [Method Documentation](/web3-data-api/solana/reference/get-sol-token-price)       | [https://solana-gateway.moralis.io/token/:network/:address/price](https://solana-gateway.moralis.io/token/:network/:address/price)                     |
| 22  | `getMultipleTokenPrices` | Get multiple token prices              | [Method Documentation](/web3-data-api/solana/reference/get-multiple-token-prices) | [https://solana-gateway.moralis.io/token/:network/:address/price](https://solana-gateway.moralis.io/token/:network/:address/price)                     |
| 23  | `getCandleSticks`        | Get OHLCV candlesticks by pair address | [Method Documentation](/web3-data-api/solana/reference/get-ohlcv-by-pair-address) | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv) |

### Get Token Snipers

| No. | Method                    | Description                 | API Reference                                                                       | URL                                                                                                                                                        |
| --- | ------------------------- | --------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | `getSnipersByPairAddress` | Get snipers by pair address | [Method Documentation](/web3-data-api/solana/reference/get-snipers-by-pair-address) | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/snipers](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/snipers) |

### Get Filtered Tokens

| No. | Method              | Description         | API Reference                                                               | URL                                                                                                                |
| --- | ------------------- | ------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 25  | `getFilteredTokens` | Get filtered tokens | [Method Documentation](/web3-data-api/solana/reference/get-filtered-tokens) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens](https://deep-index.moralis.io/api/v2.2/discovery/tokens) |

### Get Trending Tokens

| No. | Method              | Description         | API Reference                                                            | URL                                                                                                              |
| --- | ------------------- | ------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 26  | `getTrendingTokens` | Get trending tokens | [Method Documentation](/web3-data-api/evm/reference/get-trending-tokens) | [https://deep-index.moralis.io/api/v2.2/tokens/trending](https://deep-index.moralis.io/api/v2.2/tokens/trending) |

### Search Tokens

| No. | Method         | Description   | API Reference                                                         | URL                                                                                                          |
| --- | -------------- | ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 27  | `searchTokens` | Search tokens | [Method Documentation](/web3-data-api/solana/reference/search-tokens) | [https://deep-index.moralis.io/api/v2.2/tokens/search](https://deep-index.moralis.io/api/v2.2/tokens/search) |

## Wallet API

Select what you want to achieve:

- [Get Native Balance](#get-native-balance)
- [Get Token Balances](#get-token-balances)
- [Get Portfolio](#get-portfolio)
- [Get Wallet Token Swaps](#get-wallet-token-swaps)
- [Get Wallet NFTs](#get-wallet-nfts)

### Get Native Balance

| No. | Method    | Description                  | API Reference                                                       | URL                                                                                                                                        |
| --- | --------- | ---------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `balance` | Get native balance by wallet | [Method Documentation](/web3-data-api/solana/reference/sol-balance) | [https://solana-gateway.moralis.io/account/:network/:address/balance](https://solana-gateway.moralis.io/account/:network/:address/balance) |

### Get Token Balances

| No. | Method   | Description                 | API Reference                                                   | URL                                                                                                                                      |
| --- | -------- | --------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | `getSPL` | Get token balance by wallet | [Method Documentation](/web3-data-api/solana/reference/get-spl) | [https://solana-gateway.moralis.io/account/:network/:address/tokens](https://solana-gateway.moralis.io/account/:network/:address/tokens) |

### Get Portfolio

| No. | Method         | Description             | API Reference                                                             | URL                                                                                                                                            |
| --- | -------------- | ----------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | `getPortfolio` | Get portfolio by wallet | [Method Documentation](/web3-data-api/solana/reference/get-sol-portfolio) | [https://solana-gateway.moralis.io/account/:network/:address/portfolio](https://solana-gateway.moralis.io/account/:network/:address/portfolio) |

### Get Wallet Token Swaps

| No. | Method                    | Description                       | API Reference                                                                       | URL                                                                                                                                                |
| --- | ------------------------- | --------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4   | `getSwapsByWalletAddress` | Get token swaps by wallet address | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-wallet-address) | [https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps](https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps) |

### Get Wallet NFTs

| No. | Method    | Description        | API Reference                                                        | URL                                                                                                                                |
| --- | --------- | ------------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 5   | `getNFTs` | Get NFTs by wallet | [Method Documentation](/web3-data-api/solana/reference/get-sol-nfts) | [https://solana-gateway.moralis.io/account/:network/:address/nft](https://solana-gateway.moralis.io/account/:network/:address/nft) |

## NFT API

| No. | Method           | Description        | API Reference                                                                | URL                                                                                                                                  |
| --- | ---------------- | ------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getNFTs`        | Get NFTs by wallet | [Method Documentation](/web3-data-api/solana/reference/get-sol-nfts)         | [https://solana-gateway.moralis.io/account/:network/:address/nft](https://solana-gateway.moralis.io/account/:network/:address/nft)   |
| 2   | `getNFTMetadata` | Get NFT metadata   | [Method Documentation](/web3-data-api/solana/reference/get-sol-nft-metadata) | [https://solana-gateway.moralis.io/nft/:network/:address/metadata](https://solana-gateway.moralis.io/nft/:network/:address/metadata) |

## Price API

| No. | Method                   | Description                                      | API Reference                                                                           | URL                                                                                                                                                    |
| --- | ------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getTokenPrice`          | Get token price                                  | [Method Documentation](/web3-data-api/solana/reference/price/get-sol-token-price)       | [https://solana-gateway.moralis.io/token/:network/:address/price](https://solana-gateway.moralis.io/token/:network/:address/price)                     |
| 2   | `getMultipleTokenPrices` | Get multiple token prices                        | [Method Documentation](/web3-data-api/solana/reference/price/get-multiple-token-prices) | [https://solana-gateway.moralis.io/token/:network/:address/price](https://solana-gateway.moralis.io/token/:network/:address/price)                     |
| 3   | `getCandleSticks`        | Get the OHLCV candlesticks by using pair address | [Method Documentation](/web3-data-api/solana/reference/price/get-ohlcv-by-pair-address) | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv) |
