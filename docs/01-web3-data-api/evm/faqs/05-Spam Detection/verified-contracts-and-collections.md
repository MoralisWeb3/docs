---
title: "Verified Contracts & Collections"
slug: "/web3-data-api/evm/verified-contracts-collections"
description: "Learn how contract and collection verification works on Coingecko and OpenSea."
sidebar_position: 1
---

### Verified Contracts

The `verified_contract` status indicates that the contract has been verified by Coingecko, not by Etherscan. This means the contract has passed certain criteria and has been reviewed by the Coingecko team for legitimacy and trustworthiness.

When a contract is marked as `verified`, it adds an extra layer of security, helping developers and users distinguish between legitimate contracts and potential scams.

### Verified Collections

The `verified_collection` status is applied to NFT collections that have been verified by OpenSea. This signifies that OpenSea has reviewed and validated the collection, ensuring it is legitimate and trustworthy.

Having a verified collection badge on OpenSea helps users easily identify authentic collections, reducing the risk of falling for fake or misleading projects.

### Supported Endpoints

The verified contract and collection status is available on the following endpoints:

- [Get ERC20 token metadata by contract](https://docs.moralis.io/web3-data-api/reference/get-token-metadata)
- [Get NFTs by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-nfts)
- [Get NFT metadata](https://docs.moralis.io/web3-data-api/evm/reference/get-nft-metadata)

### Supported Chains

Both verified contract and verified collection statuses are supported on all EVM chains.
