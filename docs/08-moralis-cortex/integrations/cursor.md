---
title: "Cursor Integration"
description: "Integrate Moralis Cortex with Cursor IDE to bring AI-powered blockchain intelligence directly into your coding environment."
sidebar_label: "Cursor"
slug: /cortex/integrations/cursor
sidebar_position: 1
---

# Cursor Integration

Integrate Moralis Cortex with Cursor IDE to bring AI-powered blockchain intelligence directly into your coding environment. Query blockchain data using natural language while you code.

## What is Cursor?

Cursor is an AI code editor that allows you to connect to external systems and data sources through MCP (Model Context Protocol). This means you can integrate Cursor with your existing tools and infrastructure, instead of having to tell Cursor what the structure of your project is outside of the code itself.

## Prerequisites

- **Cursor IDE** - Download from [cursor.com](https://cursor.com)
- **Moralis API Key** - Get one from [admin.moralis.com](https://admin.moralis.com/api-keys)
- **Node.js** (version 16 or higher)

## Installation

### Step 1: Install Moralis MCP Server

```bash
# Install globally
npm install -g @moralisweb3/api-mcp-server

# Or use npx (no installation required)
npx @moralisweb3/api-mcp-server --version
```

### Step 2: Get Your API Key

1. Visit [Moralis Admin Panel](https://admin.moralis.com)
2. Navigate to [API Keys](https://admin.moralis.com/api-keys)
3. Copy your API key

## Configuration

### Option 1: Project-Specific Setup

For tools specific to a project, create a `.cursor/mcp.json` file in your project directory. This allows you to define MCP servers that are only available within that specific project.

Create `.cursor/mcp.json` in your project root:

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

### Option 2: Global Setup

For tools that you want to use across all projects, create a `~/.cursor/mcp.json` file in your home directory. This makes MCP servers available in all your Cursor workspaces.

Create `~/.cursor/mcp.json` in your home directory:

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

## Using Environment Variables

MCP servers can be provided with environment variables to authenticate with. This allows you to provide API keys and other authentication tokens to the MCP server, without exposing them in your code or storing them within the MCP server itself.

Set your environment variable:

```bash
export MORALIS_API_KEY="your_api_key_here"
```

Then use it in your config:

```json
{
  "mcpServers": {
    "moralis": {
      "command": "npx @moralisweb3/api-mcp-server",
      "args": [],
      "env": {
        "MORALIS_API_KEY": "${MORALIS_API_KEY}"
      }
    }
  }
}
```

## Verification

### Step 1: Restart Cursor

After creating the MCP configuration file, restart Cursor IDE completely.

### Step 2: Check MCP Status

Cursor supports two transport types for MCP servers: stdio and SSE servers. For stdio servers, the command should be a valid shell command that Cursor can run.

Look for MCP indicators in the Cursor interface - you should see tools available for blockchain queries.

### Step 3: Test Integration

Try asking Cursor about blockchain data:

```
What's the current price of PEPE and Ethereum?
```

```
Show me the NFTs owned by vitalik.eth on Base
```

```
What tokens does wallet 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 hold?
```

## Available Tools

Once configured, Cursor can access these blockchain intelligence tools:

- **Token Prices**: Get current prices and market data
- **Wallet Analysis**: Analyze wallet holdings and activity
- **NFT Data**: Query NFT ownership and metadata
- **Transaction History**: Review on-chain transactions
- **Market Intelligence**: Understand trading patterns and sentiment

## Example Usage

### Portfolio Analysis

```
Analyze the portfolio diversity of wallet 0xabc...123 across Ethereum and Base
```

### Token Research

```
What's the current trading sentiment for TOSHI on Base — bullish or bearish?
```

### NFT Exploration

```
Show me the most valuable NFTs in this wallet and their current floor prices
```

## Limitations

Some MCP servers, or users with many MCP servers active, may have many tools available for Cursor to use. Currently, Cursor will only send the first 40 tools to the Agent.

Cursor directly communicates with MCP servers from your local machine, either directly through stdio or via the network using SSE. Therefore, MCP servers may not work properly when accessing Cursor over SSH or other development environments.

## Troubleshooting

### MCP Server Not Found

```
Error: command not found: npx @moralisweb3/api-mcp-server
```

**Solution**: Ensure Node.js and npm are installed, or use the global installation method.

### Authentication Failed

```
Error: Authentication failed
```

**Solution**: Verify your `MORALIS_API_KEY` is correct and properly set in the environment or config file.

### Tools Not Appearing

**Solution**:

1. Check that your `.cursor/mcp.json` file syntax is valid
2. Restart Cursor completely
3. Verify the file is in the correct location

### Permission Denied

Cursor will ask for your permission to access a third-party service. Once you allow it, Cursor will invoke the MCP server and fetch the data.

Make sure to approve MCP tool usage when prompted.

## Advanced Configuration

### Custom Transport

```json
{
  "mcpServers": {
    "moralis": {
      "command": "npx @moralisweb3/api-mcp-server",
      "args": ["--transport", "stdio"],
      "env": {
        "MORALIS_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Multiple Environments

You can configure different MCP servers for different projects by using project-specific `.cursor/mcp.json` files with different API keys or configurations.

## Next Steps

- **[Windsurf Integration](/cortex/integrations/windsurf)** - Set up another AI IDE
- **[Claude Desktop](/cortex/integrations/claude-desktop)** - Configure desktop AI assistant
- **[Use Cases](/cortex/use-cases)** - Explore what you can build
- **[MCP Server Configuration](/cortex/mcp-server/configuration)** - Advanced server setup

## Resources

- **[Cursor MCP Documentation](https://docs.cursor.com/context/model-context-protocol)** - Official Cursor MCP guide
- **[GitHub Repository](https://github.com/MoralisWeb3/moralis-mcp-server)** - Moralis MCP Server source
- **[API Reference](/cortex/api-reference)** - Complete technical documentation
