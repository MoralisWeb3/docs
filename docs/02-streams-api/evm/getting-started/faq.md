---
title: "🙋 FAQ"
sidebar_position: 20
description: "This FAQ page provides answers to common questions about our product. Learn more about features, compatibility, installation, and more."
---

## Is Streams API in production?

Yes, our Streams API is in production now.

## How are Streams priced?

Streams consume Compute Units similar to our other APIs. Please see [Records and pricing](/streams-api/evm/records-and-pricing) for more details.

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

On our paid plans you can have up to 200 active streams, and each stream can support listening to millions of addresses in a single configuration.  

The free plan is limited to 1 active stream.

You can contact our support team at [hello@moralis.io](mailto:hello@moralis.io) if you need a higher limit, we can support an unlimited number of streams.

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

**Summary**

- A record is either a transaction (`txs`), log (`logs`) or internal transactions (`txsInternal`) in the webhook response.
- Records is the base for usage of Streams
- Records are only counted towards your usage for webhooks with `confirmed:true` so webhooks `withconfirmed:false` are **free**
- Decoded logs are also free they do NOT count as `Records`.

## What is a record?

A record is either a transaction (`txsin` response), log (`logs`in response) or internal transaction (`txsInternalin` response). The number of records in a webhook is the sum of `txs + logs + txsInternal`.

For each record your account will be charged 15 compute units.

In the header of a webhook, you can find the total number of records in that webhook in the header `x-records-charged`.

In this example, the `x-records-charged` is `20` so the webhook contains 20 records.

```json
headers: {
    'x-region': 'us-west-2',
    'x-queue-size': '0',
    'x-records-charged': ‘20’
    'x-signature': '0xdf49163b5273b50a8da48e82b7254b45d81aeee9a02f1909a45d7aaea240e9c2',
  }
```

Only confirmed blocks will be charged, unconfirmed blocks will have `'x-records-charged': ‘0’`.

You can read more about pricing on the [Records and pricing](/streams-api/evm/records-and-pricing) page.
