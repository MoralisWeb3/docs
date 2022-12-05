---
title: "[DONT PUBLISH] Web3 Firebase API Calls from the Frontend"
slug: "dont-publish-web3-firebase-api-calls-from-the-frontend"
excerpt: "If you want to call the Moralis API from your frontend app, don't do this directly. Please note that your Moralis API key should be secured against theft or abuse. Almost anyone can extract your key by the HTTP monitor, even if your code is obfuscated. Thus, you should keep your API key secure on the backend. This tutorial demonstrates how you can do it for Firebase with the Moralis API extension."
hidden: true
createdAt: "2022-11-08T09:34:57.537Z"
updatedAt: "2022-11-08T10:06:32.396Z"
---
Since this tutorial won't explain the basics, such as creating a project or running the Firebase emulator, we recommend checking out our other tutorial if needed: **[Your First Dapp for Firebase](https://docs.moralis.io/docs/using-firebase)**.

In this tutorial, we will use the following services:

- Firebase: [Cloud Functions](https://firebase.google.com/docs/functions), [Firestore](https://firebase.google.com/docs/firestore) and [Hosting](https://firebase.google.com/docs/hosting) (check out the [pricing](https://firebase.google.com/pricing) page)
- Google Cloud: [Secret Manager](https://cloud.google.com/secret-manager/) (check out the [pricing](https://cloud.google.com/secret-manager/pricing) page)
- Moralis API

## Install the Extension

To install the extension, you must execute the following command:

```
firebase ext:install moralis/moralis-api
```



The installer during the installation will ask you about the Moralis API key and the rate limit per the client's IP.

The rate limit feature uses the Firestore to store data about a request frequency. That's why we must set appropriate rules for the Firestore to prevent reading that information by external users.

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /moralisApiRateLimiter {
      allow read: if false;
      allow write: if false;
    }
  }
}
```



## How to Call Moralis EVM API?

To start, we need to add a dedicated package: `@moralisweb3/client-firebase-evm-api` to your frontend app. 

```
npm install @moralisweb3/client-firebase-evm-api
```



Now we need to initialise the client:

```typescript
import { initializeApp } from '@firebase/app';
import { getMoralisEvmApi } from '@moralisweb3/client-firebase-evm-api';

const app = initializeApp({
  // your Firebase configuration here
});
const evmApi = getMoralisEvmApi(app);
```



Basically that's it! Now you can call any EVM API method.

```typescript
const response = await evmApi.token.getWalletTokenTransfers({
  address: '0x72fdd62fbfa2faa9a8677c58d9992068772e0f7f',
  chain: '0x1',
  limit: 10,
});
```



## How to Call Moralis Solana API?

In the Solana case the solution is similar. To start, we need to install a dedicated frontend package: `@moralisweb3/client-firebase-sol-api`.

```
npm install @moralisweb3/client-firebase-sol-api
```



And initialise the client.

```typescript
import { initializeApp } from '@firebase/app';
import { getMoralisSolApi } from '@moralisweb3/client-firebase-sol-api';

const app = initializeApp({
  // your Firebase configuration here
});
const solApi = getMoralisSolApi(app);
```



Super simple! Now you can call any Solana API method.

```typescript
const response = await solApi.account.getBalance({
  address: '5xoBq7f7CDgZwqHrDBdRWM84ExRetg4gZq93dyJtoSwp',
});
```



## Demo Project

You can find the repository with the final code here: [firebase-api-ext](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/firebase-api-ext).