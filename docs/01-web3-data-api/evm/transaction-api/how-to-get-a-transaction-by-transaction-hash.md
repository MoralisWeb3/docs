---
title: "How to get a transaction by transaction hash"
slug: "../how-to-get-a-transaction-by-transaction-hash"
description: "Learn how to get a transaction content by a given transaction hash with Moralis Transaction API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn/PNPM or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-util" python="moralis" />

## Step 2: Get a transaction by transaction hash

In order to get a transaction by hash, Moralis provides you a `getTransaction` endpoint to do so.

Here you'll need two parameters: `transactionHash` and `chain`.

Once you've obtained both the `transactionHash` and `chain`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-util");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const transactionHash = "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875";

	const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.transaction.getTransaction({
    	transactionHash,
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
import { EvmChain } from "@moralisweb3/common-evm-util";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });
  
  const transactionHash = "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875";

	const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.transaction.getTransaction({
    	transactionHash,
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
    "transaction_hash": "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875", 
    "chain": "eth", 
}

result = evm_api.transaction.get_transaction(
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
{
  "hash": "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875",
  "nonce": "6637",
  "transaction_index": "203",
  "from_address": "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5",
  "to_address": "0x388c818ca8b9251b393131c08a736a67ccb19297",
  "value": "62754610757602656",
  "gas": "30000",
  "gas_price": "10350264493",
  "input": "0x",
  "receipt_cumulative_gas_used": "19314887",
  "receipt_gas_used": "22111",
  "receipt_contract_address": null,
  "receipt_root": null,
  "receipt_status": "1",
  "block_timestamp": "2022-11-07T08:36:11.000Z",
  "block_number": "15916991",
  "block_hash": "0xd517ab9abb4beed9efb6b74ecbabc141d8550abe11aedb715ce9d133dcb32c9b",
  "transfer_index": [
    15916991,
    203
  ],
  "logs": [
    {
      "log_index": "299",
      "transaction_hash": "0xaae93882e8a9fe9ff30151853db20e4cd161940757a01744465ab83b751c5875",
      "transaction_index": "203",
      "transaction_value": "62754610757602656",
      "address": "0x388c818ca8b9251b393131c08a736a67ccb19297",
      "data": "0x00000000000000000000000000000000000000000000000000def2fc6a398d60",
      "topic0": "0x27f12abfe35860a9a927b465bb3d4a9c23c8428174b83f278fe45ed7b4da2662",
      "topic1": null,
      "topic2": null,
      "topic3": null,
      "block_timestamp": "2022-11-07T08:36:11.000Z",
      "block_number": "15916991",
      "block_hash": "0xd517ab9abb4beed9efb6b74ecbabc141d8550abe11aedb715ce9d133dcb32c9b",
      "transfer_index": [
        15916991,
        203,
        299
      ]
    }
  ]
}
```

Congratulations 🥳 you just got the transaction content of a transaction by its transaction hash with only a few lines of code using the Moralis Transaction API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getTransaction](https://docs.moralis.io/reference/gettransaction)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.