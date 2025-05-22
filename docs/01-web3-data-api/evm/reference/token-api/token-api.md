---
title: "Token API"
sidebar_label: "Token API"
slug: "../token-api"
sidebar_class_name: "sidebar-token-api"
sidebar_position: 3
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

Select what you want to achieve:

- [Get Token Balances](#get-token-balances)
- [Get Token Approvals](#get-token-approvals)
- [Get Token Metadata](#get-token-metadata)
- [Get Token Price](#get-token-price)
- [Get Token Swaps](#get-token-swaps)
- [Get Token Transfers](#get-token-transfers)
- [Get Token Top Traders](#get-token-top-traders)
- [Get Volume Stats](#get-volume-stats)
- [Get Token Pairs & Liquidity](#get-token-pairs--liquidity)
- [Get Token Analytics](#get-token-analytics)
- [Get Tokens by Exchange](#get-tokens-by-exchange)
- [Get Token Stats](#get-token-stats)
- [Get Token Holders](#get-token-holders)
- [Get Token Snipers](#get-token-snipers)
- [Get Trending Tokens](#get-trending-tokens)
- [Get Filtered Tokens](#get-filtered-tokens)
- [Search Tokens](#search-tokens)

### Get Token Balances

| No. | Method                         | Description                                          | API Reference                                                                        | URL                                                                                                                              |
| --- | ------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getWalletTokenBalances`       | Get ERC20 token balance by wallet                    | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances)       | [https://deep-index.moralis.io/api/v2.2/:address/erc20](https://deep-index.moralis.io/api/v2.2/:address/erc20)                   |
| 2   | `getWalletTokenBalancesPrices` | Get Native & ERC20 token balances & prices by wallet | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances-price) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens](https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens) |

### Get Token Approvals

| No. | Method               | Description                   | API Reference                                                                   | URL                                                                                                                                          |
| --- | -------------------- | ----------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | `getWalletApprovals` | Get ERC20 approvals by wallet | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-approvals) | [https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getWalletApprovals](https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals) |

### Get Token Metadata

| No. | Method                     | Description                          | API Reference                                                                     | URL                                                                                                                            |
| --- | -------------------------- | ------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 4   | `getTokenMetadataBySymbol` | Get ERC20 token metadata by symbols  | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata-by-symbol) | [https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols](https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols) |
| 5   | `getTokenMetadata`         | Get ERC20 token metadata by contract | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata)           | [https://deep-index.moralis.io/api/v2.2/erc20/metadata](https://deep-index.moralis.io/api/v2.2/erc20/metadata)                 |
| 6   | `getDiscoveryToken`        | Get token details                    | [Method Documentation](/web3-data-api/evm/reference/get-token-details)            | [https://deep-index.moralis.io/api/v2.2/discovery/token](https://deep-index.moralis.io/api/v2.2/discovery/token)               |

### Get Token Price

| No. | Method                   | Description                                      | API Reference                                                                  | URL                                                                                                                        |
| --- | ------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 7   | `getTokenPrice`          | Get ERC20 token price                            | [Method Documentation](/web3-data-api/evm/reference/get-token-price)           | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price) |
| 8   | `getMultipleTokenPrices` | Get multiple token prices                        | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)                 |
| 9   | `getPairCandlesticks`    | Get the OHLCV candlesticks by using pair address | [Method Documentation](/web3-data-api/evm/reference/get-ohlcv-by-pair-address) | [https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv](https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv) |

### Get Token Swaps

| No. | Method                    | Description                      | API Reference                                                                    | URL                                                                                                                            |
| --- | ------------------------- | -------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 10  | `getSwapsByPairAddress`   | Get swaps by pair address        | [Method Documentation](/web3-data-api/evm/reference/get-swaps-by-pair-address)   | [https://deep-index.moralis.io/api/v2.2/pairs/:address/swaps](https://deep-index.moralis.io/api/v2.2/pairs/:address/swaps)     |
| 11  | `getSwapsByTokenAddress`  | Get swaps by ERC20 token address | [Method Documentation](/web3-data-api/evm/reference/get-swaps-by-token-address)  | [https://deep-index.moralis.io/api/v2.2/erc20/:address/swaps](https://deep-index.moralis.io/api/v2.2/erc20/:address/swaps)     |
| 12  | `getSwapsByWalletAddress` | Get swaps by wallet address      | [Method Documentation](/web3-data-api/evm/reference/get-swaps-by-wallet-address) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps](https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps) |

### Get Token Transfers

| No. | Method                    | Description                           | API Reference                                                                   | URL                                                                                                                                |
| --- | ------------------------- | ------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 13  | `getWalletTokenTransfers` | Get ERC20 token transfers by wallet   | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-transfers) | [https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers](https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers) |
| 14  | `getTokenTransfers`       | Get ERC20 token transfers by contract | [Method Documentation](/web3-data-api/evm/reference/get-token-transfers)        | [https://deep-index.moralis.io/api/v2.2/erc20/:address/transfers](https://deep-index.moralis.io/api/v2.2/erc20/:address/transfers) |

### Get Token Top Traders

| No. | Method                           | Description                  | API Reference                                                                            | URL                                                                                                                                    |
| --- | -------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | `getTopProfitableWalletPerToken` | Get Token Profitable Wallets | [Method Documentation](/web3-data-api/evm/reference/get-top-profitable-wallet-per-token) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/top-gainers](https://deep-index.moralis.io/api/v2.2/erc20/:address/top-gainers) |

### Get Volume Stats

| No. | Method                          | Description                                 | API Reference                                                                           | URL                                                                                                                                                                                                                |
| --- | ------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 16  | `getVolumeStatsByChain`         | Get volume statistics by chain              | [Method Documentation](/web3-data-api/evm/reference/get-volume-stats-by-chain)          | [https://deep-index.moralis.io/api/v2.2/volume/chains](https://deep-index.moralis.io/api/v2.2/volume/chains)                                                                                                       |
| 17  | `getVolumeStatsByCategory`      | Get volume and chain data by categories     | [Method Documentation](/web3-data-api/evm/reference/get-volume-stats-by-category)       | [https://deep-index.moralis.io/api/v2.2/volume/categories?chain=eth](https://deep-index.moralis.io/api/v2.2/volume/categories?chain=eth)                                                                           |
| 18  | `getTimeSeriesVolume`           | Retrieve timeseries volume data by chain    | [Method Documentation](/web3-data-api/evm/reference/get-time-series-volume)             | [https://deep-index.moralis.io/api/v2.2/volume/timeseries?chain=eth&timeframe=1d](https://deep-index.moralis.io/api/v2.2/volume/timeseries?chain=eth&timeframe=1d)                                                 |
| 19  | `getTimeSeriesVolumeByCategory` | Retrieve timeseries volume data by category | [Method Documentation](/web3-data-api/evm/reference/get-time-series-volume-by-category) | [https://deep-index.moralis.io/api/v2.2/volume/timeseries/artificial-intelligence?chain=eth&timeframe=1d](https://deep-index.moralis.io/api/v2.2/volume/timeseries/artificial-intelligence?chain=eth&timeframe=1d) |

### Get Token Pairs & Liquidity

| No. | Method                        | Description                          | API Reference                                                                        | URL                                                                                                                                                                    |
| --- | ----------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | `getTokenPairs`               | Get token pairs by address           | [Method Documentation](/web3-data-api/evm/reference/get-token-pairs)                 | [https://deep-index.moralis.io/api/v2.2/:token_address/pairs](https://deep-index.moralis.io/api/v2.2/:token_address/pairs)                                             |
| 21  | `getPairStats`                | Get token pair statistics            | [Method Documentation](/web3-data-api/evm/reference/get-token-pair-stats)            | [https://deep-index.moralis.io/api/v2.2//pairs/:address/stats](https://deep-index.moralis.io/api/v2.2//pairs/:address/stats)                                           |
| 22  | `getAggregatedTokenPairStats` | Get aggregated token pair statistics | [Method Documentation](/web3-data-api/evm/reference/get-aggregated-token-pair-stats) | [https://deep-index.moralis.io/api/v2.2/:token_address/pairs/stats](https://deep-index.moralis.io/api/v2.2/:token_address/pairs/stats)                                 |
| 23  | `getPairAddress`              | Get DEX token pair address           | [Method Documentation](/web3-data-api/evm/reference/get-pair-address)                | [https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres](https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres) |
| 24  | `getPairReserves`             | Get DEX token pair reserves          | [Method Documentation](/web3-data-api/evm/reference/get-pair-reserves)               | [https://deep-index.moralis.io/api/v2.2/:pair_address/reserves](https://deep-index.moralis.io/api/v2.2/:pair_address/reserves)                                         |

### Get Token Analytics

| No. | Method                        | Description                    | API Reference                                                                       | URL                                                                                                                                       |
| --- | ----------------------------- | ------------------------------ | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 25  | `getTokenAnalytics`           | Get token analytics            | [Method Documentation](/web3-data-api/evm/reference/get-token-analytics)            | [https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics](https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics)      |
| 26  | `getMultipleTokenAnalytics`   | Get multiple token analytics   | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-analytics)   | [https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics](https://deep-index.moralis.io/api/v2.2/tokens/:address/analytics)      |
| 27  | `getTimeSeriesTokenAnalytics` | Get timeseries token analytics | [Method Documentation](/web3-data-api/evm/reference/get-timeseries-token-analytics) | [https://deep-index.moralis.io/api/v2.2/tokens//analytics/timeseries](https://deep-index.moralis.io/api/v2.2/tokens/analytics/timeseries) |

### Get Tokens by Exchange

| No. | Method                         | Description                           | API Reference                                                                         | URL                                                                                                                                                    |
| --- | ------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 28  | `getNewTokensByExchange`       | Get newly launched tokens by exchange | [Method Documentation](/web3-data-api/evm/reference/get-new-tokens-by-exchange)       | [https://deep-index.moralis.io/api/v2.2/erc20/exchange/:exchange/new](https://deep-index.moralis.io/api/v2.2/erc20/exchange/:exchange/new)             |
| 29  | `getBondingTokensByExchange`   | Get bonding tokens by exchange        | [Method Documentation](/web3-data-api/evm/reference/get-bonding-tokens-by-exchange)   | [https://deep-index.moralis.io/api/v2.2/erc20/exchange/:exchange/bonding](https://deep-index.moralis.io/api/v2.2/erc20/exchange/:exchange/bonding)     |
| 30  | `getGraduatedTokensByExchange` | Get graduated tokens by exchange      | [Method Documentation](/web3-data-api/evm/reference/get-graduated-tokens-by-exchange) | [https://deep-index.moralis.io/api/v2.2/erc20/exchange/:exchange/graduated](https://deep-index.moralis.io/api/v2.2/erc20/exchange/:exchange/graduated) |
| 31  | `getTokenBondingStatus`        | Get token bonding status              | [Method Documentation](/web3-data-api/evm/reference/get-token-bonding-status)         | [https://deep-index.moralis.io/api/v2.2/erc20/:address/bondingStatus](https://deep-index.moralis.io/api/v2.2/erc20/:address/bondingStatus)             |

### Get Token Stats

| No. | Method          | Description           | API Reference                                                        | URL                                                                                                                        |
| --- | --------------- | --------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 32  | `getTokenStats` | Get ERC20 token stats | [Method Documentation](/web3-data-api/evm/reference/get-token-stats) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/stats](https://deep-index.moralis.io/api/v2.2/erc20/:address/stats) |

### Get Token Holders

| No. | Method                      | Description                              | API Reference                                                                     | URL                                                                                                                                                              |
| --- | --------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | `getTokenHolders`           | Get ERC20 Token Holders                  | [Method Documentation](/web3-data-api/evm/reference/get-token-holders)            | [https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners](https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners)                         |
| 33  | `getTokenHolderStats`       | Get ERC20 Token Holders Stats            | [Method Documentation](/web3-data-api/evm/reference/get-token-holder-stats)       | [https://deep-index.moralis.io/api/v2.2/erc20/:token_address/holders](https://deep-index.moralis.io/api/v2.2/erc20/:token_address/holders)                       |
| 34  | `getHistoricalTokenHolders` | Get ERC20 token holders Stats Timeseries | [Method Documentation](/web3-data-api/evm/reference/get-historical-token-holders) | [https://deep-index.moralis.io/api/v2.2/erc20/:token_address/holders/historical](https://deep-index.moralis.io/api/v2.2/erc20/:token_address/holders/historical) |

### Get Token Snipers

| No. | Method                    | Description                 | API Reference                                                                    | URL                                                                                                                            |
| --- | ------------------------- | --------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 35  | `getSnipersByPairAddress` | Get snipers by pair address | [Method Documentation](/web3-data-api/evm/reference/get-snipers-by-pair-address) | [https://deep-index.moralis.io/api/v2.2/pairs/:address/snipers](https://deep-index.moralis.io/api/v2.2/pairs/:address/snipers) |

### Get Trending Tokens

| No. | Method                         | Description                            | API Reference                                                                           | URL                                                                                                                                          |
| --- | ------------------------------ | -------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 36  | `getTrendingTokens`            | Get trending tokens                    | [Method Documentation](/web3-data-api/evm/reference/get-trending-tokens)                | [https://deep-index.moralis.io/api/v2.2/tokens/trending](https://deep-index.moralis.io/api/v2.2/tokens/trending)                             |
| 37  | `getTopGainersTokens`          | Get tokens with top gainers            | [Method Documentation](/web3-data-api/evm/reference/get-tokens-with-top-gainers)        | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-gainers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-gainers)   |
| 38  | `getTopLosersTokens`           | Get tokens with top losers             | [Method Documentation](/web3-data-api/evm/reference/get-tokens-with-top-losers)         | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-losers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-losers)     |
| 39  | `getTopERC20TokensByMarketCap` | Get the top ERC20 tokens by market cap | [Method Documentation](/web3-data-api/evm/reference/get-top-erc20-tokens-by-market-cap) | [https://deep-index.moralis.io/api/v2.2/market-data/erc20s/top-tokens](https://deep-index.moralis.io/api/v2.2/market-data/erc20s/top-tokens) |

### Get Filtered Tokens

| No. | Method              | Description         | API Reference                                                            | URL                                                                                                                |
| --- | ------------------- | ------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 40  | `getFilteredTokens` | Get filtered tokens | [Method Documentation](/web3-data-api/evm/reference/get-filtered-tokens) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens](https://deep-index.moralis.io/api/v2.2/discovery/tokens) |

### Search Tokens

| No. | Method         | Description   | API Reference                                                      | URL                                                                                                          |
| --- | -------------- | ------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 41  | `searchTokens` | Search tokens | [Method Documentation](/web3-data-api/evm/reference/search-tokens) | [https://deep-index.moralis.io/api/v2.2/tokens/search](https://deep-index.moralis.io/api/v2.2/tokens/search) |
