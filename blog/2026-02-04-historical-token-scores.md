---
title: "New: Historical Token Scores"
slug: "historical-token-scores"
authors:
  name: Moralis Team
tags: ["Data API"]
---

We've added the ability to track **Token Scores over time** with a new Historical Token Score endpoint.

## What it is
The Historical Token Score endpoint lets you retrieve a token's **score history** across different timeframes, so you can see how a token's onchain quality has changed over time.

This builds on the existing [Token Score](/changelog/new-token-scores) — a unified **0–100 rating** based on six weighted onchain signals — by adding a **time-series dimension**.

## New endpoint: Fetch Historical Token Score
The new [dedicated endpoint](/web3-data-api/evm/reference/get-historical-token-score) returns score snapshots over a specified timeframe:

```
GET /tokens/{address}/score/historical
```

### Parameters
- `tokenAddress` (required) — The token address to query
- `chain` (optional) — The chain to query (default: `eth`)
- `timeframe` (required) — The timeframe to query: `1d`, `7d`, or `30d`

### Availability
- 🌐 **Supported on both EVM and Solana**
- 🔐 **Available on Pro plans and above**
- 🧠 Ideal for tracking token health trends, detecting score changes, and historical analysis

Example response:
```
{
  "chainId": "0x1",
  "tokenAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "timeseries": [
    {
      "timestamp": "2022-02-22T00:00:00Z",
      "score": 85
    }
  ]
}
```

[View API reference](/web3-data-api/evm/reference/get-historical-token-score) or for a full breakdown of the Token Score methodology and FAQs, [see the docs](/web3-data-api/evm/token-security-score-faqs).
