---
title: "How to get the owners of an NFT collection"
slug: "../how-to-get-the-owners-of-an-nft-collection"
description: "Learn how to get the owners of NFT collection by its contract address using the Moralis NFT API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

First [register](/docs/quickstart) your Moralis account and get your Moralis API Key.

Once you have your Moralis API Key, install [Moralis SDK](/docs/moralis-sdk) in your project.

```shell npm
npm install moralis @moralisweb3/common-evm-util
```
```shell yarn
yarn add moralis @moralisweb3/common-evm-util
```
```shell pnpm
pnpm add moralis @moralisweb3/common-evm-util
```
```Text pip
pip install moralis
```



## Step 2: Get All NFTs Owned By An Address

In order to get all the owners of a collection, Moralis provides you with a `getNFTOwners`  endpoint to do so.

Here you'll need two parameters: (a contract)`address` and `chain`.

Once you've obtained both the `address` and `chain`, you can copy the following code:

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-util");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = "0xa186d739ca2b3022b966194004c6b01855d59571";

	const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getNFTOwners({
      address,
      chain,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-util";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = "0xa186d739ca2b3022b966194004c6b01855d59571";

	const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getNFTOwners({
      address,
      chain,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
    "address": "0xa186d739ca2b3022b966194004c6b01855d59571", 
    "chain": "eth", 
    "format": "decimal", 
    "limit": 100, 
    "cursor": "", 
    "normalizeMetadata": True, 
}

result = evm_api.nft.get_nft_owners(
    api_key=api_key,
    params=params,
)

print(result)

```



To execute the program, run the following command:

```shell Shell (Javascript)
node index.js
```
```shell Shell (Typescript)
node index.ts
```
```Text Shell (Python)
python index.py
```



In your terminal, you should see the following response:

```json
{
  "total": 692,
  "page": 1,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21QYXJhbXMiOnsidG9rZW5BZGRyZXNzIjoiMHhhMTg2ZDczOWNhMmIzMDIyYjk2NjE5NDAwNGM2YjAxODU1ZDU5NTcxIn0sImtleXMiOlsiMTY2NjgzNjU3OS43NyJdLCJ3aGVyZSI6eyJ0b2tlbl9hZGRyZXNzIjoiMHhhMTg2ZDczOWNhMmIzMDIyYjk2NjE5NDAwNGM2YjAxODU1ZDU5NTcxIn0sImxpbWl0IjoxMDAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJ0b3RhbCI6NjkyLCJwYWdlIjoxLCJ0YWlsT2Zmc2V0IjoxLCJpYXQiOjE2NjY5NjMxNTl9.DsjX8vrr2P0lIJlWgkAEA2wIPdZricLUw7TR6WmeovU",
  "result": [
    {
      "token_address": "0xa186d739ca2b3022b966194004c6b01855d59571",
      "token_id": "692",
      "owner_of": "0xd1fa414bbd0b71292e097d18a9d5ccbb04806c31",
      "block_number": "15846571",
      "block_number_minted": "15846571",
      "token_hash": "22c43a90364cd3639c565470effc46db",
      "amount": "1",
      "contract_type": "ERC721",
      "name": "NFTPass",
      "symbol": "ATTPASS",
      "token_uri": "https://metadata.atticc.xyz/692",
      "metadata": "{\"attributes\":[{\"trait_type\":\"Name\",\"value\":\"Atticc Early Adopter Pass\"},{\"trait_type\":\"Category\",\"value\":\"Early Adopter Pass\"},{\"trait_type\":\"Number of Seats\",\"value\":\"5555\",\"display_type\":\"number\"},{\"trait_type\":\"Royalty\",\"value\":\"0\",\"display_type\":\"number\"}],\"image\":\"https://media.atticc.xyz/Pass692.png\"}",
      "last_token_uri_sync": "2022-10-28T12:30:53.470Z",
      "last_metadata_sync": "2022-10-28T12:31:12.113Z",
      "minter_address": "0xd1fa414bbd0b71292e097d18a9d5ccbb04806c31"
    },
    {
      "token_address": "0xa186d739ca2b3022b966194004c6b01855d59571",
      "token_id": "691",
      "owner_of": "0x5e899294aa47ff846ca1f1bb096692deb0636ec0",
      "block_number": "15845243",
      "block_number_minted": "15845243",
      "token_hash": "37341fba448ccb6bcd2776aef50a69d2",
      "amount": "1",
      "contract_type": "ERC721",
      "name": "NFTPass",
      "symbol": "ATTPASS",
      "token_uri": "https://metadata.atticc.xyz/691",
      "metadata": "{\"attributes\":[{\"trait_type\":\"Name\",\"value\":\"Atticc Early Adopter Pass\"},{\"trait_type\":\"Category\",\"value\":\"Early Adopter Pass\"},{\"trait_type\":\"Number of Seats\",\"value\":\"5555\",\"display_type\":\"number\"},{\"trait_type\":\"Royalty\",\"value\":\"0\",\"display_type\":\"number\"}],\"image\":\"https://media.atticc.xyz/Pass691.png\"}",
      "last_token_uri_sync": "2022-10-28T08:04:34.923Z",
      "last_metadata_sync": "2022-10-28T08:04:49.994Z",
      "minter_address": "0x42678905eb6fb9f0f3a1334cb23b9d393b53c138"
    },
    {
      "token_address": "0xa186d739ca2b3022b966194004c6b01855d59571",
      "token_id": "65",
      "owner_of": "0xd4847d79c41d3bdfa3c1f294f38550ed12ab22aa",
      "block_number": "15845141",
      "block_number_minted": "15821875",
      "token_hash": "72e0a7ebf64f5e2ccfe5fb8c4245f3ed",
      "amount": "1",
      "contract_type": "ERC721",
      "name": "NFTPass",
      "symbol": "ATTPASS",
      "token_uri": "https://metadata.atticc.xyz/65",
      "metadata": "{\"attributes\":[{\"trait_type\":\"Name\",\"value\":\"Atticc Early Adopter Pass\"},{\"trait_type\":\"Category\",\"value\":\"Early Adopter Pass\"},{\"trait_type\":\"Number of Seats\",\"value\":\"5555\",\"display_type\":\"number\"},{\"trait_type\":\"Royalty\",\"value\":\"0\",\"display_type\":\"number\"}],\"image\":\"https://media.atticc.xyz/Pass65.png\"}",
      "last_token_uri_sync": "2022-10-25T01:41:57.317Z",
      "last_metadata_sync": "2022-10-25T01:42:22.549Z",
      "minter_address": "0x4bcdd74a35e028dae62cb1d48528e71843e2ac7d"
    }
  ]
}
```



Congratulations 🥳 you just got all NFT owners of a collection with just a few lines of code using Moralis NFT API!

## API Reference

For more details on the endpoint and optional parameters, check out:

- [getOwnerNFTs](/reference/getnftowners)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.