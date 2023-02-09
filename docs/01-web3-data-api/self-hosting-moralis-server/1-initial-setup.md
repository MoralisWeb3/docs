---
title: "Initial setup"
slug: "initial-setup"
description: "This guide will teach you how to initially set up your server"
---
   
This guide will teach you how to initially **set up your own server** to then **run it locally**.

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

Get your API Key from your [Moralis dashboard](https://admin.moralis.io/web3apis).

### `MASTER_KEY`

It is required for Parse Server and can be any value to your choice. **Make sure to never expose it**.

### `APPLICATION_ID`

It is required for Parse Server and can be any value to your choice.

### `DATABASE_URI`

:::info
The Parse Server needs a **database to store all the data**. In this guide we will be using **MongoDB**, as this is also being used on the Moralis-hosted servers. [See how you could also use **Postgres**](https://docs.parseplatform.org/parse-server/guide/#database).
:::

For this initial setup, you can use the [`mongodb-runner`](https://github.com/mongodb-js/runner) to **automatically create a database instance**. 

:::caution
Do not use this method in a production environment as it is only built for local development and testing.
:::

`mongodb-runner` is already included in this project, so **to start an instance run**:

```shell
yarn dev:db-start
```

By default this will start a MongoDB on  port  `27017` so set the `.env` variable to:
```shell
DATABASE_URI = 'mongodb://localhost:27017'
```

You can stop the instance with:

```shell
yarn dev:db-stop
```

:::note
Make sure to start the instance before running the server.
:::

### `REDIS_CONNECTION_STRING`

:::info
Redis is needed to utilise the **rate-limit functionality**. For this we are using the [`RedisCacheAdpater`](https://docs.parseplatform.org/parse-server/guide/#rediscacheadapter) of Parse Server.
:::


//TODO YOu should see something like this (foto amb totes les vars)

## Run the server locally

:::caution Remember
With this initial setup, the server is still **not production-ready**. Let's continue with the next step to make it so.
:::