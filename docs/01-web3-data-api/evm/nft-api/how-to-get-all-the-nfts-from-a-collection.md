---
title: "How to get all the NFTs from a collection"
slug: "../how-to-get-all-the-nfts-from-a-collection"
description: "Learn how to get all NFTs from a collection using Moralis NFT API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-util" python="moralis" />

## Step 2: Get All NFTs From A Collection

In order to get all the NFTs from a collection, Moralis provides you with a `getContractNFTs` endpoint to do so.

Here you'll need two parameters: `address` and `chain`.

Once you've obtained both the `address` and `chain`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-util");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

	const chain = EvmChain.ETHEREUM;
  
  const response = await Moralis.EvmApi.nft.getContractNFTs({
    address,
    chain,
  });
  
  console.log(response.toJSON());
}

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-util";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

	const chain = EvmChain.ETHEREUM;
  
  const response = await Moralis.EvmApi.nft.getContractNFTs({
    address,
    chain,
  });
  
  console.log(response.toJSON());
}

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB", 
    "chain": "eth", 
    "format": "decimal", 
    "limit": 100, 
    # "totalRanges": 0, 
    # "range": 0, 
    "cursor": "", 
    "normalizeMetadata": True, 
}

result = evm_api.nft.get_contract_nfts(
    api_key=api_key,
    params=params,
)

# converting it to json because of unicode characters
print(json.dumps(result, indent=4))
```

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{
  "total": 9991,
  "page": 0,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiIn0sInRva2VuX2FkZHJlc3MiOiIweGI0N2UzY2Q4MzdkZGY4ZTRjNTdmMDVkNzBhYjg2NWRlNmUxOTNiYmIiLCJsaW1pdCI6MTAwLCJvZmZzZXQiOjAsIm9yZGVyIjpbXSwicGFnZSI6MSwia2V5IjoiZmQ5MmE0ODg3MmE4NjIwZTFlNmU0NTk3ODZkMTExYWYiLCJ0b3RhbCI6OTk5MSwiaWF0IjoxNjY3ODA4NzcxfQ.9qXwHyyUKJkzrub-ze-q2gm8dC0dy-jvgF0CJrm5piY",
  "result": [
    {
      "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
      "token_id": "9082",
      "amount": "1",
      "token_hash": "fffdaced3ddfb220d9124289a518bb97",
      "block_number_minted": "12021693",
      "updated_at": null,
      "contract_type": null,
      "name": "CRYPTOPUNKS",
      "symbol": "Ͼ",
      "token_uri": "https://www.larvalabs.com/cryptopunks/details/9082",
      "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk9082.png\",\"name\":\"CryptoPunk 9082\",\"attributes\":[\"Bandana\",\"Big Shades\",\"Shadow Beard\"],\"description\":\"Male\"}",
      "last_token_uri_sync": null,
      "last_metadata_sync": "2022-10-05T17:55:52.262Z",
      "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a"
    },
    {
      "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
      "token_id": "4799",
      "amount": "1",
      "token_hash": "fff8ff007820e85a75c545389d5a88d4",
      "block_number_minted": "11637283",
      "updated_at": null,
      "contract_type": null,
      "name": "CRYPTOPUNKS",
      "symbol": "Ͼ",
      "token_uri": "https://www.larvalabs.com/cryptopunks/details/4799",
      "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk4799.png\",\"name\":\"CryptoPunk 4799\",\"attributes\":[\"Blue Eye Shadow\",\"Black Lipstick\",\"Straight Hair Blonde\",\"Earring\"],\"description\":\"Female\"}",
      "last_token_uri_sync": null,
      "last_metadata_sync": "2022-07-17T17:25:24.644Z",
      "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a"
    },
    {
      "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
      "token_id": "47",
      "amount": "1",
      "token_hash": "fff3657368693f145d0ad29453f6cd4d",
      "block_number_minted": "3918216",
      "updated_at": null,
      "contract_type": null,
      "name": "CRYPTOPUNKS",
      "symbol": "Ͼ",
      "token_uri": "https://www.larvalabs.com/cryptopunks/details/47",
      "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk047.png\",\"name\":\"CryptoPunk 047\",\"attributes\":[\"Knitted Cap\"],\"description\":\"Male\"}",
      "last_token_uri_sync": null,
      "last_metadata_sync": "2022-07-24T12:12:11.930Z",
      "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a"
    }
  ],
  "status": "SYNCED"
}
```

Congratulations 🥳 you just got all the NFTs from a collection with just a few lines of code using the Moralis NFT API!

## Youtube Video

https://www.youtube.com/watch?v=3oUb9QGTXEU


## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getContractNFTs](https://docs.moralis.io/reference/getcontractnfts)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.