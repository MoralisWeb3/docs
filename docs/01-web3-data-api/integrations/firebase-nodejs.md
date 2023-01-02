---
title: "Firebase (NodeJS)"
slug: "firebase-nodejs"
description: "Learn how to set up a Firebase dapp that can query blockchain data, such as NFTs, tokens, balances, transfers, transactions, and more, from any Firebase application. This tutorial works on almost any blockchain, including Ethereum, Polygon, BNB Chain, Avalanche, Cronos, and many more!"
---

Learn how to set up a Firebase dapp that can query blockchain data, such as NFTs, tokens, balances, transfers, transactions, and more, from any Firebase application. This tutorial works on almost any blockchain, including Ethereum, Polygon, BNB Chain, Avalanche, Cronos, and many more!

![The Result of This Tutorial](/img/content/4f09542-moralis-firebase-2.gif)

## Requirements

In this tutorial, we will use two Firebase services:

- [Hosting](https://firebase.google.com/docs/hosting)
- [Cloud Functions](https://firebase.google.com/docs/functions) (only in the "Pay as you go" billing plan)

:::info Firebase Billing Plan

To deploy the final dapp, you need the "Pay as you go" billing plan for your project. However, for learning purposes, you can use the free Firebase emulator on your machine.

:::

Before starting, please install [the Firebase CLI](https://firebase.google.com/docs/cli). The easiest way to do this is to use `npm`:

```
npm install -g firebase-tools
```



After installing the CLI, you must authenticate:

```
firebase login
```



You also need [Java](https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html) installed on your machine for the emulator.

## Create App

Check your available Firebase projects:

```shell
firebase projects:list
```



If this list is empty, you must add a new project. You can do it from [the Firebase console](https://console.firebase.google.com/). Once done, you can start the project:

```shell
firebase init
```



The CLI will ask you a few questions; however, use our suggestions.

Please select these three features:

```
? Which Firebase features do you want to set up for this directory?
◉ Hosting: Configure files for Firebase Hosting
◉ Functions
◉ Emulators
```



After this step, you can select your Firebase project:

```
? Please select an option:
❯ Use an existing project
```



The next step is to select the programming language for the backend project. Please select `TypeScript` here. Additionally, we recommend adding _ESLint_ to your project:

```
? What language would you like to use to write Cloud Functions?
❯ TypeScript 
```



You also have to option to activate the `rewrite all URLs to /index.html` feature:

```
? Configure as a single-page app (rewrite all URLs to /index.html)? Y
```



Next, you need to activate these emulators:

```
? Which Firebase emulators do you want to set up? 
◉ Functions Emulator
◉ Hosting Emulator
```



Also, select some ports for them. Default ports are fine.

Now let's try and run the emulator. Before attempting, **don't forget to build the cloud functions app**. The emulator doesn't build the dapp independently.

```shell
cd functions
npm install # if needed
npm run build
```



You can now test your new project in the emulator:

```shell
firebase emulators:start
```



While the emulator is running, you can test your dapp on [<http://localhost:5000>](http://localhost:5000) in your browser. The _5000_ port is set by default; if you have chosen a different port, replace it with your own.

## Backend App

We will now create our first cloud function that can be called from the frontend. First, we need to install the Moralis SDK to our backend. Further, the app is located in the functions folder:

```
cd functions
npm install moralis
```



Let's initialize the Firebase app:

```typescript functions/src/index.ts
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const app = admin.initializeApp(functions.config().firebase);
```



And Moralis:

```typescript functions/src/index.ts
import Moralis from 'moralis';

Moralis.start({
  apiKey: 'your_api_key_here',
});
```



You can find your personal API key in the Moralis admin panel. Go to **Account Settings** > **Keys**. The key is available in the **Web3 Api Key** section.

Now, let's create a cloud function:

```typescript functions/src/index.ts
import {EvmChain} from '@moralisweb3/common-evm-utils';

export interface GetBalanceData {
  address: string;
}

export const getBalance = functions.https.onCall(async (data: GetBalanceData) => {
  const result = await Moralis.EvmApi.balance.getNativeBalance({
    chain: EvmChain.ETHEREUM,
    address: data.address,
  });
  return {
    balance: result.result.balance.ether,
  };
});
```



The function calls the Moralis API and receives a wallet balance for a passed wallet address from the frontend app. In our example, we check the Ethereum network; however, the Moralis API supports almost all EVM networks. If interested, go to [the SDK documentation](/web3-data-api/moralis-sdk) to check all Moralis features.

:::caution Secure Firebase Function

Keep in mind that this cloud function in the current state is **not secured** for an enormous amount of requests (check [the DOS attack](https://en.wikipedia.org/wiki/Denial-of-service_attack)). This could increase the Moralis API usage and increases your costs. There are a lot of methods to secure your dapp. Check [our demo](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/firebase-proxy) with the rate-limiting per a user's IP.

:::

## Frontend App

Now we will show how to call our function from the frontend app. Open the `hosting/index.html` file in your programming editor.

In the beginning, we need to initialize the Firebase app. You can add the `<script>` tag at the end of the `index.html` file and put the below code there:

```javascript hosting/index.html
const functions = firebase.functions();
```



We are ready to define a code that will call the cloud function:

```javascript hosting/index.html
async function getBalance() {
  const response = await functions.httpsCallable('getBalance')({
    address: '0xf977814e90da44bfa03b6295a0616a897441acec',
  });
  alert(JSON.stringify(response.data));
}
```



You can call this function whenever. For example, you can call it after the page is loaded:

```javascript hosting/index.html
window.addEventListener('load', function () {
 getBalance(); 
});
```



That's it! Now build the backend app and run the emulator to test your first Firebase dapp!

## Deploy

To deploy the app, execute the below command:

```
firebase deploy
```



If you have any problem with the CORS on production, you should probably allow unauthenticated HTTP function invocation. To allow unauthenticated invocation, you must specify this at or after deployment. You can read more about it [here](https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_http_function_invocation).

## Further Reading

- If you want to integrate Firebase authorization with Web3 authorization, check [our tutorial](/authentication-api/integrations/firebase-nodejs).