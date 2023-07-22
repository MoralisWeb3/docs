---
title: "Using NodeJS SDK"
slug: "../using-node-js-sdk"
description: "Learn how to use the Moralis Streams API to monitor a wallet with NodeJS SDK. Create a stream, install the SDK, attach an address, and receive webhooks with transaction details."
sidebar_position: 2
---

In this example, we will monitor a wallet. Specifically, we'll monitor all incoming and outgoing transactions of that wallet!

In order to use the Moralis Streams API, you can either use the SDK (programmatically) or via our UI dashboard.

### Programmatically

We will use Moralis SDK to create a stream, and you can install the Moralis SDK like this:

```javascript
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

Moralis.start({
  apiKey: "YOUR_API_KEY",
});

const stream = {
  chains: [EvmChain.ETHEREUM, EvmChain.POLYGON], // list of blockchains to monitor
  description: "monitor Bobs wallet", // your description
  tag: "bob", // give it a tag
  webhookUrl: "https://YOUR_WEBHOOK_URL", // webhook url to receive events,
  includeNativeTxs: true,
};

const newStream = await Moralis.Streams.add(stream);
const { id } = newStream.toJSON(); // { id: 'YOUR_STREAM_ID', ...newStream }

// Now we attach bobs address to the stream
const address = "0x68b3f12d6e8d85a8d3dbbc15bba9dc5103b888a4";

await Moralis.Streams.addAddress({ address, id });
```

### Mandatory Test Webhook 🚨

Whenever you create or update a stream, you will receive a test webhook.

You have to return status code 200 for the stream to start.

The test body will look like this:

```json
{
  "abi": {},
  "block": {
    "hash": "",
    "number": "",
    "timestamp": ""
  },
  "txs": [],
  "txsInternal": [],
  "logs": [],
  "chainId": "",
  "tag": "",
  "streamId": : "",
  "confirmed": true,
  "retries": 0,
  "erc20Approvals": [],
  "erc20Transfers": [],
  "nftApprovals": [],
  "nftTransfers": []
}
```

### We are Live! 🎉

Now, whenever the address you monitor is involved in an incoming or outgoing transaction, you will receive a webhook with the transaction details.

### Two Webhooks for Each Event

You will receive two webhooks for each event.

The first webhook will come as soon as the transaction is included in a block and has **confirmed:false**. This means the block in which the event occurred still runs the risk of getting dropped because of blockchain reorganization. You are not charged for unconfirmed webhooks, only for the confirmed ones.

The second webhook will come once the block in which the event happened has minimal chance of being dropped (the chance is never zero as it is all probabilistic). This second webhook will have **confirmed:true**.

### Edge Cases

In rare cases, the webhook with **confirmed:true** may come before the one with **confirmed:false**; please ensure to handle this scenario on your end.
