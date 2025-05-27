---
title: "Integrations"
description: "Connect Moralis Cortex with AI IDEs, desktop apps, and APIs for seamless blockchain intelligence in your development workflow."
sidebar_label: "Overview"
slug: /cortex/integrations
sidebar_position: 0
---

# Integrations

Connect Moralis Cortex with your favorite AI tools and development environments to bring blockchain intelligence directly into your workflow.

## Integration Options

### 🧠 AI IDEs

Bring blockchain data insights directly into your coding environment.

- **[Cursor](/cortex/integrations/cursor)** - AI-powered code editor
- **[Windsurf](/cortex/integrations/windsurf)** - Next-generation AI IDE

### 💻 Desktop Apps

Use natural language blockchain queries in desktop AI assistants.

- **[Claude Desktop](/cortex/integrations/claude-desktop)** - Anthropic's desktop app

### 🔌 API Integrations

Connect external applications to Moralis Cortex through APIs.

- **[ChatGPT API with Remote MCP](/cortex/integrations/chatgpt-api)** - OpenAI API integration
- **[Claude API with Remote MCP](/cortex/integrations/claude-api)** - Anthropic API integration

## How It Works

All integrations work through the **Model Context Protocol (MCP)**, which allows AI models to securely access external tools and data sources.

### For AI IDEs and Desktop Apps

These integrations use the **Moralis MCP Server** running locally on your machine:

```
┌─────────────────┐    ┌─────────────────┐    ┌───────────────────┐
│   AI Tool       │    │  MCP Server     │    │  Moralis APIs     │
│ (Cursor, etc.)  │◄──►│ (Your Machine)  │◄──►│ (Blockchain Data) │
└─────────────────┘    └─────────────────┘    └───────────────────┘
```

### For API Integrations

These use remote MCP servers that your applications can connect to:

```
┌─────────────────┐    ┌─────────────────┐    ┌───────────────────┐
│   Your App      │    │  Remote MCP     │    │  Moralis APIs     │
│ (ChatGPT, etc.) │◄──►│    Server       │◄──►│ (Blockchain Data) │
└─────────────────┘    └─────────────────┘    └───────────────────┘
```

## What You Can Do

Once integrated, you can ask natural language questions about blockchain data:

- **Token Analysis**: "What's the current price and sentiment for PEPE?"
- **Wallet Intelligence**: "Show me the NFTs owned by vitalik.eth"
- **Portfolio Tracking**: "What tokens does this wallet hold across all chains?"
- **Market Insights**: "Analyze the whale activity for this token"

## Getting Started

### For Local Development (Recommended)

1. Choose your AI tool: [Cursor](/cortex/integrations/cursor), [Windsurf](/cortex/integrations/windsurf), or [Claude Desktop](/cortex/integrations/claude-desktop)
2. Install the Moralis MCP Server
3. Configure your AI tool to connect
4. Start querying blockchain data with natural language

### For Production Applications

1. Choose your API: [ChatGPT API](/cortex/integrations/chatgpt-api) or [Claude API](/cortex/integrations/claude-api)
2. Set up a remote MCP server
3. Configure authentication
4. Integrate with your application

## Prerequisites

- **Moralis API Key** - Get one from [admin.moralis.com](https://admin.moralis.com/api-keys)
- **Node.js** (for MCP server installations)
- Your chosen AI tool or API access

## Support

Need help with integrations?

- **[MCP Server Documentation](/cortex/mcp-server)** - Complete setup guide
- **[API Reference](/cortex/api-reference)** - Technical documentation
- **[FAQs](/cortex/faqs)** - Common questions and solutions

---

Ready to get started? Choose your integration path below:

### AI IDEs

- **[Set up Cursor →](/cortex/integrations/cursor)**
- **[Set up Windsurf →](/cortex/integrations/windsurf)**

### Desktop Apps

- **[Set up Claude Desktop →](/cortex/integrations/claude-desktop)**

### API Integrations

- **[ChatGPT API Setup →](/cortex/integrations/chatgpt-api)**
- **[Claude API Setup →](/cortex/integrations/claude-api)**
