---
title: "NFT API - Full Guide & Walkthrough"
slug: "/guides/nft-api-full-guide-walkthrough"
description: "This tutorial teaches you what an NFT API is, what are some of its most common use cases, and how to use it within your tech stack."
tags: [NFT API, Ethereum, Polygon, EVM, ETH NFT API, Polygon NFT API]
---

## What is an NFT API?

![](/img/content/0d1bb91-image.webp)

An [NFT API](https://moralis.io/api/nft/) is a collection of APIs that can be used to index NFT data, e.g. NFT balance, NFT metadata, from multiple [EVM chains](/web3-data-api/evm#supported-chains) that we support.

The [NFT API](https://moralis.io/api/nft/) is designed to provide high-quality, structured NFT data to developers to build application that interact with various kinds of NFTs (ERC721, ERC115, others).

Therefore, the ideal use cases for the [NFT API](https://moralis.io/api/nft/) are listed as below, but not limited to:

- Portfolio dashboard
- Wallets
- NFT-gating applications (NFT-based tickets or memberships)
- NFT marketplaces
- etc.

The [NFT API](https://moralis.io/api/nft/) is divided into **6 categories** based on their use cases as follows:

### Get NFTs API

The [Get NFTs API](/web3-data-api/evm/reference/get-multiple-nfts) is a collection of [NFT API](https://moralis.io/api/nft/) that provides developer with all NFT stats (name, address, metadata, etc.) that fulfills certain search requirements, e.g. NFTs owned by a wallet, NFTs in a collection, NFTs with specific metadata, etc.

This API category comprised of 4 APIs:

| API Name                                                          | Path                 | Use Cases                                                                                                                  |
| ----------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [getMultipleNFTs](/web3-data-api/evm/reference/get-multiple-nfts) | /nft/getMultipleNFTs | Fetch a complete stats of multiple NFTs (max 25 per call) in a given `tokens` array.                                       |
| [getWalletNFTs](/web3-data-api/evm/reference/get-wallet-nfts)     | /{address}/nft       | Fetch all NFTs in a given wallet `address`. This is ideal for displaying NFT balance for a portfolio dashboard.            |
| [getContractNFTs](/web3-data-api/evm/reference/get-contract-nfts) | /nft/{address}       | Fetch all tokens in a given NFT collection `address`.                                                                      |
| [searchNFTs](/2.0/web3-data-api/evm/reference/search-nfts)        | /nft/search          | Fetch all NFT that have metadata that contains a given `q` string. This is ideal for building an NFT search functionality. |

### Get NFT Transfers API

The [Get NFT Transfers](/web3-data-api/evm/reference/get-wallet-nft-transfers) API is a collection of [NFT API](https://moralis.io/api/nft/) that provides developer with various historical NFT transfers data.

This API category comprised of 5 APIs:

| API Name                                                                           | Path                                        | Use Cases                                                                                                                                                                |
| ---------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [getWalletNFTTransfers](/web3-data-api/evm/reference/get-wallet-nft-transfers)     | /{address}/nft/transfers                    | Fetch all transfers of NFT that interacted with a given `address`. This does not include any indirect NFT transfers, e.g. transferring NFT with OpenSea contract.        |
| [getNFTContractTransfers](/web3-data-api/evm/reference/get-nft-contract-transfers) | /nft/{address}/transfers                    | Fetch all transfers of a specific NFT collection with a given contract `address`.                                                                                        |
| [getNFTTransfersFromToBlock]                                                       | /nft/transfers                              | Fetch all transfers of NFTs within the given `from_block` and `to_block` range. This is ideal for fetching NFT transfers from a specific range of time or block numbers. |
| [getNFTTransfersByBlock]                                                           | /block/{block_number_or_hash}/nft/transfers | Fetch all transfers of NFTs in a given `block_number_or_hash`                                                                                                            |
| [getNFTTransfers](/web3-data-api/evm/reference/get-nft-transfers)                  | /nft/{address}/{token_id}/transfers         | Fetch all transfers of a specific NFT with given `address` and `token_id`.                                                                                               |

### Get NFT Collections API

The [Get NFT Collections](/web3-data-api/evm/reference/get-wallet-nft-collections) API is a collection of [NFT API](https://moralis.io/api/nft/) that provides developer with NFT collections-related data.

If an NFT collection has not been synced by the [Moralis NFT API](https://moralis.io/api/nft/), it is also possible to manually index it by calling the [syncNFTContract](/web3-data-api/evm/reference/sync-nft-contract) API.

This API category comprised of 3 APIs:

| API Name                                                                           | Path                       | Use Cases                                                                                                          |
| ---------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [getWalletNFTCollections](/web3-data-api/evm/reference/get-wallet-nft-collections) | /{address}/nft/collections | Fetch all NFT collection (not specific token) that is owned by a given `address`.                                  |
| [getNFTContractMetadata](/web3-data-api/evm/reference/get-nft-contract-metadata)   | /nft/{address}/metadata    | Fetch the NFT collection metadata (name, symbol, and contract type _ERC721, ERC115, others_) of a given `address`. |
| [syncNFTContract](/web3-data-api/evm/reference/sync-nft-contract)                  | /nft/{address}/sync        | Manually sync to index an unindexed NFT collection with a given `address`.                                         |

### Get NFT Owners API

The [Get NFT Owners](/web3-data-api/evm/reference/get-nft-owners) API is a collection of [NFT API](https://moralis.io/api/nft/) that provides developer with fetching and verifying ownership of certain NFT or NFT collections.

This API category comprised of 2 APIs:

| API Name                                                                    | Path                             | Use Cases                                                                                                                                                                     |
| --------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getNFTOwners](/web3-data-api/evm/reference/get-nft-owners)                 | /nft/{address}/owners            | Fetch all the token holders/owners of a given NFT collection with contract `address`. This can be used to verify NFT ownership for NFT-gating application.                    |
| [getNFTTokenIdOwners](/web3-data-api/evm/reference/get-nft-token-id-owners) | /nft/{address}/{token_id}/owners | Fetch all the token holders/owners of a given specific NFT token with contract `address` and `token_id`. This can be used to verify NFT ownership for NFT-gating application. |

### Get NFT Market Data API

The [Get NFT Market Data](/web3-data-api/evm/reference/get-nft-trades) API is a collection of [NFT API](https://moralis.io/api/nft/) that provides developer with all NFT market related-data, such as NFT historical trades and price.

This API category comprised of 2 APIs:

| API Name                                                    | Path                       | Use Cases                                                                                      |
| ----------------------------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------- |
| [getNFTTrades](/web3-data-api/evm/reference/get-nft-trades) | /nft/{address}/trades      | Fetch the list of trades of an NFT with a given contract `address` on OpenSea NFT Marketplace. |
| [getNFTLowestPrice]                                         | /nft/{address}/lowestprice | Fetch the lowest price of an NFT with a given contract `address` on OpenSea NFT Marketplace.   |

### Get NFT Metadata API

The [Get NFT Metadata](/web3-data-api/evm/reference/get-nft-metadata) API is a collection of [NFT API](https://moralis.io/api/nft/) that provides developer with metadata of NFTs that would like to be indexed. This works out of the box with various types of NFTs (ERC721, ERC1155, others) and either on-chain or off-chain metadata.

This API comprised of 2 APIs:

| API Name                                                        | Path                                     | Use Cases                                                                                               |
| --------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [getNFTMetadata](/web3-data-api/evm/reference/get-nft-metadata) | /nft/{address}/{token_id}                | Fetch the metadata (either off-chain or on-chain) a specific NFT with a given `address` and `token_id`. |
| [reSyncMetadata](/web3-data-api/evm/reference/resync-metadata)  | nft/{address}/{token_id}/metadata/resync | Resync/Update NFT metadata to its latest, if it dynamically changes.                                    |

## How to get started?

To get started with [Moralis NFT API](https://moralis.io/api/nft/), there are two methods that can be used, depending on the programming language that you are using:

| Programming Languages                 | Method       |
| ------------------------------------- | ------------ |
| JavaScript/TypeScript, Python         | Moralis SDKs |
| Others (e.g. Java, C/C++, Ruby, etc.) | REST API     |

For this guide, we'll particularly use the Moralis SDK for examples.

If you would like to use other languages calling the Moralis NFT API using regular REST API call, then make sure to check the [NFT API reference pages](/web3-data-api/evm/reference/get-multiple-nfts) to get all the parameters and responses type.

### Step 1: Install the Moralis SDK

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis" python="moralis" />

### Step 2: Add to Your Code

To use the NFT API, it is very simple. All the [NFT API](https://moralis.io/api/nft/) can be called by using `Moralis.EvmApi.nft.{apiName}` where `apiName` will be replaced by the [NFT API](https://moralis.io/api/nft/) used.

In this guide, suppose you are building a simple NFT portfolio dashboard.

Let's start to use the [NFT API](https://moralis.io/api/nft/) to build these three initial features:

#### Feature #1: Fetch NFT balance of the user's wallet address

In order to fetch the NFT balance of the user's wallet address, Moralis provides you with a [getWalletNFTs](/web3-data-api/evm/reference/get-wallet-nfts) endpoint to do so.

Here you'll need two parameters: `address` and `chain`.

Once you've obtained both the `address` and `chain`, you can copy the following code and add it to your existing codebase:

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

  const address = "USER_WALLET_ADDRESS";

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
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

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
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
    "chain": "CHAIN", # e.g. "eth", "polygon", etc.
}

result = evm_api.nft.get_wallet_nfts(
    api_key=api_key,
    params=params,
)

# converting it to json because of unicode characters
print(json.dumps(result, indent=4))
```

</TabItem>
</Tabs>

Once the code is added, you will be able to obtain all the NFT that the user own in its wallet address using just a few lines of code with [Moralis NFT API](https://moralis.io/api/nft/).

#### Feature #2: Fetch Historical NFT transfers that interacted with user's wallet address

In order to fetch the historical NFT transfers that interacted the user's wallet address, Moralis provides you with a [getWalletNFTTransfers](/web3-data-api/evm/reference/get-wallet-nft-transfers) endpoint to do so.

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

  const address = "USER_WALLET_ADDRESS";

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getWalletNFTTransfers({
    address,
    chain,
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

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getWalletNFTTransfers({
    address,
    chain,
  });

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "USER_WALLET_ADDRESS",
    "chain": "CHAIN", # e.g. "eth", "polygon", etc.
}

result = evm_api.nft.get_wallet_nft_transfers(
  api_key=api_key,
  params=params,
)

print(result)
```

</TabItem>
</Tabs>

Once the code is added, you will be able to obtain the historical NFT transfers that interacted the user's wallet address using just a few lines of code with [Moralis NFT API](https://moralis.io/api/nft/).

#### Feature #3: Fetch NFT lowest price from the NFT balance

In order to fetch the NFT price from the NFT balance, Moralis provides you with a [getNFTLowestPrice] endpoint to do so.

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

  const address = "NFT_CONTRACT_ADDRESS"; // provided from `getWalletNFTs`

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getNFTLowestPrice({
    address,
    chain,
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

  const address = "NFT_CONTRACT_ADDRESS"; // provided from `getWalletNFTs`

  const chain = "CHAIN"; // e.g EvmChain.ETHEREUM, EvmChain.POLYGON

  const response = await Moralis.EvmApi.nft.getNFTLowestPrice({
    address,
    chain,
  });

  console.log(response.raw);
};

runApp();
```

</TabItem>
<TabItem value="python" label="Python">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "NFT_CONTRACT_ADDRESS", # provided from `getWalletNFTs`
    "chain": "CHAIN", # e.g. "eth", "polygon", etc.
}

result = evm_api.nft.get_nft_lowest_price(
  api_key=api_key,
  params=params,
)

print(result)
```

</TabItem>
</Tabs>

Once the code is added, you will be able to obtain the NFTs lowest price from the NFT balance using just a few lines of code with [Moralis NFT API](https://moralis.io/api/nft/).

### Step 3: Going Live!

Once you have a few lines of new code, you have successfully integrated the [Moralis NFT API](https://moralis.io/api/nft/) to your simple NFT portfolio dashboard app.

Now, it's time to push your code to production.

Before doing so, make sure that your API key is stored in a secure place. The best practice for this will be:

- Storing your API key in an environment variable (secrets) `process.env`
- Have your API called on the backend. While it is possible to call the NFT API on the fronted, it is highly discouraged as it can easily reveal your API key on the browser.

Once everything checks out, your app is good to go live with [Moralis NFT API](https://moralis.io/api/nft/)! 🚀
