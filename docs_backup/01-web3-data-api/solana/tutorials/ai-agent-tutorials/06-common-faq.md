---
title: "Frequently Asked Questions (FAQ)"
slug: "../faq"
description: "Find answers to common questions about AI agents and Moralis integration."
sidebar_label: "FAQ"
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

### **What is an AI Agent?**

AI agents are autonomous programs designed to analyze data, make decisions, and execute actions with minimal human intervention. In Web3, AI agents can interact with blockchain data, monitor transactions, execute trades, and provide analytics.

### **Why integrate Moralis with AI agents?**

Moralis provides structured, real-time, and historical blockchain data, making it easier for AI agents to interact with Web3 ecosystems. With APIs for wallets, tokens, DeFi, NFTs, and real-time event tracking, Moralis enhances AI-driven decision-making and automation.

### **How do I integrate Moralis APIs with my AI agent?**

1. Sign up for a Moralis account and get your API key.
2. Install the Moralis SDK:
   ```bash
   npm install moralis
   ```
3. Initialize Moralis in your AI agent code:

   ```javascript
   import Moralis from "moralis";

   Moralis.start({
     apiKey: "YOUR_MORALIS_API_KEY",
   });
   ```

4. Start making API calls to fetch blockchain data for your AI workflows.

### **Which blockchains does Moralis support?**

Moralis supports Ethereum, Solana, and over 10 EVM-compatible chains, including Polygon, BSC, Avalanche, Arbitrum, and Optimism.

### **Can I use Moralis APIs for real-time event tracking?**

Yes! Moralis **Streams API** enables real-time blockchain event tracking, allowing AI agents to monitor wallet activity, token swaps, and contract executions.

### **What can I build with Moralis and AI agents?**

- **AI Trading Bots**: Automate trades using real-time price data and liquidity insights.
- **Twitter AI Agents**: Analyze blockchain trends and post real-time updates.
- **DeFi Monitoring Agents**: Track liquidity pools, token pairs, and yield farming.
- **NFT Discovery Tools**: Identify trending collections and analyze on-chain NFT activity.
- **Security & Fraud Detection**: Detect suspicious transactions and analyze wallet behavior.

### **Can Moralis help AI agents interact with smart contracts?**

Yes, Moralis **Blockchain API (RPC Nodes)** allows AI agents to call smart contract functions, read blockchain state, and execute transactions.

### **How do AI agents use Moralis to detect wallet risks?**

AI agents can use Moralis **Wallet API** and **Transaction API** to analyze wallet history, identify high-risk transactions, and flag suspicious activity.

### **Is Moralis free to use?**

Moralis offers a free plan with limited API calls per month. For higher limits and advanced features, check [Moralis Pricing](https://developers.moralis.com/pricing).

### **What are the rate limits for Moralis APIs?**

Rate limits depend on your subscription plan. Free-tier users have lower API request limits, while paid plans offer higher throughput and priority access.

### **Can I upgrade my plan if I need more API calls?**

Yes, you can upgrade your plan anytime through the [Moralis dashboard](https://admin.moralis.com/).

## **Troubleshooting**

### **I'm getting a 403 error when calling Moralis APIs. What should I do?**

- Check if your API key is valid and correctly set in your environment variables.
- Ensure your API key has the required permissions.
- Verify that you haven't exceeded your rate limits.

### **How do I debug API call failures?**

- Inspect the API response messages for errors.
- Use tools like Postman or cURL to test API responses.
- Check the [Moralis API Documentation](https://docs.moralis.com/) for correct API usage.

### **Where can I find Moralis documentation?**

You can find the full API reference and integration guides at [Moralis Docs](https://docs.moralis.com/).
