---
title: "Entities and Labelling"
slug: "../../evm/blockchain-api/entity-labels"
sidebar_position: 4
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

# Entity and Address Labeling

We’ve introduced “Entities” into our API to represent companies, organizations, and individuals (e.g., OpenSea, UniSwap, BlackRock, Elon Musk). This enhancement builds on our existing address labels feature by enriching API responses with entity-level metadata and enabling new discovery features.

- This will enable:
  - **Greater API Enrichment:** API responses can now be enriched with entity-level metadata, including logos.
  - **New Features:** Discover and query Entities and address labels in a way similar to platforms like Arkham.

## Problem

Our previous API offering focused on address labels, mapping blockchain addresses to human-readable names (e.g., Coinbase, Uniswap). However, it lacked detailed information about the entities behind these addresses, such as companies, organizations, and individuals. This limitation restricted the depth of insights our users could gain from the API, and it didn’t support querying entities or associated addresses effectively.

## Solution

We have introduced "Entities" into our API, representing companies, organizations, and individuals. Each entity is enriched with metadata such as name, logo, description, and website, and is linked to multiple blockchain addresses. This new structure enhances our API responses and enables powerful new features for discovering and querying both entities and address labels.

## Value & Benefits

- **Enhanced Data Enrichment:** Users now receive more comprehensive information with entity-level metadata, improving the overall value of our API.
- **Improved User Experience:** The inclusion of logos and descriptions adds visual richness to the data, enhancing the user interface of applications using our API.
- **Competitive Edge:** Offering features similar to market leaders like Arkham ensures we stay competitive in the market.
- **Increased Engagement:** Detailed and contextual information drives higher user engagement and retention.

## Example of Entity-Enriched Response

Here’s an example of a transaction enriched with entity data:

```json
{
  "hash": "0x70c30285a9a4cc1c147cc94e5d0cefebe693fffd5fd5cbf727e2f86b6829d71b",
  "nonce": "6810858",
  "transaction_index": "72",
  "from_address": "0x21a31ee1afc51d94c2efccaa2092ad1028285549",
  "from_address_label": "Binance 15",
  "from_address_entity": "Binance",
  "from_address_entity_logo": "https://example.com/logos/binance.png",
  "to_address": "0x514910771af9ca656af840dff83e8264ecf986ca",
  "to_address_label": "ChainLink Token",
  "to_address_entity": "ChainLink",
  "to_address_entity_logo": "https://example.com/logos/chainlink.png",
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

## Will you continue to add new enties and lebels?

Yes, absolutely! We plan to continue adding fresh entities labels as new contracts and projects emerge. If you would like a specific address added, please add your submissions to our [feature requests board](https://roadmap.moralis.io/b/feature-requests/).
