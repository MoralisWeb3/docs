---
title: "Monitoring NFT Transfers from Specific Wallet Addresses"
slug: "../how-to-listen-to-all-nft-transfers-sent-from-a-specific-address"
description: "Learn how to listen to all NFT transfers sent from a specific address using Moralis Streams API."
---

Lets create a stream that monitors all the NFT contract transfers from a specific sender address.

:::tip
This stream uses listen to all addresses feature that is available only on Business and Enterprise plans.
There will be few NFT contracts that don't follow the standards like CryptoPunks that have a different ABI and you will not receive webhook requests from those non standard NFT contracts.
:::

:::tip
You will use the ABI specific to NFT transfers, the one that has indexed for tokenId
:::

## Programmatically

```javascript
const NFT_transfer_ABI = [{
  "anonymous": false,
  "inputs": [
    { "indexed": true, "name": "from", "type": "address" },
    { "indexed": true, "name": "to", "type": "address" },
    { "indexed": true, "name": "tokenId", "type": "uint256" },
  ],
  "name": "transfer",
  "type": "event",
}]; // valid abi of the event

const options = {
  chains: [EvmChain.ETHEREUM], // list of blockchains to monitor
  description: "monitor all NFT transfers", // your description
  tag: "NFT_transfers", // give it a tag
  abi: NFT_transfer_ABI,
  includeContractLogs: true,
  allAddresses: true,
  topic0: ["transfer(address,address,uint256)"], // topic of the event
  advancedOptions: [
    {
      topic0: "transfer(address,address,uint256)",
      filter: { "eq": ["from", "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5"] }, // only receive NFT transfer events from this address
    },
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
6. ```json
   [{
         "topic0": "transfer(address,address,uint256)",
         "filter": { "eq": ["from", "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5"] }
   }]
   ```
7. Click on create stream button.
