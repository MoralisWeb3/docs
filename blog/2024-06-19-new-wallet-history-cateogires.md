---
title: "Wallet History: Approve & Revoke Categories"
slug: "new-wallet-history-cateogires"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

🎉 We're excited to announce that we've expanded our Wallet History transaction decodings to include support for Approve and Revoke category types!

These new categories are designed for both ERC20 and NFT tokens, allowing clear labeling and categorization of approval and revocation actions. This enhancement provides detailed information about the amount, spender, and fully decoded token metadata.

Detailed approval or revoke information can now be accessed within the `contract_interactions` object. Here's an example of an `approve` transaction:

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

Currently, the `contract_interactions` decodes `setApprovalForAll` (log event `ApprovalForAll`) and `approve` (log event `Approval`) transactions, while `revoke` categories are defined as approvals with a value of 0 or where `setApprovalForAll` is `false`.

| Log Event | Category | Decoded Payload |
|-----|------|----|
| `Approval` > 0 | `approve` | `contract_interactions.approvals:[]` |
| `ApprovalForAll` = `true` | `approve` | `contract_interactions.set_approvals_all:[]` |
| `Approval` = 0 | `revoke` | `contract_interactions.revokes:[]` |
| `ApprovalForAll` = `false` | `revoke` | `contract_interactions.set_revokes_all:[]` |

For a complete list of all supported categories, please visit the [Wallet History resource page](/web3-data-api/evm/wallet-history).

Stay tuned as we continue expanding our transaction decodings to include even more categories! 🚀
