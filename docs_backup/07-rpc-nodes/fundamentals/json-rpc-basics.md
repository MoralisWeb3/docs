---
title: "What is JSON-RPC?"
slug: "/json-rpc-basics"
sidebar_label: "What is JSON-RPC?"
sidebar_position: 0
---

JSON-RPC is a lightweight, remote procedure call (RPC) protocol that uses JSON (JavaScript Object Notation) to encode messages. It allows applications to execute methods on remote systems as if they were local, with the key advantage being its simplicity and minimal overhead.

### Key Features

- **Protocol-Agnostic**: JSON-RPC can be transported over any communication protocol (HTTP, WebSocket, etc.).
- **Stateless Communication**: Each request/response is independent, simplifying the interaction model.
- **Lightweight & Human-Readable**: JSON is both lightweight and easy to parse, making it ideal for efficient communication between distributed systems.

### Example Request and Response

A simple JSON-RPC request might look like this:

```json
{
  "jsonrpc": "2.0",
  "method": "getBalance",
  "params": ["0x123456..."],
  "id": 1
}
```

And the corresponding response:

```json
{
  "jsonrpc": "2.0",
  "result": "100 ETH",
  "id": 1
}
```

In this request, we call the getBalance method with a parameter (the wallet address) and receive a response with the balance.

JSON-RPC’s simplicity and flexibility have made it a widely-used protocol, especially in decentralized applications (dApps) that interact with blockchain networks.
