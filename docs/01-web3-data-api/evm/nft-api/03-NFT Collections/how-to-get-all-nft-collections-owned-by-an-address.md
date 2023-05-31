---
title: "How to get all the NFT collections owned by an address"
slug: "../../how-to-get-all-nft-collections-owned-by-an-address"
description: "Learn how to get the NFT collections (with metadata) owned by an address using Moralis NFT API."
sidebar_label: "Get NFT collections owned by address"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get All NFTs Collections Owned By An Address

In order to get all the NFTs owned by an address, Moralis provides you with a `getWalletNFTCollections` endpoint to do so.

Here you'll need two parameters: `address` and `chain`.

Once you've obtained both the `address` and `chain`, you can copy the following code:

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

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
    address,
    chain,
  });

  console.log(response.toJSON());
};

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

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    "chain": "eth",
    "limit": 100,
    "cursor": "",
}

result = evm_api.nft.get_wallet_nft_collections(
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
{
  "total": 503,
  "page": 1,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21QYXJhbXMiOnsid2FsbGV0QWRkcmVzcyI6IjB4ZDhkYTZiZjI2OTY0YWY5ZDdlZWQ5ZTAzZTUzNDE1ZDM3YWE5NjA0NSJ9LCJrZXlzIjpbIjE2NTg2ODUyMDMuNzExIl0sIndoZXJlIjp7Im93bmVyX29mIjoiMHhkOGRhNmJmMjY5NjRhZjlkN2VlZDllMDNlNTM0MTVkMzdhYTk2MDQ1In0sImxpbWl0IjoxMDAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJ0b3RhbCI6NTAzLCJwYWdlIjoxLCJ0YWlsT2Zmc2V0IjoxLCJpYXQiOjE2NjY4MDE3OTV9.wdLubHbqnGg36awXqwlJ7cnsdIX5DHDDnArnva72W5I",
  "result": [
    {
      "token_address": "0xff8852a5f77c20094f0fabc7b225b417e0797907",
      "contract_type": "ERC721",
      "name": "VictoriasSecret",
      "symbol": "VS"
    },
    {
      "token_address": "0xff66f3c087b0e8e0d1349cadb218efd7bcf0ac99",
      "contract_type": "ERC721",
      "name": "Flower Shoppe",
      "symbol": "FLWRSHP"
    },
    {
      "token_address": "0xfeddc1448eb4480714a9942ba28a27b16caf9ce4",
      "contract_type": "ERC721",
      "name": "Impervious Registry",
      "symbol": "IR"
    },
    {
      "token_address": "0xfec64651c8b441f2526b1a54febb2122124bf041",
      "contract_type": "ERC721",
      "name": "Porsche",
      "symbol": "Porsche"
    }
  ],
  "status": "SYNCED"
}
```

Congratulations 🥳 you just got all the NFT collections owned by an address with just a few lines of code using the Moralis NFT API!

## Youtube Video

https://www.youtube.com/watch?v=Zq-eoO-mTbc

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getWalletNFTCollections](/web3-data-api/evm/reference/get-wallet-nft-collections)

## Next Steps

Learn how to use the Moralis NFT API to build dapps:

- [NFT-Gated Website NodeJS](/guides/token-gating-website-nextjs)
- [NFT-Gated Website (Django)](/guides/token-gating-website-django)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
