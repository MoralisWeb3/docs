---
title: "Web3 Unity Multiplayer Playground"
slug: "web3-unity-multiplayer-playground"
description: "Learn how to create a Web3 Multiplayer Playground using Moralis, NodeJS, and Unity."
---
## Intro

This Moralis Unity Sample Project demonstrates Web3 functionality; authentication, send assets, fetch assets, & interacting with Solidity smartcontracts (read/write) on the Polygon Mumbai blockchain.

| Intro | 4-Player Multiplayer |
| :--- | :--- |
| <img width="400" src="/img/content/458e9db-image.png" /> | <img width="400" src="/img/content/cb14e78-Screenshot_013.png" /> |

> Enter the multiplayer playground - an shared environment to move, trade currency, and trade NFTs

## Video

https://www.youtube.com/watch?v=9f_SG3Fib5E


> Unity Multiplayer enables 2 or more players to share online experiences. Web3 is an evolution of the internet running on the blockchain. Together, we'll combine technologies to create a Web3 Unity Multiplayer Playground game with Polygon Mumbai.

## Overview

| Technology                            | Version     |
| :------------------------------------ | :---------- |
| Unity                                 | `>=` 2021.x |
| Unity Multiplayer (Lobby, NGO, Relay) | `>=` 1.0.x  |
| Moralis SDK (NodeJS)                  | `>=`2.x     |
| NodeJS                                | `>=`16.9.0  |
| Microsoft PlayFab (With Azure)        | `>=`220907  |

## The Steps We Will Take

1. Setup Unity
2. Setup Backend

### Setup Unity

1. Download the [sample project](https://github.com/MoralisWeb3/web3-unity-sdk-sample-game-wump). 
2. Follow the [README](https://github.com/MoralisWeb3/web3-unity-sdk-sample-game-wump/blob/main/README.md) instructions.

### Setup Backend

1. Complete the [Using Unity & PlayFab (NodeJS)](/docs/using-unity-playfab) tutorial. Exclude **.NET** steps.
2. When adding Azure's Application Settings and PlayFab's Functions, use **only** the updated table information below.

| Azure - Function App - Application Settings | Value          |
| :------------------------------------------ | :------------- |
| `PLAYFAB_DEV_SECRET_KEY`                    | (See Tutorial) |
| `PLAYFAB_TITLE_ID`                          | (See Tutorial) |
| `MORALIS_API_KEY`                           | (See Tutorial) |

| PlayFab - Cloud Script - Functions | Value               |
| :--------------------------------- | :------------------ |
| `ChallengeRequest`                 | (Copy From VS Code) |
| `ChallengeVerify`                  | (Copy From VS Code) |
| `GetNftsForContract`               | (Copy From VS Code) |
| `RunContractFunction`              | (Copy From VS Code) |