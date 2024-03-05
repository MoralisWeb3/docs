---
title: "Blockchain API"
sidebar_label: "Blockchain API"
slug: "../blockchain-api"
sidebar_class_name: "sidebar-blockchain-api"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

Select what you want to achieve:

* [Get Blocks](#get-blocks)
* [Get Transactions](#get-transactions)
* [Get Logs](#get-logs)
* [Get Stats](#get-stats)

### Get Blocks

| No. | Method                      | Description                            | API Reference                                                                                          | URL                                                                      |
|-----|-----------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| 1   | `getBlockByHash`            | Get block by hash                      | [Method Documentation](/web3-data-api/evm/reference/get-block)                | [https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash](https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash) |
| 2   | `getBlockByDate`            | Get block by date                      | [Method Documentation](/web3-data-api/evm/reference/get-date-to-block)         | [https://deep-index.moralis.io/api/v2.2/dateToBlock](https://deep-index.moralis.io/api/v2.2/dateToBlock)   |

### Get Transactions

| No. | Method                      | Description                            | API Reference                                                                                          | URL                                                                      |
|-----|-----------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| 3   | `getDecodedWalletTransaction`| Get decoded transactions by wallet    | [Method Documentation](/web3-data-api/evm/reference/get-decoded-wallet-transaction) | [https://deep-index.moralis.io/api/v2.2/:address/verbose](https://deep-index.moralis.io/api/v2.2/:address/verbose) |
| 4   | `getTransactionByHash`       | Get transaction by hash                | [Method Documentation](/web3-data-api/evm/reference/get-transaction)           | [https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash](https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash) |
| 5   | `getDecodedTransactionByHash`| Get decoded transaction by hash        | [Method Documentation](/web3-data-api/evm/reference/get-decoded-transaction)   | [https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/verbose](https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/verbose) |
| 6   | `getInternalTransactions`     | Get internal transactions by transaction hash | [Method Documentation](/web3-data-api/evm/reference/get-internal-transactions) | [https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/internal-transactions](https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/internal-transactions) |
| 7   | `getWalletTransactions`       | Get native transactions by wallet      | [Method Documentation](/web3-data-api/evm/reference/get-wallet-transactions)   | [https://deep-index.moralis.io/api/v2.2/:address](https://deep-index.moralis.io/api/v2.2/:address)   |

### Get Logs

| No. | Method                      | Description                            | API Reference                                                                                          | URL                                                                      |
|-----|-----------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| 8   | `getContractLogs`            | Get logs by contract                   | [Method Documentation](/web3-data-api/evm/reference/get-contract-logs)        | [https://deep-index.moralis.io/api/v2.2/:address/logs](https://deep-index.moralis.io/api/v2.2/:address/logs)   |
| 9   | `getContractEvents`          | Get events by contract                 | [Method Documentation](/web3-data-api/evm/reference/get-contract-events)      | [https://deep-index.moralis.io/api/v2.2/:address/events](https://deep-index.moralis.io/api/v2.2/:address/events) |

### Get Stats

| No. | Method                      | Description                            | API Reference                                                                                          | URL                                                                      |
|-----|-----------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| 10   | `getBlockStats`              | Get block stats                        | [Method Documentation](/web3-data-api/evm/reference/get-block-stats)         | [https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash/stats](https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash/stats) |
