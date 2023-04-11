---
title: "How to get NFT collections by creator"
slug: "../how-to-get-nft-collections-by-creator"
description: "Learn how to get NFT collections by creator using Moralis NFT API."
sidebar_label: Get NFT Collections By Creator
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

## Step 2: Get NFT Collections By Creator

In order to get NFT collections by creator, Moralis provides you a [getNFTCollectionsByCreator](/web3-data-api/aptos/reference/get-nft-collections-by-creator) endpoint to do so.

Here you'll need two parameters: `limit` and `creatorAddress`.

Once you have obtained both the `limit` and `creatorAddress`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const limit = 10;

  const creatorAddresses =
    "0x57410cf1141dd18aef4acf956d3c35a9634111642c5ed0ab0d017d634869959b";

  const response =
    await Moralis.AptosApi.collections.getNFTCollectionsByCreator({
      limit,
      creatorAddresses,
    });

  console.log(response.result);
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const limit = 10;

  const creatorAddresses =
    "0x57410cf1141dd18aef4acf956d3c35a9634111642c5ed0ab0d017d634869959b";

  const response =
    await Moralis.AptosApi.collections.getNFTCollectionsByCreator({
      limit,
      creatorAddresses,
    });

  console.log(response.result);
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import aptos_api

api_key = "YOUR_API_KEY"

params = {
    "network": "mainnet",
    "limit": 10,
    "creator_address": "0x57410cf1141dd18aef4acf956d3c35a9634111642c5ed0ab0d017d634869959b"
}

result = aptos_api.collections.get_nft_collections_by_creator(
    api_key=api_key,
    params=params,
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
    "collection_data_id_hash": "43c343a58c54f0ce20ad9329d799b7e4e3f8dfb2ba76e4fae7a472f1bcf611ec",
    "collection_name": "[REDACTED] Keys",
    "creator_address": "0x57410cf1141dd18aef4acf956d3c35a9634111642c5ed0ab0d017d634869959b",
    "description": "A set of mysterious keys. Is that a flamingo?",
    "description_mutable": true,
    "last_transaction_timestamp": "2022-12-23T08:25:31.000Z",
    "last_transaction_version": "55833002",
    "maximum": "7878",
    "maximum_mutable": true,
    "metadata_uri": "https://nftstorage.link/ipfs/bafybeichamqw2clzmpmfzm4v3dywdiitpl3pvd5wzaoxy6khizmtir3nwy/0.gif",
    "supply": "1400",
    "table_handle": "0x4190bb038ddb7d014118c6d45e3ac2db9166a1d0b43312750dc78e21139bca24",
    "uri_mutable": true
  }
]
```

Congratulations 🥳 You just got NFT collections by creator with just a few lines of code using the Moralis NFT API!

## Youtube Video

https://www.youtube.com/watch?v=8505sYAMLYc

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTCollectionsByCreator](/web3-data-api/aptos/reference/get-nft-collections-by-creator)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
