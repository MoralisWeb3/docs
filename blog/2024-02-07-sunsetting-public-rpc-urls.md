---
title: "JS SDK v1: Sunsetting Public RPC URLs"
slug: "sunsetting-public-rpc-urls"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

On March 4, 2024, we will phase out our old public RPC URLs specific to WalletConnect within the earlier version of the Moralis JS SDK (v1). This update affects users that are currently using WalletConnect in the frontend who have not opted for a custom RPC URL. The RPC URLs slated for discontinuation follow the format: https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/mainnet.

If you have already upgraded to our latest version of the JS SDK, or you do not use the WalletConnect feature in our v1 SDK, your operations will remain unaffected. For those still using these specific URLs, transitioning to a custom RPC URL is required. This can be easily achieved by updating the rpcMap parameter in the Moralis.authenticate method.

**Summary and Migration Guide**
To migrate from the soon-to-be-retired speedy nodes, users are required to replace these deprecated URLs with an alternative RPC provider. This process involves specifying your chosen provider's RPC URL in the rpcMap parameter during authentication with Moralis. This change ensures continuous and uninterrupted service following the deprecation date.
Please refer to our [migration guide for more information](/web3-data-api/breaking-changes/sunset-public-rpc-nodes).
