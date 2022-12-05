---
title: "How Streams API works"
slug: "how-streams-api-work"
hidden: false
createdAt: "2022-10-21T12:47:42.504Z"
updatedAt: "2022-11-22T11:15:32.864Z"
---
### Intro

With the Moralis Streams API, you can stream blockchain data directly into your backend via webhooks. 

Ethereum, Polygon, Avalanche, BNB Chain, Fantom, Cronos, Arbitrum, Ronin, and associated testnets are supported, with more networks to be added soon.

### Stream Events

![](https://files.readme.io/e1bf26d-mermaid-diagram-2022-11-22-120121.png)

The Streams events are composed of 3 types:

- **Native Transaction (txs)**: Every interaction with the blockchain occurs through a transaction. It includes the total native value transferred and the details of the transaction.
- **Logs (logs)**: If the transaction above was an interaction with a contract address, the contract could emit _logs_ broadcasting what happened in that interaction; each contract can decide whether or not to emit logs
- **Internal Transactions (txsinternal)**: During a contract interaction, the contract could be able to transfer additional native value between addresses because of the nature of the execution, the value transferred is not present in the Native Transaction and only be available through the Internal Transaction record

### How Streams are priced

See [Records and pricing](https://docs.moralis.io/docs/records-and-pricing) 

### Streams API Resources

Below you'll find documentation covering how each part of Streams works - perfect if you're just starting out with the Streams API.

- [Records and pricing](https://docs.moralis.io/docs/records-and-pricing)
- [Useful Streams options](https://docs.moralis.io/docs/streams-options)
- [Mandatory Test Webhook](https://docs.moralis.io/docs/mandatory-test-webhook)
- [Webhooks](https://docs.moralis.io/docs/webhooks)
- [Response body](https://docs.moralis.io/docs/response-body)
- [Monitor multiple addresses](https://docs.moralis.io/docs/monitor-multiple-addresses)
- [Filter Streams](https://docs.moralis.io/docs/filter-streams)
- [Stream Management](https://docs.moralis.io/docs/stream-management)
- [Error handling](https://docs.moralis.io/docs/error-handling)
- [Parse data](https://docs.moralis.io/docs/parse-data)

### Streams API Overview

Learn about common use cases, features, and more in our [overview](https://docs.moralis.io/docs/what-is-streams-api-1).

### Getting started quickly

If you want to try out Streams fast, check out our [quickstart guide](https://docs.moralis.io/docs/your-first-stream-using-js-sdk).