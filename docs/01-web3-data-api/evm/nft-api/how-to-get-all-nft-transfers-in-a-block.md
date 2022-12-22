---
title: "How to get all NFT transfers in a block"
slug: "../how-to-get-all-nft-transfers-in-a-block"
description: "Learn how to get all the transfers of NFTs in a block using the Moralis NFT API."
---
## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get All NFTs Collections Owned By An Address

In order to get all the NFT transfers in a block, Moralis provides you with a `getNFTTransfersByBlock` endpoint to do so.

Here you'll need two parameters: `blockNumberOrHash` and `chain`.

Once you've obtained both the `blockNumberOrHash` and `chain`, you can copy the following code:

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
  
  const blockNumberOrHash = 15846571;

	const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getNFTTransfersByBlock({
      blockNumberOrHash,
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
  
  const blockNumberOrHash = 15846571;

	const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getNFTTransfersByBlock({
      blockNumberOrHash,
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
    "block_number_or_hash": "15846571", 
    "chain": "eth", 
    #"limit": 100, 
    #"cursor": "", 
}

result = evm_api.nft.get_nft_transfers_by_block(
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
  "total": 111,
  "page": 0,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0IjoxMDAsImJsb2NrX251bWJlciI6IjE1ODQ2NTcxIiwid2hlcmUiOnt9LCJwYWdlIjoxLCJrZXkiOiIxNTg0NjU3MS4xMDguMTM2LjAiLCJ0b3RhbCI6MTExLCJpYXQiOjE2NjY5Njc1NDN9.N9rkTDnDuHCgEZk2x2QhycI_CwgyKqSiCG0KuacEoAc",
  "result": [
    {
      "block_number": "15846571",
      "block_timestamp": "2022-10-28T12:30:47.000Z",
      "block_hash": "0x5bdb81ef57386daa6ad3b9893216db9b15bb5d88f9c5524fabb106eace4c69c6",
      "transaction_hash": "0x1cf0a4282ca892210a42ee14633d9dffcb644d198a5a7751af1046568c59beb9",
      "transaction_index": 156,
      "log_index": 307,
      "value": "0",
      "contract_type": "ERC1155",
      "transaction_type": "Single",
      "token_address": "0x03a980c83bb58838298ea7689d9d4d22aad51599",
      "token_id": "0",
      "from_address": "0x47da053384abd2ee2bf4883927e7e1dcc3f5f95b",
      "to_address": "0x981ff49a2007a095eca50458159525e65e7b1d0c",
      "amount": "1",
      "verified": 1,
      "operator": "0x47da053384abd2ee2bf4883927e7e1dcc3f5f95b"
    },
    {
      "block_number": "15846571",
      "block_timestamp": "2022-10-28T12:30:47.000Z",
      "block_hash": "0x5bdb81ef57386daa6ad3b9893216db9b15bb5d88f9c5524fabb106eace4c69c6",
      "transaction_hash": "0x1cf0a4282ca892210a42ee14633d9dffcb644d198a5a7751af1046568c59beb9",
      "transaction_index": 156,
      "log_index": 306,
      "value": "0",
      "contract_type": "ERC1155",
      "transaction_type": "Single",
      "token_address": "0x5728ff21bdadb0d3505f4e307f79282d53d92fde",
      "token_id": "0",
      "from_address": "0x47da053384abd2ee2bf4883927e7e1dcc3f5f95b",
      "to_address": "0x981ff49a2007a095eca50458159525e65e7b1d0c",
      "amount": "1",
      "verified": 1,
      "operator": "0x47da053384abd2ee2bf4883927e7e1dcc3f5f95b"
    },
    {
      "block_number": "15846571",
      "block_timestamp": "2022-10-28T12:30:47.000Z",
      "block_hash": "0x5bdb81ef57386daa6ad3b9893216db9b15bb5d88f9c5524fabb106eace4c69c6",
      "transaction_hash": "0x1cf0a4282ca892210a42ee14633d9dffcb644d198a5a7751af1046568c59beb9",
      "transaction_index": 156,
      "log_index": 305,
      "value": "0",
      "contract_type": "ERC1155",
      "transaction_type": "Single",
      "token_address": "0x03a980c83bb58838298ea7689d9d4d22aad51599",
      "token_id": "0",
      "from_address": "0x47da053384abd2ee2bf4883927e7e1dcc3f5f95b",
      "to_address": "0x981ff49a2007a095eca50458159525e65e7b1d0c",
      "amount": "1",
      "verified": 1,
      "operator": "0x47da053384abd2ee2bf4883927e7e1dcc3f5f95b"
    }
  ]
}
```

Congratulations 🥳 you just got all the NFT transfers in a block with just a few lines of code using the Moralis NFT API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTTransfersByBlock](https://docs.moralis.io/reference/getnfttransfersbyblock)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.