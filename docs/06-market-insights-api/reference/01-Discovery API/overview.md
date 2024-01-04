---
title: "Discovery API"
sidebar_label: "Overview"
sidebar_class_name: "sidebar-market-data-api"
sidebar_position: 0
slug: "/market-insights-api/reference/discovery-api/overview"
---

The Discovery API provides a comprehensive suite of endpoints designed to uncover new trends, insightful tokens, and hidden gems within the cryptocurrency market. It goes beyond standard market data by analyzing patterns, liquidity movements, buying pressures, and other critical factors that indicate a token's potential.

## Token Insights

Token Insights is a suite of endpoints within the Discovery API that offer various perspectives on the market, each tailored to different investment strategies and research needs:

| No. | Method                                   | Description                                         | API Reference                                                                                                                             | URL                                                                       |
|-----|------------------------------------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 1   | `getRisingLiquidityTokens`               | Identify tokens with rising liquidity                | [Method Documentation](/market-insights-api/reference/get-tokens-with-rising-liquidity) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/rising-liquidity](https://deep-index.moralis.io/api/v2.2/discovery/tokens/rising-liquidity)                     |
| 2   | `getTopBuyPressureTokens`                | Find tokens with the highest buying pressure         | [Method Documentation](/market-insights-api/reference/get-tokens-with-buying-pressure) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/buying-pressure](https://deep-index.moralis.io/api/v2.2/discovery/tokens/buying-pressure)                     |
| 3   | `getExperiencedBuyerTokens`              | Discover tokens popular with experienced buyers      | [Method Documentation](/market-insights-api/reference/get-tokens-with-experienced-buyers) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/experienced-buyers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/experienced-buyers)                     |
| 4   | `getSolidPerformanceTokens`              | List tokens that have shown solid performance        | [Method Documentation](/market-insights-api/reference/get-tokens-with-solid-performance) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/solid-performers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/solid-performers)                     |
| 5   | `getBlueChipTokens`                      | Get tokens that are considered strong and reliable   | [Method Documentation](/market-insights-api/reference/get-tokens-with-blue-chip) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/blue-chip](https://deep-index.moralis.io/api/v2.2/discovery/tokens/blue-chip)                     |
| 6   | `getRiskyBetTokens`                      | Identify tokens that are considered high risk, high reward | [Method Documentation](/market-insights-api/reference/get-tokens-with-risky-bets) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/risky-bets](https://deep-index.moralis.io/api/v2.2/discovery/tokens/risky-bets)                     |

## Token Explorer

The Token Explorer is a forthcoming feature that promises to expand the capabilities of the Discovery API even further. While details are currently under wraps, users can expect a tool that provides even deeper dives into the token metrics and trends, offering a comprehensive platform for exploring and discovering potential crypto investments.

## Supported Chains

| Name                        | Chain Id (Int) | Chain Id (Hex) | EvmChain                | Type    |
|-----------------------------|----------------|----------------|-------------------------|---------|
| Ethereum            | 1              | 0x1            | EvmChain.ETHEREUM       | Mainnet |
| Ethereum Görli              | 5              | 0x5            | EvmChain.GOERLI         | Testnet |
| Ethereum Sepolia            | 11155111       | 0xaa36a7       | EvmChain.SEPOLIA        | Testnet |
| Polygon             | 137            | 0x89           | EvmChain.POLYGON        | Mainnet |
| Polygon Mumbai              | 80001          | 0x13881        | EvmChain.MUMBAI         | Testnet |
| Binance Smart Chain | 56             | 0x38           | EvmChain.BSC            | Mainnet |
| Binance Smart Chain Testnet | 97             | 0x61           | EvmChain.BSC_TESTNET    | Testnet |
| Avalanche C-Chain           | 43114          | 0xa86a         | EvmChain.AVALANCHE      | Mainnet |
| Fantom                      | 250            | 0xfa           | EvmChain.FANTOM         | Mainnet |
| Cronos Mainnet              | 25             | 0x19           | EvmChain.CRONOS         | Mainnet |
| Palm                        | 11297108109    | 0x2a15c308d    | EvmChain.PALM           | Mainnet |
| Arbitrum                    | 42161          | 0xa4b1         | EvmChain.ARBITRUM       | Mainnet |
| Gnosis                      | 100            | 0x64           | EvmChain.GNOSIS         | Mainnet |
| Gnosis Chiado               | 10200          | 0x27d8         | EvmChain.GNOSIS_CHIADO  | Testnet |
| Base                        | 8453           | 0x2105         | EvmChain.BASE           | Mainnet |
| Base Goerli                 | 84531          | 0x14a33        | EvmChain.BASE_GOERLI    | Testnet |
