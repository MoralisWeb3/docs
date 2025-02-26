---
title: "Migrating from SimpleHash to Moralis"
slug: "/web3-data-api/evm/simplehash-migration-guide"
sidebar_position: 8
---

# Migrating from SimpleHash to Moralis

With SimpleHash deprecating their API offering, Moralis provides a comprehensive alternative with equivalent functionality and additional capabilities. This guide will help you seamlessly transition your projects from SimpleHash to Moralis.

:::warning URGENT MIGRATION NEEDED
SimpleHash is shutting down ALL THEIR APIs. Wallet providers and applications using SimpleHash API need to migrate as soon as possible to avoid service disruptions. Moralis APIs are almost an exact match, making migration straightforward.
:::

## API Endpoint Comparison

The table below maps SimpleHash endpoints to their Moralis equivalents:

<div className="simplehash-migration-table">

| Feature                            | SimpleHash Endpoint                                                                                                    | Moralis Equivalent                                                                                                         | Moralis URL                                                                                                                                                                                                                                | Moralis Documentation                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Token & Prices**                 | `https://api.simplehash.com/api/v0/fungibles/assets`                                                                   | EVM: Get ERC20 Token Price<br/>EVM: Get Multiple ERC20 Token Prices<br/>Solana: Get Token Price                            | EVM: `https://deep-index.moralis.io/api/v2.2/erc20/:address/price`<br/>EVM: `https://deep-index.moralis.io/api/v2.2/erc20/prices`<br/>Solana: `https://solana-gateway.moralis.io/token/:network/:address/price`                            | [Get Token Price](https://docs.moralis.com/web3-data-api/evm/reference/price/get-token-price)<br/>[Get Multiple Token Prices](https://docs.moralis.com/web3-data-api/evm/reference/price/get-multiple-token-prices)<br/>[Get SOL Token Price](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-token-price)                                       |
| **Token Balances by Wallet(s)**    | `https://api.simplehash.com/api/v0/fungibles/balances?chains={chains}&wallet_addresses={wallet_addresses}`             | EVM: Get Native & ERC20 Token Balances by Wallet<br/>Solana: Get Wallet Portfolio<br/>Solana: Get Token Balances by Wallet | EVM: `https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens`<br/>Solana: `https://solana-gateway.moralis.io/account/:network/:address/portfolio`<br/>Solana: `https://solana-gateway.moralis.io/account/:network/:address/tokens` | [Get Wallet Token Balances](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-token-balances-price)<br/>[Get Native and SPL Balances](https://docs.moralis.com/web3-data-api/solana/reference/get-native-and-spl-balances)<br/>[Get SPL Token Balances](https://docs.moralis.com/web3-data-api/solana/reference/get-spl-token-balances) |
| **Token Top Holders**              | `https://api.simplehash.com/api/v0/fungibles/top_wallets`                                                              | EVM: Get ERC20 Token Holders<br/>Solana: Launching March 2025                                                              | EVM: `https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners`<br/>Solana: Launching March 2025                                                                                                                                 | [Get Token Holders](https://docs.moralis.com/web3-data-api/evm/reference/get-token-holders)<br/>Solana: Launching March 2025                                                                                                                                                                                                                                     |
| **Swaps & Transfers by Wallet(s)** | `https://api.simplehash.com/api/v0/fungibles/transfers/wallets?chains={chains}&wallet_addresses={wallet_addresses}`    | EVM: Get Swaps by Wallet Address<br/>Solana: Get Swaps by Wallet Address                                                   | EVM: `https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps`<br/>Solana: `https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps`                                                                                 | [Get Swaps by Wallet Address](https://docs.moralis.com/web3-data-api/evm/reference/get-swaps-by-wallet-address)<br/>[Get Wallet Swap Txs](https://docs.moralis.com/web3-data-api/solana/reference/get-wallet-swap-txs)                                                                                                                                           |
| **NFT by Token ID**                | `https://api.simplehash.com/api/v0/nfts/{chain}/{contract_address}/{token_id}`                                         | EVM: Get NFT metadata<br/>Solana: Get NFT metadata                                                                         | EVM: `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id`<br/>Solana: `https://solana-gateway.moralis.io/nft/:network/:address/metadata`                                                                                        | [Get NFT Metadata](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-metadata)<br/>[Get SOL NFT Metadata](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nft-metadata)                                                                                                                                                               |
| **NFTs by Wallet(s)**              | `https://api.simplehash.com/api/v0/nfts/owners_v2?chains={chains}&wallet_addresses={wallet_addresses}`                 | EVM: Get NFTs by wallet<br/>Solana: Get NFTs by wallet                                                                     | EVM: `https://deep-index.moralis.io/api/v2.2/:address/nft`<br/>Solana: `https://solana-gateway.moralis.io/account/:network/:address/nft`                                                                                                   | [Get Wallet NFTs](https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-nfts)<br/>[Get Wallet NFTs](https://docs.moralis.com/web3-data-api/solana/reference/get-wallet-nfts)                                                                                                                                                                           |
| **Collections by Wallet(s)**       | `https://api.simplehash.com/api/v0/nfts/collections_by_wallets_v2?chains={chains}&wallet_addresses={wallet_addresses}` | EVM: Get NFT collections by wallet                                                                                         | EVM: `https://deep-index.moralis.io/api/v2.2/:address/nft/collections`                                                                                                                                                                     | [Get Wallet NFT Collections](https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-nft-collections)                                                                                                                                                                                                                                                    |
| **ENS Lookup**                     | `https://api.simplehash.com/api/v0/ens/lookup`                                                                         | EVM: Get Address by ENS Domain                                                                                             | EVM: `https://deep-index.moralis.io/api/v2.2/resolve/ens/:domain`                                                                                                                                                                          | [Resolve ENS Domain](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/resolve-ens-domain)                                                                                                                                                                                                                                                         |
| **Reverse ENS Lookup**             | `https://api.simplehash.com/api/v0/ens/reverse_lookup`                                                                 | EVM: Get ENS Domain by Address                                                                                             | EVM: `https://deep-index.moralis.io/api/v2.2/resolve/:address/reverse`                                                                                                                                                                     | [Resolve Address](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/resolve-address)                                                                                                                                                                                                                                                               |

</div>

## Beyond SimpleHash: Exclusive Moralis Capabilities

Moralis offers many additional endpoints and features not available in SimpleHash. Here are some of our most popular exclusive endpoints:

### Advanced Wallet Analysis

- **Wallet History**: Get comprehensive transaction history across multiple chains

  ```
  GET https://deep-index.moralis.io/api/v2.2/wallets/:address/history
  ```

  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-history)

- **Token Transfers by Wallet**: Get detailed ERC20 token transfers

  ```
  GET https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers
  ```

  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-token-transfers)

- **Wallet Approvals**: Get all token approvals by wallet
  ```
  GET https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals
  ```
  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-token-approvals)

### Token Analytics

- **Token Holder Stats**: Get statistical information about token holders

  ```
  GET https://deep-index.moralis.io/api/v2.2/erc20/:token_address/holders/stats
  ```

  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-token-holder-stats)

- **Historical Token Holders**: Track holder changes over time
  ```
  GET https://deep-index.moralis.io/api/v2.2/erc20/:token_address/holders/historical
  ```
  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-historical-token-holders)

### Token Search & Discovery

- **Search Tokens**: Powerful token search functionality

  ```
  GET https://deep-index.moralis.io/api/v2.2/tokens/search
  ```

  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/search-tokens)

- **Trending Tokens**: Get the most trending tokens
  ```
  GET https://deep-index.moralis.io/api/v2.2/tokens/trending
  ```
  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-trending-tokens)

### Price & OHLCV Data

- **OHLCV Candlesticks**: Get detailed OHLCV candlestick data

  ```
  GET https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv
  ```

  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-ohlcv-by-pair-address)

- **Multiple Token Prices**: Get prices for multiple tokens in one call

  ```
  GET https://deep-index.moralis.io/api/v2.2/erc20/prices
  ```

  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-multiple-token-prices)

- **Token Price**: Get current price for any token
  ```
  GET https://deep-index.moralis.io/api/v2.2/erc20/:address/price
  ```
  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-token-price)Multiple Token Prices\*\*: Get prices for multiple tokens in one call
  ```
  GET https://deep-index.moralis.io/api/v2.2/erc20/prices
  ```
  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-multiple-token-prices)

### DEX and Pair Analytics

- **Pair Stats**: Get comprehensive statistics for token pairs

  ```
  GET https://deep-index.moralis.io/api/v2.2/pairs/:address/stats
  ```

  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-token-pair-stats)

- **Get Aggregated Token Pair Stats**: Get aggregated statistics across pairs
  ```
  GET https://deep-index.moralis.io/api/v2.2/:token_address/pairs/stats
  ```
  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-aggregated-token-pair-stats)

### NFT Advanced Capabilities

- **Enriched Metadata**: Access fully enriched and normalized metadata on NFT collections and individual tokens through a single API call
- **Real-time NFT Transfer Data**: Get all the latest NFT transfer data for specific NFTs, wallets, or track real-time transfers
- **Advanced Spam Detection**: Protect your platform from undesirable NFTs with collection spam indicators
- **On-chain Pricing Data**: Incorporate on-chain pricing data including last sale prices and floor prices
- **Optimized Image Previews**: Benefit from dynamically sized image previews and conversions to user-friendly formats

## Getting Started with Moralis

1. **Sign up for a Moralis account**: [https://admin.moralis.com/register](https://admin.moralis.com/register)
2. **Get your API key**: Navigate to the Web3 APIs section in your dashboard
3. **Update your API calls**: Replace SimpleHash endpoints with the corresponding Moralis endpoints
4. **Explore the documentation**: [https://docs.moralis.com/](https://docs.moralis.com/)

## Why Choose Moralis?

:::tip MIGRATION SUPPORT AVAILABLE
Moralis has a dedicated team to help you migrate smoothly from SimpleHash. [Contact our team](https://developers.moralis.com/) for personalized support and to learn about special developer discounts for teams transitioning from SimpleHash.
:::

### Trusted by Industry Leaders

Moralis APIs power some of the biggest names in the crypto space:

- MetaMask
- Kraken
- Blockchain.com
- And many other top wallets and applications

### Migration Support

Our dedicated migration team is ready to help SimpleHash users transition smoothly:

- Technical guidance to map your existing implementation
- Support with API key setup and configuration
- Best practices for optimizing API usage

### Developer Discounts

Contact our team today to learn about special pricing options available for teams migrating from SimpleHash.

Moralis is committed to providing a seamless transition for SimpleHash users with comprehensive support throughout your migration journey.
