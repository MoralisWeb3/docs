---
title: "Webhook Security"
slug: "webhook-security"
sidebar_position: 9
description: "Keep your webhook requests secure with our implementation that signs every request with the web3api key. The signature is included in the request headers and can be easily verified by using our provided JavaScript function or adapting it for your preferred programming language."
---

Keep your webhook requests secure with our implementation that signs every request with the web3api key. The signature is included in the request headers and can be easily verified by using our provided JavaScript function or adapting it for your preferred programming language.

## Securing Webhook Requests

In order to be sure that the webhook requests are received from us and not from another source, we sign every webhook request with the secret stream key of the account in order to be able to validate the received request.

You can set or modify the `streamSecret` in the [Moralis admin panel](https://admin.moralis.io/settings).

The signature is sent in the request headers in `headers["x-signature"]` field, and that signature is created with this implementation from JavaScript: `web3.utils.sha3(JSON.stringify(req.body)+streamSecret)`. What it does it computing the sha3 (the sha3 version from web3) on the concatenation of the request body and the secret. 

## How to verify the signature for the received webhook request

In JavaScript you can use this function, for other programming languages you can adapt this code.


```javascript
const verifySignature = (req, streamSecret) => {
    const webhookSignature = req.headers['x-signature'];
    if (!webhookSignature) return false;
    const generatedSignature = web3.utils.sha3(JSON.stringify(req.body) + streamSecret);
    return generatedSignature === webhookSignature;
};
```


## Example of verifying the signature in JavaScript

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="web3js" label="Web3">

```javascript
import express from 'express';
import Moralis from 'moralis';
import dotenv from 'dotenv';
import Web3 from 'web3';

dotenv.config();

const web3 = new Web3();
const app = express();
app.use(express.json());

Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
});

const verifySignature = (req, streamSecret) => {
    const webhookSignature = req.headers['x-signature'];
    if (!webhookSignature) return false;
    const generatedSignature = web3.utils.sha3(JSON.stringify(req.body) + streamSecret);
    return generatedSignature === webhookSignature;
};

app.post('/webhook', async (req, res) => {
    const { result } = await Moralis.Streams.readSettings();
    const streamSecret = result.secretKey;
    const isSentFromMoralis = verifySignature(req, streamSecret);

    // Check if its sent from Moralis, if not return 401
    if (!isSentFromMoralis) {
        console.log('Not sent from Moralis');
        return res.status(401).send('Unauthorized access');
    }

    // If sent from Moralis, run your logic
    console.log('Request from Moralis received');
    return res.status(200).send('ok');
});
```

</TabItem>
<TabItem value="ethers" label="Ethers.js">

```javascript
import express from 'express';
import Moralis from 'moralis';
import dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();

const app = express();
app.use(express.json());

Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
});

const verifySignature = (req, streamSecret) => {
    const webhookSignature = req.headers['x-signature'];
    if (!webhookSignature) return false;
    const generatedSignature = ethers.id(JSON.stringify(req.body) + streamSecret);
    return generatedSignature === webhookSignature;
};

app.post('/webhook', async (req, res) => {
    const { result } = await Moralis.Streams.readSettings();
    const streamSecret = result.secretKey;
    const isSentFromMoralis = verifySignature(req, streamSecret);

    // Check if its sent from Moralis, if not return 401
    if (!isSentFromMoralis) {
        console.log('Not sent from Moralis');
        return res.status(401).send('Unauthorized access');
    }

    // If sent from Moralis, run your logic
    console.log('Request from Moralis received');
    return res.status(200).send('ok');
});
```

</TabItem>
</Tabs>