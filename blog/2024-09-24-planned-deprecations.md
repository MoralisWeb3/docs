---
title: "Upcoming Changes: Endpoint and Network Deprecations"
slug: "planned-deprecations"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

### Endpoints Deprecating (30 Days Notice)
The following endpoints will sunset on 24th October 2024:

| Deprecated Endpoint | Recommendation |
| ---------------------------------- | -------------------------------------- | 
| [`/erc20/{address}/allowance`](/web3-data-api/evm/reference/get-token-allowance) | Migrate to our newer endpoint [Wallet Token Approvals](/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals). |
| [`/nft/{address}/lowestprice`](/web3-data-api/evm/reference/price/get-nft-lowest-price) | Migrate to our newer endpoint [NFT Sale Prices](/web3-data-api/evm/reference/price/get-nft-contract-sale-prices). |
| [`/block/{block_number_or_hash}/nft/transfers`](/web3-data-api/evm/reference/get-nft-transfers-by-block) | Use our [NFT Transfers by Contract](/web3-data-api/evm/reference/get-nft-contract-transfers) endpoint or migrate to our [Streams API](/streams-api/evm) to monitor all NFT transfers in real time. |
| [`/nft/transfers`](/web3-data-api/evm/reference/get-nft-transfers-from-to-block) | Use our [NFT Transfers by Contract](/web3-data-api/evm/reference/get-nft-contract-transfers) endpoint or migrate to our [Streams API](/streams-api/evm) to monitor all NFT transfers in real time. |
| [`/ipfs/uploadFolder`](https://deep-index.moralis.io/api-docs-2.2/#/IPFS/uploadFolder) | We recommend exploring other providers. |

### Palm: Confirmed Deprecation (60 Days Notice)
Palm mainnet will be discontinued on 22nd November 2024. Please update your dapps and integrations accordingly. We recommend exploring alternative providers, which you can find at https://docs.palm.io/howto/use-supported-tools/tools.

### Aptos: Confirmed Deprecation (60 Days Notice)
Aptos mainnet and testnet will be discontinued on November 22nd 2024, in line with the network’s deprecation of their v1 Indexers. We recommend exploring alternative providers, which you can find at https://aptos.dev/en/build/apis.
