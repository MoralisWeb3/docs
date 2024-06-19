---
title: "Error Handling"
slug: "../error-handling"
sidebar_position: 5
---

Moralis guarantees 100% delivery of webhooks. Still, you can have errors in your streams for example if your server is down. Moralis will retry to send the webhook in intervals. If the webhook is not delivered after 24 hours and you still want to receive the failed webhooks after some time you can manually replay the failed webhooks.

### Error State

Your Stream can enter into error state on the following 2 scenarios:

1. Your webhook success-rate is below 70%
2. Your server is not consuming the webhooks fast enough so a queue start to build up and reached the limit of 10k queued, you can monitor the size of the queue with the header x-queue-size when you receive the webhook, You need to ensure your server can consume all webhooks fast enough so a queue doesnt build up, moving the streams to a closer region will help reduce the time.

A stream in Error state will stop sending webhook but will continue saving them in history and the retry schedule will resume when the stream is enabled again.

If your Stream enters Error State you will receive a Email notification so you can act before it gets terminated.

### Terminated State

If your Stream stays in Error State for 24 Hours it will be terminated.

A Terminated Stream will not send webhooks and will not process any new blocks, this means the blocks will be dropped.

If your Stream is terminated you will receive a Email notification

### Retry Intervals

| Retry | Interval |
| :---- | :------- |
| 0     | 1 min    |
| 1     | 10 min   |
| 2     | 1 hour   |
| 3     | 2 hours  |
| 4     | 6 hours  |
| 5     | 12 hours |
| 6     | 1 day    |

### See failed webhooks

The Streams API provides an endpoint to get all failed webhooks. It is useful to replay the failed webhooks. Different plans will allow up to 1 weeks retention.

**Programmatically**

```javascript
const history = await Moralis.Streams.getHistory({ limit: 100 });
```

**Via WebUI**

1. Go to Failed Deliveries. All your failed deliveries are listed here.

**Response**

The Response is a list of failed webhooks that are uniquely identified by id. The payload contains the webhook details.

```json
{
  "result": [
    {
      "id": "HISTORY_ID",
      "date": "string",
      "payload": {
        // the failed webhook
      },
      "tinyPayload": {
        "block": {},
        "chainId": "",
        "amount": 0
      },
      "streamId": "STREAM_ID",
      "tag": "TAG",
      "errorMessage": "string",
      "webhookUrl": "string"
    }
  ],
  "total": "number",
  "cursor": "string"
}
```

### Replay Failed Webhook

You can replay (retry) a failed webhook by calling the specific endpoint.

**Programmatically**

```javascript
await Moralis.Streams.retry({ id: "HISTORY_ID", streamId: "STREAM_ID" });
```

**Via WebUI**

1. Go to Failed Deliveries.
2. Click on the `replay` icon against your failed delivery

### Via Swagger or HTTP

You can use the Swagger UI or make an API call to the endpoint.

```curl
curl -X 'POST'
  '<https://api.moralis-streams.com/history/replay/WEBHOOK_ID>'
  -H 'accept: application/json'
  -H 'x-api-key: YOUR_API_KEY'
  -H 'Content-Type: application/json'
```

### Webhook Success rate

Every Stream starts with a success rate of 100% per webhook URL. For every failed webhook the rate decreases by 1% per webhook URL. For every successful webhook the rate increases by 1% per webhook URL where the maximum is 100%. If the success rate is below 70% per webhook URL the stream will be discontinued and an email is sent to you. The status of your stream will be set to `error`.

If you want to continue receiving events you can update the status of a stream to `active`.
