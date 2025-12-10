---
title: "Token Metadata Enhanacement"
slug: "metadata-enhancements"
authors:
  name: Moralis Team
tags: ["Data API"]
---

We've added a small but super useful upgrade to our token metadata endpoints.

`getTokenMetadata` and `searchTokens` now return an `implementations` field - giving you a full list of all chains where the same token is deployed (e.g. USDC on Solana, Base, Arbitrum, etc.).

Here's an example snippet:

```
{
  "implementations": [
    {
      "chain": "solana",
      "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
    },
    {
      "chain": "monad",
      "address": "0x754704bc059f8c67012fed69bc8a327a5aafb603"
    },
    {
      "chain": "moonbeam",
      "address": "0xffffffff7d2b0b761af01ca8e25242976ac0ad7d"
    },
    {
      "chain": "sei",
      "address": "0xe15fc38f6d8c56af07bbcbe3baf5708a2bf42392"
    },
    {
      "chain": "base",
      "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
    },
    ...
  ]
}
```

Perfect for multi-chain apps, asset tracking, and wallet UX.

Available now - no changes required on your side. 🎉
