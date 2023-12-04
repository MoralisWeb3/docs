---
title: "Pagination"
slug: "pagination"
description: "This tutorial teaches you how to use pagination with the Moralis Web3 API."
sidebar_position: 11
---
## What Is Pagination?

Pagination is the process of dividing the responses from an API into multiple pages of results. This allows for faster response times for end users by reducing the amount of data that needs to be returned with each request.

API pagination is used to control the amount of data that is returned for each request, as well as the order of the data.

## What Is Cursor Pagination?

Cursor pagination uses a pointer, or cursor, to identify a specific item in the dataset. This pointer is sent with requests to the server, and in response, it sends back the data after the given item.

It’s ideal if you want to pull a long list of records from the API since its performance remains constant.

## Cursor Pagination With Moralis API

Every request will return a cursor that can be used to get the next result until there are no more results to return.

## NodeJS example

```javascript
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const init = async () => {
  const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"; //Cryptopunks contract address
  const chain = EvmChain.ETHEREUM;
  await Moralis.start({
    apiKey: "MORALIS_API_KEY",
    // ...and any other configuration
  });
  let cursor = null;
  let owners = {};
  do {
    const response = await Moralis.EvmApi.nft.getNFTOwners({
      address,
      chain,
      limit: 100,
      cursor: cursor,
      disableTotal: false,
    });
    console.log(
      `Got page ${response.pagination.page} of ${Math.ceil(
        response.pagination.total / response.pagination.pageSize
      )}, ${response.pagination.total} total`
    );
    for (const NFT of response.result) {
      if (NFT.ownerOf.checksum in owners) {
        owners[NFT.ownerOf.checksum].push({
          amount: NFT.amount,
          owner: NFT.ownerOf,
          tokenId: NFT.tokenId,
          tokenAddress: NFT.tokenAddress,
        });
      } else {
        owners[NFT.ownerOf.checksum] = [
          {
            amount: NFT.amount,
            owner: NFT.ownerOf,
            tokenId: NFT.tokenId,
            tokenAddress: NFT.tokenAddress,
          },
        ];
      }
    }
    cursor = response.pagination.cursor;
  } while (cursor != "" && cursor != null);
  console.log("owners:", owners, "total owners:", Object.keys(owners).length);
};
init();
```

## Python example

```python
import requests
import time

def get_nft_owners(offset, cursor):
    print("offset", offset)
    url = 'https://deep-index.moralis.io/api/v2.2/nft/<address_here>/owners?chain=polygon&format=decimal'
    if cursor:
      url = url + "&cursor=%s" % cursor

    print("api_url", url)
    headers = {
        "Content-Type": "application/json",
        "X-API-Key": "API_KEY_HERE"
    }
    statusResponse = requests.request("GET", url, headers=headers)
    data = statusResponse.json()
    print("HTTP headers:", statusResponse.headers)
    try:
        print("nr results", len(data['result']))
    except:
        print(repr(data))
        print("exiting")
        raise SystemExit

    cursor = data['cursor']
    print(data['page'], data['total'])
    return cursor


cursor = None
for j in range(0, 10):
    cursor = get_nft_owners(j*500, cursor)
    print()
    time.sleep(1.1)
```

:::info Limit param
The limit param can only be set in the initial call, you cannot change the limit value after the first result.
:::
