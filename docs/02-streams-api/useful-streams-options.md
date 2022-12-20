---
title: "Useful Streams options"
slug: "useful-streams-options"
sidebar_position: 6
descriptions: "This page provides information about the various options available when creating a stream with Useful Streams. Learn more about the includeContractLogs, includeInternalTxs, and advanced options to customize your stream."
---

## Include Contract Logs

The `includeContractLogs` option will include all contract logs in the webhook, should be set to true if you are monitoring a contract. If you are monitoring a wallet address you can set this to `true` to also get the contract logs if a wallet interacts with a contract

## Internal Transactions

You can also monitor all internal transactions happening on chain by setting the `includeInternalTxs` to `true`.

## Include Native Transactions

You can decide to also include Native Transactions

## Advanced Options

The Create Stream endpoint also supports advanced options. With this option you can have more control over the topics you are passing to the stream. For each topic you can have advanced options that include the `topic`, a filter and a `includeNativeTxs` field which indicates if you want to include native transactions.