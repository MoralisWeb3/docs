# Webhook

When setting up an Aptos stream, the webhooks sent to your specified webhookUrl will contain the following data:

`coinTransfers`: an array of coin transfers that occurred in the stream. Each object in the array will have the following properties:

- `coin`: an object containing information about the coin being transferred, such as its `name`, `decimals`, and `symbol`.
- `to`: the address of the recipient of the coin transfer.
- `value`: the amount of coins transferred.
- `from`: the address of the sender of the coin transfer.
- `valueWithDecimals`: the amount of coins transferred, expressed in the coin's base units.
- `txHash`: the hash of the transaction that triggered the coin transfer.

`payload`: an array of objects containing the raw payload data of the transaction(s) that triggered the webhook.

`retries`: the number of times the webhook was retried in case of failure.

`events`: an array of object containing raw events that were emitted by the transaction(s) that triggered the webhook.

`coinWithdrawals`: an array of coin withdrawal events.

`coinDeposits`: an array of coin deposit events.

`block`: an object containing information about the block in which the transaction that triggered the webhook was mined, such as its `number`, `timestamp`, `hash`, `firstVersion`, and `lastVersion`.

`transactions`: an array of all transactions included in the block holding information about gas used, gas price, and the transaction hash.

`tag`: the tag provided when creating the stream. Useful to identify the stream.

`streamId`: the unique ID of the stream.

Please note that data in the `coinTransfers` array will only be included if the payload function is either `0x1::coin::transfer` or `0x1::aptos_account::transfer`.

Also the `coinDeposits` and `coinWithdrawals` will always be available if there are transactions that emit `0x1::coin::WithdrawEvent` or `0x1::coin::DepositEvent` even if the payload function is not `0x1::coin::transfer` or `0x1::aptos_account::transfer`.
Also it will always be included even with `includeEvents` set to `false`.

## Example

Consider following Stream Config:

```json
{
  "streamId": "aa3e4721-be91-4919-8649-d46d5c2a21f7",
  "includeEvents": true,
  "includePayload": false,
  "includeChanges": false,
  "allAddresses": true,
  "events": ["0x1::coin::WithdrawEvent", "0x1::coin::DepositEvent"],
  "functions": [],
  "webhookUrl": "https://webhook.site/4b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b",
  "tag": "myAptosStream",
  "description": "My Aptos Stream",
  "network": ["mainnet"]
}
```

The following is an example of a webhook payload that would be sent to the webhookUrl:

```json
{
  "streamId": "aa3e4721-be91-4919-8649-d46d5c2a21f7",
  "tag": "myAptosStream",
  "network": "mainnet",
  "block": {
    "number": "27827628",
    "timestamp": "1674578824913485",
    "hash": "0x3ceea5072b32371f3f5cc0a89c06ca641627583698b7f6d3a5e1a23468b5c2a0",
    "firstVersion": "75418334",
    "lastVersion": "75418336"
  },
  "retries": 0,
  "coinTransfers": [],
  "coinDeposits": [
    {
      "value": "220000000000",
      "address": "0xe564aa362c7a9786eb7c72d2671b7398cb5a75b9fb1210fbd84cd05d691e44d3",
      "coin": {
        "decimals": 8,
        "name": "Aptos Coin",
        "symbol": "APT"
      },
      "valueWithDecimals": 2200,
      "sequenceNumber": "71",
      "txHash": "0x512627652e226ba53f038c8c25695aaae66b3ed476f4ceb4be7c5bb686d35811"
    }
  ],
  "coinWithdrawals": [
    {
      "value": "220000000000",
      "address": "0x4bec62452ff79010d9d248dc6961d77db00cbedbf690c22a30d923c825c7ac00",
      "coin": {
        "decimals": 8,
        "name": "Aptos Coin",
        "symbol": "APT"
      },
      "valueWithDecimals": 2200,
      "sequenceNumber": "3813",
      "txHash": "0x512627652e226ba53f038c8c25695aaae66b3ed476f4ceb4be7c5bb686d35811"
    }
  ],
  "transactions": [
    {
      "gasLimit": "1762",
      "gasUnitPrice": "120",
      "gasUsed": "1175",
      "hash": "0x512627652e226ba53f038c8c25695aaae66b3ed476f4ceb4be7c5bb686d35811",
      "stateChangeHash": "0x08fd784ebe37618af6d14fed695d2e928f776db7e317f222a02bcf92129a7c87",
      "eventChangeHash": "0x9c4de2e4395185631ffb67407c1e74fc5ca850874146950a75948ee4373a611f",
      "success": true,
      "type": "user_transaction",
      "sender": "0x498ca57f59f63d12b4ea96e77f1de2a839fdbbd1ce4e39c0e78da708758b91aa"
    }
  ],
  "changes": [],
  "payloads": [],
  "events": [
    [
      {
        "guid": {
          "creation_number": "5",
          "account_address": "0x4bec62452ff79010d9d248dc6961d77db00cbedbf690c22a30d923c825c7ac00"
        },
        "sequence_number": "3813",
        "type": "0x1::coin::WithdrawEvent",
        "data": {
          "amount": "220000000000"
        },
        "txHash": "0x512627652e226ba53f038c8c25695aaae66b3ed476f4ceb4be7c5bb686d35811"
      },
      {
        "guid": {
          "creation_number": "2",
          "account_address": "0xe564aa362c7a9786eb7c72d2671b7398cb5a75b9fb1210fbd84cd05d691e44d3"
        },
        "sequence_number": "71",
        "type": "0x1::coin::DepositEvent",
        "data": {
          "amount": "220000000000"
        },
        "txHash": "0x512627652e226ba53f038c8c25695aaae66b3ed476f4ceb4be7c5bb686d35811"
      }
    ]
  ]
}
```
