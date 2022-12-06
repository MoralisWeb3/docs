---
title: "Compute Units (CU)"
slug: "compute-units"
hidden: false
createdAt: "2022-08-10T17:15:32.217Z"
updatedAt: "2022-12-02T12:24:38.681Z"
---
## Solana API Endpoints

| Path                     | Weight |
| ------------------------ | ------ |
| all Solana API endpoints | 1 CUs  |

## Auth API Endpoints

| Path                   | Weight |
| ---------------------- | ------ |
| all Auth API endpoints | 0 CUs  |

## EVM API Endpoints

| Path                                           | Weight |
| ---------------------------------------------- | ------ |
| /info/endpointWeights                          | 0 CUs  |
| /{address}                                     | 1 CUs  |
| /{address}/balance                             | 1 CUs  |
| /erc20/metadata                                | 1 CUs  |
| /erc20/metadata/symbols                        | 1 CUs  |
| /erc20/{address}/allowance                     | 1 CUs  |
| /resolve/{domain}                              | 1 CUs  |
| /{pair\_address}/reserves                      | 1 CUs  |
| /resolve/{address}/reverse                     | 1 CUs  |
| /web3/version                                  | 1 CUs  |
| /{address}/events                              | 2 CUs  |
| /{address}/erc20/transfers                     | 2 CUs  |
| /erc20/{address}/transfers                     | 2 CUs  |
| /block/{block\_number\_or\_hash}/nft/transfers | 2 CUs  |
| /nft/{address}/{token\_id}                     | 2 CUs  |
| /nft/{address}/{token\_id}/transfers           | 2 CUs  |
| /{address}/logs                                | 2 CUs  |
| /{address}/function                            | 2 CUs  |
| /{address}                                     | 2 CUs  |
| /erc20/{address}/price                         | 3 CUs  |
| /nft/{address}/trades                          | 4 CUs  |
| /nft/{address}/lowestprice                     | 4 CUs  |
| /{address}/erc20                               | 5 CUs  |
| /block/{block\_number\_or\_hash}               | 5 CUs  |
| /nft/search                                    | 5 CUs  |
| /{address}/nft                                 | 5 CUs  |
| /{address}/nft/transfers                       | 5 CUs  |
| /{address}/nft/{token\_address}                | 5 CUs  |
| /nft/{address}                                 | 5 CUs  |
| /nft/{address}/transfers                       | 5 CUs  |
| /nft/{address}/owners                          | 5 CUs  |
| /nft/{address}/metadata                        | 5 CUs  |
| /nft/{address}/sync                            | 5 CUs  |
| /nft/{address}/{token\_id}/metadata/resync     | 5 CUs  |
| /nft/transfers                                 | 5 CUs  |
| /{address}/verbose                             | 10 CUs |
| /nft/{address}/{token\_id}/owners              | 20 CUs |

Note: for exact rate limit values the endpoint `<https://deep-index.moralis.io/api/v2/info/endpointWeights`> can be used.

Note: `/nft/{address}/{token_id}/metadata/resync` has a billing cost of 5 and a rate limit cost of 25, meaning that you can call it only once per second with a free plan and twice a second with a Pro plan

example of output:

```
[
  {
    "endpoint": "getBlock",
    "path": "/block/{block_number_or_hash}",
    "price": 1
  },
  {
    "endpoint": "getContractEvents",
    "path": "/{address}/events",
    "price": 2
  },
  {
    "endpoint": "getTransactions",
    "path": "/{address}",
    "price": 1
  },
 ...
  {
    "endpoint": "endpointWeights",
    "path": "/info/endpointWeights",
    "price": 0
  }
]
```