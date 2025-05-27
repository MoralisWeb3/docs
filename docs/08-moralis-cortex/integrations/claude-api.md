---
title: "Claude API with Remote MCP"
description: "Integrate Moralis Cortex with Anthropic's Claude API using remote MCP servers for blockchain intelligence in your applications."
sidebar_label: "Claude API"
slug: /cortex/integrations/claude-api
sidebar_position: 5
---

# Claude API with Remote MCP

Integrate Moralis Cortex with Anthropic's Claude API using remote MCP servers to bring blockchain intelligence directly into your applications.

## Prerequisites

- **Claude API Key** - Get one from [console.anthropic.com](https://console.anthropic.com/keys)
- **Moralis MCP Server** - Deploy your own or use hosted version
- **Moralis API Key** - Required for the MCP server

## Using Claude API with Remote MCP

Claude API supports remote MCP servers through the `mcp_servers` parameter:

### Basic cURL Example

```bash
curl https://api.anthropic.com/v1/messages \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_CLAUDE_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "anthropic-beta: mcp-client-2025-04-04" \
  -d '{
    "model": "claude-3-5-sonnet-20240620",
    "max_tokens": 1000,
    "messages": [
      {
        "role": "user",
        "content": "What is the current price of PEPE on Ethereum?"
      }
    ],
    "mcp_servers": [
      {
        "type": "url",
        "url": "https://your-mcp-server.com/sse",
        "name": "moralis-cortex"
      }
    ]
  }'
```

### JavaScript Implementation

```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

async function queryBlockchainData(prompt) {
  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    mcp_servers: [
      {
        type: "url",
        url: process.env.MCP_SERVER_URL,
        name: "moralis-cortex",
      },
    ],
  });

  return response.content[0].text;
}

// Usage
const result = await queryBlockchainData("What tokens does vitalik.eth hold?");
console.log(result);
```

### Python Implementation

```python
import anthropic
import os

client = anthropic.Anthropic(api_key=os.getenv("CLAUDE_API_KEY"))

def query_blockchain_data(prompt):
    response = client.messages.create(
        model="claude-3-5-sonnet-20240620",
        max_tokens=1000,
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        mcp_servers=[
            {
                "type": "url",
                "url": os.getenv("MCP_SERVER_URL"),
                "name": "moralis-cortex"
            }
        ]
    )
    return response.content[0].text

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

## Chat Interface Example

```javascript
import Anthropic from "@anthropic-ai/sdk";

class BlockchainChat {
  constructor(apiKey, mcpServerUrl) {
    this.client = new Anthropic({ apiKey });
    this.mcpServerUrl = mcpServerUrl;
    this.conversation = [];
  }

  async chat(message) {
    try {
      const response = await this.client.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 1000,
        system:
          "You are a blockchain intelligence assistant with access to real-time Web3 data.",
        messages: [
          ...this.conversation,
          {
            role: "user",
            content: message,
          },
        ],
        mcp_servers: [
          {
            type: "url",
            url: this.mcpServerUrl,
            name: "moralis-cortex",
          },
        ],
      });

      const aiResponse = response.content[0].text;

      // Update conversation history
      this.conversation.push(
        { role: "user", content: message },
        { role: "assistant", content: aiResponse }
      );

      return aiResponse;
    } catch (error) {
      console.error("Chat error:", error);
      throw error;
    }
  }
}

// Usage
const chat = new BlockchainChat(
  process.env.CLAUDE_API_KEY,
  process.env.MCP_SERVER_URL
);

const response = await chat.chat("What tokens does vitalik.eth hold?");
console.log(response);
```

## MCP Server Setup

You need a remote MCP server running the Moralis integration. The server handles blockchain data queries and returns structured responses.

### Server Requirements

- **SSE endpoint** - Server-Sent Events URL for Claude to connect
- **MCP protocol** - Implements Model Context Protocol specification
- **Moralis integration** - Configured with your Moralis API key

### Environment Variables

```bash
export CLAUDE_API_KEY="your_claude_api_key"
export MCP_SERVER_URL="https://your-mcp-server.com/sse"
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

## Next Steps

- **[ChatGPT API Integration](/cortex/integrations/chatgpt-api)** - Set up OpenAI API with remote MCP
- **[Use Cases](/cortex/use-cases)** - Explore what you can build
- **[API Reference](/cortex/api-reference)** - Complete technical documentation

## Resources

- **[Claude API Documentation](https://docs.anthropic.com/claude/reference)** - Official Claude API docs
- **[GitHub Repository](https://github.com/MoralisWeb3/moralis-mcp-server)** - Moralis MCP Server source
