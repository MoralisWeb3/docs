---
title: "Response Body"
slug: "../response-body"
sidebar_position: 3
---

The body contains the data you are interested in. Logs is in array containing raw events and stream information such as tag and the streamId. The body also contains a chainId, the blocknumber, internal transactions, the abis and a confirmed field that indicates if the block is confirmed.

## How to verify the signature for the received webhook request

In JavaScript or python, you can use this function, for other programming languages you can adapt this code. The secret key is the streams secret which you can find in [setting](https://admin.moralis.io/settings) page.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript
const verifySignature = (req, secret) => {

    const providedSignature = req.headers["x-signature"]
    if(!providedSignature) throw new Error("Signature not provided")
    const generatedSignature= web3.utils.sha3(JSON.stringify(req.body)+secret)
    if(generatedSignature !== providedSignature) throw new Error("Invalid Signature")

}
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python Python
def verify_Signature(req, secret):
    provided_signature = req.headers.get("x-signature")
    if not provided_signature:
        raise TypeError("Signature not provided")

    data = req.data+secret.encode()
    signature = Web3.keccak(text=data.decode()).hex()

    if provided_signature != signature:
        raise ValueError("Invalid Signature")
```

</TabItem>
</Tabs>

## Native transaction

For native transaction you have to set `Native Transactions (txs)` in admin interface when you create or update a Stream. Or you can set `includeNativeTxs` to true if you are using the swagger interface directly or the SDK.

```json
{
   "confirmed":false,
   "chainId":"0x1",
   "abi":[

   ],
   "streamId":"c28d9e2e-ae9d-4fe6-9fc0-5fcde2dcdd17",
   "tag":"native_transactions",
   "retries":0,
   "block":{
      "number":"15988759",
      "hash":"0x3aa07bd98e328db97ec273ce06b3a15fc645931fbd26337fe20c48b274277f76",
      "timestamp":"1668676247"
   },
   "logs":[

   ],
   "txs":[
      {
         "hash":"0xd68700a0e2abd9c041eb236812e4194bf91c8182a2b03065887ab0f33d5c2958",
         "gas":"149200",
         "gasPrice":"13670412399",
         "nonce":"57995",
         "input":"0xf78dc253000000000000000000000000d9408f29026e32852aff8c5c9c8ea834b44b4e1c000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000109fad200000000000000000000000000000000000000000000009ab31572a589a72a11900000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000180000000000000003b6d0340a5c475167f03b1556c054e0da78192cd2779087fcfee7c08",
         "transactionIndex":"52",
         "fromAddress":"0x839d4641f97153b0ff26ab837860c479e2bd0242",
         "toAddress":"0x1111111254eeb25477b68fb85ed929f73a960582",
         "value":"0",
         "type":"2",
         "v":"1",
         "r":"46904304245026065492026869531757792493071866863221741878090753056388581469881",
         "s":"17075445080437932806356212399757328600893345374993510540712828450455909549452",
         "receiptCumulativeGasUsed":"3131649",
         "receiptGasUsed":"113816",
         "receiptContractAddress":null,
         "receiptRoot":null,
         "receiptStatus":"1"
      }
   ],
   "txsInternal":[

   ],
   "erc20Transfers":[

   ],
   "erc20Approvals":[

   ],
   "nftApprovals":{
      "ERC1155":[

      ],
      "ERC721":[

      ]
   },
   "nftTransfers":[

   ]
}
```

## Native transactions and NFTs, ERC20s, Approvals events

For native transactions there is also the option to get automatically the logs/events for NFTs, ERC20s and Approval events. For that you have to select `Native Transactions (txs)` and `Contract interactions (logs)` in admin interface when you create or update a Stream. Or you can set to true `includeContractLogs` and `includeNativeTxs` when using the swagger interface directly or the SDK.

```json
{
   "confirmed":true,
   "chainId":"0x1",
   "abi":[

   ],
   "streamId":"c28d9e2e-ae9d-4fe6-9fc0-5fcde2dcdd17",
   "tag":"native_transactions_with_logs",
   "retries":0,
   "block":{
      "number":"15988780",
      "hash":"0xf40d623518fa16c20614278656e426721820031913fd9c670330d4b2b751d50e",
      "timestamp":"1668676499"
   },
   "logs":[
      {
         "logIndex":"135",
         "transactionHash":"0x59cd370a41c699bdb77a020b3a27735bb7442ace68ec8313040b8b9ee2672244",
         "address":"0x96beaa1316f85fd679ec49e5a63dacc293b044be",
         "data":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
         "topic0":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
         "topic1":"0x0000000000000000000000001748789703159580520cc2ce6d1ba01e7359c44c",
         "topic2":"0x0000000000000000000000001111111254eeb25477b68fb85ed929f73a960582",
         "topic3":null
      }
   ],
   "txs":[
      {
         "hash":"0x0bd4d05cfee0107ac69f7add8e21d66c3e4fd014b7aad595d6336910a6bfee39",
         "gas":"109803",
         "gasPrice":"13481860832",
         "nonce":"291",
         "input":"0x12aa3caf00000000000000000000000053222470cdcfb8081c0e3a50fd106f0d69e63f20000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000053222470cdcfb8081c0e3a50fd106f0d69e63f200000000000000000000000003ec92c9d09403a76bda445ffdfaf6de59717219f00000000000000000000000000000000000000000000000e56d1e2316582742700000000000000000000000000000000000000000000000e53262757bf439a6f0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000006200003c4121c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200042e1a7d4d0000000000000000000000000000000000000000000000000000000000000000e0201111111254eeb25477b68fb85ed929f73a960582000000000000000e56d1e23165827427e26b9977",
         "transactionIndex":"92",
         "fromAddress":"0x3ec92c9d09403a76bda445ffdfaf6de59717219f",
         "toAddress":"0x1111111254eeb25477b68fb85ed929f73a960582",
         "value":"0",
         "type":"2",
         "v":"0",
         "r":"5776335037912114053229884461119750189570811705028494471955321961511802532800",
         "s":"50481622078880425443801093626517935308993319586804232237135731552994210947860",
         "receiptCumulativeGasUsed":"7225224",
         "receiptGasUsed":"70168",
         "receiptContractAddress":null,
         "receiptRoot":null,
         "receiptStatus":"1"
      }
   ],
   "txsInternal":[

   ],
   "erc20Transfers":[

   ],
   "erc20Approvals":[
      {
         "transactionHash":"0x59cd370a41c699bdb77a020b3a27735bb7442ace68ec8313040b8b9ee2672244",
         "logIndex":"135",
         "contract":"0x96beaa1316f85fd679ec49e5a63dacc293b044be",
         "owner":"0x1748789703159580520cc2ce6d1ba01e7359c44c",
         "spender":"0x1111111254eeb25477b68fb85ed929f73a960582",
         "value":"115792089237316195423570985008687907853269984665640564039457584007913129639935",
         "tokenName":"This Is Not Alpha",
         "tokenSymbol":"TINA",
         "tokenDecimals":"18",
         "valueWithDecimals":"1.15792089237316195423570985008687907853269984665640564039457584007913129639935e+59"
      }
   ],
   "nftApprovals":{
      "ERC1155":[

      ],
      "ERC721":[

      ]
   },
   "nftTransfers":[

   ]
}
```

## ERC20 Transfers

The ERC20 transfer data is automatically decoded from the logs and is provided for no additional record cost. The data is included in both the `confirmed: false` and `confirmed: true` payload for valid ERC20 transfers. We provide you with some useful metadata such as `tokenName`, `tokenSymbol` and `tokenDecimals`, in addition to the `to`, `from`, `value`, `transactionHash`, `logIndex` and address of the `contract`.

```json
{
    "confirmed": false,
    "chainId": "0x5",
    "abi": [],
    "streamId": "c4cf9b1a-0cb3-4c79-9ca3-04f11856c555",
    "tag": "ChrisWallet",
    "retries": 0,
    "block": {
        "number": "8037952",
        "hash": "0x607ff512f17f890bf9ee6206e2029cd8530819ab72b2b9161f9b90d18ece8e03",
        "timestamp": "1669667244"
    },
    "logs": [
        {
            "logIndex": "132",
            "transactionHash": "0x1642a3b9b39e63d7fe571e7c22b80a5b059d2647fe4866d3f7105630f822d833",
            "address": "0x0041ebd11f598305d401cc1052df49219630ab79",
            "data": "0x0000000000000000000000000000000000000000000069e10006afc3291c0000",
            "topic0": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "topic1": "0x0000000000000000000000000a46413965858a6ac4ed5184d7643dc055a4fea3",
            "topic2": "0x000000000000000000000000e496601436da37a045d8e88bbd6b2c2e17d8fe33",
            "topic3": null
        }
    ],
    "txs": [
        {
            "hash": "0x1642a3b9b39e63d7fe571e7c22b80a5b059d2647fe4866d3f7105630f822d833",
            "gas": "85359",
            "gasPrice": "6129141152",
            "nonce": "88",
            "input": "0xa9059cbb000000000000000000000000e496601436da37a045d8e88bbd6b2c2e17d8fe330000000000000000000000000000000000000000000069e10006afc3291c0000",
            "transactionIndex": "49",
            "fromAddress": "0x0a46413965858a6ac4ed5184d7643dc055a4fea3",
            "toAddress": "0x0041ebd11f598305d401cc1052df49219630ab79",
            "value": "0",
            "type": "2",
            "v": "1",
            "r": "86947778944630951418310264989677611886333891146913483133255814972120449355054",
            "s": "7019311275916215306620036726907048105130260362064080269753410507440852031640",
            "receiptCumulativeGasUsed": "11882265",
            "receiptGasUsed": "56906",
            "receiptContractAddress": null,
            "receiptRoot": null,
            "receiptStatus": "1"
        }
    ],
    "txsInternal": [],
    "erc20Transfers": [
        {
            "transactionHash": "0x1642a3b9b39e63d7fe571e7c22b80a5b059d2647fe4866d3f7105630f822d833",
            "logIndex": "132",
            "contract": "0x0041ebd11f598305d401cc1052df49219630ab79",
            "from": "0x0a46413965858a6ac4ed5184d7643dc055a4fea3",
            "to": "0xe496601436da37a045d8e88bbd6b2c2e17d8fe33",
            "value": "499999000000000000000000",
            "tokenName": "Example Token",
            "tokenSymbol": "Token",
            "tokenDecimals": "18",
            "valueWithDecimals": "499999"
        }
    ],
    "erc20Approvals": [],
    "nftApprovals": {
        "ERC1155": [],
        "ERC721": []
    },
    "nftTransfers": []
}
```

## NFT Transfers

The NFT transfer data is also automatically decoded from the logs and is provided for no additional record cost, similar to ERC20 Transfers. The NFT data is included in both the `confirmed: false` and `confirmed: true` payload for valid NFT transfers.

We provide you with some useful metadata such as:

- `tokenName`: the name of the NFT
- `tokenSymbol`: the symbol of the NFT (only for [ERC721](https://eips.ethereum.org/EIPS/eip-721))
- `tokenContractType`: the type of the NFT (either [ERC721](https://eips.ethereum.org/EIPS/eip-721) or [ERC1155](https://eips.ethereum.org/EIPS/eip-1155))
- `to`: the receiver address of the NFT transfer
- `from`: the sender address of the NFT transfer
- `amount`: the amount of NFT transferred in the transaction (`1` for [ERC721](https://eips.ethereum.org/EIPS/eip-721))
- `transactionHash`: the transaction hash of the NFT transfer on the blockchain
- `tokenId`: the token ID of the NFT transferred
- `operator`: a third party address that has been approved to manage NFTs owned by `from` address. You can read more about operator in the [EIP1155 standard](https://eips.ethereum.org/EIPS/eip-1155).
- `contract`: the contract address of the NFT transferred



```json
{
    "confirmed": false,
    "chainId": "0x13881",
    "abi": [],
    "streamId": "c4cf9b1a-0cb3-4c79-9ca3-04f11856c555",
    "tag": "ChrisWallet",
    "retries": 0,
    "block": {
        "number": "29381772",
        "hash": "0xdd64099df718e2a439a9805d25a3ab88e943a8c713f2259d9777460d7051572c",
        "timestamp": "1669640635"
    },
    "logs": [
        {
            "logIndex": "72",
            "transactionHash": "0x5ecd6b57593ab2f4f3e39fbb3318a3933e2cf9fdcf5b7ca671fb0fc2ce9dc4b5",
            "address": "0x26b4e79bca1a550ab26a8e533be97c40973b2671",
            "data": "0x",
            "topic0": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "topic1": "0x00000000000000000000000074f64bebb1a9615fc7c2ead9c894b6ffd1803582",
            "topic2": "0x000000000000000000000000e496601436da37a045d8e88bbd6b2c2e17d8fe33",
            "topic3": "0x0000000000000000000000000000000000000000000000000000000000000000"
        }
    ],
    "txs": [],
    "txsInternal": [],
    "erc20Transfers": [],
    "erc20Approvals": [],
    "nftApprovals": {
        "ERC1155": [],
        "ERC721": []
    },
    "nftTransfers": [
        {
            "operator": null,
            "from": "0x74f64bebb1a9615fc7c2ead9c894b6ffd1803582",
            "to": "0xe496601436da37a045d8e88bbd6b2c2e17d8fe33",
            "tokenId": "0",
            "amount": "1",
            "transactionHash": "0x5ecd6b57593ab2f4f3e39fbb3318a3933e2cf9fdcf5b7ca671fb0fc2ce9dc4b5",
            "logIndex": "72",
            "contract": "0x26b4e79bca1a550ab26a8e533be97c40973b2671",
            "tokenName": "Test",
            "tokenSymbol": "SYMBOL",
            "tokenContractType": "ERC721"
        }
    ]
}
```

## Smart contract events only

For smart contract events (logs) you select `Contract interactions (logs)` and `Event Emittance` in admin interface when you create or update a Steam. After that you have to provide an ABI and to select at least a topic from the list of topics from that ABI. If you are using the swagger directly or the SDK you have to set `includeContractLogs` to true and to provide an ABI and topic.

```json
{
   "confirmed":false,
   "chainId":"0x1",
   "abi":[
      {
         "anonymous":false,
         "inputs":[
            {
               "indexed":false,
               "name":"reserve0",
               "type":"uint112"
            },
            {
               "indexed":false,
               "name":"reserve1",
               "type":"uint112"
            }
         ],
         "name":"Sync",
         "type":"event"
      }
   ],
   "streamId":"6378fe38-54c7-4816-8d61-fca8e128e260",
   "tag":"test_events",
   "retries":1,
   "block":{
      "number":"15984246",
      "hash":"0x7f8d8285b572a60f6a14d5f1dcbd40e487ccffd9ec78f8dfbccb49aa191fbb95",
      "timestamp":"1668621827"
   },
   "logs":[
      {
         "logIndex":"320",
         "transactionHash":"0xf1682fa49b83689093b467ac6937785102895fc3ba418624c28d04f9af6e5e2b",
         "address":"0x4cd36d6f32586177e36179a810595a33163a20bf",
         "data":"0x00000000000000000000000000000000000000000000944ad388817e590ab6070000000000000000000000000000000000000000000000000000008a602de18e",
         "topic0":"0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1",
         "topic1":null,
         "topic2":null,
         "topic3":null
      }
   ],
   "txs":[

   ],
   "txsInternal":[

   ],
   "erc20Transfers":[

   ],
   "erc20Approvals":[

   ],
   "nftApprovals":{
      "ERC1155":[

      ],
      "ERC721":[

      ]
   },
   "nftTransfers":[

   ]
}
```

## Internal Transactions

For internal transactions you select `Internal Transactions (txsInternal)` in Admin interface when you create or update a Stream. Or you can set includeInternalTxs to true if you are using the swagger interface directly or the SDK.

```json
{
   "confirmed":false,
   "chainId":"0x1",
   "abi":[

   ],
   "streamId":"c28d9e2e-ae9d-4fe6-9fc0-5fcde2dcdd17",
   "tag":"internal transactions",
   "retries":0,
   "block":{
      "number":"15988462",
      "hash":"0xa4520ca85758374d05c31f6e6869f081997daa6e6b18449d49cfac4558f9e7f8",
      "timestamp":"1668672659"
   },
   "logs":[

   ],
   "txs":[

   ],
   "txsInternal":[
      {
         "from":"0x1111111254eeb25477b68fb85ed929f73a960582",
         "to":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
         "value":"11000000000000000",
         "gas":"117885",
         "transactionHash":"0x0e5c3114c0ee7d29cca17aa0b8e790c4d7d25b4789bd14150f113956b5ce94de"
      }
   ],
   "erc20Transfers":[

   ],
   "erc20Approvals":[

   ],
   "nftApprovals":{
      "ERC1155":[

      ],
      "ERC721":[

      ]
   },
   "nftTransfers":[

   ]
}
```
