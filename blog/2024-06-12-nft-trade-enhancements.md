---
title: "New NFT Trade Endpoints & Enhancements"
slug: "nft-trade-enhancements"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Our NFT Trades API has had a complete overhaul 🤩 As part of this, we've launched two new endpoints, extended our NFT Marketplace coverage, extended our chain coverage, and also enriched all APIs with additional metadata 🚀

### New Endpoints
In addition to our pre-existing [NFT Trades by Collection](/web3-data-api/evm/reference/get-nft-trades?address=0x524cab2ec69124574082676e6f654a18df49a048&chain=eth&marketplace=opensea) endpoint, we've added the following:

- [NFT Trades by Wallet](/web3-data-api/evm/reference/get-nft-trades-by-wallet?address=0xcB1C1FdE09f811B294172696404e88E658659905&chain=eth): allows you to fetch all NFT Trades for a given Wallet address.
- [NFT Trades by Token ID](/web3-data-api/evm/reference/get-nft-trades-by-token?address=0x524cab2ec69124574082676e6f654a18df49a048&token_id=123&chain=eth): allows you to fetch all NFT Trades for a given Token ID/NFT

### Marketplace Coverage
Our NFT Marketplace coverage now includes:

- OpenSea
- Blur
- LooksRare
- X2Y2
- 0xProtocol

With more coming soon 🚀

### Chain Coverage
Our NFT Trades feature is available across the following chains:
- Ethereum
- Polygon
- Binance
- Arbitrum
- Avalanche
- Optimism
- Base

Check out our [NFT Marketplaces page](/web3-data-api/evm/nft-marketplaces) for more detail about which chains support which marketplaces.

### Enhanced Metadata
All of our NFT Trade endpoints have been enriched with the following data:
- **Marketplace Metadata**: Includes marketplace name (Blur, OpenSea, LooksRare, etc.) and logo.
- **Collection Metadata**: Displays collection name and logo for every trade.
- **Token Metadata**: Shows token name, symbol, and logo of the native or ERC20 token used in the sale.
- **Current USD Value**: Displays the current USD value of the NFT/trade based on the native or ERC20 token used.
- **NFT Metadata**: Token/NFT metadata can now be included across all endpoints with `nft_metadata=true`.

Happy building! 🚀
