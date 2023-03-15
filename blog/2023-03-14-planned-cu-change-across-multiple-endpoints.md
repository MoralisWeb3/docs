---
title: "[Notice] Planned CU change across multiple endpoints"
slug: "planned-cu-increase-across-multiple-endpoints"
authors:
  name: Reuben Salisbury
---

From 28th March 2023, the compute units (CUs) charged on the below endpoints will be changing as per the following table:

| Endpoint                                                                     | Compute Units |
| ---------------------------------------------------------------------------- | ------------- |
| [`/erc20/{address}/price`](/web3-data-api/evm/reference/get-token-price)     | 10            |
| [`/{address}`](/web3-data-api/evm/reference/get-wallet-transactions)         | 5             |
| [`/{address}/logs`](/web3-data-api/evm/reference/get-contract-logs)          | 5             |
| [`/{address}/erc20`](/web3-data-api/evm/reference/get-wallet-token-balances) | 10            |
| [`/erc20/mints`](/web3-data-api/evm/reference/get-erc20-mints)               | 10            |
| [`/erc20/burns`](/web3-data-api/evm/reference/get-erc20-burns)               | 10            |
| [`/erc20/approvals`](/web3-data-api/evm/reference/get-erc20-approvals)       | 10            |
| [`/block/{block_number_or_hash}`](/web3-data-api/evm/reference/get-block)    | 10            |

Similarly, the CUs charged for the following query parameter will be changing:

| Query Parameter                 | Compute Units |
| ------------------------------- | ------------- |
| `include=internal_transactions` | +5            |

For more information about what CUs are and how they're charged, visit our [Compute Units page](/web3-data-api/evm/reference/compute-units-cu).
