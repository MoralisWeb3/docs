---
title: "DeFi Positions"
slug: "defi-positions-v1"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Our DeFi Positions feature is now fully live! 🚀 We're excited to announce the launch of three powerful new endpoints that make it easier than ever to fetch a wallet's DeFi balance and positions. 🤩

<!-- truncate -->

### New Endpoints
- **[DeFi Protocols by Wallet](https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getDefiSummary):** This endpoint provides a summary breakdown of all protocols that the wallet is currently interacting with, as well as summary wallet stats including the total USD value held in DeFi protocols, as well as the total unclaimed USD value available.
- **[DeFi Positions by Wallet](https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getDefiPositionsSummary):** This endpoint provides a summary breakdown of all protocol positions that the wallet is currently interacting with in a standardized format, with each position being an individual object.
- **[Get Detailed DeFi Positions by Wallet and Protocol](https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getDefiPositionsByProtocol):** This endpoint provides a detailed breakdown of all positions for a given wallet and protocol, including protocol/position-specific data within position_details.

### Protocols & Chains
This initial release sees support for the following:
- **Protocols:** Uniswap (v2 & v3), Aave (v2 & v3), Eigenlayer, Lido, MakerDAO, PancakeSwap, SushiSwap and many more, with even more coming very soon.
- **Chains:** Ethereum, Polygon, Binance, Base, Optimism, Arbitrum, Avalanche and Linea

For a detailed breakdown of supported protocols per chain, check out the [Supported DeFi Protocols page](/web3-data-api/evm/defi-protocols-and-chains).

Stay tuned as we continue to expand our protocol and chain coverage in the coming weeks! 🚀
