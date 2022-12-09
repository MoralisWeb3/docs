---
title: "Nuxt"
slug: "your-first-dapp-nuxt"
excerpt: "This tutorial will teach you how to set up a Nuxt (Vue) dapp that can query blockchain data such as NFTs, tokens, balances, transfers, transactions, and more from any Nuxt app."
hidden: true
createdAt: "2022-11-21T21:25:39.527Z"
updatedAt: "2022-11-30T01:05:23.072Z"
---
## Introduction

This tutorial shows you how to create a basic Nuxt (Vue) dapp and use the Moralis SDK to display on-chain balances. You'll create a server-side rendered page and an API endpoint that both return native and ERC20 balances for an address.

## The Steps We Will Take

1. Create a Nuxt dapp
2. Import and set up the Moralis SDK
3. Integrate your app with Moralis
4. Read any blockchain data from any blockchain

## Prerequisites

1. Create a [Moralis account](https://www.moralis.io)
2. Install and set up an editor like [Visual Studio Code](https://code.visualstudio.com/)
3. Install [Node.js](https://nodejs.org/en/download/package-manager/)

## Create a Nuxt Dapp

1. We will follow the [instructions here](https://nuxt.com/docs/getting-started/installation#new-project) for setting up a Nuxt project:

```shell npm
npx nuxi init your-first-dapp-nuxt
cd your-first-dapp-nuxt
npm install 
```
```shell yarn
npx nuxi init your-first-dapp-nuxt
cd your-first-dapp-nuxt
yarn install 
```
```shell pnpm
npx nuxi init your-first-dapp-nuxt
cd your-first-dapp-nuxt
pnpm install 
```



2. Install the required Moralis library:

```Text npm
npm install moralis
```
```Text yarn
yarn add moralis
```
```Text pnpm
pnpm add moralis
```



3. You can start your app ([`http://localhost:3000/`](http://localhost:3000/)) which should open in your browser:

```Text npm
npm run dev -- -o
```
```Text yarn
yarn dev -o
```
```Text pnpm
pnpm run dev -o
```



4. Open `app.vue` and replace the boilerplate component`<NuxtWelcome />` with `<NuxtPage />` to allow us to use pages as routes inside `/pages`:

```Text vue
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```



## Using Moralis SDK with Nuxt API

We will create an API endpoint to get the native balance and ERC20 token balances of an address.

1. Generate a new API endpoint called `/balances`:

```shell
npx nuxi add api balances
```



2. Get your Web3 API key from the [Moralis dashboard](https://admin.moralis.io/):

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/05df856-4n3pANatV2_KA3lpaig2g_screenshot-2022-08-08-at-150705.png",
        "4n3pANatV2_KA3lpaig2g_screenshot-2022-08-08-at-150705.png",
        2880
      ],
      "caption": "Admin Panel"
    }
  ]
}
[/block]

3. Open the newly generated file at `server/api/balances.ts` and add (make sure to add your Moralis API key):

```typescript
import MoralisSDK from 'moralis';
const Moralis = MoralisSDK.default;

import { EvmChain } from '@moralisweb3/evm-utils';

const MORALIS_API_KEY = 'replace_me';
const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

export default defineEventHandler(async (event) => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  const [nativeBalance, tokenBalances] = await Promise.all([
    Moralis.EvmApi.balance.getNativeBalance({
      chain: EvmChain.ETHEREUM,
      address,
    }),
    Moralis.EvmApi.token.getWalletTokenBalances({
      chain: EvmChain.ETHEREUM,
      address,
    }),
  ]);

  return {
    address,
    nativeBalance: nativeBalance.result.balance.ether,
    tokenBalances: tokenBalances.result.map((token) => token.display()),
  };
});
```



4. To test your new API, you can open [`http://localhost:3000/api/balances`](http://localhost:3000/api/balances) in your browser or make a normal `fetch()` request. The output should be similar to:

```json
{
   "address":"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
   "nativeBalance":"0.010201",
   "tokenBalances":[
      "101715701.444169451516503179 APE",
      "0.085 WETH"
   ]
}
```



## Setting Up /balances Page

We will now set up a page to use this API endpoint to display this data.

1. Generate a new page called `/pages`:

```shell
npx nuxi add page balances
```



2. Open the newly generated file at `pages/balances.vue` and add:

```typescript
<script lang="ts" setup>
const { data } = await useFetch('/api/balances');
</script>

<template>
  <h3>Wallet: {{ data.address }}</h3>
  <h3>Native Balance: {{ data.nativeBalance }} ETH</h3>
  <h3>Token Balances: {{ data.tokenBalances }}</h3>
</template>
```



3. Visit the [`http://localhost:3000/balances`](http://localhost:3000/balances) page to see the results:

![](https://files.readme.io/dabb160-Vue_1.png)