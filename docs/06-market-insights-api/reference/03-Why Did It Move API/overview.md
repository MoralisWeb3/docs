---
title: "Why Did It Move API"
sidebar_label: "Overview"
sidebar_class_name: "sidebar-market-data-api"
sidebar_position: 0
slug: "/market-insights-api/reference/why-did-it-move-api/overview"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner
  customText="Get access to the Why did it move API"
  customButtonText="Contact Sales"
  customButtonLink="https://moralis.io/api/why-did-it-move/"
/>

The **Why Did It Move API (WDIM)** is a specialized tool designed to unravel the mystery behind the volatility of tokens and collections, providing users with in-depth insights into the causative factors of market trends.

:::tip Swagger Interface
https://wdim.moralis.io/swagger/
:::

## News Endpoint

The **Why Did It Move API** currently offers the `News` endpoint to retrieve all relevant news articles within the specified date range that may have influenced token or market movement. The results are sorted by date in descending order.

| No. | Method    | Description                                                             | API Reference                                                               | URL                                                                          |
| --- | --------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1   | `getNews` | Returns all news between two dates, sorted by date in descending order. | [Method Documentation](/market-insights/reference/why-did-it-move-api/news) | [https://wdim.moralis.io/swagger-json](https://wdim.moralis.io/swagger-json) |

This endpoint is your gateway to understanding the stories behind the numbers, giving you access to a curated feed of news articles that are potentially related to the movements of specific tokens or the market as a whole.

## Coverage Criteria

- **Market Cap Threshold**: WDIM selectively covers assets with a market capitalization exceeding $300 million. This threshold ensures the focus is on major players that have a noteworthy influence on market movements.

- **Number of Assets**: The exact number of assets covered by WDIM can vary as market capitalizations fluctuate. Typically, this includes approximately 170 assets, but this figure may change in response to current market conditions.

### Key Points

- **Asset Selection**: The inclusion of an asset in WDIM's analysis is based solely on its market capitalization surpassing the $300 million mark.

- **Dynamic List**: The list of assets covered by WDIM is dynamic and adjusts with market changes. As market caps evolve, so does the coverage by WDIM.

- **Focus**: By concentrating on high-market-cap assets, WDIM ensures that the insights provided are relevant to the most impactful and significant market movements.
