---
title: "Remix"
slug: "your-first-dapp-remix"
excerpt: "This tutorial will teach you how to set up a Remix dapp that can query blockchain data such as NFTs, tokens, balances, transfers, transactions, and more from any Remix app."
hidden: true
createdAt: "2022-11-27T01:25:24.283Z"
updatedAt: "2022-11-30T01:05:02.285Z"
---
## Introduction

This tutorial shows you how to create a basic Remix dapp and use the Moralis SDK to display on-chain balances. You'll create a server-side rendered page and a Remix API endpoint that both return native and ERC20 balances for an address.

## The Steps We Will Take

1. Create a Remix dapp
2. Import and set up the Moralis SDK
3. Integrate your app with Moralis
4. Read any blockchain data from any blockchain

## Prerequisites

1. Create a [Moralis account](https://www.moralis.io)
2. Install and set up an editor like [Visual Studio Code](https://code.visualstudio.com/)
3. Install [Node.js](https://nodejs.org/en/download/package-manager/)

## Create a Remix Dapp

We will follow the [instructions here](https://remix.run/docs/en/v1/tutorials/blog) for setting up a Remix project.

1. Choose `Just the basics` and `Remix
   App Server` for the setup options. For simplicity, we will choose `JavaScript` - you are free to select `TypeScript`.

```shell
npx create-remix@latest your-first-dapp-remix
"Just the basics"
"Remix App Server"
"JavaScript"
"y" to npm install
```



2. Install the required Moralis library:

```shell
npm install moralis 
```



3. Open `app/entry.server.jsx` and change the `const isbot` line to:

```javascript
const isbot = require('isbot');
```



## Add Moralis to Your Remix Dapp

1. Get your Web3 API key from the [Moralis dashboard](https://admin.moralis.io/):

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

2. Create a `.env` file at the root and add a new environment variable, `MORALIS_API_KEY`; enter your API key as the value:

```Text .env
MORALIS_API_KEY=replace_me
```



3. After `.env` is added, you can start your app and open [`http://localhost:3000`](http://localhost:3000) in your browser:

```shell
npm run dev
```



## Using the Moralis SDK

We will set up a page that will display the native balance and ERC20 token balances of an address. 



> 📘 
> 
> You can use the Moralis SDK **safely** inside `loader` as it only [runs on the server](https://remix.run/docs/en/v1/guides/data-loading) and never in the browser.



1. In `app/routes`, create a file called `balances.jsx`. Open `balances.jsx` and add:

```javascript
import { useLoaderData } from '@remix-run/react';

import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

export const loader = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

  const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

  // Promise.all() for receiving data async from two endpoints
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
};

export default function Balances() {
  const data = useLoaderData();
  return (
    <div>
      <h3>Wallet: {data.address}</h3>
      <h3>Native Balance: {data.nativeBalance} ETH</h3>
      <h3>Token Balances: {data.tokenBalances}</h3>
    </div>
  );
}
```



2. Visit the [`http://localhost:3000/balances`](http://localhost:3000/balances) page to see the results:

![](https://files.readme.io/bec98d7-Remix_-_1.png)

## Using Moralis with Remix API

You can also create an [API endpoint](https://remix.run/docs/en/v1/guides/api-routes) that uses the Moralis API. Remix combines the concepts of pages and APIs so the code is almost identical.

1. In `app/routes`, create a folder called `api`. In this folder, create a file called `balances.js`.
2. Open `balances.js` and add:

```javascript
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

export const loader = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

  const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

  // Promise.all() for receiving data async from two endpoints
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
};

```



3. To test your new API, you can open `<http://localhost:3000/api/balances`> in your browser or make a normal `fetch()` request. The response should be similar to:

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