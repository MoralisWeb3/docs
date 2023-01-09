---
title: "Quickstart Angular"
slug: "../quickstart-angular"
description: "This tutorial will teach you how to set up an Angular dapp that can query blockchain data such as NFTs, tokens, balances, transfers, transactions, and more from any Angular app."
---
## Introduction

This tutorial shows you how to create a basic Angular dapp and use the Moralis SDK to display on-chain balances. You'll create a balances page and an [Express.js](https://expressjs.com/) API endpoint returning native and ERC20 balances for an address.

## The Steps We Will Take

1. Create an Angular dapp
2. Set up the Moralis SDK on the server
3. Integrate your app with Moralis
4. Read any blockchain data from any blockchain

## Prerequisites

1. Follow the [Your First Dapp for Node.js](/web3-data-api/quickstart-nodejs) tutorial

## Create an Angular Dapp

We will follow the [instructions here](https://angular.io/guide/setup-local) for setting up an Angular project.

1. Install the Angular CLI:

```shell
npm install -g @angular/cli
```

2. Create a new folder for your project and open it in your editor. Create a new Angular project - select `yes` for routing and choose any stylesheet format:

```shell
ng new your-first-dapp-angular
```

3. Install the required dependency: 

- `axios` - to make requests to our server (You can also use [Angular's HTTP module](https://angular.io/guide/http)

```bash npm2yarn
npm install axios 
```

4. Open `src/app/app.component.html` and get rid of the boilerplate HTML and CSS code. Remove everything except for:

```html
<router-outlet></router-outlet>
```

5. We will generate a component or page called `/balances` for displaying the balances:

```shell
ng generate component balances
```

6. Open `src/app/app-routing.module.ts` and add this component as a route:

```typescript TypeScript
import { BalancesComponent } from './balances/balances.component';

const routes: Routes = [
  { path: 'balances', component: BalancesComponent },
];
```

7. Open `src/app/balances/balances.component.html` and replace the contents with:

```html
<div>
  <h3>Wallet: {{ address }}</h3>
  <h3>Native Balance: {{ nativeBalance }} ETH</h3>
  <h3>Token Balances: {{ tokenBalances }}</h3>
</div>
```

8. Open `src/app/balances/balances.component.ts` and add these three variables we defined above:

```typescript
export class BalancesComponent implements OnInit {
  constructor() {}

  address = '';
  nativeBalance = '';
  tokenBalances = '';

  ngOnInit(): void {}
}
```



9. Run the command `npm run start` and open <http://localhost:4200/balances> in your browser. It should look like:

![](/img/content/6b15392-Angular_Your_First_Dapp_1.webp)

We have not fetched any data yet - we will update our server code and then we will get this data from our Angular dapp.

## Set up the Server

[Follow this tutorial](/web3-data-api/quickstart-nodejs) for setting up your server. We will need a server to use the Moralis API without needing to expose our API key on the client side.

1. Replace the contents of `index.js` with the following (make sure to add your own API key):

```javascript
const Moralis = require('moralis').default;

const express = require('express');
const cors = require('cors');

const { EvmChain } = require('@moralisweb3/common-evm-utils');

const app = express();
const port = 3000;

// allow access to Angular app domain
app.use(
  cors({
    origin: 'http://localhost:4200',
    credentials: true,
  })
);

const MORALIS_API_KEY = 'replace_me';
const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

app.get('/balances', async (req, res) => {
  try {
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
    res.status(200).json({
      // formatting the output
      address,
      nativeBalance: nativeBalance.result.balance.ether,
      tokenBalances: tokenBalances.result.map((token) => token.display()),
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();

```



2. Run this command to start the server:

```shell
npm run start
```



3. Open [`http://localhost:3000/balances`](http://localhost:3000/balances) in your browser. The output should be similar to the following:

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



## Bringing It All Together

Now that we have our server set up to get the native balance and ERC20 token balances for an address, we will make a request to [`http://localhost:3000/balances`](http://localhost:3000/balances) from our Angular app so we can display it on a page.

1. Open `src/app/balances/balances.component.ts` and import `axios` at the top to make HTTP requests:

```typescript
import axios from 'axios';
```



2. Replace `ngOnInit(): void {}` with:

```typescript
async ngOnInit() {
  const { data } = await axios(`http://localhost:3000/balances`);

  this.address = data.address;
  this.nativeBalance = data.nativeBalance;
  this.tokenBalances = data.tokenBalances;
}
```



This will fetch the balances data from our server when the page is loaded and set the component variables which will be displayed. The final `balances.component.ts` should look like:

```typescript
import { Component, OnInit } from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css'],
})
export class BalancesComponent implements OnInit {
  constructor() {}

  address = '';
  nativeBalance = '';
  tokenBalances = '';

  async ngOnInit() {
    const { data } = await axios(`http://localhost:3000/balances`);

    this.address = data.address;
    this.nativeBalance = data.nativeBalance;
    this.tokenBalances = data.tokenBalances;
  }
}

```



3. Reload the [`http://localhost:4200/balances`](http://localhost:4200/balances) page to see the results:

![](/img/content/8c0d856-Angular_Your_First_Dapp_2.webp)