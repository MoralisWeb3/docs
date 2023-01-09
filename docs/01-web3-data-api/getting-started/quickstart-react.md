---
title: "Quickstart React"
slug: "../quickstart-react"
description: "This tutorial will teach you how to set up a React dapp that can query blockchain data such as NFTs, tokens, balances, transfers, transactions, and more from any React app."
---
## Introduction

This tutorial shows you how to create a basic React dapp and use the Moralis SDK to display on-chain balances. You'll create a balances page and an [Express.js](https://expressjs.com/) API endpoint returning native and ERC20 balances.

## The Steps We Will Take

1. Create a React app
2. Set up the Moralis SDK on the server
3. Integrate your app with Moralis 
4. Read any blockchain data from any blockchain

## Prerequisites

1. Follow the [Your First Dapp for Node.js](/web3-data-api/quickstart-nodejs) tutorial 

## Create a React Dapp

We will follow the [instructions here](https://reactjs.org/docs/create-a-new-react-app.html) for setting up a React project.

1. Create a React project:

```shell
npx create-react-app your-first-dapp-react
cd your-first-dapp-react
```



2. Install the required dependencies:

- `react-router-dom` - for setting up a route/page at `/balances`
- `axios` - to make requests to our server

```bash npm2yarn
npm install react-router-dom axios
```

We will set up the routing for our `/balances` page which we will set up later. 

3. Open `src/App.js` and add:

```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Balances from './balances';

const router = createBrowserRouter([
  {
    path: '/balances',
    element: <Balances />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```



We will now create our balances component which will make a request to our `balances` API (to be set up later), store the results in state (`useState`), and display it.

4. Inside `/src`, create a file called `balances.jsx`. Open it and add:

```
import { useEffect, useState } from 'react';

import axios from 'axios';

export default function Balances() {
  const [balances, setBalances] = useState({});

  useEffect(() => {
    axios('http://localhost:4000/balances').then(({ data }) => {
      setBalances(data);
    });
  }, []);

  return (
    <div>
      <h3>Wallet: {balances.address}</h3>
      <h3>Native Balance: {balances.nativeBalance} ETH</h3>
      <h3>Token Balances: {balances.tokenBalances}</h3>
    </div>
  );
}
```



## Set up the Server

[Follow this tutorial](/web3-data-api/quickstart-nodejs) for setting up your server. We will need a server to use the Moralis API without needing to expose our API key on the client side. We will also change the port number as our React app is already using `3000`.

1. Install `cors`:

```shell
npm install cors
```



2. Replace the contents of `index.js` with the following (make sure to add your own API key):

```javascript
const Moralis = require('moralis').default;

const express = require('express');
const cors = require('cors');

const { EvmChain } = require('@moralisweb3/common-evm-utils');

const app = express();
const port = 4000;

// allow access to React app domain
app.use(
  cors({
    origin: 'http://localhost:3000',
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



3. Run this command to start the server:

```shell
npm run start
```



4. Run `npm run start` in your React project, and visit the [`http://localhost:3000/balances`](http://localhost:3000/balances) page to see the results:

![](/img/content/f70531f-React_1.webp)