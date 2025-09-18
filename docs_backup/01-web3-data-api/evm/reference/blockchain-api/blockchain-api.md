---
title: "Blockchain API"
sidebar_label: "Blockchain API"
slug: "../blockchain-api"
sidebar_class_name: "sidebar-blockchain-api"
sidebar_position: 5
---

Select what you want to achieve:

<ul>
<li><a href="#get-blocks">Get Blocks</a></li>
<li><a href="#get-transactions">Get Transactions</a></li>
<li><a href="#get-stats">Get Stats</a></li>
<li><a href="#get-latest-block-number">Get Latest Block Number</a></li>
</ul>

### Get Blocks

| No. | Method           | Description       | API Reference                                                          | URL                                                                                                                                      |
| --- | ---------------- | ----------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getBlockByHash` | Get block by hash | [Method Documentation](/web3-data-api/evm/reference/get-block)         | [https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash](https://deep-index.moralis.io/api/v2.2/block/:block_number_or_hash) |
| 2   | `getBlockByDate` | Get block by date | [Method Documentation](/web3-data-api/evm/reference/get-date-to-block) | [https://deep-index.moralis.io/api/v2.2/dateToBlock](https://deep-index.moralis.io/api/v2.2/dateToBlock)                                 |

### Get Transactions

| No. | Method                        | Description                        | API Reference                                                                       | URL                                                                                                                                                          |
| --- | ----------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3   | `getDecodedWalletTransaction` | Get decoded transactions by wallet | [Method Documentation](/web3-data-api/evm/reference/get-decoded-wallet-transaction) | [https://deep-index.moralis.io/api/v2.2/:address/verbose](https://deep-index.moralis.io/api/v2.2/:address/verbose)                                           |
| 4   | `getTransactionByHash`        | Get transaction by hash            | [Method Documentation](/web3-data-api/evm/reference/get-transaction)                | [https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash](https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash)                 |
| 5   | `getDecodedTransactionByHash` | Get decoded transaction by hash    | [Method Documentation](/web3-data-api/evm/reference/get-decoded-transaction)        | [https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/verbose](https://deep-index.moralis.io/api/v2.2/transaction/:transaction_hash/verbose) |
| 6   | `getWalletTransactions`       | Get native transactions by wallet  | [Method Documentation](/web3-data-api/evm/reference/get-wallet-transactions)        | [https://deep-index.moralis.io/api/v2.2/:address](https://deep-index.moralis.io/api/v2.2/:address)                                                           |

### Get Latest Block Number

| No. | Method                 | Description              | API Reference                                                                | URL                                                                                                                                |
| --- | ---------------------- | ------------------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 7   | `getLatestBlockNumber` | Get latest block number. | [Method Documentation](/web3-data-api/evm/reference/get-latest-block-number) | [https://deep-index.moralis.io/api/v2.2/latestBlockNumber/:chain](https://deep-index.moralis.io/api/v2.2/latestBlockNumber/:chain) |
