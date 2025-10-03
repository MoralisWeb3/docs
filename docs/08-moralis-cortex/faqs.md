---
title: "FAQs"
description: "Frequently asked questions about Moralis Cortex, MCP servers, and blockchain AI integrations."
sidebar_label: "FAQs"
slug: /cortex/faqs
sidebar_position: 8
---

# FAQs

Frequently asked questions about Moralis Cortex, MCP servers, and blockchain AI integrations.

## General Questions

### What is Moralis Cortex?

Moralis Cortex is an AI-powered Web3 intelligence platform that lets you query blockchain data using natural language. It's available as a hosted API or self-hosted MCP server.

### What's the difference between Cortex API and MCP Server?

- **Cortex API**: Hosted solution, no setup required, great for production apps
- **MCP Server**: Self-hosted, full control, custom LLM models, privacy-focused

### Which blockchains are supported?

All the chains supported by Web3 Data API. See the [Supported Chains](/supported-chains) for the full list.

## Setup & Installation

### Do I need a Moralis API key?

Yes, you need a Moralis API key for both the Cortex API and MCP Server. Get one from [admin.moralis.com](https://admin.moralis.com/api-keys).

### How do I install the MCP Server?

```bash
npm install -g @moralisweb3/api-mcp-server
```

Or use npx without installation. See the [MCP Server setup guide](/cortex/mcp-server/getting-started).

### Can I use this with Claude Desktop?

Yes! Use Smithery for automatic setup:

```bash
npx -y @smithery/cli install @MoralisWeb3/moralis-mcp-server --client claude
```

See the [Claude Desktop integration guide](/cortex/integrations/claude-desktop).

## Technical Questions

### What is MCP (Model Context Protocol)?

MCP is an open standard that connects AI models to external tools and data sources. It's like a universal adapter for AI applications. Learn more in [Understanding MCP](/cortex/understanding-mcp/what-is-mcp).

### Which AI tools support MCP?

- **AI IDEs**: [Cursor](/cortex/integrations/cursor), [Windsurf](/cortex/integrations/windsurf)
- **Desktop Apps**: [Claude Desktop](/cortex/integrations/claude-desktop)
- **APIs**: [ChatGPT API](/cortex/integrations/chatgpt-api), [Claude API](/cortex/integrations/claude-api)

### Can I use my own LLM models?

Yes, with the MCP Server you can use OpenAI, Claude, or open-source models. The Cortex API uses enterprise-grade models managed by Moralis.

## Troubleshooting

### MCP Server not connecting?

1. Check your `MORALIS_API_KEY` is set correctly
2. Verify Node.js is installed (version 16+)
3. Restart your AI client after configuration

### "Authentication failed" error?

Verify your Moralis API key is valid and active. Some features require a paid Moralis plan.

### AI client not showing MCP tools?

1. Ensure MCP server is properly configured
2. Check config file syntax (JSON must be valid)
3. Restart your AI client completely
4. Look for server status indicators

## Use Cases

### What can I build with Cortex?

- Portfolio dashboards with AI insights
- Trading bots with market intelligence
- Customer support chatbots for crypto apps
- Developer tools with blockchain queries
- DeFi apps with risk assessment

See [Use Cases](/cortex/use-cases) for detailed examples.

### Can this replace traditional blockchain APIs?

Cortex complements traditional APIs by adding AI-powered natural language querying. For complex queries, use Cortex. For simple data fetching, traditional APIs might be more efficient.

## Support

### Where can I get help?

- **Documentation**: Complete guides and references here
- **GitHub**: [Issues and discussions](https://github.com/MoralisWeb3/moralis-mcp-server)
- **Support**: [Contact Moralis support](https://moralis.io/contact)

### How do I report bugs?

- **MCP Server issues**: [GitHub Issues](https://github.com/MoralisWeb3/moralis-mcp-server/issues)
- **Cortex API issues**: [Moralis Support](https://moralis.io/contact)
- **Integration issues**: Check the specific integration docs first

### Can I contribute?

Yes! The MCP Server is open source. See the [Development guide](/cortex/mcp-server/development) for contributing guidelines.

## Still have questions?

- Browse the [complete documentation](/cortex)
- Check [Getting Started](/cortex/getting-started) for setup help
- Visit our [GitHub repository](https://github.com/MoralisWeb3/moralis-mcp-server)
- Join the [Moralis community](https://discord.gg/moralis)
