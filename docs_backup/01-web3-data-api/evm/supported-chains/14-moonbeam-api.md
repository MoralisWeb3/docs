---
title: "Moonbeam API"
slug: "/web3-data-api/evm/chains/moonbeam"
sidebar_label: "Moonbeam"
sidebar_position: 13
---

# Moonbeam API

## Introduction

Moonbeam is a fully Ethereum-compatible smart contract platform on Polkadot. It offers seamless integration with the Ethereum ecosystem, providing an interoperable environment for decentralized applications (dApps) to scale and communicate across chains.

## Supported Networks

The Web3 Data API is available for the following Moonbeam networks:

1. **Moonbeam Mainnet**
2. **Moonriver Testnet**
3. **Moonbase Testnet**

## Network Details

| Network               | Chain ID     | EVM Chain          |
| --------------------- | ------------ | ------------------ |
| **Moonbeam Mainnet**  | 0x504 (1284) | EvmChain.MOONBEAM  |
| **Moonriver Testnet** | 0x505 (1285) | EvmChain.MOONRIVER |
| **Moonbase Testnet**  | 0x507 (1287) | EvmChain.MOONBASE  |

## Supported APIs

The following APIs are supported for Moonbeam:

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

The Wallet API enables you to interact with wallet data on the Moonbeam blockchain.

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-history">Get Wallet History on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-token-balances">Get Wallet Token Balances on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-token-approvals">Get Wallet Token Approvals on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-nfts">Get Wallet NFT Balances on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-net-worth">Get Wallet Net-worth on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-pnl">Get Wallet PnL on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-details">Get Wallet Details on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-domains">Get Wallet Domains on Moonbeam</a>
  </li>
</ul>

### NFT API

The NFT API allows you to interact with NFT-related data on Moonbeam. You can:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-nfts">Get NFTs on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-metadata">Get NFT Metadata on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-transfers">Get NFT Transfers on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-collections">Get NFT Collections on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-owners">Get NFT Owners on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-trades">Get NFT Trades on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-stats">Get NFT Stats on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-traits-and-rarity">Get NFT Traits and Rarity on Moonbeam</a>
  </li>
</ul>

### Token API

The Token API provides methods for interacting with ERC-20 tokens on Moonbeam. Choose from the following actions:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-metadata">Get Token Metadata on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-price">Get Token Price on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-balances">Get Token Balances on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-approvals">Get Token Approvals on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-transfers">Get Token Transfers on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-top-traders">Get Token Top Traders on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-pairs--liquidity">Get Token Pairs & Liquidity on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-stats">Get Token Stats on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-owners">Get Token Owners on Moonbeam</a>
  </li>
</ul>

### DeFi API

The DeFi API enables interaction with decentralized finance positions and data on Moonbeam:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-wallet-defi-positions">Get Wallet DeFi Positions on Moonbeam</a>
  </li>
</ul>

### Entity API

The Entity API allows you to interact with various entities on Moonbeam, such as exchanges or other organizations:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#search-entities">Search Entities on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-entity-categories">Get Entity Categories on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-entities">Get Entities on Moonbeam</a>
  </li>
</ul>

### Price API

Retrieve price data for tokens and NFTs on Moonbeam using the Price API:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-token-prices">Get Token Prices on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-nft-prices">Get NFT Prices on Moonbeam</a>
  </li>
</ul>

### Blockchain API

The Blockchain API gives access to blockchain-level data such as blocks, transactions, and logs:

<ul>
  <li>
    <a href="/web3-data-api/evm/reference#get-blocks">Get Blocks on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-transactions">Get Transactions on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-logs">Get Logs on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-stats">Get Stats on Moonbeam</a>
  </li>
  <li>
    <a href="/web3-data-api/evm/reference#get-latest-block-number">Get Latest Block Number on Moonbeam</a>
  </li>
</ul>

---

## Unlock the Power of Moonbeam with Moralis

Curious about how you can leverage the full potential of Moonbeam? Check out our [Moonbeam page](https://developers.moralis.com/chains/moonbeam/) to see how Moralis can help you build faster and smarter. With features like token balances, internal transactions, and on-chain data access, Moralis makes Moonbeam blockchain development easier.
