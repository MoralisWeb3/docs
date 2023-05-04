---
title: "Enhanced ERC20 Endpoints with Added Metadata"
slug: "enahnced-erc20-metadata"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we have enriched all our ERC20 endpoints with extra metadata including token `name`, `symbol`, `icon`, and `decimals` 🎉 

Developers can now more easily identify the specific ERC20 tokens involved in transfers, mints, burns, and approvals without having to make additional API calls. 

Previously, token metadata were only available through the [ERC20 metadata](/web3-data-api/evm/reference/get-token-metadata) endpoint.

This metadata is now available on the following endpoints:

- [ERC20 transfers (by wallet or contract)](/web3-data-api/reference/get-erc20-transfers)
- [ERC20 mints](/web3-data-api/evm/reference/get-erc20-mints)
- [ERC20 burns](/web3-data-api/evm/reference/get-erc20-burns)
- [ERC20 approvals](/web3-data-api/evm/reference/get-erc20-approvals)
- [ERC20 token price](/web3-data-api/evm/reference/get-token-price)
