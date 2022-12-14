---
title: "Firebase"
slug: "firebase"
description: "Moralis Streams can be used to monitor a blockchain wallet or a smart contract. This tutorial shows how you can easily plug in the Moralis Streams extension to your Firebase project and let your dapp handle blockchain events."
---
![Moralis Streams for Firebase Demo](/img/content/5cdb931-firebase-streams-demo-cover.gif)

If you're not familiar with the basics of creating a project or running the Firebase emulator, we recommend checking out the**[Your First Dapp for Firebase](/streams-api/integrations/firebase)** tutorial first. 

In this tutorial, we will use the following services:

- Firebase: [Cloud Functions](https://firebase.google.com/docs/functions), [Firestore](https://firebase.google.com/docs/firestore) and [Hosting](https://firebase.google.com/docs/hosting) (check out the [pricing](https://firebase.google.com/pricing) page)
- Google Cloud: [Secret Manager](https://cloud.google.com/secret-manager/) (check out the [pricing](https://cloud.google.com/secret-manager/pricing) page)
- Moralis Streams

## Install the Extension

To install the extension, you must execute the following command:

```
firebase ext:install moralis/moralis-streams
```



The installer will ask you about the Moralis API key during the installation.

Now you need to add 🚨  **critical security rules** 🚨 to the **Firestore** configuration (`firestore.rules`). This step is crucial because the extension adds new documents to specific collections. Moreover, these collections cannot be modified by external users.

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /moralis/{collectionType}/{collectionName}/{id} {
      allow read;
      allow write: if false;
    }
  }
}
```



Before deploying your project, be sure that you set permissions correctly. To do so, you can use Firebase's [Rules Playground](https://firebase.google.com/docs/rules/simulator). 

Go to the **Firebase Console** > **Your Project** > **Firestore Database** > **Rules** > **Edit Rules** and click on the **Rules Playground** tab.

## How Does it Work?

![](/img/content/8764004-streams-flow.png)

The extension does one thing: writes incoming data from the Moralis Streams service to your Firestore database. That's it! You don't need to do it manually.

The extension creates a single cloud function called "webhook". The URL of this function is required for the stream's configuration in the Moralis Admin Panel. Here's how to find this URL:

### Webhook URL for Emulator

Check the emulator logs by opening [`http://localhost:4000/logs`](http://localhost:4000/logs`) in your browser. The URL should have the following format:

```
http://localhost:5001/<project_id>/<location>/ext-moralis-streams-webhook
```



Now, if you don't have a public IP address, you cannot use this URL for the stream's configuration. For testing, we recommend using the [**ngrok**](https://ngrok.com/) service. It creates a public URL that forwards all HTTP requests to your local host and is free for development purposes.

### Webhook URL of Deployed Dapp

Go to **Firebase Console** > **Build** > **Functions** and find a function called `ext-moralis-streams-webhook`.  The URL should have the following format:

```
https://<location>-<project_id>.cloudfunctions.net/ext-moralis-streams-webhook
```



## Configuration

The extension doesn't require a configuration. It converts incoming data automatically to the database records. However, what the extension will write depends on the configuration of a stream in your Moralis Admin Panel. Here's how to here to configure which data you need.

The extension creates three types of a Firestore collection:

- `moralis/events/{collectionName}` for contract's events
- `moralis/txs/{collectionName}` for wallet's transactions
- `moralis/internalTxs/{collectionName}` for internal transactions

The name of a collection is automatically converted from the stream's tag. Additionally, the converter ignores special characters and removes white spaces.

| Stream Tag    | Collection Name |
| ------------- | --------------- |
| `lorem ipsum` | `LoremIpsum`    |
| `LoremIpsum`  | `Loremipsum`    |
| `lorem-ipsum` | `LoremIpsum `   |
| `X100Ω`       | `X100`          |

## Handling Streams

Handling your subscribed streams is easy. To do so, you must listen to changes in specific Firestore collections, which are updated by the extension.

### Handling Streams by Cloud Functions

For cloud functions, we need to create functions that are called when any item in the collection is changed. For that, we will use the `onWrite` trigger:

```typescript
import * as functions from 'firebase-functions';

const collectionName = 'LoremIpsum';

export const onItemWrite = functions.firestore
  .document(`moralis/txs/${collectionName}/{id}`)
  .onWrite(async (change) => {
    const transaction = change.after.data();

    if (transaction && transaction.confirmed) {
      doSomeOperation(/* ... */);
    }
  });
```



### Handling Streams on the Frontend

For the frontend dapp, we will use the `onSnapshot` method:

```javascript
const db = firebase.firestore();
const collectionName = 'LoremIpsum';

db
  .collection(`moralis/txs/${collectionName}`)
  .onSnapshot((change) => {
  	doSomeOperation(change.docs);
  });
```



The above code has one disadvantage. In the beginning, it will return all documents in the collection. To prevent that, we can filter for items older than when the application starts only:

```javascript
const now = firebase.firestore.Timestamp.now();

db
  .collection(`moralis/txs/${collectionName}`)
  .where('updatedAt', '>', now)
  .onSnapshot((change) => {
  	doSomeOperation(change.docs);
  });
```



## Demo Project

You can find the repository with the final code here: [firebase-streams-ext](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/firebase-streams-ext).