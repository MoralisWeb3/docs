---
title: "Wallet API"
description: "Boasting an array of features, exceptional flexibility, and unparalleled scalability, our Wallet API is the definitive solution for integrating wallet functionalities into your Web3 dapps."
sidebar_position: 3
sidebar_class_name: "sidebar-wallet-api"
---

![image](https://github.com/MoralisWeb3/docs/assets/13417464/15f7b5ff-cc8e-44ca-b745-86db96576349)



## What is the Wallet API?

Boasting an array of features, exceptional flexibility, and unparalleled scalability, our Wallet API is the definitive solution for integrating wallet functionalities into your Web3 dapps.

The Wallet API provides out-of-the-box functionality for the most popular features when building or adding wallet functionality to your dapp, including:

- [Fetch native balances for a wallet](/web3-data-api/evm/reference/get-wallet-native-balance): Access both current and historical native balances for any wallet.
- [Fetch all NFTs in a wallet](/web3-data-api/evm/reference/get-nfts-by-wallet): Fetch all NFTs and collections held by a wallet, along with their enriched metadata and optimized images.
- [Lookup ERC20 token balances in a wallet](/web3-data-api/evm/reference/get-token-balances-by-wallet): Lookup current ERC20 holdings including their real-time prices, as well as full historical holdings for any block number.
- [Fetch all transactions for a wallet](/web3-data-api/evm/reference/get-transactions-by-wallet): Connect the dots and understand what's happening on the blockchain through our data decoding transaction labeling & method decoding.
- Fetch [NFT transfers](/web3-data-api/evm/reference/get-wallet-nft-transfers) or [ERC20 transfers](/web3-data-api/evm/reference/get-wallet-token-transfers) for a wallet]: Retrieve real-time transfers, swaps and purchases across NFTs and ERC20 tokens.
- [Get wallet age and cross-chain activity](/web3-data-api/evm/reference/get-chain-activity-by-wallet): Identify wallet age, chain activity, as well as support for domain lookups such as ENS and Unstoppable Domains.


## Example use cases

The use cases for our Wallet API API are truly endless! Some popular use cases include:

- Web3 Wallets
  - Current and historical token balances
  - Real-time token prices & net-worth
  - Detailed user activity
  - Hide spam tokens
- Decentralized Exchanges (DEXs)
  - Fetch ERC20 balances
  - Historical balances
  - Real-time and historical token prices
  - ERC20 transfers, swaps and trades
- Portfolio Trackers
  - Calculate wallet net-worth
  - Track wallet returns
  - Track token performance
  - Historical balances and prices
- NFT Marketplaces
  - Fetch NFT balances
  - Fetch owned collections
  - ReDisplay NFT images and Metadata
  - NFT transfers, swaps and purchase
 
As well as Web3 Analytics tools, DAOs, Web3 gaming plus many more!

## Supported chains

The Wallet API supports multiple EVM chains:

| Chain Name        | Chain Id (HEX) | Chain Id (INT) |
| ----------------- | -------------- | -------------- |
| eth               | 0x1            | 1              |
| goerli            | 0x5            | 5              |
| sepolia           | 0xaa36a7       | 11155111       |
| polygon           | 0x89           | 137            |
| mumbai            | 0x13881        | 80001          |
| bsc               | 0x38           | 56             |
| bsc testnet       | 0x61           | 97             |
| avalanche         | 0xa86a         | 43114          |
| fantom            | 0xfa           | 250            |
| cronos            | 0x19           | 25             |
| palm              | 0x2a15c308d    | 11297108109    |
| arbitrum          | 0xa4b1         | 42161          |
