---
title: "Spam Detection"
slug: "/web3-data-api/evm/spam-detection"
description: "Learn how to identify potentially harmful contracts and protect your users from suspicious activities."
sidebar_position: 0
---

Spam detection provides an extra layer of protection to help you identify and mitigate the risks associated with harmful contracts in the Web3 ecosystem.

### How does it work?

Our spam detection feature adds a new field called `possible_spam` to contracts (both ERC20 tokens and NFTs). This field returns `true` or `false`, indicating whether the contract address is associated with potential spam, phishing attempts, or other suspicious activities.

By using this feature, you can easily identify and hide suspicious contracts or notify users about potential risks.

### Classifying contracts as spam

Contracts marked as spam are evaluated based on multiple criteria, including but not limited to:

- Liquidity
- Exchange presence
- Team presence
- Minting and transfer activities (honeypot activity, etc.)
- Project maturity
- Other undisclosed evaluation factors

### Supported Endpoints

Spam detection is available on the following endpoints:

<ul>
  <li><a href="https://docs.moralis.io/web3-data-api/reference/get-wallet-token-balances">Get ERC20 token balance by wallet</a></li>
  <li><a href="https://docs.moralis.io/web3-data-api/reference/get-wallet-token-transfers">Get ERC20 token transfers by wallet</a></li>
  <li><a href="https://docs.moralis.io/web3-data-api/reference/get-token-metadata">Get ERC20 token metadata by contract</a></li>
  <li><a href="https://docs.moralis.io/web3-data-api/reference/get-wallet-nfts">Get NFTs by wallet</a></li>
  <li><a href="https://docs.moralis.io/web3-data-api/reference/get-wallet-nft-transfers">Get NFT transfers by wallet</a></li>
  <li><a href="https://docs.moralis.io/web3-data-api/evm/reference/get-nft-metadata">Get NFT metadata</a></li>
</ul>

### Supported Chains

This feature is supported on all EVM chains.
