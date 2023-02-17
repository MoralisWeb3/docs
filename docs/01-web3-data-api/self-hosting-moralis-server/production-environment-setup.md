---
title: "Production Environment Setup"
slug: "production-environment-setup"
sidebar_position: 2
---

In this guide we will upgrade the **database** and **rate-limiting** features to **hosted solutions** so we have a **production-ready server**.

:::info
In order to host our server at some hosting providers, you **must upgrade to the following configuration**.
:::

## Use MongoDB Atlas

:::note
This option can be used for local development as well.
:::

### Sign Up

[Create a new account](https://account.mongodb.com/account/register). You'll be automatically logged in afterwards.

### Create a database

Just after signing up, MongoDB offers you to create and deploy a database. **Choose your plan** and then ***Create***:

![](/img/content/database-1.webp)

### Configuration

After database creation, follow the **Security Quickstart** to set up network security controls.

Choose ***Username and Password*** and then ***Create User***:

![](/img/content/database-2.webp)

:::note
We will need the **username** and the **password** later.
:::

Now choose your environment. In this tutorial we choose ***My Local Environment*** but choose ***Cloud Environment*** for a more advanced setup. 

Both options will automatically add your **current IP Address** to the *Access List*. Add any other desired IP Address here and then choose ***Finish and Close***:

![](/img/content/database-3.webp)

:::tip
You can configurate this further under [*Network Access*](https://cloud.mongodb.com/v2/63ef51b2ca3fd8321c7a3817#/security/network/accessList).
:::

### Connection

Find your database cluster under [*Database Deployments*](https://cloud.mongodb.com/v2/63ef51b2ca3fd8321c7a3817#/clusters) and choose ***Connect***:

![](/img/content/database-4.webp)

Choose ***Connect your application***:

![](/img/content/database-5.webp)

Copy the connection string:

![](/img/content/database-6.webp)

Now set the `DATABASE_URL` in your `.env` with that string:

```shell
DATABASE_URL: 'mongodb+srv://<username>:<password>@cluster0.vok8pet.mongodb.net/?retryWrites=true&w=majority'
```

:::caution
Make sure to replace `<username>` and `<password>` with the created user's credentials. Also make sure that the user has read and write privileges. By default it will, but all this can be configured under [*Database Access*](https://cloud.mongodb.com/v2/63ef51b2ca3fd8321c7a3817#/security/database/users).
:::


## Use Redis Enterprise Cloud

:::note
This option can be used for local development as well.
:::

1. Signup for an account at <https://redis.com/redis-enterprise-cloud/overview/>
2. Create a new database
3. Setup a user with read and write access

![](/img/content/e6597fe-Screenshot_2022-09-07_at_23.55.21.webp)

![](/img/content/d2522f5-Screenshot_2022-09-07_at_23.55.39.webp)

![](/img/content/b27bb15-Screenshot_2022-09-07_at_23.56.31.webp)

![](/img/content/9944445-Screenshot_2022-09-08_at_00.00.11.webp)

   Create the user, and make sure to store the username and password somewhere safe

4. Get the connection string

![](/img/content/c06766a-Screenshot_2022-09-08_at_00.01.54.webp)

![](/img/content/ad75338-Screenshot_2022-09-08_at_00.02.10.webp)

5. Set the `REDIS_CONNECTION_STRING` in your `.env` with the username, password and endpoint from the previous step. The result should look like `redis://<username>:<password>@<endpoint>`