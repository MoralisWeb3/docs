---
title: "Migration Guide | Switch from OKLink to Moralis"
description: "OKLink is suspending their Explorer API on May 20th, 2025. Any project using OKLink Explorer API needs a new provider before then. Migrate to Moralis APIs in 4 simple steps!"
sidebar_label: "Migrating from OKLink to Moralis"
slug: "/web3-data-api/evm/oklink-migration-guide"
sidebar_position: 10
---

# Migrating from OKLink to Moralis

:::warning URGENT MIGRATION NEEDED
OKLink is suspending all their Explorer APIs on May 20th, 2025. Applications and platforms using OKLink Explorer API need to migrate as soon as possible to avoid service disruptions. Moralis APIs offer equivalent functionality, making migration straightforward.
:::

With OKLink suspending their API offering, Moralis provides a comprehensive alternative with equivalent functionality and additional capabilities. This guide will help you seamlessly transition your projects from OKLink to Moralis.

## API Endpoint Equivalence

OKLink endpoints can be easily mapped to Moralis equivalents. Below you'll find the mapping organized by API category.

## Quick Reference Guide

Make use of the table below to quickly find the Moralis equivalent for each OKLink endpoint by clicking on the Moralis Equivalent column.

### Solana API

| Feature                    | OKLink Endpoint                                                                     | Moralis Equivalent                     |
| -------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------- |
| Get Account Asset Balances | `https://www.oklink.com/docs/en/#sol-data-account-data-get-addresses-asset-balance` | [Details](#get-account-asset-balances) |
| Get SOL Account Balance    | `https://www.oklink.com/docs/en/#sol-data-account-data-get-sol-account-balance`     | [Details](#get-sol-account-balance)    |
| Get Token Balance          | `https://www.oklink.com/docs/en/#sol-data-account-data-get-token-balance`           | [Details](#get-token-balance)          |
| Get Transaction List       | `https://www.oklink.com/docs/en/#sol-data-account-data-get-transaction-list`        | [Details](#get-transaction-list)       |

### NFT API

| Feature                        | OKLink Endpoint                                                           | Moralis Equivalent                         |
| ------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------ |
| Get Collection Overview        | `https://www.oklink.com/docs/en/#nft-data-get-collection-overview`        | [Details](#get-collection-overview)        |
| Get NFT List Within Collection | `https://www.oklink.com/docs/en/#nft-data-get-nft-list-within-collection` | [Details](#get-nft-list-within-collection) |
| Get Holder List for Collection | `https://www.oklink.com/docs/en/#nft-data-get-holder-list-for-collection` | [Details](#get-holder-list-for-collection) |
| Get Collection Floor Price     | `https://www.oklink.com/docs/en/#nft-data-get-collection-floor-price`     | [Details](#get-collection-floor-price)     |
| Get Detailed Data for NFT      | `https://www.oklink.com/docs/en/#nft-data-get-detailed-data-for-nft`      | [Details](#get-detailed-data-for-nft)      |
| Get NFT Holder Address         | `https://www.oklink.com/docs/en/#nft-data-get-nft-holder-address`         | [Details](#get-nft-holder-address)         |
| Get NFT Transaction History    | `https://www.oklink.com/docs/en/#nft-data-get-nft-transaction-history`    | [Details](#get-nft-transaction-history)    |
| Get NFT List Held by Address   | `https://www.oklink.com/docs/en/#nft-data-get-nft-list-held-by-address`   | [Details](#get-nft-list-held-by-address)   |

### Token API

| Feature                           | OKLink Endpoint                                                                            | Moralis Equivalent                            |
| --------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------- |
| Get Token List                    | `https://www.oklink.com/docs/en/#token-price-data-get-token-list`                          | [Details](#get-token-list)                    |
| Get Historical Token Price        | `https://www.oklink.com/docs/en/#token-price-data-get-historical-token-price`              | [Details](#get-historical-token-price)        |
| Get Latest Token Price in Batches | `https://www.oklink.com/docs/en/#token-price-data-get-latest-token-price-in-batches`       | [Details](#get-latest-token-price-in-batches) |
| Get Token Market Data             | `https://www.oklink.com/docs/en/#token-price-data-get-latest-token-price-in-batches`       | [Details](#get-token-market-data)             |
| Check Liquidity Pool Addresses    | `https://www.oklink.com/docs/en/#token-price-data-check-liquidity-pool-addresses-by-token` | [Details](#check-liquidity-pool-addresses)    |
| Get Individual Transaction Data   | `https://www.oklink.com/docs/en/#token-price-data-get-individual-transaction-data`         | [Details](#get-individual-transaction-data)   |

### Other Services

| Feature              | OKLink Endpoint                                                | Moralis Equivalent               |
| -------------------- | -------------------------------------------------------------- | -------------------------------- |
| Webhook Subscription | `https://www.oklink.com/docs/en/#webhook-subscription-service` | [Details](#webhook-subscription) |
| EVM RPC Data         | `https://www.oklink.com/docs/en/#evm-rpc-data`                 | [Details](#evm-rpc-data)         |

## Solana API

### Get Account Asset Balances

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#sol-data-account-data-get-addresses-asset-balance`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent     | Documentation                                                                                                                                          |
| ------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Solana | Get Sol Portfolio      | [https://docs.moralis.com/web3-data-api/solana/reference/get-sol-portfolio](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-portfolio) |
| Solana | Get Wallet NFTs        | [https://docs.moralis.com/web3-data-api/solana/reference/get-wallet-nfts](https://docs.moralis.com/web3-data-api/solana/reference/get-wallet-nfts)     |
| Solana | Get Native SOL Balance | [https://docs.moralis.com/web3-data-api/solana/reference/sol-balance](https://docs.moralis.com/web3-data-api/solana/reference/sol-balance)             |

</div>

**Notes**: Moralis provides comprehensive asset balance data including SOL tokens, SPL tokens, and NFTs in a single API call or through dedicated endpoints for each asset type.

### Get SOL Account Balance

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#sol-data-account-data-get-sol-account-balance`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent     | Documentation                                                                                                                              |
| ------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Solana | Get Native SOL Balance | [https://docs.moralis.com/web3-data-api/solana/reference/sol-balance](https://docs.moralis.com/web3-data-api/solana/reference/sol-balance) |

</div>

**Notes**: This endpoint provides the native SOL balance for a given wallet address.

### Get Token Balance

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#sol-data-account-data-get-token-balance`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent | Documentation                                                                                                                      |
| ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Solana | Get SPL Token Info | [https://docs.moralis.com/web3-data-api/solana/reference/get-spl](https://docs.moralis.com/web3-data-api/solana/reference/get-spl) |

</div>

**Notes**: This endpoint returns detailed information about SPL tokens, including balances, metadata, and more.

### Get Transaction List

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#sol-data-account-data-get-transaction-list`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent           | Documentation                                                                                                                                              |
| ------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Solana | Get Wallet Swap Transactions | [https://docs.moralis.com/web3-data-api/solana/reference/get-wallet-swap-txs](https://docs.moralis.com/web3-data-api/solana/reference/get-wallet-swap-txs) |

</div>

**Notes**: This endpoint provides swap transaction history for a wallet on Solana.

## NFT API

### Get Collection Overview

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#nft-data-get-collection-overview`

<div className="oklink-migration-table">

| Chain | Moralis Equivalent          | Documentation                                                                                                                                                            |
| ----- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EVM   | Get NFT Collection Metadata | [https://docs.moralis.com/web3-data-api/evm/reference/get-metadata-for-nft-contract](https://docs.moralis.com/web3-data-api/evm/reference/get-metadata-for-nft-contract) |

</div>

**Notes**: This endpoint returns comprehensive metadata about an NFT collection, including name, symbol, token standard, and more.

### Get NFT List Within Collection

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#nft-data-get-nft-list-within-collection`

<div className="oklink-migration-table">

| Chain | Moralis Equivalent   | Documentation                                                                                                                                    |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| EVM   | Get NFTs by Contract | [https://docs.moralis.com/web3-data-api/evm/reference/get-contract-nfts](https://docs.moralis.com/web3-data-api/evm/reference/get-contract-nfts) |

</div>

**Notes**: This endpoint retrieves all NFTs within a specific contract with pagination support for large collections.

### Get Holder List for Collection

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#nft-data-get-holder-list-for-collection`

<div className="oklink-migration-table">

| Chain | Moralis Equivalent         | Documentation                                                                                                                              |
| ----- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| EVM   | Get NFT Owners by Contract | [https://docs.moralis.com/web3-data-api/evm/reference/get-nft-owners](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-owners) |

</div>

**Notes**: This endpoint retrieves the complete list of owners for a specific NFT collection.

### Get Collection Floor Price

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#nft-data-get-collection-floor-price`

<div className="oklink-migration-table">

| Chain | Moralis Equivalent              | Documentation                                                                                                                                                                |
| ----- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EVM   | Get NFT Floor Price by Contract | [https://docs.moralis.com/web3-data-api/evm/reference/get-nft-floor-price-by-contract](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-floor-price-by-contract) |

</div>

**Notes**: This endpoint provides floor price data from major marketplaces for a specific NFT collection.

### Get Detailed Data for NFT

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#nft-data-get-detailed-data-for-nft`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent   | Documentation                                                                                                                                                |
| ------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EVM    | Get NFT Metadata     | [https://docs.moralis.com/web3-data-api/evm/reference/get-nft-metadata](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-metadata)               |
| Solana | Get SOL NFT Metadata | [https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nft-metadata](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nft-metadata) |

</div>

**Notes**: These endpoints provide comprehensive metadata for individual NFTs, including attributes, images, and other on-chain data.

### Get NFT Holder Address

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#nft-data-get-nft-holder-address`

<div className="oklink-migration-table">

| Chain | Moralis Equivalent         | Documentation                                                                                                                                                |
| ----- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EVM   | Get NFT Owners by Token ID | [https://docs.moralis.com/web3-data-api/evm/reference/get-nft-token-id-owners](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-token-id-owners) |

</div>

**Notes**: This endpoint retrieves owner information for a specific NFT token ID within a collection.

### Get NFT Transaction History

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#nft-data-get-nft-transaction-history`

<div className="oklink-migration-table">

| Chain | Moralis Equivalent         | Documentation                                                                                                                                                      |
| ----- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EVM   | Get NFT Contract Transfers | [https://docs.moralis.com/web3-data-api/evm/reference/get-nft-contract-transfers](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-contract-transfers) |
| EVM   | Get NFT Trades             | [https://docs.moralis.com/web3-data-api/evm/reference/get-nft-trades](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-trades)                         |

</div>

**Notes**: These endpoints provide comprehensive transfer and trade history for NFTs, including marketplace sales and P2P transfers.

### Get NFT List Held by Address

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#nft-data-get-nft-list-held-by-address`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent | Documentation                                                                                                                                |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| EVM    | Get Wallet NFTs    | [https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-nfts](https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-nfts) |
| Solana | Get SOL NFTs       | [https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nfts](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nfts) |

</div>

**Notes**: These endpoints retrieve all NFTs held by a specific wallet address with rich metadata.

## Token API

### Get Token List

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#token-price-data-get-token-list`

<div className="oklink-migration-table">

| Chain | Moralis Equivalent  | Documentation                                                                                                                                        |
| ----- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| EVM   | Get Filtered Tokens | [https://docs.moralis.com/web3-data-api/evm/reference/get-filtered-tokens](https://docs.moralis.com/web3-data-api/evm/reference/get-filtered-tokens) |

</div>

**Notes**: This endpoint allows retrieving tokens with various filtering options.

### Get Historical Token Price

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#token-price-data-get-historical-token-price`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent        | Documentation                                                                                                                                                                      |
| ------ | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EVM    | Get Multiple Token Prices | [https://docs.moralis.com/web3-data-api/evm/reference/get-multiple-token-prices](https://docs.moralis.com/web3-data-api/evm/reference/get-multiple-token-prices)                   |
| EVM    | Get OHLCV by Pair Address | [https://docs.moralis.com/web3-data-api/evm/reference/get-ohlcv-by-pair-address](https://docs.moralis.com/web3-data-api/evm/reference/get-ohlcv-by-pair-address)                   |
| Solana | Get Multiple Token Prices | [https://docs.moralis.com/web3-data-api/solana/reference/price/get-multiple-token-prices](https://docs.moralis.com/web3-data-api/solana/reference/price/get-multiple-token-prices) |
| Solana | Get OHLCV by Pair Address | [https://docs.moralis.com/web3-data-api/solana/reference/price/get-ohlcv-by-pair-address](https://docs.moralis.com/web3-data-api/solana/reference/price/get-ohlcv-by-pair-address) |

</div>

**Notes**: These endpoints provide price history data for tokens across different timeframes.

### Get Latest Token Price in Batches

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#token-price-data-get-latest-token-price-in-batches`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent        | Documentation                                                                                                                                                                      |
| ------ | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EVM    | Get Multiple Token Prices | [https://docs.moralis.com/web3-data-api/evm/reference/get-multiple-token-prices](https://docs.moralis.com/web3-data-api/evm/reference/get-multiple-token-prices)                   |
| EVM    | Get OHLCV by Pair Address | [https://docs.moralis.com/web3-data-api/evm/reference/get-ohlcv-by-pair-address](https://docs.moralis.com/web3-data-api/evm/reference/get-ohlcv-by-pair-address)                   |
| Solana | Get Multiple Token Prices | [https://docs.moralis.com/web3-data-api/solana/reference/price/get-multiple-token-prices](https://docs.moralis.com/web3-data-api/solana/reference/price/get-multiple-token-prices) |
| Solana | Get OHLCV by Pair Address | [https://docs.moralis.com/web3-data-api/solana/reference/price/get-ohlcv-by-pair-address](https://docs.moralis.com/web3-data-api/solana/reference/price/get-ohlcv-by-pair-address) |

</div>

**Notes**: These endpoints support batch requests for fetching current prices of multiple tokens in a single API call.

### Get Token Market Data

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#token-price-data-get-latest-token-price-in-batches`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent  | Documentation                                                                                                                                              |
| ------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EVM    | Get Token Metadata  | [https://docs.moralis.com/web3-data-api/evm/reference/get-token-metadata](https://docs.moralis.com/web3-data-api/evm/reference/get-token-metadata)         |
| EVM    | Get Token Analytics | [https://docs.moralis.com/web3-data-api/evm/reference/get-token-analytics](https://docs.moralis.com/web3-data-api/evm/reference/get-token-analytics)       |
| Solana | Get Token Metadata  | [https://docs.moralis.com/web3-data-api/solana/reference/get-token-metadata](https://docs.moralis.com/web3-data-api/solana/reference/get-token-metadata)   |
| Solana | Get Token Analytics | [https://docs.moralis.com/web3-data-api/solana/reference/get-token-analytics](https://docs.moralis.com/web3-data-api/solana/reference/get-token-analytics) |

</div>

**Notes**: These endpoints provide comprehensive token metadata including marketcap, supply information, and other analytics.

### Check Liquidity Pool Addresses

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#token-price-data-check-liquidity-pool-addresses-by-token`

<div className="oklink-migration-table">

| Chain  | Moralis Equivalent         | Documentation                                                                                                                                                            |
| ------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EVM    | Get Token Pairs            | [https://docs.moralis.com/web3-data-api/evm/reference/get-token-pairs](https://docs.moralis.com/web3-data-api/evm/reference/get-token-pairs)                             |
| Solana | Get Token Pairs by Address | [https://docs.moralis.com/web3-data-api/solana/reference/get-token-pairs-by-address](https://docs.moralis.com/web3-data-api/solana/reference/get-token-pairs-by-address) |

</div>

**Notes**: These endpoints provide information about liquidity pairs for specific tokens across various DEXes.

### Get Individual Transaction Data

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#token-price-data-get-individual-transaction-data`

<div className="oklink-migration-table">

| Chain | Moralis Equivalent      | Documentation                                                                                                                                                |
| ----- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EVM   | Get Transaction         | [https://docs.moralis.com/web3-data-api/evm/reference/get-transaction](https://docs.moralis.com/web3-data-api/evm/reference/get-transaction)                 |
| EVM   | Get Decoded Transaction | [https://docs.moralis.com/web3-data-api/evm/reference/get-decoded-transaction](https://docs.moralis.com/web3-data-api/evm/reference/get-decoded-transaction) |

</div>

**Notes**: These endpoints retrieve detailed transaction data, including decoded information for enhanced readability.

## Other Services

### Webhook Subscription

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#webhook-subscription-service`

<div className="oklink-migration-table">

| Service  | Moralis Equivalent | Documentation                                                                        |
| -------- | ------------------ | ------------------------------------------------------------------------------------ |
| Webhooks | Streams API        | [https://docs.moralis.com/streams-api/evm](https://docs.moralis.com/streams-api/evm) |

</div>

**Notes**: Moralis Streams API provides powerful real-time blockchain data capabilities, including filters, webhooks, and managed infrastructure.

### EVM RPC Data

**OKLink Endpoint**: `https://www.oklink.com/docs/en/#evm-rpc-data`

<div className="oklink-migration-table">

| Service | Moralis Equivalent | Documentation                                                            |
| ------- | ------------------ | ------------------------------------------------------------------------ |
| RPC     | Moralis RPC Nodes  | [https://docs.moralis.com/rpc-nodes](https://docs.moralis.com/rpc-nodes) |

</div>

**Notes**: Moralis provides reliable and high-performance RPC nodes across multiple blockchain networks.

## Beyond OKLink: Exclusive Moralis Capabilities

Moralis offers many additional endpoints and features not available in OKLink. Here are some of our most popular exclusive endpoints:

### Advanced Wallet Analysis

| Feature              | Endpoint                                                                | Documentation                                                                                         |
| -------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Wallet History**   | `GET https://deep-index.moralis.io/api/v2.2/wallets/:address/history`   | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-history)   |
| **Wallet Approvals** | `GET https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-token-approvals)      |
| **Wallet Net Worth** | `GET https://deep-index.moralis.io/api/v2.2/wallets/:address/net-worth` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-net-worth) |

### Token Analytics

| Feature                      | Endpoint                                                                             | Documentation                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **Token Holder Stats**       | `GET https://deep-index.moralis.io/api/v2.2/erc20/:token_address/holders/stats`      | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-token-holder-stats)       |
| **Historical Token Holders** | `GET https://deep-index.moralis.io/api/v2.2/erc20/:token_address/holders/historical` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-historical-token-holders) |

### Token Search & Discovery

| Feature             | Endpoint                                                     | Documentation                                                                             |
| ------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| **Search Tokens**   | `GET https://deep-index.moralis.io/api/v2.2/tokens/search`   | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/search-tokens)       |
| **Trending Tokens** | `GET https://deep-index.moralis.io/api/v2.2/tokens/trending` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-trending-tokens) |

### DEX and Pair Analytics

| Feature                         | Endpoint                                                                | Documentation                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Pair Stats**                  | `GET https://deep-index.moralis.io/api/v2.2/pairs/:address/stats`       | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-token-pair-stats)            |
| **Aggregated Token Pair Stats** | `GET https://deep-index.moralis.io/api/v2.2/:token_address/pairs/stats` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-aggregated-token-pair-stats) |

## Getting Started with Moralis

1. **Sign up for a Moralis account**: [https://admin.moralis.com/register](https://admin.moralis.com/register)
2. **Get your API key**: Navigate to the Web3 APIs section in your dashboard
3. **Update your API calls**: Replace OKLink endpoints with the corresponding Moralis endpoints
4. **Explore the documentation**: [https://docs.moralis.com/](https://docs.moralis.com/)

## Why Choose Moralis?

:::tip MIGRATION SUPPORT AVAILABLE
Moralis has a dedicated team to help you migrate smoothly from OKLink. [Contact our team](https://developers.moralis.com/) for personalized support and to learn about special developer discounts for teams transitioning from OKLink.
:::

### Trusted by Industry Leaders

Moralis APIs power some of the biggest names in the crypto space:

- MetaMask
- Kraken
- Blockchain.com
- And many other top wallets and applications

### Migration Support

Our dedicated migration team is ready to help OKLink users transition smoothly:

- Technical guidance to map your existing implementation
- Support with API key setup and configuration
- Best practices for optimizing API usage

### Developer Discounts

Contact our team today to learn about special pricing options available for teams migrating from OKLink.

Moralis is committed to providing a seamless transition for OKLink users with comprehensive support throughout your migration journey.
