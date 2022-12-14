---
title: "Pagination"
slug: "pagination"
---
### What is Pagination?

Pagination is a way of sorting results by dividing them up into smaller chunks so that we can work with one at a time, for example in google search we get so many results which are paginated with page 1 and then page 2 and page 3 so on and so forth. Because fetching all of the data at once will be too much to handle for google in terms of performance.

### What is cursor Pagination?

A cursor is a unique identifier (string) for a specific set of records or data chunks, which acts as a pointer to the next set of record we want to fetch from to get the next page of results. Cursor pagination works with O(1) time complexity unlike offset pagination which works O(n) complexity. 

### Cursor pagination with Moralis API

For paginating API results you can use cursor parameter. You get `cursor` from current request and you use it for the next request until there are no more results returned.

Example of using cursor in NodeJS with a Moralis Server:

```javascript

import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

const chain = EvmChain.ETHEREUM;

const address = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB'; //Cryptopunks contract address

await Moralis.start({
    apiKey: 'YOUR_API_KEY',
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
			});
		console.log(console.log(
      `Got page ${response.page} of ${Math.ceil(
        response.total / response.page_size
      )}, ${response.total} total`
    );
     for (const owner of response.result) {
      owners[owner.owner_of] = {
        amount: owner.amount,
        owner: owner.owner_of,
        tokenId: owner.token_id,
        tokenAddress: owner.token_address,
      };
    }
    cursor = response.cursor;
  } while (cursor != "" && cursor != null);

  console.log("owners:", owners, "total owners:", Object.keys(owners).length);
}
```



Example of using cursor parameter in Python:

```Text Python
import requests
import time


def get_nft_owners(offset, cursor):
    print("offset", offset)
    url = 'https://deep-index.moralis.io/api/v2/nft/<address_here>/owners?chain=polygon&format=decimal'
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



> 📘 Limit value for cursor
> 
> The limit param value for cursor can be set at page 1 and the same limit value will be used through the following pages, you cannot change the limit value after page 1.