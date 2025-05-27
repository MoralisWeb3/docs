---
title: "Windsurf Integration"
description: "Integrate Moralis Cortex with Windsurf IDE to enable Cascade AI assistant to query blockchain data with natural language."
sidebar_label: "Windsurf"
slug: /cortex/integrations/windsurf
sidebar_position: 2
---

# Windsurf Integration

Integrate Moralis Cortex with Windsurf IDE to enable Cascade (the AI assistant) to query blockchain data with natural language. Transform your coding experience with real-time Web3 intelligence.

## What is Windsurf?

Windsurf is a next-generation AI IDE built to keep you in the flow. It features Cascade, an agentic chatbot that can collaborate with you like never before. With MCP integration, Cascade can access external tools and services, including blockchain data through Moralis Cortex.

## Prerequisites

- **Windsurf IDE** - Download from [windsurf.com](https://windsurf.com)
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

### Method 1: Using Windsurf Plugin Store

1. **Open Windsurf IDE**
2. **Access Plugin Store** - Click on the Plugins icon in the top right menu in the Cascade panel
3. **Search for Moralis** - Look for official MCP plugins (they show up with a blue checkmark)
4. **Install and Configure** - Add your API key when prompted

### Method 2: Manual Configuration

#### Step 1: Access MCP Settings

Navigate to **Windsurf Settings > Advanced Settings** or use **Command Palette > Open Windsurf Settings Page**.

Scroll down to the **Cascade** section where you'll find MCP configuration options.

#### Step 2: Add MCP Server

**Option A: Add Custom Server**
Click "Add custom server +" to add the server directly.

**Option B: Edit Config File**  
Edit `~/.codeium/windsurf/mcp_config.json` with your configuration:

```json
{
  "mcpServers": {
    "moralis": {
      "command": "npx",
      "args": ["-y", "@moralisweb3/api-mcp-server"],
      "env": {
        "MORALIS_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

#### Step 3: Refresh Configuration

After adding a new MCP server, make sure to press the **refresh button** to apply the changes.

## Environment Setup

Set your API key in the environment:

```bash
export MORALIS_API_KEY="your_api_key_here"
```

Then reference it in your config:

```json
{
  "mcpServers": {
    "moralis": {
      "command": "npx",
      "args": ["-y", "@moralisweb3/api-mcp-server"],
      "env": {
        "MORALIS_API_KEY": "${MORALIS_API_KEY}"
      }
    }
  }
}
```

## Verification

### Step 1: Check MCP Status

After configuration, you should see the MCP server with a green active status in the Windsurf settings.

### Step 2: Access Tools in Cascade

Click on the **Hammer Icon** on the Cascade toolbar. If you hover on the hammer icon, you can see the list of MCP Tools connected to it.

### Step 3: Test Integration

Try asking Cascade about blockchain data:

```
What's the current price of PEPE and Ethereum?
```

```
Show me the NFTs owned by vitalik.eth on Base
```

```
What tokens does wallet 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 hold?
```

## Tool Management

### Tool Limits

Cascade has a limit of **100 total tools** that it has access to at any given time.

### Enable/Disable Tools

- **Plugin Level**: Navigate to the Tools tab in any plugin and toggle the tools you wish to enable
- **Settings Level**: From Windsurf Settings, click on the "Manage plugins" button to control tool access

### Tool Categories

Each MCP plugin provides access to different tools for blockchain intelligence:

- Token pricing and market data
- Wallet analysis and holdings
- NFT ownership and metadata
- Transaction history and patterns
- DeFi positions and activities

## Available Features

Once configured, Cascade can access these blockchain intelligence capabilities:

### **Token Analysis**

```
What is the current trading sentiment for TOSHI on Base — bullish or bearish?
```

### **Wallet Intelligence**

```
Analyze the holder distribution of SPX6900 — include whales, small holders, and recent growth trends
```

### **Portfolio Tracking**

```
What is the current net worth in USD of wallet 0xabc...123?
```

### **Market Research**

```
Show me PEPE's daily OHLC data for the past 30 days and provide a summary of the trend
```

## Important Notes

### Credit Usage

- **Enterprise users** must manually turn MCP integration on via settings
- **MCP tool calls** will consume credits regardless of success or failure
- Monitor your usage through Windsurf's credit tracking

### Tool Discovery

Official MCP plugins show up with a **blue checkmark**, indicating they are made by the parent service company (Moralis in this case).

### Configuration Scope

The MCP configuration follows the same schema as Claude Desktop's config file, making it easy to share configurations across different AI tools.

## Troubleshooting

### Server Not Connecting

1. Verify your `mcp_config.json` syntax is correct
2. Check that your API key is valid
3. Ensure the command path is accessible
4. Press the refresh button after making changes

### Tools Not Appearing

1. Check that MCP is enabled in your Windsurf settings
2. Verify the MCP server shows green/active status
3. Look for the hammer icon in the Cascade toolbar
4. Try restarting Windsurf IDE

### Authentication Issues

```
Error: Authentication failed
```

**Solution**: Verify your `MORALIS_API_KEY` is correct and has the necessary permissions.

### Permission Requests

Cascade will ask for permission to use external tools. Make sure to approve these requests to enable blockchain data access.

## Advanced Configuration

### Multiple MCP Servers

You can run multiple MCP servers simultaneously:

```json
{
  "mcpServers": {
    "moralis": {
      "command": "npx",
      "args": ["-y", "@moralisweb3/api-mcp-server"],
      "env": {
        "MORALIS_API_KEY": "your_moralis_key"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/project"
      ]
    }
  }
}
```

### Custom Transport

While Windsurf primarily uses stdio transport, you can specify transport options if needed:

```json
{
  "mcpServers": {
    "moralis": {
      "command": "npx",
      "args": ["-y", "@moralisweb3/api-mcp-server", "--transport", "stdio"],
      "env": {
        "MORALIS_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## Next Steps

- **[Claude Desktop Integration](/cortex/integrations/claude-desktop)** - Set up another AI assistant
- **[Cursor Integration](/cortex/integrations/cursor)** - Configure another AI IDE
- **[Use Cases](/cortex/use-cases)** - Explore what you can build
- **[MCP Server Configuration](/cortex/mcp-server/configuration)** - Advanced server setup

## Resources

- **[Windsurf MCP Documentation](https://docs.windsurf.com/windsurf/cascade/mcp)** - Official Windsurf MCP guide
- **[GitHub Repository](https://github.com/MoralisWeb3/moralis-mcp-server)** - Moralis MCP Server source
- **[MCP Specification](https://github.com/modelcontextprotocol/spec)** - Model Context Protocol standard
