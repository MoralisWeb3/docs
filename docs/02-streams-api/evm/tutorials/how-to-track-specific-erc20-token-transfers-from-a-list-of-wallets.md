---
title: "Track Specific ERC20 Token Transfers From a List of Wallets"
slug: "../how-to-track-specific-erc20-token-transfers-from-a-list-of-wallets"
description: "Learn how to Track Specific ERC20 Token Transfers From a List of Wallets using Moralis Streams API."
---

Lets check a list of wallets and filter only a specific ERC20 Token Transfers. We will use the built-in `moralis_streams_contract_address` filter, to filter only the specific token transfers.

## Programatically

```javascript JavaScript
const ERC20TransferABI = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
];

// This filter will only listen to BUST token transfers
const filter = {
    eq: [
        "moralis_streams_contract_address",
        "0x55d398326f99059ff775485246999027b3197955",
    ], // BUST contract https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955
};

const options = {
    chains: ["0x38"],
    description: "Listen to a list of wallets for BUSD transfers",
    tag: "busd-transfers",
    webhookUrl: "https://webhook.site/e04c2edc-afb9-45b8-aff5-20724b2b1561",
    includeContractLogs: true,
    topic0: ["Transfer(address,address,uint256)"],
    abi: ERC20TransferABI,
    advancedOptions: [
        {
            topic0: "Transfer(address,address,uint256)",
            filter,
        },
    ],
};

const stream = await Moralis.Streams.add(options);

const { id } = stream.toJSON(); // { id: 'YOUR_STREAM_ID', ...stream }

// Attach the list of addresses to the stream
await Moralis.Streams.addAddress({
    id,
    address: ["0x1234...5678", "0x8765...4321", "0x543...0f43"],
});
```
