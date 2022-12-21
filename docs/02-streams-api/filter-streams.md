---
title: "Filter Streams"
slug: "filter-streams"
sidebar_position: 12
description: "In some cases you might want to filter the data you receive from the webhook. You can do this by adding a filter to the stream."
---

| Filter | Function                          | Note                    | Example                                  | Demo                                                                                          |
| :----- | :-------------------------------- | :---------------------- | :--------------------------------------- | :-------------------------------------------------------------------------------------------- |
| or     | either ... or ...                 | Need at least 2 filters | { "or" : [ {..filter1}, {...filter2} ]}  | [Monitor for Burn/Mint Tokens](/streams-api/how-to-monitor-for-er-c20-token-burns-or-mints)    |
| and    | all filters must satisfy          | Need at least 2 filters | { "and" : [ {..filter1}, {...filter2} ]} | [Monitor ENS Name Registrations](/streams-api/how-to-monitor-ens-domain-registrations) |
| eq     | checks for equality               |                         | { "eq": ["value", "1000"] }              |                                                                                               |
| ne     | checks for inequality             |                         | { "ne": ["address", "0x...325"] }        |                                                                                               |
| lt     | value is less than                | Value must be a number  | { "lt": ["amount", "50"] }               |                                                                                               |
| gt     | value is greater than             | Value must be a number  | { "gt": ["price", "500000"] }            |                                                                                               |
| lte    | value is less than or equal to    | Value must be a number  | { "lte": ["value", "100"] }              |                                                                                               |
| gte    | value is greater than or equal to | Value must be a number  | { "gte": ["value", "100"] }              | [Monitor for Burn/Mint Tokens](/streams-api/how-to-monitor-for-er-c20-token-burns-or-mints)    |
| in     | value is in array                 | Must provide an array   | { "in": \["city": ["berlin", "paris"]]}  | [Monitor specific NFTs](/streams-api/how-to-monitor-specific-nfts)                   |
| nin    | value is not in array             | Must provide an array   | { "nin": \["name": ["bob", "alice"]]}    |                                                                                               |

In some cases you might want to filter the data you receive from the webhook. You can do this by adding a filter to the stream. Important: You must add a (valid!) ABI of the event you want to filter! Otherwise the stream will not work.

### Special variables that can be used in a filter

- `moralis_streams_contract_address` - for identifying current contract address that emits an event, example `{eq: ['moralis_streams_contract_address', '0x0000000000000000000000000000000000000000']}` (note: the address has to be in lowercase)
- `moralis_streams_chain_id` - for identifying current chain for current event, example `{eq: ['moralis_streams_chain_id', '0x1']}`

| Special Variable | Info | Example |
|---|---|---|
moralis_streams_contract_address | For identifying current contract address that emits an event (note: the address has to be in lowercase) |	```{eq: ['moralis_streams_contract_address', '0x0000000000000000000000000000000000000000']}``` |
moralis_streams_chain_id |	For identifying current chain for current event	 | ```{eq: ['moralis_streams_chain_id', '0x1']} ``` | |

### Here is an example of applying different filters for different contract addresses

`moralis_streams_contract_address` variable name can be used to identify current contract address that emits current event

Note: the address is in lowercase

Example:

```javascript
const filter = {
  or: [
    {
      and: [
        {
          eq: ['moralis_streams_contract_address', '0x1'],
        },
        {
          gte: ['value', 1000000000], // Example of USDT (6 Decimals) 
        },
      ],
    },
    {
      and: [
        {
          eq: ['moralis_streams_contract_address', '0x2'],
        },
        {
          gte: ['value', 1000000000000000000000], // Example of BUSD (18 Decimals) 
        },
      ],
    },
  ],
}
```