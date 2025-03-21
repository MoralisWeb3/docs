---
title: "Filtered Tokens API FAQ"
description: "Learn how to discover and analyze tokens using powerful filtering capabilities. Filter by metrics like market cap, volume, holders, and more across different time frames to identify market opportunities."
slug: "/web3-data-api/evm/filtered-token-api-faq"
sidebar_position: 1
---

> For the complete API reference, please see the [Get Filtered Tokens API documentation](/web3-data-api/evm/reference/get-filtered-tokens).

## Overview

### What is the Filtered Tokens API?

The Filtered Tokens API allows you to discover and analyze tokens based on various metrics, time frames, and parameters. You can filter tokens by metrics like market cap, volume, holders, and security scores, making it powerful for building token discovery and analysis tools.

### What can I do with this API?

You can filter tokens based on multiple criteria, sort results by specific metrics, and retrieve detailed token information. This is particularly useful for building token discovery tools, analyzing market trends, and identifying trading opportunities.

## Core Concepts

### What metrics can I filter by?

The API supports numerous metrics including:

- Market metrics: marketCap, volumeUsd, fullyDilutedValuation
- User metrics: holders, buyers, sellers, netBuyers
- Experience metrics: experiencedBuyers, experiencedSellers, netExperiencedBuyers
- Price metrics: usdPricePercentChange
- Liquidity metrics: liquidityChange, liquidityChangeUSD
- Security metrics: securityScore
- Age metrics: tokenAge

### What time frames are supported?

The API supports various time frames for metric analysis:

- Short term: tenMinutes, thirtyMinutes
- Medium term: oneHour, fourHours, twelveHours, oneDay
- Long term: oneWeek, oneMonth

### How does pagination work?

The API currently limits results to 100 tokens per request and does not support pagination. You should use your filters effectively to narrow down results within this limit.

## Common Use Cases

### How do I filter for new tokens?

To find recently created tokens:

1. Calculate the Unix timestamp for your desired age (e.g., 10 days ago)
2. Use the tokenAge metric with the "lt" (less than) operator
3. Example: `{"metric": "tokenAge", "lt": calculated_timestamp}`

### How do I ensure token quality?

You can combine multiple filters:

1. Set a minimum security score
2. Check for minimum holder count
3. Verify sufficient liquidity
   Example filters:

```json
[
  { "metric": "securityScore", "gt": 80 },
  { "metric": "holders", "timeFrame": "oneWeek", "gt": 500 },
  { "metric": "liquidityChangeUSD", "gt": 100000 }
]
```

### How do I track trending tokens?

Focus on volume and buyer metrics:

1. Filter for high volume
2. Check for increasing buyers
3. Sort by price change or volume
   Example:

```json
{
  "filters": [
    { "metric": "volumeUsd", "timeFrame": "oneDay", "gt": 500000 },
    { "metric": "buyers", "timeFrame": "oneDay", "gt": 100 }
  ],
  "sortBy": {
    "metric": "volumeUsd",
    "timeFrame": "oneDay",
    "type": "DESC"
  }
}
```

## Technical Details

### What's the request structure?

Required fields in the request body:

- chain: Blockchain identifier (e.g., "0x1" for Ethereum)
- filters: Array of filter objects
- sortBy: Sorting parameters
- limit: Maximum number of results (up to 100)

### How do filters work?

Each filter object requires:

- metric: What to filter on
- timeFrame: Time period (if applicable)
- Comparison operator: gt (greater than), lt (less than), or eq (equals)

### How does sorting work?

The sortBy object requires:

- metric: What to sort by
- timeFrame: Time period (if applicable)
- type: "ASC" or "DESC" for ascending or descending order

## Best Practices

### How should I optimize my queries?

1. Use specific filters to narrow down results
2. Combine multiple relevant metrics
3. Set appropriate thresholds based on chain activity
4. Consider time frames relevant to your use case

### How can I ensure reliable results?

1. Always check the security score for quality
2. Verify sufficient liquidity exists
3. Combine multiple metrics to validate trends
4. Use appropriate time frames for your analysis

## Limitations

### What are the main limitations?

1. Maximum 100 results per request
2. No pagination support
3. Some tokens may lack logos
4. Historical data limited to supported time frames

### How should I handle missing data?

1. Check if logo field exists before using it
2. Verify all required metrics are present
3. Implement fallbacks for missing values
4. Consider multiple time frames for comprehensive analysis
