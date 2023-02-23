---
title: "FAQ"
slug: "faq"
---

Find all the most frequently asked questions generally about Moralis.

## What is Moralis V2?

Moralis v2 is an enterprise-grade Web3 API solution that provides cross-chain solutions for developers building dapps. Moralis v2 offers several features for different purposes:

- [EVM API](/web3-data-api/evm)

Fetching NFT, token, and other on-chain related data from multiple EVM chains.

- Auth API

Verifying signed message for authenticating EVM and Solana wallets to dapps.

- [Streams API](/streams-api/evm)

Streaming real-time blockchain events data into your backend via webhooks.

- [Solana API](/web3-data-api/solana)

Fetching NFT, token, and other on-chain related data from the Solana network.

## How Does Moralis V2 Differ to Moralis V1?

Moralis v2 is backend-focused, providing Web3 developers powerful Web3 APIs that can be added to any tech stack to build their dapps. If you are building with NodeJS, Python, or C#, we have SDKs available for you to integrate easily with Moralis' enterprise-grade Web3 APIs.

Moralis v1 is client-focused and provides full-stack prototyping solutions for Web3 developers to build dapps quickly. Our SDKs are client-oriented, comprising of:

- [Vanilla JS SDK](https://github.com/MoralisWeb3/Moralis-JS-SDK/releases/tag/v0.0.184)
- [React Moralis SDK](https://github.com/MoralisWeb3/react-moralis)
- [Unity SDK](https://github.com/MoralisWeb3/unity-web3-game-kit)

It is important to note that Moralis v1 has been deprecated and many of the features are now no longer available. If you'd like to use Moralis v1 in your development, [self-host your Moralis server](https://docs.moralis.io/docs/self-hosted-moralis-server) as the server feature is going to be deprecated in the future.

## How to Build Web Application or PWA with Moralis?

To build a web dapp or PWA with Moralis, you must first set up your backend in any language that you prefer. This could be:

- [Express](https://expressjs.com/)
- [NestJS](https://nestjs.com/)
- [Django (Python)](https://www.djangoproject.com/)
- [.NET Framework](https://dotnet.microsoft.com/en-us/)
- [Spring Framework](https://spring.io/)
- etc.

Once you set up your backend, integrate Moralis APIs to your backend by either installing the Moralis SDK (if available) or calling it through a REST API. After that, simply set up your frontend and call your backend from the frontend. Your frontend could be any web or PWA framework:

- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Flutter](https://flutter.dev/)
- [Angular](https://angular.io/)
- [Vue](https://vuejs.org/)
- [Svelte](https://svelte.dev/)
- etc.

## How to Build Mobile Applications with Moralis?

To build a mobile dapp with Moralis, you must first set up your backend in any language that you prefer. This could be:

- [Express](https://expressjs.com/)
- [NestJS](https://nestjs.com/)
- [Django (Python)](https://www.djangoproject.com/)
- [.NET Framework](https://dotnet.microsoft.com/en-us/)
- [Spring Framework](https://spring.io/)
- etc.

Once you set up your backend, integrate Moralis APIs to your backend by either installing the Moralis SDK (if available) or calling it through a REST API. After that, simply set up your frontend and call your backend from the frontend. Your frontend could be any mobile framework:

- [Android](https://www.android.com/)
- [iOS](https://developer.apple.com/tutorials/app-dev-training)
- [React Native](https://reactnative.dev/)
- [Flutter](https://flutter.dev/)
- [Xamarin](https://dotnet.microsoft.com/en-us/apps/xamarin)
- etc.

## Which Languages or Frameworks are Supported by Moralis?

Moralis is built to be language and framework agnostic, meaning that you can integrate Moralis into any tech stack you would like to build with.

For languages that our SDKs support, we highly recommend you use them to integrate with Moralis faster. We have the SDK in the following languages:

- [NodeJS](https://github.com/MoralisWeb3/Moralis-JS-SDK)
- [Python](https://github.com/MoralisWeb3/Moralis-Python-SDK)
- [C#](https://github.com/MoralisWeb3/web3-dotnet-sdk)

## Is there a list of things to check before going live (production)?

Before going into Production (Live), we highly recommend our users to reach out to us a few weeks before, so that there is enough time for us to assess your project needs and have the right plans to ensure a smooth operation when their project is live.

Below is a checklist of things to consider before going live:

- Ensure you're familiar with the weightings of all your API calls (weightings)
- Ensure you've calculated your estimates by considering the number of chains you need to call
- To avoid rate limits, build a service for error handling and retrying failed requests
- Spread out your calls to avoid rate limiting
- Parallel calls using different from_block and to_block ranges can help improve request speeds
- Prepare your rate limit for production - How do I upgrade my plan? (Increase Rate Limits)
- Please email us at success@moralis.io to get a custom rate limit above the Pro and Business plan.

## Check your request usage

Your current request usage statistics can be found under "Account>Usage".

- Click on your email address at the bottom left corner and then on "Account".

![](/img/content/0a77de9-image.webp)

- Click on "Usage" on the top tab

![](/img/content/ee7cadd-image.webp)

Once on this page, you will be able to see the following data:

1 - Total number of requests available per month for your chosen plan.  
2 - Number of requests allowed per second (known as "Rate Limit")  
3 - Number of Web3API requests for the specified period.  
4 - Both the number of requests combined

If after reviewing your usage statistics you feel that you need a higher rate limit than the Free & Pro plan provides you with, please let us know, and we can introduce you to higher rate limits as being Enterprise API plans.

## Where is my Moralis activation link?

Once you have signed up at <https://moralis.io/> you should receive a confirmation email within 5 minutes containing an activation link

![](/img/content/7275f83-image.webp)

f it has been more than 5 minutes and you have not received an activation email please refer to the following articles:

- [I didn't receive a confirmation email - Gmail tab sorting issues](https://moralis.zendesk.com/hc/en-us/articles/4653639419154)
- [Why didn't I receive the Email or a Report?!?](https://moralis.zendesk.com/hc/en-us/articles/4653639419154)

## How to Get Support?

To get support, go to Moralis' [Discord](https://moralis.io/joindiscord) channel or [forum](https://forum.moralis.io) and ask your questions there. Our community engineers will be around 24/7 to answer all questions related to Moralis.
