---
title: "Compute Units (CU)"
slug: "compute-units-cu"
description: "Learn more about what is Compute Units and how does it affects your pricing."
sidebar_position: 7
---
All Moralis plans have generous limits on the number of requests you can make per month. How many included requests you have depends on the plan you have, check the [pricing page](https://moralis.io/pricing) for more details.

Some requests are more expensive than others. By giving some heavy requests higher weight, we ensure that you only pay for what you use and not a cent more. 

This allows you to get cheaper requests for most use cases while protecting our systems from abuse by weighing the computationally expensive endpoints.

## What is a Compute Unit (CU)?

A compute unit is a measure of the requests needed to query computationally expensive API endpoints. Each request has both **price** and **rate limit cost** that are measured in terms of compute units.

### Price

Request price refers to the amount of compute units that will be calculated towards your API usage billing.

See more [here](https://docs.moralis.io/reference/compute-units) for details on each API endpoints CUs.

### Rate limit Cost

On the other hand, request rate limit cost refers to the amount of compute units that an API request cost in terms of rate limits.

Click [here](https://docs.moralis.io/docs/rate-limits) to learn more about rate limits and how you can avoid getting rate limited.

## How to Check Compute Units?

To check the latest compute units of our API offerings, you can use [endpointWeights](https://docs.moralis.io/reference/endpointweights) to do so.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require('moralis').default;

await Moralis.start({
  apiKey: 'YOUR_API_KEY',
  // ...and any other configuration
});

const response = await Moralis.EvmApi.utils.endpointWeights();

console.log(response?.toJSON());
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis  from 'moralis';

await Moralis.start({
  apiKey: 'YOUR_API_KEY',
  // ...and any other configuration
});

const response = await Moralis.EvmApi.utils.web3ApiVersion();

console.log(response?.toJSON());
```

</TabItem>
</Tabs>

Your output for the API request will be as follows:

```json
[
  {
    "endpoint": "getBlock",
    "path": "/block/{block_number_or_hash}",
    "price": 5,
    "rateLimitCost": 5
  },
  {
    "endpoint": "getContractEvents",
    "path": "/{address}/events",
    "price": 2,
    "rateLimitCost": 2
  },
  {
    "endpoint": "getTransactions",
    "path": "/transaction/{transaction_hash}",
    "price": 1,
    "rateLimitCost": 3
  }
]
```

where `price` refers to how much CU does the API request cost in terms of billing and `rateLimitCost` refers to how much CU does the API request cost in terms of rate limits.