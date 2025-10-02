---
title: "New Token Swap Transactions API"
slug: "token-swap-transactions-api"
authors:
  name: Bharath Babu
tags: [Web3 Data API]
---

We’re excited to announce the launch of the **Token Swap Transactions API** for both EVM and Solana networks!

<!-- truncate -->

These APIs empower you to fetch detailed swap data for wallets, tokens, and token pairs, enabling seamless integration into trading, analytics, or notification platforms.

### What’s New?

#### EVM APIs

| Name                            | Description                        | API Reference                                                                    | URL                                                                                                                            |
| ------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Get Swaps by Pair Address**   | Fetch swaps by pair address        | [Method Documentation](/web3-data-api/evm/reference/get-swaps-by-pair-address)   | [https://deep-index.moralis.io/api/v2.2/pairs/:address/swaps](https://deep-index.moralis.io/api/v2.2/pairs/:address/swaps)     |
| **Get Swaps by Token Address**  | Fetch swaps by ERC20 token address | [Method Documentation](/web3-data-api/evm/reference/get-swaps-by-token-address)  | [https://deep-index.moralis.io/api/v2.2/erc20/:address/swaps](https://deep-index.moralis.io/api/v2.2/erc20/:address/swaps)     |
| **Get Swaps by Wallet Address** | Fetch swaps by wallet address      | [Method Documentation](/web3-data-api/evm/reference/get-swaps-by-wallet-address) | [https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps](https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps) |

#### Solana APIs

| Name                            | Description                   | API Reference                                                                       | URL                                                                                                                                                    |
| ------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Get Swaps by Pair Address**   | Fetch swaps by pair address   | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-pair-address)   | [https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps](https://solana-gateway.moralis.io/token/:network/pairs/:pairAddress/swaps) |
| **Get Swaps by Token Address**  | Fetch swaps by token address  | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-token-address)  | [https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps](https://solana-gateway.moralis.io/token/:network/:tokenAddress/swaps)           |
| **Get Swaps by Wallet Address** | Fetch swaps by wallet address | [Method Documentation](/web3-data-api/solana/reference/get-swaps-by-wallet-address) | [https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps](https://solana-gateway.moralis.io/account/:network/:walletAddress/swaps)     |

### What Can You Do?

With these APIs, you can:

- **Track Token Swaps**: Retrieve swap transactions for specific wallets, token pairs, or token addresses on both EVM and Solana chains.
- **Build Notification Systems**: Power applications like Telegram bots or dashboards to monitor and alert users about token swaps.
- **Analyze Market Activity**: Gather and analyze token swap data to understand market dynamics or build trading algorithms.

### Example Use Cases:

- **Trading Dashboards**: Monitor swap activity for specific tokens or wallets in real-time.
- **Analytics Platforms**: Provide insights into swap volumes and token flow across wallets and pairs.
- **Notification Systems**: Alert users about large swaps or specific swap events for tokens they are tracking.

### Resources:

- [EVM Token Swaps API Documentation](/web3-data-api/evm/reference/token-api#get-token-swaps)
- [Solana Token Swaps API Documentation](/web3-data-api/solana/reference/token-api#get-token-swaps)
