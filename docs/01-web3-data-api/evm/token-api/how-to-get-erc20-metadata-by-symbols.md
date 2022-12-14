---
title: "How to get ERC20 metadata by symbols"
slug: "../how-to-get-erc20-metadata-by-symbols"
description: "Learn how to get all ERC20 transactions by wallet using Moralis Token API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-util" python="moralis" />

## Step 2: Get ERC20 metadata by symbols

In order to get ERC20 metadata by symbols, Moralis provides you with an `getTokenMetadataBySymbol` endpoint.

Here you'll need two parameters: `symbols` and `chain`.

Once you have obtained the `symbols` and `chain`, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-util');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const symbols = ['UNI', 'AAVE', 'LINK'];

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenMetadataBySymbol({
    symbols,
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
  
  const symbols = ['UNI', 'AAVE', 'LINK'];

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenMetadataBySymbol({
    symbols,
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
    "symbols": ['UNI', 'AAVE', 'LINK'], 
    "chain": "eth"
}

result = evm_api.token.get_token_metadata_by_symbol(
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
[
    {
      "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "name": "Chain Link",
      "symbol": "LINK",
      "decimals": "18",
      "logo": "https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca.png",
      "logo_hash": "fd74ea1227adb458733847c09aab05d89c35c14b640c5ee1e0a8bffa79193eb4",
      "thumbnail": "https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca_thumb.png",
      "block_number": null,
      "validated": null,
      "created_at": "2022-01-20T10:39:55.818Z"
    },
    {
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "name": "Uniswap",
      "symbol": "UNI",
      "decimals": "18",
      "logo": "https://cdn.moralis.io/eth/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
      "logo_hash": "064ee9557deba73c1a31014a60f4c081284636b785373d4ccdd1b3440df11f43",
      "thumbnail": "https://cdn.moralis.io/eth/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984_thumb.png",
      "block_number": null,
      "validated": null,
      "created_at": "2022-01-20T10:39:55.818Z"
    },
    {
      "address": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
      "name": "Aave Token",
      "symbol": "AAVE",
      "decimals": "18",
      "logo": "https://cdn.moralis.io/eth/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
      "logo_hash": "a43e5ac48a66d8b0eac410ac2f5634c2517acda6f4723a55b99e3c5906132a1b",
      "thumbnail": "https://cdn.moralis.io/eth/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9_thumb.png",
      "block_number": null,
      "validated": null,
      "created_at": "2022-01-20T10:39:55.818Z"
    }
  ]
```



Congratulations 🥳 You just got ERC20 metadata by symbols with just a few lines of code using the Moralis Token API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTokenMetadataBySymbol](https://docs.moralis.io/reference/gettokenmetadatabysymbol)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.