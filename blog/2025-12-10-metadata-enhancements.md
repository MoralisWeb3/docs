---
title: "Improvement: Token Metadata"
slug: "metadata-enhancements"
authors:
  name: Moralis Team
tags: ["Data API"]
---

We've added a small but super useful upgrade to our token metadata endpoints.

[`getTokenMetadata`](/web3-data-api/evm/reference/get-token-metadata) and [`searchTokens`](/web3-data-api/evm/reference/search-tokens) now return an `implementations` field - giving you a full list of all chains where the same token is deployed (e.g. USDC on Solana, Base, Arbitrum, etc.).

Here's an example snippet:

```
{
  "implementations": [
    {
        "chainId": "0xa86a",
        "chain": "avalanche",
        "chainName": "Avalanche",
        "address": "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e"
    },
    {
        "chainId": "0x89",
        "chain": "polygon",
        "chainName": "Polygon POS",
        "address": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"
    },
    {
        "chainId": "0xa4b1",
        "chain": "arbitrum",
        "chainName": "Arbitrum One",
        "address": "0xaf88d065e77c8cc2239327c5edb3a432268e5831"
    },
    {
        "chainId": "0xa",
        "chain": "optimism",
        "chainName": "Optimism",
        "address": "0x0b2c639c533813f4aa9d7837caf62653d097ff85"
    },
    ...
  ]
}
```

Perfect for multi-chain apps, asset tracking, and wallet UX.

Available now - no changes required on your side. 🎉
