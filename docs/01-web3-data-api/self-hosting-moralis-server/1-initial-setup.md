---
title: "Initial setup"
slug: "initial-setup"
description: "This guide will teach you how to initially set up your server"
---
   
This guide will teach you how to initially set up your own server.

:::info
Moralis Server is an extension of [Parse Server](https://github.com/parse-community/parse-server).
:::

## Prerequisites

- Have **Node.js** installed. Make sure the version you installed is [compatible with Parse Server](https://github.com/parse-community/parse-server#compatibility). Run `node --version` to check it. In most use-cases we recommend [`v16`](https://nodejs.org/en/blog/release/v16.14.2/).
- Have a package manager installed like `yarn` or `npm`. In this guide we will be using `yarn`.

## Get the sample project

To speed up the migration process, we have the [parse-server-migration](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/parse-server-migration) project ready for you.

:::note
This project includes all the supported features, and will be updated once we release a new feature.
:::

[**Download**](https://moralisweb3.github.io/Moralis-JS-SDK/downloads/parse-server-migration.zip) it and open it with your code editor:

![](/img/content/self-hosting-1.webp)

## Install dependencies

Open the terminal and run:

```shell
yarn install
```

## Fill environment variables

To get the `.env` file, run:

```shell
cp .env.example .env
```

You will see something like this:

![](/img/content/self-hosting-2.webp)

Next, we will go through the variables that you need to **fill/modify for this initial setup**.

### `MORALIS_API_KEY`

### `MASTER_KEY`

### `APPLICATION_ID`

### `DATABASE_URI`

### `REDIS_CONNECTION_STRING`

