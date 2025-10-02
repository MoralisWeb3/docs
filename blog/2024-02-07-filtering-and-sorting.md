---
title: "Filtering & Sorting"
slug: "filtering-and-sorting"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we've launched filtering and sorting across the many of our transfer and transaction endpoints 🚀

<!-- truncate -->

#### Filter by contract address

Wallet transfer endpoints can now be filtered by specific contract addresses (one or many), allowing you to filter results down to specific contract(s). You'll find a new query parameter called `contract_addresses` on the following endpoints:

- [NFT transfers by wallet](/web3-data-api/evm/reference/wallet-api/get-wallet-nft-transfers)
- [Token transfers by wallet](/web3-data-api/evm/reference/wallet-api/get-wallet-token-transfers)

#### Sort by date

All of our transfer and transaction endpoints can now be ordered by date asc/desc. Previously, all endpoints were sorted by desc as default, giving you the latest transactions first. Now, you can order these endpoints with `order=asc` to get the earliest transactions first. You'll find a new query parameter called `order` on the following endpoints:

- [NFT transfers by wallet](/web3-data-api/evm/reference/wallet-api/get-wallet-nft-transfers)
- [NFT transfers by collection](/web3-data-api/evm/reference/get-nft-contract-transfers)
- [NFT transfers by block]
- [NFT transfers from a block to a block]
- [NFT transfers by token ID](/web3-data-api/evm/reference/get-nft-transfers)
- [ERC20 transfers by wallet](/web3-data-api/evm/reference/get-wallet-token-transfers)
- [ERC20 transfers by contract](/web3-data-api/evm/reference/get-token-transfers)
- [Get transactions by wallet](/web3-data-api/evm/reference/wallet-api/get-transactions-by-wallet)
- [Get decoded transactions by wallet](/web3-data-api/evm/reference/wallet-api/get-decoded-transactions-by-wallet)
- [Get logs by contract]
- [Get events by contract]
