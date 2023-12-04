---
title: "How to get NFTs by creator(s)"
slug: "../../how-to-get-nfts-by-creators"
description: "Learn how to get NFTs by creator(s) using Moralis NFT API."
sidebar_label: Get NFTs By Creator(s)
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/aptos/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get NFTs By Creator(s)

In order to get NFTs by creator(s), Moralis provides you a [getNFTsByCreators](/web3-data-api/aptos/reference/get-nfts-by-creators) endpoint to do so.

Here you'll need three parameters: `limit`, `creatorAddress` and `network`.

Once you have obtained the `limit`, `creatorAddress` and `network`, you can copy the following code:

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
  const creatorAddresses: ["0xf932dcb9835e681b21d2f411ef99f4f5e577e6ac299eebee2272a39fb348f702"];
  const network = "mainnet";

  const response = Moralis.AptosApi.nfts.getNFTsByCreators({
    limit,
    creatorAddresses,
    network
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
  const creatorAddresses: ["0xf932dcb9835e681b21d2f411ef99f4f5e577e6ac299eebee2272a39fb348f702"];
  const network = "mainnet";

  const response = Moralis.AptosApi.nfts.getNFTsByCreators({
    limit,
    creatorAddresses,
    network
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
    "limit": 10,
    "creator_address": ["0xf932dcb9835e681b21d2f411ef99f4f5e577e6ac299eebee2272a39fb348f702"],
    "network": "mainnet"
}

result = aptos_api.nfts.get_nfts_by_creators(
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
      "collection_data_id_hash": "7ac8cecb76edbbd5da40d719bbb9795fc5744e4098ee0ce1be4bb86c90f42301",
      "collection_name": "Aptos Monkeys",
      "creator_address": "0xf932dcb9835e681b21d2f411ef99f4f5e577e6ac299eebee2272a39fb348f702",
      "default_properties": {},
      "description": "",
      "description_mutable": true,
      "largest_property_version": "0",
      "last_transaction_timestamp": "2022-10-25T18:01:10.000Z",
      "name": "AptosMonkeys #3652",
      "last_transaction_version": "12598823",
      "maximum": "1",
      "maximum_mutable": true,
      "metadata_uri": "ipfs://bafybeihnochxvsv6h43qvg4snenpeasoml66nwxhuiadfzkefix7vbetyq/3652.json",
      "payee_address": "0x89e272841c2381ec63e7d8ccf6a70bd784b2a9dda6d6425aeb31657f4a5619c0",
      "properties_mutable": true,
      "royalty_mutable": true,
      "royalty_points_denominator": "10000",
      "royalty_points_numerator": "500",
      "token_data_id_hash": "00064cd1e0206b281345c3169e3c5d738bc0a7b0623d3451baab10a91bd43cdb",
      "supply": "1",
      "uri_mutable": true
    }
]
```

Congratulations 🥳 You just got the NFTs by creator(s) with just a few lines of code using the Moralis NFT API!

## Youtube Video

https://www.youtube.com/watch?v=OqgrqMGSlp8

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTsByCreators](/web3-data-api/aptos/reference/get-nfts-by-creators)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
