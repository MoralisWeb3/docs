---
title: "Pump.fun Token Prices, Metadata Enhancements & IPFS Changes"
slug: "solana-token-metadata-enhancements"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Today we're announcing several updates to our Solana and EVM APIs, including enhanced Solana token metadata, support for Pump.fun tokens, extended Solana DEX integrations, and important changes to IPFS gateway behavior.

<!-- truncate -->

### What's New?
#### 1. **Solana Total Supply**

We’ve added `totalSupply` and `totalSupplyFormatted` to our **Solana Token Metadata endpoint**: 

- `totalSupply`: Total tokens created minus any that have been burned
- `totalSupplyFormatted`: Total tokens created minus any that have been burned (decimal formatted)

Total Supply is updated in real-time based on Mint and Burn events.

#### 2. **Pump.fun Token Metadata and Price Support**

We now support **Pump.fun token metadata** and **token prices**, making it seamless to integrate Pump.fun tokens into analytics and trading tools.


#### 3. Extended Solana DEX Support

We've expanded our Solana DEX integrations to include:

- **Raydium v4**
- **Raydium CLMM (Concentrated Liquidity Market Maker)**
- **Raydium CPMM (Constant Product Market Maker)**
- **Meteora**
- **Orca/Whirlpool**

Check out the [full list of supported Solana DEXes here](/web3-data-api/solana/supported-dexs).

---

### Changes to IPFS Gateway Behavior

On 6th January we are **sunsetting the public Moralis IPFS gateways** in the API. Moving forward:

- `token_uris` will now return the **on-chain tokenURI** (e.g., `ipfs://` links), instead of gateway URLs like `https://ipfs.moralis.io`.

**Example:**

- **Old format:**
  - `https://ipfs.moralis.io:2053/ipfs/QmdYeDpkVZedk1mkGodjNmF35UNxwafhFLVvsHrWgJoz6A/beanz_metadata/9933`  
- **New format:**
  - `ipfs://QmdYeDpkVZedk1mkGodjNmF35UNxwafhFLVvsHrWgJoz6A/beanz_metadata/9933`

We already [extract and normalize metadata](/web3-data-api/evm/normalized-vs-non-normalized-metadata) (`normalizeMetadata` query parameter) as well as [generate image previews](/web3-data-api/evm/nft-image-previews), and this change will not impact these features. For developers requiring a specific IPFS gateway, we recommend exploring alternative providers.
