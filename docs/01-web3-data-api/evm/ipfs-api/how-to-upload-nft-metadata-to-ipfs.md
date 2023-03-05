---
title: "How to upload NFT metadata to IPFS"
slug: "../how-to-upload-nft-metadata-to-ipfs"
description: "Learn how to upload NFT metadata to IPFS network using Moralis IPFS API."
sidebar_label: "Upload NFT metadata to IPFS"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Upload NFT metadata to IPFS

In order to upload NFT metadata to IPFS, Moralis provides you a [uploadFolder](/web3-data-api/evm/reference/upload-folder) endpoint to do so.

Here you'll need two parameters: `path` and `content`.

Once you have obtained both the `path` and `content`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

	const abi = [
    {
    	path: "metadata.json",
    	content: {
      	name: "NFT Name",
        description: "This will be the NFT description.",
        image: "ipfs://bafybeihewi4brhhmjqvquwdqnlzhnamfh26txwmw2fe4nfswfckpthowna/brandResoursesMage2.svg",
        attributes: [
          {
            "trait_type": "Base",
            value: "Starfish"
          },
          {
            "trait_type": "Eyes",
            value: "Big"
          },
          {
            "trait_type": "Mouth",
            value: "Surprised"
          },
      },
    },
	];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

  console.log(response.toJSON());
}

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const abi = [
    {
    	path: "metadata.json",
    	content: {
      	name: "NFT Name",
        description: "This will be the NFT description.",
        image: "ipfs://bafybeihewi4brhhmjqvquwdqnlzhnamfh26txwmw2fe4nfswfckpthowna/brandResoursesMage2.svg",
        attributes: [
          {
            "trait_type": "Base",
            value: "Starfish"
          },
          {
            "trait_type": "Eyes",
            value: "Big"
          },
          {
            "trait_type": "Mouth",
            value: "Surprised"
          },
      },
    },
	];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

  console.log(response.toJSON());
}

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api
import json
import base64

api_key = "YOUR_API_KEY"

content = {
      	"name": "NFT Name",
        "description": "This will be the NFT description.",
        "image": "ipfs://bafybeihewi4brhhmjqvquwdqnlzhnamfh26txwmw2fe4nfswfckpthowna/brandResoursesMage2.svg",
        "attributes": [
          {
            "trait_type": "Base",
            "value": "Starfish"
          },
          {
            "trait_type": "Eyes",
            "value": "Big"
          },
          {
            "trait_type": "Mouth",
            "value": "Surprised"
          }
        ]
}

body = [
    {
    	"path": "metadata.json",
    	"content": base64.b64encode(bytes(json.dumps(content), 'ascii')).decode('ascii')
    }
]


result = evm_api.ipfs.upload_folder(
    api_key=api_key,
    body=body,
)

print(result)
```

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
[
  {
    "path": "https://ipfs.moralis.io:2053/ipfs/QmfL6fMaYJDnizFVj4wxyutDnGMePG2JL95rN2A5mcWyB1/moralis/logo.webp"
  }
]
```

Congratulations 🥳 You just uploaded your NFT metadata to IPFS with just a few lines of code using the Moralis IPFS API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [uploadFolder](/web3-data-api/evm/reference/upload-folder)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
