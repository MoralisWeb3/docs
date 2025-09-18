---
title: "Track ERC20 Token Burns and Mints"
slug: "../how-to-monitor-for-erc20-token-burns-or-mints"
description: "Learn how to monitor ERC20 token burns or mints using Moralis Streams API."
---

Lets check all USDC transfers but filter transaction where the recipient or the sender is the zero address and if the amount is greater or equal to 10000 USDC.

## Programatically

```javascript JavaScript
const transferUsdcAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

const filter = {
  or: [
    {
      and: [
        { eq: ["sender", "0x00000...00000"] },
        { gte: ["amount", "10000000000"] },
      ],
    },
    {
      and: [
        { eq: ["receiver", "0x00000...00000"] },
        { gte: ["amount", "10000000000"] },
      ],
    },
  ],
}; // we will only receive events when the transfer recipent or the sender is the zero address meaning we are filtering mints and burn

const options = {
  chains: [EvmChain.ETHEREUM], // Monitor USDC on ethereum
  description: "Token burns and mints", // your description
  tag: "mintsAndBurns", // give it a tag
  abi: transferUsdcAbi,
  includeContractLogs: true,
  topic0: ["Transfer(address,address,uint256)"],
  advancedOptions: [
    {
      topic0: "Transfer(address,address,uint256)",
      filter,
      includeNativeTxs: true,
    },
  ],
  webhookUrl: "https://YOUR_WEBHOOK_URL", // webhook url to receive events,
};

const stream = await Moralis.Streams.add(options);

const { id } = stream.toJSON(); // { id: 'YOUR_STREAM_ID', ...stream }

// Attach the contract address to the stream
await Moralis.Streams.addAddress({
  id,
  address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC address
});
```

## Via WebUI

1. Create a new Stream
2. Fill out the form
3. Switch on Event Emittance and Add the Abi and select the topic
4. Add below value to advanced options

```json JSON
[
  {
    "topic0": "Transfer(address,address,uint256)",
    "filter": {
      "or": [
        {
          "and": [
            { "eq": ["sender", "0x00000...00000"] },
            { "gte": ["amount", "10000000000"] }
          ]
        },
        {
          "and": [
            { "eq": ["receiver", "0x00000...00000"] },
            { "gte": ["amount", "10000000000"] }
          ]
        }
      ]
    }
  }
]
```

5. Click on create stream button.
