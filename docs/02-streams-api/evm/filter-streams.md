---
title: "Filter Streams"
slug: "filter-streams"
sidebar_position: 12
description: "In some cases you might want to filter the data you receive from the webhook. You can do this by adding a filter to the stream."
---

In some cases you might want to filter the data you receive from the webhook. You can do this by adding a filter to the stream.

| Filter | Function                          | Note                    | Example                                  | Demo                                                                                           |
| :----- | :-------------------------------- | :---------------------- | :--------------------------------------- | :--------------------------------------------------------------------------------------------- |
| or     | either ... or ...                 | Need at least 2 filters | { "or" : [ {..filter1}, {...filter2} ]}  | [Monitor for Burn/Mint Tokens](/streams-api/evm/how-to-monitor-for-erc20-token-burns-or-mints) |
| and    | all filters must satisfy          | Need at least 2 filters | { "and" : [ {..filter1}, {...filter2} ]} | [Monitor ENS Name Registrations](/streams-api/evm/how-to-monitor-ens-domain-registrations)     |
| eq     | checks for equality               |                         | { "eq": ["value", "1000"] }              |                                                                                                |
| ne     | checks for inequality             |                         | { "ne": ["address", "0x...325"] }        |                                                                                                |
| lt     | value is less than                | Value must be a number  | { "lt": ["amount", "50"] }               |                                                                                                |
| gt     | value is greater than             | Value must be a number  | { "gt": ["price", "500000"] }            |                                                                                                |
| lte    | value is less than or equal to    | Value must be a number  | { "lte": ["value", "100"] }              |                                                                                                |
| gte    | value is greater than or equal to | Value must be a number  | { "gte": ["value", "100"] }              | [Monitor for Burn/Mint Tokens](/streams-api/evm/how-to-monitor-for-erc20-token-burns-or-mints) |
| in     | value is in array                 | Must provide an array   | { "in": \["city": ["berlin", "paris"]]}  | [Monitor specific NFTs](/streams-api/evm/how-to-monitor-specific-nfts)                         |
| nin    | value is not in array             | Must provide an array   | { "nin": \["name": ["bob", "alice"]]}    |                                                                                                |

In some cases you might want to filter the data you receive from the webhook. You can do this by adding a filter to the stream. Important: You must add a (valid!) ABI of the event you want to filter! Otherwise the stream will not work.

### Special variables that can be used in a filter

- `moralis_streams_contract_address` - for identifying current contract address that emits an event, example `{eq: ['moralis_streams_contract_address', '0x0000000000000000000000000000000000000000']}` (note: the address has to be in lowercase)
- `moralis_streams_chain_id` - for identifying current chain for current event, example `{eq: ['moralis_streams_chain_id', '0x1']}`

| Special Variable                 | Info                                                                                                    | Example                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --- |
| moralis_streams_contract_address | For identifying current contract address that emits an event (note: the address has to be in lowercase) | `{eq: ['moralis_streams_contract_address', '0x0000000000000000000000000000000000000000']}` |
| moralis_streams_chain_id         | For identifying current chain for current event                                                         | `{eq: ['moralis_streams_chain_id', '0x1']} `                                               |     |

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
          eq: ["moralis_streams_contract_address", "0x1"],
        },
        {
          gte: ["value", 1000000000], // Example of USDT (6 Decimals)
        },
      ],
    },
    {
      and: [
        {
          eq: ["moralis_streams_contract_address", "0x2"],
        },
        {
          gte: ["value", 1000000000000000000000], // Example of BUSD (18 Decimals)
        },
      ],
    },
  ],
};
```

### Steps to add filter via Admin panel

1. Go to streams page, add contract address(eg:USDC - `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`) to create a stream, add the following ABI and select `Transfer(address,address,uint256)` topic.

```json
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  }
]
```

Your screen will look like below::
![](/img/content/streams-filter-ui-1.webp)

2. Let's create the following filter example with UI: This will filter all transfers with value greater than 5000 USDC and less than 50000 USDC.

```json
{
  "and": [{ "gt": ["value", "5000000000"] }, { "lt": ["value", "50000000000"] }]
}
```

decimals on USDC contract is 6

- `5000 USDC` value will be `5000000000`
- `50000 USDC` value will be `50000000000`

3. Click on `Select topic to filter` and add your topic.
   ![](/img/content/streams-filter-ui-2.webp)

4. Click on `Choose variable` and select `value` from the list
   ![](/img/content/streams-filter-ui-3.webp)

5. Replace `Equal` with `Greater than` and Enter `5000000000` in the input field
   ![](/img/content/streams-filter-ui-4.1.webp)
   ![](/img/content/streams-filter-ui-4.2.webp)

6. Click on `Add filter` and select `Less than` filter from the list.
   ![](/img/content/streams-filter-ui-5.1.webp)

7. Click on `Choose variable` and select `value` from the list and Enter `50000000000` in the input field
   ![](/img/content/streams-filter-ui-5.2.webp)

8. Click on `Or` and replace it with `And`
   ![](/img/content/streams-filter-ui-6.webp)

9. Now click on Update and you have successfully added your filter.
   ![](/img/content/streams-filter-ui-7.webp)

### Steps to add complex filters using Admin Panel

1. Go to streams page, add contract address(eg:USDC - `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`) to create a stream, add the following ABI and select `Transfer(address,address,uint256)` topic.

```json
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  }
]
```

Your screen will look like below::
![](/img/content/streams-filter-ui-1.webp)

2. Let's create the following filter example with UI: This will filter all transfers where the `from` or the `to` is the zero address and the amount is greater or equal to 10000 USDC.

```json
{
  "or": [
    {
      "and": [
        { "eq": ["from", "0x0000000000000000000000000000000000000000"] },
        { "gte": ["value", "10000000000"] }
      ]
    },
    {
      "and": [
        { "eq": ["to", "0x0000000000000000000000000000000000000000"] },
        { "gte": ["value", "10000000000"] }
      ]
    }
  ]
}
```

- A zero address(`0x0000000000000000000000000000000000000000`) in `from` equals to **Mint** and in `to` equals to **burn**.

- decimals in USDC contract is 6
  - `10000 USDC` value will be `10000000000`

3. Click on `Select topic to filter` and add your topic.
   ![](/img/content/streams-filter-ui-2.webp)

4. Click on the delete icon.
   ![](/img/content/streams-filter-ui-10.webp)

5. Click on `Add filter` and select `And` filter from the list.
   ![](/img/content/streams-filter-ui-11.webp)

6. Click on `Choose variable` and select `from` from the list and enter `0x0000000000000000000000000000000000000000` in the input field.
   ![](/img/content/streams-filter-ui-12.webp)

7. Click on the inner `Add filter` and select `Greater than and equal to` filter from the list.
   ![](/img/content/streams-filter-ui-13.webp)

8. Click on `Choose variable` and select `value` from the list and enter `10000000000` in the input field.
   ![](/img/content/streams-filter-ui-14.webp)

9. Now click on the outer `Add filter` and select `And` filter from the list.
   ![](/img/content/streams-filter-ui-15.webp)

10. Click on `Choose variable` and select `to` from the list and enter `0x0000000000000000000000000000000000000000` in the input field.
    ![](/img/content/streams-filter-ui-16.webp)

11. Click on the inner `Add filter` and select `Greater than and equal to` filter from the list.
    ![](/img/content/streams-filter-ui-17.webp)

12. Click on `Choose variable` and select `value` from the list and enter `10000000000` in the input field.
    ![](/img/content/streams-filter-ui-18.webp)

13. Now click on Update and you have successfully added your filter.
    ![](/img/content/streams-filter-ui-19.webp)
