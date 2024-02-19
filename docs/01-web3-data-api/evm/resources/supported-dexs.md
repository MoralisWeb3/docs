---
title: "Extensive DEX Support for Enhanced API Functionality"
slug: "../../evm/supported-dexs-token-api"
sidebar_label: "Supported DEXs"
sidebar_position: 0
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

The [Moralis Token API](/web3-data-api/evm/token-api) seamlessly integrates with leading decentralized exchanges (DEXs) across multiple EVM blockchains, providing comprehensive support for token-related data.

## DEX Support by Chain

The following tables show you how to find a list of supported chains on the [Moralis Token API](/web3-data-api/evm/token-api), along with the corresponding decentralized exchanges (DEXs) available on each chain.

Simply click on a chain's name to jump to its respective section for more details:

* [Ethereum](#ethereum)
* [Polygon](#polygon)
* [Binance Smart Chain (BSC)](#binance-smart-chain-bsc)
* [Avalanche](#avalanche)
* [Fantom Opera](#fantom-opera)
* [Cronos](#cronos)
* [Arbitrum](#arbitrum)
* [Base](#base)

:::note
If you do not specify a particular `exchange`, our API takes a comprehensive approach. It checks various exchanges one by one, ensuring that it finds the price you need. It does this while being smart about avoiding exchanges or pairs with low liquidity, guaranteeing you get reliable and accurate results for your queries.
:::

### Ethereum

| Supported DEX(s)     |  Query Parameter Value |
| -------------------- | -------------------- |
| [Uniswap v3](https://app.uniswap.org/)           | uniswapv3 |
| [Uniswap v2](https://uniswap.org/)           | uniswapv2 |
| [Sushiswap v2](https://sushi.com/)         | sushiswapv2 |

### Polygon

| Supported DEX(s)     |Query Parameter Value|
| -------------------- | --------------------|
| [Quickswap v2](https://quickswap.exchange/)         |quickswapv2|
| [Uniswap v3](https://app.uniswap.org/)           | uniswapv3 |
| [Uniswap v2](https://uniswap.org/)           |uniswapv2 |
| [MM Finance](https://mm.finance/)           |mm finance|

### Binance Smart Chain (BSC)

| Supported DEX(s)     |Query Parameter Value|
| -------------------- | --------------------|
| [PancakeSwap v2](https://pancakeswap.finance/)       |pancakeswapv2|
| [PancakeSwap v3](https://pancakeswap.finance/v3)       |pancakeswapv3|
| [PancakeSwap v1](https://pancakeswap.finance/v1)       |pancakeswapv1|
| [Uniswap v3](https://app.uniswap.org/)           |uniswapv3|

### Avalanche

| Supported DEX(s)     |Query Parameter Value|
| -------------------- |--------------------|
| [TraderJoe](https://www.traderjoexyz.com/)           |traderjoe|
| [Pangolin](https://pangolin.exchange/)             |pangolin|

### Fantom Opera

| Supported DEX(s)     |Query Parameter Value|
| -------------------- |--------------------|
| [SpookySwap](https://spookyswap.finance/)         |spookyswap|

### Cronos

| Supported DEX(s)     |Query Parameter Value|
| -------------------- |--------------------|
| [VVS Finance](https://vvs.finance/)           |vvs|
| [MM Finance](https://mm.finance/)           |mm finance|
| [Crodex](https://crodex.exchange/)               |crodex|

### Arbitrum

| Supported DEX(s)     |Query Parameter Value|
| -------------------- |--------------------|
| [Uniswap v3](https://app.uniswap.org/)           |uniswapv3|
| [Camelot V2](https://www.camelotsix.com/)           |camelotv2|

### Optimism

| Supported DEX(s)     |Query Parameter Value|
| -------------------- |--------------------|
| [Uniswap v3](https://app.uniswap.org/)           |uniswapv3|


### Base

| Supported DEX(s)     |
| -------------------- |
| [Uniswap v3](https://app.uniswap.org/)           |
| [Sharkswap](https://www.sharkswap.finance/swap)          |
| [Aerodrome](https://aerodrome.finance)           |
| [Baseswap](https://baseswap.fi)           |
| [PancakeSwap](https://pancakeswap.finance/)           |
| [Sushiswap](https://sushi.com/)           |  


## Endpoints DEXs integration

The table shows the list of endpoints that are integrated with the supported DEXs:

| No. | Method                                   | Description                | API Reference                                                                                                       | URL                                                                       |
|-----|------------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 1   | `getTokenPrice`                          | Get ERC20 token price      | [Method Documentation](/web3-data-api/evm/reference/get-token-price) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price)                     |
| 2   | `getMultipleTokenPrices`                 | Get multiple token prices  | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)
| 3   | `getPairAddress`                 | Get DEX token pair address | [Method Documentation](/web3-data-api/evm/reference/get-pair-address) | [https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddress](https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddress)
