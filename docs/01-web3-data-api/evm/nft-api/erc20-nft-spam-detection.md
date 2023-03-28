---
title: "Spam Detection"
slug: "../../erc20-nft-spam-detection"
description: "ERC20 and NFT spam detection is designed to provide an extra layer of protection and help you easily identify potentially harmful contracts."
sidebar_position: 6
---

ERC20 and NFT spam detection is designed to provide an extra layer of protection and help you easily identify possible spam contracts.

### How does it work?
Our latest update adds a new field called `possible_spam` to all ERC20s and NFTs. This field returns `true` or `false`, depending on whether the contract address is associated with spam, phishing attempts, or suspicious activities.

With this feature you can effortlessly identify and hide suspicious contracts or notify your customers about potential risks associated with them.

### Classifying contracts as spam 
All contracts that are marked as spam have been evaluated against a set of criteria. 

For ERC20s, factors such as liquidity, exchange presence, team presence, and project maturity have been considered. For NFTs, aspects like contract compliance with standards, minting & transfer activities (honeypot activity, etc.), whether it's a copycat, and other undisclosed evaluation factors have been taken into consideration.

### Community support! Help report spam or suspicious contracts 
This is a starting point for us building out the best spam library in the whole of Web3, and we would love our community to contribute to this! We're currently working on an endpoint that will allow customers to programmatically submit spam contracts for review. If a contract meets our criteria, it will be marked as spam. In the meantime, manual reports can be submitted via our public submission board at [https://roadmap.moralis.io/b/report-spam-contracts/](https://roadmap.moralis.io/b/report-spam-contracts/)

### What endpoints is this available on?
Spam detection is available on the following endpoints:

**ERC20s:**
- [Get ERC20 token balance by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-token-balances)
- [Get ERC20 token transfers by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-token-transfers)
- [Get ERC20 token transfers by contract](https://docs.moralis.io/web3-data-api/reference/get-token-transfers)
- [Get ERC20 token metadata by contract](https://docs.moralis.io/web3-data-api/reference/get-token-metadata)
- [Get ERC20 token metadata by symbols](https://docs.moralis.io/web3-data-api/reference/get-token-metadata-by-symbol)
- [Get ERC20 token transfers](https://docs.moralis.io/web3-data-api/reference/get-erc20-transfers)
- [Get ERC20 token approvals](https://docs.moralis.io/web3-data-api/reference/get-erc20-approvals)

**NFTs:**
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

