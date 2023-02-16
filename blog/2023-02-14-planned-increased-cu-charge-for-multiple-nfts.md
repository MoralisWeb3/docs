---
title: "[Notice] Planned CU increase on getMultipleNFTs"
slug: "planned-increased-cu-charge-for-multiple-nfts"
authors:
  name: Reuben Salisbury
---

[Get Multiple NFTs](/web3-data-api/reference/get-multiple-nfts) will soon change to a dynamically priced endpoint.

From 27th February 2023, this endpoint will be [priced dynamically](/web3-data-api/compute-units-cu#dynamic-prices), meaning that the cost of each request will be based upon how many NFTs are requested. The base cost will remain at 5 CUs and each additional NFT will cost an additional 5 CUs.

As an example, if one NFT is requested, then the cost will be 5 CUs. If 10 NFTs are requested, then the cost will be 50 CUs.

[Read more about dynamic pricing](/web3-data-api/compute-units-cu#dynamic-prices)
