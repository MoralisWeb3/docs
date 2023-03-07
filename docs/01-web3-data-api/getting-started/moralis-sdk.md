---
title: "Install Moralis SDK"
slug: "../moralis-sdk"
description: "Quickly and easily integrate Moralis' products into your backend with the Moralis SDK."
---

## What is the Moralis SDK?

With the Moralis SDK, you can implement all of Moralis' products quickly and easily in your backend. The SDK comes with numerous features, such as:

- Easily query data from the EVM and Solana API (such as block info, transaction info, NFT metadata, token prices, user balances, owner list of an NFT, etc.)
- Web3 authentication, integrated into your own backend
- Several utilities to transform and format data

## What are the Languages Moralis Support?

We currently support the following languages for our SDKs:

- NodeJS
- Python

For other programming languages, you can call our API as you would for a normal REST API.

## Install Moralis SDK

To install Moralis SDK, use one of the following commands:

import SetupMoralis from '/docs/partials/_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

## Initialize Moralis SDK

:::caution

Make Sure to Store the `apiKey` Value Inside a `.env` File

:::

To initialize the SDK, add the following code to your dapp:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="Javascript" default>

```javascript
const Moralis = require("moralis").default;

await Moralis.start({
  apiKey: "0xa574a0d8c54FAF9c671997595A3747979965dCE8",
  // ...and any other configuration
});
```

</TabItem>
<TabItem value="typescript" label="Typescript">

```typescript
import Moralis from "moralis";

await Moralis.start({
  apiKey: "YOUR_API_KEY",
  // ...and any other configuration
});
```

</TabItem>
<TabItem value="python" label="Python">

```python Python
import moralis

print(moralis.utils.web3_api_version(api_key='API_KEY_HERE'))

# it prints {'version': '0.0.53'}
```

</TabItem>
</Tabs>

Here, `Moralis.start`, with `apiKey` as a required input, will initialize the Moralis SDK.

Once the Moralis NodeJS SDK is initialized, you will be able to use all the powerful APIs provided by Moralis to build your dapps.

## Configuration

You can set the configuration for your Moralis instance when you call `Moralis.start(config)`. For example:

```javascript
Moralis.start({
  apiKey: "YOUR_API_KEY",
  formatEvmAddress: 'checksum',
  formatEvmChainId: 'decimal',
  logLevel: 'verbose'
})
```

Below, you can find the possible options for the configuration:

| Option           | Description                                                                                                          | Default       | Required |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| apiKey           | Your secret Moralis ApiKey                                                                                           | `null`        | yes      |
| formatEvmAddress | Format style for evm addresses. Possible values: `'lowercase'`, `'checksum'`                                         | `'lowercase'` | no       |
| formatEvmChainId | Format style for chains. Possible values: `'decimal'`, `'hex'`                                                       | `'hex'`       | no       |
| logLevel         | Level of detail for log messages. Possible values: `'verbose'`, `'debug'`, `'info'`, `'warning'`, `'error'`, `'off'` | `'info'`      | no       |
