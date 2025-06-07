---
title: "ChatGPT API with Remote MCP"
description: "Integrate Moralis Cortex with OpenAI's ChatGPT API using remote MCP servers for blockchain intelligence in your applications."
sidebar_label: "ChatGPT API"
slug: /cortex/integrations/chatgpt-api
sidebar_position: 4
---

# ChatGPT API with Remote MCP

Integrate Moralis Cortex with OpenAI's ChatGPT API using remote MCP servers to bring blockchain intelligence directly into your applications.

## Prerequisites

- **OpenAI API Key** - Get one from [platform.openai.com](https://platform.openai.com/api-keys)
- **Moralis MCP Server** - Deploy your own or use hosted version
- **Moralis API Key** - Required for the MCP server

## Using OpenAI Responses API

The OpenAI Responses API supports remote MCP servers for blockchain queries:

### Basic cURL Example

```bash
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_OPENAI_API_KEY" \
  -d '{
    "model": "gpt-4.1-mini-2025-04-14",
    "tools": [
      {
        "type": "mcp",
        "server_label": "moralis-cortex",
        "server_url": "https://your-mcp-server.com/mcp",
        "require_approval": "never"
      }
    ],
    "input": "What is the current price of PEPE on Ethereum?"
  }'
```

### JavaScript Implementation

```javascript
async function queryBlockchainData(prompt) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini-2025-04-14",
      tools: [
        {
          type: "mcp",
          server_label: "moralis-cortex",
          server_url: process.env.MCP_SERVER_URL,
          require_approval: "never",
        },
      ],
      input: prompt,
    }),
  });

  return await response.json();
}

// Usage
const result = await queryBlockchainData("What tokens does vitalik.eth hold?");
console.log(result);
```

### Python Implementation

```python
import openai
import os

client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def query_blockchain_data(prompt):
    response = client.responses.create(
        model="gpt-4.1-mini-2025-04-14",
        tools=[
            {
                "type": "mcp",
                "server_label": "moralis-cortex",
                "server_url": os.getenv("MCP_SERVER_URL"),
                "require_approval": "never"
            }
        ],
        input=prompt
    )
    return response

# Usage
result = query_blockchain_data("Show me the NFTs owned by vitalik.eth on Base")
print(result)
```

## Example Queries

### Token Analysis

```javascript
const result = await queryBlockchainData(
  "What is the current trading sentiment for TOSHI on Base — bullish or bearish?"
);
```

### Wallet Intelligence

```javascript
const result = await queryBlockchainData(
  "What is the current net worth in USD of wallet 0xabc...123?"
);
```

### Portfolio Tracking

```javascript
const result = await queryBlockchainData(
  "Analyze the holder distribution of SPX6900 — include whales, small holders, and recent growth trends"
);
```

### Market Data

```javascript
const result = await queryBlockchainData(
  "Show me PEPE's daily OHLC data for the past 30 days and provide a summary"
);
```

## MCP Server Setup

You need a remote MCP server running the Moralis integration. The server handles blockchain data queries and returns structured responses.

### Server Requirements

- **HTTP endpoint** - Accessible URL for OpenAI to connect
- **MCP protocol** - Implements Model Context Protocol specification
- **Moralis integration** - Configured with your Moralis API key

### Environment Variables

```bash
export OPENAI_API_KEY="your_openai_api_key"
export MCP_SERVER_URL="https://your-mcp-server.com/mcp"
```

## Error Handling

```javascript
async function safeQuery(prompt) {
  try {
    const result = await queryBlockchainData(prompt);
    return result;
  } catch (error) {
    if (error.status === 429) {
      throw new Error("Rate limit exceeded");
    } else if (error.status === 401) {
      throw new Error("Invalid API key");
    } else {
      throw new Error("Query failed: " + error.message);
    }
  }
}
```

## Resources

- **[OpenAI Responses API](https://platform.openai.com/docs/guides/tools-remote-mcp)** - Official remote MCP documentation
- **[GitHub Repository](https://github.com/MoralisWeb3/moralis-mcp-server)** - Moralis MCP Server source
- **[Use Cases](/cortex/use-cases)** - Explore what you can build
