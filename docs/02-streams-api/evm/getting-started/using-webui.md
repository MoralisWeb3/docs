---
title: "Using the Admin Panel"
slug: "../using-webui"
description: "Learn how to create a new stream on the Admin Panel of Moralis.io. Follow the step-by-step instructions to monitor your chosen address and receive data through a webhook URL."
sidebar_position: 0
---

## Start

1. Go to [http://admin.moralis.io/streams](http://admin.moralis.io/streams).
2. Click on **Create a new Stream** button.
3. Select **Create it from Admin** following page will open.

![](/img/content/211833828-4fc302a6-5cbd-49b7-bf12-c36000a39385.webp)

Create a stream by choosing one of these options:

1. Use one of the examples to create a demo stream with real-time data streaming into the right hand terminal.
2. Use a template and enter a `Contract address`, `Wallet address`, `Token address`, or `Token Id` depending on the template to create a demo stream.
3. Input a `Contract address`, `Wallet address`, `Token address` in `Add Address to Stream` and then configure your stream.

## Use Examples to create a stream

Lets choose the `Tether` Example. Simply, click the Example and the demo stream will be created. You will see the webhook responses streaming in the right hand terminal.

![](/img/content/211837760-817138fd-d450-4228-ac90-17d4f6de62d3.webp)

## Use Templates to create a stream

Lets track transactions of a wallet.

1. Click the `Whenever a wallet recieves or sends assets` template. You will be prompted to provide a Wallet address.

![](/img/content/211844836-fbc0f879-c1f5-46d2-ab3b-b0133c8d55f5.webp)

2. Enter the wallet address you want to track. Or take a example wallet address like `0xe692869347b9b18Ef2DEED19ae1bBACE303B52B0` from [Etherscan](https://etherscan.io/address/0xe692869347b9b18ef2deed19ae1bbace303b52b0).

![](/img/content/211853455-3b253115-c6cb-4cba-8b00-e8160f107fbb.webp)

3. Click `Next` to create the stream.

![](/img/content/211845459-74a0da71-c71a-4437-9650-0c1d00bc1592.webp)

When a transaction occurs on the wallet it will appear on the right hand terminal.

4. To get the webhook sent to your backend you have to configure your stream by adding `Webhook URL`, `Description`, and `Tag`.

![](/img/content/211852410-cc64277f-67b0-4377-acab-1a91cdf5c25f.webp)

5. Then click toggle to `Prod`. You will now get webhooks sent to your URL you provided.

## Configure your own stream

1. Add `Contract address` or `Wallet address`

![](/img/content/211853205-715c1383-7df1-4498-ae1c-31814d7d37c2.webp)

2. Configure your stream to recieve webhooks to your backend by adding `Webhook URL`, `Description`, and `Tag`. Then click toggle to `Prod`.

![](/img/content/211853455-3b253115-c6cb-4cba-8b00-e8160f107fbb.webp)

3. Select the Networks you want to track.

![](/img/content/211853590-a71f84ab-ab8c-40ca-9d28-452ba64e1de6.webp)

4. Select the events you want to track by selecting from options `Contract Interaction`, `Native Transactions`, `Internal Transactions` under `Stream Options`. To read more on each options take a look at Streams options in our [documentation](/streams-api/evm/useful-streams-options).

![](/img/content/211854294-e4507fe0-6995-4bfe-a995-a0c815b3da9d.webp)

5. Select different topics to track by inputing a ABI. For example copy Tether ABI from [Etherscan](https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#code).

![](/img/content/211855440-dd652198-ffb2-4018-aac6-359899548b47.webp)

6. Now copy in the ABI into the ABI field.

![](/img/content/211855796-3fba1383-5d07-42aa-8c14-18cd61ca23c4.webp)

7. Now you can select the Topics you would want to only listen to. In this example lets choose to listen to the Transfer Topic (used to transfer the tokens from the owner of the token to some other address)

![](/img/content/211856417-1497373b-21ec-41bc-8932-08a00d246eba.webp)

8. Click on \*_Update_. Now you should start receiving data to your webhook URL as soon some transactions are done on the address.
