---
title: "Total Supply & Token FDV"
slug: "total-supply-and-fdv"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we're excited to announce that we have enriched our ERC20 Token metadata endpoints with two new metrics: Total Supply and Fully Diluted Valuation (FDV) ✨

<!-- truncate -->

When fetching token metadata, you'll now be returned with the following:

- `total_supply`: Total tokens created minus any that have been burned
- `total_supply_formatted`: Total tokens created minus any that have been burned (decimal formatted)
- `fully_diluted_valuation`: Fully Diluted Valuation (FDV), this represents the token's `current_price` x `total_supply`

Here's an example for Pepe:

```
{
    "address": "0x6982508145454ce325ddbe47a25d4ec3d2311933",
    "address_label": "Pepe (PEPE)",
    "name": "Pepe",
    "symbol": "PEPE",
    "decimals": "18",
    "logo": "https://logo.moralis.io/0x1_0x6982508145454ce325ddbe47a25d4ec3d2311933_26fdbd9bd7014ce9b72656a59ba47626",
    "logo_hash": null,
    "thumbnail": "https://logo.moralis.io/0x1_0x6982508145454ce325ddbe47a25d4ec3d2311933_26fdbd9bd7014ce9b72656a59ba47626",
    "total_supply": "420689899999994793099999999997400",
    "total_supply_formatted": "420689899999994.7930999999999974",
    "fully_diluted_valuation": "3399713297.76",
    "block_number": "19754261",
    "validated": 1,
    "created_at": "2023-04-14T14:51:35.000Z",
    "possible_spam": false,
    "verified_contract": true,
    "categories": [
        "Meme"
    ],
    "links": {
        "twitter": "https://twitter.com/pepecoineth",
        "website": "https://www.pepe.vip/",
        "telegram": "https://t.me/pepecoineth"
    }
}
```

This is now available across all our mainnet chains 🔥
 
Check-out all our [supported chains here](/supported-chains).
