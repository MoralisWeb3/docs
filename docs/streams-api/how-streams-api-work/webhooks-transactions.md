---
title: "Webhooks Transactions"
slug: "webhooks-transactions"
excerpt: "Now whenever an ingoing or outgoing transaction involving the address you are monitoring occurs, you will receive a webhook with the transaction details."
hidden: false
metadata: 
  title: "Webhook Transactions"
  description: "Now whenever an ingoing or outgoing transaction involving the address you are monitoring occurs, you will receive a webhook with the transaction details."
createdAt: "2022-10-21T13:01:31.234Z"
updatedAt: "2022-11-25T12:41:00.452Z"
---
### Two webhooks for each block

You will receive two webhooks for each block that contains the events you are interested in.

The first webhook will come as soon as the block is mined and have `confirmed:false`. This means that the block is still running the risk of being dropped due to a reorganization of the blockchain.

The second webhook will come once enough blocks have been mined after the block containing your events and have `confirmed:true`. This number of blocks is also called `number of confirmations`.

The table with the number of comfirmation required for Moralis to consider a block confirmed can be found here: [supported-chains](https://docs.moralis.io/docs/what-is-streams-api-1#supported-chains)

### Edge cases

In rare cases the webhook with `confirmed: true` may come before the one with `confirmed:false`, please ensure to handle this scenario on your end.

### Verify Webhooks

The Webhook will set a `x-signature` in the header. It is for verifying if the data you will receive is from Moralis. Essentially it is a hash (sha3) of the body and your API Key.

You can verify the webhook with the following code:

```javascript
import Moralis from "moralis";

const { headers, body } = request;

Moralis.Streams.verifySignature({
  body,
  signature: headers["x-signature"],
}); // throws error if not valid
```