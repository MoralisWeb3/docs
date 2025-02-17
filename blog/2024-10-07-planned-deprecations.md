---
title: "Upcoming Changes: Endpoint Deprecations"
slug: "endpoint-deprecations"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

## Endpoints Deprecating (60 Days Notice)

The following changes will take effect in 60 days, on 6th December 2024:

### Endpoints on All Chains

The following endpoints will be removed from all chains:

| Deprecated Endpoint                                                                                               | Recommendation                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [`/{address}/logs`](/web3-data-api/evm/reference/get-contract-logs)                                               | Retrieve logs via our RPC nodes instead. You can learn more about this in [our documentation here](/rpc-nodes/reference/eth_getLogs). |
| [`/{address}/events`](/web3-data-api/evm/reference/get-contract-events)                                           | Retrieve logs via our RPC nodes instead. You can learn more about this in [our documentation here](/rpc-nodes/reference/eth_getLogs). |
| [`/block/{block_number_or_hash}/stats`]                                                                           | Migrate to our [Streams API](/streams-api/evm) to monitor block stats in real time.                                                   |
| [`/nft/{address}/{token_id}/stats`](/web3-data-api/evm/reference/get-nft-token-stats)                             | Migrate to our [Streams API](/streams-api/evm) to monitor NFT stats in real time.                                                     |
| [`/transaction/{transaction_hash}/internal-transactions`](/web3-data-api/evm/reference/get-internal-transactions) | Migrate to [getTransactionHash](/web3-data-api/evm/reference/get-transaction) using `include=internal_transactions`.                  |

### Gnosis NFT APIs

We will be removing all NFT APIs on Gnosis Mainnet and Gnosis Testnet due to ongoing network spam issues.

**Impacted endpoints:**

- `/nft/getMultipleNFTs`
- `/block/{block_number_or_hash}/nft/transfers`
- `/nft/{address}`
- `/nft/{address}/transfers`
- `/nft/{address}/owners`
- `/nft/{address}/metadata`
- `/nft/{address}/sync`
- `/nft/{address}/{token_id}/metadata/resync`
- `/nft/{address}/{token_id}`
- `/nft/{address}/{token_id}/owners`
- `/nft/{address}/{token_id}/transfers`
- `/nft/transfers`
- `/nft/{address}/traits`
- `/nft/{address}/traits/paginate`
- `/nft/{address}/traits/resync`
- `/nft/{address}/{token_id}/stats`
- `/nft/{address}/stats`
- `/{address}/nft`
- `/{address}/nft/collections`
- `/{address}/nft/transfers`

**Recommendation:** Explore alternative NFT data solutions at Gnosis Tools https://docs.gnosischain.com/tools/

Customers have a 60-day notice period for these changes. Additional notifications will be sent as we approach the deprecation date **6th December 2024**.
