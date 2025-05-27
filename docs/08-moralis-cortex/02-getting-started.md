---
title: "Getting Started with Moralis Cortex"
description: "Quick start guide to begin using Moralis Cortex for AI-powered Web3 intelligence in minutes."
sidebar_label: "Getting Started"
slug: /cortex/getting-started
sidebar_position: 3
---

# Getting Started with Moralis Cortex

Get up and running with AI-powered Web3 intelligence in minutes. This guide will help you make your first blockchain query using natural language.

## Choose Your Path

Moralis Cortex offers two ways to access AI-powered blockchain insights:

### 🌐 Cortex API (Recommended for Getting Started)

**Perfect for:** Quick prototyping, testing, and production apps without infrastructure overhead.

- ✅ No setup required
- ✅ Hosted and maintained by Moralis
- ✅ Enterprise-grade reliability
- ✅ Start building immediately

### 🧩 MCP Server (Self-Hosted)

**Perfect for:** Full control, custom integrations, and enterprise security requirements.

- ✅ Run in your infrastructure
- ✅ Customize LLM models
- ✅ Complete control over data
- ✅ Privacy and compliance focused

---

## Quick Start with MCP Server

### Step 1: Install the MCP Server

```bash
# Install via npm globally
npm install -g @moralisweb3/api-mcp-server

# Or use npx (no installation required)
npx @moralisweb3/api-mcp-server --version
```

### Step 2: Configure Your Environment

```bash
# Set your API key in your environment, use the template as .env.example
MORALIS_API_KEY="your_api_key_here"
```

### Step 3: Test the Installation

```bash
# Run the MCP server with stdio transport
moralis-api-mcp --transport stdio

# Or run with npx
npx @moralisweb3/api-mcp-server --transport stdio
```

### Step 4: Quick Install for Claude Desktop

```bash
# Install automatically via Smithery
npx -y @smithery/cli install @MoralisWeb3/moralis-mcp-server --client claude
```

### Step 5: Manual Configuration for Claude Desktop

Add to your Claude Desktop config file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "moralis": {
      "command": "npx @moralisweb3/api-mcp-server",
      "args": [],
      "env": {
        "MORALIS_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Step 6: Restart Claude Desktop

After configuration, restart Claude Desktop and you should see MCP tools available in your conversation.

---

## Your First Queries

Try these example queries to see Cortex in action:

### **Basic Price Queries**

```
"What's the current price of PEPE and Ethereum?"
```

### **Wallet Analysis**

```
"What tokens does wallet 0xab71...4321 hold?"
```

### **NFT Exploration**

```
"Show me the NFTs owned by vitalik.eth on Base"
```

### **Portfolio Insights**

```
"What is the current net worth in USD of wallet 0xabc...123?"
```

### **Market Intelligence**

```
"What is the current trading sentiment for TOSHI on Base — bullish or bearish?"
```

### **Historical Analysis**

```
"When was wallet 0xabc...123 first and last seen active on Ethereum, Base, and Polygon?"
```

### **Transaction History**

```
"Show me the complete transaction history for 0xabc...123 across Ethereum, Base, and BNB Chain"
```

### **Whale Watching**

```
"Find wallet addresses that are likely associated with Coinbase"
```

### **Token Analytics**

```
"Analyze the current holder distribution of SPX6900 — include whales, small holders, and recent growth trends"
```

### **Price Trends**

```
"Show me PEPE's daily OHLC data for the past 30 days and provide a summary of the trend"
```

---

## Understanding Response Formats

### API Response Structure

Cortex returns both human-readable summaries and structured data:

```json
{
  "response": {
    "summary": "Human-readable explanation of the data",
    "structuredData": {
      "key": "value",
      "timestamp": "2025-05-27T10:30:00Z"
    }
  },
  "chatId": "session-identifier",
  "usage": {
    "tokensUsed": 145,
    "requestCount": 1
  }
}
```

### MCP Server Response

When using the MCP server, responses come through your AI client (Claude, Cursor, etc.) with:

- **Natural language explanations** formatted for easy reading
- **Structured data** when available
- **Context retention** across conversation turns
- **Tool usage transparency** showing which APIs were called

---

## Supported Blockchains

Cortex supports queries across multiple blockchain networks - all networks supported in web data API are supported in Cortex.

- **Ethereum** - ETH, ERC-20 tokens, NFTs
- **Base** - Native tokens, Coinbase ecosystem
- **Polygon** - MATIC, Polygon-native assets
- **BNB Chain** - BNB, BSC ecosystem
- **Avalanche** - AVAX, Avalanche C-Chain
- **Arbitrum** - L2 scaling solution
- **Optimism** - Optimistic rollup data
- **And more...** - Additional chains being added regularly

---

## Common Use Cases

### 1. **Portfolio Dashboards**

Build user-friendly interfaces that explain crypto holdings in plain language.

### 2. **Trading Bots**

Create AI-powered trading assistants that understand market conditions and wallet behavior.

### 3. **Analytics Tools**

Develop sophisticated analysis tools that can explain complex on-chain patterns.

### 4. **Customer Support**

Build chatbots that can answer user questions about their wallets and transactions.

### 5. **Research Platforms**

Create tools for crypto researchers to quickly analyze tokens, wallets, and market trends.

### 6. **DeFi Applications**

Add intelligence to DeFi apps to help users understand risks, yields, and opportunities.

---

## What's Next?

You're now ready to build amazing AI-powered Web3 applications! The possibilities are endless:

- Build the next generation of portfolio trackers
- Create intelligent trading assistants
- Develop powerful analytics platforms
- Design user-friendly DeFi interfaces
- Build educational tools for crypto newcomers

Ready to dive deeper? Choose your path and let's build the future of Web3 together.
