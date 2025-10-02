---
title: "Solana Top Holders API"
slug: "solana-top-holders-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API, Solana]
---

# Changelog: Solana Top Holders API

## Release Date: May 9, 2025

We're excited to announce our new Solana Top Holders API endpoint! This powerful addition to our Solana Token Analytics suite gives developers direct access to ranked lists of the largest token holders for any Solana token, enabling detailed analysis of whale activity, ownership concentration, and distribution patterns.

<!-- truncate -->

### What's New?

| Name                      | Description                                                             | API Reference                                                                 |
| ------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Get Top Token Holders** | Retrieve ranked lists of the largest token holders for any Solana token | [Method Documentation](/web3-data-api/solana/reference/get-token-top-holders) |

### Key Features:

- **Comprehensive Holder Rankings**:

  - Ranked list of top token holders by balance
  - Customizable results with pagination support (up to 100 holders per request)
  - Contract detection flags to identify programmatic vs. user wallets
  - Percentage calculations showing each holder's share of total supply

- **Rich Holder Data**:

  - Raw and formatted token balances
  - USD value calculations for each holder's position
  - Cursor-based pagination for exploring the complete holder list
  - Total supply context for relative size analysis

- **Complementary Analytics**:
  - Works seamlessly with our Token Holder Stats and Historical Holder APIs
  - Enables cross-analysis between top holder lists and broader distribution metrics
  - Provides essential data for token concentration and whale analysis

### Example Use Cases:

- **Whale Concentration Analysis**: Identify and monitor the largest holders of any token
- **Ownership Distribution Research**: Analyze how concentrated or distributed a token's ownership is
- **Investment Due Diligence**: Evaluate ownership patterns before investing in a token
- **Market Movement Prediction**: Track large holder activities to anticipate potential market impacts
- **Governance Research**: Identify key stakeholders with significant voting power in DAOs

Check out our [documentation](/web3-data-api/solana/reference/get-token-top-holders) for detailed usage examples, response formats, and integration guides.
