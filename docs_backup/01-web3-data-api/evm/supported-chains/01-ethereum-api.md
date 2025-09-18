---
title: "Ethereum API"
slug: "/web3-data-api/evm/chains/ethereum"
sidebar_label: "Ethereum"
sidebar_position: 0
---

# Ethereum API

## Introduction

Ethereum is the pioneering smart contract platform that enables developers to build decentralized applications (dapps) on a permissionless blockchain. It supports smart contracts, decentralized finance (DeFi), and a broad array of token standards, including ERC-20 and ERC-721. Ethereum’s consensus mechanism transitioned from Proof of Work (PoW) to Proof of Stake (PoS) with the Ethereum 2.0 upgrade, making it more energy-efficient. As the largest smart contract platform by market capitalization and developer activity, Ethereum remains a leader in the blockchain space.

## Supported Networks

The Web3 Data API is available for the following networks on Ethereum:

1. **Ethereum Mainnet**
2. **Ethereum Sepolia Testnet**
3. **Ethereum Holesky Testnet**

## Network Details

| Network              | Chain ID            | EVM Chain         |
| -------------------- | ------------------- | ----------------- |
| **Ethereum Mainnet** | 0x1 (1)             | EvmChain.ETHEREUM |
| **Ethereum Sepolia** | 0xaa36a7 (11155111) | EvmChain.SEPOLIA  |
| **Ethereum Holesky** | 0x4268 (17000)      | EvmChain.HOLESKY  |

## Supported APIs

The following APIs are supported for Ethereum:

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

The Wallet API enables you to interact with wallet data on the Ethereum blockchain.

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-history">Get Wallet History on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-token-balances">Get Wallet Token Balances on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-token-approvals">Get Wallet Token Approvals on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-nfts">Get Wallet NFT Balances on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-net-worth">Get Wallet Net-worth on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-pnl">Get Wallet PnL on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-details">Get Wallet Details on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-domains">Get Wallet Domains on Ethereum</a>
  </li>
</ul>

### NFT API

The NFT API allows you to interact with NFT-related data on Ethereum. You can:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-nfts">Get NFTs on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-metadata">Get NFT Metadata on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-transfers">Get NFT Transfers on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-collections">Get NFT Collections on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-owners">Get NFT Owners on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-trades">Get NFT Trades on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-stats">Get NFT Stats on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-traits-and-rarity">Get NFT Traits and Rarity on Ethereum</a>
  </li>
</ul>

### Token API

The Token API provides methods for interacting with ERC-20 tokens on Ethereum. Choose from the following actions:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-metadata">Get Token Metadata on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-price">Get Token Price on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-balances">Get Token Balances on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-approvals">Get Token Approvals on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-transfers">Get Token Transfers on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-top-traders">Get Token Top Traders on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-pairs--liquidity">Get Token Pairs & Liquidity on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-stats">Get Token Stats on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-owners">Get Token Owners on Ethereum</a>
  </li>
</ul>

### DeFi API

The DeFi API enables interaction with decentralized finance positions and data on Ethereum:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Ethereum</a>
  </li>
</ul>

### Entity API

The Entity API allows you to interact with various entities on Ethereum, such as exchanges or other organizations:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#search-entities">Search Entities on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-entity-categories">Get Entity Categories on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-entities">Get Entities on Ethereum</a>
  </li>
</ul>

### Price API

Retrieve price data for tokens and NFTs on Ethereum using the Price API:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-prices">Get Token Prices on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Ethereum</a>
  </li>
</ul>

### Blockchain API

The Blockchain API gives access to blockchain-level data such as blocks, transactions, and logs:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-blocks">Get Blocks on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-transactions">Get Transactions on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-logs">Get Logs on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-stats">Get Stats on Ethereum</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-latest-block-number">Get Latest Block Number on Ethereum</a>
  </li>
</ul>

---

## Unlock the Power of Ethereum with Moralis

Curious about how you can leverage the full potential of Ethereum? Check out our [Ethereum page](https://developers.moralis.com/chains/ethereum/) to see how Moralis can help you build faster and smarter. With features like easy access to on-chain data, token balances, and NFT management, Moralis simplifies Ethereum development for all kinds of dapps.

Discover more about what you can build on Ethereum with Moralis:  
[Learn more on our Ethereum page](https://developers.moralis.com/chains/ethereum/)
