---
title: "New: NFT Owners Endpoint"
slug: "new-nft-owners-endpoint"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

# New Endpoint: NFT Owners v2

The new `GET /nft/:address/unique-owners` endpoint is now available - a faster, cleaner way to fetch all **wallet addresses that own NFTs** from a specific collection.

<!-- truncate -->

## ✅ What's New

- Returns a **condensed list of unique wallet addresses**
- Supports up to **5,000 items per page** for high-speed retrieval
- Includes **pagination via cursor**
- Great for airdrops, community analysis, and ownership tracking

## 🔗 Endpoint

`GET https://deep-index.moralis.io/api/v2.2/nft/:address/unique-owners`

## 🧾 Example Response

```
{
  "page": 1,
  "pageSize": 100,
  "cursor": "...",
  "walletAddresses": [
    "0x0000000000adead599c11a0c9a7475b67852c1d0",
    "0x0000000000e43e0c383403dd18066ff60d5003b3",
    ...
  ]
}
```

## 🔍 Use Cases
- Snapshotting holders for a collection
- Running airdrop campaigns
- Building dashboards and analytics tools
- Checking active ownership across contracts

**Docs → [Get NFT Owners](https://docs.moralis.com/web3-data-api/evm/reference/get-nft-owners)**
