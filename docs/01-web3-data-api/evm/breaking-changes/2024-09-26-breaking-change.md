---
title: "September 26 2024: Upcoming Changes - Endpoint and Network Deprecations"
sidebar_label: "2024/09/26"
slug: /web3-data-api/breaking-changes/planned-deprecations
---

## Endpoints Deprecating (30 Days Notice)

The following endpoints will sunset in **30 days**:

| Deprecated Endpoint                                                                    | Recommendation                                                                                                                                        |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`/erc20/{address}/allowance`]                                                         | Migrate to [Wallet Token Approvals](/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals).                                              |
| [`/nft/{address}/lowestprice`]                                                         | Migrate to [NFT Sale Prices](/web3-data-api/evm/reference/price/get-nft-contract-sale-prices).                                                        |
| [`/block/{block_number_or_hash}/nft/transfers`]                                        | Use [NFT Transfers by Contract](/web3-data-api/evm/reference/get-nft-contract-transfers) or [Streams API](/streams-api/evm) for real-time monitoring. |
| [`/nft/transfers`]                                                                     | Migrate to [NFT Transfers by Contract](/web3-data-api/evm/reference/get-nft-contract-transfers) or [Streams API](/streams-api/evm).                   |
| [`/ipfs/uploadFolder`](https://deep-index.moralis.io/api-docs-2.2/#/IPFS/uploadFolder) | Explore other providers for IPFS services.                                                                                                            |

## Palm: Confirmed Deprecation (60 Days Notice)

The Palm mainnet will be discontinued on **November 22nd, 2024**. Please update your dapps and integrations. Explore alternative providers at [Palm Docs](https://docs.palm.io/howto/use-supported-tools/tools).

## Aptos: Confirmed Deprecation (60 Days Notice)

Aptos mainnet and testnet will be deprecated on **November 22nd, 2024**, in alignment with the network's deprecation of v1 Indexers. Explore alternative providers at [Aptos Dev Docs](https://aptos.dev/en/build/apis).

---
