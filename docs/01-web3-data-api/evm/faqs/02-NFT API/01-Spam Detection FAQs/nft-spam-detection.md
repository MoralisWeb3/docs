---
title: "NFT Spam Detection"
slug: "/web3-data-api/evm/nft-spam-detection"
description: "NFT spam detection is designed to provide an extra layer of protection and help you easily identify potentially harmful contracts."
sidebar_position: 3
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

NFT spam detection is designed to provide an extra layer of protection and help you easily identify possible spam contracts.

### How does it work?

Our latest update adds a new field called `possible_spam` to all NFTs. This field returns `true` or `false`, depending on whether the contract address is associated with spam, phishing attempts, or suspicious activities.

With this feature you can effortlessly identify and hide suspicious contracts or notify your customers about potential risks associated with them.

### Classifying contracts as spam

All contracts that are marked as spam have been evaluated against a set of criteria.

Aspects like contract compliance with standards, minting & transfer activities (honeypot activity, etc.), whether it's a copycat, and other undisclosed evaluation factors have been taken into consideration.

### Community support! Help report spam or suspicious contracts

This is a starting point for us building out the best spam library in the whole of Web3, and we would love our community to contribute to this! We're currently working on an endpoint that will allow customers to programmatically submit spam contracts for review. If a contract meets our criteria, it will be marked as spam. In the meantime, manual reports can be submitted via our public submission board at [https://roadmap.moralis.io/b/report-spam-contracts/](https://roadmap.moralis.io/b/report-spam-contracts/)

### What endpoints is this available on?

Spam detection is available on the following endpoints:

- [Get Multiple NFTs](https://docs.moralis.io/web3-data-api/reference/get-multiple-nfts)
- [Get NFTs by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-nfts)
- [Get NFTs by contract](https://docs.moralis.io/web3-data-api/reference/get-contract-nfts)
- [Search NFTs](https://docs.moralis.io/web3-data-api/reference/search-nfts)
- [Get NFT transfers by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-nft-transfers)
- [Get NFT transfers by contract](https://docs.moralis.io/web3-data-api/evm/reference/get-nft-contract-transfers)
- [Get NFT collections by wallet](https://docs.moralis.io/web3-data-api/evm/reference/get-wallet-nft-collections)
- [Get NFT collection metadata](https://docs.moralis.io/web3-data-api/evm/reference/get-nft-contract-metadata)
- [Get NFT metadata](https://docs.moralis.io/web3-data-api/evm/reference/get-nft-metadata)
- [Get NFT owners by contract](https://docs.moralis.io/web3-data-api/evm/reference/get-nft-owners)
- [Get NFT owners by token ID](https://docs.moralis.io/web3-data-api/evm/reference/get-nft-token-id-owners)
- [Get NFT transfers by token ID](https://docs.moralis.io/web3-data-api/evm/reference/get-nft-transfers)
- [Get NFT transfers from a block to a block](https://docs.moralis.io/web3-data-api/evm/reference/get-nft-transfers-from-to-block)
- [Get NFT transfers by block](https://docs.moralis.io/web3-data-api/evm/reference/get-nft-transfers-by-block)

### What chains is this supported on?

This feature is supported on all EVM chains.
