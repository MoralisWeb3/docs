---
title: "Rate Limits"
slug: "rate-limits"
description: "Learn more about rate limits and how it can affect your API usage."
sidebar_position: 7
---

Moralis API has rate limit mechanism placed on each of the Moralis API offered. Depending on the [plans](https://moralis.io/pricing/) that you have on your Moralis account, you will have different throughput which will determine how many API calls you can make before getting rate limited.

## Avoiding Rate Limits

In order to avoid rate limitation from the Moralis API, you will need to make sure that the total rate limit cost of your API calls per second should not exceed the given throughout of your chosen plan.

For example, `syncNFTContract` has `rateLimitCost` of 25 CUs/call as shown below.

```json
{
  "endpoint": "syncNFTContract",
  "path": "/nft/{address}/sync",
  "price": 5,
  "rateLimitCost": 25
}
```

Therefore, for both free plan and pro plan users, they will be able to call the `syncNFTContract` API at maximum of, respectively:

- Free Plan (Throughput: 25 CU/s): 25 CUs/s / 25 CUs/call = 1 call/s
- Business Plan (Throughput: 100 CU/s): 100 CUs/s / 25 CUs/call = 4 call/s

If you surpassed the maximum number of calls per second, you will get rate limited by the Moralis API. In this case, if the rate limits happen too frequently, it is recommended that you upgrade to a higher pricing plan to increase your throughput.
