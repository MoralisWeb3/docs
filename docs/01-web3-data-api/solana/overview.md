---
title: "Solana Web3 Data API"
sidebar_label: "Overview"
slug: "/web3-data-api/solana"
sidebar_position: 1
image: /img/content/web3-data-api-3.webp
description: "Moralis provides enterprise-grade APIs for the Solana ecosystem, enabling developers to build sophisticated trading terminals and analytics platforms. From token discovery to market intelligence, our comprehensive API suite processes millions of queries daily, powering applications like moralis.com."
sidebar_class_name: "sidebar-overview"
---

# Solana API Overview

## Introduction

Moralis provides enterprise-grade APIs and analytics for the Solana ecosystem, powering moralis.com's terminal and processing millions of queries daily. This documentation showcases our comprehensive API suite that enables developers to build sophisticated trading and analytics platforms with institutional-grade data.

### Moralis.com Terminal

![Main Moralis Page](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/main-page.webp)

## API Coverage

- Token APIs: Our Token APIs bring complete token discovery and analysis capabilities. This includes universal token search, trending token detection, detailed metadata, price tracking, pair analytics, swap monitoring etc. These power features like moralis.com's universal search bar, trending section, and DEX analytics.

- Wallet APIs: Our Wallet APIs enable comprehensive wallet analysis and portfolio tracking. From native SOL balances to SPL token holdings, complete portfolio valuations to transaction history - these endpoints power moralis.com's wallet analytics and portfolio tracking features.

- NFT APIs: Our NFT APIs provide complete NFT portfolio and metadata capabilities. Track NFT holdings, access detailed collection data, and monitor ownership history through our endpoints.

- Price APIs: Our Price APIs deliver professional-grade market data through endpoints for real-time token prices and detailed OHLCV candlestick data. These power moralis.com's TradingView charts and price analytics features, supporting all token types including pump fun tokens.

Whether you're building a trading terminal, portfolio tracker, or market analytics platform, our APIs provide the data infrastructure you need, as demonstrated by moralis.com's powerful Solana terminal.

## Token API

### Token Search

![Token Search](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/token-search.webp)

Powers the main search bar on moralis.com, enabling instant token lookup by contract address, name, or symbol. Used by thousands of traders daily on moralis.com to discover and analyze new tokens through the universal search bar.

- Search by address/name/symbol
- Real-time autocompletion
- Instant price data
- Market information display

**Related APIs:**

| No. | Method         | Description   | API Reference                                                         | URL                                                                                                          |
| --- | -------------- | ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 1   | `searchTokens` | Search tokens | [Method Documentation](/web3-data-api/solana/reference/search-tokens) | [https://deep-index.moralis.io/api/v2.2/tokens/search](https://deep-index.moralis.io/api/v2.2/tokens/search) |

### Token Discovery & Trending

![Token Trending](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/sol-trending-tokens.webp)

Analysis system behind moralis.com's trending section, highlighting tokens showing significant market activity. Featured prominently on the dashboard, helping traders identify potential opportunities through real-time metric analysis.

- Volume spike detection
- Holder growth tracking
- Price momentum analysis
- Liquidity monitoring
- Security scoring

**Related APIs:**

| No. | Method              | Description         | API Reference                                                               | URL                                                                                                              |
| --- | ------------------- | ------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1   | `getTrendingTokens` | Get trending tokens | [Method Documentation](/web3-data-api/solana/reference/get-trending-tokens) | [https://deep-index.moralis.io/api/v2.2/tokens/trending](https://deep-index.moralis.io/api/v2.2/tokens/trending) |

### Strategy Builder

![Strategy Builder](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/strategy-builder.webp)

Create custom token discovery strategies with our powerful filtering capabilities. Build, test, and deploy sophisticated token screening rules tailored to your trading approach.

- Multi-criteria filtering
- Real-time evaluation
- Customizable parameters
- Market metric combinations

**Related APIs:**

| No. | Method              | Description         | API Reference                                                               | URL                                                                                                                |
| --- | ------------------- | ------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 1   | `getFilteredTokens` | Get filtered tokens | [Method Documentation](/web3-data-api/solana/reference/get-filtered-tokens) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens](https://deep-index.moralis.io/api/v2.2/discovery/tokens) |

### Pump Fun Tokens

![Pump Fun Tokens](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/pump-fun-tokens.webp)

Access comprehensive data on pump fun tokens and prebonded tokens. Monitor new launches, track bonding phase tokens, and analyze graduated tokens.

- New token monitoring
- Bonding phase tracking
- Graduated token analysis
- Bonding status verification

**Related APIs:**

| No. | Method                         | Description                             | API Reference                                                                               | URL                                                                                                                                                          |
| --- | ------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getNewTokensByExchange`       | Get new tokens by exchange              | [Method Documentation](/web3-data-api/solana/reference/get-new-tokens-by-exchange)          | [https://solana-gateway.moralis.io/token/mainnet/exchange/:exchange/new](https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/new)               |
| 2   | `getBondingTokensByExchange`   | Get tokens in bonding phase by exchange | [Method Documentation](/web3-data-api/solana/reference/get-bonding-tokens-by-exchange)      | [https://solana-gateway.moralis.io/token/mainnet/exchange/:exchange/bonding](https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/bonding)       |
| 3   | `getGraduatedTokensByExchange` | Get graduated tokens by exchange        | [Method Documentation](/web3-data-api/solana/reference/get-graduated-tokens-by-exchange)    | [https://solana-gateway.moralis.io/token/mainnet/exchange/:exchange/graduated](https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/graduated)   |
| 4   | `getTokenBondingStatus`        | Get bonding status by token address     | [Method Documentation](/web3-data-api/solana/reference/get-bonding-status-by-token-address) | [https://solana-gateway.moralis.io/token/mainnet/:tokenAddress/bonding-status](https://solana-gateway.moralis.io/token/mainnet/:tokenAddress/bonding-status) |

### Token Prices & Charts

![Token Prices and Charts](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/prices-and-charts.webp)

Enterprise-grade charting through TradingView integration and raw OHLCV data. Powers all price analysis on moralis.com with support for all token types including pump fun tokens.

- Real-time OHLCV data
- TradingView widget integration
- Multiple timeframes
- Technical indicators

**Related APIs:**

| No. | Method            | Description            | API Reference                                                                     | URL                                                                                                                                                    |
| --- | ----------------- | ---------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getTokenPrice`   | Get token price        | [Method Documentation](/web3-data-api/solana/reference/get-sol-token-price)       | [https://solana-gateway.moralis.io/token/:network/:address/price](https://solana-gateway.moralis.io/token/:network/:address/price)                     |
| 2   | `getCandleSticks` | Get OHLCV candlesticks | [Method Documentation](/web3-data-api/solana/reference/get-ohlcv-by-pair-address) | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv) |

### Token Metadata

![Token Metadata](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/token-metadata.webp)

Access comprehensive token information and metadata for any Solana token. Used throughout moralis.com to provide detailed token insights.

- Basic token data
- Market metrics
- Contract details
- Supply information

**Related APIs:**

| No. | Method             | Description        | API Reference                                                              | URL                                                                                                                                      |
| --- | ------------------ | ------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getTokenMetadata` | Get token metadata | [Method Documentation](/web3-data-api/solana/reference/get-token-metadata) | [https://solana-gateway.moralis.io/token/:network/:address/metadata](https://solana-gateway.moralis.io/token/:network/:address/metadata) |

### Token Holders

![Token Holders](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/holders-solana.webp)

Track holder statistics and distribution patterns for any token. Analyze holder growth, concentration, and historical trends.

- Current holder count
- Distribution analysis
- Holder growth trends
- Concentration metrics

**Related APIs:**

| No. | Method                      | Description                            | API Reference                                                                        | URL                                                                                                                                                        |
| --- | --------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getTokenHolderStats`       | Get token holder statistics            | [Method Documentation](/web3-data-api/solana/reference/get-token-holder-stats)       | [https://solana-gateway.moralis.io/token/mainnet/holders/:address](https://solana-gateway.moralis.io/token/mainnet/holders/:address)                       |
| 2   | `getHistoricalTokenHolders` | Get historical token holder statistics | [Method Documentation](/web3-data-api/solana/reference/get-historical-token-holders) | [https://solana-gateway.moralis.io/token/mainnet/holders/:address/historical](https://solana-gateway.moralis.io/token/mainnet/holders/:address/historical) |

### Token Pairs & Liquidity

![Token Pairs and Liquidity](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/token-pairs-and-liquidity.webp)

Monitor market depth, pair statistics, and trading activity. Used throughout moralis.com's token pair pages to provide detailed insights into liquidity pools and market activity.

- Pair analytics
- Liquidity tracking
- Volume analysis
- Market statistics

**Related APIs:**

| No. | Method                        | Description          | API Reference                                                                           | URL                                                                                                                                                    |
| --- | ----------------------------- | -------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getTokenPairs`               | Get token pairs      | [Method Documentation](/web3-data-api/solana/reference/get-token-pairs-by-address)      | [https://solana-gateway.moralis.io/token/:network/:address/pairs](https://solana-gateway.moralis.io/token/:network/:address/pairs)                     |
| 2   | `getTokenPairStats`           | Get pair statistics  | [Method Documentation](/web3-data-api/solana/reference/get-token-pair-stats)            | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/stats](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/stats) |
| 3   | `getAggregatedTokenPairStats` | Get aggregated stats | [Method Documentation](/web3-data-api/solana/reference/get-aggregated-token-pair-stats) | [https://solana-gateway.moralis.io/token/:network/:address/pairs/stats](https://solana-gateway.moralis.io/token/:network/:address/pairs/stats)         |

### Token Swaps

![Token Swaps](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/token-txs.webp)

Track token swaps and trading activity. Featured in moralis.com's swap analysis sections for monitoring market movements.

- Pair-based monitoring
- Wallet swap tracking
- Historical analysis
- Volume tracking

**Related APIs:**

| No. | Method                    | Description         | API Reference                                                                       | URL                                                                                                                                                    |
| --- | ------------------------- | ------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getSwapsByPairAddress`   | Get swaps by pair   | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-pair-address)   | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps) |
| 2   | `getSwapsByWalletAddress` | Get swaps by wallet | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-wallet-address) | [https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps](https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps)     |
| 3   | `getSwapsByTokenAddress`  | Get swaps by token  | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-token-address)  | [https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps](https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps)           |

### Network Volume Analytics

![Network Volume Stats](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/network-volume-stats.webp)

Track comprehensive blockchain-level volume statistics across multiple timeframes. Get insights into total trading volume, active wallets, and transaction counts for Solana.

- Total trading volume metrics
- Volume trends across timeframes (5m, 1h, 6h, 24h)
- Active wallet statistics
- Transaction count analytics

**Related APIs:**

| No. | Method                  | Description                         | API Reference                                                                     | URL                                                                                                                                                                      |
| --- | ----------------------- | ----------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getVolumeStatsByChain` | Get volume statistics by chain      | [Method Documentation](/web3-data-api/solana/reference/get-volume-stats-by-chain) | [https://deep-index.moralis.io/api/v2.2/volume/chains](https://deep-index.moralis.io/api/v2.2/volume/chains)                                                             |
| 2   | `getTimeSeriesVolume`   | Get timeseries volume data by chain | [Method Documentation](/web3-data-api/solana/reference/get-time-series-volume)    | [https://deep-index.moralis.io/api/v2.2/volume/timeseries?chain=solana&timeframe=1d](https://deep-index.moralis.io/api/v2.2/volume/timeseries?chain=solana&timeframe=1d) |

### Category Volume Analytics

![Category Volume Stats](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/category-volume-stats.webp)

Analyze trading volume broken down by token categories. Identify which sectors are seeing increased activity and track buy/sell ratios across different token types.

- Volume breakdowns by token categories (DeFi, AI, Gaming, etc.)
- Buy/sell volume ratio analysis
- Buyer and seller counts by category
- Transaction activity metrics per category

**Related APIs:**

| No. | Method                          | Description                            | API Reference                                                                              | URL                                                                                                                                                                                          |
| --- | ------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getVolumeStatsByCategory`      | Get volume statistics by category      | [Method Documentation](/web3-data-api/solana/reference/get-volume-stats-by-category)       | [https://deep-index.moralis.io/api/v2.2/volume/categories?chain=solana](https://deep-index.moralis.io/api/v2.2/volume/categories?chain=solana)                                               |
| 2   | `getTimeSeriesVolumeByCategory` | Get timeseries volume data by category | [Method Documentation](/web3-data-api/solana/reference/get-time-series-volume-by-category) | [https://deep-index.moralis.io/api/v2.2/volume/timeseries/ai-agents?chain=solana&timeframe=1d](https://deep-index.moralis.io/api/v2.2/volume/timeseries/ai-agents?chain=solana&timeframe=1d) |

### TradingView Token Chart Widget Integration

![Token Price Chart Widget Embed](https://raw.githubusercontent.com/MoralisWeb3/docs/main/static/screenshots-moraliscom-solana-page/price-widget-embed.webp)

Embed professional-grade trading charts in your application with our TradingView widget integration. The same charts powering moralis.com's trading terminal can be easily integrated into any platform, with comprehensive token pair support including:

- Standard token pairs
- Pump fun tokens
- Prebonded pump fun tokens
- Custom token pairs

### Token Snipers

Monitor sniper activity on token pairs.

- Sniper detection
- Trading pattern analysis
- Volume tracking
- Market maker monitoring

**Related APIs:**

| No. | Method                    | Description         | API Reference                                                                       | URL                                                                                                                                                        |
| --- | ------------------------- | ------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getSnipersByPairAddress` | Get snipers by pair | [Method Documentation](/web3-data-api/solana/reference/get-snipers-by-pair-address) | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/snipers](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/snipers) |

## Wallet API

### Wallet Overview

Complete wallet analytics capabilities for tracking balances, holdings, and portfolio data.

- Native balance tracking
- Token holdings
- Portfolio valuation
- Transaction monitoring

**Related APIs:**

| No. | Method         | Description        | API Reference                                                             | URL                                                                                                                                            |
| --- | -------------- | ------------------ | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `balance`      | Get native balance | [Method Documentation](/web3-data-api/solana/reference/sol-balance)       | [https://solana-gateway.moralis.io/account/:network/:address/balance](https://solana-gateway.moralis.io/account/:network/:address/balance)     |
| 2   | `getSPL`       | Get token balances | [Method Documentation](/web3-data-api/solana/reference/get-spl)           | [https://solana-gateway.moralis.io/account/:network/:address/tokens](https://solana-gateway.moralis.io/account/:network/:address/tokens)       |
| 3   | `getPortfolio` | Get portfolio data | [Method Documentation](/web3-data-api/solana/reference/get-sol-portfolio) | [https://solana-gateway.moralis.io/account/:network/:address/portfolio](https://solana-gateway.moralis.io/account/:network/:address/portfolio) |

### Wallet NFTs

Track NFT holdings for any wallet address.

- NFT portfolio tracking
- Collection analysis
- Metadata access
- Ownership history

**Related APIs:**

| No. | Method    | Description        | API Reference                                                        | URL                                                                                                                                |
| --- | --------- | ------------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getNFTs` | Get NFTs by wallet | [Method Documentation](/web3-data-api/solana/reference/get-sol-nfts) | [https://solana-gateway.moralis.io/account/:network/:address/nft](https://solana-gateway.moralis.io/account/:network/:address/nft) |

## NFT API

### NFT Data

Comprehensive NFT metadata and collection analytics.

- Collection data
- Token metadata
- Ownership tracking
- Market analysis

**Related APIs:**

| No. | Method           | Description        | API Reference                                                                | URL                                                                                                                                  |
| --- | ---------------- | ------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getNFTs`        | Get NFTs by wallet | [Method Documentation](/web3-data-api/solana/reference/get-sol-nfts)         | [https://solana-gateway.moralis.io/account/:network/:address/nft](https://solana-gateway.moralis.io/account/:network/:address/nft)   |
| 2   | `getNFTMetadata` | Get NFT metadata   | [Method Documentation](/web3-data-api/solana/reference/get-sol-nft-metadata) | [https://solana-gateway.moralis.io/nft/:network/:address/metadata](https://solana-gateway.moralis.io/nft/:network/:address/metadata) |
