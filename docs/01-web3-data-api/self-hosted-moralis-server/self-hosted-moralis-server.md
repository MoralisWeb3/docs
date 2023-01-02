---
title: "Moralis Parse Server Hosting Guide (Legacy)"
slug: "self-hosted-moralis-server"
---

A guide to help you setup your own self-hosted server. This will give you the same functionalities as a Moralis server, but you are in full control.

![](/img/content/53a7368-self-hosted-moralis-server-webpage-banner.jpg)

## Full Video Tutorial - hosting, integrating, migrating

https://www.youtube.com/watch?v=l2qTyc-V9cM

## If you are stuck

We want to help you to self host and are available in this [forum thread ](https://forum.moralis.io/t/self-hosting-your-moralis-server/19427/4)if you have any questions. Don't hesitate to ask!

## Why self-hosting

Migrating from the Moralis hosted server to a self-hosted server has several benefits:

- You are in completely in **full control of your backend**
- Complete in **control of your data and databases**
- You can finetune the hosting, resulting in **saving costs**
- You can include any **custom code, plugins, and packages** in your server-code (and cloud code)
- A better **developer experience**, as you can run the server locally during development

## Self hosting a parse-server

You can integrate Moralis within any backend that you want. In this guide we will guide you to setup a parse-server. This is also used to setup the hosted Moralis servers. By setting up your own parse-server you can:

- Easily migrate from a Moralis hosted server to a self-hosted server
- Keep your cloud-code
- Keep your frontend the same (as this setup will allow you to use the moralis-v1 and react-moralis packages)

:::tip
This guide will help you setting up your own parse-server, running it locally, and deploying it to production.
:::

## Features

Moralis is continuously improving, and not all functionalities are available yet for a self-hosted server. Below is a list of the supported features. The remaining features are in development and will soon be supported as well:

- [x] Authentication with an EVM chain
- [ ] Authentication with a Solana chain _(coming soon)_
- [x] Make requests to the EvmApi (Web3Api) via the server that implements rate-limiting
- [x] Make requests to the SolApi via the server that implements rate-limiting
- [x] Sync real-time and historical on-chain data to the database
- [ ] ~~Plugins~~ (deprecated, see below)

### Authentication

Authentication in this self-hosted server is using the Moralis Auth Api. This flow looks a bit different and requires some changes in the front-end (see [Connect to your client](connect-to-your-client)).

### EvmApi (WebApi) and SolApi with rate-limiting

Calling endpoints to the apis, are the same as before. `Moralis.Web3Api.<method>` will make a request to a cloud-function that handles rate-limiting. Then this cloud function will make the call to the api and return the data.

These cloud functions are automatically generated (described in [Configure your server](https://docs.moralis.io/docs/configure-your-server#generate-api-proxy-endpoints)

### Sync on-chain data to the database

Syncing data to the database on the self-hosted server is done using [`@moralisweb3/parse-server`](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/packages/parseServer) package. For example code, see [demo-parse-server-migration](https://docs.moralis.io/docs/nodejs-demo-parse-server-migration)

### Plugins (deprecated)

All Moralis plugins on the hosted Moralis servers are wrappers for external APIs. These could easily be replaced by yourself on this server. All you need is the endpoint/sdk of the plugin provider, and make requests via their api-keys (this is safe now as you have full control over your backend). See the documentation of these plugins for more information.

### Unity

[See this thread](https://forum.moralis.io/t/using-unity-sdk-with-self-hosted-server/20527) for how to make changes to the [Unity game kit](https://github.com/MoralisWeb3/unity-web3-game-kit) to make it work with a self-hosted server.

## Next steps

1. [Run parse-server locally](run-parse-server-locally)
2. [Configure your server](configure-your-server)
3. [Migrate your data](migrate-data)
4. [Connect to your client](connect-to-your-client)
5. [Deploy to production](deploy-to-production)

## References

- [Parse-server documentation](https://docs.parseplatform.org/parse-server/guide)