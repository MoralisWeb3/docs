---
title: "Track Specific CryptoPunk NFTs by Token IDs"
slug: "../how-to-monitor-specific-nfts"
description: "Learn how to monitor specific CryptoPunk NFTs Based on an array of Token IDs using Moralis Streams API."
---

Lets create a stream that monitor specific CryptoPunk NFTs based on an array of Token IDs.

## Programmatically

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```javascript
const punkTransferAbi = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "punkIndex", type: "uint256" },
    ],
    name: "PunkTransfer",
    type: "event",
  },
]; // valid abi of the event

const options = {
  chains: [EvmChain.ETHEREUM], // list of blockchains to monitor
  description: "1000 to 1002 cryptopunks", // your description
  tag: "cryptoPunks", // give it a tag
  abi: punkTransferAbi,
  includeContractLogs: true,
  topic0: ["PunkTransfer(address,address,uint256)"], // topic of the event
  advancedOptions: [
    {
      topic0: "PunkTransfer(address,address,uint256)",
      filter: { in: ["punkIndex", ["1000", "1001", "1002"]] }, // only receive transfer events if the token id is 1000/1001/1002
      includeNativeTxs: true,
    },
  ],
  webhookUrl: "https://YOUR_WEBHOOK_URL", // webhook url to receive events,
};

const stream = await Moralis.Streams.add(options);

const { id } = stream.toJSON(); // { id: 'YOUR_STREAM_ID', ...stream }

// Attach the contract address to the stream
await Moralis.Streams.addAddress({
  id,
  address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB", // crypto punks address
});
```

</TabItem>
<TabItem value="py" label="Python">

```python Python
from moralis import streams

api_key = "YOUR_API_KEY"

punkTransferAbi = [{
  "anonymous": false,
  "inputs": [
    { "indexed": true, "name": "from", "type": "address" },
    { "indexed": true, "name": "to", "type": "address" },
    { "indexed": false, "name": "punkIndex", "type": "uint256" },
  ],
  "name": "PunkTransfer",
  "type": "event",
}]; // valid abi of the event

body = {
    "webhookUrl": "https://YOUR_WEBHOOK_URL",
    "description": "1000 to 1002 cryptopunks",
    "tag": "cryptoPunks",
    "topic0": ["PunkTransfer(address,address,uint256)"],
    "includeContractLogs": True,
    "abi": punkTransferAbi,
    "advancedOptions": [
      {
        topic0: "PunkTransfer(address,address,uint256)",
        filter: { "in": ["punkIndex", ["1000", "1001", "1002"]] }, // only receive transfer events if the token id is 1000/1001/1002
        includeNativeTxs: True,
      },
    ],
    "chainIds": ["0x1"],
}

result = streams.evm.create_stream(
    api_key=api_key,
    body=body,
)

print(result)
```

</TabItem>
</Tabs>

## Via WebUI

1. Create a new Stream
2. Fill out the form
3. Switch on Event Emittance and Add the Abi and select the topic
4. Add below value to advanced options

```json
[
  {
    "topic0": "PunkTransfer(address,address,uint256)",
    "filter": { "in": ["punkIndex", ["1000", "1001", "1002"]] }
  }
]
```

5. Click on create stream button.
