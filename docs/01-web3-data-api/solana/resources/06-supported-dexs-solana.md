---
title: "Supported DEXs on Solana"
slug: "/web3-data-api/solana/supported-dexs"
sidebar_label: "Supported DEXs on Solana"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

The [Moralis Token API](/web3-data-api/solana/reference/token-api) supports several decentralized exchanges (DEXs) on Solana. Below is the list of supported Solana DEXs and their corresponding addresses.

## Supported DEXs on Solana

The following DEXs are integrated into the Moralis Token API for Solana, enabling seamless access to token-related data.

### Raydium v4

- **Address**: [675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8](https://solscan.io/account/675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8)

### Raydium CLMM (Constant Product Market Maker)

- **Address**: [CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK](https://solscan.io/account/CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK)

### Raydium CPMM (Constant Product Market Maker)

- **Address**: [CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C](https://solscan.io/account/CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C)

### Meteora Dynamic AMM (Automated Market Maker)

- **Address**: [Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB](https://solscan.io/account/Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB)

### Meteora DLMM (Dynamic Liquidity Market Maker)

- **Address**: [LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo](https://solscan.io/account/LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo)

### Orca/Whirlpool

- **Address**: [whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc](https://solscan.io/account/whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc)

### PumpFun

- **Address**: [6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P](https://solscan.io/account/6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P)

### PumpSwap

- **Address**: [pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA](https://solscan.io/account/pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA)

### LaunchLab

- **Address**: [LanMV9sAd7wArD4vJFi2qDdfnVhFxYSUg6eADduJ3uj](https://solscan.io/account/LanMV9sAd7wArD4vJFi2qDdfnVhFxYSUg6eADduJ3uj)

## Endpoints DEXs Integration

The table shows the list of endpoints that are integrated with the supported Solana DEXs:

| No. | Method                         | Description                                      | API Reference                                                                               | URL                                                                                                                                                                                         |
| --- | ------------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getTokenPrice`                | Get token price                                  | [Method Documentation](/web3-data-api/solana/reference/price/get-sol-token-price)           | [https://solana-gateway.moralis.io/token/:network/:address/price](https://solana-gateway.moralis.io/token/:network/:address/price)                                                          |
| 2   | `getMultipleTokenPrices`       | Get multiple token prices                        | [Method Documentation](/web3-data-api/solana/reference/price/get-multiple-token-prices)     | [https://solana-gateway.moralis.io/token/:network/:address/price](https://solana-gateway.moralis.io/token/:network/:address/price)                                                          |
| 3   | `getCandleSticks`              | Get the OHLCV candlesticks by using pair address | [Method Documentation](/web3-data-api/solana/reference/price/get-ohlcv-by-pair-address)     | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/ohlcv)                                      |
| 4   | `getTokenPairs`                | Get token pairs by address                       | [Method Documentation](/web3-data-api/solana/reference/get-token-pairs-by-address)          | [https://solana-gateway.moralis.io/token/:network/:address/pairs](https://solana-gateway.moralis.io/token/:network/:address/pairs)                                                          |
| 5   | `getTokenPairStats`            | Get token pair statistics                        | [Method Documentation](/web3-data-api/solana/reference/get-token-pair-stats)                | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/stats](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/stats)                                      |
| 6   | `getAggregatedTokenPairStats`  | Get aggregated token pair statistics             | [Method Documentation](/web3-data-api/solana/reference/get-aggregated-token-pair-stats)     | [https://solana-gateway.moralis.io/token/:network/:address/pairs/stats](https://solana-gateway.moralis.io/token/:network/:address/pairs/stats)                                              |
| 7   | `getSwapsByPairAddress`        | Get swaps by pair address                        | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-pair-address)           | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps)                                      |
| 8   | `getSwapsByWalletAddress`      | Get swaps by wallet address                      | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-wallet-address)         | [https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps](https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps)                                                |
| 9   | `getSwapsByTokenAddress`       | Get swaps by token address                       | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-token-address)          | [https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps](https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps)                                          |
| 10  | `getNewTokensByExchange`       | Get new tokens by exchange                       | [Method Documentation](/web3-data-api/solana/reference/get-new-tokens-by-exchange)          | [https://solana-gateway.moralis.io/token/mainnet/exchange/:exchange/new](https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/new?limit=100)                                    |
| 11  | `getBondingTokensByExchange`   | Get tokens in bonding phase by exchange          | [Method Documentation](/web3-data-api/solana/reference/get-bonding-tokens-by-exchange)      | [https://solana-gateway.moralis.io/token/mainnet/exchange/:exchange/bonding](https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/bonding?limit=100)                            |
| 12  | `getGraduatedTokensByExchange` | Get graduated tokens by exchange                 | [Method Documentation](/web3-data-api/solana/reference/get-graduated-tokens-by-exchange)    | [https://solana-gateway.moralis.io/token/mainnet/exchange/:exchange/graduated](https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/graduated?limit=100)                        |
| 13  | `getTokenBondingStatus`        | Get bonding status by token address              | [Method Documentation](/web3-data-api/solana/reference/get-bonding-status-by-token-address) | [https://solana-gateway.moralis.io/token/mainnet/:tokenAddress/bonding-status](https://solana-gateway.moralis.io/token/mainnet/H2p8S7Ssd3mrBft1bcDGnzW8KNRAGtPTtJLv1tnupump/bonding-status) |
