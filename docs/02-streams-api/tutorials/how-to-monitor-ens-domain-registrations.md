---
title: "How to monitor ENS Domain Registrations"
slug: "../how-to-monitor-ens-domain-registrations"
description: "Learn how to monitor ENS domain registrations that costs higher than 1 ETH using Moralis Streams API."
---
### Programatically

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```javascript
const ensNameRegisteredAbi = [{  
  "anonymous": false,  
  "inputs": [  
    {  
      "indexed": false,  
      "internalType": "string",  
      "name": "name",  
      "type": "string",  
    },  
    {  
      "indexed": true,  
      "internalType": "bytes32",  
      "name": "label",  
      "type": "bytes32",  
    },  
    {  
      "indexed": true,  
      "internalType": "address",  
      "name": "owner",  
      "type": "address",  
    },  
    {  
      "indexed": false,  
      "internalType": "uint256",  
      "name": "cost",  
      "type": "uint256",  
    },  
    {  
      "indexed": false,  
      "internalType": "uint256",  
      "name": "expires",  
      "type": "uint256",  
    },  
  ],  
  "name": "NameRegistered",  
  "type": "event",  
}]; // valid abi of the event

const filter = {  
  "and": \[  
    { "eq": ["owner", "0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5"] },  
    { "gt": ["cost", "1000000000000000000"] },  
  ],  
}; // only receive registration events if the owner is the address and the cost is higher than 1 ETH

const options = {  
  chains: [EvmChain.ETHEREUM], // Ethereum Name Service so we only monitor Ethereum  
  description: "ENS Name Registrations", // your description  
  tag: "ensRegistrationByBob", // give it a tag  
  abi: ensNameRegisteredAbi,  
  filter,  
  topic0: ["NameRegistered(string,bytes32,address,uint256,uint256)"],  
  includeContractLogs: true,  
  advancedOptions: [  
    {  
      topic0: "NameRegistered(string,bytes32,address,uint256,uint256)",  
      filter,  
      includeNativeTxs: true,  
    },  
  ],  
  webhookUrl: "<https://YOUR_WEBHOOK_URL>  
  
", // webhook url to receive events,  
};

const stream = await Moralis.Streams.add(options);

// Attach the contract address to the stream  
await Moralis.Streams.addAddress({  
  id: stream.id,  
  address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", // ENS Registry address  
});
```
</TabItem>
<TabItem value="py" label="Python">

```python Python
"""
requiremets: moralis python sdk
you can run this command to install it:
pip install moralis
"""

from moralis import streams


webhook_url = 'WEB_HOOK_URL_HERE'
api_key = 'API_KEY_HERE'

abi = [{  
  "anonymous": False,
  "inputs": [  
    {  
      "indexed": False,  
      "internalType": "string",  
      "name": "name",  
      "type": "string",  
    },  
    {  
      "indexed": True,  
      "internalType": "bytes32",  
      "name": "label",  
      "type": "bytes32",  
    },  
    {  
      "indexed": True,  
      "internalType": "address",  
      "name": "owner",  
      "type": "address",  
    },  
    {  
      "indexed": False,  
      "internalType": "uint256",  
      "name": "cost",  
      "type": "uint256",  
    },  
    {  
      "indexed": False,  
      "internalType": "uint256",  
      "name": "expires",  
      "type": "uint256",  
    },  
  ],  
  "name": "NameRegistered",  
  "type": "event",  
}]

advanced_options = [  
  {  
    "topic0": "NameRegistered(string,bytes32,address,uint256,uint256)",  
    "filter": {  
      "and": [  
        { "eq": ["owner", "0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5"] },  
        { "gt": ["cost", "1000000000000000000"] }  
      ]  
    }  
  }  
]

body = {
    "webhookUrl": webhook_url,
    "description": "ENS Name Registrations",
    "tag": "ensRegistrationByBob", 
    "topic0": ["NameRegistered(string,bytes32,address,uint256,uint256)"], 
    "allAddresses": False, 
    "includeNativeTxs": True, 
    "includeContractLogs": True, 
    "includeInternalTxs": False, 
    "abi": abi, 
    "advancedOptions": advanced_options, 
    "chainIds": ["0x1"], 
}

result = streams.evm.create_stream(
    api_key=api_key,
    body=body,
)

print(result)

# Attach the contract address to the stream 
params = {
    "id": result["id"], 
}
body = {
    "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", 
}

result = streams.evm.add_address_to_stream(
    api_key=api_key,
    params=params,
    body=body,
)

print(result)
```
</TabItem>
</Tabs>


### Via WebUI

1. Create a new Stream
2. Fill out the form
3. Switch on Event Emittance and Add the Abi and select the topic
4. Add below value to advanced options

```json
[  
  {  
    "topic0": "NameRegistered(string,bytes32,address,uint256,uint256)",  
    "filter": {  
      "and": [  
        { "eq": ["owner", "0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5"] },  
        { "gt": ["cost", "1000000000000000000"] }  
      ]  
    }  
  }  
]
```



5. Click on create stream button.