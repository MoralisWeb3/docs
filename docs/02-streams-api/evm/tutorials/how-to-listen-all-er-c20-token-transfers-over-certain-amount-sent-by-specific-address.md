---
title: "Monitor High-Value ERC20 Transfers by Address"
slug: "/streams-api/evm/tutorials/how-to-listen-to-all-erc20-contract-transfers-over-certain-amount-sent-by-specific-address"
description: "Learn how to listen to all ERC20 token transfers over certain amount sent by specific address using Moralis Streams API."
---
Let's create a stream that monitors all the ERC20 contract transfers where sender is a specific address and the number of coins transferred is over 1000.

:::tip
This stream uses listen to all addresses feature that is available only on Business and Enterprise plans. There could be few ERC20 contracts that don't follow the standards, and they may use a different ABI for transfers. You will use the ABI specific to ERC20 transfers, the one that doesn't have indexed for third parameter.
:::

## Programmatically

```javascript
const ERC20_transfer_ABI = [{
  "anonymous": false,
  "inputs": [
    { "indexed": true, "name": "from", "type": "address" },
    { "indexed": true, "name": "to", "type": "address" },
    { "indexed": false, "name": "value", "type": "uint256" },
  ],
  "name": "transfer",
  "type": "event",
}]; // valid abi of the event

const filter_ERC20 = {  
  "and": [  
    { "eq": ["from", "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5"] },  
    { "gt": ["value", "1000000000"] }, // Example of USDT (6 Decimals)
  ],  
}; // only receive ERC20 contract transfers where sender is a specific address and the number of coins transferred is over 1000

const options = {
  chains: [EvmChain.ETHEREUM], // list of blockchains to monitor
  description: "monitor all ERC20 transfers", // your description
  tag: "ERC20_transfers", // give it a tag
  abi: ERC20_transfer_ABI,
  includeContractLogs: true,
  allAddresses: true,
  topic0: ["Transfer(address,address,uint256)"], // topic of the event
  advancedOptions: [
    {
      topic0: "Transfer(address,address,uint256)",
      filter: filter_ERC20
    },
  ],
  webhookUrl: "https://YOUR_WEBHOOK_URL", // webhook url to receive events,
};

const stream = await Moralis.Streams.add(options);


```

## Via WebUI

1. Create a new Stream
2. Fill out the form
3. Switch on Event Emittance and Add the Abi and select the topic
4. Select `Listen to all addresses` and `Contract interactions (logs)`
5. Add below value to advanced options
6. ```
   [  
     {  
       "topic0": "Transfer(address,address,uint256)",  
       "filter": {  
         "and": [  
           { "eq": ["from", "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5"] },  
           { "gt": ["value", "1000000000"] }   // Example of USDT (6 Decimals)
         ]  
       }  
     }  
   ]
   ```
7. Click on create stream button.
