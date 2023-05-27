---
title: "Mandatory Test Webhook"
slug: "mandatory-test-webhook"
sidebar_position: 7
---

Whenever you create or update a stream, you will receive a test webhook.

You have to return status code 200 for the stream to start.

The test body will look like this:

```json
{
  "abi": [],
  "block": {
    "number": "",
    "hash": "",
    "timestamp": ""
  },
  "txs": [],
  "txsInternal": [],
  "logs": [],
  "chainId": "",
  "confirmed": true,
  "retries": 0,
  "tag": "",
  "streamId": "",
  "erc20Approvals": [],
  "erc20Transfers": [],
  "nftTokenApprovals": [],
  "nftApprovals": {
    "ERC721": [],
    "ERC1155": []
  },
  "nftTransfers": [],
  "nativeBalances": []
}
```

## How to detect a test webhook

A test stream can be identified when all the fields/properties of the webhook payload are empty. In particular, the streamId field will be an empty string. Other fields such as `abi`, `block`, `txs`, `logs`, etc., will also be empty or contain no data.



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="typescript" label="Typescript">

```typescript
import express, { Request, Response } from 'express';
import { EvmStreamResult } from '@moralisweb3/common-streams-utils';

const app = express();
app.use(express.json());

const isTestStream = (webhookData: EvmStreamResult) => webhookData.streamId === '';

app.post('/webhook', (req: Request, res: Response) => {
    const webhookData: EvmStreamResult = req.body;

    // Check if its a test stream, if so, do nothing and return 200
    if (isTestStream(webhookData)) {
        console.log('Test stream received');
        return res.status(200).send('ok');
    }

    // Check if its a real stream, run your code logic and return 200
    console.log('Real stream received');
    console.log(webhookData);
    return res.status(200).send('ok');
});
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript Javascript
const express = require('express');

const app = express();
app.use(express.json());

const isTestStream = (webhookData) => webhookData.streamId === '';

app.post('/webhook', (req, res) => {
    const webhookData = req.body;

    // Check if its a test stream, if so, do nothing and return 200
    if (isTestStream(webhookData)) {
        console.log('Test stream received');
        return res.status(200).send('ok');
    }

    // Check if its a real stream, run your code logic and return 200
    console.log('Real stream received');
    console.log(webhookData);
    return res.status(200).send('ok');
});
```

</TabItem>
</Tabs>