---
title: "How to get NFT transfers by wallet(s)"
slug: "../how-to-get-wallets-nft-transfers"
description: "Learn how to get NFT transfers by wallet(s) using Moralis Wallet API."
sidebar_label: "Get NFT Transfers By Wallet(s)"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/aptos/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Get NFT Transfers By Wallet(s)

In order to get NFT transfers by wallet(s), Moralis provides you a [getWalletsNFTTransfers](/web3-data-api/aptos/reference/get-wallets-nft-transfers) endpoint to do so.

Here you'll need three parameters: `limit`, `walletAddresses` and `network`.

Once you have obtained the `limit`, `walletAddresses` and `network`, you can copy the following code:

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

  const walletAddresses = ["0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50"];

  const network = "mainnet";

  const response = Moralis.AptosApi.wallets.getWalletsNFTTransfers({
    limit,
    walletAddresses,
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

  const walletAddresses = ["0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50"];

  const network = "mainnet";

  const response = Moralis.AptosApi.wallets.getWalletsNFTTransfers({
    limit,
    walletAddresses,
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
    "wallet_addresses": ["0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50"]
    "network": "mainnet",
}

result = aptos_api.wallets.get_wallets_nft_transfers(
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
  "cursor": null,
  "hasNextPage": false,
  "result": [
    {
      "collection_data_id_hash": "92c681b47797568f7513421a7cc1d47d349a71af66cd91794844543ff5430c67",
      "collection_name": "Aptos Wizards",
      "creator_address": "0x6d4336aeac8441314cacdd42ea7aae57b3fad71ea26a00186a23eb8f1fa19ffb",
      "event_account_address": "0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50",
      "event_creation_number": "27",
      "event_sequence_number": "0",
      "name": "Aptos Wizards #4221",
      "property_version": "0",
      "token_amount": "1",
      "token_data_id_hash": "1eb27f897040b5ae8cf236591354658a2044703bf46307687f916651ca317bda",
      "transaction_timestamp": "2023-03-26T21:48:41.000Z",
      "transfer_type": "0x3::token_transfers::TokenClaimEvent",
      "transaction_version": "108478769",
      "coin_amount": null,
      "coin_type": null,
      "from_address": "0x274c398a921b8e2ba345feac3039e1c8b196a7eb1395cdd3584af3a85eb9ec50",
      "to_address": "0xfd55b452c755d56c12860a760f61eb9d8edd46677b8fa59eee905989049620a9"
    }
  ]
}
```

Congratulations 🥳 You just got the NFT transfers by wallet(s) with just a few lines of code using the Moralis Wallet API!

## Youtube Video

https://www.youtube.com/watch?v=0fIi1PUGUoY

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getWalletsNFTTransfers](/web3-data-api/aptos/reference/get-wallets-nft-transfers)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
