---
title: "Entities and Labelling FAQs"
slug: "/web3-data-api/evm/blockchain-api/entities-and-labelling"
sidebar_position: 3
---


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

Any endpoint that includes a `to_address` and `from_address`, the endpoints are listed in the table below:

| Name                               | Endpoint                               | API Reference                                                                       |
| ---------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------- |
| Get Wallet History                 | /wallets/:address/history              | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-history)  |
| Get Native Transactions by Wallet  | /:address                              | [Method Documentation](/web3-data-api/evm/reference/get-wallet-transactions)        |
| Get Decoded Transactions by Wallet | /:address/verbose                      | [Method Documentation](/web3-data-api/evm/reference/get-decoded-wallet-transaction) |
| Get Transaction by Hash            | /transaction/:transaction_hash         | [Method Documentation](/web3-data-api/evm/reference/get-transaction)                |
| Get Decoded Transaction by Hash    | /transaction/:transaction_hash/verbose | [Method Documentation](/web3-data-api/evm/reference/get-decoded-transaction)        |
| Get NFT Transfers by Wallet        | /:address/nft/transfers                | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nft-transfers)       |
| Get NFT Transfers by Contract      | /nft/:address/transfers                | [Method Documentation](/web3-data-api/evm/reference/get-nft-contract-transfers)     |
| Get NFT Transfers From a Block     | /nft/transfers                         | [Method Documentation]                                                              |
| Get NFT Transfers by Block         | /block/:block_hash/nft/transfers       | [Method Documentation]                                                              |
| Get NFT Transfers by Token ID      | /nft/:address/:token_id/transfers      | [Method Documentation](/web3-data-api/evm/reference/get-nft-transfers)              |
| Get ERC20 Transfers by Wallet      | /:address/erc20/transfers              | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-transfers)     |
| Get ERC20 Transfers by Contract    | /erc20/:address/transfers              | [Method Documentation](/web3-data-api/evm/reference/get-token-transfers)            |

## How many entities are supported?

We currently support over 500 entities and around 6,000 address labels, with the highest coverage across Ethereum, Polygon, Binance, Optimism, Base, and Arbitrum. The supported categories include:

- NFT Marketplace
- Influencer
- Decentralized Exchange
- Centralized Exchange
- DEX Aggregator
- Individual
- Bridge
- Gaming
- Meme
- Staking
- CDP
- Derivatives
- TradFi
- DeFi
- NFT Collection
- NFT Lending
- Lending
- Borrowing
- L2
- Smart Contract Platform
- DAO
- Decentralized Lending
- Yield
- Liquid Staking
- Restaking
- Fund
- Real World Assets
- Privacy
- MEV
- Stablecoin
- Crosschain Interoperability
- Gambling
- Wallet
- Crypto Tax
- Misc

## Future Enhancements

We are committed to continuously improving and expanding our entity and label coverage. Future updates will include:

- Additional entities and labels.
- New endpoints for searching entities by name, address, and type.
- Stay tuned for more updates as we continue to enhance our API with even more powerful features.

## Will you continue to add new entities and labels?

Yes, absolutely! We plan to continue adding fresh entities and labels as new contracts and projects emerge. If you would like a specific address added, please add your submissions to our [feature requests board](https://roadmap.moralis.io/b/feature-requests/).
