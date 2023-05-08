---
title: "Firebase (NodeJS)"
slug: "firebase-nodejs"
description: "This tutorial will teach you how to authenticate a user to your Firebase application with an EVM or Solana wallet. To simplify and speed up this process, we will use the \"Authenticate with Moralis Web3\" extension for Firebase."
---

This tutorial will teach you how to authenticate a user to your Firebase application with an EVM or Solana wallet. To simplify and speed up this process, we will use the \"Authenticate with Moralis Web3\" extension for Firebase.

<video controls>
  <source src="/video/4169289-moralis-auth-firebase.mp4"/>
</video>

Make sure to check out the [Firebase (NodeJS)](/web3-data-api/evm/integrations/firebase-nodejs) tutorial before starting this one, so you understand the basics of creating a project and running the Firebase emulator. 

In this tutorial, we will use the following services:

- Firebase: [Cloud Functions](https://firebase.google.com/docs/functions), [Authentication](https://firebase.google.com/docs/auth) and [Hosting](https://firebase.google.com/docs/hosting) (check the [pricing](https://firebase.google.com/pricing))
- Google Cloud: [Secret Manager](https://cloud.google.com/secret-manager/) (check the [pricing](https://cloud.google.com/secret-manager/pricing))
- Moralis: Auth API

## Install Extension

<video controls>
  <source src="/video/befc63c-firebase-cert.mp4"/>
</video>

Before we install the Moralis extension, we need to create a service account certificate. This certificate allows the extension to issue [custom tokens](https://firebase.google.com/docs/auth/admin/create-custom-tokens) to Firebase. 

You can generate the certificate in the Firebase console. Go to **Project settings** > **Service account** and click the **Generate new private key** button. Next, click the **Generate key** button.

Now you have a valid certificate, we need to convert it to extension parameters. We've created an [online converter](https://moralisweb3.github.io/firebase-extensions/service-account-converter/) to simplify this step. 

Open the converter and load your certificate. The app will return processed values which you can paste to the CLI during the extension installation.

We are now ready to run the CLI command.

```Text CLI
firebase ext:install moralis/moralis-auth
```



During the installation, the installer will ask you about the Moralis API key, a website URL, and the previously processed certificate.

After this step, you can deploy the extension or run your project in the emulator.

```Text CLI
firebase deploy --only extensions
```



## Front-End App Integration

Firstly, we must add our utils package for the extension to the front-end app. The package simplifies usage of the extension.

```Text CLI
npm install @moralisweb3/client-firebase-auth-utils
```



To initialize the package, we need to create a new instance of `MoralisAuth`. To do this, we need to call the `getMoralisAuth` function. This function requires an instance of the Firebase app, so be sure you have initialized the app correctly before you call this function. 

```typescript
import { initializeApp } from '@firebase/app';
import { getMoralisAuth } from '@moralisweb3/client-firebase-auth-utils';

export const app = initializeApp({
  // your configuration here
});

const moralisAuth = getMoralisAuth(app);
```



### Authenticate by MetaMask (EVM)

Let's authenticate using [MetaMask](https://metamask.io/)! To start, we need to add a dedicated package: `@moralisweb3/client-firebase-evm-auth`. The package internally uses the `ethers.js` library to handle communication with an EVM provider.

```Text CLI
npm install @moralisweb3/client-firebase-evm-auth
```



To authenticate a user, we need to call the below function.

```typescript
import { signInWithMoralis } from '@moralisweb3/client-firebase-evm-auth';

await signInWithMoralis(moralisAuth);
```



It's so simple!

The `signInWithMoralis` method only supports the MetaMask provider by default. If you want to use your own provider, you can pass it by the `options` argument.

```typescript
import { signInWithMoralis } from '@moralisweb3/client-firebase-evm-auth';
import { JsonRpcProvider } from '@ethersproject/providers';

const provider: JsonRpcProvider = /* ... */

await signInWithMoralis(moralisAuth, {
  provider
});
```



### Authenticate by WalletConnect (EVM)

To handle the WalletConnect provider, we need to install the `@walletconnect/web3-provider` package.

```
npm install @walletconnect/web3-provider
```



To authenticate a user, we need to call the below code.

```typescript
import { signInWithMoralis } from '@moralisweb3/client-firebase-evm-auth';
import { Web3Provider } from '@ethersproject/providers';
import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
  rpc: {
    1: 'https://your_rpc_url_here/',
    // ...
  }
});

await provider.enable();

await signInWithMoralis(moralisAuth, {
  provider: new Web3Provider(provider)
});
```



More information on how you can configure the `WalletConnectProvider` can be found [here](https://docs.walletconnect.com/quick-start/dapps/web3-provider).

### Authenticate by Phantom (Solana)

The solution for Solana is similar. To start, we need to install a dedicated package: `@moralisweb3/client-firebase-sol-auth`. The package only supports the [Phantom](https://phantom.app/) wallet by default.

```Text CLI
npm install @moralisweb3/client-firebase-sol-auth
```



To authenticate a user, we need to call the below function.

```typescript
import { signInWithMoralis } from '@moralisweb3/client-firebase-sol-auth';

await signInWithMoralis(moralisAuth);
```



That's it!

If you need to use a different provider other than Phantom, you can pass it by the `options` argument.

```typescript
import { signInWithMoralis } from '@moralisweb3/client-firebase-sol-auth';
import { JsonRpcProvider } from '@ethersproject/providers';

const provider = /* ... */

await signInWithMoralis(moralisAuth, {
  provider
});
```



## Demo Project

You can find the repository with the final code here: [firebase-auth-ext](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/firebase-auth-ext).

## Troubleshooting

#### SDK doesn't work with Next.js

We recognised a complex bug with the Firebase SDK, that occurs only for Next.js framework. You may get the below error.

```
Server Error
Error: Component auth has not been registered yet
```



To fix this bug, please apply the following workaround. You must pass own instances of the `Functions` and `Auth` classes created at your application level to the `getMoralisAuth()` method.

```typescript
const auth = getAuth(app);
const functions = getFunctions(app);

const moralisAuth = getMoralisAuth(app, {
  auth,
  functions
});
```



You can find an example [here](https://github.com/MoralisWeb3/Moralis-JS-SDK/blob/main/demos/firebase-nextjs/hosting/components/Firebase.ts).
