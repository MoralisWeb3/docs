---
title: "Migration Guide | Switch from Reservoir to Moralis"
description: "Reservoir is sunsetting its API on October 15th, 2025. Any project using Reservoir API needs a new provider before then. Migrate to Moralis APIs in 4 simple steps!"
sidebar_label: "Migrating from Reservoir to Moralis"
slug: "/web3-data-api/evm/reservoir-migration-guide"
sidebar_position: 9
---

# Migrating from Reservoir to Moralis

:::warning URGENT MIGRATION NEEDED
Reservoir is sunsetting their NFT APIs on October 15th, 2025. Applications and platforms using Reservoir API need to migrate as soon as possible to avoid service disruptions. Moralis APIs offer equivalent functionality, making migration straightforward.
:::

With Reservoir deprecating their API offering, Moralis provides a comprehensive alternative with equivalent functionality. This guide will help you seamlessly transition your projects from Reservoir to Moralis.

## Quick Reference Guide

Make use of the table below to quickly find the Moralis equivalent for each Reservoir endpoint.

### NFT Data API

| Feature             | Reservoir Endpoint                                        | Moralis Equivalent              |
| ------------------- | --------------------------------------------------------- | ------------------------------- |
| Get Multiple NFTs   | `nft.reservoir.tools/reference/gettokensv7`               | [Details](#get-multiple-nfts)   |
| NFT Prices          | `nft.reservoir.tools/reference/gettokensfloorv1`          | [Details](#nft-prices)          |
| Get Token IDs       | `nft.reservoir.tools/reference/gettokensidsv1`            | [Details](#get-token-ids)       |
| Refresh Metadata    | `nft.reservoir.tools/reference/posttokensrefreshv2`       | [Details](#refresh-metadata)    |
| Collection Activity | `nft.reservoir.tools/reference/getcollectionsactivityv6`  | [Details](#collection-activity) |
| User Activity       | `nft.reservoir.tools/reference/getusersactivityv6`        | [Details](#user-activity)       |
| Token Activity      | `nft.reservoir.tools/reference/gettokenstokenactivityv5`  | [Details](#token-activity)      |
| Sales               | `nft.reservoir.tools/reference/getsalesv6`                | [Details](#sales)               |
| NFT Transfers       | `nft.reservoir.tools/reference/gettransfersbulkv2`        | [Details](#nft-transfers)       |
| User Tokens         | `nft.reservoir.tools/reference/getusersusertokensv10`     | [Details](#user-tokens)         |
| User Collections    | `nft.reservoir.tools/reference/getusersusercollectionsv4` | [Details](#user-collections)    |
| Owners              | `nft.reservoir.tools/reference/getownersv2`               | [Details](#owners)              |
| Stats               | `nft.reservoir.tools/reference/getstatsv1`                | [Details](#stats)               |

## Endpoint Details

### Get Multiple NFTs

| Chain | Moralis Equivalent | Moralis URL                                              |
| ----- | ------------------ | -------------------------------------------------------- |
| EVM   | Get Multiple NFTs  | `https://deep-index.moralis.io/api/v2.2/nft/getMultiple` |

### NFT Prices

| Chain | Moralis Equivalent   | Moralis URL                                           |
| ----- | -------------------- | ----------------------------------------------------- |
| EVM   | Get NFTs by Contract | `https://deep-index.moralis.io/api/v2.2/nft/:address` |

### Get Token IDs

| Chain | Moralis Equivalent | Moralis URL                                              |
| ----- | ------------------ | -------------------------------------------------------- |
| EVM   | Get Multiple NFTs  | `https://deep-index.moralis.io/api/v2.2/nft/getMultiple` |

### Refresh Metadata

| Chain | Moralis Equivalent  | Moralis URL                                                                     |
| ----- | ------------------- | ------------------------------------------------------------------------------- |
| EVM   | Resync NFT Metadata | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync` |

**Note**: Refresh entire collection metadata is available as a premium feature.

### Collection Activity

| Chain | Moralis Equivalent         | Moralis URL                                                     |
| ----- | -------------------------- | --------------------------------------------------------------- |
| EVM   | Get NFT Contract Transfers | `https://deep-index.moralis.io/api/v2.2/nft/:address/transfers` |
| EVM   | Get NFT Trades             | `https://deep-index.moralis.io/api/v2.2/nft/:address/trades`    |

### User Activity

| Chain | Moralis Equivalent       | Moralis URL                                                           |
| ----- | ------------------------ | --------------------------------------------------------------------- |
| EVM   | Get NFT Trades by Wallet | `https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades` |
| EVM   | Get Wallet NFT Transfers | `https://deep-index.moralis.io/api/v2.2/:address/nft/transfers`       |
| EVM   | Get Wallet History       | `https://deep-index.moralis.io/api/v2.2/wallets/:address/history`     |

### Token Activity

| Chain | Moralis Equivalent      | Moralis URL                                                               |
| ----- | ----------------------- | ------------------------------------------------------------------------- |
| EVM   | Get NFT Transfers       | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers` |
| EVM   | Get NFT Trades by Token | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/trades`    |

### Sales

| Chain | Moralis Equivalent      | Moralis URL                                                            |
| ----- | ----------------------- | ---------------------------------------------------------------------- |
| EVM   | Get NFT Trades by Token | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/trades` |
| EVM   | Get NFT Trades          | `https://deep-index.moralis.io/api/v2.2/nft/:address/trades`           |

### NFT Transfers

| Chain | Moralis Equivalent         | Moralis URL                                                               |
| ----- | -------------------------- | ------------------------------------------------------------------------- |
| EVM   | Get NFT Contract Transfers | `https://deep-index.moralis.io/api/v2.2/nft/:address/transfers`           |
| EVM   | Get NFT Transfers          | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers` |
| EVM   | Get Wallet NFT Transfers   | `https://deep-index.moralis.io/api/v2.2/:address/nft/transfers`           |

### User Tokens

| Chain | Moralis Equivalent | Moralis URL                                                    |
| ----- | ------------------ | -------------------------------------------------------------- |
| EVM   | Get Wallet NFTs    | `https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts` |

### User Collections

| Chain | Moralis Equivalent         | Moralis URL                                                               |
| ----- | -------------------------- | ------------------------------------------------------------------------- |
| EVM   | Get Wallet NFT Collections | `https://deep-index.moralis.io/api/v2.2/wallets/:address/nft-collections` |

### Owners

| Chain | Moralis Equivalent      | Moralis URL                                                            |
| ----- | ----------------------- | ---------------------------------------------------------------------- |
| EVM   | Get NFT Owners          | `https://deep-index.moralis.io/api/v2.2/nft/:address/owners`           |
| EVM   | Get NFT Token ID Owners | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners` |

### Stats

| Chain | Moralis Equivalent           | Moralis URL                                                           |
| ----- | ---------------------------- | --------------------------------------------------------------------- |
| EVM   | Get NFT Contract Sale Prices | `https://deep-index.moralis.io/api/v2.2/nft/:address/sales`           |
| EVM   | Get NFT Sale Prices          | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/sales` |

## Real-time Data

### Webhooks

<div className="reservoir-migration-table">

| Feature          | Moralis Equivalent | Moralis URL                   | Documentation                                             |
| ---------------- | ------------------ | ----------------------------- | --------------------------------------------------------- |
| Real-time Events | Streams API        | N/A - Setup through dashboard | [Documentation](https://docs.moralis.com/streams-api/evm) |

</div>

**Notes**: Moralis Streams API provides powerful real-time blockchain data capabilities, including filters, webhooks, and managed infrastructure.

## Beyond Reservoir: Exclusive Moralis Capabilities

Moralis offers many additional endpoints and features not available in Reservoir. Here are some of our most popular exclusive endpoints:

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

### NFT Advanced Capabilities

- **Enriched Metadata**: Access fully enriched and normalized metadata on NFT collections and individual tokens through a single API call
- **Real-time NFT Transfer Data**: Get all the latest NFT transfer data for specific NFTs, wallets, or track real-time transfers
- **Advanced Spam Detection**: Protect your platform from undesirable NFTs with collection spam indicators
- **On-chain Pricing Data**: Incorporate on-chain pricing data including last sale prices and floor prices
- **Optimized Image Previews**: Benefit from dynamically sized image previews and conversions to user-friendly formats

## Getting Started with Moralis

1. **Sign up for a Moralis account**: [https://admin.moralis.com/register](https://admin.moralis.com/register)
2. **Get your API key**: Navigate to the Web3 APIs section in your dashboard
3. **Update your API calls**: Replace Reservoir endpoints with the corresponding Moralis endpoints
4. **Explore the documentation**: [https://docs.moralis.com/](https://docs.moralis.com/)

:::tip MIGRATION SUPPORT AVAILABLE
Moralis has a dedicated team to help you migrate smoothly from Reservoir. [Contact our team](https://developers.moralis.com/) for personalized support.
:::
