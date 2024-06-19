---
title: "Wallet History"
slug: "../../evm/wallet-history"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";



## Endpoint Overview
The [Wallet History endpoint](/web3-data-api/evm/reference/wallet-api/get-wallet-history) provides a single API call solution to fetch a comprehensive, chronological history of a wallet's activity. This endpoint consolidates all transaction types, including transfers, token swaps, NFT sales, token operations, and interactions with smart contracts, simplifying the data retrieval process for developers.

**Features**
- Single API Request: Retrieve a full timeline of a wallet’s activities with one API call.
- Automatic Categorization: Each transaction is automatically categorized into types such as Send, Receive, NFT Send/Receive, Token Send/Receive, Deposit, Withdraw, Token Swap, Airdrop, Mint, Burn, NFT Purchase, NFT Sale, Borrow, and Contract Interaction.
- Reduced Complexity: Eliminates the need to aggregate data from multiple API calls, reducing complexity and potential data inconsistency.
- Comprehensive Data: Provides detailed insights into all transactions, token transfers, and NFT activities associated with a wallet address.

## What Categories Are Supported?
We are continuously extending support for categories. We currently support:

- Send
- Receive
- NFT Send
- NFT Receive
- Token Send
- Token Receive
- Deposit
- Withdraw
- Token Swap
- Airdrop
- Mint
- Burn
- NFT Purchase
- NFT Sale
- Borrow
- Approve
- Revoke
- Contract Interaction

## What Query Parameters Are Supported?

- `chain`: Choose the blockchain to query
- `from_block` and `to_block`: Set the block range for the transactions you're interested in. If both from_date and from_block (or to_date and to_block) are provided, the block parameter takes precedence.
- `from_date` and `to_date`: Specify the date range for transactions. Accepts seconds or date strings compatible with moment.js.
- `include_internal_transactions`: Include internal transactions in your results when set to `true`. By default, `native_transfers` **always include** internal transactions.
- `nft_metadata`: Include NFT metadata in your results when set to `true`.
- `include_input_data`: Includes the raw transaction input data when set to `true`. This also decodes the transaction to populate the `method_label`.
- `cursor`: Use this to paginate through results, utilizing the cursor provided in the previous response.
- `order`: Sort the results in ascending (ASC) or descending (DESC) order.
- `limit`: Adjust the page size of your results to your preference .

Start building with the most powerful [Wallet History endpoint](/web3-data-api/evm/reference/wallet-api/get-wallet-history) today 🚀
