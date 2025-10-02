---
title: "NFT Rarity FAQs"
slug: "/web3-data-api/evm/nft-rarity-faqs"
sidebar_position: 2
---


# What is NFT Rarity?

NFT Rarity refers to the uniqueness of an NFT within a collection, determined by how common or uncommon its attributes are compared to other NFTs in the same collection. In any given NFT collection, certain traits or characteristics—such as color, background, accessories, or other features—can be more rare than others. The rarer the traits, the more unique and potentially valuable the NFT is considered to be.

Rarity plays a crucial role in the value and desirability of NFTs. Collectors and investors often seek out NFTs with rare traits, as these are generally perceived to hold greater long-term value. Rarity can be calculated through various methods, but typically involves analyzing the frequency of specific traits across the entire collection, assigning rarity scores, and ranking each NFT accordingly. The concept of rarity is foundational to the NFT market, driving demand and influencing the pricing of individual NFTs.

## How does the rarity calculation work?

Our NFT rarity algorithm is a custom-designed method that accurately calculates the rarity of any given NFT within a collection. The algorithm factors in the total number of NFTs in the collection, the number of copies of a specific NFT, and the unique attributes or traits that contribute to an NFT's rarity. The formula assigns a numerical value to each trait, which is then summed to determine the overall rarity score.

Within a collection, each trait is analyzed and assigned the following:

- `count`: The total occurrences of this attribute/trait.
- `percentage`: The percentage of NFTs that possess this trait.
- `rarity_label`: A label indicating the rarity based on the percentage (e.g., "Top 1% trait").

Each NFT is then assigned:

- `rarity_rank`: A numerical rank based on its rarity score.
- `rarity_percentage`: The percentage indicating its rarity relative to the entire collection.
- `rarity_label`: A label that describes how rare the NFT is (e.g., "Top 1% rarity").

## What collections are supported?

We support ERC721 and ERC1155 collections, with a maximum limit of 50,000 NFTs per collection. Rarity calculations are only performed if the following conditions are met:

- The collection's contract adheres to the ERC721 or ERC1155 standard.
- The total number of NFTs in the collection is 50,000 or fewer.
- The metadata and traits for all NFTs in the collection have been requested.

## Can rarity scores be refreshed?

Yes, rarity scores can be updated in the event of NFT reveals, new mints, or collection updates. This is done by resyncing the traits, which will also trigger a recalculation of the rarity scores.

## How does the sync/resync process work?

Initially, no traits or rarity data is available. When a collection is first queried via `getNFTTraitsByCollection`, it is placed in a processing queue. The system will first sync all traits, then calculate the rarity. During this processing period, any attempt to fetch traits using `getNFTTraitsByCollection` will return a `202` response with the message: `Contract is being resynced at the moment. Please try again later.`

Typically, traits and rarity information should be available within 5 to 60 seconds, depending on the collection size and queue. Larger collections (20,000+ NFTs) may take longer to process. If the collection hasn't been processed after 5 minutes, please reach out to our support team.

Once a collection has been added to the queue, it will not be queued or re-processed again for another 30 minutes.

## What chains are supported?

All chains are supported.

## What endpoints are supported?

The following new endpoints are available:

| Name                                                                    | Endpoint                        | API Reference                                                                              |
| ----------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------ |
| Get NFT Traits by Collection (single response, limited to 5,000 traits) | `/nft/:address/traits`          | [Method Documentation](/web3-data-api/evm/reference/get-nft-traits-by-collection)          |
| Get NFT Traits by Collection (paginated, no limit)                      | `/nft/:address/traits/paginate` | [Method Documentation](/web3-data-api/evm/reference/get-nft-traits-by-collection-paginate) |
| Get NFTs by Traits                                                      | `/nft/:address/nfts-by-traits`  | [Method Documentation](/web3-data-api/evm/reference/resync-nft-traits-by-collection)       |
| Resync NFT Traits by Collection                                         | `/nft/:address/traits/resync`   | [Method Documentation](/web3-data-api/evm/reference/get-nfts-by-traits)                    |

NFT rarity data has been added to the following endpoints:

| Name                         | Endpoint                         | API Reference                                                                |
| ---------------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| Get NFTs by Wallet           | `/:address/nfts`                 | [Method Documentation](/web3-data-api/evm/reference/get-wallet-nfts)         |
| Get NFTs by Collection       | `/nft/:address`                  | [Method Documentation](/web3-data-api/evm/reference/get-contract-nfts)       |
| Get NFT Owners by Collection | `/nft/:address/owners`           | [Method Documentation](/web3-data-api/evm/reference/get-nft-owners)          |
| Get NFT Owners by Token Id   | `/nft/:address/:token_id/owners` | [Method Documentation](/web3-data-api/evm/reference/get-nft-token-id-owners) |
| Get NFT Metadata             | `/nft/:address/:token_id`        | [Method Documentation](/web3-data-api/evm/reference/get-nft-metadata)        |
