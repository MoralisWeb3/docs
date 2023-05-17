---
title: "How to get all transfers of an NFT"
slug: "../../how-to-get-all-transfers-of-an-nft"
description: "Learn how to get all the transfers of a specific NFT using the Moralis NFT API."
sidebar_label: "Get NFT transfers by token ID"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get All Transfers Of An NFT

In order to get all the transfers of an NFT, Moralis provides you with an [getNFTTransfers](/web3-data-api/evm/reference/get-nft-transfers) endpoint.

Here you'll need three parameters: `address`, `tokenId`, and `chain`.

Once you have obtained the `address`, `tokenId` and `chain`, you can copy the following code:

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

  const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

  const tokenId = "1";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getNFTTransfers({
    address,
    tokenId,
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

  const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

  const tokenId = "1";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getNFTTransfers({
    address,
    tokenId,
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
    "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "token_id": "1",
    "chain": "eth",
    "format": "decimal",
}

result = evm_api.nft.get_nft_transfers(
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
  "total": 2,
  "page": 0,
  "page_size": 100,
  "cursor": null,
  "result": [
    {
      "block_number": "12344148",
      "block_timestamp": "2021-04-30T21:11:46.000Z",
      "block_hash": "0xa367b094366bc68de295ae6167797afc55eeb8383869363a6d7eb143c31d8274",
      "transaction_hash": "0xe93e858f9330afa4581e260198195623aa7f5cd2809012440ea291d317be9f2f",
      "transaction_index": 154,
      "log_index": 328,
      "value": "0",
      "contract_type": "ERC721",
      "transaction_type": "Single",
      "token_address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "token_id": "1",
      "from_address": "0xaba7161a7fb69c88e16ed9f455ce62b791ee4d03",
      "to_address": "0x46efbaedc92067e6d60e84ed6395099723252496",
      "amount": "1",
      "verified": 1,
      "operator": null
    },
    {
      "block_number": "12292922",
      "block_timestamp": "2021-04-22T23:13:40.000Z",
      "block_hash": "0xe2d521d11856591b77506a383033cf85e1d46f1669321859154ab38643244293",
      "transaction_hash": "0xcfb197f62ec5c7f0e71a11ec0c4a0e394a3aa41db5386e85526f86c84b3f2796",
      "transaction_index": 21,
      "log_index": 86,
      "value": "0",
      "contract_type": "ERC721",
      "transaction_type": "Single",
      "token_address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "token_id": "1",
      "from_address": "0x0000000000000000000000000000000000000000",
      "to_address": "0xaba7161a7fb69c88e16ed9f455ce62b791ee4d03",
      "amount": "1",
      "verified": 1,
      "operator": null
    }
  ],
  "block_exists": true
}
```

Congratulations 🥳 You just got all the transfers of an NFT with just a few lines of code using the Moralis NFT API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTTransfers](/web3-data-api/evm/reference/get-nft-transfers)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
