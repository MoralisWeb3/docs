---
title: "Entities and Labelling"
slug: "../../evm/blockchain-api/entities-and-labelling"
sidebar_position: 4
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

# Entities and Labeling

Our API now supports Entities—representations of companies, organizations, and individuals (e.g., OpenSea, UniSwap, BlackRock, Elon Musk). This enhancement builds on our existing address labels feature, adding rich metadata and enabling advanced discovery capabilities.

## Why Entities Matter

Previously, our API focused solely on address labels, mapping blockchain addresses to recognizable names (e.g., Coinbase, Uniswap). While useful, this approach lacked depth—users couldn't access detailed information about the entities behind these addresses or effectively query for entities and their related addresses.

## What’s New?

With the introduction of Entities, our API delivers a more comprehensive view of blockchain activity:

- In-Depth Insights: Entities come with enriched metadata, including names, logos, descriptions, and websites, offering a deeper understanding of blockchain participants.
- Advanced Querying: Users can now discover and search for entities and their associated addresses, unlocking new ways to analyze and interact with data.
- Contextualized Data: By linking multiple addresses to a single entity, our API provides a more complete picture of how entities operate across different networks.

## Example of Entity-Enriched Response

Here’s an example of a transaction enriched with entity data:

```json
{
  "hash": "0x70c30285a9a4cc1c147cc94e5d0cefebe693fffd5fd5cbf727e2f86b6829d71b",
  "nonce": "6810858",
  "transaction_index": "72",
  "from_address": "Oxa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
  "from_address_label": "Coinbase: Hot Wallet",
  "from_address_entity": "Coinbase",
  "from_address_entity_logo": "https://entities-logos.s3.us-east-1.amazonaws.com/coinbase.png",
  "to_address": "Oxa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
  "to_address_label": "Blackrock Wallet",
  "to_address_entity": "Blackrock, Inc",
  "to_address_entity_logo": "https://entities-logos.s3.us-east-1.amazonaws.com/blackrock.png",
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
  "transfer_index": [17564884, 72]
}
```

## Which endpoints support Entity and Address labeling?

Any endpoint that includes a `to_address` and `from_address`! This list currently includes:

| Name                                      | Endpoint                                 |
| :---------------------------------------- | :--------------------------------------- |
| Get native transactions by wallet         | `/:address`                              |
| Get decoded transactions by wallet        | `/:address/verbose`                      |
| Get transaction by hash                   | `/transaction/:transaction_hash`         |
| Get decoded transaction by hash           | `/transaction/:transaction_hash/verbose` |
| Get NFT transfers by wallet               | `/:address/nft/transfers`                |
| Get NFT transfers by contract             | `/nft/:address/transfers`                |
| Get NFT transfers from a block to a block | `/nft/transfers`                         |
| Get NFT transfers by block                | `/block/:block_hash/nft/transfers`       |
| Get NFT transfers by token id             | `/nft/:address/transfers`                |
| Get ERC20 transfers by wallet             | `/:address/erc20/transfers`              |
| Get ERC20 transfers by contract           | `/erc20/:address/transfers`              |
| Get ERC20 mints                           | `/erc20/mints`                           |
| Get ERC20 burns                           | `/erc20/burns`                           |
| Get ERC20 approvals                       | `/erc20/approvals`                       |
| Get ERC20 metadata by contract            | `/erc20/metadata`                        |
| Get ERC20 metadata by symbol              | `/erc20/metadata/symbol`                 |

## How many entities are supported?

We currently support over 500 entities and around 6,000 address labels, with the highest coverage across Ethereum, Polygon, Binance, Optimism, Base, and Arbitrum. The supported entities include:

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

## What chains currently support entity labeling?

Entity and address labeling are currently supported on the following chains:

- Ethereum
- Polygon
- Binance Chain
- Avalanche
- Arbitrum
- Optimism
- Fantom

## Future Enhancements

We are committed to continuously improving and expanding our entity and label coverage. Future updates will include:

- Additional entities and labels.
- New endpoints for searching entities by name, address, and type.
- Stay tuned for more updates as we continue to enhance our API with even more powerful features.

## Will you continue to add new entities and labels?

Yes, absolutely! We plan to continue adding fresh entities and labels as new contracts and projects emerge. If you would like a specific address added, please add your submissions to our [feature requests board](https://roadmap.moralis.io/b/feature-requests/).
