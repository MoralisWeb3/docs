---
title: "How to run smart contract functions"
slug: "../how-to-run-contract-functions"
description: "Learn how to run smart contract functions using Moralis Utils API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get the verbose transaction of an address

In order to run smart contract function, Moralis provides you a [runContractFunction](/web3-data-api/reference/run-contract-function) endpoint to do so.

Here you'll need three parameters: `address`, `function_name` and `abi`.

Once you've obtained the `address` and `function_name` parameters, you can get the contract's ABI by going to blockchain explorer such as [Etherscan](https://etherscan.io) and copy the contract ABI directly. Your ABI should be in JSON format as follows:

```json abi.json
[
  {
    "inputs":[],
    "name":"getPrice",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  }
]
```

Once you've obtained the ABI, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');
const abi = require('abi.json');

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const chain = EvmChain.ETHEREUM;

  const address = '0x1A92f7381B9F03921564a437210bB9396471050C'
  
  // token 0 address, e.g. WETH token address
  const functionName = 'getPrice';

  const response = await Moralis.EvmApi.utils.runContractFunction({
    address,
    functionName,
    abi,
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
import abi from "abi.json";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const chain = EvmChain.ETHEREUM;

  const address = '0x1A92f7381B9F03921564a437210bB9396471050C'
  
  // token 0 address, e.g. WETH token address
  const functionName = 'getPrice';

  const response = await Moralis.EvmApi.utils.runContractFunction({
    address,
    functionName,
    abi,
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
import json

# Read abi.json file
with open('abi.json', 'r') as data:
  abi = json.load(data)

api_key = "YOUR_API_KEY"

params = {
    "address": "0x1A92f7381B9F03921564a437210bB9396471050C", 
    "function_name": "getPrice", 
    "abi": abi, 
    "chain": "eth"
}

result = evm_api.utils.run_contract_function(
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
20000000000000000
```

Congratulations 🥳 You just run smart contract functions with just a few lines of code using the Moralis Utils API!

## Youtube Video

https://www.youtube.com/watch?v=efXL6bxGXY8

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [runContractFunction](/web3-data-api/reference/run-contract-function)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.