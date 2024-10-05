---
title: "Records and pricing"
slug: "records-and-pricing"
sidebar_position: 4
description: "Discover how Records are used in Streams API to determine usage and pricing. Records are either a transaction (txs), log (logs) or internal transactions (txsInternal) in the webhook response."
---

Discover how Records are used in Streams API to determine usage and pricing. Records are either a transaction (txs), log (logs) or internal transactions (txsInternal) in the webhook response.

## Summary

- A record is either a transaction (`txs`), log (`logs`) or internal transactions (`txsInternal`) in the webhook response.
- Records is the base for usage of Streams
- Records are only counted towards your usage for webhooks with `confirmed:true` so webhooks with `confirmed:false` are **free**
- Decoded logs are also **free** they do NOT count as `Records`.

## What is the record?

A record is either a transaction (`txs` in response), log (`logs` in response) or internal transaction (`txsInternal` in response). The number of records in a webhook is the sum of `txs + logs + txsInternal`.

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

Only confirmed blocks will be charged, unconfirmed blocks will have `'x-records-charged': ‘0’ `

### Records determine usage

Records handle the usage of Streams API. In your plan, you have an included amount of records for free. You can find your included limits under your [billing page](https://admin.moralis.com/account/billing).

For each transaction, you get two webhooks (read more [here](/streams-api/evm/webhooks-transactions)), records are only counted towards your usage for webhooks with Confirmed status True.

### Check your total consumed record for a period

By using /status (see API [reference](/streams-api/evm/reference/get-stats)) you will get a summary of `totalLogsProcessed`, `totalTxsProcessed`, and `totalTxsInternalProcessed` for your current billing period.

**Example:**

```json
{
  "totalWebhooksDelivered": 1288,
  "totalWebhooksFailed": 17,
  "totalLogsProcessed": 4257,
  "totalTxsProcessed": 0,
  "totalTxsInternalProcessed": 0
}
```

Where your total consumed records for the current billing period would be `"totalLogsProcessed": 4257` + `"totalTxsProcessed": 0` + `"totalTxsInternalProcessed": 0`. In this case total consumption is 4257.

### Check one streams total consumed records for a period

By using /stats/{streamId} (see API [reference](/streams-api/evm/reference/get-stats-by-streamid)) you will get a summary of `totalLogsProcessed`, `totalTxsProcessed`, and `totalTxsInternalProcessed` for that specific stream.

**Example:**

```json
{
  "totalWebhooksDelivered": 0,
  "totalWebhooksFailed": 0,
  "totalLogsProcessed": 0,
  "totalTxsProcessed": 0,
  "totalTxsInternalProcessed": 0,
  "createdAt": "2022-10-25T08:21:00.877Z",
  "updatedAt": "2022-10-25T08:21:00.877Z"
}
```

Where your total consumed records for the current billing period would be `totalLogsProcessed` + `totalTxsProcessed` + `totalTxsInternalProcessed`.

### Records per transaction type

It depends on the selected address activity how many records will be charged

- Contract Interactions (logs)
- Native Transactions (txs)
- Internal Transactions (txsInternal)

| Description                                                                                 | Number of records\* |
| :------------------------------------------------------------------------------------------ | :------------------ |
| Stream with txs, logs and a erc20 transfer event is emitted                                 | 2                   |
| Stream with txs, logs and 10 NFT Tokens (ERC721) were transferred in one transaction        | 11                  |
| Stream with txs, logs and 30 NFT Tokens (ERC1155 Batch) were transferred in one transaction | 2                   |
| Stream with logs and a ERC721 NFT is minted with 100 Tokens                                 | 100                 |
| Stream with txs and a native transfer takes place                                           | 1                   |

\*The number of records for logs depends on the contract emitting the events, more complex contracts could emit more records

### Decoded logs

Moralis will decode and enrich standardized contracts (ERC20/ERC721/ERC1155), for each log that matches one of those contracts, a decoded log will be generated, currently, the decoded logs are:

- erc20Transfers
- erc20Approvals
- nftTransfers

Decoded logs are **free** they do NOT count as `Records`.
