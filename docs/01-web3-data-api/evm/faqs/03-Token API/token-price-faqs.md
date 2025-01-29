---
title: "Token Price FAQ"
description: "Learn how Moralis Token Price API works, including price calculation methods, pool selection criteria, and supported networks"
slug: "/web3-data-api/evm/token-price-faq"
sidebar_position: 7
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

# Token Price FAQ

## Overview

### How does the Moralis Token Price API work?

Our Token Price API retrieves the **last traded price** of a token from a specific pool and exchange. It differs from services like Coingecko or Coinmarketcap, which calculate average weighted prices across multiple exchanges.

### What types of pools are considered for token prices?

We consider two types of pools:

1. **Native token pairs**
2. **Stablecoin pairs**

If a token does not have either pairing, no price is returned, and an error stating "no liquidity pool found" is provided.

### Are token prices available on testnets?

No, **token prices are only available on mainnet** because they rely on data from decentralized exchanges (DEXes). Since most testnets do not have active DEX liquidity, token price features will not work on testnets.

### What features are affected by this?

Since token prices are **only available on mainnet**, any features that depend on prices—such as `portfolio_percentage` in `getWalletTokenBalancePrices`—are also **only supported on mainnet**.

---

## Price Calculation

### What is the definition of price in the API?

The price is based on the **last traded price** extracted from the swap log event. This value is converted to USD for the token price.

### How does the API handle multiple swaps within the same block?

If multiple swaps occur within a block, the final price as of that block is returned. We do not track granular price fluctuations within a block.

---

## Pool Selection

### How are pools selected for real-time prices?

For real-time prices:

- Exchanges with low liquidity are skipped.
- The pool with the most swaps in the last 24 hours is selected.

### How are pools selected for historical prices?

For historical prices:

- The top 2 pools based on lifetime usage are selected.
- The last record from each pool is compared.
- The pool with higher liquidity is chosen.

### What changed in the historical price selection logic after July 8, 2024?

Previously, the last 5 events of the top 2 pools were considered, and the pool with a higher sum of `blockNumbers` was selected. This logic has been replaced by a simpler liquidity-based approach.

---

## Liquidity and Stability

### What are the liquidity thresholds for tokens?

The default liquidity thresholds are:

- **Ethereum:** $500
- **Other chains:** $150
- **Solana:** No liquidity threshold

### What happens when a token pair's liquidity is below the threshold?

- **GetMultipleTokenPrices:** Low liquidity tokens are omitted.
- **GetTokenPrice:** A `404` error is returned with a message about insufficient liquidity.
- **GetWalletTokenBalancePrice:** Token price is returned as `null`.
- **GetWalletNetWorth:** Token price is excluded from the net worth calculation.

### Can liquidity thresholds be customized?

Yes, using the `min_pair_side_liquidity_usd` query parameter, you can set a custom threshold. For example:

- `min_pair_side_liquidity_usd=5000` ensures only pairs with at least $5000 in liquidity are considered.

### How are stablecoin pairs handled?

Stablecoin pairs can be found in the `stableTokens` section of the Chain Strategies API. For Solana, supported stables include:

- **USDC:** `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
- **USDT:** `Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`

---

## Inactivity Handling

### How does the API handle inactive tokens?

Tokens with no trading activity for extended periods can be excluded using the `max_token_inactivity` query parameter. For example:

- `max_token_inactivity=14` excludes tokens without trading activity for 14 days.

### What happens when a token is considered inactive?

- **GetMultipleTokenPrices:** Inactive tokens are omitted.
- **GetTokenPrice:** A `400` error is returned with a message about no trading activity.
- **GetWalletTokenBalancePrice:** Token price is returned as `null`.
- **GetWalletNetWorth:** Token price is excluded from net worth calculation.

---

## Additional Features

### What is `pairTotalLiquidityUsd` in the response?

`pairTotalLiquidityUsd` represents the total liquidity of a pair, calculated as:

- `amountLockedUsd` = total locked amount of the token \* its current USD price
- `oppositeAmountLockedUsd` = total locked amount of the opposite token \* its current USD price
- Total liquidity = `amountLockedUsd` + `oppositeAmountLockedUsd`

---

## Errors and Edge Cases

### What errors can I expect when fetching token prices?

1. **No liquidity pool found:** Returned when no native or stablecoin pairs exist.
2. **Insufficient liquidity:** Returned if the pair's liquidity is below the threshold.
3. **Inactive token:** Returned if the token has not been traded for the specified inactivity period.
4. **Testnet request:** Token prices and price-related features do not work on testnets.

### Can I retrieve token prices for custom conditions?

Yes, you can customize liquidity thresholds (`min_pair_side_liquidity_usd`) and inactivity periods (`max_token_inactivity`) to fit your needs.
