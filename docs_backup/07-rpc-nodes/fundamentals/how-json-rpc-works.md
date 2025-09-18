---
title: "How JSON-RPC Works"
slug: "/how-json-rpc-works"
sidebar_label: "How JSON-RPC Works?"
sidebar_position: 1
---

JSON-RPC operates in a straightforward request-response model, allowing developers to call methods on remote servers with minimal configuration. The client sends a JSON-encoded request to a server, which processes the request and returns a JSON-encoded response.

### Components of JSON-RPC

1. **Request**

   - The client sends a request containing:
     - `jsonrpc`: The protocol version (e.g., "2.0").
     - `method`: The name of the method being invoked.
     - `params`: An array or object containing the method's parameters.
     - `id`: A unique identifier to match the response.

2. **Response**
   - The server responds with:
     - `result`: The result of the method invocation.
     - `id`: The same `id` from the request to match the response.
     - `error`: Optional, only present if the request fails.

### Example of a JSON-RPC Flow

1. **Client Request**:

   ```json
   {
     "jsonrpc": "2.0",
     "method": "eth_getBlockByNumber",
     "params": ["0x10d4f", true],
     "id": 1
   }
   ```

2. **Server Response**:
   ```json
   {
   "jsonrpc": "2.0",
   "result": {
    "number": "0x10d4f",
    "hash": "0xabc123...",
    "transactions": [...]
   },
   "id": 1
   }
   ```

This simplicity makes JSON-RPC an ideal choice for systems where performance, minimalism, and ease of use are priorities, such as querying blockchain data.

### Batch Requests

JSON-RPC supports sending multiple requests in a single batch, improving performance and reducing latency.

Example:

```json
[
  {
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": ["0x10d4f", true],
    "id": 1
  },
  {
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": ["0x123456..."],
    "id": 2
  }
]
```

This enables you to execute multiple calls in parallel, reducing overhead and network latency.
