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

- Web3 alerts (e.g. whale alerts monitoring)
- Real-time transaction & crypto wallet notifications
- Monitoring wallet balances
- etc.

## How to get started?

To get started with [Moralis Streams API](https://moralis.io/streams/), there are two methods that can be used to create [Streams](https://moralis.io/streams/), depending on the programming language that you are using:

| Programming Languages                 | Method       |
| ------------------------------------- | ------------ |
| JavaScript/TypeScript, Python         | Moralis SDKs |
| Others (e.g. Java, C/C++, Ruby, etc.) | REST API     |

For this guide, we'll particularly use the Moralis SDK for examples.

If you would like to use other languages calling the [Moralis Streams API](https://moralis.io/streams/) using regular REST API call, then make sure to check the [Streams API reference pages](/streams-api/evm/reference/get-history) to get all the parameters and responses type.

In production, you should have your own webhook setup, but for the scope of this tutorial, we will be using [https://webhook.site](https://webhook.site) to get your test webhook. To get your test webhook, simply go to the site and copy the given unique URL.

### Step 1: Install Moralis SDK

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

### Step 2: Monitor On-Chain Wallet Transactions

Once you have [your API key](/web3-data-api/evm/get-your-api-key) and [webhook URL](https://webhook.site), let's set up our first stream to monitor on-chain crypto wallet transactions. In this instance, let's monitor the `0x68b3f12d6e8d85a8d3dbbc15bba9dc5103b888a4` address.

To do so, copy the following code:

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
  });

  const stream = {
    chains: [EvmChain.ETHEREUM, EvmChain.POLYGON],
    description: "monitor Bobs wallet",
    tag: "bob",
    webhookUrl: "https://YOUR_WEBHOOK_URL",
    includeNativeTxs: true,
  };

  const newStream = await Moralis.Streams.add(stream);
  const { id } = newStream.toJSON();

  // Now we attach bobs address to the stream
  const address = "0x68b3f12d6e8d85a8d3dbbc15bba9dc5103b888a4";

  await Moralis.Streams.addAddress({ address, id });
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
  });

  const stream = {
    chains: [EvmChain.ETHEREUM, EvmChain.POLYGON],
    description: "monitor Bobs wallet",
    tag: "bob",
    webhookUrl: "https://YOUR_WEBHOOK_URL",
    includeNativeTxs: true,
  };

  const newStream = await Moralis.Streams.add(stream);
  const { id } = newStream.toJSON();

  // Now we attach bobs address to the stream
  const address = "0x68b3f12d6e8d85a8d3dbbc15bba9dc5103b888a4";

  await Moralis.Streams.addAddress({ address, id });
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
from moralis import streams

api_key = "04u5XkBCRyoxrAM89MeOSV055R6QpRxTWGw431jWd8ydCJtq0TpY6jErerZ9FN3u"

create_stream_body = {
  "description": "monitor Bobs wallet",
  "tag": "bob",
  "webhook_url": "https://YOUR_WEBHOOK_URL",
  "include_native_txs": True,
  "chain_ids": [
    "0x1",
    "0x89"
  ]
}

result = streams.evm_streams.create_stream(
  api_key=api_key,
  body=create_stream_body,
)

add_address_body = {
  "address": "0x68b3f12d6e8d85a8d3dbbc15bba9dc5103b888a4"
}

params = {
  "id": result.id
}

# Now we attach bobs address to the stream
streams.evm_streams.add_address_to_stream(
  api_key=api_key,
  body=add_address_body,
  params=params,
)
```

</TabItem>
</Tabs>

Once the code has been added, you can run the script to create the [Streams](https://moralis.io/streams/). This will be reflected on your Moralis Dashboard as well. From here, you shall receive new real-time responses on your attached webhook for any new transactions occuring on either Ethereum or Polygon.

### Step 3: Listen to Smart Contract Events

Other than monitoring crypto wallet transactions in real-time, you can also use [Streams](https://moralis.io/streams/) to listen to real-time smart contract events whenever it is emitted on the particular blockchain you are listening to.

Suppose we'd like to listen to all ERC20 transfers for a [USDT](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7). Then, the streams setup shall be as follows:

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="JavaScript" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const ERC20_transfer_ABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
];

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
  });

  const stream = {
    chains: [EvmChain.ETHEREUM],
    description: "monitor USDT transfers",
    tag: "USDT",
    webhookUrl: "https://YOUR_WEBHOOK_URL",
    abi: ERC20_transfer_ABI,
    includeContractLogs: true,
    topic0: ["Transfer(address,address,uint256)"],
  };

  const newStream = await Moralis.Streams.add(stream);
  const { id } = newStream.toJSON();

  // Now we attach USDT address to the stream
  const address = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

  await Moralis.Streams.addAddress({ address, id });
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const ERC20_transfer_ABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
];

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
  });

  const stream = {
    chains: [EvmChain.ETHEREUM],
    description: "monitor USDT transfers",
    tag: "USDT",
    webhookUrl: "https://YOUR_WEBHOOK_URL",
    abi: ERC20_transfer_ABI,
    includeContractLogs: true,
    topic0: ["Transfer(address,address,uint256)"],
  };

  const newStream = await Moralis.Streams.add(stream);
  const { id } = newStream.toJSON();

  // Now we attach USDT address to the stream
  const address = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

  await Moralis.Streams.addAddress({ address, id });
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
from moralis import streams

api_key = "YOUR_API_KEY"

ERC20_transfer_ABI = [{
  "anonymous": false,
  "inputs": [
    { "indexed": true, "name": "from", "type": "address" },
    { "indexed": true, "name": "to", "type": "address" },
    { "indexed": false, "name": "value", "type": "uint256" },
  ],
  "name": "Transfer",
  "type": "event",
}]

create_stream_body = {
  "description": "monitor USDT transfers",
  "tag": "USDT",
  "webhook_url": "https://YOUR_WEBHOOK_URL",
  "include_contract_logs": True,
  "chain_ids": [
    "0x1"
  ],
  "abi": ERC20_transfer_ABI,
  "topic0": ["Transfer(address,address,uint256)"]
}

result = streams.evm_streams.create_stream(
  api_key=api_key,
  body=create_stream_body,
)

add_address_body = {
  "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7"
}

params = {
  "id": result.id
}

# Now we attach USDT address to the stream
streams.evm_streams.add_address_to_stream(
  api_key=api_key,
  body=add_address_body,
  params=params,
)
```

</TabItem>
</Tabs>

Once the code has been added, you can run the script to create a second [Streams](https://moralis.io/streams/). This will be reflected on your Moralis Dashboard as well. From here, you shall receive new real-time responses on your attached webhook for any new USDT transfers occuring on either Ethereum.

For listening to smart contracts, you can also add the [Filters feature](/streams-api/evm/streams-configuration/filter-streams) to filter out results that only fulfills certain criteria. This can be relevant in more specific use cases, such as whale monitoring, and can simply be supplemented to our existing code.

For example, we'd like to monitor all USDT transaction on Ethereum that is over $1M, then we can modify our code as follows:

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="JavaScript" default>

```javascript index.js
// Above code is same as prior

const filter_ERC20 = {
  "and": \[
    { "eq": ["from", "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5"] },
    { "gt": ["value", "1000000000"] }, // Example of USDT (6 Decimals)
  ],
};

const runApp = async () => {
  const stream = {
    // same parameters as prior
    advancedOptions: [
      {
        topic0: "Transfer(address,address,uint256)",
        filter: filter_ERC20
      },
    ]
  };

  const newStream = await Moralis.Streams.add(stream);
  const { id } = newStream.toJSON();

  // Now we attach USDT address to the stream
  const address = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

  await Moralis.Streams.addAddress({ address, id });
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript index.ts
// Above code is same as prior

const filter_ERC20 = {
  "and": \[
    { "eq": ["from", "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5"] },
    { "gt": ["value", "1000000000"] }, // Example of USDT (6 Decimals)
  ],
};

const runApp = async () => {
  const stream = {
    // same parameters as prior
    advancedOptions: [
      {
        topic0: "Transfer(address,address,uint256)",
        filter: filter_ERC20
      },
    ]
  };

  const newStream = await Moralis.Streams.add(stream);
  const { id } = newStream.toJSON();

  // Now we attach USDT address to the stream
  const address = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

  await Moralis.Streams.addAddress({ address, id });
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
# Above code is same as prior

filter_ERC20 = {
  "and": \[
    { "eq": ["from", "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5"] },
    { "gt": ["value", "1000000000"] }, // Example of USDT (6 Decimals)
  ],
}

create_stream_body = {
  # same parameters as prior
  "advanced_options": [
    {
      "topic0": "Transfer(address,address,uint256)",
      "filter": filter_ERC20
    }
  ]
}

result = streams.evm_streams.create_stream(
  api_key=api_key,
  body=create_stream_body,
)

add_address_body = {
  "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7"
}

params = {
  "id": result.id
}

# Now we attach USDT address to the stream
streams.evm_streams.add_address_to_stream(
  api_key=api_key,
  body=add_address_body,
  params=params,
)
```

</TabItem>
</Tabs>

Once modified, you will only receive all USDT transfers on Ethereum over $1M real-time on your webhooks.
