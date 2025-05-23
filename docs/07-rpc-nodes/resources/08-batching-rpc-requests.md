---
title: "Batching RPC Requests"
slug: "/rpc-nodes/reference/batching-rpc-requests"
sidebar_label: "Batching RPC Requests"
description: "Learn how to reduce HTTP overhead by batching multiple RPC requests into a single call"
sidebar_position: 1
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# Batching RPC Requests

Batching allows you to combine multiple RPC requests into a single API call, improving network efficiency and reducing HTTP overhead by minimizing the number of separate network connections your application needs to make.

---

## Why Use Batch Requests?

Batch requests offer several advantages:

- **Reduced Latency**: Fewer HTTP connections mean faster overall response times.
- **Simplified Error Handling**: Process multiple related operations together.
- **Better Network Utilization**: Decrease overhead from multiple separate requests.
- **Improved UX**: Get all necessary data in one round-trip instead of sequential requests.

**Note**: Batching does not reduce your Compute Unit (CU) consumption. Each request within a batch consumes the same CUs as if made individually.

---

## How Batching Works

Instead of sending separate requests, you can send an array of JSON-RPC request objects in a single HTTP request. The server processes each request in the batch and returns an array of responses, maintaining the same order as the requests.

Each request in the batch must include the `method`, `params`, and `id` fields, as per the JSON-RPC 2.0 specification.

---

## Batch Request Format

A batch request is an array of individual JSON-RPC 2.0 request objects sent to the server in a single HTTP request:

```json
[
  {
    "jsonrpc": "2.0",
    "method": "method_name",
    "params": ["param1", "param2"],
    "id": 1
  },
  {
    "jsonrpc": "2.0",
    "method": "another_method",
    "params": ["param1"],
    "id": 2
  }
]
```

## Batch Response Format

The response to a batch request is an array of response objects in the same order as the request array:

```json
[
  {
    "jsonrpc": "2.0",
    "id": 1,
    "result": "result_data"
  },
  {
    "jsonrpc": "2.0",
    "id": 2,
    "result": "another_result"
  }
]
```

---

## Example: Batch Request

Here's an example of a batch request that combines three different RPC operations:

```json
[
  {
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": ["0x1234567890abcdef1234567890abcdef12345678", "latest"],
    "id": 1
  },
  {
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045", "latest"],
    "id": 2
  },
  {
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": ["0x1", true],
    "id": 3
  }
]
```

## Example: Batch Response

The corresponding response would look like this:

```json
[
  {
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x21e1b40ac49d98bdaee"
  },
  {
    "jsonrpc": "2.0",
    "id": 2,
    "result": "0xf1863477e42429b41b2"
  },
  {
    "jsonrpc": "2.0",
    "id": 3,
    "result": {
      "difficulty": "0x3ff800000",
      "extraData": "0x476574682f76312e302e302f6c696e75782f676f312e342e32",
      "gasLimit": "0x1388",
      "gasUsed": "0x0",
      "hash": "0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6",
      "logsBloom": "0x000000000000000000000000000000000000000000000000000000000",
      "miner": "0x05a56e2d52c817161883f50c441c3228cfe54d9f",
      "mixHash": "0x969b900de27b6ac6a67742365dd65f55a0526c41fd18e1b16f1a1215c2e66f59",
      "nonce": "0x539bd4979fef1ec4",
      "number": "0x1",
      "parentHash": "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
      "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      "size": "0x219",
      "stateRoot": "0xd67e4d450343046425ae4271474353857ab860dbc0a1dde64b41b5cd3a532bf3",
      "timestamp": "0x55ba4224",
      "totalDifficulty": "0x7ff800000",
      "transactions": [],
      "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "uncles": []
    }
  }
]
```

---

## Important: Compute Units and Batching

**Batching does not reduce Compute Unit (CU) consumption.** Each request within the batch consumes the same amount of CUs as if it were made individually. Batching only optimizes network communication.

For example, if your batch contains:

- One `eth_getBalance` request (3 CUs)
- One `eth_getBlockByNumber` request (3 CUs)
- One `eth_getTransactionReceipt` request (8 CUs)

The total CU cost would be 14 CUs, exactly the same as if you had made these requests separately.

---

## Limitations and Best Practices

- **Maximum Batch Size**: You can include up to 20 requests in a single batch.
- **Error Handling**: Be prepared to handle partial failures, where some requests in the batch succeed while others fail.
- **Request Grouping**: Group related requests together for better organization and error recovery.
- **Request IDs**: Use meaningful IDs to easily identify which response corresponds to which request.
- **Request Ordering**: Arrange dependent requests in the proper sequence, as the server will process them in the order received.

---

## Conclusion

Batching RPC requests is a technique to optimize your application's network communication with blockchain nodes. By reducing the number of HTTP requests, you can create more responsive applications with simplified code structure. Remember that batching doesn't reduce your Compute Unit consumption - it only optimizes network efficiency.

For more information on Compute Units and how they affect your usage, visit our [Compute Units documentation](/rpc-nodes/reference/compute-units-cu).
