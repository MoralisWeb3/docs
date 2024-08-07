---
title: "New DeFi Protocol Added: Pendle"
slug: "new-defi-protocol-pendle"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Our DeFi endpoints now support Pendle on Ethereum, allowing you to track over $2.92b in TVL! 🔥

### Endpoints in Scope
Our Pendle integration is live across the following endpoints:
- **[DeFi Protocols by Wallet](/web3-data-api/evm/reference/wallet-api/get-defi-summary?address=0xcB1C1FdE09f811B294172696404e88E658659905&chain=eth):** This endpoint provides a summary breakdown of all protocols that the wallet is currently interacting with, as well as summary wallet stats including the total USD value held in DeFi protocols, as well as the total unclaimed USD value available.
- **[DeFi Positions by Wallet](/web3-data-api/evm/reference/wallet-api/get-defi-positions-summary?address=0xcB1C1FdE09f811B294172696404e88E658659905&chain=eth):** This endpoint provides a summary breakdown of all protocol positions that the wallet is currently interacting with in a standardized format, with each position being an individual object.
- **[Get Detailed DeFi Positions by Wallet and Protocol](/web3-data-api/evm/reference/wallet-api/get-defi-positions-by-protocol?address=0xcB1C1FdE09f811B294172696404e88E658659905&protocol=uniswap-v3&chain=eth):** This endpoint provides a detailed breakdown of all positions for a given wallet and protocol, including protocol/position-specific data within position_details.

### Chain Coveraage
Pendle is currently live on Ethereum which accounts for 90% of Pendle's TVL. 

For a detailed breakdown of supported protocols per chain, check out the [Supported DeFi Protocols page](/web3-data-api/evm/defi-protocols-and-chains).

Stay tuned as we continue to expand our protocol and chain coverage in the coming weeks! 🚀
