---
title: "Firebase API Calls from the Frontend"
slug: "web3-firebase-api-calls-from-frontend"
excerpt: "If you want to call the Moralis API from your frontend app, don't do this directly. Please note that your Moralis API key should be secured against theft or abuse. Almost anyone can extract your key by the HTTP monitor, even if your code is obfuscated. Thus, you should keep your API key secure on the backend. This tutorial demonstrates how you can do it for Firebase."
hidden: false
createdAt: "2022-08-19T14:31:53.455Z"
updatedAt: "2022-11-14T16:50:40.522Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2815daf-firebase-proxy.gif",
        "firebase-proxy.gif",
        800
      ],
      "caption": "Firebase Proxy with IP Rate Limiting"
    }
  ]
}
[/block]

First, check out our tutorial, [Your First Dapp using Firebase](https://docs.moralis.io/docs/using-firebase), because, in this section, we won't explain the basics, such as "how to create a project", or "how to run the Firebase emulator".

Moreover, in this tutorial, we will use three Firebase services:

- [Hosting](https://firebase.google.com/docs/hosting)
- [Firestore](https://firebase.google.com/docs/firestore)
- [Cloud Functions](https://firebase.google.com/docs/functions) (only in the "Pay as you go" billing plan).

## Proxy Function

The idea is basically relatively simple; if you want to call any Moralis API endpoint from your frontend app, you should create a dedicated cloud function. This function would be something like a proxy, customized precisely to the frontend's needs. In this case, the backend app knows only the API key.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/01e806d-moralis-firebase-proxy-call.png",
        "moralis-firebase-proxy-call.png",
        2058
      ],
      "caption": "Making a Moralis API Call by Firebase Function"
    }
  ]
}
[/block]

Let's consider the below function:

```typescript functions/src/index.ts
import * as functions from 'firebase-functions';

interface GetBlockData {
  chain: string;
  blockNumberOrHash: string;
}

export const getBlock = functions.https.onCall(async (data: GetBlockData) => {
  const response = await Moralis.EvmApi.block.getBlock({
    chain: data.chain,
    blockNumberOrHash: data.blockNumberOrHash,
  });
  return response.toJSON();
});
```



This cloud function makes a call to the Moralis API and returns a result.

The code below is an example of how to call the proxy function from the frontend. As you can see, the app doesn't pass the API key to the backend:

```javascript hosting/index.html
const functions = firebase.functions();

const result = await functions.httpsCallable('getBlock')({
  chain: '0x1',
  blockNumberOrHash: '0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171',
});
```



**Important Note:** Try to keep as little of an amount as possible of input parameters. For example, the chain parameter is redundant if your product is limited to the Ethereum blockchain. Moreover, this approach will reduce a chance of an unwanted usage of your functions.

```typescript functions/src/index.ts
import {EvmChain} from '@moralisweb3/evm-utils';

interface GetBlockData {
  blockNumberOrHash: string;
}

export const getBlock = functions.https.onCall(async (data: GetBlockData) => {
  const response = await Moralis.EvmApi.block.getBlock({
    chain: EvmChain.ETHEREUM,
    blockNumberOrHash: data.blockNumberOrHash,
  });
  return response.toJSON();
});
```



The same refers to returning data. If you only require partial returned data from the API, only return what you need. This will also reduce data transfer.

```typescript functions/src/index.ts
interface GetBlockTimestampData {
  blockNumberOrHash: string;
}

export const getBlockTimestamp = functions.https.onCall(async (data: GetBlockTimestampData) => {
  const response = await Moralis.EvmApi.block.getBlock({
    chain: '0x1',
    blockNumberOrHash: data.blockNumberOrHash,
  });
  return response.result.result.timestamp.toISOString();
});
```



## Rate Limiting per Client's IP

Another method to secure your functions against abuse is **rate limiting**. This technique prevents a flood of requests ([check the DOS](https://en.wikipedia.org/wiki/Denial-of-service_attack)). That kind of attack could block access to your service and cause exorbitant fees for dependent services (such as the Moralis API).

In this tutorial, we focus on **IP rate limiting**. We implement this feature by using the [`firebase-functions-rate-limiter`](https://github.com/Jblew/firebase-functions-rate-limiter) package.

The package uses a Firebase database to store information on how often some qualifier (such as a client's IP) requests the service. We can set a limit of requests in a specific period above which the service blocks requests and returns the `Too Many Requests HTTP` error:

```ts
import {FirebaseFunctionsRateLimiter} from 'firebase-functions-rate-limiter';

const firestore = admin.firestore(app);
const limiter = FirebaseFunctionsRateLimiter.withFirestoreBackend(
  {
    name: 'rateLimiter',
    maxCalls: 10,
    periodSeconds: 5,
 },
 firestore);
```



The package supports both the **RealTime** and **Firestore** databases from Firebase. We will use Firestore.

Now we need to create a qualifier. A qualifier cannot contain dots and colons, so we need to normalize an IP string:

```ts
// 1.2.3.4 -> 1-2-3-4
function readNormalizedIp(request: functions.https.Request): string {
  return request.ip ? request.ip.replace(/\.|:/g, '-') : 'unknown';
}
```



Let's protect our function:

```typescript functions/src/index.ts
export const getBlock = functions.https.onCall(async (data: GetBlockData) => {
  const qualifier = 'ip-' + readNormalizedIp(context.rawRequest);
  limiter.rejectOnQuotaExceededOrRecordUsage(qualifier);

  // ...
  return response.toJSON();
});
```



We could finish here, but we want to simplify the limiter usage. So, let's wrap a whole limiting code into a single function:

```typescript functions/src/middlewares/IpRateLimiter.ts
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import {FirebaseFunctionsRateLimiter} from 'firebase-functions-rate-limiter';
import {CallableContext} from 'firebase-functions/v1/https';
import {OnCallHandler} from './OnCallHandler';

export type OnCallHandler<T> = (data: T, context: CallableContext) => Promise<unknown>;

export class IpRateLimiter {
  public constructor(private readonly limiter: FirebaseFunctionsRateLimiter) {}

  public readonly wrap = <T>(handler: OnCallHandler<T>) => {
    return async (data: T, context: CallableContext) => {
      const qualifier = 'ip-' + this.readNormalizedIp(context.rawRequest);

      await this.limiter.rejectOnQuotaExceededOrRecordUsage(qualifier);

      return await handler(data, context);
    };
  };

  private readNormalizedIp(request: functions.https.Request): string {
    return request.ip ? request.ip.replace(/\.|:/g, '-') : 'unknown';
  }
}

export function ipRateLimiterMiddleware(firestore: admin.firestore.Firestore) {
  const limiter = FirebaseFunctionsRateLimiter.withFirestoreBackend(
    {
      name: 'rateLimiter',
      maxCalls: 10,
      periodSeconds: 5,
    },
    firestore,
  );
  return new IpRateLimiter(limiter).wrap;
}
```



Now we can add the limiting feature to the cloud function in an easy way:

```typescript functions/src/index.ts
const ipRateLimiter = ipRateLimiterMiddleware(firestore);

export const getBlock = functions.https.onCall(ipRateLimiter(async (data: GetBlockData) => {
  const response = await Moralis.EvmApi.block.getBlock(...);
  // ...
}));
```



## Demo Project

You can find the repository with the final code here: [`firebase-proxy`](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/firebase-proxy).