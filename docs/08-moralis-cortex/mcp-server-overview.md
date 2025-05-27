---
title: "MCP Server Overview"
description: "Learn about the Moralis MCP Server - a self-hosted engine that connects AI models to blockchain data."
sidebar_label: "Overview"
slug: /cortex/mcp-server
sidebar_position: 1
---

# MCP Server Overview

The **Moralis MCP Server** is a local or cloud-deployable engine that connects natural language prompts to real blockchain insights — allowing AI models to query wallet activity, token metrics, dapp usage, and more without custom code or SQL.

Built on top of the [Model Context Protocol](https://github.com/modelcontextprotocol/spec), this server makes it easy for LLMs to talk to Moralis APIs in a consistent, explainable, and extensible way.

## Key Features

- **🔗 Fully pluggable**: Swap LLMs, customize retrieval logic, or extend with your own tools
- **🧱 Works with OpenAI, Claude, and open-source models**
- **🧠 Powers agents, devtools, bots, dashboards, and beyond**

## When to Use MCP Server

**✅ Perfect for:**

- Enterprises with security/compliance requirements
- Developers building deeply integrated AI apps
- Teams wanting full control over data and model behavior
- Custom LLM model usage (open-source, fine-tuned models)
- Privacy-focused applications

**❌ Consider Cortex API instead if:**

- You want to get started quickly without setup
- You don't need custom LLM models
- Infrastructure management isn't a priority

## Common Use Cases

- **🤖 AI agents & assistants**: "What's this wallet's trading history?"
- **📈 Devtools**: On-chain QA, testing, CLI integrations
- **📊 Dashboards**: Natural language to charts/data
- **📉 Monitoring**: Alerting & summarization for tokens/dapps
- **🧠 Trading bots**: LLM-driven strategies with real blockchain grounding

## Architecture

The MCP Server acts as a bridge between AI models and Moralis data:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   AI Model      │    │  MCP Server     │    │  Moralis APIs   │
│ (GPT-4, Claude) │◄──►│ (Your Control)  │◄──►│ (Blockchain Data)│
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Transport Options

The server supports multiple transport types:

- **`stdio`**: Standard input/output (default) - for AI clients
- **`web`**: HTTP server - for web applications
- **`streamable-http`**: HTTP with streaming - for real-time apps

## Installation Options

### NPM Package

```bash
npm install -g @moralisweb3/api-mcp-server
```

### Smithery (Claude Desktop)

```bash
npx -y @smithery/cli install @MoralisWeb3/moralis-mcp-server --client claude
```

### Direct Usage

```bash
npx @moralisweb3/api-mcp-server
```

## Supported Integrations

### AI IDEs

- **Cursor** - Code with AI assistance
- **Continue** - VS Code AI extension
- **Cody** - Sourcegraph AI coding assistant

### Desktop Apps

- **Claude Desktop** - Anthropic's desktop app
- **ChatGPT Desktop** - OpenAI's desktop app

### Custom Applications

- **OpenAI API** - Direct integration
- **Claude API** - Anthropic's API
- **Open-source models** - Llama, Mistral, etc.

## What You Can Query

The MCP Server enables natural language queries for:

- **Token data**: Prices, trading sentiment, holder distribution
- **Wallet analysis**: Holdings, transaction history, net worth
- **NFT information**: Ownership, metadata, collections
- **DeFi activities**: Lending, borrowing, yield farming positions
- **Market intelligence**: Whale movements, exchange flows

## Example Queries

```
- What's the current price of PEPE and Ethereum?
- Show me the NFTs owned by vitalik.eth on Base
- What tokens does wallet 0xab71...4321 hold?
- Find wallet addresses likely associated with Coinbase
- Analyze PEPE's holder distribution including whales and small holders
```

## Getting Started

Ready to deploy your own MCP Server?

1. **[Getting Started Guide](/cortex/mcp-server/getting-started)** - Installation and setup
2. **[Pick Integration](/cortex/integrations)** - Connect with your AI tools
3. **[Configure Setup](/cortex/mcp-server/configuration)** - Customize for your needs

## GitHub Repository

Find the complete source code, contribute, or report issues:

**🔗 [MoralisWeb3/moralis-mcp-server](https://github.com/MoralisWeb3/moralis-mcp-server)**

## NPM Package

Install directly from NPM:

**📦 [@moralisweb3/api-mcp-server](https://www.npmjs.com/package/@moralisweb3/api-mcp-server)**

---
