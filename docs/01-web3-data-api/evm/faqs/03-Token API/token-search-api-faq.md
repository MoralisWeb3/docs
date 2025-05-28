---
title: "Token Search API"
description: "Learn how to search for tokens across multiple blockchains using the Token Search API. Search by name, symbol, or pair address with support for partial matches, chain-specific filtering, and verified token prioritization."
slug: "/web3-data-api/evm/token-search"
sidebar_position: 2
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

# Token Search API FAQ

> For the complete API reference, please see the [Search Tokens API documentation](/web3-data-api/evm/reference/search-tokens).

## Overview

### What is the Token Search API?

The Token Search API enables you to search for tokens by name, symbol, or pair address across multiple blockchains. It supports partial matching, chain-specific filtering, and verified token prioritization, making it ideal for building comprehensive token search functionality into your applications.

### Is this a premium feature?

Yes, this is a premium endpoint that requires a specific add-on to be enabled on your plan. Trial access can be activated to test the functionality.

## Core Functionality

### What can I search for?

You can search for:

- Token names
- Token symbols
- Pair addresses on decentralized exchanges
- Partial matches are supported (e.g., "PEP" will match "PEPE")
- Exact matches and verified tokens are prioritized in results

### Which blockchains are supported?

The API supports multiple chains including:

- Ethereum (eth, 0x1)
- Polygon (polygon, 0x89)
- Ronin (ronin, 0x7e4)
- Binance Smart Chain (bsc, 0x38)
- Avalanche (avalanche, 0xa86a)
- Fantom (fantom, 0xfa)
- Arbitrum (arbitrum, 0xa4b1)
- Base (base, 0x2105)
- Optimism (optimism, 0xa)
- Linea (linea, 0xe708)
- Pulse (pulse, 0x171)
- Solana (solana)

## Enhanced Features

### How does verified token prioritization work?

- CoinGecko-listed tokens are prioritized in search results
- Enhanced ranking algorithm gives higher scores to verified tokens
- Improved search relevance by prioritizing legitimate tokens
- Better quality results across all supported chains

### How do I filter for verified tokens only?

- Use the `isVerifiedContract` parameter set to `true`
- This filters results to only include verified tokens (CoinGecko-listed)
- Helps prevent display of unverified or potentially unsafe tokens
- Example: `isVerifiedContract=true`

### How can I search using pair addresses?

- The API now supports searching for tokens using their DEX pair addresses
- Enter the pair address in the query parameter
- This enables new use cases for DEX analytics and trading applications
- Simplifies token discovery through liquidity pair relationships

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
- Verification status (indicating if the token is verified)
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
3. Use `isVerifiedContract=true` for higher quality results
4. Consider the default limit of 10 results
5. URL encode chain parameters properly

## Technical Details

### What's the request structure?

Required parameters:

- query: The search term (name, symbol, or pair address)

Optional parameters:

- chains: Comma-separated list of chain identifiers
- isVerifiedContract: Boolean to filter for verified tokens only

### How does partial matching work?

- Searches match substrings within token names and symbols
- Exact matches and verified tokens are typically ranked higher
- Case-insensitive matching is supported
- Leading and trailing spaces are trimmed

## Best Practices

### How should I implement the search?

1. Start with specific chains relevant to your use case
2. Consider using `isVerifiedContract=true` for production applications
3. Implement proper error handling for invalid chain identifiers
4. Consider rate limiting and caching strategies
5. Handle partial matches appropriately in your UI

### How can I ensure reliable results?

1. Validate chain identifiers before making requests
2. URL encode parameters properly
3. Use the verified contract filter for enhanced security
4. Handle empty result sets gracefully
5. Implement proper error handling

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
