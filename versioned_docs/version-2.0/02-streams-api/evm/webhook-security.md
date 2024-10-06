---
title: "Webhook Security"
slug: "webhook-security"
sidebar_position: 9
description: "Keep your webhook requests secure with our implementation that signs every request with the web3api key. The signature is included in the request headers and can be easily verified by using our provided JavaScript function or adapting it for your preferred programming language."
---

Keep your webhook requests secure with our implementation that signs every request with the web3api key. The signature is included in the request headers and can be easily verified by using our provided JavaScript function or adapting it for your preferred programming language.

## Securing Webhook Requests

In order to be sure that the webhook requests are received from us and not from another source, we sign every webhook request with the web3api key of the account in order to be able to validate the received request.

The signature is sent in the request headers in `headers["x-signature"]` field, and that signature is created with this implementation from JavaScript: `web3.utils.sha3(JSON.stringify(req.body)+secret)`. What it does it computing the sha3 (the sha3 version from web3) on the concatenation of the request body and the secret (the secret is the web3api key).

## How to verify the signature for the received webhook request

In JavaScript or python, you can use this function, for other programming languages you can adapt this code. The secret key is the streams secret which you can find in [setting](https://admin.moralis.com/settings) page.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript
const verifySignature = (req, secret) => {
  const providedSignature = req.headers["x-signature"];
  if (!providedSignature) throw new Error("Signature not provided");
  const generatedSignature = web3.utils.sha3(JSON.stringify(req.body) + secret);
  if (generatedSignature !== providedSignature)
    throw new Error("Invalid Signature");
};
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python Python
def verify_Signature(req, secret):
    provided_signature = req.headers.get("x-signature")
    if not provided_signature:
        raise TypeError("Signature not provided")

    data = req.data+secret.encode()
    signature = Web3.keccak(text=data.decode()).hex()

    if provided_signature != signature:
        raise ValueError("Invalid Signature")
```

</TabItem>
</Tabs>
