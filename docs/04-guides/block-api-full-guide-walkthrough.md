---
title: "Block API - Full Guide & Walkthrough"
slug: "/guides/block-api-full-guide-walkthrough"
description: "This tutorial teaches you what an Block API is, what are some of its most common use cases, and how to use it within your tech stack."
tags: [Block API, Moralis, Blockchain Blocks, Blockchain API, Blockchain API Key, Blockchain Data API, Block Hash, Moralis SDK]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Block API - Full Guide & Walkthrough

The Block API enables Web3 developers to quickly get data on specific blocks across multiple blockchains. It allows you to retrieve all the transactional content related to [blockchain blocks](https://moralis.io/api/block/) using either a block hash or a block number. Additionally, you can query the closest blocks by their corresponding dates. This guide will walk you through how to interact with these APIs using both JavaScript and Python SDKs.

## What is a Block API?

[Block API](https://moralis.io/api/block/) is a collection of APIs that can be used to index Block data. With the Moralis Block API, you can get all transactions information mined on a block using its hash or number. Furthermore, you can also obtain data about the closest block to a specific date.

The Block API is categorized into **two primary endpoints** according to their use cases:

| Endpoint                                         | Path                                   | Use Cases                                                                                                                                    |
| ------------------------------------------------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [getBlock](/web3-data-api/evm/reference/get-block)        | /block/{block_number_or_hash}          | Fetch detailed information of a specific block using its block number or hash. Ideal for querying data about a specific block.       |
| [getDateToBlock](/web3-data-api/evm/reference/get-date-to-block)  | /dateToBlock                           | Fetch information of the closest block to a specific date. Perfect for obtaining historical data of blocks for a particular date.    |

## Getting Started with the Moralis Block API

### Step 1: Install the Moralis SDK

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

### Step 2: Integrate the Block API into Your Code

Integrating the Block API into your application is straightforward. All the [Block APIs](https://moralis.io/api/block/) can be called using `Moralis.EvmApi.block.{apiName}`, where `apiName` is replaced by the actual name of the [Block API](https://moralis.io/api/block/) used.

In this guide, let's consider that you're developing a simple app to index blockchain blocks. 

Here are three initial features you can build using the [Block API](https://moralis.io/api/block/):

#### Feature #1: Fetch All Transactions of a Block

To fetch all transactions from a block, you can use the Moralis [getBlock](/web3-data-api/evm/reference/get-block) endpoint.

Required parameters are:  
`blockNumberOrHash`: Accepts the block number or block hash.  
`chain`: Optional parameter that accepts the name of the chain from which to query data. The default value is the 'eth' chain. Check the supported chains [here](/web3-data-api/evm#supported-chains).  
`include`: Optional parameter that includes internal transactions if the value is set to 'internal_transactions'.  

After retrieving the `blockNumberOrHash`, `chain`, and `include`, incorporate the following code into your existing codebase:

<Tabs groupId="getBlock">
<TabItem value="js" label="JavaScript">

```js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const blockNumberOrHash = "15863321";
  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.block.getBlock({
    blockNumberOrHash,
    chain,
    include: "internal_transactions",
  });

  console.log(response.raw);
};

runApp();

```
</TabItem>

<TabItem value="ts" label="TypeScript">

```ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const blockNumberOrHash = "15863321";
  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.block.getBlock({
    blockNumberOrHash,
    chain,
    include: "internal_transactions",
  });

  console.log(response?.raw);
};

runApp();

```
</TabItem>

<TabItem value="py" label="Python">

```py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "block_number_or_hash": "15863321",
    "chain": "eth", 
    "include": "internal_transactions", 
}

result = evm_api.block.get_block(
    api_key=api_key,
    params=params,
)

# converting it to json because of unicode characters
print(json.dumps(result, indent=4))
```
</TabItem>
</Tabs>

#### Feature #2: Retrieve Block Number Using the Date

You can accomplish this with the [getDateToBlock](/web3-data-api/evm/reference/get-date-to-block) endpoint. 

The required parameters are:  
`date`: Accepts a UNIX timestamp in seconds or a date string (any format accepted by moment.js)  
`chain`: Optional parameter that accepts the name of the chain from which to query data. The default value is the 'eth' chain.Check the supported chains [here](/web3-data-api/evm#supported-chains).  

After obtaining the `date` and `chain`, add the following code to your existing codebase:

<Tabs groupId="getDateToBlock">
<TabItem value="js" label="JavaScript">

```js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const date = "2023-07-05";
  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.block.getDateToBlock({
    date,
    chain,
  });

  console.log(response.raw);
};

runApp();
```
</TabItem>

<TabItem value="ts" label="TypeScript">

```ts
import Moralis from "moralis";
import { EvmChain } from"@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const date = "2023-07-05";
  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.block.getDateToBlock({
    date,
    chain,
  });

  console.log(response.raw);
};

runApp();

```
</TabItem>

<TabItem value="py" label="Python">

```py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "date": "2023-07-05",
    "chain": "eth",
}

result = evm_api.block.get_date_to_block(
    api_key=api_key,
    params=params,
)

# Converting it to JSON because of unicode characters
print(json.dumps(result, indent=4))
```
</TabItem>

</Tabs>

With these few lines of code, you can use the Moralis Block API to find the nearest block for a given date.

### Step 3: Go Live!

Once you have integrated the [Moralis Block API](https://moralis.io/api/block/) into your app and can index block data, it's time to go live.

Before you do, ensure your API key is stored securely. Best practices include:

- Storing your API key in an environment variable (secret) `process.env`.
- Having your API called on the backend. Although you can call the Block API on the frontend, it is not recommended because it can easily reveal your API key in the browser.

Once all checks are complete, your app is ready to go live with the [Moralis Block API](https://moralis.io/api/block/)! 🚀
