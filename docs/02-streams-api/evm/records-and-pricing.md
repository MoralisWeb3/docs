---
title: "Pricing & Records"
slug: "records-and-pricing"
sidebar_position: 8
description: "How Records are used in Streams API to determine usage and pricing. Records are either a transaction, log, or internal transactions in the webhook response."
---

This article explains the Record, its pricing, how to check the total records for a specific period, how each record cost depends on the transaction type, and finally the current decoded logs.

## What is the Record?

Records are the basic unit for calculating your Streams usage, with charges applied only to webhooks with the field `confirmed:true`. Webhooks set to `withconfirmed:false` and decoded logs are both free of charge.

In Moralis Streams, a **record** refers to either a transaction (`txs` in response), a log (`logs` in response), or an internal transaction (`txsInternal` in response). The total number of records within a webhook is calculated as the sum of `txs + logs + txsInternal`.

For every record within a webhook, your account will be charged 50 [Compute Units](/web3-data-api/evm/reference/compute-units-cu). To identify the total number of records in a webhook, check the `x-records-charged` field within the webhook's header.

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

## Records Pricing

For each record you consume, your account will be charged 50 compute units.

:::note
Note that each Moralis plan has a certain number of included compute units.
:::

For each transaction, you will get two webhooks:

- One once the transaction is added to a block
- One once the transaction is confirmed

Records are only counted towards your usage for webhooks with the field `confirmed:true`. Webhooks set to `withconfirmed:false` and decoded logs are both free of charge.

:::tip
You can read the article [Webhooks Transactions](/streams-api/evm/webhooks-transactions) to understand more.
:::

### Checking Total Records Consumed for a Specific Period

You can monitor your total record consumption for a specific billing period by utilizing the `/status` endpoint. You can use it to receive a summary of `totalLogsProcessed`, `totalTxsProcessed`, and `totalTxsInternalProcessed`.

The following code example is a response of using the [getStats](/streams-api/evm/reference/get-stats) endpoint:

```json
{
  "totalWebhooksDelivered": 1288,
  "totalWebhooksFailed": 17,
  "totalLogsProcessed": 4257,
  "totalTxsProcessed": 0,
  "totalTxsInternalProcessed": 0
}
```

To calculate the total records consumed for the current billing period, add together the values of `totalLogsProcessed`, `totalTxsProcessed`, and `totalTxsInternalProcessed`.

:::note
Make sure to refer to the [getStats API reference](/streams-api/evm/reference/get-stats) for additional details on using the `/status` endpoint.
:::

### Records Per Transaction Type

The number of records charged depends on the type of transaction activity associated with the selected address. Records are categorized into three transaction types:

- **Contract Interactions (logs)**
- **Native Transactions (txs)**
- **Internal Transactions (txsInternal)**

:::tip
The number of records for logs can vary based on the complexity of the contract emitting the events, with more complex contracts potentially generating additional records.
:::

Below is a breakdown of the number of records typically charged for various transaction scenarios:

| Description                                                                                 | Number of Records\* |
| :------------------------------------------------------------------------------------------ | :------------------ |
| Stream with txs, logs, and an ERC20 transfer event                                          | 2                   |
| Stream with txs, logs, and the transfer of 10 NFT Tokens (ERC721) in one transaction        | 11                  |
| Stream with txs, logs, and the transfer of 30 NFT Tokens (ERC1155 Batch) in one transaction | 2                   |
| Stream with logs and the minting of an ERC721 NFT with 100 Tokens                           | 100                 |
| Stream with txs and a native transfer                                                       | 1                   |

### Decoded Logs

Moralis decodes and enhances standardized contracts such as ERC20, ERC721, and ERC1155. Whenever a log matches one of these contracts, Moralis generates a decoded log.

The current Decoded Logs are:

- erc20Transfers
- erc20Approvals
- nftTransfers

:::note
Decoded logs are **free** they do NOT count as `Records`.
:::
