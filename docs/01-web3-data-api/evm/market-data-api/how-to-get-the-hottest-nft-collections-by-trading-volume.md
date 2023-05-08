---
title: "How to get the hottest NFT collections by trading volume"
slug: "../../how-to-get-the-hottest-nft-collections-by-trading-volume"
description: "Learn how to get the hottest NFT collections by trading volume using Market Data API."
sidebar_label: "Get the hottest NFT collections by trading volume"
sidebar_position: 3
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get the hottest NFT collections by trading volume

In order to get the hottest NFT collections by trading volume, Moralis provides you with a [getHottestNFTCollectionsByTradingVolume](web3-data-api/evm/reference/get-hottest-nft-collections-by-trading-volume) endpoint to do so. To use the API, you can copy the following code:

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

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

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

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

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
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
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
[
  {
    "rank": "1",
    "collection_title": "CryptoPunks",
    "floor_price_usd": "0.0",
    "floor_price_24hr_percent_change": "0.0",
    "volume_usd": "0.0",
    "volume_24hr_percent_change": "0.0",
    "The average price in USD": "0.0"
  }
]
```

Congratulations 🥳 you just got the hottest NFT collections by trading volume using Market Data API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getHottestNFTCollectionsByTradingVolume](web3-data-api/evm/reference/get-hottest-nft-collections-by-trading-volume)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
