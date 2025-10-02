---
title: "Spam Detection for Streams API 🧐⚠️"
slug: "2023-04-06-spam-detection"
authors:
  name: Ossian Markiewicz
tags: [Streams API]
---

We're excited to announce the launch of our new spam detection feature to EVM Streams API! 

<!-- truncate -->

Property called **`possibleSpam`** for the following items in the webhook: `erc20Transfers`, `erc20Approvals`, `nftTokenApprovals`, and `nftTransfers`. This property can be **`true`** or **`false`**,depending on whether the contract address is associated with spam, phishing attempts, or suspicious activities.

[Check out our docs](/streams-api/evm/spam-detection) for more information about this feature including which endpoints it's active on.
