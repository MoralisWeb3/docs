---
title: "Track New Tokens and Pairs"
slug: "../how-to-track-new-tokens-and-pairs"
description: "Learn how to monitor for new tokens by tracking DEX pair creation events using Moralis Streams API."
---

Monitoring for new tokens in the DeFi space is essential for discovering opportunities and building token discovery platforms. While you could monitor for token minting events, a more reliable approach is to track DEX pair creation events, as these indicate tokens that are actually being launched with liquidity.

:::tip
Pair creation events are more reliable indicators of new tokens than minting events because they indicate a token is being launched with actual trading liquidity.
:::

## Approach 1: Monitoring DEX Pair Creation

Uniswap V2 is one popular DEX protocols.


```javascript JavaScript
// Note: This is a sample ABI for Uniswap V2 Factory. Always verify the latest

const uniswapV2FactoryAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PairCreated",
    type: "event",
  }
];


const options = {
  chains: [EvmChain.ETHEREUM], // Monitor on Ethereum
  description: "Track new Uniswap V2 pairs",
  tag: "uniswap_v2_pairs",
  abi: uniswapV2FactoryAbi,
  includeContractLogs: true,
  topic0: ["PairCreated(address,address,address,uint256)"],
  advancedOptions: [
    {
      topic0: "PairCreated(address,address,address,uint256)",
      includeNativeTxs: true,
    },
  ],
  webhookUrl: "https://YOUR_WEBHOOK_URL",
};

const stream = await Moralis.Streams.add(options);
const { id } = stream.toJSON();

// Attach the Uniswap V2 Factory address to the stream
// Verify factory addresses and ABIs from official sources, as they may change over time.
await Moralis.Streams.addAddress({
  id,
  address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", // Uniswap V2 Factory
});
```


## Approach 2: Monitoring Multiple DEXes

To get comprehensive coverage, monitor multiple DEXes simultaneously:

```javascript JavaScript
const multiDexOptions = {
  chains: ["0x1", "0x38", "0x89"], // Ethereum, BSC, Polygon
  description: "Track pairs across multiple DEXes",
  tag: "multidex_pairs",
  abi: uniswapV2FactoryAbi, // Compatible with most V2-style DEXes
  includeContractLogs: true,
  topic0: ["PairCreated(address,address,address,uint256)"],
  advancedOptions: [
    {
      topic0: "PairCreated(address,address,address,uint256)",
      includeNativeTxs: true,
    },
  ],
  webhookUrl: "https://YOUR_WEBHOOK_URL",
};

const stream = await Moralis.Streams.add(multiDexOptions);
const { id } = stream.toJSON();

// Attach multiple factory addresses. 
// Verify the official DEX documentations to get the latest addresses.
const factories = [
  "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", // Uniswap V2
  "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac", // SushiSwap
  "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73", // PancakeSwap V2
  "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32", // QuickSwap
];

await Moralis.Streams.addAddress({
  id,
  address: factories,
});
```

## Use Cases

This approach is perfect for:
- **Token Discovery Platforms**: Automatically discover and list new tokens
- **DeFi Analytics**: Track new token launches for market analysis
- **Trading Bots**: React to new token launches with liquidity
- **Portfolio Trackers**: Add new tokens to user portfolios automatically
- **Security Monitoring**: Monitor for potential scam tokens