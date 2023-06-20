---
title: "Streams API - Full Guide & Walkthrough"
slug: "/guides/streams-api-full-guide-walkthrough"
description: "This tutorial teaches you what the Streams API is, what are some of its most common use cases, and how to use it within your tech stack."
tags: [Streams]
---

## What is an Streams API?

![](/img/content/d06bbe5-Moralis-Streams-API.webp)

The [Streams API](https://moralis.io/streams/) is a collection of APIs that can be used to setup Streams for listening to real-time events from contracts, native transactions, and internal transactions on multiple [EVM chains](/streams-api/evm#supported-chains) that we support.

The [Streams API](https://moralis.io/streams/) is designed to stream real-time blockchain data to application through webhooks that help developers to improves the user experience.

Therefore, the ideal use cases for the [Streams API](https://moralis.io/streams/) are listed as below, but not limited to:

-

### Step 1: Install Moralis SDK

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

### Step 2: Monitor On-Chain Wallet Transactions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="JavaScript" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "USER_WALLET_ADDRESS";

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
  });

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "USER_WALLET_ADDRESS";

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
  });

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "address": "USER_WALLET_ADDRESS",
    "chain": "CHAIN", # e.g. "eth", "polygon", etc.
}

result = evm_api.nft.get_wallet_nfts(
    api_key=api_key,
    params=params,
)

# converting it to json because of unicode characters
print(json.dumps(result, indent=4))
```

</TabItem>
</Tabs>

### Step 3: Listen to On-Chain Events

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="JavaScript" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "USER_WALLET_ADDRESS";

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
  });

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "USER_WALLET_ADDRESS";

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
  });

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "address": "USER_WALLET_ADDRESS",
    "chain": "CHAIN", # e.g. "eth", "polygon", etc.
}

result = evm_api.nft.get_wallet_nfts(
    api_key=api_key,
    params=params,
)

# converting it to json because of unicode characters
print(json.dumps(result, indent=4))
```

</TabItem>
</Tabs>
