---
title: "ERC20 Token Owners"
slug: "erc20-token-owners"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we're super excited to announce the launch of [ERC20 Token Owners](/web3-data-api/evm/reference/get-token-holders) 🤩

<!-- truncate -->

This endpoint allows you to instantly fetch all owners of a given ERC20 token, sorted by highest holders first, letting you quickly understand the top holders of a token.

For each token holder, gain insights into their wallet balance, whether they are a contract or not, their owner address, label, USD value, and their percentage relative to the total token supply 🔥

Here's an example response:

```
{
    "balance": "10930056627204137678149589",
    "balance_formatted": "10930056.627204137678149589",
    "is_contract": false,
    "owner_address": "0x6cc5f688a315f3dc28a7781717a9a798a59fda7b",
    "owner_address_label": "OKX",
    "usd_value": "116329685.478903487324714661",
    "percentage_relative_to_total_supply": 1.0930056627204137
}
```

[Test it out yourself](/web3-data-api/evm/reference/get-token-holders) and start building today 🚀
