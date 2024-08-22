---
title: "NFT Traits & Rarity"
slug: "nft-rarity"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Our latest update enhances our NFT Traits feature and introduces NFT Rarity, allowing you to access detailed trait data and rarity scores for ERC721 and ERC1155 collections. 🔥

**Traits have been extended to include:**
- `count`: The total occurrences of this attribute/trait.
- `percentage`: The percentage of NFTs that possess this trait.
- `rarity_label`: A label indicating the rarity based on the percentage (e.g., "Top 1% trait").

**Rarity scores have been added to all NFTs:**
- `rarity_rank`: A numerical rank based on its rarity score.
- `rarity_percentage`: The percentage indicating its rarity relative to the entire collection.
- `rarity_label`: A label that describes how rare the NFT is (e.g., "Top 1% rarity").

### New Endpoints
| Name                               | Endpoint                               | API Reference                                                                        |
| ---------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| Get NFT Traits by Collection  (single response, limited to 5,000 traits)  | `/nft/:address/traits`              | [Method Documentation](https://deep-index.moralis.io/api-docs-2.2/#/NFT/getNFTTraitsByCollection)   |
| Get NFT Traits by Collection (paginated, no limit)      | `/nft/:address/traits/paginate`              | [Method Documentation](https://deep-index.moralis.io/api-docs-2.2/#/NFT/getNFTTraitsByCollectionPaginate)      |
| Get NFTs by Traits    | `/nft/:address/nfts-by-traits`              | [Method Documentation](https://deep-index.moralis.io/api-docs-2.2/#/NFT/getNFTByContractTraits)             |
| Resync NFT Traits by Collection                    | `/nft/:address/traits/resync`              | [Method Documentation](https://deep-index.moralis.io/api-docs-2.2/#/NFT/resyncNFTRarity)             |

### Rarity Enrichment
NFT rarity data has been added to the following endpoints:
| Name                               | Endpoint                               | API Reference                                                                        |
| ---------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| Get NFTs by Wallet  | `/:address/nfts`              | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nfts)   |
| Get NFTs by Collection      | `/nft/:address`              | [Method Documentation](/web3-data-api/evm/reference/get-contract-nfts)      |
| Get NFT Owners by Collection    | `/nft/:address/owners`              | [Method Documentation](/web3-data-api/evm/reference/get-nft-owners)             |
| Get NFT Owners by Token Id                    | `/nft/:address/:token_id/owners`              | [Method Documentation](/web3-data-api/evm/reference/get-nft-token-id-owners)             |
| Get NFT Metadata                    | `/nft/:address/:token_id`              | [Method Documentation](/web3-data-api/evm/reference/get-nft-metadata)             |

For more details on how rarity works and to see which endpoints include it, visit our [NFT Rarity FAQs page](/web3-data-api/evm/nft-rarity-faqs).
