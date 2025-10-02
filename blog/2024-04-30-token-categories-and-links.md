---
title: "Token Categories and Links"
slug: "token-categories-and-links"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we have enriched our ERC20 Token metadata endpoints with Token Categories and Token Links 🤩

<!-- truncate -->

When fetching token metadata, you'll now be returned with `categories` and `links` for each token.

Here's an example for Uniswap:

```
[
    {
        "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        "address_label": "Uniswap (UNI)",
        "name": "Uniswap",
        "symbol": "UNI",
        "decimals": "18",
        "logo": "https://logo.moralis.io/0x1_0x1f9840a85d5af5bf1d1762f925bdaddc4201f984_fb68fa4a10b54fb793f61fc46a2b04b9",
        "logo_hash": "064ee9557deba73c1a31014a60f4c081284636b785373d4ccdd1b3440df11f43",
        "thumbnail": "https://logo.moralis.io/0x1_0x1f9840a85d5af5bf1d1762f925bdaddc4201f984_fb68fa4a10b54fb793f61fc46a2b04b9",
        "total_supply": "1000000000000000000000000000",
        "total_supply_formatted": "1000000000",
        "block_number": "10861674",
        "validated": 1,
        "created_at": "2020-09-14T18:11:26.000Z",
        "possible_spam": false,
        "verified_contract": true,
        "categories": [
            "Automated Market Maker (AMM)",
            "Decentralized Exchange (DEX)",
            "Decentralized Finance (DeFi)"
        ],
        "links": {
            "twitter": "https://twitter.com/Uniswap",
            "website": "https://uniswap.org/",
            "reddit": "https://www.reddit.com/r/Uniswap",
            "discord": "https://discord.gg/FCfyBSbCU5",
            "github": "https://github.com/Uniswap/"
        }
    }
]
```

We support the following token `links`:
- `website`
- `facebook`
- `github`
- `youtube`
- `linkedin`
- `tiktok`
- `discord`
- `telegram`
- `twitter`
- `medium`
- `bitbucket`
- `instagram`
- `reddit`


This is now available across the following chains:

- Ethereum
- Polygon
- Binance
- Arbitrum
- Optimism
- Base
- Linea
- Avalanche
- Fantom

 
Check-out all our [supported chains here](/supported-chains).
