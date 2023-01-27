# Webhook Data

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

