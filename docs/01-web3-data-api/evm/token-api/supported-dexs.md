---
title: "Extensive DEX Support for Enhanced API Functionality"
slug: "../supported-dexs-token-api"
sidebar_label: "Supported DEXs"
sidebar_position: 5
---

The Moralis Token API seamlessly integrates with leading decentralized exchanges (DEXs) across multiple EVM blockchains, providing comprehensive support for token-related data.

## DEX Support by Chain

If you do not specify a particular `exchange`, our API takes a comprehensive approach. It checks various exchanges one by one, ensuring that it finds the price you need. It does this while being smart about avoiding exchanges or pairs with low liquidity, guaranteeing you get reliable and accurate results for your queries.

Below, you will find a list of supported chains on the Moralis Token API, along with the corresponding decentralized exchanges (DEXs) available on each chain. Simply click on a chain's name to jump to its respective section for more details:

* [Ethereum](#ethereum)
* [Polygon](#polygon)
* [Binance Smart Chain (BSC)](#binance-smart-chain-bsc)
* [Avalanche](#avalanche)
* [Fantom Opera](#fantom-opera)
* [Cronos](#cronos)
* [Arbitrum](#arbitrum)

### Ethereum

| Supported DEX(s)     |
| -------------------- |
| [Uniswap v3](https://app.uniswap.org/)           |
| [Uniswap v2](https://uniswap.org/)           |
| [Sushiswap v2](https://sushi.com/)         |

### Polygon

| Supported DEX(s)     |
| -------------------- |
| [Quickswap v2](https://quickswap.exchange/)         |
| [Uniswap v3](https://app.uniswap.org/)           |
| [Uniswap v2](https://uniswap.org/)           |
| [MM Finance](https://mm.finance/)           |

### Binance Smart Chain (BSC)

| Supported DEX(s)     |
| -------------------- |
| [PancakeSwap v2](https://pancakeswap.finance/)       |
| [PancakeSwap v3](https://pancakeswap.finance/v3)       |
| [PancakeSwap v1](https://pancakeswap.finance/v1)       |
| [Uniswap v3](https://app.uniswap.org/)           |

### Avalanche

| Supported DEX(s)     |
| -------------------- |
| [TraderJoe](https://www.traderjoexyz.com/)           |
| [Pangolin](https://pangolin.exchange/)             |

### Fantom Opera

| Supported DEX(s)     |
| -------------------- |
| [SpookySwap](https://spookyswap.finance/)         |

### Cronos

| Supported DEX(s)     |
| -------------------- |
| [VVS Finance](https://vvs.finance/)           |
| [MM Finance](https://mm.finance/)           |
| [Crodex](https://crodex.exchange/)               |

### Arbitrum

| Supported DEX(s)     |
| -------------------- |
| [Uniswap v3](https://app.uniswap.org/)           |
| [Camelot V2](https://www.camelotsix.com/)           |

## Endpoints DEXs integration

The table shows the list of endpoints that are integrated with the supported DEXs:

| No. | Method                                   | Description                | API Reference                                                                                                       | URL                                                                       |
|-----|------------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 4   | `getTokenPrice`                          | Get ERC20 token price      | [Method Documentation](/web3-data-api/evm/reference/get-token-price) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price)                     |
| 5   | `getMultipleTokenPrices`                 | Get multiple token prices  | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)  
