---
title: "Claude Desktop Integration"
description: "Integrate Moralis Cortex with Claude Desktop to enable AI-powered blockchain queries directly in your desktop AI assistant."
sidebar_label: "Claude Desktop"
slug: /cortex/integrations/claude-desktop
sidebar_position: 3
---

# Claude Desktop Integration

Integrate Moralis Cortex with Claude Desktop to enable AI-powered blockchain queries directly in your desktop AI assistant. Query blockchain data using natural language in your Claude conversations.

## Prerequisites

- **Claude Desktop** - Download from [claude.ai](https://claude.ai/download)
- **Moralis API Key** - Get one from [admin.moralis.com](https://admin.moralis.com/api-keys)
- **Node.js** (version 16 or higher)

## Installation

### Method 1: Auto-install via Smithery (Recommended)

```bash
npx -y @smithery/cli install @MoralisWeb3/moralis-mcp-server --client claude
```

This will automatically:

- Install the Moralis MCP Server
- Configure Claude Desktop
- Set up the connection

### Method 2: Manual Installation

#### Step 1: Install MCP Server

```bash
# Install globally
npm install -g @moralisweb3/api-mcp-server

# Or use npx (no installation required)
npx @moralisweb3/api-mcp-server --version
```

#### Step 2: Get Your API Key

1. Visit [Moralis Admin Panel](https://admin.moralis.com)
2. Navigate to [API Keys](https://admin.moralis.com/api-keys)
3. Copy your API key

## Manual Configuration

### Step 1: Locate Config File

Find your Claude Desktop configuration file:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Create the file if it doesn't exist.

### Step 2: Add MCP Server Configuration

Add the following configuration to your `claude_desktop_config.json`:

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

### Step 3: Environment Variable Setup

Alternatively, set your API key as an environment variable:

```bash
export MORALIS_API_KEY="your_api_key_here"
```

Then reference it in your config:

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

### Step 1: Restart Claude Desktop

After configuration, completely restart Claude Desktop to load the MCP server.

### Step 2: Check MCP Status

The MCP UI elements will only show up in Claude Desktop if at least one server is properly configured. Look for MCP integration indicators in the interface.

### Step 3: Test Integration

Try asking Claude about blockchain data:

```
What's the current price of PEPE and Ethereum?
```

```
Show me the NFTs owned by vitalik.eth on Base
```

```
What tokens does wallet 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 hold?
```

Claude will ask for your permission to access a third-party service. Once you allow it, Claude will invoke the MCP server and fetch the data.

## Available Features

Once integrated, Claude can access these blockchain intelligence tools:

### **Token Analysis**

```
What is the current trading sentiment for TOSHI on Base — bullish or bearish?
```

### **Wallet Intelligence**

```
Analyze the current holder distribution of SPX6900 — include whales, small holders, and recent growth trends
```

### **Portfolio Tracking**

```
What is the current net worth in USD of wallet 0xabc...123?
```

### **Transaction History**

```
When was wallet 0xabc...123 first and last seen active on Ethereum, Base, and Polygon?
```

### **Market Intelligence**

```
Show me PEPE's daily OHLC data for the past 30 days and provide a summary of the trend
```

### **NFT Exploration**

```
Show me the NFTs owned by vitalik.eth on Base
```

## Troubleshooting

### MCP Server Not Found

```
Error: command not found
```

**Solution**: Ensure Node.js is installed and the command path is correct. Use the full path if needed:

```json
{
  "mcpServers": {
    "moralis": {
      "command": "/full/path/to/npx",
      "args": ["@moralisweb3/api-mcp-server"]
    }
  }
}
```

### Authentication Failed

```
Error: Authentication failed
```

**Solution**: Verify your `MORALIS_API_KEY` is correct and has the necessary permissions.

### Config File Issues

1. Check JSON syntax is valid
2. Verify file location is correct
3. Ensure file has proper write permissions
4. Restart Claude Desktop after changes

### MCP Tools Not Appearing

1. Verify at least one MCP server is properly configured
2. Check that the server command runs successfully
3. Restart Claude Desktop completely
4. Look for error messages in Claude's interface

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

### Multiple MCP Servers

You can configure multiple MCP servers simultaneously:

```json
{
  "mcpServers": {
    "moralis": {
      "command": "npx @moralisweb3/api-mcp-server",
      "args": [],
      "env": {
        "MORALIS_API_KEY": "your_moralis_key"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/directory"
      ],
      "env": {}
    }
  }
}
```

## Important Notes

- **Claude.ai web application** does not currently support MCP - features are only available in the desktop application
- Some features require a **Moralis paid plan** for full access and production performance
- MCP servers run locally on your machine for security and privacy

## Next Steps

- **[Cursor Integration](/cortex/integrations/cursor)** - Set up AI IDE integration
- **[Windsurf Integration](/cortex/integrations/windsurf)** - Configure another AI IDE
- **[Use Cases](/cortex/use-cases)** - Explore what you can build
- **[MCP Server Configuration](/cortex/mcp-server/configuration)** - Advanced server setup

## Resources

- **[Smithery CLI](https://smithery.ai/)** - Automated MCP server installation
- **[GitHub Repository](https://github.com/MoralisWeb3/moralis-mcp-server)** - Moralis MCP Server source
- **[Claude Desktop](https://claude.ai/download)** - Download Claude Desktop app
- **[MCP Specification](https://github.com/modelcontextprotocol/spec)** - Model Context Protocol standard
