---
title: "Run parse-server locally"
slug: "run-parse-server-locally"
---
## Prerequisites

Before getting started, you need to make sure to:

- Have NodeJs installed. Make sure to run a compatible version. Run `node --version` to see your version and check if it is a  [supported version by parse-server](https://github.com/parse-community/parse-server#compatibility). In most use-cases we recommend v16.
- Have a package manager installed like `yarn` or `npm`. In this guide and demo project we will be using yarn.

## Setup your project

First, you need to copy the [`migration-demo-parse-server`](https://docs.moralis.io/docs/nodejs-demo-parse-server-migration) project.

- [See on Github](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/parse-server-migration): 
- [Download](https://moralisweb3.github.io/Moralis-JS-SDK/downloads/parse-server-migration.zip)

This demo will include all the supported features, and will be updated once we release new feature.

Next, install the dependencies via:

```shell
yarn install
```

Then copy the `.env.example` file to `.env` and fill in the values

```shell
cp .env.example .env
```

- `MORALIS_API_KEY` is the api key, that can be found in your Moralis dashboard (under account settings)
- `DATABASE_URI` and `REDIS_CONNECTION_STRING` are described below and depend on the way on how you setup MongoDB and Redis.
- `RATE_LIMIT_xx` variables are configurable depending on your needs to rate-limit the user.
- `CLOUD_PATH` is a reference to the code of your cloud functions. By default this will be `./build/cloud/main.js` and only exists after you run `yarn build`
- `MASTER_KEY` and `APPLICATION_ID` are required for parse-server and can be any value to your choice. Make sure to never expose the `MASTER_KEY`

> 🚧 
> 
> Make sure to never expose these values to the public. Especially the `MASTER_KEY` will give users access to the entire parse-server.

## Setup MongoDB locally

The parse-server needs a database to store all the data. In this guide we will be using MongoDB, as this is also being used on the Moralis hosted servers. But you could change it to Postgres (see <https://docs.parseplatform.org/parse-server/guide/#database>).

You have several options to run MongoDB:

- Install and run MongoDB locally (most flexible)
- Use the mongodb-runner (easiest)
- You can use a hosted mongoDB from Atlas (hosted)

### A. Install and run MongoDB locally (most flexible)

This option gives you the most flexibility, but it requires a bit more work to setup. For a complete guide on how to setup MongoDB locally, see <https://www.mongodb.com/docs/v6.0/installation/>

### B. Use the mongodb-runner (easiest)

> 🚧 
> 
> Do not use this method in your production server. This database runner is only built for local development and testing

The easiest solution is to use the `mongodb-runner` that is included in the demo project. For more information about this, see <https://github.com/mongodb-js/runner>

To start an instance, run:

```shell
yarn dev:db-start
```

To stop the runner, run:

```shell
yarn dev:db-stop
```

By default this will start a MongoDB on  port  `27017`.

Make sure to run this database when starting your app. And set the `DATABASE_URI` in your `.env` to `mongodb://localhost:27017`.

### C. Use hosted MongoDB Atlas (hosted)

You can also use a hosted MongoDB for Atlas. For some hosting providers this is the only option to integrate MongoDB. But you can also use it for local development. (just make sure that you're not using the same database in local development as you are using in production).

1. Signup for an account at <https://www.mongodb.com/atlas>
2. Create a new database
3. Get the connection string

![](/img/content/fc0ee49-Screenshot_2022-09-07_at_22.23.42.png)

![](/img/content/27497f9-Screenshot_2022-09-07_at_23.25.41.png)

![](/img/content/4ec4b40-Screenshot_2022-09-07_at_23.31.10.png)

4. Set the `DATABASE_URI` in your `.env`. Make sure to replace `<username>` and `<password>` to a user that has read and write access. This can be set in the "Database access" page.

## Setup Redis locally

Redis is needed to utilise the rate-limit functionality. For this we are using the RedisCachaAdpater of parse-server (see <https://docs.parseplatform.org/parse-server/guide/#rediscacheadapter>).

You can opt-out of this dependency if you want to setup your rate-limit in any other way.

You have several options to run Redis:

- Install and run Redis locally (most flexible)
- Use hosted Redis Enterprise Cloud (hosted)

### A. Install and run Redis locally (most flexible)

This option gives you the most flexibility, but it requires a bit more work to setup. For a complete guide on how to setup Redis locally, see <https://redis.io/docs/getting-started/>

Then before running your app, make sure to run Redis locally (see the getting-started guide on Redis on how to do this as it differs per operating system) and set the `REDIS_CONNECTION_STRING` in your `.env`. This could look something like `redis://127.0.0.1:6379`

### B. Use hosted Redis Enterprise Cloud (hosted)

You can also use a hosted Redis via Redis Enterprise Cloud. For some hosting providers this is the only option to integrate Redis. But you can also use it for local development. (just make sure that you're not using the same database in local development as you are using in production).

1. Signup for an account at <https://redis.com/redis-enterprise-cloud/overview/>
2. Create a new database
3. Setup a user with read and write access

![](/img/content/e6597fe-Screenshot_2022-09-07_at_23.55.21.png)

![](/img/content/d2522f5-Screenshot_2022-09-07_at_23.55.39.png)

![](/img/content/b27bb15-Screenshot_2022-09-07_at_23.56.31.png)

![](/img/content/9944445-Screenshot_2022-09-08_at_00.00.11.png)

   Create the user, and make sure to store the username and password somewhere safe

4. Get the connection string

![](/img/content/c06766a-Screenshot_2022-09-08_at_00.01.54.png)

![](/img/content/ad75338-Screenshot_2022-09-08_at_00.02.10.png)

5. Set the `REDIS_CONNECTION_STRING` in your `.env` with the username, password and endpoint from the previous step. The result should look like `redis://<username>:<password>@<endpoint>`

## Setup Syncs locally (optional)

To set up syncing locally, all you need is one simple step;

- Set the `USE_STREAMS` in your `.env` to true and `STREAMS_WEBHOOK_URL` with the  webhook URL of choice (`/streams-webhook` for example). This will enable the app to setup the sync middleware and expose the webhook URL which is `/streams-webhook` by default. (see [@moralisweb3/parse-server](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/packages/parseServer))

## Run your server locally

After you've finished the previous steps, you can build your app with

```shell
yarn build
```

This will compile your code to `/build`. This step is required for cloud functions to work. Alternatively you can change the path to your cloud code in `.env`.

Run your app locally with:

```shell
yarn dev
```

This will compile your app and run it locally on your specified port in your `.env` (by default this is `[<http://localhost:1337`>](<http://localhost:1337`>)

> 👍 
> 
> Now your server can be accessed on `<http://localhost:1337/server`>. To connect your frontend to this server you need to use this server url, and your specified app id from your `.env`

If you set up sync, an [ngrok](https://ngrok.com/) URL will also be created and logged. This is the URL that you should use when setting up a stream (see [streams docs](https://docs.moralis.io/docs/what-is-streams-api-1))