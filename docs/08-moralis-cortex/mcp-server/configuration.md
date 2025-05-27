---
title: "MCP Server Configuration"
description: "Configure the Moralis MCP Server with environment variables and transport options."
sidebar_label: "Configuration"
slug: /cortex/mcp-server/configuration
sidebar_position: 3
---

# MCP Server Configuration

Configure your Moralis MCP Server with the essential settings needed to connect with AI clients and access Moralis APIs.

## Environment Variables

### Required

| Variable          | Description                                                                       |
| ----------------- | --------------------------------------------------------------------------------- |
| `MORALIS_API_KEY` | Your Moralis API key from [admin.moralis.com](https://admin.moralis.com/api-keys) |

```bash
export MORALIS_API_KEY="your_api_key_here"
```

## Transport Options

The server accepts a `--transport` argument to specify the communication method:

### stdio (Default)

Communicates over standard input/output - used for AI clients like Claude Desktop.

```bash
moralis-api-mcp --transport stdio
```

### web

Starts an HTTP server for web-based communication.

```bash
moralis-api-mcp --transport web
```

### streamable-http

Starts an HTTP server with streamable endpoints.

```bash
moralis-api-mcp --transport streamable-http
```

## AI Client Configuration

### Claude Desktop

**Config file locations:**

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

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

### Generic MCP Client

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

## Usage Examples

### With Global Install

```bash
# Set environment variable
export MORALIS_API_KEY="your_key"

# Run with default stdio transport
moralis-api-mcp

# Run with web transport
moralis-api-mcp --transport web
```

### With npx

```bash
# Set environment variable
export MORALIS_API_KEY="your_key"

# Run directly without installation
npx @moralisweb3/api-mcp-server --transport stdio
```

## Verification

### Check Environment Setup

```bash
# Verify API key is set
echo $MORALIS_API_KEY
```

### Test Server Startup

```bash
# Should start without errors
npx @moralisweb3/api-mcp-server --transport stdio
```

## Common Issues

### Missing API Key

```
Error: MORALIS_API_KEY environment variable is required
```

**Solution:** Set your API key in the environment.

### Invalid API Key

```
Error: Authentication failed
```

**Solution:** Verify your API key is correct and active.

### AI Client Not Connecting

**Solution:**

1. Check config file syntax and location
2. Restart your AI client completely
3. Verify the command path is correct

---

**Note:** Some features and endpoints require a Moralis paid plan for full access and production-grade performance.
