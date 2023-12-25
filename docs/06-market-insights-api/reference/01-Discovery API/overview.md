---
title: "Discovery API"
sidebar_label: "Overview"
sidebar_class_name: "sidebar-market-data-api"
sidebar_position: 0
slug: "/market-insights-api/reference/discovery-api/overview"
---

The Discovery API provides a comprehensive suite of endpoints designed to uncover new trends, insightful tokens, and hidden gems within the cryptocurrency market. It goes beyond standard market data by analyzing patterns, liquidity movements, buying pressures, and other critical factors that indicate potential. This document outlines the technical details, usage, and guidelines for effectively utilizing the Discovery API.

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

## Why the Discovery API?

While typical market data APIs provide a snapshot of the current state of affairs, the Discovery API takes it several steps further by analyzing patterns, liquidity movements, buying pressures, and other critical factors that can indicate a token's potential. It's the difference between reading today's weather report and having a long-term forecast at your disposal.
