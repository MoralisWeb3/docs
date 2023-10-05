---
title: "Extensive DEX Support for Enhanced API Functionality"
slug: "../supported-dexs-token-api"
sidebar_label: "Supported DEXs"
sidebar_position: 5
---

The Moralis Token API seamlessly integrates with leading decentralized exchanges (DEXs) across multiple EVM blockchains, providing comprehensive support for token-related data.

# DEX Support by Chain

Below, you will find a list of supported chains on the Moralis Token API, along with the corresponding decentralized exchanges (DEXs) available on each chain. Simply click on a chain's name to jump to its respective section for more details:

* [Ethereum](#ethereum)
* [Polygon](#polygon)
* [Binance Smart Chain](#binance-smart-chain)
* [Avalanche](#avalanche)
* [Fantom Opera](#fantom-opera)
* [Cronos](#cronos)
* [Arbitrum](#arbitrum)


Certainly, here's a paragraph introducing the list of supported chains:

"Below, you'll find a list of supported chains on the Moralis Token API, along with the corresponding decentralized exchanges (DEXs) available on each chain. Simply click on a chain's name to jump to its respective section for more details."

And here's the table with the chains listed as headers:

## Ethereum

| Chain            | Supported DEX(s)                          |
| --------------- | ----------------------------------------- |
| Ethereum Mainnet | `uniswapv2`, `uniswapv3`, `sushiswapv2`   |

## Polygon

| Chain           | Supported DEX(s)                          |
| -------------- | ----------------------------------------- |
| Polygon        | `uniswapv2`, `uniswapv3`, `quickswapv2`   |

## Binance Smart Chain

| Chain                       | Supported DEX(s)                          |
| -------------------------- | ----------------------------------------- |
| Binance Smart Chain (BSC) | `uniswapv3`, `pancakeswapv1`, `pancakeswapv2`, `pancakeswapv3` |

## Avalanche

| Chain       | Supported DEX(s)                          |
| ---------- | ----------------------------------------- |
| Avalanche | `traderjoe`, `pangolin`                   |

## Fantom Opera

| Chain         | Supported DEX(s)                          |
| ------------ | ----------------------------------------- |
| Fantom Opera | `spookyswap`                              |

## Cronos

| Chain   | Supported DEX(s)                          |
| ------- | ----------------------------------------- |
| Cronos | `vvs`                                     |

## Arbitrum

| Chain     | Supported DEX(s)                          |
| --------- | ----------------------------------------- |
| Arbitrum | `uniswapv3`, `camelotv2`                  |

In the event that no `exchange` value is specified, the API will proceed to systematically evaluate each exchange. It continues this process until it successfully locates a price, strategically bypassing any exchanges or pairs that are characterized by low liquidity.

# Endpoints DEXs integration

The table shows the list of endpoints that are integrated with the supported DEXs:

| No. | Method                                   | Description                | API Reference                                                                                                       | URL                                                                       |
|-----|------------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 4   | `getTokenPrice`                          | Get ERC20 token price      | [Method Documentation](/web3-data-api/evm/reference/get-token-price) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price)                     |
| 5   | `getMultipleTokenPrices`                 | Get multiple token prices  | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)  
