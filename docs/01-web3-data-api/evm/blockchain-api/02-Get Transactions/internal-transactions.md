---
title: "Internal Transactions"
slug: "../../internal-transactions"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

Internal transactions in the context of blockchain refer to transactions that occur between smart contracts rather than involving the transfer of funds between external addresses. Unlike regular transactions initiated by users, internal transactions are interactions between different functionalities within the blockchain network.

Internal transactions on the Ethereum ecosystem are transactions that occur within a contract, as opposed to transactions that are initiated by an external EVM address.

These transactions are initiated by the contract itself when certain events or conditions are met, and they can be used to transfer Ether or other assets from one part of the contract to another (as well as external addresses).

One transaction on a smart contract can lead to many internal transactions that interact with different smart contracts or distribute value to several web3 wallets through an airdrop.

By default, when fetching transaction details using Moralis API, internal transactions may not be included in the response. This default behavior is designed to provide a more streamlined response that focuses on external transactions.

## What chains currently support Internal Transactions through the API?

| Chain            | Real-time | Historical      |
| :--------------- | :-------- | :-------------- |
| Ethereum Mainnet | ✅        | ✅ Full history |
| Ethereum Sepolia | ✅        | ✅ Full history |
| Polygon Mainnet  | ✅        | Partial         |
| Polygon Mumbai   | ✅        | ✅ Full history |
| BNB Mainnet      | ✅        | Partial         |
| BNB Testnet      | ✅        | ✅ Full history |

## Will you be adding Internal Transactions to more chains?

Yes, absolutely! We plan to add internal transactions across our other EVM chains such as Avalanche, Palm, Fantom and Cronos. Submit and vote on which chains we should focus on first [by visiting our Roadmap](https://roadmap.moralis.io/b/feature-requests/)!

## Are real-time and historical Internal Transactions supported?

Currently internal transactions will be processed in real-time across Ethereum, Sepolia, Polygon, Mumbai, BNB and BNB testnet. This means for all new transactions, where internal transactions exist, they will be available through the API.

All historical internal transactions for Ethereum, Sepolia, Mumbai and BNB testnet are also available, meaning every single internal transaction back to Block 0 is available on these blockchains. For BNB and Polygon, these blockchains are still syncing and will fully complete in Q1.

## Why are Internal Transactions used?

Internal transactions in Ethereum allow for transfer of Ether and other assets within the same smart contract without creating a new transaction on the blockchain. This can reduce the cost and increase the efficiency of executing certain operations within the contract, as it eliminates the need for a full transaction that incurs gas costs and network fees.

Additionally, internal transactions provide a way for contracts to securely communicate with each other and interact with each other's state, facilitating complex, multi-step operations and enabling the development of more sophisticated decentralized applications.

## Why is it important that Internal Transactions are indexed?

Internal transactions can help provide a complete picture of what happened when analyzing EVM transactions because they can provide insight into the behaviour of smart contracts and the interactions between them. Internal transactions can reveal information such as the transfer of assets between contracts, the execution of specific contract functions, and the modification of contract state.

## What are some use cases of Internal Transactions?

Internal Transactions can be a powerful feature in a number of different use cases. Here are some popular ones:

- Displaying a complete wallet and portfolio history
- Displaying detailed information about Contract interactions
- Displaying detailed information about token transfers

## Which endpoints support Internal Transactions?

We have included support for internal transactions on three existing endpoints by introducing a new query parameter `include` that supports `internal_transactions` as an input.

| Name                              | Endpoint                                                       |
| :-------------------------------- | :------------------------------------------------------------- |
| Get native transactions by wallet | `/:address?include=internal_transactions`                      |
| Get transaction by hash           | `/transaction/:transaction_hash?include=internal_transactions` |
| Get block by hash                 | `/block/:block_number_or_hash?include=internal_transactions`   |

We have also launched a new endpoint that specifically fetches internal transactions for a given transaction hash.

| Name                                          | Endpoint                                               |
| :-------------------------------------------- | :----------------------------------------------------- |
| Get internal transactions by transaction hash | `/transaction/:transaction_hash/internal-transactions` |
