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

The Discovery API provides a comprehensive suite of endpoints designed to uncover new trends, insightful tokens, and hidden gems within the cryptocurrency market. It goes beyond standard market data by analyzing patterns, liquidity movements, buying pressures, and other critical factors that indicate a token's potential. Similar to Moralis Money, Discovery API endpoints support ERC20 tokens only.

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

## API Endpoints and Sorting Parameters

### Rising Liquidity

Identify tokens with surging liquidity, higher market cap, active social presence, and strong security scores. Positive price trends make them appealing to traders. The 1 month change in liquidity is the underlying metric for this strategy. This metric highlights the ease of trading the asset without significant price impact. An increase in liquidity usually indicates rising interest and a healthy trading environment. Combining liquidity with market cap can provide insights into market stability and growth potential.

- **Main Filter Metric**: `liquidity_change_usd`
- **Time Frame**: 1 month
- **Sorting Order**: DESC
- **Use Cases**:
  - **Market Health**: Assesses the health and stability of the market.
  - **Trading Opportunities**: Identifies tokens with increasing liquidity for better trading opportunities.

### Buying Pressure

Focus on tokens experiencing substantial buying pressure, driven by increased net volume. These tokens often have significant market cap, social engagement, and price momentum. Net volume is the underlying filter metric for this strategy. This metric indicates the level of buying pressure by measuring the net change in volume of experienced buyers. It helps identify tokens that are gaining interest from knowledgeable investors.

- **Main Filter Metric**: `experienced_net_buyers_change`
- **Time Frame**: 1 month
- **Sorting Order**: DESC
- **Use Cases**:
  - **Investment Decision**: Helps investors identify tokens with strong buying interest.
  - **Market Analysis**: Provides insights into market trends and investor sentiment.

### Solid Performers

Target tokens with consistently solid buying pressure across multiple timeframes, indicating dependable assets with robust volume, security, and price trends. Uses multi time frame net volume change and total 1 month volume as filters. Net volume is the difference between buyers volume and sellers volume. This indicates the dominant force in the market. Positive buy pressure suggests accumulation and potential for price increases, especially when analyzed alongside experienced net buyers for insights into who is driving the market - retail or more informed entities.

- **Main Filter Metric**: `net_volume_change_usd`
- **Time Frame**: 1 month
- **Sorting Order**: DESC
- **Use Cases**:
  - **Performance Analysis**: Identifies consistently performing tokens.
  - **Market Trends**: Provides insights into ongoing market trends and dominant forces.

### Experienced Buyers

Powerful indicator of what experienced traders are buying right now. Uses the 1 week experienced buyers metrics as the filter. Buyers with at least 100 outgoing transactions are considered. Filtering by experienced participants provides insights into informed trading behavior, adding weight to the buying signals. This suggests knowledgeable investors are leading or following the market trend.

- **Main Filter Metric**: `experienced_net_buyers_change`
- **Time Frame**: 1 week
- **Sorting Order**: DESC
- **Use Cases**:
  - **Informed Trading**: Identifies tokens favored by experienced traders.
  - **Market Sentiment**: Gauges the sentiment of knowledgeable investors.

### Risky Bets

Find tokens with lower market cap but promising attributes like net buyers, buyer pressure, steady volume, security, and price trends. Filters out higher market cap coins. This category focuses on lower market cap tokens that might offer higher returns but come with increased risk.

- **Main Filter Metric**: `market_cap`
- **Sorting Order**: DESC
- **Use Cases**:
  - **High-Risk Investments**: Identifies high-risk, high-reward investment opportunities.
  - **Market Exploration**: Helps in exploring new and emerging tokens with potential for significant growth.

### Blue Chip

Focus on established tokens with substantial market cap, recent positive price changes, steady volume, high security, and positive trends, offering stability and reliability. Established tokens, using market cap and token age filters to help remove smaller, newer, risky low cap coins. This strategy focuses on stable, well-established tokens that have proven their reliability over time.

- **Main Filter Metric**: `price_percentage_change_usd`
- **Time Frame**: <time frame is based on the request, default = day>
- **Sorting Order**: DESC
- **Use Cases**:
  - **Long-Term Investment**: Identifies stable tokens for long-term investment strategies.
  - **Portfolio Diversification**: Helps in building a diversified portfolio with reliable tokens.

## Use Cases

### Token Explorer

One method here, as a workaround, is to create a polling schedule (say, every 10 minutes) to fetch data from all strategies, with loose search parameters and combine the data. This will fetch a large list of tokens. Store them, combine them in your backend, remove duplicates, and then filter the data on the metric you want.

### Token Page Enrichment

Enrich token pages with data from various strategies to provide comprehensive insights and analytics.

### Serve Lists of Tokens

Serve lists of tokens that meet certain criteria to wallet pages, analytics tools, exploration pages, trading signals, telegram bots, etc.

### AI Advisors

After fetch all the token data you want, you can use openai API or another LLM to analyse the data and produce recommendations and signals.

## Gotchas

- Each strategy returns a maximum of 200 tokens.
- There is no pagination on the results - new endpoint coming soon.
- Custom endpoint to build custom searches - new endpoint coming soon.
- Token categories - coming soon.
- If you need a token's total holders, you can use the owners API.
- Discovery API endpoints support ERC20 tokens only [similar to Moralis Money].
- The Discovery API doesn't return alpha metrics such as liquidity, total volume, buy pressure or net volume for the following token types: Stablecoins such as Tether and USDC or wrapped Native Tokens such as WETH

## How Can I Get Access?

Speak to our sales team. It's only available within our Enterprise plans. Let's discuss your use case and requirements and we can enable trial access for you to explore the data. Email success@moralis.io to arrange a demo.
