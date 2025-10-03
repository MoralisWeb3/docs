---
title: "Track NFT transfers"
slug: "/streams-api/evm/tutorials/how-to-listen-all-nft-transfers"
description: "Learn how to listen to all NFT transfers using Moralis Streams API."
---
Lets create a stream that monitors all the NFT contract transfers.

:::tip
This stream uses listen to all addresses feature that is available only on Business and Enterprise plans.
:::

:::tip
There will be few NFT contracts that don't follow the standards like CryptoPunks that have a different ABI and you will not receive webhook requests from those non standard NFT contracts.
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
  topic0: ["Transfer(address,address,uint256)"], // topic of the event
  webhookUrl: "https://YOUR_WEBHOOK_URL", // webhook url to receive events,
};

const stream = await Moralis.Streams.add(options);


```



## Via WebUI

1. Create a new Stream
2. Fill out the form
3. Switch on Event Emittance and Add the Abi and select the topic
4. Select `Listen to all addresses` and `Contract interactions (logs)`
5. Click on create stream button.
