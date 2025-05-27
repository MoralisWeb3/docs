---
title: "MCP Server Development"
description: "Develop and contribute to the Moralis MCP Server with local setup and debugging tools."
sidebar_label: "Development"
slug: /cortex/mcp-server/development
sidebar_position: 4
---

# MCP Server Development

Learn how to set up local development and contribute to the Moralis MCP Server.

## Development Setup

### Clone Repository

```bash
git clone https://github.com/MoralisWeb3/moralis-mcp-server.git
cd moralis-mcp-server
```

### Install Dependencies

```bash
npm install
```

### Environment Setup

```bash
# Set your API key
export MORALIS_API_KEY="your_api_key_here"
```

## Build Commands

### Build the Server

```bash
npm run build
```

### Development with Auto-rebuild

```bash
npm run watch
```

## Debugging

### MCP Inspector

The MCP Inspector provides a browser-based debugging interface:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.

> **Note:** Since MCP servers communicate over stdio, debugging can be challenging. The MCP Inspector is the recommended debugging tool.

## Available Scripts

Based on the package.json, these are the standard development commands:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Watch for changes during development
npm run watch

# Start the MCP Inspector for debugging
npm run inspector
```

## Project Structure

```
moralis-mcp-server/
├── src/                  # Source code
├── dist/                 # Built files
├── package.json          # Project configuration
└── README.md            # Documentation
```

## Contributing

### Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a feature branch
4. Make your changes
5. Test your changes
6. Submit a pull request

### Resources

- **GitHub Repository:** [MoralisWeb3/moralis-mcp-server](https://github.com/MoralisWeb3/moralis-mcp-server)
- **NPM Package:** [@moralisweb3/api-mcp-server](https://www.npmjs.com/package/@moralisweb3/api-mcp-server)
- **MCP Inspector:** [Debugging Tool](https://github.com/modelcontextprotocol/inspector)

## Testing Your Changes

### Local Testing

```bash
# Build your changes
npm run build

# Test with your API key
export MORALIS_API_KEY="your_key"

# Run the server
npm start
```

### Test with AI Client

Configure your AI client to use your local development version:

```json
{
  "mcpServers": {
    "moralis-dev": {
      "command": "node",
      "args": ["/path/to/your/moralis-mcp-server/dist/index.js"],
      "env": {
        "MORALIS_API_KEY": "your_api_key"
      }
    }
  }
}
```

## Next Steps

- **[Integrations](/cortex/integrations)** - Connect with AI tools
- **[Use Cases](/cortex/use-cases)** - See implementation examples
