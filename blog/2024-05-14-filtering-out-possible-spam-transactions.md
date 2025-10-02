---
title: "Stream API: Filtering Out Possible Spam Transactions"
slug: "filtering-out-possible-spam-transactions"
authors:
  name: Ossian Markiewicz
tags: [Stream API]
---

We are thrilled to announce a new feature in our Streams API: the ability to filter out potential spam transactions!

<!-- truncate -->

Certain contract addresses are associated with spam, phishing attempts, or other suspicious activities. We label these addresses as possibleSpam = true. For more information, see [Spam Detection](https://docs.moralis.io/streams-api/evm/spam-detection).

To help you maintain clean and relevant data streams, you can now set our new property `filterPossibleSpamAddresses` to `true`.

This configuration will exclude any transactions (including native transactions, internal transactions, and contract events) related to contracts marked as `possibleSpam = true` from triggering webhooks and consuming usage.

By default, filterPossibleSpamAddresses is set to false.

Here are examples of spam transactions that would be excluded:

- [Transaction 1](https://polygonscan.com/tx/0x01709e31d9072a87c606a1a439ec34ef8e0ce2a4117ddad1c9f5a289f4033791)
- [Transaction 2](https://polygonscan.com/tx/0xb9780d586c524195c64f080709f54d76764144a6c05872e32974d192a9ca1de3)
- [Transaction 3](https://polygonscan.com/tx/0x5a879e9a244db9e82de812f17a9bcc9329f4c28cd32fe54f5d9f9138991739a6)

We hope this new feature will enhance your experience with our Streams API.

Check-out the full documentation [here](https://docs.moralis.io/streams-api/evm/streams-configuration/filter-streams#filtering-out-possible-spam-transactions).
