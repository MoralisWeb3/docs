---
title: "Quickstart NextJS"
slug: "../quickstart-nextjs"
description: "This tutorial will teach you how to set up a NextJS dapp that can query blockchain data such as NFTs, tokens, balances, transfers, transactions, and more from any NextJS application. \n\nThis tutorial dapp works on almost any blockchain, including Ethereum, Polygon, BNB Chain, Avalanche, Cronos, and many more!"
---

## Introduction

This tutorial shows you how to create a basic NextJS dapp that uses the [@moralisweb3/next](https://www.npmjs.com/package/@moralisweb3/next) to display native balance.

You can find the repository with the final code [here](https://github.com/MoralisWeb3/demo-apps/tree/main/nextjs)

![](/img/content/b66bc70-image.webp)

## The Steps We Will Take

1. Create a NextJS (**recommend using NextJs version 12 project**)
2. Import and set up the latest @moralis/next
3. Integrate your application with Moralis services
4. Read any blockchain data from any blockchain

## Prerequisites

1. Create a [Moralis account](https://www.moralis.io)
2. Install and set up your editor of choice (we will use VSC in this tutorial)
3. Install [NodeJS](https://nodejs.org/en/download/package-manager/)

## Create a NextJS Dapp

For this part of the tutorial, we will create a dapp that displays the native balance, ERC-20 tokens, and NFTs for any address and EVM chain!🚀

1. Create a new folder for your project and open it in your editor
2. Initialize a new project:

```shell
npm init
```

Give it a name and fill in the details as you want (press `enter` to use the default options). You should now have a `package.json` file that looks something like this:

```json
{
  "name": "simple-nextjs-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

3. Install the required dependencies:

```bash npm2yarn
npm install moralis @moralisweb3/next next-auth next@12.3.4 react react-dom
```

4. Open `package.json` and add the following scripts:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

5. Create a `pages` directory at the root of your application and add the `index.jsx` file with the following content:

```javascript
function HomePage() {
  return <div>Welcome to my Next.js dApp!</div>;
}

export default HomePage;
```

:::info

NextJS is built around the concept of [pages](https://nextjs.org/docs/basic-features/pages). A page is a [React component](https://reactjs.org/docs/components-and-props.html) exported from a .js, .jsx, .ts, or .tsx file in the pages directory.

:::

## Add Moralis to Your NextJS Dapp

1. Get your `Web3 Api Key`: Log in to your [Moralis dashboard](https://admin.moralis.com/), navigate to your project’s **Settings > Secrets**, and copy the value from **Web3 API Key - Default**.

:::info Secure Your API Key - Best Practices for Cybersecurity
Protecting your API key is critical in safeguarding your sensitive account information. Adhere to these cybersecurity best practices to ensure optimal API security:

- **Restrict Access:** Only grant access to authorized users, ensuring secure user management.
- **Avoid Version Control Exposure:** Exclude the key from any version control systems to prevent unauthorized access and potential data breaches.
- **Leverage Secret Management Services:** Utilize reputable password managers or secret management services for enhanced security.
- **Prevent Public Exposure:** Do not embed the secret API key in publicly accessible web applications or forums, mitigating the risk of unauthorized access.
  :::

2. Create a `.env.local` file at the root and add a new environment variable, `MORALIS_API_KEY`; enter your API key as the value:

```text .env.local
MORALIS_API_KEY=replace_me
```

:::info

NextJS `.env.local` variables are accessible to the entire application and are never exposed to the browser. They are stored only on the server side, which makes them safe.

:::

3. After `.env.local` is added, you can start your app:

```shell
npm run dev
```

:::caution

Every time you modify the `.env.local` file, you need to restart your app.

:::

### Setup @moralisweb3/next

To use Moralis APIs in your NextJS project create a resolver file `pages/api/moralis/[...moralis].ts` with the following code:

```javascript
import { MoralisNextApi } from "@moralisweb3/next";

export default MoralisNextApi({ apiKey: process.env.MORALIS_API_KEY });
```

You can provide a configuration object to the MoralisNextApi.

### Your first @moralisweb3/next hook call and blockchain data

1. Let's fetch Evm native balance! Add `useEvmNativeBalance` hook to `pages/index.jsx`:

```javascript
import { useEvmNativeBalance } from "@moralisweb3/next";

function HomePage() {
  const address = "0x1...";
  const { data: nativeBalance } = useEvmNativeBalance({ address });
  return (
    <div>
      <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
    </div>
  );
}

export default HomePage;
```

2. Now, let's receive and use the props in our server-side Visit the [http://localhost:3000](http://localhost:3000/native) page to see the results:

![The `useEvmNativeBalance()` response](/img/content/46867dc-image.webp)
