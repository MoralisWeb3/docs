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

### 🧩 MCP Server (Self-Hosted)

**Perfect for:** Full control, custom integrations, and privacy-focused applications.

- ✅ Run in your infrastructure
- ✅ Use any LLM model (OpenAI, Claude, open-source)
- ✅ Complete control over data
- ✅ Available as NPM package

**Quick install:**

```bash
npx @moralisweb3/api-mcp-server --version
```

### 🌐 Cortex API

**Perfect for:** Quick prototyping, testing, and production apps without infrastructure overhead.

- ✅ No setup required
- ✅ Hosted and maintained by Moralis
- ✅ Enterprise-grade reliability
- ✅ Start building immediately

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
