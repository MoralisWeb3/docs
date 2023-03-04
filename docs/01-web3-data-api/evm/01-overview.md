---
title: "Web3 Data API"
sidebar_label: "Overview"
slug: "/web3-data-api/evm"
sidebar_position: 1
image: /img/content/web3-data-api-3.webp
description: "The Moralis Web3 Data APIs are a set of highly scalable APIs that solve popular Web3 challenges. By indexing blockchain data in a structured way, Moralis is able to expose APIs that make querying, fetching and understanding this data a breeze for developers."
sidebar_class_name: "sidebar-overview"
---

# Web3 Data API – EVM

![](/img/content/web3-data-api-3.webp)

## What are the Web3 Data APIs?

The Moralis Web3 Data APIs are a set of highly scalable APIs that solve popular Web3 challenges. By indexing blockchain data in a structured way, Moralis is able to expose APIs that make querying, fetching and understanding this data a breeze for developers.

## Web3 Data API Features

Moralis indexes all core aspects of blockchain data and provides access to this through a suite of data-focussed API endpoints. No matter what you are building, our Web3 Data API will support the data you will need; including Blocks, Transactions, NFTs, Tokens and Balance information.

- **NFT Data:** Fetch real-time NFT metadata, ownership data, NFT transfer data, NFT prices, and much more.
- **Token Data:** Seamlessly access real-time token price, ownership and transfer data.
- **Transaction Data:** Get detailed information for any user transaction. List past transactions, and stay up to date with your user's on-chain activity.
- **Block Data:** Get the contents of any block, including transactions, internal transactions, events and logs.
- **Event & Log Data:** Granular logs and events for specific wallets and contracts.
- **DeFi Data:** Out-of-the-box liquidity reserves and pair data across multiple blockchains.

## Use Cases

Our advanced feature set of Web3 Data APIs are best for those that are building crypto fintech applictions, which includes:

- Wallet App
- Portfolio Trackers
- Block Explorers
- Audit & Reporting
- NFT Marketplace
- etc.

## Supported Chains

Moralis Web3 Data APIs are continuously adding new chains and integrations. Our current supported EVM chains include:

| Name                            | Chain id    | EvmChain                  | Type    |
| :------------------------------ | :---------- | :------------------------ | :------ |
| Ethereum Mainnet                | 1           | `EvmChain.ETHEREUM`       | Mainnet |
| Ethereum Ropsten* (deprecated)* | 3           | `EvmChain.ROPSTEN`        | Testnet |
| Ethereum Rinkeby* (deprecated)* | 4           | `EvmChain.RINKEBY`        | Testnet |
| Ethereum Görli                  | 5           | `EvmChain.GOERLI`         | Testnet |
| Ethereum Kovan* (deprecated)*   | 42          | `EvmChain.KOVAN`          | Testnet |
| Ethereum Sepolia                | 11155111    | `EvmChain.SEPOLIA`        | Testnet |
| Polygon Mainnet                 | 137         | `EvmChain.POLYGON`        | Mainnet |
| Polygon Mumbai                  | 80001       | `EvmChain.MUMBAI`         | Testnet |
| Binance Smart Chain Mainnet     | 56          | `EvmChain.BSC`            | Mainnet |
| Binance Smart Chain Testnet     | 97          | `EvmChain.BSC_TESTNET`    | Testnet |
| Avalanche C-Chain               | 43114       | `EvmChain.AVALANCHE`      | Mainnet |
| Avalanche Fuji Testnet          | 43113       | `EvmChain.FUJI`           | Testnet |
| Fantom                          | 250         | `EvmChain.FANTOM`         | Mainnet |
| Cronos Mainnet                  | 25          | `EvmChain.CRONOS`         | Mainnet |
| Cronos Testnet                  | 338         | `EvmChain.CRONOS_TESTNET` | Testnet |
| Palm                            | 11297108109 | `EvmChain.PALM`           | Mainnet |
| Arbitrum                        | 42161       | `EvmChain.ARBITRUM`       | Mainnet |
