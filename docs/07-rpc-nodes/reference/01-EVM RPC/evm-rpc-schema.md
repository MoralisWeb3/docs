---
sidebar_position: 1
sidebar_label: EVM RPC Schema
slug: /rpc-nodes/reference/evm-rpc-schema
---

import ApiReference from "@site/src/components/ApiReference";
import Admonition from "@theme/Admonition";
import Link from "@docusaurus/Link";
import config from "../../../configs/api-reference/configs.json";

# EVM RPC Schema

## eth_blockNumber

Executes a call to get the number of the most recent block.

<h3> Parameters </h3>

:::info
eth_blockNumber method does not accept any parameters.
:::

<h3> Response </h3>

| Field   | Type   | Description                                                                        |
| ------- | ------ | ---------------------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.                          |
| id      | number | A unique identifier established by the client that must be returned by the server. |
| result  | string | The number of the most recent block in hexadecimal.                                |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1b4"
}
```

## eth_call

Executes a new message call immediately without creating a transaction on the blockchain.

<h3> Parameters </h3>

| Field    | Type   | Description                                                                                   |
| -------- | ------ | --------------------------------------------------------------------------------------------- |
| from     | string | (optional) The address the transaction is sent from.                                          |
| to       | string | The address the transaction is directed to.                                                   |
| gas      | string | (optional) Integer of the gas provided for the transaction execution.                         |
| gasPrice | string | (optional) Integer of the gasPrice used for each paid gas.                                    |
| value    | string | (optional) Integer of the value sent with this transaction.                                   |
| data     | string | (optional) Hash of the method signature and encoded parameters.                               |
| tag      | string | (optional) Tag for the state ("latest", "earliest", "pending"). Defaults to "latest" if null. |

<h4> Example: </h4>

```json
[
  {
    "from": "0x0000000000000000000000000000000000000000",
    "to": "0x0000000000000000000000000000000000000000",
    "gas": "0x76c0",
    "gasPrice": "0x9184e72a000",
    "value": "0x9184e72a",
    "data": "0x"
  },
  "latest"
]
```

<h3> Response </h3>

| Field   | Type   | Description                                                                        |
| ------- | ------ | ---------------------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.                          |
| id      | number | A unique identifier established by the client that must be returned by the server. |
| result  | string | The result of the executed call.                                                   |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x"
}
```

## eth_chainId

Retrieves the current chain ID.

<h3> Parameters </h3>

:::info
eth_chainId method does not accept any parameters.
:::

<h3> Response </h3>

| Field   | Type   | Description                                                                        |
| ------- | ------ | ---------------------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.                          |
| id      | number | A unique identifier established by the client that must be returned by the server. |
| result  | string | The chain ID of the current network in hexadecimal.                                |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
```

## eth_createAccessList

Generates an access list for a transaction.

<h3> Parameters </h3>

| Field    | Type   | Description                                                                                      |
| -------- | ------ | ------------------------------------------------------------------------------------------------ |
| from     | string | (optional) The address the transaction is sent from.                                             |
| to       | string | The address the transaction is directed to.                                                      |
| gas      | string | (optional) Integer of the gas provided for the transaction execution.                            |
| gasPrice | string | (optional) Integer of the gasPrice used for each paid gas.                                       |
| value    | string | (optional) Integer of the value sent with this transaction.                                      |
| data     | string | (optional) Hash of the method signature and encoded parameters.                                  |
| blockTag | string | (optional) Block number in hexadecimal or one of the strings "latest", "earliest", or "pending". |

<h4> Example: </h4>

```json
[
  {
    "from": "0x0000000000000000000000000000000000000000",
    "to": "0x0000000000000000000000000000000000000000",
    "gas": "0x76c0",
    "gasPrice": "0x9184e72a000",
    "value": "0x9184e72a",
    "data": "0x"
  },
  "latest"
]
```

<h3> Response </h3>

| Field      | Type   | Description                                                  |
| ---------- | ------ | ------------------------------------------------------------ |
| jsonrpc    | string | A string specifying the version of the JSON RPC protocol.    |
| id         | number | A unique identifier established by the client.               |
| accessList | array  | An array of access list object entries.                      |
| gasUsed    | string | The amount of gas used with this access list in hexadecimal. |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "accessList": [],
    "gasUsed": "0x"
  }
}
```

## eth_estimateGas

Generates an estimate of how much gas is necessary to allow the transaction to complete.

<h3> Parameters </h3>

| Field    | Type   | Description                                                           |
| -------- | ------ | --------------------------------------------------------------------- |
| from     | string | (optional) The address the transaction is sent from.                  |
| to       | string | The address the transaction is directed to.                           |
| gas      | string | (optional) Integer of the gas provided for the transaction execution. |
| gasPrice | string | (optional) Integer of the gasPrice used for each paid gas.            |
| value    | string | (optional) Integer of the value sent with this transaction.           |
| data     | string | (optional) Hash of the method signature and encoded parameters.       |

<h4> Example: </h4>

```json
[
  {
    "from": "0x0000000000000000000000000000000000000000",
    "to": "0x0000000000000000000000000000000000000000",
    "gas": "0x76c0",
    "gasPrice": "0x9184e72a000",
    "value": "0x9184e72a",
    "data": "0x"
  }
]
```

<h3> Response </h3>

| Field   | Type   | Description                                                                        |
| ------- | ------ | ---------------------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.                          |
| id      | number | A unique identifier established by the client that must be returned by the server. |
| result  | string | The estimated amount of gas to allow the transaction to complete.                  |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
```

## eth_feeHistory

Retrieves the fee history for the requested block range.

<h3> Parameters </h3>

| Field             | Type   | Description                                                                           |
| ----------------- | ------ | ------------------------------------------------------------------------------------- |
| blockCount        | string | Number of blocks to return fee history for (hexadecimal).                             |
| newestBlock       | string | The newest block (hexadecimal or one of the strings "latest", "earliest", "pending"). |
| rewardPercentiles | array  | (optional) A list of block reward percentiles to report in ascending order.           |

<h4> Example: </h4>

```json
["0x4", "latest", [10, 20, 30]]
```

<h3> Response </h3>

| Field         | Type   | Description                                                  |
| ------------- | ------ | ------------------------------------------------------------ |
| jsonrpc       | string | A string specifying the version of the JSON RPC protocol.    |
| id            | number | A unique identifier established by the client.               |
| oldestBlock   | string | The oldest block number in the history (hexadecimal).        |
| reward        | array  | An array of arrays with each item being a reward percentile. |
| baseFeePerGas | array  | An array of base fee per gas for each block (hexadecimal).   |
| gasUsedRatio  | array  | An array of ratios of gas used to gas limit for each block.  |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "oldestBlock": "0x1b4",
    "reward": [],
    "baseFeePerGas": [],
    "gasUsedRatio": []
  }
}
```

## eth_gasPrice

Returns the current price per gas in wei.

<h3> Parameters </h3>

:::info
eth_gasPrice method does not accept any parameters.
:::

<h3> Response </h3>

| Field   | Type   | Description                                                                        |
| ------- | ------ | ---------------------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.                          |
| id      | number | A unique identifier established by the client that must be returned by the server. |
| result  | string | The current price per gas in wei (hexadecimal).                                    |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x4A817C800"
}
```

## eth_getBalance

Returns the balance of the account of the given address.

<h3> Parameters </h3>

| Field    | Type   | Description                                                                                       |
| -------- | ------ | ------------------------------------------------------------------------------------------------- |
| address  | string | The address to get the balance of.                                                                |
| blockTag | string | (optional) The block number in hexadecimal or one of the strings "latest", "earliest", "pending". |

<h4> Example: </h4>

```json
["0x0000000000000000000000000000000000000000", "latest"]
```

<h3> Response </h3>

| Field   | Type   | Description                                                                        |
| ------- | ------ | ---------------------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.                          |
| id      | number | A unique identifier established by the client that must be returned by the server. |
| result  | string | The balance of the account at the provided address (hexadecimal).                  |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0234c8a3397aab58"
}
```

## eth_getBlockByHash

Returns information about a block by hash.

<h3> Parameters </h3>

| Field     | Type    | Description                                                                               |
| --------- | ------- | ----------------------------------------------------------------------------------------- |
| blockHash | string  | The hash of the block.                                                                    |
| fullTx    | boolean | If set to true, transactions are returned as objects; if false, only hashes are returned. |

<h4> Example: </h4>

```json
["0x...", true]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | object | Object with information about the block.                  |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    // Block object
  }
}
```

## eth_getBlockByNumber

Returns information about a block by block number.

<h3> Parameters </h3>

| Field       | Type    | Description                                                                                |
| ----------- | ------- | ------------------------------------------------------------------------------------------ |
| blockNumber | string  | The block number in hexadecimal, or one of the strings "latest", "earliest", or "pending". |
| fullTx      | boolean | If set to true, transactions are returned as objects; if false, only hashes are returned.  |

<h4> Example: </h4>

```json
["0x1B4", false]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | object | Object with information about the block.                  |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    // Block object
  }
}
```

## eth_getBlockTransactionCountByHash

Returns the number of transactions in a block from a block matching the given block hash.

<h3> Parameters </h3>

| Field     | Type   | Description            |
| --------- | ------ | ---------------------- |
| blockHash | string | The hash of the block. |

<h4> Example: </h4>

```json
["0x..."]
```

<h3> Response </h3>

| Field   | Type   | Description                                                                |
| ------- | ------ | -------------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.                  |
| id      | number | A unique identifier established by the client.                             |
| result  | string | The number of transactions in the block with the given hash (hexadecimal). |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x10"
}
```

## eth_getBlockTransactionCountByNumber

Returns the number of transactions in a block from a block matching the given block number.

<h3> Parameters </h3>

| Field       | Type   | Description                                                                                |
| ----------- | ------ | ------------------------------------------------------------------------------------------ |
| blockNumber | string | The block number in hexadecimal, or one of the strings "latest", "earliest", or "pending". |

<h4> Example: </h4>

```json
["0x1B4"]
```

<h3> Response </h3>

| Field   | Type   | Description                                                                  |
| ------- | ------ | ---------------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.                    |
| id      | number | A unique identifier established by the client.                               |
| result  | string | The number of transactions in the block with the given number (hexadecimal). |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x15"
}
```

## eth_getBlockReceipts

<h3> Parameters </h3>

<h4> Example: </h4>

```json
["0x..."]
```

<h3> Response </h3>

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    // Array of transaction receipt objects
  ]
}
```

## eth_getCode

Returns code at a given address.

<h3> Parameters </h3>

| Field    | Type   | Description                                                                                       |
| -------- | ------ | ------------------------------------------------------------------------------------------------- |
| address  | string | The address of the account.                                                                       |
| blockTag | string | (optional) The block number in hexadecimal or one of the strings "latest", "earliest", "pending". |

<h4> Example: </h4>

```json
["0x0000000000000000000000000000000000000000", "latest"]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | string | The code from the given address (hexadecimal).            |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x..."
}
```

## eth_getLogs

Returns an array of all logs matching a given filter object.

<h3> Parameters </h3>

| Field     | Type          | Description                                                                    |
| --------- | ------------- | ------------------------------------------------------------------------------ |
| fromBlock | string/number | (optional) The number of the earliest block (hexadecimal or block number).     |
| toBlock   | string/number | (optional) The number of the latest block (hexadecimal or block number).       |
| address   | string/array  | (optional) An address or a list of addresses from which logs should originate. |
| topics    | array         | (optional) Array of 32-byte DATA topics. Order-dependent.                      |

<h4> Example: </h4>

```json
[
  {
    "fromBlock": "0x1",
    "toBlock": "0x2",
    "address": "0x8888f1f195afa192cfee860698584c030f4c9db1",
    "topics": ["0x00000000000000000000000000000000"]
  }
]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | array  | An array of log objects.                                  |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    // Array of log objects
  ]
}
```

## eth_getProof

Returns the account and storage values of the specified account including the Merkle-proof.

<h3> Parameters </h3>

| Field       | Type   | Description                                                                                       |
| ----------- | ------ | ------------------------------------------------------------------------------------------------- |
| address     | string | The address of the account.                                                                       |
| storageKeys | array  | Array of storage keys.                                                                            |
| blockTag    | string | (optional) The block number in hexadecimal or one of the strings "latest", "earliest", "pending". |

<h4> Example: </h4>

```json
[
  "0x0000000000000000000000000000000000000000",
  ["0x0000000000000000000000000000000000000000000000000000000000000000"],
  "latest"
]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | object | Object containing the account and storage proofs.         |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    // Account proof object
  }
}
```

## eth_getStorageAt

Returns the value from a storage position at a given address.

<h3> Parameters </h3>

| Field           | Type   | Description                                                                                       |
| --------------- | ------ | ------------------------------------------------------------------------------------------------- |
| address         | string | The address of the storage.                                                                       |
| storagePosition | string | Position in the storage.                                                                          |
| blockTag        | string | (optional) The block number in hexadecimal or one of the strings "latest", "earliest", "pending". |

<h4> Example: </h4>

```json
["0x0000000000000000000000000000000000000000", "0x0", "latest"]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | string | The value from the given storage position (hexadecimal).  |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x..."
}
```

## eth_getTransactionByHash

Returns information about a transaction requested by transaction hash.

<h3> Parameters </h3>

| Field           | Type   | Description                                           |
| --------------- | ------ | ----------------------------------------------------- |
| transactionHash | string | The hash of the transaction to get information about. |

<h4> Example: </h4>

```json
["0x..."]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | object | An object with information about the transaction.         |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    // Transaction object
  }
}
```

## eth_getTransactionByBlockHashAndIndex

Returns information about a transaction by block hash and transaction index position.

<h3> Parameters </h3>

| Field            | Type   | Description                                                |
| ---------------- | ------ | ---------------------------------------------------------- |
| blockHash        | string | The hash of the block.                                     |
| transactionIndex | string | The index of the transaction in the block, in hexadecimal. |

<h4> Example: </h4>

```json
["0x...", "0x0"]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | object | An object with information about the transaction.         |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    // Transaction object
  }
}
```

## eth_getTransactionByBlockNumberAndIndex

Returns information about a transaction by block number and transaction index position.

<h3> Parameters </h3>

| Field            | Type   | Description                                                                                |
| ---------------- | ------ | ------------------------------------------------------------------------------------------ |
| blockNumber      | string | The block number in hexadecimal, or one of the strings "latest", "earliest", or "pending". |
| transactionIndex | string | The index of the transaction in the block, in hexadecimal.                                 |

<h4> Example: </h4>

```json
["0x1B4", "0x0"]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | object | An object with information about the transaction.         |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    // Transaction object
  }
}
```

## eth_getTransactionCount

Returns the number of transactions sent from an address.

<h3> Parameters </h3>

| Field    | Type   | Description                                                                                       |
| -------- | ------ | ------------------------------------------------------------------------------------------------- |
| address  | string | The address to get the number of transactions from.                                               |
| blockTag | string | (optional) The block number in hexadecimal or one of the strings "latest", "earliest", "pending". |

<h4> Example: </h4>

```json
["0x0000000000000000000000000000000000000000", "latest"]
```

<h3> Response </h3>

| Field   | Type   | Description                                                     |
| ------- | ------ | --------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.       |
| id      | number | A unique identifier established by the client.                  |
| result  | string | The number of transactions sent from the address (hexadecimal). |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x10"
}
```

## eth_getTransactionReceipt

Returns the receipt of a transaction by transaction hash.

<h3> Parameters </h3>

| Field           | Type   | Description                                         |
| --------------- | ------ | --------------------------------------------------- |
| transactionHash | string | The hash of the transaction to get the receipt for. |

<h4> Example: </h4>

```json
["0x..."]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | object | An object representing the transaction receipt.           |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    // Transaction receipt object
  }
}
```

## eth_getUncleByBlockHashAndIndex

Returns information about an uncle of a block by hash and uncle index position.

<h3> Parameters </h3>

| Field      | Type   | Description                                          |
| ---------- | ------ | ---------------------------------------------------- |
| blockHash  | string | The hash of the block.                               |
| uncleIndex | string | The index of the uncle in the block, in hexadecimal. |

<h4> Example: </h4>

```json
["0x...", "0x0"]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | object | An object with information about the uncle block.         |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    // Uncle block object
  }
}
```

## eth_getUncleByBlockNumberAndIndex

Returns information about an uncle of a block by block number and uncle index position.

<h3> Parameters </h3>

| Field       | Type   | Description                                                                                |
| ----------- | ------ | ------------------------------------------------------------------------------------------ |
| blockNumber | string | The block number in hexadecimal, or one of the strings "latest", "earliest", or "pending". |
| uncleIndex  | string | The index of the uncle in the block, in hexadecimal.                                       |

<h4> Example: </h4>

```json
[
  "0x1B4", // Block number in hexadecimal or one of the strings "latest", "earliest", or "pending".
  "0x0" // Index of the uncle in the block.
]
```

<h3> Response </h3>

| Field   | Type   | Description                                               |
| ------- | ------ | --------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol. |
| id      | number | A unique identifier established by the client.            |
| result  | object | An object with information about the uncle block.         |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    // Uncle block object
  }
}
```

## eth_getUncleCountByBlockHash

Returns the number of uncles in a block from a block matching the given block hash.

<h3> Parameters </h3>

| Field     | Type   | Description            |
| --------- | ------ | ---------------------- |
| blockHash | string | The hash of the block. |

<h4> Example: </h4>

```json
[
  "0x..." // Hash of the block.
]
```

<h3> Response </h3>

| Field   | Type   | Description                                                          |
| ------- | ------ | -------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.            |
| id      | number | A unique identifier established by the client.                       |
| result  | string | The number of uncles in the block with the given hash (hexadecimal). |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
```

## eth_getUncleCountByBlockNumber

Returns the number of uncles in a block from a block matching the given block number.

<h3> Parameters </h3>

| Field       | Type   | Description                                                                                |
| ----------- | ------ | ------------------------------------------------------------------------------------------ |
| blockNumber | string | The block number in hexadecimal, or one of the strings "latest", "earliest", or "pending". |

<h4> Example: </h4>

```json
[
  "0x1B4" // Block number in hexadecimal or one of the strings "latest", "earliest", or "pending".
]
```

<h3> Response </h3>

| Field   | Type   | Description                                                            |
| ------- | ------ | ---------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.              |
| id      | number | A unique identifier established by the client.                         |
| result  | string | The number of uncles in the block with the given number (hexadecimal). |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x2"
}
```

## eth_maxPriorityFeePerGas

Returns the current max priority fee per gas.

<h3> Parameters </h3>

:::info
eth_maxPriorityFeePerGas method does not accept any parameters.
:::

<h3> Response </h3>

| Field   | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.  |
| id      | number | A unique identifier established by the client.             |
| result  | string | The current max priority fee per gas in wei (hexadecimal). |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x3B9ACA00"
}
```

## eth_sendRawTransaction

Submits a pre-signed transaction for broadcast to the Ethereum network.

<h3> Parameters </h3>

| Field           | Type   | Description                                        |
| --------------- | ------ | -------------------------------------------------- |
| transactionData | string | The signed transaction data in hexadecimal format. |

<h4> Example: </h4>

```json
[
  "0x..." // The signed transaction data.
]
```

<h3> Response </h3>

| Field   | Type   | Description                                                           |
| ------- | ------ | --------------------------------------------------------------------- |
| jsonrpc | string | A string specifying the version of the JSON RPC protocol.             |
| id      | number | A unique identifier established by the client.                        |
| result  | string | The hash of the transaction after it's been submitted to the network. |

<h4> Example: </h4>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x..."
}
```
