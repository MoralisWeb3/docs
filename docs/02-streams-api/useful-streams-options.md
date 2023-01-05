---
title: "Useful Streams options"
slug: "useful-streams-options"
sidebar_position: 6
description: "This page provides information about the various options available when creating a stream with Useful Streams. Learn more about the includeContractLogs, includeInternalTxs, and advanced options to customize your stream."
---

This page provides information about the various options available when creating a stream with Useful Streams. Learn more about the includeContractLogs, includeInternalTxs, and advanced options to customize your stream.

## Include Contract Logs

The `includeContractLogs` option will include all contract logs in the webhook, should be set to true if you are monitoring a contract. If you are monitoring a wallet address you can set this to `true` to also get the contract logs if a wallet interacts with a contract

## Internal Transactions

You can also monitor all internal transactions happening on chain by setting the `includeInternalTxs` to `true`.

## Include Native Transactions

You can decide to also include Native Transactions

## Advanced Options
An array of advanced option objects that allow you to specify additional options for creating a stream. It has the following fields:

`topic0`: A string that specifies the topic0 to listen to. This field is required.

`filter`: A custom filter object that allows you to specify conditions that the data must meet in order to be included in the stream. This field is optional.

`includeNativeTxs`: A boolean that indicates whether to include native transactions in the stream in addition to contract logs. This field is optional.

### Use Case

Advanced Options are useful when you want to narrow down the data that is included in the stream to only include specific types of events or transactions. For example, you might only want to listen to transfers of a certain amount or from a particular address.

To use the advancedOptions object, you must specify a `topic0` that you want to filter. You can then use the `filter` field to specify conditions that the data must meet in order to be included in the stream. You can also use the `includeNativeTxs` field to specify whether to include native transactions in the stream in addition to contract logs. This can be useful if you want to track all activity on the blockchain, not just contract activity.

### Example

```json
{
  "topic0": "Transfer(address,address,uint256)",
  "filter": {
    "and": [
      { "eq": ["from", "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5"] },
      { "gt": ["amount", "100000000000000000000"] }
    ]
  },
  "includeNativeTxs": false
}
```

In this example, we are listening to the ERC20-Transfer `Transfer(address,address,uint256)`. We are also using the `filter` field to specify that we only want to include transfers where the from field is equal to the address `0x283af0b28c62c092c9727f1ee09c02ca627eb7f5` and the amount that was sent is greater than `100` (converted to wei). Finally, we are using the includeNativeTxs field to specify that we do not want to include native transactions in the stream.