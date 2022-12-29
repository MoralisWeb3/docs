---
title: "How to get the owner of an NFT"
slug: "../how-to-get-the-owner-of-an-nft"
description: "Learn how to get the owner of an NFT using the Moralis NFT API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get All NFTs Owned By An Address

In order to get all the owners of an NFT, Moralis provides you with a [getNFTTokenIdOwners](/web3-data-api/reference/get-nft-token-id-owners) endpoint to do so.

Here you'll need three parameters: `address`, `token_id` and `chain`.

Once you've obtained the required parameters, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = "0xa186d739ca2b3022b966194004c6b01855d59571";

	const chain = EvmChain.ETHEREUM;
  
  const tokenId = 1;

  const response = await Moralis.EvmApi.nft.getNFTTokenIdOwners({
      address,
      chain,
   		tokenId
  });
  
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
  
  const address = "0xa186d739ca2b3022b966194004c6b01855d59571";

	const chain = EvmChain.ETHEREUM;
  
  const tokenId = 1;

  const response = await Moralis.EvmApi.nft.getNFTTokenIdOwners({
      address,
      chain,
   		tokenId
  });
  
  console.log(response.toJSON());
}

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
    "address": "0xa186d739ca2b3022b966194004c6b01855d59571", 
    "token_id": "1", 
    "chain": "eth", 
    "format": "decimal", 
    "limit": 100, 
    "cursor": "", 
    "normalizeMetadata": True, 
}

result = evm_api.nft.get_nft_token_id_owners(
    api_key=api_key,
    params=params,
)

print(result)
```

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{
  "total": 1,
  "page": 1,
  "page_size": 100,
  "cursor": null,
  "result": [
    {
      "token_address": "0xa186d739ca2b3022b966194004c6b01855d59571",
      "token_id": "1",
      "owner_of": "0xc81082690edc8cde6d83a7549aa6a74534305372",
      "block_number": "15821471",
      "block_number_minted": "15821471",
      "token_hash": "c4940b74fa9c9e1605316dc98f4a3eb3",
      "amount": "1",
      "contract_type": "ERC721",
      "name": "NFTPass",
      "symbol": "ATTPASS",
      "token_uri": "https://metadata.atticc.xyz/1",
      "metadata": "{\"attributes\":[{\"trait_type\":\"Name\",\"value\":\"Atticc Early Adopter Pass\"},{\"trait_type\":\"Category\",\"value\":\"Early Adopter Pass\"},{\"trait_type\":\"Number of Seats\",\"value\":\"5555\",\"display_type\":\"number\"},{\"trait_type\":\"Royalty\",\"value\":\"0\",\"display_type\":\"number\"}],\"image\":\"https://media.atticc.xyz/Pass1.png\"}",
      "last_token_uri_sync": "2022-10-25T00:21:22.266Z",
      "last_metadata_sync": "2022-10-25T00:21:26.139Z",
      "minter_address": "0xc81082690edc8cde6d83a7549aa6a74534305372"
    }
  ]
}
```

Congratulations 🥳 you just got the owners of an NFT with just a few lines of code using the Moralis NFT API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTTokenIdOwners](/web3-data-api/reference/get-nft-token-id-owners)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.