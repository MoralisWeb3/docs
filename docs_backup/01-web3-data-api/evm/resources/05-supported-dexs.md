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

<ul>
<li><a href="#ethereum">Ethereum</a></li>
<li><a href="#polygon">Polygon</a></li>
<li><a href="#binance-smart-chain-bsc">Binance Smart Chain (BSC)</a></li>
<li><a href="#avalanche">Avalanche</a></li>
<li><a href="#fantom-opera">Fantom Opera</a></li>
<li><a href="#cronos">Cronos</a></li>
<li><a href="#arbitrum">Arbitrum</a></li>
<li><a href="#optimism">Optimism</a></li>
<li><a href="#base">Base</a></li>
<li><a href="#linea">Linea</a></li>
<li><a href="#moonbeam">Moonbeam</a></li>
<li><a href="#ronin">Ronin</a></li>
<li><a href="#pulsechain">PulseChain</a></li>
</ul>

:::note
If you do not specify a particular exchange, our API takes a comprehensive approach. It checks various exchanges one by one, ensuring that it finds the price you need. It does this while being smart about avoiding exchanges or pairs with low liquidity, guaranteeing you get reliable and accurate results for your queries.
:::

### Ethereum

Chain ID: `0x1`

| Supported DEX(s)                       | Query Parameter Value |
| -------------------------------------- | --------------------- |
| [Uniswap v4](https://app.uniswap.org/) | uniswapv4             |
| [Uniswap v3](https://app.uniswap.org/) | uniswapv3             |
| [Uniswap v2](https://uniswap.org/)     | uniswapv2             |
| [Sushiswap v2](https://sushi.com/)     | sushiswapv2           |
| [Frax v2](https://frax.finance/)       | fraxswap              |

### Polygon

Chain ID: `0x89`

| Supported DEX(s)                            | Query Parameter Value |
| ------------------------------------------- | --------------------- |
| [Uniswap v4](https://app.uniswap.org/)      | uniswapv4             |
| [Quickswap v2](https://quickswap.exchange/) | quickswapv2           |
| [Uniswap v3](https://app.uniswap.org/)      | uniswapv3             |
| [Uniswap v2](https://uniswap.org/)          | uniswapv2             |
| [MM Finance](https://mm.finance/)           | mm finance            |

### Binance Smart Chain (BSC)

Chain ID: `0x38`

| Supported DEX(s)                                 | Query Parameter Value |
| ------------------------------------------------ | --------------------- |
| [Uniswap v4](https://app.uniswap.org/)           | uniswapv4             |
| [PancakeSwap v3](https://pancakeswap.finance/v3) | pancakeswapv3         |
| [PancakeSwap v2](https://pancakeswap.finance/)   | pancakeswapv2         |
| [PancakeSwap v1](https://pancakeswap.finance/v1) | pancakeswapv1         |
| [Uniswap v3](https://app.uniswap.org/)           | uniswapv3             |
| [Uniswap v2](https://uniswap.org/)               | uniswapv2             |

### Avalanche

Chain ID: `0xa86a`

| Supported DEX(s)                           | Query Parameter Value |
| ------------------------------------------ | --------------------- |
| [Uniswap v4](https://app.uniswap.org/)     | uniswapv4             |
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
| [Uniswap v4](https://app.uniswap.org/)    | uniswapv4             |
| [Uniswap v3](https://app.uniswap.org/)    | uniswapv3             |
| [Camelot V2](https://www.camelotsix.com/) | camelotv2             |
| [Sparta Dex](https://sparta.exchange/)    | spartadex             |

### Optimism

Chain ID: `0x64`

| Supported DEX(s)                       | Query Parameter Value |
| -------------------------------------- | --------------------- |
| [Uniswap v4](https://app.uniswap.org/) | uniswapv4             |
| [Sushiswap v2](https://sushi.com/)     | sushiswapv2           |
| [Uniswap v2](https://uniswap.org/)     | uniswapv2             |

### Base

Chain ID: `0x2105`

| Supported DEX(s)                               | Query Parameter Value |
| ---------------------------------------------- | --------------------- |
| [Uniswap v4](https://app.uniswap.org/)         | uniswapv4             |
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

| Supported DEX(s)                | Query Parameter Value |
| ------------------------------- | --------------------- |
| [PulseX](https://pulsex.com/)   | pulsex                |
| [9 Inch](https://www.9inch.io/) | 9inch                 |

## Endpoints DEXs integration

The table shows the list of endpoints that are integrated with the supported DEXs:

| No. | Method                        | Description                                      | API Reference                                                                        | URL                                                                                                                                                                    |
| --- | ----------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getTokenPairs`               | Get token pairs by address                       | [Method Documentation](/web3-data-api/evm/reference/get-token-pairs)                 | [https://deep-index.moralis.io/api/v2.2/:token_address/pairs](https://deep-index.moralis.io/api/v2.2/:token_address/pairs)                                             |
| 2   | `getPairStats`                | Get token pair statistics                        | [Method Documentation](/web3-data-api/evm/reference/get-token-pair-stats)            | [https://deep-index.moralis.io/api/v2.2//pairs/:address/stats](https://deep-index.moralis.io/api/v2.2//pairs/:address/stats)                                           |
| 3   | `getAggregatedTokenPairStats` | Get aggregated token pair statistics             | [Method Documentation](/web3-data-api/evm/reference/get-aggregated-token-pair-stats) | [https://deep-index.moralis.io/api/v2.2/:token_address/pairs/stats](https://deep-index.moralis.io/api/v2.2/:token_address/pairs/stats)                                 |
| 4   | `getPairAddress`              | Get DEX token pair address                       | [Method Documentation](/web3-data-api/evm/reference/get-pair-address)                | [https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres](https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres) |
| 5   | `getPairReserves`             | Get DEX token pair reserves                      | [Method Documentation](/web3-data-api/evm/reference/get-pair-reserves)               | [https://deep-index.moralis.io/api/v2.2/:pair_address/reserves](https://deep-index.moralis.io/api/v2.2/:pair_address/reserves)                                         |
| 6   | `getTokenPrice`               | Get ERC20 token price                            | [Method Documentation](/web3-data-api/evm/reference/price/get-token-price)           | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price)                                             |
| 7   | `getMultipleTokenPrices`      | Get multiple token prices                        | [Method Documentation](/web3-data-api/evm/reference/price/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)                                                             |
| 8   | `getPairCandlesticks`         | Get the OHLCV candlesticks by using pair address | [Method Documentation](/web3-data-api/evm/reference/price/get-ohlcv-by-pair-address) | [https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv](https://deep-index.moralis.io/api/v2.2/pairs/:address/ohlcv)                                             |
| 9   | `getSwapsByPairAddress`       | Get swaps by pair address                        | [Method Documentation](/web3-data-api/evm/reference/get-swaps-by-pair-address)       | [https://deep-index.moralis.io/api/v2.2/pairs/:address/swaps](https://deep-index.moralis.io/api/v2.2/pairs/:address/swaps)                                             |
| 10  | `getSwapsByTokenAddress`      | Get swaps by ERC20 token address                 | [Method Documentation](/web3-data-api/evm/reference/get-swaps-by-token-address)      | [https://deep-index.moralis.io/api/v2.2/erc20/:address/swaps](https://deep-index.moralis.io/api/v2.2/erc20/:address/swaps)                                             |
| 11  | `getSwapsByWalletAddress`     | Get swaps by wallet address                      | [Method Documentation](/web3-data-api/evm/reference/get-swaps-by-wallet-address)     | [https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps](https://deep-index.moralis.io/api/v2.2/wallets/:address/swaps)                                         |
