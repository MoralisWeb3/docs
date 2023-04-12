---
title: "Spam Detection"
slug: "../../spam-detection"
description: "Spam detection is designed to provide an extra layer of protection and help you easily identify potentially harmful contracts."
sidebar_position: 6
---

Spam detection is designed to provide an extra layer of protection and help you easily identify possible spam contracts.

### How does it work?
Our latest update adds a new property called **`possibleSpam`** for the following items in the webhook: `erc20Transfers`, `erc20Approvals`, `nftTokenApprovals`, and `nftTransfers`. This property can be **`true`** or **`false`**,depending on whether the contract address is associated with spam, phishing attempts, or suspicious activities.

With this feature you can effortlessly identify and hide suspicious contracts or notify your customers about potential risks associated with them.

### Classifying contracts as spam 

All contracts that are marked as spam have been evaluated against a set of criteria. 

Aspects like contract compliance with standards, minting & transfer activities (honeypot activity, etc.), whether it's a copycat, and other undisclosed evaluation factors have been taken into consideration.

### Community support! Help report spam or suspicious contracts 

This is a starting point for us building out the best spam library in the whole of Web3, and we would love our community to contribute to this! We're currently working on an endpoint that will allow customers to programmatically submit spam contracts for review. If a contract meets our criteria, it will be marked as spam. In the meantime, manual reports can be submitted via our public submission board at [https://roadmap.moralis.io/b/report-spam-contracts/](https://roadmap.moralis.io/b/report-spam-contracts/)

### What chains is this supported on?
This feature is supported on all EVMs, however, our initial classification includes contracts from:

- Ethereum mainnet
- Polygon mainnet
- Binance mainnet
