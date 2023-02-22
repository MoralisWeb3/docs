---
title: "Client connection"
sidebar_position: 4
---

:::caution Important
The completion of the [**Local Environment Setup**](/web3-data-api/self-hosting-moralis-server/local-environment-setup) is required to continue.
The completion of the [**Production Environment Setup**](/web3-data-api/self-hosting-moralis-server/production-environment-setup) is **NOT required** but it is **strongly recommended**.
:::

:::info overview
This guide will teach you how to **connect** to your **self-hosted Moralis Server** from different **client environments**. 
:::info


## React App

### Get the sample project

:::info
To speed up the connection process, we have the [`parse-server-migration-react-client`](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/parse-server-migration-react-client) project ready for you.
:::

:::note
This project uses [`react-moralis`](https://github.com/MoralisWeb3/react-moralis), which is a thin wrapper on [`Moralis-JS-SDK-v1`](https://github.com/MoralisWeb3/Moralis-JS-SDK-v1).
:::

[**Download**](https://moralisweb3.github.io/Moralis-JS-SDK/downloads/parse-server-migration-react-client.zip) it and open it with your code editor:

![](/img/content/client-1.webp)

### Installation

Open the terminal and **install dependencies** by running:

```shell
yarn install
```

### Configuration

Run the following command to get the `.env` file:

```shell
cp .env.example .env
```

![](/img/content/client-2.webp)

Set the `REACT_APP_SERVER_URL` to your **`SERVER_URL`**:

```shell
REACT_APP_SERVER_URL = 'http://localhost:1337/server'
```

:::note
Your `SERVER_URL` will be different if you're [running your Moralis Server in a hosting service](/web3-data-api/self-hosting-moralis-server/deployment).
:::

Set the `REACT_APP_APPLICATION_ID` to your **`APPLICATION_ID`**:

```shell
REACT_APP_APPLICATION_ID = 001
```

### Testing

:::tip remember
Make sure your **self-hosted Moralis Server** is running, **locally** or in a **hosting service**.
:::

Run the client locally:

```shell
yarn start
```

Now you can try to ***Authenticate*** and for example ***getBlock*** data:

![](/img/content/client-3.webp)

## Unity client