---
title: "Base API"
slug: "/web3-data-api/evm/chains/base"
sidebar_label: "Base"
sidebar_position: 4
---

# Base API

## Introduction

Base is a Layer 2 network built on top of Ethereum, offering fast and low-cost transactions while maintaining the security of Ethereum. It is optimized for decentralized applications (dApps), making it an attractive platform for DeFi, NFTs, and other blockchain use cases. Base provides developers with a secure, scalable, and interoperable environment for building dApps that leverage the Ethereum ecosystem.

## Supported Networks

The Web3 Data API is available for the following Base networks:

1. **Base Mainnet**
2. **Base Sepolia Testnet**

## Network Details

| Network | Chain ID |
| ---- | ---- |
| **Base Mainnet**         | 0x2105 (8453)   |
| **Base Sepolia Testnet** | 0x14a34 (84532) |

## Supported APIs

The following APIs are supported for Base:

<ul>
  <li><a href="/web3-data-api/evm/reference#wallet-api">Wallet API</a></li>
  <li><a href="/web3-data-api/evm/reference#nft-api">NFT API</a></li>
  <li><a href="/web3-data-api/evm/reference#token-api">Token API</a></li>
  <li><a href="/web3-data-api/evm/reference#defi-api">DeFi API</a></li>
  <li><a href="/web3-data-api/evm/reference#entity-api">Entity API</a></li>
  <li><a href="/web3-data-api/evm/reference#price-api">Price API</a></li>
  <li><a href="/web3-data-api/evm/reference#blockchain-api">Blockchain API</a></li>
</ul>

### Wallet API

The Wallet API enables you to interact with wallet data on the Base blockchain.

<ul>
  <li><a href="/web3-data-api/evm/reference#get-wallet-history">Get Wallet History on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-token-balances">Get Wallet Token Balances on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-token-approvals">Get Wallet Token Approvals on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-nfts">Get Wallet NFT Balances on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-net-worth">Get Wallet Net-worth on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-pnl">Get Wallet PnL on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-details">Get Wallet Details on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-domains">Get Wallet Domains on Base</a></li>
</ul>

### NFT API

The NFT API allows you to interact with NFT-related data on Base. You can:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-nfts">Get NFTs on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-metadata">Get NFT Metadata on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-transfers">Get NFT Transfers on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-collections">Get NFT Collections on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-owners">Get NFT Owners on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-trades">Get NFT Trades on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-stats">Get NFT Stats on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-traits-and-rarity">Get NFT Traits and Rarity on Base</a></li>
</ul>

### Token API

The Token API provides methods for interacting with ERC-20 tokens on Base. Choose from the following actions:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-token-metadata">Get Token Metadata on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-price">Get Token Price on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-balances">Get Token Balances on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-approvals">Get Token Approvals on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-transfers">Get Token Transfers on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-top-traders">Get Token Top Traders on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-pairs--liquidity">Get Token Pairs & Liquidity on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-stats">Get Token Stats on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-owners">Get Token Owners on Base</a></li>
</ul>

### DeFi API

The DeFi API enables interaction with decentralized finance positions and data on Base:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Base</a></li>
</ul>

### Entity API

The Entity API allows you to interact with various entities on Base, such as exchanges or other organizations:

<ul>
  <li><a href="/web3-data-api/evm/reference#search-entities">Search Entities on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-entity-categories">Get Entity Categories on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-entities">Get Entities on Base</a></li>
</ul>

### Price API

Retrieve price data for tokens and NFTs on Base using the Price API:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-token-prices">Get Token Prices on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Base</a></li>
</ul>

### Blockchain API

The Blockchain API gives access to blockchain-level data such as blocks, transactions, and logs:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-blocks">Get Blocks on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-transactions">Get Transactions on Base</a></li>
  <li><a href="/web3-data-api/evm/reference#get-latest-block-number">Get Latest Block Number on Base</a></li>
</ul>

---

## Unlock the Power of Base with Moralis

Curious about how you can leverage the full potential of Base? Check out our [Base page](https://developers.moralis.com/chains/base/) to see how Moralis can help you build faster and smarter. With features like easy access to on-chain data, token balances, and NFT management, Moralis simplifies Base development for all kinds of dapps.

Discover more about what you can build on Base with Moralis:  
[Learn more on our Base page](https://developers.moralis.com/chains/base/)
