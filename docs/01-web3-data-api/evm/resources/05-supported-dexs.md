---
title: "Supported DEXs"
slug: "/web3-data-api/evm/supported-dexs-token-api"
sidebar_label: "Supported DEXs"
sidebar_position: 4
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

The [Moralis Token API](/web3-data-api/evm/token-api) seamlessly integrates with leading decentralized exchanges (DEXs) across multiple EVM blockchains, providing comprehensive support for token-related data.

## DEX Support by Chain

The following tables show you how to find a list of supported chains on the [Moralis Token API](/web3-data-api/evm/token-api), along with the corresponding decentralized exchanges (DEXs) available on each chain.

Simply click on a chain's name to jump to its respective section for more details:

- [Ethereum](#ethereum)
- [Polygon](#polygon)
- [Binance Smart Chain (BSC)](#binance-smart-chain-bsc)
- [Avalanche](#avalanche)
- [Fantom Opera](#fantom-opera)
- [Cronos](#cronos)
- [Arbitrum](#arbitrum)
- [Optimism](#optimism)
- [Base](#base)
- [Linea](#linea)
- [Moonbeam](#moonbeam)
- [Ronin](#ronin)
- [PulseChain](#pulsechain)

:::note
If you do not specify a particular exchange, our API takes a comprehensive approach. It checks various exchanges one by one, ensuring that it finds the price you need. It does this while being smart about avoiding exchanges or pairs with low liquidity, guaranteeing you get reliable and accurate results for your queries.
:::

### Ethereum

Chain ID: `0x1`

| Supported DEX(s)                       | Query Parameter Value |
| -------------------------------------- | --------------------- |
| [Uniswap v3](https://app.uniswap.org/) | uniswapv3             |
| [Uniswap v2](https://uniswap.org/)     | uniswapv2             |
| [Sushiswap v2](https://sushi.com/)     | sushiswapv2           |
| [Frax v2](https://frax.finance/)       | fraxswap              |

### Polygon

Chain ID: `0x89`

| Supported DEX(s)                            | Query Parameter Value |
| ------------------------------------------- | --------------------- |
| [Quickswap v2](https://quickswap.exchange/) | quickswapv2           |
| [Uniswap v3](https://app.uniswap.org/)      | uniswapv3             |
| [Uniswap v2](https://uniswap.org/)          | uniswapv2             |
| [MM Finance](https://mm.finance/)           | mm finance            |

### Binance Smart Chain (BSC)

Chain ID: `0x38`

| Supported DEX(s)                                 | Query Parameter Value |
| ------------------------------------------------ | --------------------- |
| [PancakeSwap v3](https://pancakeswap.finance/v3) | pancakeswapv3         |
| [PancakeSwap v2](https://pancakeswap.finance/)   | pancakeswapv2         |
| [PancakeSwap v1](https://pancakeswap.finance/v1) | pancakeswapv1         |
| [Uniswap v3](https://app.uniswap.org/)           | uniswapv3             |
| [Uniswap v2](https://uniswap.org/)               | uniswapv2             |

### Avalanche

Chain ID: `0xa86a`

| Supported DEX(s)                           | Query Parameter Value |
| ------------------------------------------ | --------------------- |
| [TraderJoe](https://www.traderjoexyz.com/) | traderjoe             |
| [Pangolin](https://pangolin.exchange/)     | pangolin              |

### Fantom Opera

Chain ID: `0xfa`

| Supported DEX(s)                          | Query Parameter Value |
| ----------------------------------------- | --------------------- |
| [SpookySwap](https://spookyswap.finance/) | spookyswap            |
| [Uniswap v3](https://app.uniswap.org/)    | uniswapv3             |

### Cronos

Chain ID: `0x19`

| Supported DEX(s)                    | Query Parameter Value |
| ----------------------------------- | --------------------- |
| [VVS Finance](https://vvs.finance/) | vvs                   |
| [MM Finance](https://mm.finance/)   | mm finance            |
| [Crodex](https://crodex.exchange/)  | crodex                |

### Arbitrum

Chain ID: `0xa4b1`

| Supported DEX(s)                          | Query Parameter Value |
| ----------------------------------------- | --------------------- |
| [Uniswap v3](https://app.uniswap.org/)    | uniswapv3             |
| [Camelot V2](https://www.camelotsix.com/) | camelotv2             |
| [Sparta Dex](https://sparta.exchange/)    | spartadex             |

### Optimism

Chain ID: `0x64`

| Supported DEX(s)                   | Query Parameter Value |
| ---------------------------------- | --------------------- |
| [Sushiswap v2](https://sushi.com/) | sushiswapv2           |
| [Uniswap v2](https://uniswap.org/) | uniswapv2             |

### Base

Chain ID: `0x2105`

| Supported DEX(s)                               | Query Parameter Value |
| ---------------------------------------------- | --------------------- |
| [Sharkswap](https://www.sharkswap.finance/)    | sharkswap             |
| [Uniswap v2](https://uniswap.org/)             | uniswapv2             |
| [Uniswap v3](https://app.uniswap.org/)         | uniswapv3             |
| [Sushiswap v2](https://sushi.com/)             | sushiswapv2           |
| [Sushiswap v3](https://sushi.com/)             | sushiswapv3           |
| [PancakeSwap v2](https://pancakeswap.finance/) | pancakeswapv2         |
| [PancakeSwap v3](https://pancakeswap.finance/) | pancakeswapv3         |
| [Baseswap](https://baseswap.fi)                | baseswap              |
| [Aerodrome](https://aerodrome.finance)         | aerodrome             |

### Linea

Chain ID: `0xe708`

| Supported DEX(s)                                 | Query Parameter Value |
| ------------------------------------------------ | --------------------- |
| [PancakeSwap v3](https://pancakeswap.finance/v3) | pancakeswapv3         |
| [Nile](https://www.thenile.exchange/swap)        | nile                  |

### Moonbeam

Chain ID: `0x504`

| Supported DEX(s)                      | Query Parameter Value |
| ------------------------------------- | --------------------- |
| [Beamswap v3](https://beamswap.io/)   | beamswap              |
| [StellaSwap](https://stellaswap.com/) | stellaswap            |

### Ronin

Chain ID: `0x7e4`

| Supported DEX(s)                         | Query Parameter Value |
| ---------------------------------------- | --------------------- |
| [Katana](https://katana.roninchain.com/) | katana                |

### PulseChain

Chain ID: `0x171`

| Supported DEX(s)              | Query Parameter Value |
| ----------------------------- | --------------------- |
| [PulseX](https://pulsex.com/) | pulsex                |
| [9 Inch](https://www.9inch.io/) | 9inch                |

## Endpoints DEXs integration

The table shows the list of endpoints that are integrated with the supported DEXs:

| No. | Method                 | Description                | API Reference                                                                  | URL                                                                                                                                                                      |
| --- | ---------------------- | -------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | getTokenPrice          | Get ERC20 token price      | [Method Documentation](/web3-data-api/evm/reference/get-token-price)           | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price)                                               |
| 2   | getMultipleTokenPrices | Get multiple token prices  | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)                                                               |
| 3   | getPairAddress         | Get DEX token pair address | [Method Documentation](/web3-data-api/evm/reference/get-pair-address)          | [https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddress](https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddress) |
