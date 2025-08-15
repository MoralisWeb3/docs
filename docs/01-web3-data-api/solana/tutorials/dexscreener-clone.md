---
title: "Building a DexScreener Clone with Moralis"
slug: "/web3-data-api/solana/tutorials/dexscreener-clone"
sidebar_label: "Building a DEX Terminal"
sidebar_position: 5
description: "Learn how to build a comprehensive cryptocurrency terminal application similar to DexScreener using Moralis APIs"
---

# Building a DexScreener Clone

Learn how to create a comprehensive cryptocurrency terminal application with React, featuring real-time token data, price charts, transaction history, and portfolio tracking. This tutorial demonstrates how to build a modern crypto dashboard similar to DexScreener using Moralis APIs.

## Prerequisites

- Basic knowledge of React
- Familiarity with Web3 concepts
- [Moralis account](https://admin.moralis.com/register)
- Node.js installed on your computer

## Video Tutorial

📺 [Watch the step-by-step tutorial on YouTube](https://youtu.be/ps4vYIGpfhE)

[![DexScreener Clone Tutorial](https://img.youtube.com/vi/ps4vYIGpfhE/maxresdefault.jpg)](https://youtu.be/ps4vYIGpfhE)

## Features

- 📈 **Trending Tokens** - Track the most popular tokens across multiple blockchains
- 🔍 **Token Details** - In-depth information about any token including price charts and transactions
- 💼 **Portfolio Tracking** - Monitor your crypto holdings in one place
- 🚀 **Pump.fun Integration** - Discover new tokens from the Pump.fun ecosystem with our [Pump Fun API](/web3-data-api/solana/pump-fun-tutorials)
- 🔎 **Advanced Search** - Find tokens by name, symbol, or contract address
- ⛓️ **Multi-Chain Support** - Data from Ethereum, BSC, Polygon, Solana, and more

## Tech Stack

- **React** - Frontend library
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling and UI components
- **Chart.js** - Data visualization
- **Moralis API** - Blockchain data provider

## Project Structure

```
src/
├── components/ # Reusable UI components
│ ├── layout/ # Layout components (sidebar, topbar)
│ ├── token/ # Token-specific components
│ ├── trending/ # Trending page components
│ ├── portfolio/ # Portfolio tracking components
│ └── modals/ # Modal components (search, filters)
├── pages/ # Page components
├── services/ # API services and utilities
├── App.js # Main application component
└── index.js # Application entry point
```

## Moralis APIs Used

This project leverages several Moralis APIs to fetch blockchain data:

### Token Data APIs

| Feature                 | API Endpoint                                 | Description                                          | Moralis Docs Link                                                                                                                                          |
| ----------------------- | -------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Trending Tokens         | `GET /tokens/trending`                       | Gets trending tokens across all supported chains     | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/get-trending-tokens?chain=eth)                                                             |
| Token Search            | `GET /tokens/search`                         | Searches for tokens based on user queries            | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/search-tokens?query=pepe&chains=eth)                                                       |
| Token Metadata (EVM)    | `GET /erc20/metadata`                        | Fetches metadata for tokens (name, symbol, decimals) | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/get-token-metadata?chain=eth&addresses=[])                                                 |
| Token Metadata (Solana) | `GET /token/mainnet/{tokenAddress}/metadata` | Retrieves token metadata on Solana                   | [API Docs](https://docs.moralis.com/web3-data-api/solana/reference/get-token-metadata?network=mainnet&address=SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt) |

### Pair/Liquidity Pool APIs

| Feature               | API Endpoint                                     | Description                                        | Moralis Docs Link                                                                                                                                                                 |
| --------------------- | ------------------------------------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Token Pairs (EVM)     | `GET /erc20/{tokenAddress}/pairs`                | Gets trading pairs for a specific token            | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/get-token-pairs?token_address=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&chain=eth)                               |
| Token Pairs (Solana)  | `GET /token/mainnet/{tokenAddress}/pairs`        | Gets trading pairs for a Solana token              | [API Docs](https://docs.moralis.com/web3-data-api/solana/reference/get-token-pairs-by-address?network=mainnet&address=SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt)                |
| Pair Stats (EVM)      | `GET /pairs/{pairAddress}/stats`                 | Retrieves stats for a trading pair (price, volume) | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/get-token-pair-stats?address=0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640&chain=eth)                                |
| Pair Stats (Solana)   | `GET /token/mainnet/pairs/{pairAddress}/stats`   | Gets stats for a Solana trading pair               | [API Docs](https://docs.moralis.com/web3-data-api/solana/reference/get-token-pair-stats?network=mainnet&pairAddress=83v8iPyZihDEjDdY8RdZddyZNyUtXngz69Lgo9Kt5d6d)                 |
| Pair Swaps (EVM)      | `GET /pairs/{pairAddress}/swaps`                 | Gets transaction history for a trading pair        | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/get-swaps-by-pair-address?address=0xcbcdf9626bc03e24f779434178a73a0b4bad62ed&chain=eth&order=DESC)                |
| Pair Swaps (Solana)   | `GET /token/mainnet/pairs/{pairAddress}/swaps`   | Gets Solana pair transaction history               | [API Docs](https://docs.moralis.com/web3-data-api/solana/reference/get-swaps-by-pair-address?network=mainnet&pairAddress=EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx&order=DESC) |
| Pair Snipers (EVM)    | `GET /pairs/{pairAddress}/snipers`               | Identifies early buyers/snipers of a token         | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/get-snipers-by-pair-address?address=0x85218527945d48167A682e277867F1539AD00068&chain=eth&blocksAfterCreation=3)   |
| Pair Snipers (Solana) | `GET /token/mainnet/pairs/{pairAddress}/snipers` | Identifies Solana token snipers                    | [API Docs](https://docs.moralis.com/web3-data-api/solana/reference/get-snipers-by-pair-address?address=72Fxbe17djHuwZ5AtcihK58FERSULoLWiC5sh2Hjhma8&blocksAfterCreation=1000)     |

### Token Holder APIs

| Feature            | API Endpoint                             | Description                            | Moralis Docs Link                                                                                                                                                |
| ------------------ | ---------------------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Token Holders      | `GET /erc20/{tokenAddress}/holders`      | Lists token holders and their balances | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/get-token-holders?token_address=0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0&chain=eth&order=DESC) |
| Token Holder Stats | `GET /erc20/{tokenAddress}/holder-stats` | Provides analytics about token holders | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/get-token-holder-stats?address=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599&chain=eth)             |

### Wallet/Portfolio APIs

| Feature          | API Endpoint                       | Description                                      | Moralis Docs Link                                    |
| ---------------- | ---------------------------------- | ------------------------------------------------ | ---------------------------------------------------- |
| Wallet Net Worth | `GET /wallets/{address}/net-worth` | Calculates total value of a wallet across chains | [EVM API](https://docs.moralis.io/web3-data-api/evm) |
| Wallet Tokens    | `GET /wallets/{address}/tokens`    | Lists all tokens held by a specific wallet       | [EVM API](https://docs.moralis.io/web3-data-api/evm) |

### Token Discovery/Filtering API

| Feature         | API Endpoint           | Description                                      | Moralis Docs Link                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Token Filtering | `GET /filtered-tokens` | Finds tokens based on complex filtering criteria | [API Docs](https://docs.moralis.com/web3-data-api/evm/reference/get-filtered-tokens?chain=0x1&filters=[{%22metric%22:%22experiencedBuyers%22,%22timeFrame%22:%22oneMonth%22,%22gt%22:%2210%22}]&sortBy={%22metric%22:%22experiencedBuyers%22,%22timeFrame%22:%22oneMonth%22,%22type%22:%22DESC%22}&timeFramesToReturn=[]&metricsToReturn=[]&limit=5) |

### Pump.fun (Solana) APIs

| Feature                   | API Endpoint                                    | Description                                  | Moralis Docs Link                                                                      |
| ------------------------- | ----------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------- |
| Pump.fun New Tokens       | `GET /token/mainnet/exchange/pumpfun/new`       | Gets newly created tokens on Pump.fun        | [API Docs](https://solana-gateway.moralis.io/api/#/Token/getNewTokensByExchange)       |
| Pump.fun Bonding Tokens   | `GET /token/mainnet/exchange/pumpfun/bonding`   | Gets tokens in the bonding phase on Pump.fun | [API Docs](https://solana-gateway.moralis.io/api/#/Token/getBondingTokensByExchange)   |
| Pump.fun Graduated Tokens | `GET /token/mainnet/exchange/pumpfun/graduated` | Gets tokens that have graduated on Pump.fun  | [API Docs](https://solana-gateway.moralis.io/api/#/Token/getGraduatedTokensByExchange) |

### Chart Widget

| Feature              | Source                                      | Description                                | Moralis Docs Link                                               |
| -------------------- | ------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| Moralis Chart Widget | `https://moralis.com/static/embed/chart.js` | Embeds interactive price charts for tokens | [Widget Docs](https://explorer.moralis.com/widgets/price-chart) |

## Supported Blockchains

The application supports multiple blockchains with the following chain IDs:

| Chain     | Chain ID | Explorer                                                |
| --------- | -------- | ------------------------------------------------------- |
| Ethereum  | 0x1      | [Etherscan](https://etherscan.io)                       |
| BSC       | 0x38     | [BscScan](https://bscscan.com)                          |
| Polygon   | 0x89     | [PolygonScan](https://polygonscan.com)                  |
| Arbitrum  | 0xa4b1   | [Arbiscan](https://arbiscan.io)                         |
| Optimism  | 0xa      | [Optimistic Etherscan](https://optimistic.etherscan.io) |
| Base      | 0x2105   | [BaseScan](https://basescan.org)                        |
| Avalanche | 0xa86a   | [Snowtrace](https://snowtrace.io)                       |
| Solana    | solana   | [Solscan](https://solscan.io)                           |
| Fantom    | 0xfa     | [FTMScan](https://ftmscan.com)                          |
| Pulse     | 0x171    | [PulseScan](https://scan.pulsechain.com)                |
| Ronin     | 0x7e4    | [Ronin Explorer](https://app.roninchain.com)            |

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Moralis API key ([Get one here](https://developers.moralis.com))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bharathbabu-moralis/dexscreener-clone.git
   cd dexscreener-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Moralis API key:

   ```
   REACT_APP_MORALIS_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Styling

The application uses Tailwind CSS with custom variables for consistent theming:

```css
:root {
  --color-bg-primary: #0e1118;
  --color-bg-secondary: #141722;
  --color-bg-tertiary: #1e2330;
  --color-bg-highlight: #252b3b;
  --color-text-primary: #fff;
  --color-text-secondary: #8a94a8;
  --color-text-tertiary: #636d83;
  --color-border: #2c3344;
  --color-green: #16c784;
  --color-red: #ea3943;
  --color-blue: #4878ff;
}
```
