---
title: "Token API - Full Guide & Walkthrough"
slug: "/guides/token-api-full-guide-walkthrough"
description: "This tutorial teaches you what an Token API is, what are some of its most common use cases, and how to use it within your tech stack."
tags: [Token API, Ethereum, Polygon, EVM]
---

## What is an Token API?

An [Token API](https://moralis.io/api/token/) is a collection of APIs that can be used to index ERC20 token-related data, e.g. ERC20 token balance, ERC20 token metadata, from multiple [EVM chains](/web3-data-api/evm#supported-chains) that we support.

The [Token API](https://moralis.io/api/token/) is designed to provide high-quality, structured NFT data to developers to build application that interact with various ERC20 tokens.

Therefore, the ideal use cases for the [Token API](https://moralis.io/api/token/) are listed as below, but not limited to:

### Get Price

The [Get Price API](/web3-data-api/evm/reference/get-multiple-token-prices) is a collection of [Token API](https://moralis.io/api/token/) that provides developer with real-time price data of ERC20 tokens indexed from multiple DEXs on multiple chains.

This API category comprised of 2 APIs:

| API Name                                                                         | Path                   | Use Cases                                              |
| -------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------ |
| [getMultipleTokenPrices](/web3-data-api/evm/reference/get-multiple-token-prices) | /erc20/prices          | Fetch multiple ERC20 token prices.                     |
| [getTokenPrice](/web3-data-api/evm/reference/get-token-price)                    | /erc20/{address}/price | Fetch an ERC20 token price specified by its `address`. |

### Get Balance

The [Get Balance API](/web3-data-api/evm/reference/get-wallet-token-balances) is a collection of [Token API](https://moralis.io/api/token/) that provides developer with real-time balances and allowances of ERC20 tokens on wallet addresses.

This API category comprised of 2 APIs:

| API Name                                                                         | Path                       | Use Cases                                                                                                                    |
| -------------------------------------------------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [getWalletTokenBalances](/web3-data-api/evm/reference/get-wallet-token-balances) | /{address}/erc20           | Fetch ERC20 token balances for a specific wallet `address`.                                                                  |
| [getTokenAllowance]()                                                            | /erc20/{address}/allowance | Fetch the allowance of a specific ERC20 token given its `address` by the `spender_address` on behalf of the `owner_address`. |

### Get Transfers

The [Get Transfers API](/2.0/web3-data-api/reference/get-erc20-transfers) is a collection of [Token API](https://moralis.io/api/token/) that provides developer with all ERC20 token transfers on the [EVM chains](/web3-data-api/evm#supported-chains) the Moralis supported.

This API category comprised of 3 APIs:

| API Name                                                                           | Path                       | Use Cases                                                                                             |
| ---------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| [getErc20Transfers](/2.0/web3-data-api/reference/get-erc20-transfers)              | /erc20/transfers           | Fetch historical ERC20 token transactions ordered by descending block order.                          |
| [getWalletTokenTransfers](/web3-data-api/evm/reference/get-wallet-token-transfers) | /{address}/erc20/transfers | Fetch historical ERC20 token transactions on a given wallet `address` by descending block order.      |
| [getTokenTransfers](/web3-data-api/evm/reference/get-token-transfers)              | /erc20/{address}/transfers | Fetch historical ERC20 token transactions on a given ERC20 token `address` by descending block order. |

### Get Mints

The [Get Mints API](/2.0/web3-data-api/evm/reference/get-erc20-mints) is a collection of [Token API](https://moralis.io/api/token/) that provides developer with real-time minting information on any ERC20 tokens.

This API category comprised of 1 API:

| API Name                                                          | Path         | Use Case                                                                                                                                |
| ----------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| [getErc20Mints](/2.0/web3-data-api/evm/reference/get-erc20-mints) | /erc20/mints | Fetch ERC20 token mints, minted by one or many wallet addresses and/or contract addresses, ordered by block number in descending order. |

### Get Burns

The [Get Burns API](/2.0/web3-data-api/evm/reference/get-erc20-burns) is a collection of [Token API](https://moralis.io/api/token/) that provides developer with real-time burning information on any ERC20 tokens.

This API category comprised of 1 API:

| API Name                                                          | Path         | Use Case                                                                                                                                |
| ----------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| [getErc20Burns](/2.0/web3-data-api/evm/reference/get-erc20-burns) | /erc20/burns | Fetch ERC20 token burns, burned by one or many wallet addresses and/or contract addresses, ordered by block number in descending order. |

### Get Approvals

The [Get Approvals API](/2.0/web3-data-api/evm/reference/get-erc20-approvals) is a collection of [Token API](https://moralis.io/api/token/) that provides developer with real-time approvals information on any ERC20 tokens.

This API category comprised of 1 API:

| API Name                                                                  | Path             | Use Case                                                                                                                       |
| ------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [getErc20Approvals](/2.0/web3-data-api/evm/reference/get-erc20-approvals) | /erc20/approvals | Fetch ERC20 approvals for one or many wallet addresses and/or contract addresses, ordered by block number in descending order. |

### Get Metadata

The [Get Metadata API](/web3-data-api/evm/reference/get-token-metadata) is a collection of [Token API](https://moralis.io/api/token/) that provides developer with detailed metadata on any ERC20 tokens.

This API category comprised of 2 APIs:

| API Name                                                                              | Path                    | Use Case                                                                                   |
| ------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------ |
| [getTokenMetadata](/web3-data-api/evm/reference/get-token-metadata)                   | /erc20/metadata         | Fetch the metadata (name, symbol, decimals, logo) of a given ERC20 token contract address. |
| [getTokenMetadataBySymbol](/web3-data-api/evm/reference/get-token-metadata-by-symbol) | /erc20/metadata/symbols | Fetch the metadata (name, symbol, decimals, logo) of a given ERC20 token's symbol.         |

## How to get started?

To get started with [Moralis Token API](https://moralis.io/api/token/), there are two methods that can be used, depending on the programming language that you are using:

| Programming Languages                 | Method       |
| ------------------------------------- | ------------ |
| JavaScript/TypeScript, Python         | Moralis SDKs |
| Others (e.g. Java, C/C++, Ruby, etc.) | REST API     |

For this guide, we'll particularly use the Moralis SDK for examples.

If you would like to use other languages calling the [Moralis Token API](https://moralis.io/api/token/) using regular REST API call, then make sure to check the [Token API reference pages](/web3-data-api/evm/reference/get-multiple-token-prices) to get all the parameters and responses type.

### Step 1: Install the Moralis SDK

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

### Step 2: Add to Your Code

To use the [Token API](https://moralis.io/api/nft/), it is very simple. All the [Token API](https://moralis.io/api/nft/) can be called by using `Moralis.EvmApi.token.{apiName}` where `apiName` will be replaced by the [Token API](https://moralis.io/api/nft/) used.

In this guide, suppose you are building a simple ERC20 token explorer that helps user get information on a specific ERC20 token address.

Let's start to use the [Token API](https://moralis.io/api/nft/) to build these three initial features:

#### Feature #1: Fetch the Metadata of an ERC20 token

Here you'll need two parameters: `addresses` and `chain`.

Once you've obtained both the `addresses` and `chain`, you can copy the following code and add it to your existing codebase:

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
    // ...and any other configuration
  });

  const addresses = ["ERC20_TOKEN_ADDRESS"];

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    chain,
    addresses,
  });

  console.log(response.raw);
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
    // ...and any other configuration
  });

  const addresses = ["ERC20_TOKEN_ADDRESS"];

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    chain,
    addresses,
  });

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "addresses": ["ERC20_TOKEN_ADDRESS"],
    "chain": "CHAIN", # e.g. "eth", "polygon", etc.
}

result = evm_api.token.get_token_metadata(
    api_key=api_key,
    params=params,
)

print(result)
```

</TabItem>
</Tabs>

Once the code is added, you will be able to obtain all the metadata, which includes name, symbol, and decimals information on a given specific ERC20 token address using just a few lines of code with [Moralis Token API](https://moralis.io/api/token/).

#### Feature #2: Fetch the balance of an ERC20 token in the user's wallet address

Here you'll need three parameters: `address`, `tokenAddresses`, and `chain`.

Once you've obtained both the `address`, `tokenAddresses`, and `chain`, you can copy the following code and add it to your existing codebase:

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="JavaScript" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "USER_WALLET_ADDRESS";

  const tokenAddresses = ["ERC20_TOKEN_ADDRESS"];

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    chain,
    tokenAddresses,
    address,
  });

  console.log(response.raw);
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
    // ...and any other configuration
  });

  const address = "USER_WALLET_ADDRESS";

  const tokenAddresses = ["ERC20_TOKEN_ADDRESS"];

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    chain,
    tokenAddresses,
    address,
  });

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "address": "USER_WALLET_ADDRESS",
    "token_addresses": ["ERC20_TOKEN_ADDRESS"],
    "chain": "CHAIN", # e.g. "eth", "polygon", etc.
}

result = evm_api.token.get_wallet_token_balances(
    api_key=api_key,
    params=params,
)

print(result)
```

</TabItem>
</Tabs>

Once the code is added, you will be able to obtain the balance of a given specific ERC20 token address held in the user wallet address using just a few lines of code with [Moralis Token API](https://moralis.io/api/token/).

#### Feature #3: Fetch the price of a given ERC20 token

Here you'll need two parameters: `address` and `chain`.

Once you've obtained both the `address` and `chain`, you can copy the following code and add it to your existing codebase:

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="JavaScript" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "ERC20_TOKEN_ADDRESS";

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.token.getTokenPrice({
    chain,
    address,
  });

  console.log(response.raw);
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
    // ...and any other configuration
  });

  const address = "ERC20_TOKEN_ADDRESS";

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.token.getTokenPrice({
    chain,
    address,
  });

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "address": "ERC20_TOKEN_ADDRESS",
    "chain": "CHAIN", # e.g. "eth", "polygon", etc.
}

result = evm_api.token.get_token_price(
    api_key=api_key,
    params=params,
)

print(result)
```

</TabItem>
</Tabs>

Once the code is added, you will be able to obtain real-time pricing data on the given ERC20 token using just a few lines of code with [Moralis Token API](https://moralis.io/api/token/).

### Step 3: Going Live!

Once you have a few lines of new code, you have successfully integrated the [Moralis Token API](https://moralis.io/api/token/) to your simple ERC20 token explorer app.

Now, it's time to push your code to production.

Before doing so, make sure that your API key is stored in a secure place. The best practice for this will be:

- Storing your API key in an environment variable (secrets) `process.env`
- Have your API called on the backend. While it is possible to call the NFT API on the fronted, it is highly discouraged as it can easily reveal your API key on the browser.

Once everything checks out, your app is good to go live with [Moralis Token API](https://moralis.io/api/token/)! 🚀
