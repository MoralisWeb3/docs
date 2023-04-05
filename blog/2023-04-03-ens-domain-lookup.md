---
title: "ENS Domain Lookup"
slug: "ens-domain-lookup"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Our Resolve API now supports Ethereum Name Service (ENS) lookup by domain. This new feature allows you to input a `.eth` domain and receive the associated Ethereum address 🎉 

To use this new endpoint, simply make a GET request to `/api/v2/resolve/ens/{domain}` with your desired `.eth` domain appended.

For example, if you want to look up the address for` vitalik.eth`, you would make a GET request to: `/api/v2/resolve/ens/vitalik.eth`, which would return the address `0x057Ec652A4F150f7FF94f089A38008f49a0DF88e`.

### API Reference
- [ENS Lookup by Domain](/web3-data-api/evm/reference/resolve-ens-domain)
