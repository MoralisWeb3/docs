---
title: "Mandatory Test"
slug: "../mandatory-test-webhook"
sidebar_position: 4
---

Whenever you create or update a stream, you will receive a test webhook.

You have to return status code 200 for the stream to start. Alternatively, you can return any 20x status code (e.g., 200, 201, 202, etc.) for the stream to start.

The test body will look like this:

```json
{  
  "abi": {},  
  "block": {  
    "hash": "",  
    "number": "",  
    "timestamp": ""  
  },  
  "txs": \[],  
  "txsInternal": \[],  
  "logs": \[],  
  "chainId": "",  
  "tag": "",  
  "streamId": : "",  
  "confirmed": true,  
  "retries": 0,  
  "erc20Approvals": \[],  
  "erc20Transfers": \[],  
  "nftApprovals": \[ ERC721: \[], ERC1155: \[] ],  
  "nftTransfers": \[]  
}
```
