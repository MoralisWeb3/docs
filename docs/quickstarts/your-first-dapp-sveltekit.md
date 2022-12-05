---
title: "SvelteKit"
slug: "your-first-dapp-sveltekit"
excerpt: "This tutorial will teach you how to set up a SvelteKit dapp that can query blockchain data such as NFTs, tokens, balances, transfers, transactions, and more from any SvelteKit app."
hidden: true
createdAt: "2022-11-19T21:53:17.629Z"
updatedAt: "2022-11-30T01:05:15.486Z"
---
## Introduction

This tutorial shows you how to create a basic SvelteKit dapp and use the Moralis SDK to display on-chain balances. You'll create a server-side rendered page and a SvelteKit API endpoint that both return native and ERC20 balances for an address.

## The Steps We Will Take

1. Create a SvelteKit dapp
2. Import and set up the Moralis SDK
3. Integrate your app with Moralis
4. Read any blockchain data from any blockchain

## Prerequisites

1. Create a [Moralis account](https://www.moralis.io)
2. Install and set up an editor like [Visual Studio Code](https://code.visualstudio.com/)
3. Install [Node.js](https://nodejs.org/en/download/package-manager/)

## Create a SvelteKit Dapp

We will follow the [instructions here](https://kit.svelte.dev/docs/creating-a-project) for setting up a SvelteKit project.

1. Choose `Skeleton project` from the list of template options. For this tutorial, we will select `Type-checked JavaScript` and `yes` for ESLint/Prettier/Playwright:

```shell
npm create svelte@latest your-first-dapp-sveltekit
cd your-first-dapp-sveltekit
npm install
```



3. Install the required Moralis library:

```shell
npm install moralis
```



## Add Moralis to Your SvelteKit Dapp

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



3. After `.env` is added, you can start your app which should open in your browser:

```shell
npm run dev -- --open
```



## Using the Moralis SDK

We will set up a page that will display the native balance and ERC20 token balances of an address.

1. In `src/routes`, create a folder called `balances`. In this folder, create two files called `+page.server.js` and `+page.svelte`.
2. Open `src/routes/balances/+page.server.js`. Add our required imports:

```javascript
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

import { MORALIS_API_KEY } from '$env/static/private';
```



> 📘 
> 
> You can use the Moralis SDK **safely** inside `+page.server.js` as it is a [server-only module](https://kit.svelte.dev/docs/server-only-modules).. `\+page.server.js`'s load function only runs on the server and never in the browser. When you request a page, SvelteKit will load this data from the server.

3. Add the following code to create our `load` function that will use the Moralis API on the server:

```javascript
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	await Moralis.start({
		apiKey: MORALIS_API_KEY
	});

	const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

	// Promise.all() for receiving data async from two endpoints
	const [nativeBalance, tokenBalances] = await Promise.all([
		Moralis.EvmApi.balance.getNativeBalance({
			chain: EvmChain.ETHEREUM,
			address
		}),
		Moralis.EvmApi.token.getWalletTokenBalances({
			chain: EvmChain.ETHEREUM,
			address
		})
	]);

	return {
		address,
		nativeBalance: nativeBalance.result.balance.ether,
		tokenBalances: tokenBalances.result.map((token) => token.display())
	};
}
```



4. Open `src/routes/balances/+page.svelte`. Add the following:

```javascript
<script>
  /** @type {import('./$types').PageData} */
  export let data; // The object we returned in `+page.server.js` is available as `data`.
</script>

<h3>Wallet: { data.address }</h3>
<h3>Native Balance: { data.nativeBalance } ETH</h3>
<h3>Token Balances: { data.tokenBalances }</h3>

// we will not add required types for PageData for simplicity
```



5. Visit the [`http://127.0.0.1:5173/balances`](http://127.0.0.1:5173/balances) page to see the results:

![](https://files.readme.io/9ae5266-Your_First_Dapp_SvelteKit_2.png)

## Using Moralis with SvelteKit API

You can also create an API endpoint that uses the Moralis API.

1. In `src/routes`, create a folder called `api`. In this folder, create another folder called `balances`. In this folder, create a file called `+server.js`.
2. Open `src/routes/api/balances/+server.js`. Add the required imports:

```javascript
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

import { MORALIS_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
```



> 📘 
> 
> The Moralis SDK can be used **safely** in `+server.js` as it is a [server-only module](https://kit.svelte.dev/docs/server-only-modules) (similar to `+page.server.js`).

3. Add the following code to set up the GET endpoint to retrieve the same data in our `+page.server.js`.

```javascript
/** @type {import('./$types').RequestHandler} */
export async function GET() {
	await Moralis.start({
		apiKey: MORALIS_API_KEY
	});

	const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

	// Promise.all() for receiving data async from two endpoints
	const [nativeBalance, tokenBalances] = await Promise.all([
		Moralis.EvmApi.balance.getNativeBalance({
			chain: EvmChain.ETHEREUM,
			address
		}),
		Moralis.EvmApi.token.getWalletTokenBalances({
			chain: EvmChain.ETHEREUM,
			address
		})
	]);

	return json({
		address,
		nativeBalance: nativeBalance.result.balance.ether,
		tokenBalances: tokenBalances.result.map((token) => token.display())
	});
}

```



4. To test your new API, you can open `<http://localhost:4200/api/balances`> in your browser or make a normal `fetch()` request. The output should be similar to:

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