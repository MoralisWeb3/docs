---
title: "Ethereum Holesky (testnet)"
slug: "migrate-to-eth-holesky"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

On April 5th, 2024, we plan to deprecate Ethereum Goerli testnet and therefore advise customers to switch over to **Ethereum Holesky** testnet as soon as possible. 

Following Ethereum Goerli's deprecation on March 13th 2024, we will also fully remove support for Ethereum Goerli on April 5th. Customers that are currently still using Ethereum Goerli for historical transaction data are strongly advised to migrate to Ethereum Holesky as soon as possible.

Ethereum Holesky chain details:
- API `chain` query parameter: `holesky` or `0x4268`
- SDK chain identifier: `EvmChain.HOLESKY`

Check-out all our [supported chains here](/supported-chains).
