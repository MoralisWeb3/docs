---
title: "Track Smart Contract Events in Real-Time with Web3"
slug: "/streams-api/evm/tutorials/how-to-listen-all-events-from-a-contract-factory"
description: "Learn how to listen to all events from a contract factory using Moralis Streams API."
---

Let's create a stream that monitors all the events specific to a contract factory.

:::tip
This stream uses listen to all addresses feature that is available only on Business and Enterprise plans.
:::

:::tipe
You will need an ABI that is used only on your contracts in order to not receive the events from other contracts that use the same ABI.
:::

## Programmatically: How to Listen to event from a contract factory

```javascript
const Contract_Factory_ABI = [{
  "anonymous": false,
  "inputs": [
    { "indexed": true, "name": "from", "type": "address" },
    { "indexed": true, "name": "to", "type": "address" },
    { "indexed": true, "name": "contract", "type": "address" },
  ],
  "name": "factoryEvent",
  "type": "event",
}]; // valid abi of the event

const options = {
  chains: [EvmChain.ETHEREUM], // list of blockchains to monitor
  description: "monitor a contract factory", // your description
  tag: "contract_Factory", // give it a tag
  abi: Contract_Factory_ABI,
  includeContractLogs: true,
  allAddresses: true,
  topic0: ["factoryEvent(address,address,address)"], // topic of the event
  webhookUrl: "https://YOUR_WEBHOOK_URL", // webhook url to receive events,
};

const stream = await Moralis.Streams.add(options);
```

## WebUI: How to Listen to event from a contract factory 

1. Create a new Stream
2. Fill out the form
3. Switch on Event Emittance and Add the Abi and select the topic
4. Select `Listen to all addresses` and `Contract interactions (logs)`
5. Click on create stream button.
