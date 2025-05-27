---
title: "MCP Server Getting Started"
description: "Quick setup guide for the Moralis MCP Server - from installation to first queries."
sidebar_label: "Getting Started"
slug: /cortex/mcp-server/getting-started
sidebar_position: 2
---

# MCP Server Getting Started

Get your Moralis MCP Server running in minutes. This guide covers installation, configuration, and making your first blockchain queries through AI models.

## Prerequisites

- **Node.js** (version 16 or higher)
- **Moralis API Key** - Get one from [admin.moralis.com](https://admin.moralis.com/api-keys)

## Installation

### Option 1: Global Install

```bash
npm install -g @moralisweb3/api-mcp-server
```

### Option 2: Use with npx (Recommended)

```bash
# No installation needed - run directly
npx @moralisweb3/api-mcp-server --version
```

### Option 3: Auto-install for Claude Desktop

```bash
npx -y @smithery/cli install @MoralisWeb3/moralis-mcp-server --client claude
```

## Get Your API Key

1. Go to [Moralis Admin Panel](https://admin.moralis.com)
2. Sign up and log in
3. Navigate to [API Keys](https://admin.moralis.com/api-keys)
4. Copy your API key
5. Set it in your environment:

```bash
export MORALIS_API_KEY=<your_api_key>
```

> ⚠️ **Note:** Some features require a Moralis paid plan for full access and production performance.

## Basic Usage

### Run with Default Settings

```bash
# Using global install
moralis-api-mcp --transport stdio

# Using npx
npx @moralisweb3/api-mcp-server --transport stdio
```

### Transport Options

```bash
# Standard input/output (default - for AI clients)
moralis-api-mcp --transport stdio

# HTTP server (for web apps)
moralis-api-mcp --transport web

# HTTP with streaming (for real-time apps)
moralis-api-mcp --transport streamable-http
```

## Connect to AI Clients

### Claude Desktop Setup

Create or edit your Claude Desktop config file:

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

Restart Claude Desktop after saving.

### Generic MCP Client Config

For other MCP-compatible clients:

```json
{
  "mcpServers": {
    "serverName": {
      "command": "npx @moralisweb3/api-mcp-server",
      "args": [],
      "env": {
        "MORALIS_API_KEY": "your_api_key"
      }
    }
  }
}
```

## Test Your Setup

Once connected to an AI client, try these queries:

### Basic Price Check

```
What's the current price of PEPE and Ethereum?
```

### Wallet Analysis

```
What tokens does wallet 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 hold?
```

### NFT Query

```
Show me the NFTs owned by vitalik.eth on Base
```

You should see the AI model using Moralis tools to fetch real blockchain data and provide intelligent responses.

## Development Setup

### Clone and Build

```bash
git clone https://github.com/MoralisWeb3/moralis-mcp-server.git
cd moralis-mcp-server

# Install dependencies
npm install

# Build the server
npm run build
```

### Development with Auto-rebuild

```bash
npm run watch
```

### Debug with MCP Inspector

```bash
npm run inspector
```

The Inspector provides a browser-based debugging interface at the URL shown in the output.

## Environment Variables

| Variable          | Required | Description          |
| ----------------- | -------- | -------------------- |
| `MORALIS_API_KEY` | Yes      | Your Moralis API key |

## Verification

### Check Installation

```bash
npx @moralisweb3/api-mcp-server --version
```

### Test API Key

```bash
# Set your key
export MORALIS_API_KEY=your_key_here

# Run server (should start without errors)
npx @moralisweb3/api-mcp-server --transport stdio
```

### Verify AI Client Connection

In your AI client (Claude Desktop, etc.), you should see:

- MCP tools available in conversations
- Ability to query blockchain data
- Structured responses with real-time data

## Common Issues

### Command Not Found

```bash
# Use npx instead of global install
npx @moralisweb3/api-mcp-server --transport stdio
```

### API Key Not Set

```bash
# Check if set
echo $MORALIS_API_KEY

# Set if missing
export MORALIS_API_KEY=your_api_key
```

### Claude Desktop Not Showing Tools

1. Check config file syntax
2. Verify file path is correct
3. Restart Claude Desktop completely
4. Check for config file typos

## Resources

- **GitHub:** [MoralisWeb3/moralis-mcp-server](https://github.com/MoralisWeb3/moralis-mcp-server)
- **NPM:** [@moralisweb3/api-mcp-server](https://www.npmjs.com/package/@moralisweb3/api-mcp-server)
- **API Docs:** [Moralis API Reference](https://deep-index.moralis.io/api-docs-2.2/)
