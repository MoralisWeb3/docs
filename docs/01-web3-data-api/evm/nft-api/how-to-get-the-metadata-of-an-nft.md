---
title: "How to get NFT Metadata"
slug: "../how-to-get-the-metadata-of-an-nft"
description: "Learn how to get NFT metadata using the Moralis NFT API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_setup-moralis.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-util" python="moralis" />

## Step 2: Get an NFT's Metadata

In order to get an NFT by the address and token_id, Moralis provides you with an `getNFTMetadata` endpoint to do so.

Here you'll need two parameters: `address` and `token_id`.

Once you've obtained both the `address` and `token_id`, you can copy the following code:

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

	const chain = EvmChain.ETHEREUM;
  
  const tokenId = 3931;

  const response = await Moralis.EvmApi.nft.getNFTMetadata({
      address,
      chain,
      tokenId,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

	const chain = EvmChain.ETHEREUM;
  
  const tokenId = 3931;

  const response = await Moralis.EvmApi.nft.getNFTMetadata({
      address,
      chain,
      tokenId,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB", 
    "token_id": "3931", 
    "chain": "eth", 
    "format": "decimal", 
    "normalizeMetadata": True, 
}

result = evm_api.nft.get_nft_metadata(
    api_key=api_key,
    params=params,
)

print(result)
```



To execute the program, run the following command:

```shell Shell (JavaScript)
node index.js
```
```Text Shell (TypeScript)
node index.ts
```
```python Shell (Python)
python index.py
```



In your terminal, you should see the following response:

```json
{
  "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
  "token_id": "3931",
  "transfer_index": [
    13868997,
    30,
    36,
    0
  ],
  "owner_of": "0x1cf2b8c64aed32bff2ae80e701681316d3212afd",
  "block_number": "13868997",
  "block_number_minted": "5754322",
  "token_hash": "3c86855c82470edd82df190019e83f16",
  "amount": "1",
  "contract_type": null,
  "name": "CRYPTOPUNKS",
  "symbol": "Ͼ",
  "token_uri": "https://www.larvalabs.com/cryptopunks/details/3931",
  "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk3931.png\",\"name\":\"CryptoPunk 3931\",\"attributes\":[\"Vampire Hair\",\"Goat\"],\"description\":\"Male\"}",
  "last_token_uri_sync": null,
  "last_metadata_sync": "2022-05-12T18:00:22.340Z",
  "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a"
}
```



Congratulations 🥳 you just got Cryptopunk NFT metadata for token id 3931 owned by an address with just a few lines of code using Moralis NFT API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTMetadata](https://docs.moralis.io/reference/getnftmetadata)

## Next Steps

Learn how to use the Moralis NFT API to build dapps:

- [NFT-Gated Website](/docs/nextjs-nft-gated-website)
- [NFT-Gated Website (Django)](/docs/nft-gated-website-in-django)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.