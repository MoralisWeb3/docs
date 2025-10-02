---
title: "Webhook Security"
slug: "../webhook-security"
sidebar_position: 5
description: "Keep your webhook requests secure with our implementation that signs every request with the web3api key. The signature is included in the request headers and can be easily verified by using our provided JavaScript function or adapting it for your preferred programming language."
---

Keep your webhook requests secure with our implementation that signs every request with the web3api key. The signature is included in the request headers and can be easily verified by using our provided JavaScript function or adapting it for your preferred programming language.

## Securing Webhook Requests

In order to be sure that the webhook requests are received from us and not from another source, we sign every webhook request with the web3api key of the account in order to be able to validate the received request.

The signature is sent in the request headers in `headers["x-signature"]` field, and that signature is created with this implementation from JavaScript: `web3.utils.sha3(JSON.stringify(req.body)+secret)`. What it does it computing the sha3 (the sha3 version from web3) on the concatenation of the request body and the secret (the secret is the web3api key).

## How to verify the signature for the received webhook request

To verify webhook signatures, you need to:
1. Retrieve your account's secret key from Moralis API
2. Generate a signature using the webhook payload and secret
3. Compare it with the signature provided in the `x-signature` header

The examples below show complete implementations including automatic secret key retrieval.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="Node.js (Express)" default>

```javascript
const express = require('express');
const axios = require('axios');
const { Web3 } = require('web3');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

const MORALIS_API_KEY = "YOUR_API_KEY";
let SECRET_KEY = null; // Will cache the secret for the account

async function getMoralisSecret() {
    if (SECRET_KEY === null) {
        try {
            const headers = {
                'accept': 'application/json',
                'X-API-Key': MORALIS_API_KEY
            };

            const response = await axios.get("https://api.moralis-streams.com/settings", { headers });
            SECRET_KEY = response.data.secretKey;
        } catch (error) {
            throw new Error(`Failed to get Moralis secret: ${error.message}`);
        }
    }
    return SECRET_KEY;
}

function verifySignature(req, secret) {
    const providedSignature = req.headers['x-signature'];
    console.log("Provided signature:", providedSignature);

    if (!providedSignature) {
        throw new Error("Signature not provided");
    }

    // Generate signature using JSON.stringify + secret
    const web3 = new Web3();
    const generatedSignature = web3.utils.sha3(JSON.stringify(req.body) + secret);

    console.log("Generated signature:", generatedSignature);

    if (generatedSignature !== providedSignature) {
        throw new Error("Invalid Signature");
    }
}

app.post('/webhook', async (req, res) => {
    try {
        // Verify signature
        const secret = await getMoralisSecret();
        verifySignature(req, secret);

        // Process webhook data
        const webhookData = req.body;
        console.log("✅ Webhook verified");
        console.log(`Data: ${JSON.stringify(webhookData)}`);

        return res.status(200).json({ status: "success" });

    } catch (error) {
        console.error(`❌ Webhook error: ${error.message}`);
        return res.status(401).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

</TabItem>
<TabItem value="python" label="Python (Flask)">

```python
from flask import Flask, request, jsonify
import requests
from web3 import Web3

app = Flask(__name__)

# Force JSON parsing for all requests
@app.before_request
def force_json():
    if request.method == 'POST' and not request.is_json:
        if 'application/json' not in request.content_type:
            request.environ['CONTENT_TYPE'] = 'application/json'

MORALIS_API_KEY = "YOUR_API_KEY"
SECRET_KEY = None  # Will cache the secret for the account

def get_moralis_secret():
    global SECRET_KEY
    if SECRET_KEY is None:
        headers = {'accept': 'application/json', 'X-API-Key': MORALIS_API_KEY}
        response = requests.get("https://api.moralis-streams.com/settings", headers=headers)
        SECRET_KEY = response.json().get('secretKey')
    return SECRET_KEY

def verify_signature(req, secret):
    provided_signature = req.headers.get("x-signature")
    print("Provided signature:", provided_signature)

    if not provided_signature:
        raise TypeError("Signature not provided")

    # Generate signature using request data + secret
    data = req.data + secret.encode()
    signature = "0x" + Web3.keccak(text=data.decode()).hex()

    print("Generated signature:", signature)

    if provided_signature != signature:
        raise ValueError("Invalid Signature")

@app.route('/webhook', methods=['POST'])
def webhook():
    try:
        # Verify signature
        secret = get_moralis_secret()
        verify_signature(request, secret)

        # Parse and process webhook data
        webhook_data = request.get_json()

        print("✅ Webhook verified")
        print(f"Data: {webhook_data}")

        return jsonify({"status": "success"}), 200

    except (TypeError, ValueError) as e:
        print(f"❌ Verification failed: {e}")
        return jsonify({"error": str(e)}), 401
    except Exception as e:
        print(f"❌ Webhook error: {e}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(port=3000, debug=True)
```

</TabItem>
</Tabs>
