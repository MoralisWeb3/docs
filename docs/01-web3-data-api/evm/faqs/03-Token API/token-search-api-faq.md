---
title: "Token Search API"
description: "Learn how to search for tokens across multiple blockchains using the Token Search API. Search by name or symbol with support for partial matches and chain-specific filtering."
slug: "/web3-data-api/evm/token-search"
sidebar_position: 2
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

# Token Search API FAQ

> For the complete API reference, please see the [Search Tokens API documentation](/web3-data-api/evm/reference/search-tokens).

## Overview

### What is the Token Search API?

The Token Search API enables you to search for tokens by name or symbol across multiple blockchains. It supports partial matching and chain-specific filtering, making it ideal for building token search functionality into your applications.

### Is this a premium feature?

Yes, this is a premium endpoint that requires a specific add-on to be enabled on your plan. Trial access can be activated to test the functionality.

## Core Functionality

### What can I search for?

You can search for:

- Token names
- Token symbols
- Partial matches are supported (e.g., "PEP" will match "PEPE")
- Exact matches are typically prioritized in results

### Which blockchains are supported?

The API supports multiple chains including:

- Ethereum (eth, 0x1)
- Polygon (polygon, 0x89)
- Binance Smart Chain (bsc, 0x38)
- Avalanche (avalanche, 0xa86a)
- Fantom (fantom, 0xfa)
- Arbitrum (arbitrum, 0xa4b1)
- Base (base, 0x2105)
- Optimism (optimism, 0xa)
- Linea (linea, 0xe708)
- Pulse (pulse, 0x171)
- Solana (solana)

## Usage Guidelines

### How do I specify multiple chains?

- Use comma-separated chain identifiers
- Don't include spaces after commas
- URL encode the commas using %2C
- Example: `chains=eth%2Csolana%2Cpolygon`

### What information is returned in the response?

The API returns:

- Token address
- Chain identifier
- Token name
- Token symbol
- USD price
- Market cap
  Note: Token logos are currently not included in the response (coming soon)

## Limitations and Constraints

### What are the current limitations?

1. Results are limited to 10 tokens by default
2. Maximum limit of 100 tokens per request
3. No pagination support
4. Token logos are not currently available
5. Chain identifiers must be valid and properly formatted

### How can I optimize my searches?

1. Use precise queries to avoid ambiguous results
2. Specify relevant chains to narrow down results
3. Consider the default limit of 10 results
4. URL encode chain parameters properly

## Technical Details

### What's the request structure?

Required parameters:

- query: The search term (name or symbol)
  Optional parameters:
- chains: Comma-separated list of chain identifiers

### How does partial matching work?

- Searches match substrings within token names and symbols
- Exact matches are typically ranked higher
- Case-insensitive matching is supported
- Leading and trailing spaces are trimmed

## Best Practices

### How should I implement the search?

1. Start with specific chains relevant to your use case
2. Implement proper error handling for invalid chain identifiers
3. Consider rate limiting and caching strategies
4. Handle partial matches appropriately in your UI

### How can I ensure reliable results?

1. Validate chain identifiers before making requests
2. URL encode parameters properly
3. Handle empty result sets gracefully
4. Implement proper error handling

## Common Issues

### What are common error scenarios?

1. Invalid chain identifiers
2. Missing required query parameter
3. Malformed chain list (improper formatting)
4. Rate limiting exceeded
5. Authorization errors

### How should I handle errors?

1. Validate input parameters before making requests
2. Implement proper error handling
3. Display user-friendly error messages
4. Retry requests with exponential backoff when appropriate

## API Access

### How do I get started?

1. Enable the premium add-on for your plan
2. Obtain your API key
3. Test with the trial access
4. Implement the API in your application

### What are the authentication requirements?

1. Include your API key in the x-api-key header
2. Ensure your plan has the necessary permissions
3. Monitor your usage against plan limits
4. Keep your API key secure
