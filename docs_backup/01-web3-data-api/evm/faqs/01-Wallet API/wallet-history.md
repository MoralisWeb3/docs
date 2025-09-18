---
title: "Wallet History FAQs"
slug: "/web3-data-api/evm/wallet-history"
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

## Wallet History Categories

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

### Approvals and Revokes

Detailed approval or revoke information can be accessed within the `contract_interactions` object. Currently, the `contract_interactions` decodes `setApprovalForAll` (log event `ApprovalForAll`) and `approve` (log event `Approval`) transactions, while `revoke` categories are defined as approvals with a value of 0 or where `setApprovalForAll` is `false`.

Here's an example of an `approve` transaction:

```
"category": "approve",
"summary": "Approved 0.000123 USDT",
"contract_interactions": {
    "approvals": [
        {
            "value": "1230000000000000",
            "value_formatted": "0.000123",
            "token": {
                "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "address_label": "Tether USD (USDT)",
                "token_name": "Tether USD",
                "token_logo": "https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "token_symbol": "USDT"
            },
            "spender": {
                "address": "0x111111125421ca6dc452d289314280a0f8842a65",
                "address_label": null
            }
        }
    ]
}
```

| Log Event                  | Category  | Decoded Payload                              |
| -------------------------- | --------- | -------------------------------------------- |
| `Approval` > 0             | `approve` | `contract_interactions.approvals:[]`         |
| `ApprovalForAll` = `true`  | `approve` | `contract_interactions.set_approvals_all:[]` |
| `Approval` = 0             | `revoke`  | `contract_interactions.revokes:[]`           |
| `ApprovalForAll` = `false` | `revoke`  | `contract_interactions.set_revokes_all:[]`   |

## What Query Parameters Are Supported?

- `chain`: Choose the blockchain to query
- `from_block` and `to_block`: Set the block range for the transactions you're interested in. If both from_date and from_block (or to_date and to_block) are provided, the block parameter takes precedence.
- `from_date` and `to_date`: Specify the date range for transactions. Accepts seconds or date strings compatible with moment.js.
- `include_internal_transactions`: Include internal transactions in your results when set to `true`. By default, `native_transfers` **always include** internal transactions.
- `nft_metadata`: Include NFT metadata in your results when set to `true`.
- `include_input_data`: Includes the raw transaction input data when set to `true`. This also decodes the transaction to populate the `method_label`.
- `cursor`: Use this to paginate through results, utilizing the cursor provided in the previous response.
- `order`: Sort the results in ascending (ASC) or descending (DESC) order.
- `limit`: Adjust the page size of your results to your preference.

Start building with the most powerful [Wallet History endpoint](/web3-data-api/evm/reference/wallet-api/get-wallet-history) today 🚀
