---
title: "RPC Node Rate Limits"
slug: "rate-limits"
description: "Learn more about rate limits and how it can affect your API usage."
sidebar_position: 99
---

Moralis API has rate limit mechanism placed on each of the Moralis API offered. Depending on the [plans](https://moralis.io/pricing/) that you have on your Moralis account, you will have different throughput which will determine how many API calls you can make before getting rate limited.

## Avoiding Rate Limits

In order to avoid rate limitation from the Moralis API, you will need to make sure that the total rate limit cost of your API calls per second should not exceed the given throughout of your chosen plan.

### Rate limit Cost

CUs play a big role in determining how frequently you can send API requests, thanks to something called rate limits. Think of rate limit costs as a way to keep track of your "API health", helping you avoid overloading the system with too many requests in a short span.

By taking a moment to consult the table before making a call, you can avoid unexpected CU charges and keep your API interactions smooth and efficient.

|                              | Starter    | Pro         | Business    | Enterprise |
| ---------------------------- | ---------- | ----------- | ----------- | ---------- |
| CUs Included                 | 10,000,000 | 100,000,000 | 350,000,000 | Custom     |
| API Throughput (CUs/second)  | 1,500      | 1,500       | 3,000       | Custom     |
| Node Throughput (CUs/second) | 100        | 100         | 300         | Custom     |
| Number of Nodes              | 2          | 5           | Unlimited   | Unlimited  |
| Archive Requests             | ✅         | ✅          | ✅          | ✅         |
