---
title: "Stream Address Management and Rate Limits"
slug: "stream-address-management-rate-limits"
description: "Learn about managing addresses in a stream, rate limits, and best practices to ensure efficient monitoring using Moralis Streams."
---

# Stream Address Management and Rate Limits

## Adding Addresses to a Stream

When adding new addresses to a stream, the system needs to reload the stream to include the new addresses in its monitoring. This reload process depends on the total number of addresses in the stream and can take several seconds to complete.

### Rate Limits for Add Addresses to a Stream

- **Rate Limit**: A maximum of 5 requests per 5 minutes.
- Each request can include multiple addresses. If you need to add many addresses, it is more efficient to batch them into a single request to avoid triggering rate limits.
- You can safely retry these requests

## Impact on Webhooks

1. **Stream Reload Timing**:

   - If you add an address to a stream right before a transaction happens, the stream might not finish reloading in time to catch the transaction.
   - For example, adding an address to a stream with many addresses just seconds before a block is processed may mean the stream has not completed the reload before the block is published. Consequently, the webhook won’t fire for that block.

2. **Too Many Small Requests**:
   - Sending multiple requests to add addresses in a short period can create a reload loop and also hit the rate limit, slowing down the overall process.

## Best Practices

1. **Batch Requests**:

   - Combine multiple addresses into a single request whenever possible to minimize the number of reloads.

2. **Plan Ahead**:

   - Add addresses well in advance of expected transactions to ensure the stream is fully reloaded and ready to monitor those addresses.

3. **Retrying Webhooks**:
   - If a webhook is missed due to stream reload timing, you can manually trigger the webhook using the [Replay Block Endpoint](https://api.moralis-streams.com/api-docs/#/EVM%20Streams/GetStreamBlockDataToWebhookByNumber).

---

## Retrying Missed Webhooks

If you suspect a missed webhook:

1. **Verify Address Addition**:

   - Check if the address was successfully added to the stream using the `Get Stream Info` endpoint.

2. **Replay Block**:
   - Use the [Replay Block Endpoint](https://api.moralis-streams.com/api-docs/#/EVM%20Streams/GetStreamBlockDataToWebhookByNumber) with the specific block and stream ID to retry missed events.
