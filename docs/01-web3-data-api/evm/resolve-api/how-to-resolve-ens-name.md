---
title: "How to reverse resolve an ENS name"
slug: "../how-to-resolve-ens-name"
description: "Learn how to reverse resolve the ENS name from an address using the Moralis Resolve API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_setup-moralis.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-util" python="moralis" />

## Step 2: Reverse Resolve ENS name

In order to reverse resolve the ENS name from an ETH address, Moralis provides you a `[resolveAddress](https://docs.moralis.io/reference/resolveaddress)` endpoint to do so.

Here you'll need one parameter: `address`.

Once you've obtained the `address`, you can copy the following code:

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-util');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.resolve.resolveAddress({
    address,
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

  const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.resolve.resolveAddress({
    address,
  });
  
  console.log(response.toJSON());
}

runApp();
```
```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045", 
}

result = evm_api.resolve.resolve_address(
    api_key=api_key,
    params=params,
)

print(result)
```



To execute the program, run the following command:

```Text Shell (JavaScript)
node index.js
```
```Text Shell (TypeScript)
node index.ts
```
```python Shell (Python)
python index.py
```



In your terminal, you should see the following response:

```json
{
  "name": "vitalik.eth"
}
```



Congratulations 🥳 You just reverse resolved the ENS name from a wallet address with just a few lines of code using the Moralis Resolve API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [resolveAddress](https://docs.moralis.io/reference/resolveaddress)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.