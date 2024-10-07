---
sidebar_position: 2
title: "March 4 2024: JS SDK v1: Sunsetting Public RPC URLs"
sidebar_label: "2024/03/04"
slug: "/web3-data-api/breaking-changes/sunset-public-rpc-nodes"
---

# JS SDK v1: Sunsetting Public RPC URLs

On March 4, 2024, we will retire specific public RPC URLs used in conjunction with WalletConnect within the Moralis JavaScript SDK version 1 (v1). This update is crucial for users utilizing WalletConnect in the frontend with the default RPC URLs provided by Moralis. The affected URLs are formatted as follows: https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/mainnet

## Who Is Affected?

- Users of the Moralis JS SDK v1 who utilize WalletConnect without a custom RPC URL.

## Who Is Not Affected?

- Users who have already migrated to the latest version of our JS SDK.
- Users who do not use WalletConnect in v1.

## Required Action

To ensure your applications continue to operate seamlessly, affected users must transition to a custom RPC URL. This adjustment involves updating the rpcMap parameter within the Moralis.authenticate method to include your chosen RPC provider’s URL.

## Summary and Migration Example

To migrate from the deprecated speedy nodes, you’ll need to select an alternative RPC provider and specify its URL in the rpcMap parameter during authentication with Moralis.

**Example Migration Step:**

```js
Moralis.authenticate({
  provider: "walletconnect",
  projectId: "<PROJECT_ID>",
  chainId: 1,
  rpcMap: {
    1: "<YOUR_CUSTOM_RPC_URL>",
  },
});
```

If you are unsure how this impacts you, or for further assistance, please reach out to our [support team via email](mailto:support@moralis.io) or via our Intercom chat.
