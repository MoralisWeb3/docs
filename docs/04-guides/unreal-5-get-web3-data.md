---
title: "Unreal 5 Get Web3 Data"
slug: "/guides/unreal-5-get-web3-data"
description: "This tutorial shows you how to connect an **Unreal game** to a **Moralis backend**, in this case hosted on **AWS Lambda**. We will retrieve a wallet's **native balance** and its **NFTs**.\nBelow we provide a sample game to set everything up in a few minutes."
tags: [NFT API, Balance API, Demos]
---
## Introduction

This tutorial shows you how to connect an **Unreal game** to a **Moralis backend**, in this case hosted on **AWS Lambda**. We will retrieve a wallet's **native balance** and its **NFTs**.\nBelow we provide a sample game to set everything up in a few minutes.

## Prerequisites

- Complete [AWS Lambda integration](/web3-data-api/evm/integrations/aws-lambda-nodejs).
- Install [Unreal Engine 5.1 ](https://docs.unrealengine.com/5.1/en-US/installing-unreal-engine/).
- Install [VaRest plugin](https://www.unrealengine.com/marketplace/en-US/product/varest-plugin) to Unreal Engine 5.1.

## Open sample game

:::info Download sample game

Go to [GitHub](https://github.com/MoralisWeb3/demo-unreal-aws-lambda) and clone/download the repository.

:::

After downloading the project, launch Unreal Engine 5.1 and under _RECENT PROJECTS_, choose _**Browse**_:

![](/img/content/4353feb-image.webp)

Search for the **`.uproject`** file and open it:

![](/img/content/ff45723-image.webp)

The _Plugins_ window should automatically open but if not, go to the top toolbar and choose **_Edit --> Plugins_**:

![](/img/content/2e240ee-image.webp)

Search for _VaRest_, **enable the checkbox** and close the _Plugins_ window:

![](/img/content/e3e2255-image.webp)

:::info 
As stated in the [prerequisites](#prerequisites), you need to have this plugin previously installed. We will use it to call our **Moralis API endpoints** hosted in **AWS Lambda**.
:::

## Setting up

On the editor, click the blueprint icon and choose _**Open Level Blueprint**_:

![](/img/content/d39c0e4-image.webp)

This is the blueprint holding most of the logic of this sample game.

Zoom out to visualize and locate **4 important areas**:


- <a href="#introduction">Introduction</a>
- <a href="#prerequisites">Prerequisites</a>
- <a href="#open-sample-game">Open sample game</a>
- <a href="#setting-up">Setting up</a>
  
  - <a href="#manage-input">Manage input</a>
  - <a href="#construct-request-body">Construct request body</a>
  - <a href="#get-native-balance">Get Native Balance</a>
  - <a href="#get-wallet-nfts">Get Wallet NFTs</a>
  - <a href="#saving-changes">Saving changes</a>
  

- <a href="#play-the-game">Play the game</a>


![](/img/content/0d0bd99-image.webp)

### Manage input

:::info 
No need to do any action here. Just informative.
:::

Apart from enabling and disabling the player's input, here we get the `wallet address` and the `chain ID` from the text input fields when the _START_ button is clicked and we save them as variables:

![](/img/content/d81ba07-image.webp)

### Construct request body

:::info 
No need to do any action here. Just informative.
:::

What interests us in this tutorial is to know **how do we call an API endpoint**. In this case we want to call the _getNativeBalance_ and _getWalletNfts_ endpoints hosted in our [Express AWS Lambda App](/web3-data-api/evm/integrations/aws-lambda-nodejs#lambda-nodejs-express-api). These endpoints need the _address_ and the _chain_ as request body parameters so here we construct the request and we **set it as a variable**:

![](/img/content/e9fdaae-image.webp)

### Get Native Balance

Add the _getNativeBalance_ endpoint URL to the _**URL field**_. You can get it [following the instructions here](/web3-data-api/evm/integrations/aws-lambda-nodejs#testing-express-api-function):

![](/img/content/4b02975-image.webp)

### Get Wallet NFTs

Add the _getWalletNfts_ endpoint URL to the **_URL field_**. You can get it [following the instructions here](/web3-data-api/evm/integrations/aws-lambda-nodejs#testing-express-api-function):

![](/img/content/0662f30-image.webp)

### Saving changes

Click _**Compile**_ and then the _**Save icon**_: 

![](/img/content/c03b362-image.webp)

:::tip Everything is set up correctly.

:::

## Play the game

On the editor, choose **_Play_**:

![](/img/content/64b1f25-image.webp)

Enter a _wallet address_ and a _chain ID_ and choose _**START**_:

![](/img/content/98ccd15-image.webp)

:::info 
In this tutorial, we enter **`80001`** as chain ID but here you can check [all the chains that Moralis supports](/web3-data-api/evm#supported-chains).
:::

:::info 
Also make sure to enter an address that holds some NFTs to see them on the game.
:::

On the left side we can see our **NFTs** displayed and our **Native balance** on the right side:

![](/img/content/d5835b1-image.webp)

:::tip Congratulations!

You've completed the **Moralis & Unreal Engine 5** integration tutorial.

:::