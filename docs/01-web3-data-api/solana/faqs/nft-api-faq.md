---
title: "Solana NFT Metadata API FAQ"
description: "Learn how the Solana NFT Metadata API works, including metadata structure, standards, collection information, and media items"
slug: "/web3-data-api/solana/nft-metadata-faq"
sidebar_position: 0
---


# Solana NFT Metadata API FAQ

### What metadata is returned for NFTs on Solana?

When using `getNFTMetadata`, or the `getPortfolio` and `getNFTs` endpoints with the query parameter `nftMetadata=true`, you'll receive full metadata for each NFT. This includes the Metaplex collection-level metadata, when available.

A typical response for a Metaplex-standard NFT will include a collection object like this:

```json
"collection": {
  "collectionAddress": "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
  "name": "Mad Lads",
  "description": "Fock it.",
  "imageOriginalUrl": "https://madlads.s3.us-west-2.amazonaws.com/images/7256.png",
  "externalUrl": "https://madlads.com",
  "metaplexMint": "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
  "sellerFeeBasisPoints": 500
}
```

### Are NFT media items now available for Solana?

Yes! We now support NFT media items for Solana, providing the same image preview capabilities that were previously available only for EVM chains. The following endpoints now include media information:

- `getNFTMetadata`
- `getNFTs`
- `getPortfolio`

Media information is returned in a `media` object with the following structure:

```json
"media": {
  "status": "success",
  "updatedAt": "2025-04-21T16:34:37.665Z",
  "mimetype": "image/png",
  "parent_hash": "0xd74c7c0ec9fdc611cb86317d7505be611a38feeb2abfea866bb9b695c6ac358e",
  "media_collection": {
    "low": {
      "height": 100,
      "width": 100,
      "url": "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0x22429fbf9d7fccfdcd86bb1f4a8551127c408c920b392e220b43b4b89a3e9b4e/low.png"
    },
    "medium": {
      "height": 250,
      "width": 250,
      "url": "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0x22429fbf9d7fccfdcd86bb1f4a8551127c408c920b392e220b43b4b89a3e9b4e/medium.png"
    },
    "high": {
      "height": 500,
      "width": 500,
      "url": "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0x22429fbf9d7fccfdcd86bb1f4a8551127c408c920b392e220b43b4b89a3e9b4e/high.png"
    }
  },
  "original_media_url": "https://www.larvalabs.com/cryptopunks/cryptopunk001.png"
}
```

The `status` field indicates whether the media is still being processed or is ready for display. The `originalMediaUrl` provides direct access to the NFT's original media.

### What fields can I expect in a full NFT metadata response?

Based on the example responses, a complete NFT metadata response typically includes:

```json
{
  "address": "FVzM6rUA1SigPxh6e3iQ8dAPjQNf2guap3Xcdj8Q6R2H",
  "mint": "FVzM6rUA1SigPxh6e3iQ8dAPjQNf2guap3Xcdj8Q6R2H",
  "standard": "metaplex",
  "name": "Mad Lads #7256",
  "symbol": "MAD",
  "description": "Fock it.",
  "imageOriginalUrl": "https://madlads.s3.us-west-2.amazonaws.com/images/7256.png",
  "externalUrl": "https://madlads.com",
  "metadataOriginalUrl": "https://madlads.s3.us-west-2.amazonaws.com/json/7256.json",
  "totalSupply": "1",
  "metaplex": {
    "metadataUri": "https://madlads.s3.us-west-2.amazonaws.com/json/7256.json",
    "updateAuthority": "2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW",
    "sellerFeeBasisPoints": 420,
    "primarySaleHappened": 1,
    "isMutable": true,
    "masterEdition": false
  },
  "attributes": [...],
  "contract": {...},
  "collection": {...},
  "firstCreated": {...},
  "creators": [...],
  "properties": {...},
  "media": {
    "status": "processing",
    "originalMediaUrl": "https://madlads.s3.us-west-2.amazonaws.com/images/7256.png",
    "updatedAt": "2025-04-24T10:19:26.056Z"
  }
}
```

Note the addition of the `media` object in the response.

### How are NFT attributes/traits structured?

Attributes are returned as an array of objects with `traitType` and `value` pairs. For example:

```json
"attributes": [
  {
    "traitType": "Gender",
    "value": "Male"
  },
  {
    "traitType": "Type",
    "value": "Dark"
  },
  {
    "traitType": "Expression",
    "value": "Smile"
  }
]
```

### Why do some NFTs have missing or partial metadata?

Solana handles NFTs differently from EVM chains. Rather than being grouped under a single contract, each Solana NFT is represented by a unique token address. While many NFTs follow the Metaplex standard, which we support (and which typically includes a `collectionAddress`), not all do.

As a result, it's common to encounter NFTs that lack a `collectionAddress` or other expected metadata fields.

You can usually identify Metaplex-standard NFTs by the presence of a `metaplexMint` value in the metadata.

Here's an example of a non-standard or partial Metaplex NFT:

```json
"collection": {
  "collectionAddress": null,
  "name": null,
  "description": "This membership unlocks access to the jpegs.fun Secret Society. More secrets to be revealed soon.",
  "imageOriginalUrl": "https://jpegs.fun/nft/disciples.png",
  "externalUrl": null,
  "metaplexMint": null,
  "sellerFeeBasisPoints": null
}
```

### What is in the Metaplex-specific data?

For Metaplex-standard NFTs, the API returns a `metaplex` object containing:

```json
"metaplex": {
  "metadataUri": "https://madlads.s3.us-west-2.amazonaws.com/json/7256.json",
  "updateAuthority": "2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW",
  "sellerFeeBasisPoints": 420,
  "primarySaleHappened": 1,
  "isMutable": true,
  "masterEdition": false
}
```

This includes:

- `metadataUri`: The source of the metadata
- `updateAuthority`: The address that can update the NFT
- `sellerFeeBasisPoints`: Creator royalty (in basis points, where 100 = 1%)
- `primarySaleHappened`: Whether the initial sale occurred
- `isMutable`: Whether the NFT can be updated
- `masterEdition`: Whether it's a master edition

### How is creator information structured?

Creator information includes addresses, share percentages, and verification status:

```json
"creators": [
  {
    "address": "5XvhfmRjwXkGp3jHGmaKpqeerNYjkuZZBYLVQYdeVcRv",
    "share": 0,
    "verified": true
  },
  {
    "address": "2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW",
    "share": 100,
    "verified": true
  }
]
```

The `verified` field indicates whether the creator address has cryptographically verified their association with the NFT.

### How do I retrieve metadata for a specific NFT?

You can use the following endpoint with your API key:

```
curl --request GET \
     --url 'https://solana-gateway.moralis.io/nft/mainnet/FVzM6rUA1SigPxh6e3iQ8dAPjQNf2guap3Xcdj8Q6R2H/metadata' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

### How do I get all NFTs owned by an address with metadata?

You can use the following endpoint with the `nftMetadata=true` parameter:

```
curl --request GET \
     --url 'https://solana-gateway.moralis.io/account/mainnet/kXB7FfzdrfZpAZEW3TZcp8a8CwQbsowa6BdfAHZ4gVs/nft?nftMetadata=true' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

### What information is available in the firstCreated field?

The API provides creation information when available:

```json
"firstCreated": {
  "mintTimestamp": 1682119190,
  "mintBlockNumber": 189744752,
  "mintTransaction": "2yZw1LEKuFydmg6bQd3jWoeZGYytyrmC1dBkdhco8kbkmtBi2FiuW1TfBvToRqougfcogrqQvD5c2Kk25auw4wXA"
}
```

This includes:

- `mintTimestamp`: When the NFT was minted
- `mintBlockNumber`: The block number of the mint transaction
- `mintTransaction`: The transaction hash of the mint

### What additional properties are included?

The `properties` field can contain various additional data, often including file information and creator data:

```json
"properties": {
  "files": [
    {
      "id": "portrait",
      "uri": "https://madlads.s3.us-west-2.amazonaws.com/images/7256.png",
      "type": "image/png"
    },
    {
      "id": "rug",
      "uri": "https://arweave.net/qJ5B6fx5hEt4P7XbicbJQRyTcbyLaV-OQNA1KjzdqOQ/7256.png",
      "type": "image/png"
    }
  ],
  "category": "image",
  "collection": {
    "name": "Mad Lads",
    "family": "MAD"
  },
  "creators": [
    {
      "address": "2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW",
      "share": 100
    }
  ]
}
```

### What does the media object contain?

In the NFT media object, you'll find:

- `status`: Indicates the processing status of the media (`success`, `processing`, or `failed`)
- `updatedAt`: Timestamp of when the media was last updated
- `mimetype`: The media file type (e.g., "image/png")
- `parent_hash`: A unique hash identifier for the NFT
- `media_collection`: Contains three resolution options for the image:
  - `low`: 100x100 pixel preview
  - `medium`: 250x250 pixel preview
  - `high`: 500x500 pixel preview
- `original_media_url`: Direct link to the original NFT media file

Each resolution in the `media_collection` includes height, width, and direct URL to the image file, making it easy to choose the appropriate size for your application's needs.
