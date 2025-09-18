---
title: "Linea API"
slug: "/web3-data-api/evm/chains/linea"
sidebar_label: "Linea"
sidebar_position: 6
---

# Linea API

## Introduction

Linea is a new Layer 2 network built to scale Ethereum by offering faster and more cost-efficient transactions while maintaining Ethereum’s security and decentralization. Linea is compatible with Ethereum's EVM, which allows developers to easily migrate or extend their decentralized applications (dApps) to the Linea network. It supports ERC-20 swaps and other DeFi-related actions, making it a viable option for various decentralized applications.

## Supported Networks

The Web3 Data API is available for the following Linea networks:

1. **Linea Mainnet**
2. **Linea Sepolia Testnet**

## Network Details

| Network | Chain ID |
| ---- | ---- |
| **Linea Mainnet**         | 0xe708 (59144) |
| **Linea Sepolia Testnet** | 0xe705 (59141) |

## Supported APIs

The following APIs are supported for Linea:

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

The Wallet API enables you to interact with wallet data on the Linea blockchain.

<ul>
  <li><a href="/web3-data-api/evm/reference#get-wallet-history">Get Wallet History on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-token-balances">Get Wallet Token Balances on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-token-approvals">Get Wallet Token Approvals on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-nfts">Get Wallet NFT Balances on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-net-worth">Get Wallet Net-worth on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-pnl">Get Wallet PnL on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-details">Get Wallet Details on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-wallet-domains">Get Wallet Domains on Linea</a></li>
</ul>

### NFT API

The NFT API allows you to interact with NFT-related data on Linea. You can:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-nfts">Get NFTs on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-metadata">Get NFT Metadata on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-transfers">Get NFT Transfers on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-collections">Get NFT Collections on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-owners">Get NFT Owners on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-trades">Get NFT Trades on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-stats">Get NFT Stats on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-traits-and-rarity">Get NFT Traits and Rarity on Linea</a></li>
</ul>

### Token API

The Token API provides methods for interacting with ERC-20 tokens on Linea. Choose from the following actions:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-token-metadata">Get Token Metadata on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-price">Get Token Price on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-balances">Get Token Balances on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-approvals">Get Token Approvals on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-transfers">Get Token Transfers on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-top-traders">Get Token Top Traders on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-pairs--liquidity">Get Token Pairs & Liquidity on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-stats">Get Token Stats on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-token-owners">Get Token Owners on Linea</a></li>
</ul>

### DeFi API

The DeFi API enables interaction with decentralized finance positions and data on Linea:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Linea</a></li>
</ul>

### Entity API

The Entity API allows you to interact with various entities on Linea, such as exchanges or other organizations:

<ul>
  <li><a href="/web3-data-api/evm/reference#search-entities">Search Entities on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-entity-categories">Get Entity Categories on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-entities">Get Entities on Linea</a></li>
</ul>

### Price API

Retrieve price data for tokens and NFTs on Linea using the Price API:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-token-prices">Get Token Prices on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Linea</a></li>
</ul>

### Blockchain API

The Blockchain API gives access to blockchain-level data such as blocks, transactions, and logs:

<ul>
  <li><a href="/web3-data-api/evm/reference#get-blocks">Get Blocks on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-transactions">Get Transactions on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-logs">Get Logs on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-stats">Get Stats on Linea</a></li>
  <li><a href="/web3-data-api/evm/reference#get-latest-block-number">Get Latest Block Number on Linea</a></li>
</ul>

---

## Unlock the Power of Linea with Moralis

Curious about how you can leverage the full potential of Linea? Check out our [Linea page](https://developers.moralis.com/chains/linea/) to see how Moralis can help you build faster and smarter. With features like easy access to on-chain data, token balances, and NFT management, Moralis simplifies Linea development for all kinds of dapps.

Discover more about what you can build on Linea with Moralis:  
[Learn more on our Linea page](https://developers.moralis.com/chains/linea/)
