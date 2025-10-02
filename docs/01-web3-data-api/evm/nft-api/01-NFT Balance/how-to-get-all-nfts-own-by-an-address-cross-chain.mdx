---
title: "How to get all the NFTs owned by an address cross chain"
slug: "../../how-to-get-all-nfts-own-by-an-address-cross-chain"
description: "Learn how to get all NFTs (with metadata) owned by an address cross chain using Moralis NFT API."
sidebar_label: "Get NFTs owned by address cross chain"
sidebar_position: 2
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get All NFTs Owned By An Address

In order to get all the NFTs owned by an address, Moralis provides you with a [getWalletNFTs](/web3-data-api/evm/reference/get-wallet-nfts) endpoint to do so.

Here you'll need two parameters: `address` and `chain` (add as many blockchains as you want to the `allNFTs` array).

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

  const allNFTs = [];

  const address = "0x26fcbd3afebbe28d0a8684f790c48368d21665b5";

  const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

  for (const chain of chains) {
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });

    allNFTs.push(response);
  }

  console.log(allNFTs);
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

  const allNFTs = [];

  const address = "0x26fcbd3afebbe28d0a8684f790c48368d21665b5";

  const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

  for (const chain of chains) {
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });

    allNFTs.push(response);
  }

  console.log(allNFTs);
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "address": "0x26fcbd3afebbe28d0a8684f790c48368d21665b5",
    "chain": "eth",
    "format": "decimal",
    "limit": 1,
    "token_addresses": [],
    "cursor": "",
    "normalizeMetadata": True,
}

result = []
for chain in ('eth', 'bsc', 'polygon'):
	params['chain'] = chain
	result += [evm_api.nft.get_wallet_nfts(
    api_key=api_key,
    params=params,
	)]

# converting it to json because of unicode characters
print(json.dumps(result, indent=4))
```

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{
  "total": 1456,
  "page": 1,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21QYXJhbXMiOnsid2FsbGV0QWRkcmVzcyI6IjB4ZDhkYTZiZjI2OTY0YWY5ZDdlZWQ5ZTAzZTUzNDE1ZDM3YWE5NjA0NSJ9LCJrZXlzIjpbIjE2NjMyMzgxNzUuMDc3Il0sIndoZXJlIjp7Im93bmVyX29mIjoiMHhkOGRhNmJmMjY5NjRhZjlkN2VlZDllMDNlNTM0MTVkMzdhYTk2MDQ1In0sImxpbWl0IjoxMDAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJ0b3RhbCI6MTQ1NiwicGFnZSI6MSwidGFpbE9mZnNldCI6MSwiaWF0IjoxNjY2NjgyNTUyfQ.E5DkWYvRTaFnVhgedRuT3IW-rb2V-ikFKwP2cg2Qf78",
  "result": [
    {
      "token_address": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      "token_id": "4765809967066625256798886812262830659450023020194524584471225959000376492819",
      "amount": "1",
      "owner_of": "0x26fcbd3afebbe28d0a8684f790c48368d21665b5",
      "token_hash": "ba6d44b5f16be94283cecffeb784b7ca",
      "block_number_minted": "15572796",
      "block_number": "15573017",
      "contract_type": "ERC721",
      "name": "Ethereum Name Service",
      "symbol": "ENS",
      "token_uri": null,
      "metadata": null,
      "last_token_uri_sync": null,
      "last_metadata_sync": "2022-09-20T06:06:08.153Z",
      "minter_address": null
    },
    {
      "token_address": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      "token_id": "84453794918345416145331514647027903846664455083247396107154093349515123913389",
      "amount": "1",
      "owner_of": "0x26fcbd3afebbe28d0a8684f790c48368d21665b5",
      "token_hash": "7c0212cd3daf1b6b64f193c6dc102fb4",
      "block_number_minted": "15572811",
      "block_number": "15573017",
      "contract_type": "ERC721",
      "name": "Ethereum Name Service",
      "symbol": "ENS",
      "token_uri": null,
      "metadata": null,
      "last_token_uri_sync": null,
      "last_metadata_sync": "2022-09-20T06:09:09.838Z",
      "minter_address": null
    },
    {
      "token_address": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      "token_id": "16476931145019337030786748713476010946621971075817308111460324192065814192354",
      "amount": "1",
      "owner_of": "0x26fcbd3afebbe28d0a8684f790c48368d21665b5",
      "token_hash": "627ffc76405a90ee940cb91f7e90b294",
      "block_number_minted": "15572818",
      "block_number": "15573017",
      "contract_type": "ERC721",
      "name": "Ethereum Name Service",
      "symbol": "ENS",
      "token_uri": null,
      "metadata": null,
      "last_token_uri_sync": null,
      "last_metadata_sync": "2022-09-20T06:11:34.545Z",
      "minter_address": null
    }
  ],
  "status": "SYNCED"
}
```

Congratulations 🥳 you just got all the NFTs owned by an address across chains with just a few lines of code using the Moralis NFT API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

<ul>
  <li><a href="/web3-data-api/evm/reference/get-wallet-nfts">getWalletNFTs</a></li>
</ul>

## Next Steps

Learn how to use the Moralis NFT API to build dapps:

<ul>
  <li><a href="/guides/token-gating-website-nextjs">NFT-Gated Website NodeJS</a></li>
  <li><a href="/guides/token-gating-website-django">NFT-Gated Website (Django)</a></li>
</ul>

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
