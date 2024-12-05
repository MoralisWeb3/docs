---
title: "Wallet API"
sidebar_label: "Wallet API"
slug: "../wallet-api"
sidebar_class_name: "sidebar-balance-api"
sidebar_position: 1
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

Select what you want to achieve:

- [Get Native Balance](#get-native-balance)
- [Get Token Balances](#get-token-balances)
- [Get Portfolio](#get-portfolio)
- [Get Wallet Token Swaps](#get-wallet-token-swaps)
- [Get Wallet NFTs](#get-wallet-nfts)

### Get Native Balance

| No. | Method    | Description                  | API Reference                                                       | URL                                                                                                                                        |
| --- | --------- | ---------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `balance` | Get native balance by wallet | [Method Documentation](/web3-data-api/solana/reference/sol-balance) | [https://solana-gateway.moralis.io/account/:network/:address/balance](https://solana-gateway.moralis.io/account/:network/:address/balance) |

### Get Token Balances

| No. | Method   | Description                 | API Reference                                                   | URL                                                                                                                                      |
| --- | -------- | --------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | `getSPL` | Get token balance by wallet | [Method Documentation](/web3-data-api/solana/reference/get-spl) | [https://solana-gateway.moralis.io/account/:network/:address/tokens](https://solana-gateway.moralis.io/account/:network/:address/tokens) |

### Get Portfolio

| No. | Method         | Description             | API Reference                                                             | URL                                                                                                                                            |
| --- | -------------- | ----------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | `getPortfolio` | Get portfolio by wallet | [Method Documentation](/web3-data-api/solana/reference/get-sol-portfolio) | [https://solana-gateway.moralis.io/account/:network/:address/portfolio](https://solana-gateway.moralis.io/account/:network/:address/portfolio) |

### Get Wallet Token Swaps

| No. | Method                    | Description                       | API Reference                                                                       | URL                                                                                                                                                |
| --- | ------------------------- | --------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4   | `getSwapsByWalletAddress` | Get token swaps by wallet address | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-wallet-address) | [https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps](https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps) |

### Get Wallet NFTs

| No. | Method    | Description        | API Reference                                                        | URL                                                                                                                                |
| --- | --------- | ------------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 5   | `getNFTs` | Get NFTs by wallet | [Method Documentation](/web3-data-api/solana/reference/get-sol-nfts) | [https://solana-gateway.moralis.io/account/:network/:address/nft](https://solana-gateway.moralis.io/account/:network/:address/nft) |
