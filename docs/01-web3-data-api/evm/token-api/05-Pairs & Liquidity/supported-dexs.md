---
title: "Supported DEXs"
slug: "../supported-dexs-defi-api"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

The Moralis DeFi API is integrated with an extensive range of Decentralized Exchanges (DEXs), operating across numerous EVM blockchains. A comprehensive list of these supported DEXs is presented in the subsequent table for your reference.

| Chain       | Supported DEX(s)                          |
| ----------- | ----------------------------------------- |
| Eth mainnet | `uniswapv2`, `uniswapv3`, `sushiswapv2`   |
| Polygon     | `uniswapv2`, `uniswapv3`, `quickswapv2`   |
| BSC         | `uniswapv2`, `uniswapv3`, `pancakeswapv1` |
| Avalanche   | `traderjoe`, `pangolin`                   |
| Fantom      | `spookyswap`                              |
| Cronos      | `vvs`                                     |
| Arbitrum    | `uniswapv3`, `camelotv2`                  |
| Base    | `uniswapv3`, `sharkswap`, `aerodrome`, `baseswap`, `pancakeswap`, `sushiswap` |

In the event that no `exchange` value is specified, the API will proceed to systematically evaluate each exchange. It continues this process until it successfully locates a price, strategically bypassing any exchanges or pairs that are characterized by low liquidity.

# Which endpoints is integrated with the supported DEXs?

We have integrated the supported DEXs on an endpoint:

| Name | Endpoint |
| ----------- | ----------------------------------------- |
| [Get ERC20 token price](/web3-data-api/evm/reference/get-token-price) | `/erc20/:address/price` |
| [Get multiple ERC20 token prices](/web3-data-api/evm/reference/get-multiple-token-prices) | `/erc20/prices` |
| [Get DEX token pair address](/web3-data-api/evm/reference/get-pair-address) | `/:token0_address/:token1_address/pairAddress` |
