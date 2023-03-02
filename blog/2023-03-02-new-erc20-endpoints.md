---
title: "[API] Mints, Burns, Approvals & Transfers 🔥"
slug: "2023-03-02-new-erc20-endpoints.md"
authors:
  name: Reuben Salisbury
---

Today we have launched four new ERC20 token endpoints allowing you to quickly fetch mints, burns, approvals and transfers for any wallet or contract address 🚀

### 🆕 Mints 
Fetch all token mints by wallet address or for a given contract using `/erc20/mints`.

Example use case: lookup and monitor all mint events for the USDC contract.

[Read the docs](/web3-data-api/reference/get-erc20-mints)

### 🔥 Burns
Fetch all token burns by wallet address or for a given contract using `/erc20/burns`.

Example use case: lookup and monitor all burn events for the Wrapped Ether contract.

[Read the docs](/web3-data-api/reference/get-erc20-burns)

### 👍 Approvals
Quickly identify all approvals that exist on one or many addresses. Never forget which protocols have access to your funds!

Example use case: build your own token approval checker, similar to [Etherscan's](https://etherscan.io/tokenapprovalchecker).

[Read the docs](/web3-data-api/reference/get-erc20-approvals)

### ↪️ Transfers
We already have endpoints for ERC20 transfers, however, this new endpoint `/erc20/transfers` is more flexible, scalable and boasts faster response times; and also has the added benefit of more granular filtering (see below).

Example use case: identify all ERC20 transfers from your own wallet, or from a specific contract such as Uniswap.

[Read the docs](/web3-data-api/reference/get-erc20-transfers)

### Filtering
Each endpoint supports the following filtering:
* `contract_addresses`: One or many contract addresses to only include
* `exclude_contracts`: One or many contract addresses to exclude
* `wallet_addresses`: One or many wallet addresses to only include
* `exclude_wallets`: One or many wallet addresses to exclude
