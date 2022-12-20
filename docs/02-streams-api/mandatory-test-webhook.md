---
title: "Mandatory Test Webhook"
slug: "mandatory-test-webhook"
sidebar_position: 7
---

Whenever you create or update a stream, you will receive a test webhook.

You have to return status code 200 for the stream to start.

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