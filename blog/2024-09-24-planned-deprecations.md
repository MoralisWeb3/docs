---
title: "Upcoming Changes: Endpoint and Network Deprecations"
slug: "planned-deprecations"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

### Endpoints Deprecating (30 Days Notice)
The following endpoints will sunset in **30 days**:

| Deprecated Endpoint | Recommendation |
| ---------------------------------- | -------------------------------------- | 
| [`/erc20/{address}/allowance`](/web3-data-api/evm/reference/get-token-allowance) | Migrate to our newer endpoint [Wallet Token Approvals](/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals). |
| [`/nft/{address}/lowestprice`](/web3-data-api/evm/reference/price/get-nft-lowest-price) | Migrate to our newer endpoint [NFT Sale Prices](/web3-data-api/evm/reference/price/get-nft-contract-sale-prices). |
| [`/block/{block_number_or_hash}/nft/transfers`](/web3-data-api/evm/reference/get-nft-transfers-by-block) | Use our [NFT Transfers by Contract](/web3-data-api/evm/reference/get-nft-contract-transfers) endpoint or migrate to our [Streams API](/streams-api/evm) to monitor all NFT transfers in real time. |
| [`/nft/transfers`](/web3-data-api/evm/reference/get-nft-transfers-from-to-block) | Use our [NFT Transfers by Contract](/web3-data-api/evm/reference/get-nft-contract-transfers) endpoint or migrate to our [Streams API](/streams-api/evm) to monitor all NFT transfers in real time. |
| [`/ipfs/uploadFolder`](https://deep-index.moralis.io/api-docs-2.2/#/IPFS/uploadFolder) | We recommend exploring other providers. |

### Palm: Confirmed Deprecation (60 Days Notice)
Support for Palm mainnet will be discontinued on 22nd November. Please update your dapps and integrations accordingly. For alternative solutions we recommend visiting https://docs.palm.io/howto/use-supported-tools/tools

### Aptos: Planned Deprecation
We plan to sunset Aptos support in alignment with the network’s deprecation of their v1 Indexers. The timing remains tentative, but we aim to provide ample notice to our users. We encourage you to explore alternative providers and will offer guidance to ensure a smooth transition.
