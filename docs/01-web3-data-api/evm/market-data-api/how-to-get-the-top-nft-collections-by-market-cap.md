---
title: "How to get the top NFT collections by market cap"
slug: "../../how-to-get-the-top-nft-collections-by-market-cap"
description: "Learn how to get the top NFT collections by market cap using Market Data API."
sidebar_label: "Get the top NFT collections by market cap"
sidebar_position: 2
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get the top NFT collections by market cap

In order to get the top NFT collections by market cap, Moralis provides you with a [getTopNFTCollectionsByMarketCap](/web3-data-api/evm/reference/get-top-nft-collections-by-market-cap) endpoint to do so. To use the API, you can copy the following code:

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
{
  "gainers": [
    {
      "rank": "1",
      "token_name": "Wrapped Ether",
      "token_symbol": "WETH",
      "token_logo": "https://assets.coingecko.com/coins/images/2518/large/weth.png?1595348880",
      "token_decimals": "18",
      "contract_address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "price_usd": "0.0285",
      "price_24h_percent_change": "0.0285",
      "price_7d_percent_change": "0.0285",
      "market_cap_usd": "0.0285"
    }
  ],
  "losers": [
    {
      "rank": "1",
      "token_name": "Wrapped Ether",
      "token_symbol": "WETH",
      "token_logo": "https://assets.coingecko.com/coins/images/2518/large/weth.png?1595348880",
      "token_decimals": "18",
      "contract_address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "price_usd": "0.0285",
      "price_24h_percent_change": "0.0285",
      "price_7d_percent_change": "0.0285",
      "market_cap_usd": "0.0285"
    }
  ]
}
```

Congratulations 🥳 you just got the top NFT collections by market cap using Market Data API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTopNFTCollectionsByMarketCap](/web3-data-api/evm/reference/get-top-nft-collections-by-market-cap)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
