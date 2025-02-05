---
title: "Deprecation: Public IPFS Gateway"
slug: "ipfs-changes"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

As [outlined in an earlier post](/changelog/solana-token-metadata-enhancements#changes-to-ipfs-gateway-behavior), we have **sunset the public Moralis IPFS gateways** which is referenced across our API. 

This change means our `token_uris` will now return the **on-chain tokenURI** (e.g., `ipfs://` links), instead of gateway URLs like `https://ipfs.moralis.io`.

**Example:**

- **Old format:**
  - `https://ipfs.moralis.io:2053/ipfs/QmdYeDpkVZedk1mkGodjNmF35UNxwafhFLVvsHrWgJoz6A/beanz_metadata/9933`  
- **New format:**
  - `ipfs://QmdYeDpkVZedk1mkGodjNmF35UNxwafhFLVvsHrWgJoz6A/beanz_metadata/9933`

We already [extract and normalize metadata](/web3-data-api/evm/normalized-vs-non-normalized-metadata) (`normalizeMetadata` query parameter) as well as [generate image previews](/web3-data-api/evm/nft-image-previews), and this change will not impact these features. For developers requiring a specific IPFS gateway, we recommend exploring alternative providers.
