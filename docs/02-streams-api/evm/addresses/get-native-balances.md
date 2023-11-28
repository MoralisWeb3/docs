---
title: "Get Native Balances"
slug: "../get-native-balances"
sidebar_position: 21
---

There is an option `getNativeBalances` when creating or editing a Stream. It is a list of native balances calls for specific addresses.

You can get Native Balances (ETH/BNB/MATIC and many more) of addresses that appear in your Webhook. They are very similar to [Triggers](/streams-api/evm/triggers).

`getNativeBalances` trigger is currently available to use with a business plan or higher.

# Native Balance Trigger

```json Native Balance Trigger Example
"getNativeBalances": [
  {
  	selectors: ["$fromAddress", "$toAddress"],
    type: 'tx'
  }
]
```

- `selectors` is a list of [valid Selectors](/streams-api/evm/triggers#selectors), for each selector you will get the native balance in the Webhook.
- `type` for which part of the Webhook you want to select the addresses. [Valid Types](/streams-api/evm/triggers#type) and also `internalTx`is allowed!

# Response

The Webhook introduces a new field `nativeBalances` that has the balances uniquely ordered by the triggers:

```json Webhook Response
{
  "confirmed": true,
  "chainId": "0x1",
  "abi": [],
  "streamId": "v900a834-a542-43f9-98f6-0f76caf65394",
  "tag": "someString",
  "retries": 0,
  "block": {
    "number": "16140655",
    "hash": "0xfc0b1ae5d04b3c5a780f1f72658edc9e26a6340df4b1118a713652b6d043039a",
    "timestamp": "1670510543"
  },
  "logs": [],
  "txs": [
    {
      "hash": "0xd304ef0dd0df001d8f37de569af63585dbf7637247b17dc12224828960b4d830",
      "gas": "120000",
      "gasPrice": "17605149814",
      "nonce": "43904",
      "input": "0xa9059cbb00000000000000000000000072f54455fbdbff1b8975ab2df599ff9f9afb5310000000000000000000000000000000000000000000000000000000000606a9e0",
      "transactionIndex": "16",
      "fromAddress": "0x0b5c4a7fcda49e0a8661419bb55b86161a86db2a",
      "toAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "value": "0",
      "type": "2",
      "v": "0",
      "r": "52200684288032529078283440758240219132630446778024109656659293182067276426999",
      "s": "25805856329951682196861199677610079726197925451457581628939426805653323455347",
      "receiptCumulativeGasUsed": "1214527",
      "receiptGasUsed": "63209",
      "receiptContractAddress": null,
      "receiptRoot": null,
      "receiptStatus": "1"
    }
  ],
  "txsInternal": [],
  "erc20Transfers": [],
  "erc20Approvals": [],
  "nftTokenApprovals": [],
  "nftApprovals": {
    "ERC721": [],
    "ERC1155": []
  },
  "nftTransfers": [],
  "nativeBalances": [
    {
      "address": "0x0b5c4a7fcda49e0a8661419bb55b86161a86db2a",
      "balance": "3921415148849464186"
    },
    {
      "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "balance": "2135786324"
    }
  ]
}
```
