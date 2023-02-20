---
title: "Quickstart Python"
slug: "../quickstart-python"
description: "This tutorial will teach you how to set up a server-side dapp that can query blockchain data, such as NFTs, tokens, balances, transfers, transactions, etc., from any Python application. \n\nThis tutorial dapp works on almost any blockchain, including Ethereum, Polygon, BNB Chain, Avalanche, Cronos, and many more!"
---
## Introduction
This tutorial will teach you how to set up a server-side dapp that can query blockchain data, such as NFTs, tokens, balances, transfers, transactions, etc., from any Python application. \n\nThis tutorial dapp works on almost any blockchain, including Ethereum, Polygon, BNB Chain, Avalanche, Cronos, and many more!

## Prerequisites

1. Create a [Moralis account](/web3-data-api/get-your-api-key) and get your API key
2. Install and set up your editor of choice
3. Install Python 3

## Your First API Call With Python

To install the Moralis Python SDK, use the following command:

```powershell bash
pip install moralis
```



A simple example of how to call the web3_api_version API function:

```python Python
import moralis

print(moralis.utils.web3_api_version(api_key='API_KEY_HERE'))

# it prints {'version': '0.0.53'}
```



### How to Get NFT Metadata With Python

```python
import json
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB", 
    "token_id": "3931", 
    "chain": "eth", 
    "format": "decimal", 
    "normalizeMetadata": True, 
}

result = evm_api.nft.get_nft_metadata(
    api_key=api_key,
    params=params,
)

print(json.dumps(result, indent=4))

# result
"""
{
    "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
    "token_id": "3931",
    "amount": "1",
    "owner_of": "0x1cf2b8c64aed32bff2ae80e701681316d3212afd",
    "token_hash": "3c86855c82470edd82df190019e83f16",
    "block_number_minted": "5754322",
    "block_number": "13868997",
    "transfer_index": [
        13868997,
        30,
        36,
        0
    ],
    "contract_type": null,
    "name": "CRYPTOPUNKS",
    "symbol": "\u03fe",
    "token_uri": "https://www.larvalabs.com/cryptopunks/details/3931",
    "metadata": "{\"image\":\"https://www.larvalabs.com/cryptopunks/cryptopunk3931.webp\",\"name\":\"CryptoPunk 3931\",\"attributes\":[\"Vampire Hair\",\"Goat\"],\"description\":\"Male\"}",
    "last_token_uri_sync": null,
    "last_metadata_sync": "2022-05-12T18:00:22.340Z",
    "minter_address": "0xc352b534e8b987e036a93539fd6897f53488e56a",
    "normalized_metadata": {
        "name": "CryptoPunk 3931",
        "description": "Male",
        "animation_url": null,
        "external_link": null,
        "image": "https://www.larvalabs.com/cryptopunks/cryptopunk3931.webp",
        "attributes": [
            {
                "trait_type": "type",
                "value": "Male",
                "display_type": null,
                "max_value": null,
                "trait_count": 0,
                "order": null
            },
            {
                "trait_type": "attribute",
                "value": "Vampire Hair",
                "display_type": null,
                "max_value": null,
                "trait_count": 0,
                "order": null
            },
            {
                "trait_type": "attribute",
                "value": "Goat",
                "display_type": null,
                "max_value": null,
                "trait_count": 0,
                "order": null
            }
        ]
    }
}
"""
```



### How to Get a Native Balance on Ethereum

```python
from moralis import evm_api

api_key = "YOUR_API_KEY"

params = {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045", 
    "chain": "eth", 
}

result = evm_api.balance.get_native_balance(
    api_key=api_key,
    params=params,
)

print(result)


# prints {'balance': '319973658297093018740'}
```



### How to Get a Native Balance on Solana

```python
from moralis import sol_api

api_key = "YOUR_API_KEY"

params = {
    "address": "BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen", 
    "network": "mainnet", 
}

result = sol_api.account.balance(
    api_key=api_key,
    params=params,
)

print(result)

# prints {'lamports': '0', 'solana': '0'}
```



### How to Get All NFTs Owned by an Address

```python Python
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045", 
    "chain": "eth", 
    "format": "decimal", 
    "limit": 100, 
    "token_addresses": [], 
    "cursor": "", 
    "normalizeMetadata": True, 
}

result = evm_api.nft.get_wallet_nfts(
    api_key=api_key,
    params=params,
)

# converting it to json because of unicode characters
print(json.dumps(result, indent=4))
```



### How to Get All NFTs for an Address Cross-Chain

```python Python
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045", 
    "chain": "eth", 
    "format": "decimal", 
    "limit": 1, 
    "token_addresses": [], 
    "cursor": "", 
    "normalizeMetadata": True, 
}

result = []
for chain in ('eth', 'bsc', 'polygon'):
	params['chain'] = chain
	result += [evm_api.nft.get_wallet_nfts(
    api_key=api_key,
    params=params,
	)]

# converting it to json because of unicode characters
print(json.dumps(result, indent=4))
```



### How to Get All NFTs From a Collection

```python Python
from moralis import evm_api
import json

api_key = "YOUR_API_KEY"
params = {
    "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB", 
    "chain": "eth", 
    "format": "decimal", 
    "limit": 100, 
    # "totalRanges": 0, 
    # "range": 0, 
    "cursor": "", 
    "normalizeMetadata": True, 
}

result = evm_api.nft.get_contract_nfts(
    api_key=api_key,
    params=params,
)

# converting it to json because of unicode characters
print(json.dumps(result, indent=4))
```



### How to Get All NFT Collections Owned by an Address Using Python

```python Python
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045", 
    "chain": "eth", 
    "limit": 100, 
    "cursor": "", 
}

result = evm_api.nft.get_wallet_nft_collections(
    api_key=api_key,
    params=params,
)

print(result)
```

### How to Get NFT Owners by Contract Address Using Python

```python Python
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
    "address": "0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782", 
    "chain": "eth", 
    "format": "decimal", 
    "limit": 100, 
    "cursor": "", 
    "normalizeMetadata": True, 
}

result = evm_api.nft.get_nft_owners(
    api_key=api_key,
    params=params,
)

print(result)
```

## Creating a Stream Using Python SDK

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
      "or": [  
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

You can check here the syntax for all the other functions from the Python SDK: <https://moralisweb3.github.io/Moralis-Python-SDK/>