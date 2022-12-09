---
title: "Listen to all addresses"
slug: "listen-to-all-addresses"
excerpt: "Monitor All Transactions by a Topic"
---

- Listen to all NFT contract transfers [tutorial](https://docs.moralis.io/docs/listen-to-all-nft-contract-transfers)
- Listen to all events from new contracts specific to a contract factory [tutorial](https://docs.moralis.io/docs/listen-to-all-events-from-new-contracts-specific-to-a-contract-factory)
- Listen to all NFT contracts transfers where sender is a specific address [tutorial](https://docs.moralis.io/docs/listen-to-all-nft-contracts-transfers-where-sender-is-a-specific-address)
- Listen to all ERC20 contract transfers where sender is a specific address and number of coins transferred is over 1000 [tutorial](https://docs.moralis.io/docs/listen-to-all-erc20-contract-transfers-where-sender-is-a-specific-address-and-number-of-coins-transferred-is-over-1000)

Say you have the following topic `Transfer(address,address,uint256)`. You can get every transfer happening on chain by setting the topic to `Transfer(address,address,uint256)` and setting `allAddresses` to `true`. That means you will get all transactions that match this topic. **This is not available in all the plans.**

Observation: You will also have to provide the ABI, and the events will match only that particular ABI and topic. There are cases when different ABIs have the same topic (for example `indexed` field can be different for 2 ABIs and the topic will be the same).

## Example

The following stream will listen to ALL NFT Transfers, without the need to provide the smart contract address

```
{
      "tag": "anyEthNFTTransfer",
      "topic0": [ "Transfer(address,address,uint256)" ],
      "allAddresses": true,
      "includeContractLogs": true,
      "abi": [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      ],
      "chainIds": [ "0x1" ]
    }
```