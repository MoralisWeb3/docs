---
title: "Address Labels"
slug: "../../evm/blockchain-api/address-labels"
sidebar_position: 4
---
import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";



The Moralis API automatically enriches all transactions, NFT transfers and ERC20 transfers with user-friendly labels for the sender and the receiver. Any transaction or transfer that includes a `to_address` or `from_address` will also include `to_address_label` and `from_address` labels respectively.

These labels reflect publicly known addresses such as `Coinbase`, `Binance`, `Kraken`, as well as DEXes such as `Uniswap v3`, `1inch`, and also NFT marketplaces like `OpenSea` and `Blur`, plus many more!

Here's an example transaction:

```
{
  "hash": "0x70c30285a9a4cc1c147cc94e5d0cefebe693fffd5fd5cbf727e2f86b6829d71b",
  "nonce": "6810858",
  "transaction_index": "72",
  "from_address": "0x21a31ee1afc51d94c2efccaa2092ad1028285549",
  "from_address_label": "Binance 15",
  "to_address": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "to_address_label": "ChainLink Token",
  "value": "0",
  "gas": "207128",
  "gas_price": "32393720336",
  "input": "0xa9059cbb000000000000000000000000c476723407b737c173bdfd87c7abc80f6856e6320000000000000000000000000000000000000000000000008533e3870aec3000",
  "receipt_cumulative_gas_used": "8535588",
  "receipt_gas_used": "52089",
  "receipt_contract_address": null,
  "receipt_root": null,
  "receipt_status": "1",
  "block_timestamp": "2023-06-26T16:48:23.000Z",
  "block_number": "17564884",
  "block_hash": "0x4e61fbb792a84c419a22ffcc590cbcb2f5a1b88d8e864d608e3544a3594c0e69",
  "transfer_index": [
    17564884,
    72
  ],
}
```

## Which endpoints support Address labeling?

Any endpoint that includes a `to_address` and `from_address`! This list currently includes:

| Name                               | Endpoint                                 |
| :--------------------------------- | :--------------------------------------- |
| Get native transactions by wallet | `/:address`                      |
| Get decoded transactions by wallet | `/:address/verbose`                      |
| Get transaction by hash    | `/transaction/:transaction_hash` |
| Get decoded transaction by hash    | `/transaction/:transaction_hash/verbose` |
| Get NFT transfers by wallet    | `/:address/nft/transfers` |
| Get NFT transfers by contract    | `/nft/:address/transfers` |
| Get NFT transfers from a block to a block    | `/nft/transfers` |
| Get NFT transfers by block   | `/block/:block_hash/nft/transfers` |
| Get NFT transfers by token id | `/nft/:address/transfers` |
| Get ERC20 transfers by wallet | `/:address/erc20/transfers` |
| Get ERC20 transfers by contract | `/erc20/:address/transfers` |
| Get ERC20 mints | `/erc20/mints` |
| Get ERC20 burns | `/erc20/burns` |
| Get ERC20 approvals | `/erc20/approvals` |
| Get ERC20 metadata by contract | `/erc20/metadata` |
| Get ERC20 metadata by symbol | `/erc20/metadata/symbol` |


## How many labels are supported?
We support over 1,000 labels and counting. Examples of these include:

**Centralized Exchanges**
- Coinbase
- Kraken
- Binance
- Bittrex
- Bitfinex
- ...plus many more

**Decentralized Exchanges**
- Uniswap
- Aave
- 1inch
- Pancakeswap
- Sushiswap
- ...plus many more

**NFT Marketplaces**
- OpenSea
- Blur
- Rarible
- Sorare
- LooksRare
- ...plus many more


As well as all ERC20 token and cryptocurrency contract labels.

## What chains currently support transaction labeling?
Ethereum and Polygon have the largest coverage, but we include labels for the following chains:

- Ethereum
- Polygon
- Binance Chain
- Avalanche
- Arbitrum
- Optimism
- Fantom

## Will you continue to add new labels?

Yes, absolutely! We plan to continue adding fresh address labels as new contracts and projects emerge. If you would like a specific address added, please add your submissions to our [feature requests board](https://roadmap.moralis.io/b/feature-requests/).
