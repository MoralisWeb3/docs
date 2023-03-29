---
title: "Live Crypto Notifications"
slug: "live-crypto-notifications"
description: "This tutorial teaches you how to use the Streams API to display live desktop notifications for any USDT transfers."
---

## Introduction

This tutorial teaches you how to use the Streams API to display live desktop notifications for any [USDT](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7) transfers.

You can find the repository with the [final code here](https://github.com/MoralisWeb3/youtube-tutorials/tree/main/DesktopNotifications).

## YouTube Tutorial

https://www.youtube.com/watch?v=QtstmvVeI18

## How to Get Started

1. Create an Express.js API
2. Create a stream using the [Streams API](/streams-api/evm)
3. Integrate your app with Moralis services

## Initial Setup

1. Create a new folder and set up a new project:

```shell
npm init -y
```

2. Install the required dependencies:

- `express` - our API to receive the webhooks
- `nodemon` - for restarting the app automatically when we make code changes
- `node-notifier` - for displaying the notifications

```shell
npm install express nodemon node-notifier
```

## Setting Up Express.js

We will set up a basic Express.js server.

1. Create an `index.js` file and add:

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening to streams`);
});
```

2. In the same file, we will set up a basic API endpoint called `/webhook`:

```javascript
app.post("/webhook", (req, res) => {
  const webhook = req.body;

  console.log(webhook);

  return res.status(200).json();
});
```

3. Open `package.json` and add this script under `scripts` to allow us to use `npm run start` to run the app:

```json
"scripts": {
  "start": "nodemon index.js",
  ...
},
```

4. Run your Express server:

```shell
npm run start
```

## Setting Up Ngrok

We will need to expose this server so it can be reached from outside our local network. We can use [ngrok](https://ngrok.com/).

1. Follow the [ngrok setup instructions here](https://ngrok.com/download).
2. Run `ngrok` on port 3000:

```shell
ngrok http 3000
```

If successful, you should see output similar to the following where an Ngrok URL is mapped to your local server:

```text
Forwarding https://***.ngrok.io -> http://localhost:3000
```

This `ngrok.io` URL is what you will use when setting up the stream to receive the webhooks.

## Setting Up A Stream

Now we will set up a stream to send webhooks to our server every time a USDT amount over 50k is transferred. You can [follow this guide](/streams-api/evm/using-webui) to get started.

1. Create a new stream and select "Create From Scratch".
2. Use these options for your stream:

- **address** =`0xdAC17F958D2ee523a2206206994597C13D831ec7`
- **description** = `USDT transfers over 50K`
- **webhook URL** = [`https://***.ngrok.io/webhook`](https://***.ngrok.io/webhook)
- **tag** = `USDT50`
- **network** = `Ethereum Mainnet`

![](/img/content/5b7b050-Notifications_1.webp)

3. Tick "Contract interactions (logs)" and "Event Emittance", and add the [USDT contract](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#code)'s ABI:

```json
[
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{ "name": "", "type": "string" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_upgradedAddress", "type": "address" }],
    "name": "deprecate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_spender", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "deprecated",
    "outputs": [{ "name": "", "type": "bool" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_evilUser", "type": "address" }],
    "name": "addBlackList",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_from", "type": "address" },
      { "name": "_to", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "transferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "upgradedAddress",
    "outputs": [{ "name": "", "type": "address" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "", "type": "address" }],
    "name": "balances",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "maximumFee",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "_totalSupply",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "_maker", "type": "address" }],
    "name": "getBlackListStatus",
    "outputs": [{ "name": "", "type": "bool" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      { "name": "", "type": "address" },
      { "name": "", "type": "address" }
    ],
    "name": "allowed",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "paused",
    "outputs": [{ "name": "", "type": "bool" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "who", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getOwner",
    "outputs": [{ "name": "", "type": "address" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{ "name": "", "type": "address" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "name": "", "type": "string" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_to", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "newBasisPoints", "type": "uint256" },
      { "name": "newMaxFee", "type": "uint256" }
    ],
    "name": "setParams",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "amount", "type": "uint256" }],
    "name": "issue",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "amount", "type": "uint256" }],
    "name": "redeem",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      { "name": "_owner", "type": "address" },
      { "name": "_spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "name": "remaining", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "basisPointsRate",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "", "type": "address" }],
    "name": "isBlackListed",
    "outputs": [{ "name": "", "type": "bool" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_clearedUser", "type": "address" }],
    "name": "removeBlackList",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_UINT",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "newOwner", "type": "address" }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_blackListedUser", "type": "address" }],
    "name": "destroyBlackFunds",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "_initialSupply", "type": "uint256" },
      { "name": "_name", "type": "string" },
      { "name": "_symbol", "type": "string" },
      { "name": "_decimals", "type": "uint256" }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }],
    "name": "Issue",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }],
    "name": "Redeem",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }],
    "name": "Deprecate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "name": "feeBasisPoints", "type": "uint256" },
      { "indexed": false, "name": "maxFee", "type": "uint256" }
    ],
    "name": "Params",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "name": "_blackListedUser", "type": "address" },
      { "indexed": false, "name": "_balance", "type": "uint256" }
    ],
    "name": "DestroyedBlackFunds",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "name": "_user", "type": "address" }],
    "name": "AddedBlackList",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "name": "_user", "type": "address" }],
    "name": "RemovedBlackList",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "owner", "type": "address" },
      { "indexed": true, "name": "spender", "type": "address" },
      { "indexed": false, "name": "value", "type": "uint256" }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "from", "type": "address" },
      { "indexed": true, "name": "to", "type": "address" },
      { "indexed": false, "name": "value", "type": "uint256" }
    ],
    "name": "Transfer",
    "type": "event"
  },
  { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" },
  { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }
]
```

4. For "Topic 0", tick "Transfer":

![](/img/content/084c74d-Notifications_2.webp)

5. Under "Advanced Options", add:

```json
[
  {
    "topic0": "Transfer(address,address,uint256)",
    "filter": { "gt": ["value", 50000000000] }
  }
]
```

6. Finally, click "Create Stream".

![](/img/content/eaa0626-Notifications_3.webp)

You should be redirected to [`https://admin.moralis.io/streams`](https://admin.moralis.io/streams). If not, check your server's terminal, you should start seeing some webhook data:

![](/img/content/bf1b009-Notifications_4.webp)

If you don't seem to be getting any webhooks, you can reduce the filter amount.

## Setting Up Notifications

Now that we are receiving webhooks, we will set up the notifications.

1. In `index.js`, add the `node-notifier` import:

```javascript
const notifier = require("node-notifier");
```

2. Inside our `/webhook` endpoint handler, add:

```javascript
for (const erc20Transfer of webhook.erc20Transfers) {
  const addrs = `${erc20Transfer.from.slice(0, 4)}...${erc20Transfer.from.slice(
    38
  )}`;
  const amount = Number(erc20Transfer.valueWithDecimals).toFixed(0);

  notifier.notify({
    title: "NEW USDT Transfer",
    message: `${addrs} just sent \n$${amount}`,
  });
}
```

Your final `index.js` should look like this:

```javascript
const express = require("express");
const notifier = require("node-notifier");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/webhook", (req, res) => {
  const webhook = req.body;

  for (const erc20Transfer of webhook.erc20Transfers) {
    const addrs = `${erc20Transfer.from.slice(
      0,
      4
    )}...${erc20Transfer.from.slice(38)}`;
    const amount = Number(erc20Transfer.valueWithDecimals).toFixed(0);

    notifier.notify({
      title: "NEW USDT Transfer",
      message: `${addrs} just sent \n$${amount}`,
    });
  }

  return res.status(200).json();
});

app.listen(port, () => {
  console.log(`Listening to streams`);
});
```

You should start receiving desktop notifications.
