---
title: "EVM API"
sidebar_label: "Overview"
sidebar_position: 1
slug: "/web3-data-api/evm/reference"
description: "Get started on Moralis Enterprise-Grade Web3 API Reference."
sidebar_class_name: "sidebar-api-reference"
---

This section contains a full list of all methods within the EVM Web3 data.

:::tip Swagger Interface
https://deep-index.moralis.io/api-docs-2.2/
:::

## Full List of APIs by Category

Find your favorite method by selecting one of the following categories:

- [Wallet API](#wallet-api)
- [NFT API](#nft-api)
- [Token API](#token-api)
- [DeFi API](#defi-api)
- [Price API](#price-api)
- [Blockchain API](#blockchain-api)
- [Utils](#utils)

## Wallet API

Select what you want to achieve:

- [Get Wallet History](#get-wallet-history)
- [Get Wallet Token Balances](#get-wallet-token-balances)
- [Get Wallet Token Approvals](#get-wallet-token-approvals)
- [Get Wallet NFT Balances](#get-wallet-nfts)
- [Get Wallet DeFi Positions](#get-wallet-defi-positions)
- [Get Wallet Net-worth](#get-wallet-net-worth)
- [Get Wallet PnL](#get-wallet-pnl)
- [Get Wallet Details](#get-wallet-details)
- [Get Wallet Domains](#get-wallet-domains)

### Get Wallet History

| No. | Method                         | Description                        | API Reference                                                                                      | URL                                                                                                                                        |
| --- | ------------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getWalletHistory`             | Get full wallet history            | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-history)                 |                                                                                                                                            |
| 2   | `getWalletTransactions`        | Get native transactions by wallet  | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-transactions-by-wallet)         | [https://deep-index.moralis.io/api/v2.2/:address](https://deep-index.moralis.io/api/v2.2/:address)                                         |
| 3   | `getWalletTransactionsVerbose` | Get decoded transactions by wallet | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-decoded-transactions-by-wallet) | [https://deep-index.moralis.io/api/v2.2/:address/verbose](https://deep-index.moralis.io/api/v2.2/:address/verbose)                         |
| 4   | `getWalletTokenTransfers`      | Get ERC20 transfers by wallet      | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-token-transfers)         | [https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers](https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers)         |
| 5   | `getWalletNFTTransfers`        | Get NFT transfers by wallet        | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-nft-transfers)           | [https://deep-index.moralis.io/api/v2.2/:address/nft/transfers](https://deep-index.moralis.io/api/v2.2/:address/nft/transfers)             |
| 6   | `getNFTTradesByWallet`         | Get NFT trades by wallet           | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-nft-trades-by-wallet)           | [https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades](https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades) |

### Get Wallet Token Balances

| No. | Method                          | Description                                          | API Reference                                                                                   | URL                                                                                                                              |
| --- | ------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 7   | `getWalletTokenBalances`        | Get ERC20 token balance by wallet                    | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-token-balances-by-wallet)    | [https://deep-index.moralis.io/api/v2.2/:address/erc20](https://deep-index.moralis.io/api/v2.2/:address/erc20)                   |
| 8   | `getWalletTokenBalancesPrices`  | Get Native & ERC20 token balances & prices by wallet | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-token-balances-price) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens](https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens) |
| 9   | `getNativeBalance`              | Get native balance by wallet                         | [Method Documentation](/web3-data-api/evm/reference/get-native-balance)                         | [https://deep-index.moralis.io/api/v2.2/:address/balance](https://deep-index.moralis.io/api/v2.2/:address/balance)               |
| 10  | `getNativeBalancesForAddresses` | Get native balance for multiple wallets              | [Method Documentation](/web3-data-api/evm/reference/get-native-balances-for-addresses)          | [https://deep-index.moralis.io/api/v2.2/wallets/balances](https://deep-index.moralis.io/api/v2.2/wallets/balances)               |

### Get Wallet Token Approvals

| No. | Method               | Description                   | API Reference                                                                              | URL                                                                                                                                          |
| --- | -------------------- | ----------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | `getWalletApprovals` | Get ERC20 approvals by wallet | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals) | [https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getWalletApprovals](https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals) |

### Get Wallet NFT Balances

| No. | Method                    | Description                   | API Reference                                                                                 | URL                                                                                                                                |
| --- | ------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 12  | `getWalletNFTs`           | Get NFTs by wallet            | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-nfts-by-wallet)            | [https://deep-index.moralis.io/api/v2.2/:address/nft](https://deep-index.moralis.io/api/v2.2/:address/nft)                         |
| 13  | `getWalletNFTCollections` | Get NFT collections by wallet | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-nft-collections-by-wallet) | [https://deep-index.moralis.io/api/v2.2/:address/nft/collections](https://deep-index.moralis.io/api/v2.2/:address/nft/collections) |

### Get Wallet DeFi Positions

| No. | Method                       | Description                                        | API Reference                                                                                  | URL                                                                                                                                                                  |
| --- | ---------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | `getDefiSummary`             | Get DeFi protocols by wallet                       | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-defi-summary)               | [https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/summary](https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/summary)                         |
| 15  | `getDefiPositionsSummary`    | Get DeFi positions by wallet                       | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-defi-positions-summary)     | [https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/positions](https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/positions)                     |
| 16  | `getDefiPositionsByProtocol` | Get detailed DeFi positions by wallet and protocol | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-defi-positions-by-protocol) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/:protocol/positions](https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/:protocol/positions) |

### Get Wallet Net-worth

| No. | Method              | Description          | API Reference                                                                        | URL                                                                                                                                    |
| --- | ------------------- | -------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | `getWalletNetWorth` | Get wallet net-worth | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-net-worth) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/net-worth](https://deep-index.moralis.io/api/v2.2/wallets/:address/net-worth) |

### Get Wallet PnL

| No. | Method                           | Description              | API Reference                                                                                    | URL                                                                                                                                                            |
| --- | -------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | `getWalletProfitabilitySummary ` | Get Wallet PnL Summary   | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-profitability-summary) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/profitability/summary](https://deep-index.moralis.io/api/v2.2/wallets/:address/profitability/summary) |
| 19  | `getWalletProfitability `        | Get Wallet PnL Breakdown | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-profitability)         | [https://deep-index.moralis.io/api/v2.2/wallets/:address/profitability](https://deep-index.moralis.io/api/v2.2/wallets/:address/profitability)                 |

### Get Wallet Details

| No. | Method                  | Description                  | API Reference                                                                                | URL                                                                                                                              |
| --- | ----------------------- | ---------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 20  | `getWalletActiveChains` | Get chain activity by wallet | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-chain-activity-by-wallet) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/chains](https://deep-index.moralis.io/api/v2.2/wallets/:address/chains) |
| 21  | `getWalletStats`        | Get wallet stats             | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-stats)             | [https://deep-index.moralis.io/api/v2.2/wallets/:address/stats](https://deep-index.moralis.io/api/v2.2/wallets/:address/stats)   |

### Get Wallet Domains

| No. | Method                   | Description                   | API Reference                                                                             | URL                                                                                                                                |
| --- | ------------------------ | ----------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 22  | `resolveAddress`         | ENS Lookup by Address         | [Method Documentation](/web3-data-api/evm/reference/wallet-api/resolve-address)           | [https://deep-index.moralis.io/api/v2.2/resolve/:address/reverse](https://deep-index.moralis.io/api/v2.2/resolve/:address/reverse) |
| 23  | `resolveENSDomain`       | ENS Lookup by Domain          | [Method Documentation](/web3-data-api/evm/reference/wallet-api/resolve-ens-domain)        | [https://deep-index.moralis.io/api/v2.2/resolve/ens/:domain](https://deep-index.moralis.io/api/v2.2/resolve/ens/:domain)           |
| 24  | `resolveAddressToDomain` | Unstoppable Lookup by Address | [Method Documentation](/web3-data-api/evm/reference/wallet-api/resolve-address-to-domain) | [https://deep-index.moralis.io/api/v2.2/resolve/:address/domain](https://deep-index.moralis.io/api/v2.2/resolve/:address/domain)   |
| 25  | `resolveDomain`          | Unstoppable Lookup by Domain  | [Method Documentation](/web3-data-api/evm/reference/wallet-api/resolve-domain)            | [https://deep-index.moralis.io/api/v2.2/resolve/:domain](https://deep-index.moralis.io/api/v2.2/resolve/:domain)                   |

## NFT API

Select what you want to achieve:

- [Get NFTs](#get-nfts)
- [Get NFT Metadata](#get-nft-metadata)
- [Get NFT Transfers](#get-nft-transfers)
- [Get NFT Collections](#get-nft-collections)
- [Get NFT Owners](#get-nft-owners)
- [Get NFT Prices](#get-nft-prices)
- [Get NFT Trades](#get-nft-trades)
- [Get NFT Stats](#get-nft-stats)
- [Get NFT Traits and Rarity](#get-nft-traits-and-rarity)

### Get NFTs

| No. | Method            | Description          | API Reference                                                          | URL                                                                                                                      | Spam Detection |
| --- | ----------------- | -------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 1   | `getWalletNFTs`   | Get NFTs by wallet   | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nfts)   | [https://deep-index.moralis.io/api/v2.2/:address/nft](https://deep-index.moralis.io/api/v2.2/:address/nft)               | ✅             |
| 2   | `getMultipleNFTs` | Get multiple NFTs    | [Method Documentation](/web3-data-api/evm/reference/get-multiple-nfts) | [https://deep-index.moralis.io/api/v2.2/nft/getMultipleNFTs](https://deep-index.moralis.io/api/v2.2/nft/getMultipleNFTs) | ✅             |
| 3   | `getContractNFTs` | Get NFTs by contract | [Method Documentation](/web3-data-api/evm/reference/get-contract-nfts) | [https://deep-index.moralis.io/api/v2.2/nft/:address](https://deep-index.moralis.io/api/v2.2/nft/:address)               | ✅             |

### Get NFT Metadata

| No. | Method           | Description     | API Reference                                                         | URL                                                                                                                                                            | Spam Detection |
| --- | ---------------- | --------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 4   | `reSyncMetadata` | Resync metadata | [Method Documentation](/web3-data-api/evm/reference/resync-metadata)  | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/metadata/resync) |                |
| 5   | `getNFTMetadata` | Get NFT data    | [Method Documentation](/web3-data-api/evm/reference/get-nft-metadata) | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id)                                 |                |

### Get NFT Transfers

| No. | Method                       | Description                            | API Reference                                                                        | URL                                                                                                                                                                  | Spam Detection |
| --- | ---------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 6   | `getWalletNFTTransfers`      | Get transfers by wallet                | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nft-transfers)        | [https://deep-index.moralis.io/api/v2.2/:address/nft/transfers](https://deep-index.moralis.io/api/v2.2/:address/nft/transfers)                                       | ✅             |
| 7   | `getNFTContractTransfers`    | Get transfers by contract              | [Method Documentation](/web3-data-api/evm/reference/get-nft-contract-transfers)      | [https://deep-index.moralis.io/api/v2.2/nft/:address/transfers](https://deep-index.moralis.io/api/v2.2/nft/:address/transfers)                                       | ✅             |
| 8   | `getNFTTransfersFromToBlock` | Get transfers from block to block      | [Method Documentation](/web3-data-api/evm/reference/get-nft-transfers-from-to-block) | [https://deep-index.moralis.io/api/v2.2/nft/transfers](https://deep-index.moralis.io/api/v2.2/nft/transfers)                                                         | ✅             |
| 9   | `getNFTTransfersByBlock`     | Get transfers by block                 | [Method Documentation](/web3-data-api/evm/reference/get-nft-transfers-by-block)      | [https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash/nft/transfers](https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash/nft/transfers) | ✅             |
| 10  | `getNFTTransfers`            | Get transfers by contract and token ID | [Method Documentation](/web3-data-api/evm/reference/get-nft-transfers)               | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/transfers)                   | ✅             |

### Get NFT Collections

| No. | Method                    | Description               | API Reference                                                                   | URL                                                                                                                                | Spam Detection |
| --- | ------------------------- | ------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 11  | `getWalletNFTCollections` | Get collections by wallet | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nft-collections) | [https://deep-index.moralis.io/api/v2.2/:address/nft/collections](https://deep-index.moralis.io/api/v2.2/:address/nft/collections) | ✅             |
| 12  | `getNFTContractMetadata`  | Get contract metadata     | [Method Documentation](/web3-data-api/evm/reference/get-nft-contract-metadata)  | [https://deep-index.moralis.io/api/v2.2/nft/:address/metadata](https://deep-index.moralis.io/api/v2.2/nft/:address/metadata)       | ✅             |
| 13  | `syncNFTContract`         | Sync NFT contract         | [Method Documentation](/web3-data-api/evm/reference/sync-nft-contract)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/sync](https://deep-index.moralis.io/api/v2.2/nft/:address/sync)               |                |

### Get NFT Owners

| No. | Method                | Description         | API Reference                                                                | URL                                                                                                                                          | Spam Detection |
| --- | --------------------- | ------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 14  | `getNFTOwners`        | Get NFT owners      | [Method Documentation](/web3-data-api/evm/reference/get-nft-owners)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/owners](https://deep-index.moralis.io/api/v2.2/nft/:address/owners)                     | ✅             |
| 15  | `getNFTTokenIdOwners` | Get token ID owners | [Method Documentation](/web3-data-api/evm/reference/get-nft-token-id-owners) | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/owners) | ✅             |

### Get NFT Prices

| No. | Method                     | Description              | API Reference                                                                     | URL                                                                                                                                        | Spam Detection |
| --- | -------------------------- | ------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 18  | `getNFTContractSalePrices` | Get contract sale prices | [Method Documentation](/web3-data-api/evm/reference/get-nft-contract-sale-prices) | [https://deep-index.moralis.io/api/v2.2/nft/:address/price](https://deep-index.moralis.io/api/v2.2/nft/:address/price)                     |                |
| 19  | `getNFTSalePrices`         | Get sale prices          | [Method Documentation](/web3-data-api/evm/reference/get-nft-sale-prices)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price) |                |
| 20  | `getNFTLowestPrice`        | Get lowest price         | [Method Documentation](/web3-data-api/evm/reference/get-nft-lowest-price)         | [https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice](https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice)         |                |

### Get NFT Trades

| No. | Method                 | Description          | API Reference                                                                 | URL                                                                                                                                          | Spam Detection |
| --- | ---------------------- | -------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 21  | `getNFTTrades`         | Get NFT trades       | [Method Documentation](/web3-data-api/evm/reference/get-nft-trades)           | [https://deep-index.moralis.io/api/v2.2/nft/:address/trades](https://deep-index.moralis.io/api/v2.2/nft/:address/trades)                     | ✅             |
| 22  | `getNFTTradesByToken`  | Get trades by token  | [Method Documentation](/web3-data-api/evm/reference/get-nft-trades-by-token)  | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/trades](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/trades) |                |
| 23  | `getNFTTradesByWallet` | Get trades by wallet | [Method Documentation](/web3-data-api/evm/reference/get-nft-trades-by-wallet) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades](https://deep-index.moralis.io/api/v2.2/wallets/:address/nfts/trades)   |                |

### Get NFT Stats

| No. | Method                  | Description          | API Reference                                                                 | URL                                                                                                                                        | Spam Detection |
| --- | ----------------------- | -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 24  | `getNFTCollectionStats` | Get collection stats | [Method Documentation](/web3-data-api/evm/reference/get-nft-collection-stats) | [https://deep-index.moralis.io/api/v2.2/nft/:address/stats](https://deep-index.moralis.io/api/v2.2/nft/:address/stats)                     |                |
| 25  | `getNFTTokenStats`      | Get token stats      | [Method Documentation](/web3-data-api/evm/reference/get-nft-token-stats)      | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/stats](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/stats) |

### Get NFT Traits and Rarity

| No. | Method                             | Description                                                             | API Reference                                                                              | URL                                                                                                                                        | Spam Detection |
| --- | ---------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 26  | `getNFTTraitsByCollection`         | Get NFT traits by collection (single response, limited to 5,000 traits) | [Method Documentation](/web3-data-api/evm/reference/get-nft-traits-by-collection)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/traits](https://deep-index.moralis.io/api/v2.2/nft/:address/traits)                   |                |
| 27  | `getNFTTraitsByCollectionPaginate` | Get NFT traits by collection (paginated, no limit)                      | [Method Documentation](/web3-data-api/evm/reference/get-nft-traits-by-collection-paginate) | [https://deep-index.moralis.io/api/v2.2/nft/:address/traits/paginate](https://deep-index.moralis.io/api/v2.2/nft/:address/traits/paginate) |                |
| 28  | `getNFTsByTraits`                  | Get NFTs by traits                                                      | [Method Documentation](/web3-data-api/evm/reference/get-nfts-by-traits)                    | [https://deep-index.moralis.io/api/v2.2/nft/:address/nfts-by-traits](https://deep-index.moralis.io/api/v2.2/nft/:address/nfts-by-traits)   | ✅             |
| 29  | `resyncNFTTraitsByCollection`      | Resync NFT traits by collection                                         | [Method Documentation](/web3-data-api/evm/reference/resync-nft-traits-by-collection)       | [https://deep-index.moralis.io/api/v2.2/nft/:address/traits/resync](https://deep-index.moralis.io/api/v2.2/nft/:address/traits/resync)     |                |

## Token API

- [Get Token Metadata](#get-token-metadata)
- [Get Token Price](#get-token-price)
- [Get Token Balances](#get-token-balances)
- [Get Token Approvals](#get-token-approvals)
- [Get Token Transfers](#get-token-transfers)
- [Get Token PnL](#get-token-pnl)
- [Get Token Pairs & Liquidity](#get-token-pairs-&-liquidity)
- [Get Token Stats](#get-token-stats)
- [Get Token Owners](#get-token-owners)

### Get Token Metadata

| No. | Method                     | Description                          | API Reference                                                                     | URL                                                                                                                            |
| --- | -------------------------- | ------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `getWalletTokenBalances`   | Get ERC20 token balance by wallet    | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances)    | [https://deep-index.moralis.io/api/v2.2/:address/erc20](https://deep-index.moralis.io/api/v2.2/:address/erc20)                 |
| 2   | `getTokenMetadataBySymbol` | Get ERC20 token metadata by symbols  | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata-by-symbol) | [https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols](https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols) |
| 3   | `getTokenMetadata`         | Get ERC20 token metadata by contract | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata)           | [https://deep-index.moralis.io/api/v2.2/erc20/metadata](https://deep-index.moralis.io/api/v2.2/erc20/metadata)                 |

### Get Token Price

| No. | Method                   | Description               | API Reference                                                                  | URL                                                                                                                        |
| --- | ------------------------ | ------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 4   | `getTokenPrice`          | Get ERC20 token price     | [Method Documentation](/web3-data-api/evm/reference/get-token-price)           | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price) |
| 5   | `getMultipleTokenPrices` | Get multiple token prices | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)                 |

### Get Token Balances

| No. | Method                         | Description                                          | API Reference                                                                        | URL                                                                                                                                |
| --- | ------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| 6   | `getWalletTokenBalances`       | Get ERC20 token balance by wallet                    | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances)       | [https://deep-index.moralis.io/api/v2.2/:address/erc20](https://deep-index.moralis.io/api/v2.2/:address/erc20)                     |
| 7   | `getWalletTokenBalancesPrices` | Get Native & ERC20 token balances & prices by wallet | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances-price) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens](https://deep-index.moralis.io/api/v2.2/wallets/:address/tokens)   |
| 8   | `getTokenAllowance`            | Get ERC20 token allowance                            | [Method Documentation](/web3-data-api/evm/reference/get-token-allowance)             | [https://deep-index.moralis.io/api/v2.2/erc20/:address/allowance](https://deep-index.moralis.io/api/v2.2/erc20/:address/allowance) |

### Get Token Approvals

| No. | Method               | Description                   | API Reference                                                                   | URL                                                                                                                                          |
| --- | -------------------- | ----------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | `getWalletApprovals` | Get ERC20 approvals by wallet | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-approvals) | [https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getWalletApprovals](https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals) |

### Get Token Transfers

| No. | Method                    | Description                           | API Reference                                                                   | URL                                                                                                                                |
| --- | ------------------------- | ------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 10  | `getWalletTokenTransfers` | Get ERC20 token transfers by wallet   | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-transfers) | [https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers](https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers) |
| 11  | `getTokenTransfers`       | Get ERC20 token transfers by contract | [Method Documentation](/web3-data-api/evm/reference/get-token-transfers)        | [https://deep-index.moralis.io/api/v2.2/erc20/:address/transfers](https://deep-index.moralis.io/api/v2.2/erc20/:address/transfers) |

### Get Token Transfers

| No.                                                                                      | Method                                                                                                                                 | Description                         | API Reference | URL |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------- | --- |
| 12                                                                                       | `getTopProfitableWalletPerToken`                                                                                                       | Get Top Profitable Wallets by Token |
| [Method Documentation](/web3-data-api/evm/reference/get-top-profitable-wallet-per-token) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/top-gainers](https://deep-index.moralis.io/api/v2.2/erc20/:address/top-gainers) |

### Get Token Pairs & Liquidity

| No. | Method            | Description                 | API Reference                                                          | URL                                                                                                                                                                    |
| --- | ----------------- | --------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | `getPairReserves` | Get DEX token pair reserves | [Method Documentation](/web3-data-api/evm/reference/get-pair-reserves) | [https://deep-index.moralis.io/api/v2.2/:pair_address/reserves](https://deep-index.moralis.io/api/v2.2/:pair_address/reserves)                                         |
| 14  | `getPairAddress`  | Get DEX token pair address  | [Method Documentation](/web3-data-api/evm/reference/get-pair-address)  | [https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres](https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres) |

### Get Token Stats

| No. | Method          | Description           | API Reference                                                        | URL                                                                                                                        |
| --- | --------------- | --------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 15  | `getTokenStats` | Get ERC20 token stats | [Method Documentation](/web3-data-api/evm/reference/get-token-stats) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/stats](https://deep-index.moralis.io/api/v2.2/erc20/:address/stats) |

### Get Token Owners

| No. | Method           | Description            | API Reference                                                         | URL                                                                                                                                      |
| --- | ---------------- | ---------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | `getTokenOwners` | Get ERC20 token owners | [Method Documentation](/web3-data-api/evm/reference/get-token-owners) | [https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners](https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners) |

# DeFi API

Select what you want to achieve:

- [Get Wallet DeFi Positions](#get-wallet-defi-positions)

### Get Wallet DeFi Positions

| No. | Method                       | Description                                        | API Reference                                                                       | URL                                                                                                                                                                  |
| --- | ---------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getDefiSummary`             | Get DeFi protocols by wallet                       | [Method Documentation](/web3-data-api/evm/reference/get-defi-summary)               | [https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/summary](https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/summary)                         |
| 2   | `getDefiPositionsSummary`    | Get DeFi positions by wallet                       | [Method Documentation](/web3-data-api/evm/reference/get-defi-positions-summary)     | [https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/positions](https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/positions)                     |
| 3   | `getDefiPositionsByProtocol` | Get detailed DeFi positions by wallet and protocol | [Method Documentation](/web3-data-api/evm/reference/get-defi-positions-by-protocol) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/:protocol/positions](https://deep-index.moralis.io/api/v2.2/wallets/:address/defi/:protocol/positions) |

## Price API

Select what you want to achieve:

- [Get Token Prices](#get-token-prices)
- [Get NFT Prices](#get-nft-prices)

### Get Token Prices

| No. | Method                   | Description               | API Reference                                                                        | URL                                                                                                                        |
| --- | ------------------------ | ------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getTokenPrice`          | Get ERC20 token price     | [Method Documentation](/web3-data-api/evm/reference/price/get-token-price)           | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price) |
| 2   | `getMultipleTokenPrices` | Get multiple token prices | [Method Documentation](/web3-data-api/evm/reference/price/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)                 |

| No. | Method                     | Description              | API Reference                                                                           | URL                                                                                                                                        | Spam Detection |
| --- | -------------------------- | ------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 3   | `getNFTContractSalePrices` | Get contract sale prices | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-contract-sale-prices) | [https://deep-index.moralis.io/api/v2.2/nft/:address/price](https://deep-index.moralis.io/api/v2.2/nft/:address/price)                     |                |
| 4   | `getNFTSalePrices`         | Get sale prices          | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-sale-prices)          | [https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price](https://deep-index.moralis.io/api/v2.2/nft/:address/:token_id/price) |                |
| 5   | `getNFTLowestPrice`        | Get lowest price         | [Method Documentation](/web3-data-api/evm/reference/price/get-nft-lowest-price)         | [https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice](https://deep-index.moralis.io/api/v2.2/nft/:address/lowestprice)         |                |

## Blockchain API

Select what you want to achieve:

- [Get Blocks](#get-blocks)
- [Get Transactions](#get-transactions)
- [Get Logs](#get-logs)
- [Get Stats](#get-stats)
- [Get Latest Block Number](#get-latest-block-number)

### Get Blocks

| No. | Method           | Description       | API Reference                                                          | URL                                                                                                                                      |
| --- | ---------------- | ----------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getBlockByHash` | Get block by hash | [Method Documentation](/web3-data-api/evm/reference/get-block)         | [https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash](https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash) |
| 2   | `getBlockByDate` | Get block by date | [Method Documentation](/web3-data-api/evm/reference/get-date-to-block) | [https://deep-index.moralis.io/api/v2.2/dateToBlock](https://deep-index.moralis.io/api/v2.2/dateToBlock)                                 |

### Get Transactions

| No. | Method                        | Description                                   | API Reference                                                                       | URL                                                                                                                                                                                      |
| --- | ----------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | `getDecodedWalletTransaction` | Get decoded transactions by wallet            | [Method Documentation](/web3-data-api/evm/reference/get-decoded-wallet-transaction) | [https://deep-index.moralis.io/api/v2.2/:address/verbose](https://deep-index.moralis.io/api/v2.2/:address/verbose)                                                                       |
| 4   | `getTransactionByHash`        | Get transaction by hash                       | [Method Documentation](/web3-data-api/evm/reference/get-transaction)                | [https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash](https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash)                                             |
| 5   | `getDecodedTransactionByHash` | Get decoded transaction by hash               | [Method Documentation](/web3-data-api/evm/reference/get-decoded-transaction)        | [https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/verbose](https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/verbose)                             |
| 6   | `getInternalTransactions`     | Get internal transactions by transaction hash | [Method Documentation](/web3-data-api/evm/reference/get-internal-transactions)      | [https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/internal-transactions](https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/internal-transactions) |
| 7   | `getWalletTransactions`       | Get native transactions by wallet             | [Method Documentation](/web3-data-api/evm/reference/get-wallet-transactions)        | [https://deep-index.moralis.io/api/v2.2/:address](https://deep-index.moralis.io/api/v2.2/:address)                                                                                       |

### Get Logs

| No. | Method              | Description            | API Reference                                                            | URL                                                                                                              |
| --- | ------------------- | ---------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 8   | `getContractLogs`   | Get logs by contract   | [Method Documentation](/web3-data-api/evm/reference/get-contract-logs)   | [https://deep-index.moralis.io/api/v2.2/:address/logs](https://deep-index.moralis.io/api/v2.2/:address/logs)     |
| 9   | `getContractEvents` | Get events by contract | [Method Documentation](/web3-data-api/evm/reference/get-contract-events) | [https://deep-index.moralis.io/api/v2.2/:address/events](https://deep-index.moralis.io/api/v2.2/:address/events) |

### Get Stats

| No. | Method          | Description     | API Reference                                                        | URL                                                                                                                                                  |
| --- | --------------- | --------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10  | `getBlockStats` | Get block stats | [Method Documentation](/web3-data-api/evm/reference/get-block-stats) | [https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash/stats](https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash/stats) |

### Get Latest Block Number

| No. | Method                 | Description              | API Reference                                                                | URL                                                                                                                                |
| --- | ---------------------- | ------------------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 11  | `getLatestBlockNumber` | Get latest block number. | [Method Documentation](/web3-data-api/evm/reference/get-latest-block-number) | [https://deep-index.moralis.io/api/v2.2/latestBlockNumber/:chain](https://deep-index.moralis.io/api/v2.2/latestBlockNumber/:chain) |

## Utils

| No. | Method               | Description              | API Reference                                                         | URL                                                                                                                        |
| --- | -------------------- | ------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getAPIVersion`      | Get API version          | [Method Documentation](/web3-data-api/evm/reference/web3-api-version) | [https://deep-index.moralis.io/api/v2.2/web3/version](https://deep-index.moralis.io/api/v2.2/web3/version)                 |
| 2   | `getEndpointWeights` | Get weights of endpoints | [Method Documentation](/web3-data-api/evm/reference/endpoint-weights) | [https://deep-index.moralis.io/api/v2.2/info/endpointWeights](https://deep-index.moralis.io/api/v2.2/info/endpointWeights) |
| 3   | `reviewContracts`    | Review contracts         | [Method Documentation](/web3-data-api/evm/reference/contracts-review) | [https://deep-index.moralis.io/api/v2.2/contracts-review](https://deep-index.moralis.io/api/v2.2/contracts-review)         |
