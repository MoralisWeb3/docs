---
title: "RPC Node FAQs"
slug: "/resources/rpc-faqs"
sidebar_position: 3
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# RPC Node FAQs

This FAQ section covers some of the most commonly asked questions about Moralis RPC Nodes, including limitations, supported features, and important technical details.

---

### 1. Does Moralis support WebSockets?

No, Moralis RPC Nodes only support JSON-RPC over HTTP/S. We do not support WebSockets for RPC communications at this time.

---

### 2. What type of API does Moralis offer for RPC Nodes?

Moralis provides a **JSON-RPC API** that follows the standard JSON-RPC 2.0 specification. All interactions with blockchain nodes occur through standard HTTP/S requests.

---

### 3. Are there chain-specific RPC documentation pages?

Yes, Moralis offers detailed **chain-specific pages** for all supported networks. These pages include specific RPC methods, endpoints, and important configuration details per blockchain. You can navigate to these pages from the Moralis documentation to find the appropriate RPC methods for each blockchain.

---

### 4. What is the maximum size for batch requests?

The maximum size for batch requests is **20 requests per batch**. If you need to send more than 20 requests, you will need to split them into multiple batches.

---

### 5. What are the limits for querying block ranges?

The **current block window** (or block range) for making RPC queries is limited to **100 blocks** per request. If you need a higher limit, you can reach out to our support team for assistance with custom block range limits.

---

### 6. How does rate limiting work for Moralis RPC Nodes?

Rate limiting is enforced at the **account level**, not at the node level. This means that all RPC requests you make across different nodes within your account will count toward your total request quota. If you need higher limits, please consider upgrading your plan or contacting support for further assistance.

---

## Need More Help?

If you have additional questions or need help with specific configurations, please reach out to our support team or consult the [Moralis documentation](https://docs.moralis.io/rpc-nodes).

---
