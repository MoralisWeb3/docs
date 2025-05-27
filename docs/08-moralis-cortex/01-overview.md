---
title: "Moralis Cortex"
description: "AI-Powered Web3 Intelligence. Query blockchain data with natural language using our hosted API or self-hosted MCP server."
sidebar_label: "Overview"
slug: /cortex
sidebar_position: 1
---

# Moralis Cortex

**AI-Powered Web3 Intelligence. Instantly.**

Moralis Cortex is your gateway to real-time, AI-driven insights from blockchain data. Ask natural language questions. Get structured, explainable answers. Use it via our hosted API or run the Cortex MCP Server in your own infrastructure.

## What is Moralis Cortex?

Moralis Cortex is an AI-native data layer for Web3, built on top of the Moralis Model Context Protocol (MCP). It connects blockchain data with large language models like GPT-4 or Claude - enabling you to query on-chain activity using plain English or structured prompts.

Whether you're building dashboards, bots, reports, or intelligent assistants, Cortex gives you the power of AI - grounded in real blockchain data.

## Choose How To Use It

### 🌐 Cortex API (Hosted)

Use our hosted API to ask blockchain questions and get real-time insights - no setup required.

- **POST /v1/cortex/chat** - simple, secure REST endpoint
- Powered by enterprise-grade LLMs and Moralis infrastructure
- Returns summaries and structured data
- Supports chat history (chatId) for multi-turn conversations
- Optional streaming data - get live responses

**✅ Best for:**

- Startups, growth teams, and AI tooling
- Dashboards, chat agents, or in-product insights
- Teams who want fast access without infra overhead

### 🧩 MCP Server (Self-Hosted)

Deploy the MCP server in your own environment for full control and customization.

- Distributed via NPM
- Plug in your own LLM credentials (OpenAI, Claude, open-source)
- Customize grounding logic, data access, and plugins
- Run entirely inside your infra for privacy and compliance

**✅ Best for:**

- Enterprises with security/compliance requirements
- Developers building deeply integrated AI apps
- Teams wanting full control over data and model behavior

## Why Use Cortex?

- **🔍 Ask anything** about on-chain behavior - wallet activity, dapp usage, token flows, etc.
- **🧠 LLM-powered**: Use GPT-4, Claude, or open-source models with full flexibility
- **📊 Grounded in Moralis data**: No hallucinations - only indexed, verified blockchain truth
- **⚙️ Integrate anywhere**: APIs, agents, dashboards, or local developer tooling
- **🔒 Built for production**: Secure, composable, and extensible

## Cortex vs Alternatives

| Feature                 | Moralis Cortex                                 | ChatGPT                             | Traditional APIs                 |
| ----------------------- | ---------------------------------------------- | ----------------------------------- | -------------------------------- |
| **Web3 Data Awareness** | ✅ Deep integration with on-chain data         | ⚠️ Limited blockchain context       | ❌ Requires custom integration   |
| **Real-Time Grounding** | ✅ Answers grounded in indexed blockchain data | ⚠️ Limited access to real-time data | ✅ Real-time but requires coding |
| **Natural Language**    | ✅ Plain English queries                       | ✅ Natural language                 | ❌ Requires API knowledge        |
| **Structured Output**   | ✅ Returns JSON + human-readable summaries     | ❌ Text only, requires parsing      | ✅ Structured but complex        |
| **Deployment Options**  | ✅ API or self-hosted package                  | ❌ Hosted only                      | ✅ Various options               |
| **LLM Flexibility**     | ✅ Use OpenAI, Claude, or OSS models           | ❌ OpenAI only                      | ❌ No LLM integration            |
| **Customization**       | ✅ Full control over grounding + prompt logic  | ❌ Closed model, limited control    | ✅ Full control but complex      |

## Next Steps

Ready to get started? Choose your path:

- **[Understanding MCP](/cortex/understanding-mcp)** - Learn about the Model Context Protocol
- **[Getting Started](/cortex/getting-started)** - Quick start guide
- **[Cortex API](/cortex/api)** - Use our hosted solution
- **[MCP Server](/cortex/mcp-server)** - Self-host for full control
