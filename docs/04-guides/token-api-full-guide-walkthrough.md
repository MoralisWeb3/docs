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

| API Name                                                                         | Path                   | Use Cases                                           |
| -------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------- |
| [getMultipleTokenPrices](/web3-data-api/evm/reference/get-multiple-token-prices) | /erc20/prices          | Fetch multiple ERC20 token prices                   |
| [getTokenPrice](/web3-data-api/evm/reference/get-token-price)                    | /erc20/{address}/price | Fetch an ERC20 token price specified by its address |

### Get Balance

| API Name                                                                         | Path                       | Use Cases |
| -------------------------------------------------------------------------------- | -------------------------- | --------- |
| [getWalletTokenBalances](/web3-data-api/evm/reference/get-wallet-token-balances) | /{address}/erc20           |           |
| [getTokenAllowance](/web3-data-api/evm/reference/get-token-allowance)            | /erc20/{address}/allowance |           |

### Get Transfers

| API Name                                                                           | Path                       | Use Cases |
| ---------------------------------------------------------------------------------- | -------------------------- | --------- |
| [getErc20Transfers](/web3-data-api/reference/get-erc20-transfers)                  | /erc20/transfers           |           |
| [getWalletTokenTransfers](/web3-data-api/evm/reference/get-wallet-token-transfers) | /{address}/erc20/transfers |           |
| [getTokenTransfers](/web3-data-api/evm/reference/get-token-transfers)              | /erc20/{address}/transfers |           |

### Get Mints

| API Name                                                      | Path         | Use Case |
| ------------------------------------------------------------- | ------------ | -------- |
| [getErc20Mints](/web3-data-api/evm/reference/get-erc20-mints) | /erc20/mints |          |

### Get Burns

| API Name                                                      | Path         | Use Case |
| ------------------------------------------------------------- | ------------ | -------- |
| [getErc20Burns](/web3-data-api/evm/reference/get-erc20-burns) | /erc20/burns |          |

### Get Approvals

| API Name                                                              | Path             | Use Case |
| --------------------------------------------------------------------- | ---------------- | -------- |
| [getErc20Approvals](/web3-data-api/evm/reference/get-erc20-approvals) | /erc20/approvals |          |

### Get Metadata

| API Name                                                                              | Path                    | Use Case |
| ------------------------------------------------------------------------------------- | ----------------------- | -------- |
| [getTokenMetadata](/web3-data-api/evm/reference/get-token-metadata)                   | /erc20/metadata         |          |
| [getTokenMetadataBySymbol](/web3-data-api/evm/reference/get-token-metadata-by-symbol) | /erc20/metadata/symbols |          |

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

#### Feature #1: 

### Step 3: Going Live!

Once you have a few lines of new code, you have successfully integrated the [Moralis Token API](https://moralis.io/api/token/) to your simple app.

Now, it's time to push your code to production.

Before doing so, make sure that your API key is stored in a secure place. The best practice for this will be:

- Storing your API key in an environment variable (secrets) `process.env`
- Have your API called on the backend. While it is possible to call the NFT API on the fronted, it is highly discouraged as it can easily reveal your API key on the browser.

Once everything checks out, your app is good to go live with [Moralis Token API](https://moralis.io/api/token/)! 🚀

