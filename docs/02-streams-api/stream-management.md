---
title: "Stream Management"
slug: "stream-management"
sidebar_position: 13
---

## GET Streams

You can see a list of all your streams by calling the following method:

```javascript
const streams = await Moralis.Streams.getAll({  
  limit: 100, // limit the number of streams to return  
});  
Or you can see all streams in the Admin Panel
```

Or you can see all streams in the Admin Panel

**Response**

```json
{  
  "result": \[  
    {  
      "webhookUrl": "string",  
      "description": "string",  
      "tag": "string",  
      "topic0": \[],  
      "includeNativeTxs": true,  
      "allAddresses": false,  
      "includeContractLogs": true,  
      "advancedOptions": [{  
        "topic0": "string",  
        "includeNativeTxs": true,  
        "filter": {}  
      }],  
      "abi": \[],  
      "filter": "string",  
      "address": "string",  
      "chainIds": [  
        "string"  
      ],  
      "id": "3fa84f64-5717-4562-b3fc-2c963f66afa6",  
      "status": "active",  
      "statusMessage": "string"  
    }  
  ],  
  "cursor": "string",  
  "total": 1  
}
```

## Monitor Stream

Sometimes you want to check if a stream is still active or if something went wrong. When you query all your streams you can see the status of the stream. There are three possible states: `active`, `paused` and `error`.

## Stream Settings

Moralis sets a default region for your stream. You can change the region anytime. Choose the region that is closest to your backend for the best performance.

## Set Settings

**Programmatically**

```javascript
import Moralis from "moralis";

Moralis.start({  
  apiKey: "YOUR_API_KEY",  
});

await Moralis.Streams.setSettings({  
  region: "eu-central-1", // 'us-east-1' | 'us-west-2' | 'eu-central-1'  
});
```

**Via WebUI**

1. Go to Settings
2. Choose a region which is closest to your backend
3. Click on Save Changes

## Update Stream

In some cases you want to add a chain to an already existing stream or change the webhook url. Luckily you can easily update your streams.

**Programmatically**

Example on how to update the webhook url of a stream:

```javascript
import Moralis from "moralis";

Moralis.start({  
  apiKey: "YOUR_API_KEY",  
});

await Moralis.Streams.update({  
  id: "STREAM_ID",  
  webhook: "<https://YOUR_NEW_WEBHOOK_URL>  
  
",  
});
```

**Via WebUI**

1. Go to Streams.
2. Hover on the last column of the streams table. You will be able to see more options. (Edit, Delete, Pause Stream).
3. Select `Edit` to go to edit form page.
4. Change the things you want to update
5. Click on `Edit Stream`

## Update/Pause a Stream

You can update the status of a stream at any time. Possible values for status are `active`, `paused` and `error`.

For example: In some cases you might want to pause a stream. You can do this by calling the specific endpoint.

**Programmatically**

```javascript
await Moralis.Streams.updateStatus({  
  id: "YOUR_STREAM_ID",  
  status: "paused",  
});
```

**Via WebUI**

1. Go to Streams.
2. Hover on the last column of the streams table. You will be able to see more options. (Edit, Delete, Pause Stream).
3. Select Pause Stream to change the status of your stream

**Via HTTP Request**

```curl
curl -X 'POST'  
  '<https://api.moralis-streams.com/streams/evm/STREAM_ID/status>'  
  -H 'accept: application/json'  
  -H 'x-api-key: YOUR_API_KEY'  
  -H 'Content-Type: application/json'  
  -d '{"status": "paused"}'
```