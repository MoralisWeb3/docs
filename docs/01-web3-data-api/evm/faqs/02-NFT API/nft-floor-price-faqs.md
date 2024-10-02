---
title: "NFT Floor Price FAQs"
slug: "/web3-data-api/evm/nft-floor-price-faqs"
sidebar_position: 4
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

# NFT Floor Price FAQs

## What is an NFT floor price?

The NFT floor price represents the lowest price for an NFT listed for sale in a particular collection. It gives a baseline indication of what the cheapest NFT in that collection is currently priced at.

## Which chains are supported for floor price data?

Currently, floor prices are only supported on Ethereum and Base.

## Where do you fetch floor price data from?

We fetch floor prices using data from two primary sources:

- **OpenSea API** (for Ethereum and Base)
- **Magic Eden API**: Magic Eden aggregates floor prices from multiple marketplaces, including OpenSea, Blur, X2Y2, and Magic Eden itself.

## How often is the floor price refreshed?

Floor prices are refreshed every 30 minutes.

## What happens if an NFT collection has not been traded for a while?

If an NFT collection has not been traded for 7 days, we stop updating the floor price. However, once trading resumes, we will start updating the floor price again.

## What happens if I request a floor price for an NFT collection for the first time?

If the NFT collection has never been requested before, the initial request will return a status `202` with the following message:

```json
{
  "message": "This contract is currently being processed. Floor price data will be available shortly. Please try again later."
}
```

Once processed, floor price data will be available for subsequent requests.

## Is historical floor price data automatically back-filled?

No, historical floor price data is not automatically back-filled. There is no way to retrieve historical data through the OpenSea or Magic Eden APIs. We start saving historical prices in 30-minute intervals from the first request received for that collection.

## What intervals can I request for historical floor price data?

You can specify the following intervals for historical/time series data:

- 1d interval: Data is returned every 15 minutes.
- 7d interval: Data is returned hourly.
- 30d interval: Data is returned hourly.
- Greater than 30d intervals: Data is returned daily.

## Can I access the floor price data for an inactive collection?

If a collection has been inactive for more than 7 days, floor price data will no longer be updated until the collection becomes active again. However, previously saved historical data is still accessible.
