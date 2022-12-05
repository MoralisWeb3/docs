---
title: "Overview"
slug: "streams-api"
excerpt: "Stream blockchain data into your backend via webhooks. Ethereum, Polygon, Avalanche, BNB Chain, Fantom, Cronos, Arbitrum, Ronin and testnets are supported. More networks to be added soon."
hidden: false
metadata: 
  image: 
    0: "https://files.readme.io/e1ac10a-d06bbe5-Moralis-Streams-API.jpeg"
    1: "d06bbe5-Moralis-Streams-API.jpeg"
    2: 1920
    3: 720
    4: "#000000"
createdAt: "2022-10-21T12:33:20.049Z"
updatedAt: "2022-11-30T10:49:55.560Z"
---
![](https://files.readme.io/d06bbe5-Moralis-Streams-API.jpeg)

## What is the Streams API?

With Streams API you can listen for real time events on chain, you can listen for when a new event is emitted in your contract or for when a walltet address does an NFT transfer or a transaction. You can also get notifications for native and internal transactions.  You will receive webhook requests for those events specific to your stream configuration.

![](https://files.readme.io/7626416-mermaid-diagram-2022-11-22-115359.png)

## Streams API features

- Get blockchain events streamed to your backend directly in real-time
- Listen to wallets or contract events, or both with multiple streams 
- Track one address or millions with just one stream, it is up to you 
- Fully customize your streams using filters, you want to only want to listen to transactions over 1000 USDT, no problem  
- Listen for events from all contract addresses
- Add your custom ABI and choose which events you want to listen too   
- and much more... 

## Popular use cases

- Realtime Wallet notifications (monitor when an address sends, receives, stakes, swaps, or burns assets)
- Monitor assets (get notifications when an asset is being sent, received, staked, swapped, or burned)
- In game specific events, for example when a battle starts in your web3 game
- Token sales (get notifications for when someone participates in your token sale)
- Any other smart contract event fires on-chain based on your filters

### Listen to all addresses use cases

- Listen to all NFT contract transfers [tutorial](https://docs.moralis.io/docs/listen-to-all-nft-contract-transfers)
- Listen to all events from new contracts specific to a contract factory [tutorial](https://docs.moralis.io/docs/listen-to-all-events-from-new-contracts-specific-to-a-contract-factory)
- Listen to all NFT contracts transfers where sender is a specific address [tutorial](https://docs.moralis.io/docs/listen-to-all-nft-contracts-transfers-where-sender-is-a-specific-address)
- Listen to all ERC20 contract transfers where sender is a specific address and number of coins transferred is over 1000 [tutorial](https://docs.moralis.io/docs/listen-to-all-erc20-contract-transfers-where-sender-is-a-specific-address-and-number-of-coins-transferred-is-over-1000)

## High reliability

- Moralis guarantees 100% delivery of webhooks
- If your service is down Moralis will retry to send the webhook in intervals
- If your service fails to receive the webhooks you can manually replay 

## Supported chains

| Chain         | Chain Id (HEX) | Internal Transaction Supported | Note                                    | Blocks until confirmed |
| :------------ | :------------- | :----------------------------- | :-------------------------------------- | :--------------------- |
| ETH           | 0x1            | ✅ YES                          |                                         | 12                     |
| GOERLI        | 0x5            | ✅ YES                          |                                         | 12                     |
| SEPOLIA       | 0xaa36a7       | ✅ YES                          |                                         | 12                     |
| BSC           | 0x38           | ✅ YES                          |                                         | 18                     |
| BSC TEST      | 0x61           | ✅ YES                          |                                         | 18                     |
| POLYGON       | 0x89           | ✅ YES                          |                                         | 100                    |
| MUMBAI        | 0x13881        | ✅ YES                          |                                         | 100                    |
| FANTOM TEST   | 0xfa2          | ✅ YES                          |                                         | 100                    |
| FANTOM        | 0xfa           | ✅ YES                          |                                         | 100                    |
| AVAX          | 0xa86a         | ✅ YES                          |                                         | 100                    |
| AVAX TEST     | 0xa869         | ✅ YES                          |                                         | 100                    |
| CRONOS        | 0x19           | ❌ Very soon                    | Planned support within a couple of days | 100                    |
| CRONOS TEST   | 0x152          | ❌ Very soon                    | Planned support within a couple of days | 100                    |
| RONIN         | 0x7e4          | ✅ YES                          | 🔥 NEW                                  |                        |
| ARBITRUM      | 0xa4b1         | ✅ YES                          | 🔥 NEW                                  |                        |
| ARBITRUM TEST | 0x66eed        | ✅ YES                          | 🔥 NEW                                  |                        |
| OPTIMISM      | 0xa            |                                | 🔥 NEW                                  |                        |
| PALM          | 0x2a15c308d    |                                | 🔥 NEW                                  |                        |

## To get started, check the following tutorials:

- [Your First Stream using JS SDK](https://docs.moralis.io/docs/your-first-stream-using-js-sdk)
- [Your First Stream using WebUI](https://docs.moralis.io/docs/using-webui)
- You can also use the [Swagger Interface](https://api.moralis-streams.com/api-docs/) directly.

## How Streams are priced

See [Records and pricing](https://docs.moralis.io/docs/records-and-pricing)

## Learn more advanced applications of Streams

- [Monitor specific NFTs](https://docs.moralis.io/docs/monitor-specific-nfts)
- [Monitor for Burn/Mint Tokens](https://docs.moralis.io/docs/monitor-for-burnmint-tokens-1)
- [Monitor ENS Name Registrations](https://docs.moralis.io/docs/monitor-ens-name-registrations)

## Demos

[Video about how to use Streams API](https://www.youtube.com/watch?v=KL3Sdsu50Jc&ab_channel=MoralisWeb3)

https://www.youtube.com/watch?v=KL3Sdsu50Jc