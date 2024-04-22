---
title: "Discovery API"
sidebar_label: "Overview"
sidebar_class_name: "sidebar-market-data-api"
sidebar_position: 0
slug: "/market-insights-api/reference/discovery-api/overview"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner
  customText="Get access to the Discovery API"
  customButtonText="Contact Sales"
  customButtonLink="https://moralis.io/api/discovery/"
/>

The Discovery API provides a comprehensive suite of endpoints designed to uncover new trends, insightful tokens, and hidden gems within the cryptocurrency market. It goes beyond standard market data by analyzing patterns, liquidity movements, buying pressures, and other critical factors that indicate a token's potential.

## Token Insights

Token Insights is a suite of endpoints within the Discovery API that offer various perspectives on the market, each tailored to different investment strategies and research needs:

| No. | Method                      | Description                                                | API Reference                                                                             | URL                                                                                                                                                        |
| --- | --------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getRisingLiquidityTokens`  | Identify tokens with rising liquidity                      | [Method Documentation](/market-insights-api/reference/get-tokens-with-rising-liquidity)   | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/rising-liquidity](https://deep-index.moralis.io/api/v2.2/discovery/tokens/rising-liquidity)       |
| 2   | `getTopBuyPressureTokens`   | Find tokens with the highest buying pressure               | [Method Documentation](/market-insights-api/reference/get-tokens-with-buying-pressure)    | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/buying-pressure](https://deep-index.moralis.io/api/v2.2/discovery/tokens/buying-pressure)         |
| 3   | `getExperiencedBuyerTokens` | Discover tokens popular with experienced buyers            | [Method Documentation](/market-insights-api/reference/get-tokens-with-experienced-buyers) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/experienced-buyers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/experienced-buyers)   |
| 4   | `getSolidPerformanceTokens` | List tokens that have shown solid performance              | [Method Documentation](/market-insights-api/reference/get-tokens-with-solid-performance)  | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/solid-performers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/solid-performers)       |
| 5   | `getBlueChipTokens`         | Get tokens that are considered strong and reliable         | [Method Documentation](/market-insights-api/reference/get-tokens-with-blue-chip)          | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/blue-chip](https://deep-index.moralis.io/api/v2.2/discovery/tokens/blue-chip)                     |
| 6   | `getRiskyBetTokens`         | Identify tokens that are considered high risk, high reward | [Method Documentation](/market-insights-api/reference/get-tokens-with-risky-bets)         | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/risky-bets](https://deep-index.moralis.io/api/v2.2/discovery/tokens/risky-bets)                   |
| 7   | `getTopGainersTokens`       | Get tokens with top gainers                                | [Method Documentation](/market-insights-api/reference/get-tokens-with-top-gainers)        | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-gainers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/get-tokens-with-top-gainers) |
| 8   | `getTopLosersTokens`        | Get tokens with top losers                                 | [Method Documentation](/market-insights-api/reference/get-tokens-with-top-losers)         | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-losers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/get-tokens-with-top-losers)   |
| 9   | `getTrendingTokens`         | Get trending tokens                                        | [Method Documentation](/market-insights-api/reference/get-trending-tokens)                | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/trending](https://deep-index.moralis.io/api/v2.2/discovery/tokens/trending)                       |
| 10  | `getDiscoveryToken`         | Get token details                                          | [Method Documentation](/market-insights-api/reference/get-token-details)                  | [https://deep-index.moralis.io/api/v2.2/discovery/token](https://deep-index.moralis.io/api/v2.2/discovery/token)                                           |

## Supported Chains

import { EVMChainData } from '@site/src/components/SupportedChains';

<EVMChainData/>
