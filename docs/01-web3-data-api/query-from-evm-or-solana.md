---
title: "Query from EVM or Solana"
slug: "query-from-evm-or-solana"
description: "It's possible to read responses from `EvmApi` and `SolApi` in three different ways: `.toJson()`, `.raw`, `.result`, or using `.format()` for default formatting type."
sidebar_position: 8
---
:::info Complete API Reference

Using the SDK is the simplest way to query blockchain data. This section demonstrates how to implement the API calls.

Please head over to [API references](/web3-data-api/reference/overview) to see the full power of the APIs and all possible methods.

:::

Querying the APIs can be done via the `EvmApi` and `SolApi` modules as follows:

```javascript
import Moralis from 'moralis'

const result1 = await Moralis.EvmApi.'<DOMAIN>'.'<METHOD>'
const result2 = await Moralis.SolApi.'<DOMAIN>'.'<METHOD>'
```



See the [SDK reference](page:sdk-reference) for all the possible domains and methods.

The returned value is an `ApiResultAdapter` instance with the following methods:

- `.result`
- `.raw`
- `.next()` for paginated responses
- `.pagination` for paginated responses



## `.result`

Returns data with all the internal data types.

Use this method when you want to run logic on the returned data, as it comes with a lot more properties/utilities compared to the `.raw()` result:

```javascript
import { EvmChain } from '@moralisweb3/common-evm-utils';

const response = await Moralis.EvmApi.token.getWalletTokenBalances({
  	chain: EvmChain.ETHEREUM,
    address: '0xa9C4c85DD0495E32D08EF64d51fDEB35D200EDfe',
})

// An array of Erc20Value 
const balances = response.result

console.log(balances[0].token.contractAddress.equals("0x01be23585060835e02b77ef475b0cc51aa1e0709"))
//console output:
true

console.log(balances[0].value)
//console output:
"20.0"

console.log(balances[0].amount)
//console output:
BigNumber<20000000000000000000>
```



## `.raw`

Returns raw data as it is; it comes directly from the API.

Use this method if you want the data as it was in v1 of the SDK. This will output the data without any formatting, and the types are different than the result from  `.result`. This method is not recommended (as it lacks a lot of utilities, validations, and formatting) and should only be used when you want to migrate from the v1 version of the SDK:

```javascript
import { EvmChain } from '@moralisweb3/common-evm-utils';

const balances = await Moralis.EvmApi.token.getWalletTokenBalances({
  	chain: EvmChain.ETHEREUM,
    address: '0xa9C4c85DD0495E32D08EF64d51fDEB35D200EDfe',
})
console.log(balances.raw)

//console output:
[
   {
      "token_address":"0x01be23585060835e02b77ef475b0cc51aa1e0709",
      "name":"ChainLink Token",
      "symbol":"LINK",
      "logo":null,
      "thumbnail":null,
      "decimals":18,
      "balance":"20000000000000000000"
   }
]
```