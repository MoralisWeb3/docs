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

## API Endpoint Equivalence

SimpleHash endpoints can be easily mapped to Moralis equivalents. Below you'll find the mapping organized by API category.

### Quick Navigation

- **Token API**

  - [Token & Prices](#token--prices) (`api.simplehash.com/api/v0/fungibles/assets`)
  - [Token Balances by Wallet(s)](#token-balances-by-wallets) (`api.simplehash.com/api/v0/fungibles/balances`)
  - [Token Top Holders](#token-top-holders) (`api.simplehash.com/api/v0/fungibles/top_wallets`)
  - [Swaps & Transfers by Wallet(s)](#swaps--transfers-by-wallets) (`api.simplehash.com/api/v0/fungibles/transfers/wallets`)
  - [Swaps & Transfers by Token](#swaps--transfers-by-token) (`api.simplehash.com/api/v0/fungibles/transfers/wallets`)
  - [Historical Token Prices](#historical-token-prices) (`api.simplehash.com/api/v0/fungibles/prices_v2/{fungible_id}`)
  - [Historical Token OHLC](#historical-token-ohlc) (`api.simplehash.com/api/v0/fungibles/ohlc/{fungible_id}`)
  - [Native Token Balances by Wallet(s)](#native-token-balances-by-wallets) (`api.simplehash.com/api/v0/native_tokens/balances`)

- **NFT API**

  - [NFT by Token ID](#nft-by-token-id) (`api.simplehash.com/api/v0/nfts/{chain}/{contract_address}/{token_id}`)
  - [NFTs by Contract](#nfts-by-contract) (`api.simplehash.com/api/v0/nfts/{chain}/{contract_address}`)
  - [NFTs by Wallet(s)](#nfts-by-wallets) (`api.simplehash.com/api/v0/nfts/owners_v2`)
  - [Sales & Transfers by Wallet(s)](#sales--transfers-by-wallets) (`api.simplehash.com/api/v0/nfts/transfers/wallets`)
  - [Sales & Transfers by NFT](#sales--transfers-by-nft) (`api.simplehash.com/api/v0/nfts/transfers/{chain}/{contract_address}/{token_id}`)
  - [Sales & Transfers by Contract](#sales--transfers-by-contract) (`api.simplehash.com/api/v0/nfts/transfers/{chain}/{contract_address}`)
  - [Owners by NFT](#owners-by-nft) (`api.simplehash.com/api/v0/nfts/owners/{chain}/{contract_address}/{token_id}`)
  - [Owners by Contract](#owners-by-contract) (`api.simplehash.com/api/v0/nfts/owners/{chain}/{contract_address}/`)
  - [Ownership Summary by Wallet(s)](#ownership-summary-by-wallets) (`api.simplehash.com/api/v0/nfts/contracts`)
  - [Collections by Wallet(s)](#collections-by-wallets) (`api.simplehash.com/api/v0/nfts/collections_by_wallets_v2`)
  - [Collections by Contract](#collections-by-contract) (`api.simplehash.com/api/v0/nfts/collections/{chain}/{contract_address}`)
  - [Collection Historical Floor Prices](#collection-historical-floor-prices) (`api.simplehash.com/api/v0/nfts/floor_prices_v2/collection/{collection_id}/{granularity}`)
  - [Top Collections](#top-collections) (`api.simplehash.com/api/v0/nfts/collections/top_v2`)
  - [Trending Collections](#trending-collections) (`api.simplehash.com/api/v0/nfts/collections/trending`)
  - [Traits by Collection](#traits-by-collection) (`api.simplehash.com/api/v0/nfts/traits/collection/{collection_id}`)
  - [Wallet Valuation](#wallet-valuation) (`api.simplehash.com/api/v0/nfts/owners/value`)
  - [Refresh NFT Metadata](#refresh-nft-metadata) (`api.simplehash.com/api/v0/nfts/refresh/{chain}/{contract_address}/{token_id}`)
  - [Refresh Contract Metadata](#refresh-contract-metadata) (`api.simplehash.com/reference/refresh-contract-metadata`)

- **Name Resolution**

  - [ENS Lookup](#ens-lookup) (`api.simplehash.com/api/v0/ens/lookup`)
  - [Reverse ENS Lookup](#reverse-ens-lookup) (`api.simplehash.com/api/v0/ens/reverse_lookup`)

- **Real-time Data**
  - [Webhooks](#webhooks) (Moralis Streams API equivalent)

### Token API

#### Token & Prices

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/fungibles/assets`

<div className="simplehash-migration-table">

| Chain  | Moralis Equivalent        | Moralis URL                                                       | Documentation                                                                                         |
| ------ | ------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| EVM    | Get Token Price           | `https://deep-index.moralis.io/api/v2.2/erc20/:address/price`     | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/price/get-token-price)           |
| EVM    | Get Multiple Token Prices | `https://deep-index.moralis.io/api/v2.2/erc20/prices`             | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/price/get-multiple-token-prices) |
| Solana | Get Token Price           | `https://solana-gateway.moralis.io/token/:network/:address/price` | [Documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-token-price)          |

</div>

**Notes**: Moralis also supports historical price lookups by block number and returns additional metadata like links.

#### Token Balances by Wallet(s)

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/fungibles/balances?chains={chains}&wallet_addresses={wallet_addresses}`

<div className="simplehash-migration-table">

| Chain  | Moralis Equivalent   | Moralis URL                                                             | Documentation                                                                                                    |
| ------ | -------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| EVM    | Get Token Balances   | `https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens`        | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-token-balances-price) |
| Solana | Get Wallet Portfolio | `https://solana-gateway.moralis.io/account/:network/:address/portfolio` | [Documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-native-and-spl-balances)             |
| Solana | Get Token Balances   | `https://solana-gateway.moralis.io/account/:network/:address/tokens`    | [Documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-spl-token-balances)                  |

</div>

#### Token Top Holders

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/fungibles/top_wallets`

<div className="simplehash-migration-table">

| Chain  | Moralis Equivalent       | Moralis URL                                                          | Documentation                                                                           |
| ------ | ------------------------ | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| EVM    | Get Token Holders        | `https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-token-holders) |
| Solana | Coming Soon (March 2025) | -                                                                    | -                                                                                       |

</div>

**Notes**: Moralis provides additional endpoints including ERC20 Token Holder Stats and ERC20 Token Holders Timeseries.

#### Swaps & Transfers by Wallet(s)

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/fungibles/transfers/wallets?chains={chains}&wallet_addresses={wallet_addresses}`

<div className="simplehash-migration-table">

| Chain  | Moralis Equivalent  | Moralis URL                                                               | Documentation                                                                                     |
| ------ | ------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| EVM    | Get Swaps by Wallet | `https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps`           | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-swaps-by-wallet-address) |
| Solana | Get Swaps by Wallet | `https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps` | [Documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-wallet-swap-txs)      |

</div>

**Notes**: Moralis offers additional related endpoints including ERC20 token transfers by wallet and the comprehensive wallet history API.

#### Swaps & Transfers by Token

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/fungibles/transfers/wallets?chains={chains}&wallet_addresses={wallet_addresses}`

<div className="simplehash-migration-table">

| Chain  | Moralis Equivalent         | Moralis URL                                                            | Documentation                                                                                       |
| ------ | -------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| EVM    | Get Swaps by Token Address | `https://deep-index.moralis.io/api/v2.2/erc20/:address/swaps`          | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-swaps-by-token-address)    |
| Solana | Get Swaps by Token Address | `https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps` | [Documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-swaps-by-token-address) |

</div>

**Notes**: Moralis provides additional related endpoints including ERC20 token transfers by contract, swaps by pair address, and Solana swaps by pair address.

#### Historical Token Prices

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/fungibles/prices_v2/{fungible_id}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent        | Moralis URL                                                   | Documentation                                                                                         |
| ----- | ------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| EVM   | Get Token Price           | `https://deep-index.moralis.io/api/v2.2/erc20/:address/price` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/price/get-token-price)           |
| EVM   | Get Multiple Token Prices | `https://deep-index.moralis.io/api/v2.2/erc20/prices`         | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/price/get-multiple-token-prices) |

</div>

#### Historical Token OHLC

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/fungibles/ohlc/{fungible_id}`

<div className="simplehash-migration-table">

| Chain  | Moralis Equivalent        | Moralis URL                                                                 | Documentation                                                                                      |
| ------ | ------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| EVM    | Get OHLCV by Pair Address | `https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv`               | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-ohlcv-by-pair-address)    |
| Solana | Get OHLCV by Pair Address | `https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv` | [Documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-ohlcv-by-pair-address) |

</div>

#### Native Token Balances by Wallet(s)

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/native_tokens/balances?chains={chains}&wallet_addresses={wallet_addresses}`

<div className="simplehash-migration-table">

| Chain  | Moralis Equivalent                          | Moralis URL                                                           | Documentation                                                                                                    |
| ------ | ------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| EVM    | Get Native Balance by Wallet                | `https://deep-index.moralis.io/api/v2.2/:address/balance`             | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-native-balance)                         |
| EVM    | Get Native Balance for Multiple Wallets     | `https://deep-index.moralis.io/api/v2.2/wallets/balances`             | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-native-balances-for-addresses)          |
| EVM    | Get Native & ERC20 Token Balances by Wallet | `https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens`      | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-token-balances-price) |
| Solana | Get Native Token Balance by Wallet          | `https://solana-gateway.moralis.io/account/:network/:address/balance` | [Documentation](https://docs.moralis.com/web3-data-api/solana/reference/native-sol-balance)                      |

</div>

### NFT API

#### NFT by Token ID

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/{chain}/{contract_address}/{token_id}`

<div className="simplehash-migration-table">

| Chain  | Moralis Equivalent | Moralis URL                                                        | Documentation                                                                                 |
| ------ | ------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| EVM    | Get NFT Metadata   | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id`    | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-metadata)        |
| Solana | Get NFT Metadata   | `https://solana-gateway.moralis.io/nft/:network/:address/metadata` | [Documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-sol-nft-metadata) |

</div>

#### NFTs by Contract

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/{chain}/{contract_address}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent   | Moralis URL                                           | Documentation                                                                           |
| ----- | -------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| EVM   | Get NFTs by Contract | `https://deep-index.moralis.io/api/v2.2/nft/:address` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-contract-nfts) |

</div>

#### NFTs by Wallet(s)

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/owners_v2?chains={chains}&wallet_addresses={wallet_addresses}`

<div className="simplehash-migration-table">

| Chain  | Moralis Equivalent | Moralis URL                                                       | Documentation                                                                            |
| ------ | ------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| EVM    | Get NFTs by Wallet | `https://deep-index.moralis.io/api/v2.2/:address/nft`             | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-nfts)    |
| Solana | Get NFTs by Wallet | `https://solana-gateway.moralis.io/account/:network/:address/nft` | [Documentation](https://docs.moralis.com/web3-data-api/solana/reference/get-wallet-nfts) |

</div>

#### Sales & Transfers by Wallet(s)

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/transfers/wallets?chains={chains}&wallet_addresses={wallet_addresses}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent       | Moralis URL                                                           | Documentation                                                                                  |
| ----- | ------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| EVM   | Get NFT Trades by Wallet | `https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-trades-by-wallet) |

</div>

**Notes**: Moralis offers additional related endpoints including NFT transfers by wallet and comprehensive wallet history.

#### Sales & Transfers by NFT

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/transfers/{chain}/{contract_address}/{token_id}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent      | Moralis URL                                                            | Documentation                                                                                 |
| ----- | ----------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| EVM   | Get NFT Trades by Token | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/trades` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-trades-by-token) |

</div>

#### Sales & Transfers by Contract

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/transfers/{chain}/{contract_address}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent         | Moralis URL                                                  | Documentation                                                                        |
| ----- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| EVM   | Get NFT Trades by Contract | `https://deep-index.moralis.io/api/v2.2/nft/:address/trades` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-trades) |

</div>

#### Owners by NFT

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/owners/{chain}/{contract_address}/{token_id}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent         | Moralis URL                                                            | Documentation                                                                                 |
| ----- | -------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| EVM   | Get NFT Owners by Token ID | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-token-id-owners) |

</div>

#### Owners by Contract

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/owners/{chain}/{contract_address}/`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent         | Moralis URL                                                  | Documentation                                                                        |
| ----- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| EVM   | Get NFT Owners by Contract | `https://deep-index.moralis.io/api/v2.2/nft/:address/owners` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-owners) |

</div>

#### Ownership Summary by Wallet(s)

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/contracts?chains={chains}&wallet_addresses={wallet_addresses}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent            | Moralis URL                                                       | Documentation                                                                                    |
| ----- | ----------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| EVM   | Get NFT Collections by Wallet | `https://deep-index.moralis.io/api/v2.2/:address/nft/collections` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-nft-collections) |

</div>

**Notes**: Moralis supports filtering by token address(es).

#### Collections by Wallet(s)

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/collections_by_wallets_v2?chains={chains}&wallet_addresses={wallet_addresses}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent            | Moralis URL                                                       | Documentation                                                                                    |
| ----- | ----------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| EVM   | Get NFT Collections by Wallet | `https://deep-index.moralis.io/api/v2.2/:address/nft/collections` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-nft-collections) |

</div>

#### Collections by Contract

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/collections/{chain}/{contract_address}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent          | Moralis URL                                                    | Documentation                                                                                   |
| ----- | --------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| EVM   | Get NFT Collection Metadata | `https://deep-index.moralis.io/api/v2.2/nft/:address/metadata` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-contract-metadata) |

</div>

#### Collection Historical Floor Prices

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/floor_prices_v2/collection/{collection_id}/{granularity}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent                         | Moralis URL                                                                  | Documentation                                                                                                    |
| ----- | ------------------------------------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| EVM   | Get NFT Historical Floor Price by Contract | `https://deep-index.moralis.io/api/v2.2/nft/:address/floor-price/historical` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-historical-floor-price-by-contract) |

</div>

**Notes**: Floor prices are supported on Ethereum & Base. Moralis also offers additional endpoints for NFT Floor Price by Contract, NFT Floor Price by Token ID, Sale Prices by Contract, and Sale Prices by Token ID.

#### Trait Floor Prices by NFT

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent | Moralis URL                                                          | Documentation                                                                            |
| ----- | ------------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| EVM   | Get NFTs by Traits | `https://deep-index.moralis.io/api/v2.2/nft/:address/nfts-by-traits` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nfts-by-traits) |

</div>

#### Top Collections

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/collections/top_v2`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent                    | Moralis URL                                                               | Documentation                                                                                               |
| ----- | ------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| EVM   | Get Top NFT Collections by Market Cap | `https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-top-nft-collections-by-market-cap) |

</div>

**Notes**: Currently only supports Ethereum.

#### Trending Collections

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/collections/trending`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent                        | Moralis URL                                                                   | Documentation                                                                                                   |
| ----- | ----------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| EVM   | Get Top NFT Collections by Trading Volume | `https://deep-index.moralis.io/api/v2.2/market-data/nfts/hottest-collections` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-top-nft-collections-by-trading-volume) |

</div>

**Notes**: Currently only supports Ethereum.

#### Traits by Collection

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/traits/collection/{collection_id}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent           | Moralis URL                                                  | Documentation                                                                                      |
| ----- | ---------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| EVM   | Get NFT Traits by Collection | `https://deep-index.moralis.io/api/v2.2/nft/:address/traits` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-traits-by-collection) |

</div>

**Notes**: Moralis also offers an endpoint to get NFTs by traits.

#### Wallet Valuation

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/owners/value`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent  | Moralis URL                                                         | Documentation                                                                                         |
| ----- | ------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| EVM   | Get Wallet Networth | `https://deep-index.moralis.io/api/v2.2/wallets/:address/net-worth` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/get-wallet-net-worth) |

</div>

**Notes**: Currently calculates based on fungibles.

#### Refresh NFT Metadata

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/nfts/refresh/{chain}/{contract_address}/{token_id}`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent  | Moralis URL                                                                     | Documentation                                                                         |
| ----- | ------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| EVM   | Resync NFT Metadata | `https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/resync-metadata) |

</div>

#### Refresh Contract Metadata

**SimpleHash Endpoint**: `https://docs.simplehash.com/reference/refresh-contract-metadata`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent            | Moralis URL                   | Documentation                 |
| ----- | ----------------------------- | ----------------------------- | ----------------------------- |
| EVM   | Available as Premium Endpoint | Available as Premium Endpoint | Available as Premium Endpoint |

</div>

### Name Resolution

#### ENS Lookup

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/ens/lookup`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent | Moralis URL                                                  | Documentation                                                                                       |
| ----- | ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| EVM   | Resolve ENS Domain | `https://deep-index.moralis.io/api/v2.2/resolve/ens/:domain` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/resolve-ens-domain) |

</div>

**Notes**: Moralis offers additional endpoints for resolving Unstoppable Domains and other resolution services.

#### Reverse ENS Lookup

**SimpleHash Endpoint**: `https://api.simplehash.com/api/v0/ens/reverse_lookup`

<div className="simplehash-migration-table">

| Chain | Moralis Equivalent | Moralis URL                                                       | Documentation                                                                                    |
| ----- | ------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| EVM   | Resolve Address    | `https://deep-index.moralis.io/api/v2.2/resolve/:address/reverse` | [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/wallet-api/resolve-address) |

</div>

**Notes**: Moralis provides additional endpoints for getting Unstoppable Domain by Address and Address by Unstoppable Domain.

### Real-time Data

#### Webhooks

<div className="simplehash-migration-table">

| Feature          | Moralis Equivalent | Moralis URL                   | Documentation                                             |
| ---------------- | ------------------ | ----------------------------- | --------------------------------------------------------- |
| Real-time Events | Streams API        | N/A - Setup through dashboard | [Documentation](https://docs.moralis.com/streams-api/evm) |

</div>

**Notes**: Moralis Streams API provides powerful real-time blockchain data capabilities, including filters, webhooks, and managed infrastructure. Unlike SimpleHash, Moralis offers comprehensive support for real-time blockchain events tracking.

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

- **Token Price**: Get current price for any token

  ```
  GET https://deep-index.moralis.io/api/v2.2/erc20/:address/price
  ```

  [Documentation](https://docs.moralis.com/web3-data-api/evm/reference/get-token-price)

- **Multiple Token Prices**: Get prices for multiple tokens in one call
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
