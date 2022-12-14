---
title: "How to get SPL NFT Metadata"
slug: "../how-to-get-spl-nft-metadata"
description: "Learn how to get metadata of a SPL NFT using Moralis Solana API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

First [register](/web3-data-api/get-your-api-key) your Moralis account and get your Moralis API Key.

Once you have your Moralis API Key, install the Moralis SDK in your project.

```shell npm
npm install moralis
```
```shell yarn
yarn add moralis
```
```shell pnpm
pnpm add moralis
```
```Text pip
pip install moralis
```



## Step 2: Get metadata of a SPL NFT

In order to get the metadata of a SPL NFT, Moralis provides you the `[getNFTMetadata](https://docs.moralis.io/reference/getsolnftmetadata)` API endpoint to do so.

Here you'll need two parameters: `address` and `network`.

Once you have obtained both the `address` and `network`, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { SolNetwork } = require('@moralisweb3/sol-utils');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = 'FVW9KoJxXzP2cCfhLfFC7hQKBZKnaoPkyZJQgvM9moWV';

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.nft.getNFTMetadata({
    address,
    network,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```typescript index.ts
import Moralis from "moralis";
import { SolNetwork } from "@moralisweb3/sol-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = 'FVW9KoJxXzP2cCfhLfFC7hQKBZKnaoPkyZJQgvM9moWV';

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.nft.getNFTMetadata({
    address,
    network,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```python index.py
from moralis import sol_api

api_key = "YOUR_API_KEY"
params = {
    "address": "FVW9KoJxXzP2cCfhLfFC7hQKBZKnaoPkyZJQgvM9moWV", 
    "network": "mainnet", 
}

result = sol_api.nft.get_nft_metadata(
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
npx ts-node index.ts
```
```Text Shell (Python)
python index.py
```



In your terminal, you should see the following response:

```json
{
  "mint": "FVW9KoJxXzP2cCfhLfFC7hQKBZKnaoPkyZJQgvM9moWV",
  "standard": "metaplex",
  "name": "",
  "symbol": "WASHERE",
  "metaplex": {
    "metadataUri": "https://nftstorage.link/ipfs/bafybeifa4kbkyzvxx2uedsnqespxdhdgn4bs3bw7mkrhdtxi2y44dahcxm/6.json",
    "updateAuthority": "14BRquDqnVXCVmQEAaZkiKCCruz2nbZNJrb5nB4GiewW",
    "sellerFeeBasisPoints": 0,
    "primarySaleHappened": 1,
    "owners": [
      {
        "address": "6ULhukKTw1U3NgpwV319eUC5eQYRSYUFi1iNpdTqUMBf",
        "verified": 1,
        "share": 0
      },
      {
        "address": "14BRquDqnVXCVmQEAaZkiKCCruz2nbZNJrb5nB4GiewW",
        "verified": 0,
        "share": 100
      }
    ],
    "isMutable": true,
    "masterEdition": false
  }
}
```



Congratulations 🥳 You just got the metadata of a SPL NFT with just a few lines of code using the Moralis Solana API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTMetadata](https://docs.moralis.io/reference/getsolnftmetadata)

## YouTube Tutorial

https://www.youtube.com/watch?v=gZB5Y6ss5vY

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.