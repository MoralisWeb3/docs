---
title: "Web3 Firebase Authentication"
slug: "web3-firebase-authentication-old"
excerpt: "This tutorial will teach you how to integrate the Firebase Authentication with the Web3 authentication. We will use the Moralis Auth API to handle the Web3 authentication flow."
hidden: true
metadata: 
  image: 
    0: "https://files.readme.io/13e0c51-22_08_Moralis-Docs-Featured-Image.jpg"
    1: "22_08_Moralis-Docs-Featured-Image.jpg"
    2: 1920
    3: 1080
    4: "#ebf1f4"
createdAt: "2022-08-15T14:29:30.102Z"
updatedAt: "2022-09-22T10:02:45.987Z"
---
The Firebase Authentication is deeply integrated with the Firestore and the Realtime Database. Especially the permission system. We want in this tutorial, show you a way how to integrate the Web3 authentication with the Firebase, to keep all brilliant Firebase features. To simplify this tutorial we will use only JavaScript for a Firebase front-end app.

![](https://files.readme.io/10b511b-firebase-moralis-auth-2.gif "firebase-moralis-auth-2.gif")

## Requirements

In this tutorial we will use 3 Firebase services:

- [Hosting](https://firebase.google.com/docs/hosting)
- [Authentication](https://firebase.google.com/docs/auth)
- [Cloud Functions](https://firebase.google.com/docs/functions) (only in the "Pay as you go" billing plan).

> 📘 Billing Plan
> 
> To deploy the final app you need the "Pay as you go" billing plan for your project. But **for learning purposes you can work only on the Firebase emulator on your machine**.

Before start, please install the Firebase CLI.

```
npm install -g firebase-tools
```



After installing the CLI, you must authenticate.

```
firebase login
```



Also you need [Java](https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html) on your machine. The emulator requires Java.

## Create App

Check your Firebase projects.

```
firebase projects:list
```



If this list is empty, you must add a new project. You can do it from [the Firebase console](https://console.firebase.google.com/).

You can start the project.

```
firebase init
```



Please select these 3 Firebase features: 

```
? Which Firebase features do you want to set up for this directory?
◉ Hosting: Configure files for Firebase Hosting
◉ Functions
◉ Emulators
```



After this you can select your Firebase project. The next step is a choice of a programming language for the back-end project. Please select `TypeScript` here. Additionally, we recommend to add ESLint to your project.

Next, you need to activate these emulators:

```
? Which Firebase emulators do you want to set up? 
◉ Functions Emulator
◉ Hosting Emulator
```



And select some ports for them. Default ports are fine.

Now we will try to run the emulator. Before the attempt, **don't forget to build the back-end app**. The emulator doesn't build the app independently.

```
cd functions
npm run build
```



You can test your new project in the emulator now.

```
firebase emulators:start
```



## Create Service Account Certificate

Our app will create a custom token to authorize a user. To achieve this we need special permissions, that allow us to issue the token. For that we need the Service Account Certificate.

You can generate the certificate in the Firebase console. Go to **Project settings** > **Service account** and click the **Generate new private key** button. Next, click the **Generate key** button. This will generate a JSON file with the certificate. 

![](https://files.readme.io/d35a245-cert-generation.png "cert-generation.png")

## Back-end

Now we will create a back-end logic for the authentication flow. For this we will add some Firebase functions to the previously created app. You can find the back-end app in the `/functions` folder. Firstly, install the Moralis SDK.

```
npm install moralis
```



At the beginning, we need to create the Firebase app instance. Here we pass the previously generated Service Account certificate. We cannot use [fs](https://nodejs.org/api/fs.html) to load the certificate, because the Firebase doesn't support reading files from the Firebase Functions storage. We need to use the internal module loading system (`require()` for JavaScript, `import x from` for TypeScript).

```typescript functions/src/index.ts
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import {cert, ServiceAccount} from 'firebase-admin/app';
import serviceAccountCert from './serviceAccountCert.json';

const app = admin.initializeApp({
  ...functions.config().firebase,
  credential: cert(serviceAccountCert as ServiceAccount),
});
const auth = admin.auth(app);
```



TypeScript doesn't support JSON files by default. We need to add below 2 flags to the `tsconfig.json` file.

```json functions/tsconfig.json
{
  "compilerOptions": {
    // ...
    "esModuleInterop": true,
    "resolveJsonModule": true
  },
  // ...
}
```



We cannot forget to initialise the Moralis SDK too.

```typescript functions/src/index.ts
import Moralis from 'moralis';

Moralis.start({
  apiKey: 'your_api_key_here',
});
```



### Request Message Function

Now we can create a first Firebase function: `requestMessage`. This function allows us to create a message, that we will send to a user to sign it by his wallet.

```typescript functions/src/index.ts
interface RequestMessageData {
  address: string;
  chain: number;
}

export const requestMessage = functions.https.onCall(async (data: RequestMessageData) => {
  const now = new Date();
  const expirationDays = 7;
  const expiration = new Date(now.getTime() + expirationDays * 86400000);

  const response = await Moralis.Auth.requestMessage({
    chain: EvmChain.create(data.chain),
    network: 'evm',
    timeout: 15,
    domain: 'defi.finance',
    uri: 'https://defi.finance',
    statement: 'Please confirm this message',
    address: data.address,
    notBefore: now.toISOString(),
    expirationTime: expiration.toISOString(),
  });
  return response.raw;
});
```



### Issue Token Function

Now we need to create a function, that verifies a signed message by a user. If the signed message is correct, then the function issues a Firebase token. This token, we can send to the front-end app. Of course the token can be issued only for an existing user. So, if a user doesn't exist, we create a new account. We assume that, `profileId` from Moralis API is the `uid` in the Firebase, and a user's wallet address is the `displayName`. 

```typescript functions/src/index.ts
interface IssueTokenData {
  message: string;
  signature: string;
}

export const issueToken = functions.https.onCall(async (data: IssueTokenData) => {
  const response = await Moralis.Auth.verify({
    network: 'evm',
    message: data.message,
    signature: data.signature,
  });
  const uid = response.result.profileId;

  if (!await userExists(auth, uid)) {
    await auth.createUser({
      uid,
      displayName: response.result.address.checksum,
    });
  }

  const token = await auth.createCustomToken(uid);
  return {token};
});
```



The above code uses the `userExists()` method. The method checks a user's existence in the user storage.

```ts
import {FirebaseError} from '@firebase/util';

export async function userExists(auth: ReturnType<typeof admin.auth>, uid: string): Promise<boolean> {
  try {
    await auth.getUser(uid);
    return true;
  } catch (e) {
    if ((e as FirebaseError).code === 'auth/user-not-found') {
      return false;
    }
    throw e;
  }
}
```



### Guard

Now we can create a simple guard, that will protect a function against an unauthorised access.

```ts
import {CallableContext} from 'firebase-functions/v1/https';

export type OnCallHandler<T> = (data: T, context: CallableContext) => Promise<unknown>;

export function guard<T>(handler: OnCallHandler<T>) {
  return async (data: T, context: CallableContext) => {
    if (!context.auth?.uid) {
      throw new functions.https.HttpsError('permission-denied', 'You are not authorized to call this function');
    }
    return await handler(data, context);
  };
}
```



How to use it? Check the below example.

```typescript functions/src/index.ts
export const getSecretData = functions.https.onCall(guard(async () => {
  const secretValue = 'I am a secret';
  return {secretValue};
}));
```



## Front-end

Now let's start the front-end app. Earlier we've generated a front-end app by the Firebase CLI. You can find the front-end project in the `/hosting` folder. We need to add [Etherjs](https://docs.ethers.io/v5/) to our project. As we mentioned at the beginning, we want to keep this tutorial simple as possible. So we add this dependency by using a CDN.

```html hosting/index.html
<script src="https://cdn.jsdelivr.net/npm/ethers@5.6.9/dist/ethers.umd.js"></script>
```



Now we need some code, that returns basic information about a user's wallet. The below code supports only the MetaMask provider.

```javascript hosting/index.html
async function connectToMetamask() {
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

  const [accounts, chainId] = await Promise.all([
    provider.send('eth_requestAccounts', []),
    provider.send('eth_chainId', []),
  ]);

  const signer = provider.getSigner();
  return { signer, chain: chainId, address: accounts[0] };
}
```



Ok, now we have everything to authenticate a user. The authentication flow is a quite simple sequence:

- Read a basic information about a user's wallet.
- Generate a message by the back-end function to sign it by the user.
- Sign the message by the user's wallet.
- Send the signed message to the back-end function and receive a token.
- Pass the received token to the Firebase `signInWithCustomToken` method.

After this sequence a user is authenticated in Firebase by his wallet.

The example code of the authentication flow is available below.

```javascript hosting/index.html
async function authenticate() {
  const { signer, chain, address } = await connectToMetamask();

  const messageResponse = await functions.httpsCallable('requestMessage')({
    address,
    chain,
  });
  const message = messageResponse.data.message;
  const uid = messageResponse.data.profileId;

  const signature = await signer.signMessage(message);

  const tokenResponse = await functions.httpsCallable('issueToken')({
    message,
    signature,
  });
  const token = tokenResponse.data.token;

  await firebase.auth().signInWithCustomToken(token);

  // success!
}
```



Now we can call our guarded function, what we made above.

```javascript hosting/index.html
async function getSecretData() {
  const response = await functions.httpsCallable('**getSecretData**')({});
  alert(JSON.stringify(response.data));
}
```



This function will return a secret data, only for authorized users.

## Deploy

To deploy the app call the below command.

```
firebase deploy
```



If you have any problem with the CORS on the production, probably you should allow unauthenticated HTTP function invocation. To allow unauthenticated invocation you must specify this at or after deployment. [Here](https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_http_function_invocation) you can read more about it.

## Demo Project

You can find the repository with the final code here: [firebase-auth](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/firebase-auth).