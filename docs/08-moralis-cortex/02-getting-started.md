---
title: "Getting Started with Moralis Cortex"
description: "Quick start guide to begin using Moralis Cortex for AI-powered Web3 intelligence in minutes."
sidebar_label: "Getting Started"
slug: /cortex/getting-started
sidebar_position: 3
---

# Getting Started with Moralis Cortex

Get up and running with AI-powered Web3 intelligence in minutes. This guide will help you make your first blockchain query using natural language.

## What is Moralis Cortex?

Moralis Cortex connects AI models to blockchain data through the **Model Context Protocol (MCP)**. Ask questions like "What tokens does vitalik.eth hold?" and get intelligent responses powered by real-time Web3 data.

## Choose Your Path

### 1. 🧩 MCP Server (Self-Hosted)

**Perfect for:** Full control, custom integrations, and privacy-focused applications.

- ✅ Run in your infrastructure
- ✅ Use any LLM model (OpenAI, Claude, open-source)
- ✅ Complete control over data
- ✅ Available as NPM package

**Quick install:**

```bash
npx @moralisweb3/api-mcp-server --version
```

### 2. 🌐 Cortex API
The Cortex API lets you query Moralis AI models for real-time or standard responses. Ask questions, get insights - streamed or all at once.

**Perfect for:** Quick prototyping, testing, and production apps without infrastructure overhead.

- ✅ No setup required
- ✅ Hosted and maintained by Moralis
- ✅ Enterprise-grade reliability
- ✅ Start building immediately

**API Endpoint:**

```bash
https://cortex-api.moralis.com/chat
```

**Swagger Docs:** <br/>
https://cortex-api.moralis.com/documentation#/

## Quick Start with Cortex API

### Step 1: Get Your API Key

1. Visit [Moralis Admin Panel](https://admin.moralis.com)
2. Navigate to [API Keys](https://admin.moralis.com/api-keys)
3. Copy your API key

### Step 2: Make Your First Request

Send a `POST` request to the Cortex API with your prompt.

#### Authentication
Include your API key in the `X-API-KEY` header.

#### Example Request 

```bash
curl -X POST https://cortex-api.moralis.com/chat \
  -H "Content-Type: application/json" \
  -H "X-API-KEY: YOUR_API_KEY_HERE" \
  -d '{
    "prompt": "Provide a detailed analysis of PEPE holders, is the trend bullish or bearish?,
    "stream": false,
    "model": "gpt-4.1-mini"
  }'
```

#### Example Response

```
{
    "text": "Here is a detailed analysis of PEPE token holders:\n\n- Total holders: 468,303\n- Holder acquisition breakdown:\n  - Swap: 125,517 holders\n  - Transfer: 324,912 holders\n  - Airdrop: 17,874 holders\n\nHolder change trends:\n- In the last 5 minutes: decreased by 2 holders (-0.00043%)\n- In the last 1 hour: decreased by 117 holders (-0.025%)\n- In the last 6 hours: decreased by 13 holders (-0.0028%)\n- In the last 24 hours: increased by 323 holders (+0.069%)\n- In the last 3 days: increased by 2,109 holders (+0.45%)\n- In the last 7 days: increased by 4,081 holders (+0.87%)\n- In the last 30 days: increased by 15,040 holders (+3.2%)\n\nHolder supply concentration:\n- Top 10 holders control 39% of the supply\n- Top 25 holders control 53% of the supply\n- Top 50 holders control 64% of the supply\n- Top 100 holders control 73% of the supply\n- Top 250 holders control 82% of the supply\n- Top 500 holders control 87% of the supply\n\nHolder distribution by size:\n- Whales: 119\n- Sharks: 61\n- Dolphins: 617\n- Fish: 2,071\n- Octopus: 6,042\n- Crabs: 21,352\n- Shrimps: 438,041\n\nTrend analysis:\n- The number of holders has been increasing steadily over the last 24 hours, 3 days, 7 days, and 30 days, indicating growing interest and accumulation.\n- The supply is somewhat concentrated among the top holders, but there is a large base of smaller holders (shrimps and crabs).\n- The recent slight decrease in holders in the last 1 hour and 6 hours could be short-term fluctuations.\n\nOverall, the trend appears bullish with a growing holder base and accumulation over the past month."
}
```

Once formatted, the output will look like:

```
Here is a detailed analysis of PEPE token holders:

Total holders: 468,303

Holder acquisition breakdown:
- Swap: 125,517 holders
- Transfer: 324,912 holders
- Airdrop: 17,874 holders
 
Holder change trends:
- In the last 5 minutes: decreased by 2 holders (-0.00043%)
- In the last 1 hour: decreased by 117 holders (-0.025%)
- In the last 6 hours: decreased by 13 holders (-0.0028%)
- In the last 24 hours: increased by 323 holders (+0.069%)
- In the last 3 days: increased by 2,109 holders (+0.45%)
- In the last 7 days: increased by 4,081 holders (+0.87%)
- In the last 30 days: increased by 15,040 holders (+3.2%)
 
Holder supply concentration:
- Top 10 holders control 39% of the supply
- Top 25 holders control 53% of the supply
- Top 50 holders control 64% of the supply
- Top 100 holders control 73% of the supply
- Top 250 holders control 82% of the supply
- Top 500 holders control 87% of the supply

Holder distribution by size:
- Whales: 119
- Sharks: 61
- Dolphins: 617
- Fish: 2,071
- Octopus: 6,042
- Crabs: 21,352
- Shrimps: 438,041

Trend analysis:
- The number of holders has been increasing steadily over the last 24 hours, 3 days, 7 days, and 30 days, indicating growing interest and accumulation.
- The supply is somewhat concentrated among the top holders, but there is a large base of smaller holders (shrimps and crabs).
- The recent slight decrease in holders in the last 1 hour and 6 hours could be short-term fluctuations.

Overall, the trend appears bullish with a growing holder base and accumulation over the past month.
```

**🎉 You're all set:** You can now build streaming bots, assistants, chat interfaces, and more - powered by Cortex.


### Supported Parameters

| Field | Type | Required | Description |
| ----- | ----- |------- | ---------- |
| `prompt` | string | ✅ | The question or message you want to send to the AI. |
| `stream` | boolean | ❌ | If `true`, enables real-time streaming (chunked responses). Default: `false`. |
| `model` | string | ❌ | The model to use. Currently supports: `gpt-4.1-nano`, `gpt-4.1-mini`. Default: `gpt-4.1-nano`. |



---

## Quick Start with MCP Server

### Step 1: Get Your API Key

1. Visit [Moralis Admin Panel](https://admin.moralis.com)
2. Navigate to [API Keys](https://admin.moralis.com/api-keys)
3. Copy your API key

### Step 2: Choose Your Integration

#### **AI IDEs & Code Editors**

- **[Cursor](/cortex/integrations/cursor)** - AI-powered code editor
- **[Windsurf](/cortex/integrations/windsurf)** - Next-generation AI IDE

#### **Desktop AI Assistants**

- **[Claude Desktop](/cortex/integrations/claude-desktop)** - Anthropic's desktop app

#### **API Integrations**

- **[ChatGPT API](/cortex/integrations/chatgpt-api)** - OpenAI's API with remote MCP
- **[Claude API](/cortex/integrations/claude-api)** - Anthropic's API with remote MCP

### Step 3: Follow Your Integration Guide

Each integration has specific setup instructions. Choose your preferred tool above and follow the setup guide.

---

## Example Queries

Once set up, try these natural language queries:

- "What's the current price of PEPE and Ethereum?"
- "Show me the NFTs owned by vitalik.eth on Base"
- "What tokens does wallet 0xabc...123 hold?"
- "Analyze the current holder distribution of SPX6900"
- "Find wallet addresses likely associated with Coinbase"

## Supported Blockchains

Cortex supports queries across multiple blockchain networks:

- **Ethereum** - ETH, ERC-20 tokens, NFTs
- **Base** - Native tokens, Coinbase ecosystem
- **Polygon** - MATIC, Polygon-native assets
- **BNB Chain** - BNB, BSC ecosystem
- **Avalanche** - AVAX, Avalanche C-Chain
- **Arbitrum** - L2 scaling solution
- **Optimism** - Optimistic rollup data
- **And more...** - All networks supported in Moralis Web Data API

## Installation Options

### NPM Package

```bash
# Install globally
npm install -g @moralisweb3/api-mcp-server

# Or use without installation
npx @moralisweb3/api-mcp-server
```

### Auto-Install (Claude Desktop)

```bash
npx -y @smithery/cli install @MoralisWeb3/moralis-mcp-server --client claude
```

## What You Can Build

- **Portfolio Dashboards** - AI-powered crypto portfolio analysis
- **Trading Bots** - Intelligent market sentiment analysis
- **Analytics Tools** - Complex on-chain pattern recognition
- **DeFi Apps** - Risk assessment and yield optimization
- **Developer Tools** - Blockchain data in your development workflow

**Explore more:** [Use Cases & Examples](/cortex/use-cases)

## Next Steps

### Learn the Fundamentals

- **[Understanding MCP](/cortex/understanding-mcp/what-is-mcp)** - Learn about Model Context Protocol
- **[MCP vs Other Approaches](/cortex/understanding-mcp/mcp-vs-other-approaches)** - Compare with alternatives

### Set Up Your Environment

- **[MCP Server Documentation](/cortex/mcp-server)** - Complete setup guide
- **[Choose Your Integration](/cortex/integrations)** - AI tools and APIs

### Get Help

- **[FAQs](/cortex/faqs)** - Common questions and solutions
- **[GitHub Repository](https://github.com/MoralisWeb3/moralis-mcp-server)** - Source code and issues
