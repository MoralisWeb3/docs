---
title: "Supported DeFi Protocols"
slug: "/web3-data-api/evm/defi-protocols-and-chains"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

This article provides a comprehensive and continually expanding list of supported DeFi protocols and chains for the following endpoints:

<ul>
  <li><a href="https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getDefiSummary">DeFi Protocols by Wallet</a></li>
  <li><a href="https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getDefiPositionsSummary">DeFi Positions by Wallet</a></li>
  <li><a href="https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getDefiPositionsByProtocol">Get Detailed DeFi Positions by Wallet and Protocol</a></li>
</ul>

## Supported Protocols & Chains

| Protocol              | Query Parameter  | Supported Chains                                                                                |
| --------------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| Aave v2               | `aave-v2`        | - Ethereum <br/>- Polygon                                                                       |
| Aave v3               | `aave-v3`        | - Base <br/>- Ethereum <br/>- Polygon                                                           |
| Dragonswap v2         | `dragonswap-v2`  | - Sei                                                                                           |
| Dragonswap v3         | `dragonswap-v3`  | - Sei                                                                                           |
| Eigenlayer            | `eigenlayer`     | - Ethereum                                                                                      |
| Etherfi\* **(new)**   | `etherfi`        | - Ethereum<br/>- Arbitrum<br/>- Base<br/>- Binance<br/>- Linea<br/>- Optimism                   |
| FraxSwap v1           | `fraxswap-v1`    | - BSC<br/>- Ethereum<br/>- Polygon                                                              |
| Kintsu **(new)**      | `kintsu`         | - Monad                                                                                        |
| FraxSwap v2           | `fraxswap-v2`    | - BSC<br/>- Ethereum<br/>- Polygon                                                              |
| Lido                  | `lido`           | - Ethereum                                                                                      |
| MakerDAO              | `makerdao`       | - Ethereum                                                                                      |
| Neverland **(new)**   | `neverland`      | - Monad                                                                                        |
| OKU Trade             | `okutrade`       | - Sei                                                                                           |
| Pancakeswap v2        | `pancakeswap-v2` | - Arbitrum <br/>- Base <br/>- BSC <br/>- Ethereum<br/>- Linea<br/>- Monad                       |
| Pancakeswap v3        | `pancakeswap-v3` | - Arbitrum <br/>- Base <br/>- BSC <br/>- Ethereum<br/>- Linea<br/>- Monad                      |
| Pendle **(new)**      | `pendle`         | - Ethereum                                                                                      |
| QuickSwap v2          | `quickswap-v2`   | - Polygon                                                                                       |
| QuickSwap v3          | `quickswap-v3`   | - Polygon                                                                                       |
| Rocket Pool **(new)** | `rocketpool`     | - Ethereum<br/>- Arbitrum<br/>- Base<br/>- Polygon<br/>- Optimism                               |
| Sailor Swap           | `sailorswap`     | - Sei                                                                                           |
| Spark **(new)**       | `sparkfi`        | - Ethereum                                                                                      |
| SushiSwap v2          | `sushiswap-v2`   | - Base <br/>- BSC <br/>- Ethereum <br/>- Polygon                                                |
| Takara Lend           | `takara-lend`    | - Sei                                                                                           |
| Uniswap v2\*\*        | `uniswap-v2`     | - Arbitrum (new)<br/>- Base <br/>- BSC <br/>- Ethereum <br/>- Linea (new) <br/>- Monad<br/>- Polygon |
| Uniswap v3            | `uniswap-v3`     | - Arbitrum <br/>- Avalanche <br/>- Base <br/>- BSC<br/> - Ethereum<br/>- Monad<br/>- Optimism<br/>- Polygon |
| Yei Finance           | `yei-finance`    | - Sei                                                                                           |

_\*Etherfi currently only supports Staking positions. Yield positions are not yet supported._

_\*\*By default, we track all forked Uniswap v2 protocols. If a particular protocol has not yet been decoded, it will appear as `unknown` within the API responses. Please reach out to our support team, and we will prioritize decoding these protocols._

Many more protocols are on the way as we prioritize the top protocols and chains based on Total Value Locked (TVL).
