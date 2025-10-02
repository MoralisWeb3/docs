---
title: "Normalized vs Non-Normalized"
slug: "/web3-data-api/evm/normalized-vs-non-normalized-metadata"
description: "How to find the difference between normalized and non-normalized metadata to know which one suits your needs."
sidebar_position: 1
---


The Moralis NFT API has the option to take the original source metadata and output it into a clean, predictable object - making it much easier for you to work with.

You'll find a query parameter named `normalizeMetadata` on the endpoints listed below. When this is set to true, we normalize and transform the source metadata into a standardized structure (based on ERC721, CryptoPunks, OpenSea, etc) and output this in a new object called normalized_metadata.

## Endpoints

- [Get NFTs by wallet](/web3-data-api/evm/reference/get-wallet-nfts) - `/{address}/nft`
- [Get NFTs by contract](/web3-data-api/evm/reference/get-contract-nfts) - `/nft/{address}`
- [Get NFT owners by contract](/web3-data-api/evm/reference/get-nft-owners) - `/nft/{address}/owners`
- [Get NFT metadata](/web3-data-api/evm/reference/get-nft-metadata) - `/nft/{address}/{token_id}`
- [Get owners by token ID](/web3-data-api/evm/reference/get-nft-token-id-owners) - `/nft/{address}/{token_id}/owners`

Here is the definition of normalized metadata:

```json json
 "normalizedMetadataAttribute": {
        "properties": {
          "trait_type": {
            "type": "string",
            "description": "The trait title or descriptor",
            "example": "Eye Color"
          },
          "value": {
            "type": "object",
            "description": "The value of the attribute",
            "example": "hazel"
          },
          "display_type": {
            "type": "string",
            "description": "The type the attribute value should be displayed as",
            "example": "string"
          },
          "max_value": {
            "type": "number",
            "description": "For numeric values, the upper range",
            "example": 100
          },
          "trait_count": {
            "type": "number",
            "description": "The number of possible values for this trait",
            "example": 7
          },
          "order": {
            "type": "number",
            "description": "Order the trait should appear in the attribute list.",
            "example": 1
          }
        }
      },
      "normalizedMetadata": {
        "properties": {
          "name": {
            "type": "string",
            "description": "The name or title of the NFT",
            "example": "Moralis Mug"
          },
          "description": {
            "type": "string",
            "description": "A detailed description of the NFT",
            "example": "Moralis Coffee nug 3D Asset that can be used in 3D worldspaces. This NFT is presented as a flat PNG, a Unity3D Prefab and a standard fbx."
          },
          "image": {
            "type": "string",
            "description": "The URL of the NFT's image",
            "example": "https://arw2wxg84h6b.moralishost.com:2053/server/files/tNJatzsHirx4V2VAep6sc923OYGxvkpBeJttR7Ks/de504bbadadcbe30c86278342fcf2560_moralismug.webp"
          },
          "external_link": {
            "type": "string",
            "description": "A link to additional information",
            "example": "https://giphy.com/gifs/loop-recursion-ting-aaODAv1iuQdgI"
          },
          "animation_url": {
            "type": "string",
            "description": "An animated version of the NFT's image",
            "example": "https://giphy.com/gifs/food-design-donuts-o9ngTPVYW4qo8"
          },
          "attributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/normalizedMetadataAttribute"
            }
          }
        }
      }
```

:::info NFT Metadata format structure

Moralis created conversion processes especially for CryptoPunks, Bored Ape Yacht Club, E.N.S. and OpenSea NFTs.

If an NFT is not one of these targeted types then a default transformation, based on NFT Type (ERC721 or ERC1155) is used.

**The problem is that there are no real standards for NFT Metadata** so many projects develop their own structure.  
The new process will transform any metadata of the target types and if the NFT is not one of the target types, should be able to transform most of the information in the NFT's metadata and deliver it in the known format.

:::

Normalized NFT metadata provides you with a clean, predictable JSON format that will help you to work with NFT metadata easier.

```json
{
  "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.",
  "external_url": "https://openseacreatures.io/3",
  "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.webp",
  "name": "Dave Starbelly",
  "attributes": [
    {
      "trait_type": "Base",
      "value": "Starfish"
    },
    {
      "trait_type": "Eyes",
      "value": "Big"
    },
    {
      "trait_type": "Mouth",
      "value": "Surprised"
    },
    {
      "trait_type": "Level",
      "value": 5
    },
    {
      "trait_type": "Stamina",
      "value": 1.4
    },
    {
      "trait_type": "Personality",
      "value": "Sad"
    },
    {
      "display_type": "boost_number",
      "trait_type": "Aqua Power",
      "value": 40
    },
    {
      "display_type": "boost_percentage",
      "trait_type": "Stamina Increase",
      "value": 10
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 2
    }
  ]
}
```

Non-normalized NFT metadata provides you with a stringified version of the NFT metadata.

```
"{\n  \"description\": \"Friendly OpenSea Creature that enjoys long swims in the ocean.\", \n  \"external_url\": \"https://openseacreatures.io/3\", \n  \"image\": \"https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.webp\", \n  \"name\": \"Dave Starbelly\",\n  \"attributes\": [\n    {\n      \"trait_type\": \"Base\", \n      \"value\": \"Starfish\"\n    }, \n    {\n      \"trait_type\": \"Eyes\", \n      \"value\": \"Big\"\n    }, \n    {\n      \"trait_type\": \"Mouth\", \n      \"value\": \"Surprised\"\n    }, \n    {\n      \"trait_type\": \"Level\", \n      \"value\": 5\n    }, \n    {\n      \"trait_type\": \"Stamina\", \n      \"value\": 1.4\n    }, \n    {\n      \"trait_type\": \"Personality\", \n      \"value\": \"Sad\"\n    }, \n    {\n      \"display_type\": \"boost_number\", \n      \"trait_type\": \"Aqua Power\", \n      \"value\": 40\n    }, \n    {\n      \"display_type\": \"boost_percentage\", \n      \"trait_type\": \"Stamina Increase\", \n      \"value\": 10\n    }, \n    {\n      \"display_type\": \"number\", \n      \"trait_type\": \"Generation\", \n      \"value\": 2\n    }\n  ]\n}\n"
```
