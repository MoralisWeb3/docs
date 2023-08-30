---
title: "Quickstart with Node.js"
slug: "../quickstart-nodejs"
description: "Welcome to the Node.js Quickstart! Here we will walk through the process of getting your API keys, installing the SDK, and making your first API call with Node.js. "
---

Welcome to the Node.js Quickstart! Here we will walk through the process of getting your API keys, installing the SDK, and making your first API call with Node.js. 

## Prerequisites

1. [Sign up for Moralis](https://admin.moralis.io/register)
2. Install and set up your editor of choice (we will use [Visual Studio Code](https://code.visualstudio.com/) in this tutorial)
3. Install the latest version of [Node.js](https://nodejs.org/en/download/)
4. [Get Your Moralis API Key](/web3-data-api/aptos/get-your-api-key)

## Using the SDK

### Installing the SDK

Run the following command in your project directory to install the SDK via npm:

```shell showLineNumbers
npm install moralis
```

### Get Account Transactions

Now, we can get data by using the Moralis SDK. Let's use the `getAccountTransactions` function to get Account Transactions. Replace `YOUR_API_KEY` with your own [API Key](https://admin.moralis.io/web3apis) and run `node index.js`.

```javascript showLineNumbers title="index.js"
const Moralis = require("moralis").default;

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
  });

  const address =
    "0x1d8727df513fa2a8785d0834e40b34223daff1affc079574082baadb74b66ee4";

  try {
    const response = await Moralis.AptosApi.transactions.getAccountTransactions(
      {
        "network": "mainnet",
        "address": address
      }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

runApp();
```