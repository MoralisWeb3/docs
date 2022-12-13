---
title: "Web3 Glossary"
slug: "web3-glossary"
sidebar_position: 9
---
## Wallets

A cryptocurrency wallet is a device or program that stores your cryptocurrency keys and allows you to access your tokens. Your wallet is the Web3 equivalent of your bank account. 

Each wallet can have multiple addresses attached to it. A wallet address is similar to an account number in traditional banking. 

Your wallet is accessed using a private cryptocurrency key or seed phrase. This is the same as a master password or digital login that you might have for an online bank, with one important difference - **anyone who has your private key can access and sign transactions**. 

You should **never share** your private keys. Anyone with access to your private keys can access your funds, and they can be permanently lost. 

MetaMask is one of the most popular and comprehensive Web3 wallets: <https://metamask.io/>

## Signing

"Signing" in Web3 is the process of creating a digital signature using a combination of your wallet's private keys, cryptography, and encryption.

When you sign anything using your wallet, the receiving address (or signee) decrypts and verifies the request was sent by your private key and completes the transaction.

## Smart Contract

Smart contracts were first proposed in the early 1990s by Nick Szabo, who coined the term, using it to refer to "a set of promises, specified in digital form, including protocols within which the parties perform on these promises".

A smart contract is a computerized transaction protocol that executes the term of a contract. It automatically executes on the blockchain when specific conditions are met.

## RPC nodes

RPC node, or **r**emote **p**rocedure **c**all nodes, are responsible for storing and propagating transactions in the network. They are servers that provide public access points to blockchain networks and are used by dapps to interact with and read data from blockchains via APIs (such as Moralis' APIs). 

As shown in the image below, node A broadcasts a transaction to node B and node C in the network. The nodes (A, B, and C) then verify this transaction before forwarding it to their peers, and so on. 

![](/img/content/1121070-image.png)

Self-hosting RPC nodes is possible, but requires quite extensive infrastructure, support, and management. Moralis APIs remove the need to self-host an RPC node. 

## EVM

**E**thereum **V**irtual **M**achine, or EVM, is the engine in which transaction code gets executed. EVM enables the development of potentially thousands of different applications all on one platform. 

Smart contracts written in smart contract-specific programming languages are compiled into "bytecode", which an EVM can read and execute.

All nodes execute this smart contract using their EVMs.

![](/img/content/70cc1e7-image.png)

## ERC

ERC stands for "**E**thereum **R**equest for **C**omment," and "request for comment" which is derived from Ethereum improvement proposals (EIPs). 

These describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards. Network upgrades are discussed separately in the Ethereum Project Management repository.

The most popular ERC standards are [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) and [ERC-721](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/#top).

## NFT

A **n**on-**f**ungible **t**oken is a unique digital token that is stored on the blockchain. An NFT differs from tokens like ETH or BTC, or fungible tokens, as it's one-of-a-kind and cannot be replicated. 

NFTs can be used to represent individual assets digitally, most commonly art, but also real estate, tickets, wine, and rare collectibles. They can also be used as a kind of "digital passport", allowing users to access gated communities, events, or websites. 

NFT metadata describes all of an NFT's essential properties, including name, transaction history, total supply, and so on. 

The [ERC-721](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/#top) standard is often used to create NFTs.

## Layer-2 (L2)

Layer-2 (L2) refers to a secondary framework or protocol that is built on top of an existing layer-1 blockchain. 

Layer-2 blockchains typically improve transaction speeds and cost efficiency. As layer-2 protocols continue to scale, mempool data gives builders looking to migrate or build new dapps the tools to create the best user experiences. 

## Token

A token represents an asset or equity that can be traded with another token or digital asset. Tokens on the blockchain are immutable, meaning they have a fixed name, symbol, and total supply, unless or otherwise made mutable with the help of a smart contract. 

The ERC-20 standard is the most popular option for deploying a token on EVM chains.

## Blockchains and Blocks

Blockchains are made up of "blocks" of data, and networks of nodes. Each block is a collection of transaction information, while each node holds a record of all verified transactions. 

New blocks submitted to the network are verified by the nodes, and either added to the blockchain as immutable data or rejected if invalid. 

Block varies depending on the blockchain. The Bitcoin network block size is limited to 1 MB, for example, whereas Ethereum blocks have no fixed size. 

Each individual block can be identified by its own block number and block hash. 

## Events

Events are EVM logs. Events are inheritable members of contracts. When you call them, they cause the arguments to be stored in the transaction’s log - a special data structure in the blockchain. 

These logs are associated with the address of the contract, are incorporated into the blockchain, and stay there as long as a block is accessible (forever as of now, but this might change with Serenity). The log and its event data are not accessible from within contracts (not even from the contract that created them). Source: [solidity docs](https://docs.soliditylang.org/en/v0.8.13/contracts.html#events).

## Type 0 Transaction

Type 0 transactions are no longer used. They are legacy transactions previous to the Ethereum London hard fork that occurred in August 2021, which included the deployment of EIP-1559.

## Type 2 Transaction

Type 2 transactions are based on the EIP-1559 upgrades and include base fee, max priority fee, and max fee per gas fields instead of the gas price field. Blocknative's Gas Platform API and Gas Estimator support both type 2 and type 0 transactions.

## ENS Domains

**E**thereum **N**aming **S**ystem is a human-readable name corresponding to your wallet address. ENS domains are unique and come with a .**eth** extension. They follow the ERC-721 standard.

## Unstoppable Domains

Similar to ENS, Unstoppable Domains are human-readable names as NFTs. They follow the ERC-721 standard and come with various extensions such as ".crypto", ".nft", and ".blockchain". 

## DeFi

Decentralized finance, commonly called DeFi, is a financial technology native to blockchains. The term comes from the fact that blockchains are not controlled by a single centralized entity (like a central bank, for example). 

DeFi comprises many "traditional" financial protocols translated to the blockchain, including staking, lending, and borrowing. 

DeFi also led to the creation of AMMs (automated market makers), which run decentralized exchanges. 

## AMM

An automated market maker, or AMM, is a protocol that usually runs on a decentralized exchange. It provides automatic quotes for trades and replaces traditional buy-and-sell order liquidity with liquidity pools that anyone can use or join. 

## IPFS

[As per their website](https://docs.ipfs.tech/concepts/what-is-ipfs/), IPFS is a distributed system for storing and accessing files, websites, applications, and data. 

## Solana

Solana is a decentralized blockchain built to enable scalable, user-friendly dapps for the world. 

## SPL Token

The **S**olana **P**rogram **L**ibrary is the full form of SPL analogous to ERC on Ethereum, but for the Solana blockchain. 

The SPL token is the standard used to issue tokens on the Solana blockchain, similar to the ERC-20 standard used to issue tokens on Ethereum.