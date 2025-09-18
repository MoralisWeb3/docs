---
title: "Polygon API"
slug: "/web3-data-api/evm/chains/polygon"
sidebar_label: "Polygon"
sidebar_position: 1
---

# Polygon API

## Introduction

Polygon is a Layer 2 scaling solution for Ethereum, offering faster transactions with lower fees while still benefiting from Ethereum’s security. Polygon aims to improve the user experience and developer experience by enabling decentralized applications (dapps) to scale efficiently. With a robust ecosystem and a growing set of tools, Polygon has become a popular choice for DeFi, NFTs, and gaming applications.

## Supported Networks

The Web3 Data API is available for the following Polygon networks:

1. **Polygon Mainnet**
2. **Polygon Amoy Testnet**

## Network Details

| Network             | Chain ID        | EVM Chain             |
| ------------------- | --------------- | --------------------- |
| **Polygon Mainnet** | 0x89 (137)      | EvmChain.POLYGON      |
| **Polygon Amoy**    | 0x13882 (80002) | EvmChain.POLYGON_AMOY |

## Supported APIs

The following APIs are supported for Polygon:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#wallet-api">Wallet API</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#nft-api">NFT API</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#token-api">Token API</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#defi-api">DeFi API</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#entity-api">Entity API</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#price-api">Price API</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#blockchain-api">Blockchain API</a>
  </li>
</ul>

### Wallet API

The Wallet API enables you to interact with wallet data on the Polygon blockchain.

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-history">Get Wallet History on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-token-balances">Get Wallet Token Balances on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-token-approvals">Get Wallet Token Approvals on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-nfts">Get Wallet NFT Balances on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-net-worth">Get Wallet Net-worth on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-pnl">Get Wallet PnL on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-details">Get Wallet Details on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-domains">Get Wallet Domains on Polygon</a>
  </li>
</ul>

### NFT API

The NFT API allows you to interact with NFT-related data on Polygon. You can:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-nfts">Get NFTs on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-metadata">Get NFT Metadata on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-transfers">Get NFT Transfers on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-collections">Get NFT Collections on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-owners">Get NFT Owners on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-trades">Get NFT Trades on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-stats">Get NFT Stats on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-traits-and-rarity">Get NFT Traits and Rarity on Polygon</a>
  </li>
</ul>

### Token API

The Token API provides methods for interacting with ERC-20 tokens on Polygon. Choose from the following actions:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-metadata">Get Token Metadata on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-price">Get Token Price on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-balances">Get Token Balances on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-approvals">Get Token Approvals on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-transfers">Get Token Transfers on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-top-traders">Get Token Top Traders on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-pairs--liquidity">Get Token Pairs & Liquidity on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-stats">Get Token Stats on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-owners">Get Token Owners on Polygon</a>
  </li>
</ul>

### DeFi API

The DeFi API enables interaction with decentralized finance positions and data on Polygon:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Polygon</a>
  </li>
</ul>

### Entity API

The Entity API allows you to interact with various entities on Polygon, such as exchanges or other organizations:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#search-entities">Search Entities on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-entity-categories">Get Entity Categories on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-entities">Get Entities on Polygon</a>
  </li>
</ul>

### Price API

Retrieve price data for tokens and NFTs on Polygon using the Price API:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-prices">Get Token Prices on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Polygon</a>
  </li>
</ul>

### Blockchain API

The Blockchain API gives access to blockchain-level data such as blocks, transactions, and logs:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-blocks">Get Blocks on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-transactions">Get Transactions on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-logs">Get Logs on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-stats">Get Stats on Polygon</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-latest-block-number">Get Latest Block Number on Polygon</a>
  </li>
</ul>

---

## Unlock the Power of Polygon with Moralis

Curious about how you can leverage the full potential of Polygon? Check out our [Polygon page](https://developers.moralis.com/chains/polygon/) to see how Moralis can help you build faster and smarter. With features like easy access to on-chain data, token balances, and NFT management, Moralis simplifies Polygon development for all kinds of dapps.

Discover more about what you can build on Polygon with Moralis:  
[Learn more on our Polygon page](https://developers.moralis.com/chains/polygon/)
