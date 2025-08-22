---
title: "Binance Smart Chain API"
slug: "/web3-data-api/evm/chains/binance-smart-chain"
sidebar_label: "Binance Smart Chain"
sidebar_position: 2
---

# Binance Smart Chain API

## Introduction

Binance Smart Chain (BSC) is a high-performance blockchain designed for decentralized applications (dApps) and digital asset transactions. It supports smart contracts and offers lower transaction fees and faster confirmation times compared to Ethereum. BSC is compatible with the Ethereum Virtual Machine (EVM), allowing developers to migrate dApps and assets between Ethereum and BSC seamlessly. BSC has gained significant adoption, especially in the DeFi and NFT ecosystems.

## Supported Networks

The Web3 Data API is available for the following Binance Smart Chain networks:

1. **Binance Smart Chain Mainnet**
2. **Binance Smart Chain Testnet**

## Network Details

| Network                         | Chain ID  | EVM Chain            |
| ------------------------------- | --------- | -------------------- |
| **Binance Smart Chain Mainnet** | 0x38 (56) | EvmChain.BSC         |
| **Binance Smart Chain Testnet** | 0x61 (97) | EvmChain.BSC_TESTNET |

## Supported APIs

The following APIs are supported for Binance Smart Chain:

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

The Wallet API enables you to interact with wallet data on the Binance Smart Chain blockchain.

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-history">Get Wallet History on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-token-balances">Get Wallet Token Balances on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-token-approvals">Get Wallet Token Approvals on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-nfts">Get Wallet NFT Balances on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-net-worth">Get Wallet Net-worth on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-pnl">Get Wallet PnL on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-details">Get Wallet Details on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-domains">Get Wallet Domains on BSC</a>
  </li>
</ul>

### NFT API

The NFT API allows you to interact with NFT-related data on Binance Smart Chain. You can:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-nfts">Get NFTs on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-metadata">Get NFT Metadata on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-transfers">Get NFT Transfers on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-collections">Get NFT Collections on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-owners">Get NFT Owners on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-trades">Get NFT Trades on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-stats">Get NFT Stats on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-traits-and-rarity">Get NFT Traits and Rarity on BSC</a>
  </li>
</ul>

### Token API

The Token API provides methods for interacting with BEP-20 tokens on Binance Smart Chain. Choose from the following actions:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-metadata">Get Token Metadata on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-price">Get Token Price on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-balances">Get Token Balances on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-approvals">Get Token Approvals on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-transfers">Get Token Transfers on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-top-traders">Get Token Top Traders on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-pairs--liquidity">Get Token Pairs & Liquidity on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-stats">Get Token Stats on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-owners">Get Token Owners on BSC</a>
  </li>
</ul>

### DeFi API

The DeFi API enables interaction with decentralized finance positions and data on Binance Smart Chain:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on BSC</a>
  </li>
</ul>

### Entity API

The Entity API allows you to interact with various entities on Binance Smart Chain, such as exchanges or other organizations:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#search-entities">Search Entities on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-entity-categories">Get Entity Categories on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-entities">Get Entities on BSC</a>
  </li>
</ul>

### Price API

Retrieve price data for tokens and NFTs on Binance Smart Chain using the Price API:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-prices">Get Token Prices on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on BSC</a>
  </li>
</ul>

### Blockchain API

The Blockchain API gives access to blockchain-level data such as blocks, transactions, and logs:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-blocks">Get Blocks on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-transactions">Get Transactions on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-logs">Get Logs on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-stats">Get Stats on BSC</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-latest-block-number">Get Latest Block Number on BSC</a>
  </li>
</ul>

---

## Unlock the Power of Binance Smart Chain with Moralis

Curious about how you can leverage the full potential of Binance Smart Chain? Check out our [Binance Smart Chain page](https://developers.moralis.com/chains/bnb/) to see how Moralis can help you build faster and smarter. With features like easy access to on-chain data, token balances, and NFT management, Moralis simplifies Binance Smart Chain development for all kinds of dapps.

Discover more about what you can build on Binance Smart Chain with Moralis:  
[Learn more on our Binance Smart Chain page](https://developers.moralis.com/chains/bnb/)
