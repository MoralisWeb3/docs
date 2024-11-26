---
title: "Token API"
sidebar_label: "Token API"
slug: "../token-api"
sidebar_class_name: "sidebar-token-api"
sidebar_position: 3
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

Select what you want to achieve:

- [Get Token Metadata](#get-token-metadata)
- [Get Token Price](#get-token-price)
- [Get Token Balances](#get-token-balances)
- [Get Token Approvals](#get-token-approvals)
- [Get Token Transfers](#get-token-transfers)
- [Get Token Top Traders](#get-token-top-traders)
- [Get Token Pairs & Liquidity](#get-token-pairs--liquidity)
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

### Get Token Top Traders

| No. | Method                           | Description                  | API Reference                                                                            | URL                                                                                                                                    |
| --- | -------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | `getTopProfitableWalletPerToken` | Get Token Profitable Wallets | [Method Documentation](/web3-data-api/evm/reference/get-top-profitable-wallet-per-token) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/top-gainers](https://deep-index.moralis.io/api/v2.2/erc20/:address/top-gainers) |

### Get Token Pairs & Liquidity

| No. | Method                        | Description                          | API Reference                                                                        | URL                                                                                                                                                                    |
| --- | ----------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | `getTokenPairs`               | Get token pairs by address           | [Method Documentation](/web3-data-api/evm/reference/get-token-pairs)                 | [https://deep-index.moralis.io/api/v2.2/:token_address/pairs](https://deep-index.moralis.io/api/v2.2/:token_address/pairs)                                             |
| 14  | `getPairStats`                | Get token pair statistics            | [Method Documentation](/web3-data-api/evm/reference/get-token-pair-stats)            | [https://deep-index.moralis.io/api/v2.2//pairs/:address/stats](https://deep-index.moralis.io/api/v2.2//pairs/:address/stats)                                           |
| 15  | `getAggregatedTokenPairStats` | Get aggregated token pair statistics | [Method Documentation](/web3-data-api/evm/reference/get-aggregated-token-pair-stats) | [https://deep-index.moralis.io/api/v2.2/:token_address/pairs/stats](https://deep-index.moralis.io/api/v2.2/:token_address/pairs/stats)                                 |
| 16  | `getPairAddress`              | Get DEX token pair address           | [Method Documentation](/web3-data-api/evm/reference/get-pair-address)                | [https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres](https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres) |
| 17  | `getPairReserves`             | Get DEX token pair reserves          | [Method Documentation](/web3-data-api/evm/reference/get-pair-reserves)               | [https://deep-index.moralis.io/api/v2.2/:pair_address/reserves](https://deep-index.moralis.io/api/v2.2/:pair_address/reserves)                                         |

### Get Token Stats

| No. | Method          | Description           | API Reference                                                        | URL                                                                                                                        |
| --- | --------------- | --------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 18  | `getTokenStats` | Get ERC20 token stats | [Method Documentation](/web3-data-api/evm/reference/get-token-stats) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/stats](https://deep-index.moralis.io/api/v2.2/erc20/:address/stats) |

### Get Token Owners

| No. | Method           | Description            | API Reference                                                         | URL                                                                                                                                      |
| --- | ---------------- | ---------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | `getTokenOwners` | Get ERC20 token owners | [Method Documentation](/web3-data-api/evm/reference/get-token-owners) | [https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners](https://deep-index.moralis.io/api/v2.2/erc20/:token_address/owners) |
