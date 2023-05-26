---
title: "Supported DEXs"
slug: "../supported-dexs"
sidebar_position: 5
---

The Moralis Token API is integrated with an extensive range of Decentralized Exchanges (DEXs), operating across numerous EVM blockchains. A comprehensive list of these supported DEXs is presented in the subsequent table for your reference.

| Chain       | Supported DEX(s)                          |
| ----------- | ----------------------------------------- |
| Eth mainnet | `uniswapv2`, `uniswapv3`, `sushiswapv2`   |
| Polygon     | `uniswapv2`, `uniswapv3`, `quickswapv2`   |
| BSC         | `uniswapv2`, `uniswapv3`, `pancakeswapv1` |
| Avalanche   | `traderjoe`, `pangolin`                   |
| Fantom      | `spookyswap`                              |
| Cronos      | `vvs`                                     |
| Arbitrum    | `uniswapv3`, `camelotv2`                  |

In the event that no `exchange` value is specified, the API will proceed to systematically evaluate each exchange. It continues this process until it successfully locates a price, strategically bypassing any exchanges or pairs that are characterized by low liquidity.

# Which endpoints is integrated with the supported DEXs?

We have integrated the supported DEXs on an endpoint:

| Name                                                            | Endpoint                |
| :-------------------------------------------------------------- | :---------------------- |
| [Get token price](/web3-data-api/evm/reference/get-token-price) | `/erc20/:address/price` |
