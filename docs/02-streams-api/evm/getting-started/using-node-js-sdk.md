---
title: "Manage Streams via SDK"
slug: "../using-node-js-sdk"
description: "Learn how to use the Moralis Streams API to monitor a wallet with the SDK. Create a stream, install the SDK, attach an address, and receive webhooks with transaction details."
sidebar_position: 1
---

In these examples, we will learn how to create and manage a Stream.

In order to use the Moralis Streams API, you can either use the SDK (programmatically) or via our UI dashboard.

:::tip
Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps.
:::

## Step 1: Create a Stream

In order to create a stream, Moralis provides you with a [add](/streams-api/evm/reference/create-stream) endpoint to do so.

Here you'll need 5 initial required parameters to create a stream, you can update these parameters later on or add additional ones:
- `webhookUrl`: Webhook URL where moralis will send the POST request.
- `description`: A description for this stream.
- `tag`: A user-provided tag that will be send along the webhook, the user can use this tag to identify the specific stream if multiple streams are present.
- `chains`: An array of chains to monitor.
- At least one of `includeContractLogs`, `includeNativeTxs`, `includeInternalTxs` options must be set to true.

Once you've obtained the parameters, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;

const runApp = async () => {
    await Moralis.start({
        apiKey: "YOUR_API_KEY",
    });

    const response = await Moralis.Streams.add({
        webhookUrl: "https://webhook.site/1e7ded60-9b44-4708-8a2e-d1c86b2e82d8", // replace with your own webhook URL
        description: "My first stream",
        tag: "my_stream",
        chains: ["0x1"],
        includeNativeTxs: true,
    });

    console.log(response.toJSON().id); // print the stream id
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import streams

api_key = "YOUR_API_KEY"

stream_body = {
    "webhookUrl": "https://webhook.site/1e7ded60-9b44-4708-8a2e-d1c86b2e82d8",
    "description": "my first stream",
    "tag": "my_stream",
    "chainIds": ["0x1"],
    "includeNativeTxs": True,
}

results = streams.evm_streams.create_stream(api_key=api_key, body=stream_body)
print(results["id"]) # print the stream id
```

</TabItem>
</Tabs>

## Step 2: Update a Stream

Now that we have the stream id from the previous step, we can update the stream with additional parameters.
In this example, we will add the `includeContractLogs` parameter to the stream and make it listen for ERC20 transfers, but you can add any other parameter you want.

We will make use of the [update](/streams-api/evm/reference/update-stream) endpoint to do so.

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const runApp = async () => {
    await Moralis.start({
        apiKey: "YOUR_API_KEY",
    });

    const ERC20TransferABI = [
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "from",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "to",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
    ];

    const topic = "Transfer(address,address,uint256)";

    const response = await Moralis.Streams.update({
        id: "4f7dbfb3-42c9-4d8d-bbba-975ea2d2b1a1", // stream ID from the previous snippet
        abi: ERC20TransferABI,
        includeContractLogs: true,
        topic0: [topic],
        description: "My first stream updated",
    });

    console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import streams

api_key = "YOUR_API_KEY"

erc20_transfer_abi = [
    {
        "anonymous": False,
        "inputs": [
            {"indexed": True, "name": "from", "type": "address"},
            {"indexed": True, "name": "to", "type": "address"},
            {"indexed": True, "name": "value", "type": "uint256"},
        ],
        "name": "Transfer",
        "type": "event",
    }
]
topic = "Transfer(address,address,uint256)"

params = {
    "id": "4f7dbfb3-42c9-4d8d-bbba-975ea2d2b1a1", # stream ID from the previous snippet
}

stream_body = {
    "abi": erc20_transfer_abi,
    "includeContractLogs": True,
    "topic0": [topic],
    "description": "my first stream updated",
}

results = streams.evm_streams.update_stream(
    api_key=api_key, body=stream_body, params=params
)
print(results)
```

</TabItem>
</Tabs>


## Step 3: Delete a Stream

If you want to delete a stream, you can use the [delete](/streams-api/evm/reference/delete-stream) endpoint.

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const runApp = async () => {
    await Moralis.start({
        apiKey: "YOUR_API_KEY",
    });

    const response = await Moralis.Streams.delete({
        id: "4f7dbfb3-42c9-4d8d-bbba-975ea2d2b1a1", // stream ID from the previous snippet
    });

    console.log(response.toJSON());
};

runApp();

```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import streams

api_key = "YOUR_API_KEY"

params = {
    "id": "4f7dbfb3-42c9-4d8d-bbba-975ea2d2b1a1",
}

results = streams.evm_streams.delete_stream(api_key=api_key, params=params)
print(results)

```

</TabItem>
</Tabs>

## Step 4: Add an Address to a Stream

Now that we have a stream, we can add an address to it. You can either add individual addresses or a batch. In this example, we will add a list of addresses to the stream.

We will make use of the [addAddress](/streams-api/evm/reference/add-address-to-stream) endpoint to do so.

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const runApp = async () => {
    await Moralis.start({
        apiKey: "YOUR_API_KEY",
    });

    const list = [
        "0xf3d8d9f1f1ccbc8f7e313b7e7cdaa1d6e5b2c2f2",
        "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        "0x6b175474e89094c44da98b954eedeac495271d0f",
    ];
    const response = await Moralis.Streams.addAddress({
        id: "4f7dbfb3-42c9-4d8d-bbba-975ea2d2b1a1", // stream ID from the previous snippet,
        address: list,
    });

    console.log(response.toJSON());
};

runApp();

```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import streams

api_key = "YOUR_API_KEY"

params = {
    "id": "4f7dbfb3-42c9-4d8d-bbba-975ea2d2b1a1",
}

list = [
    "0xf3d8d9f1f1ccbc8f7e313b7e7cdaa1d6e5b2c2f2",
    "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    "0x6b175474e89094c44da98b954eedeac495271d0f",
]
stream_body = {"address": list}

results = streams.evm_streams.add_address_to_stream(
    api_key=api_key, body=stream_body, params=params
)
print(results)

```

</TabItem>
</Tabs>


## We are Live! 🎉
### Mandatory Test Webhook 🚨

Whenever you create or update a stream, you will receive a test webhook.

You have to return status code 200 for the stream to start. Alternatively, you can return any 20x status code (e.g., 200, 201, 202, etc.) for the stream to start.

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

Now, whenever the address you monitor is involved in an incoming or outgoing transaction, you will receive a webhook with the transaction details.

### Two Webhooks for Each Event

You will receive two webhooks for each event.

The first webhook will come as soon as the transaction is included in a block and has **confirmed:false**. This means the block in which the event occurred still runs the risk of getting dropped because of blockchain reorganization. You are not charged for unconfirmed webhooks, only for the confirmed ones.

The second webhook will come once the block in which the event happened has minimal chance of being dropped (the chance is never zero as it is all probabilistic). This second webhook will have **confirmed:true**.

### Edge Cases

In rare cases, the webhook with **confirmed:true** may come before the one with **confirmed:false**; please ensure to handle this scenario on your end.


## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [Stream API refference](/streams-api/evm/evm/reference)

## Next Steps

Learn how to use the Moralis Streams API to build dapps:

- [Check our Tutorials](/streams-api/evm/tutorials)


## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
