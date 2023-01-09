---
title: "How to get ERC20 metadata by contract"
slug: "../how-to-get-erc20-metadata-by-contract"
description: "Learn how to get all ERC20 transactions by wallet using Moralis Token API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get ERC20 metadata by contract

In order to get all ERC20 metadata by contract, Moralis provides you with an [getTokenMetadata](/web3-data-api/reference/get-token-metadata) endpoint.

Here you'll need two parameters: `addresses` and `chain`.

Once you have obtained the `addresses` and `chain`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = ['0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'];

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses,
    chain,
  });
  
  console.log(response.toJSON());
}

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
  
  const address = ['0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'];

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses,
    chain,
  });
  
  console.log(response.toJSON());
}

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
    "addresses": ["0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"], 
    "chain": "eth"
}

result = evm_api.token.get_token_metadata(
    api_key=api_key,
    params=params,
)

print(result)
```

</TabItem>
</Tabs>



## Step 3: Run the script

import RunTheScript from '/docs/partials/_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
[
  {
    "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    "name": "Uniswap",
    "symbol": "UNI",
    "decimals": "18",
    "logo": "https://cdn.moralis.io/eth/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.webp",
    "logo_hash": "064ee9557deba73c1a31014a60f4c081284636b785373d4ccdd1b3440df11f43",
    "thumbnail": "https://cdn.moralis.io/eth/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984_thumb.webp",
    "block_number": null,
    "validated": null,
    "created_at": "2022-01-20T10:39:55.818Z"
  }
]
```

Congratulations 🥳 You just got ERC20 metadata by contract with just a few lines of code using the Moralis Token API!

## Youtube Video

https://www.youtube.com/watch?v=urBf_bP2jqw


## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTokenMetadata](/web3-data-api/reference/get-token-metadata)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.