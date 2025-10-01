---
title: "FAQ"
sidebar_position: 21
description: "This FAQ page helps you to get answers about our Web3 API, Streams, and product features, enhancing your API integration experience."
---

This article is a Frequently Asked Questions (FAQ) page providing answers to common questions about the Moralis Streams API and its pricing, covering topics such as production status, pricing, configurations, and usage details.

## Is Streams API in production?

Yes, our Streams API is in production now.

## How are Streams priced?

Streams consume [Compute Units](/web3-data-api/evm/reference/compute-units-cu) similar to our other APIs. You can read the article [Records and Pricing](/streams-api/evm/records-and-pricing) to understand how records play a crucial role in the Streams API, allowing you to make the right decisions regarding usage and pricing.

## Can I disable the unconfirmed webhook requests?

You cannot currently disable unconfirmed webhook requests, but you won't be charged for them. We will only charge you for confirmed webhook requests.

## Why do I receive two requests for the same transaction?

One request is sent for the unconfirmed transaction, the other is sent for the confirmed transaction.

You are only charged for confirmed transactions/webhook requests.

## After how many blocks is considered a transaction as confirmed?

See [number of blocks per chain for confirmed transactions](/streams-api/evm#supported-chains)

## How many addresses can I add to a stream?

Starter Plan accounts can add up to 10k addresses. Pro and Business plans can add up to 50k addresses.

If needed, you can increase your limit by contacting our support team at hello@moralis.io.

Enterprise plans can have fully customized limits with no hard caps - the Streams API works with up to 100M addresses. You can also use the "listening to all addresses" feature separately for contracts.

## How many separate streams can I create?

On Moralis' paid plans, you can have up to 200 active streams, and each stream can support listening to millions of addresses in a single configuration.

The free plan is limited to 1 active stream.

If you require more streams than your current plan allows, reach out to our support team at [hello@moralis.io](mailto:hello@moralis.io), as we can support an unlimited number of streams to suit your needs.

## Are there any events lost when a stream or the filters for a stream get updated?

No, nothing is lost when a stream gets updated or the filters for a stream get updated.

## Is there any limit on how many filters I can add to a Stream?

No, There is no limit on how many filters you can add to a stream. You can add as many as you want.

## Does adding more complex filters (eg: Over 500k address filters) in a stream affect the delivery time of stream?

No, the complexity of filters have no affect on the delivery speed of stream.

## Why is the ABI required to listen to the event?

We want to make sure you have the data for the exact event you are listening to.

For example the transfer event is very similar for both ERC20 transfers and NFT transfers. They both have Transfer(address, address, uint256), but actually they are different:
ERC20 Transfer(address from, address to, uint256 value)
ERC721 Transfer(address from, address to, uint256 tokenId)

Another example could be that one smart contract uses the 'indexed' keyword (meaning that a parameter will be indexed) and another smart contract doesn't.

So only by knowing the ABI can we 'exactly' get you the event that you want to listen to.

## Why don't I see all the internal transactions from my transaction?

The answer to this question depends on your specific Stream configuration. So let's assume that you are listening to a "Wallet Transfer" and let's assume that your transaction is something like a UniSwap transaction or similar.

An internal transaction is any interaction that a contract does with a specific address (or any internal call within a contract). We listen to the interactions you've set up in your Stream. So if your Stream was set up as a "Wallet Transfer" then there are a couple of points to mention:

1. We only provide the internal transactions where there is a transfer of value.
2. We only provide the internal transactions that mention the addresses you're watching.

Please also ensure that you have selected to receive Internal Transactions (`txsInternal`) in your Stream.

If you still require support, please contact us in your Slack channel, or drop a message to the forum with as much detail as you can provide.

## Why don't I see all the logs from my transaction?

The answer is similar to above. The answer depends on your specific Stream configuration. So let's assume that you are listening to a "Wallet Transfer" and let's assume that your transaction is something like a UniSwap transaction or similar.

We provide log data for the interactions you've set up in your Stream. So if you have set up a "Wallet Transfer" stream then we only provide the logs where your address is mentioned in the Topics or the Data.

Please also ensure that you have selected to receive Contract Interactions (`logs`) in your Stream.

If you still require support, please contact us in your Slack channel, or drop a message to the forum with as much detail as you can provide.

## What is a record?

Records are the basic unit for calculating your Streams usage, with charges applied only to webhooks with the field `confirmed:true`. Webhooks set to `withconfirmed:false` and decoded logs are both free of charge.

In Moralis Streams, a **record** refers to either a transaction (`txs` in response), a log (`logs` in response), or an internal transaction (`txsInternal` in response). The total number of records within a webhook is calculated as the sum of `txs + logs + txsInternal`.

For every record within a webhook, your account will be charged 10 [Compute Units](/web3-data-api/evm/reference/compute-units-cu). To identify the total number of records in a webhook, check the `x-records-charged` field within the webhook's header.

:::tip
Please note that only confirmed blocks will require charges, with unconfirmed blocks having `'x-records-charged': '0'`.
:::

In the following code example, `x-records-charged` is set to `20`, indicating the presence of 20 records:

```json
headers: {
    'x-region': 'us-west-2',
    'x-queue-size': '0',
    'x-records-charged': '20',
    'x-signature': '0xdf49163b5273b50a8da48e82b7254b45d81aeee9a02f1909a45d7aaea240e9c2',
}
```

:::tip
You can read the article [Records and Pricing](/streams-api/evm/records-and-pricing) to understand how records play a crucial role in the Streams API, allowing you to make the right decisions regarding usage and pricing.
:::
