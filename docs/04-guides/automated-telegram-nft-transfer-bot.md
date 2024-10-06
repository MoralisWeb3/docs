---
title: "Automated Blockchain Telegram Bot"
slug: "/guides/automated-blockchain-telegram-bot"
description: "This tutorial teaches you how to create an automated web3 telegram bot that listens to blockchain events and sends real-time notifications."
tags: [Streams, Demos]
---

## Introduction

This tutorial teaches you how to create an automated web3 telegram bot that listens to blockchain events and sends real-time notifications.

We will use node-telegram-bot-api, express and Moralis Streams API.

### YouTube Tutorial

https://www.youtube.com/watch?v=0Kr1523SfCw

## Project Setup

This section is split in multiple steps that you can follow. Let's dive in.

You can find the repository with the final code here: [Github](https://github.com/MoralisWeb3/youtube-tutorials/tree/main/automated-telegram-nft-transfer-bot/).

1. ### Create a folder and initiate a project using the package manager of your choice.

```bash npm2yarn
npm init -y
```

This will initiate the project and create a `package.json` file containing the following:

```json package.json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

2. ### Install the required dependencies.

```bash npm2yarn
npm install express node-telegram-bot-api dotenv nodemon
```

3. ### Create an `index.js` file containing our express endpoint.

```javascript index.js
require("dotenv").config();
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const app = express();
const port = 5001;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

app.use(express.json());

app.post("/webhook", async (req, res) => {
  const webhook = req.body;

  for (const nftTransfer of webhook.nftTransfers) {
    const fromAddress = `From address: ${nftTransfer.from.slice(
      0,
      4
    )}...${nftTransfer.from.slice(38)}`;
    const toAddress = `To address: ${nftTransfer.to.slice(
      0,
      4
    )}...${nftTransfer.to.slice(38)}`;
    const tokenItem = `Token Item: ${nftTransfer.tokenName} #${nftTransfer.tokenId}`;
    const transactionHash = `Transaction Hash: ${nftTransfer.transactionHash}`;

    const chatId = "ADD-CHAT-ID-FROM-LATER-STEPS";
    const text = `${fromAddress}, ${toAddress}, ${tokenItem}, ${transactionHash}`;

    bot.sendMessage(chatId, text);
  }

  return res.status(200).json();
});

app.listen(port, () => {
  console.log(`Listening for NFT Transfers`);
});
```

4. ### Setup an `ngrok` tunnel to our express app that will be running locally

- Install `ngrok`.

```shell Shell
npm i -g ngrok
```

- In a new terminal window run `ngrok http` to create a tunnel to our express app using the same port that we specified inside `index.js`

```shell Shell
ngrok http 5001
```

This will give us an address where out express app will be running and where we can setup webhooks for streams api.

![](/img/content/c2b72e9-Screenshot_2022-11-24_at_15.24.44.webp)

5. ### Start our express server.

Back inside `package.json` add a start script that will start our express app and reload when we make changes.

```json package.json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "ngrok": "^4.3.3",
    "node-telegram-bot-api": "^0.60.0",
    "nodemon": "^2.0.20"
  }
}
```

Run the start command.

```bash npm2yarn
npm run start
```

## Streams Setup

We will use Moralis Streams API to get real-time events and send notifications

Inside our admin panel access [streams section](https://admin.moralis.com/streams) and create a new stream.

![](/img/content/step1.webp)

Select **Create It From Admin**

![](/img/content/step2.webp)

For this example we will use the Doodles NFT smart contract, but you can use any smart contract of your choice:

- Contract Address : `0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e`
- Abi:
  ```json Abi
  [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MAX_PUBLIC_MINT",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_SUPPLY",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PRICE_PER_TOKEN",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PROVENANCE",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "name": "balanceOf",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "name": "getApproved",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isAllowListActive",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "address", "name": "operator", "type": "address" }
      ],
      "name": "isApprovedForAll",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "numberOfTokens",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint8", "name": "numberOfTokens", "type": "uint8" }
      ],
      "name": "mintAllowList",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "addr", "type": "address" }
      ],
      "name": "numAvailableToMint",
      "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "name": "ownerOf",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "n", "type": "uint256" }],
      "name": "reserve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
        { "internalType": "bytes", "name": "_data", "type": "bytes" }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "saleIsActive",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "addresses",
          "type": "address[]"
        },
        { "internalType": "uint8", "name": "numAllowedToMint", "type": "uint8" }
      ],
      "name": "setAllowList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "operator", "type": "address" },
        { "internalType": "bool", "name": "approved", "type": "bool" }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "string", "name": "baseURI_", "type": "string" }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bool", "name": "_isAllowListActive", "type": "bool" }
      ],
      "name": "setIsAllowListActive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "string", "name": "provenance", "type": "string" }
      ],
      "name": "setProvenance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bool", "name": "newState", "type": "bool" }
      ],
      "name": "setSaleState",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }
      ],
      "name": "supportsInterface",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "index", "type": "uint256" }
      ],
      "name": "tokenByIndex",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "uint256", "name": "index", "type": "uint256" }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "name": "tokenURI",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  ```

For the webhook url have to use the url provided previously by ngrok, followed by our `/webhook` endpoint from our express app

![](/img/content/Screenshot_2023-01-11_at_10.11.50.webp)

Our contract is deployed on Ethereum mainnet, so here you will select the network that your smart contract is deployed on:
And also select contract interactions.

![](/img/content/step4.webp)

Next we check Event Emittance, then we have to add the ABI and select the topic we want to stream.

![](/img/content/step5.webp)

## Telegram Bot Setup

We will now begin to setup our bot to send notifications to our telegram channel.

1. Open Telegram and start a new chat with BotFather.

![](/img/content/Screenshot_2023-01-11_at_09.49.11.webp)

2. Create e new bot by clicking the /newbot.

![](/img/content/Screenshot_2023-01-11_at_09.49.32.webp)

3. Add a name and username for your bot. Copy the access token and paste that in your `.env` file.

![](/img/content/Screenshot_2023-01-11_at_09.50.34.webp)

4. Create a new channel and add your bot as an Administrator.

![](/img/content/Screenshot_2023-01-11_at_09.52.40.webp)

5. Open up your browser and go to this endpoint `https://api.telegram.org/bot/YOUR-TELEGRAM-BOT-API-KEY/getUpdates`, but replace the sample text with the access token we previously copied.
   If you see this message:

```
{
  "ok": true,
  "result": []
}
```

It means you should shut down your server, send a message in the newly created channel, and then refresh this page and get this view instead.

```
{
  "ok": true,
  "result": [
    {
      "update_id": 596287107,
      "channel_post": {
        "message_id": 3,
        "sender_chat": {
          "id": -1001828021353,
          "title": "Doodle NFT Bot Channel",
          "type": "channel"
        },
        "chat": {
          "id": -1001828021353,
          "title": "Doodle NFT Bot Channel",
          "type": "channel"
        },
        "date": 1673428599,
        "text": "Hello"
      }
    }
  ]
}
```

6. Add the chat id from the object above into your code and then let's test our bot.

## Testing the bot

1. Run your bot by having 2 terminals opened in the `backend` folder.

In the first one run

```shell Shell
ngrok http 5001
```

In the second one run

```shell Shell
npm run start
```

2. Open up the Telegram channel we created and wait for notifications.

![](/img/content/Screenshot_2023-01-11_at_10.53.51.webp)
