---
title: "Automatic Metadata Updates"
slug: "automatic-metadata-updates"
description: "The Moralis NFT API makes working with NFT Metadata easier by supporting automatic refreshes of NFT metadata."
sidebar_position: 3
---

For all collections that have metadata on IPFS we automatically refresh token metadata each time those tokens are requested on any NFT endpoint.

Each time a token is requested, it will be queued for metadata refresh.


### Cool-off period
Refreshing metadata is resource intensive - therefore we have a cool-off period during which the same token can’t be refreshed more than once.

If the `token_uri` points to IPFS - we allow refreshing every 10 minutes for each individual token.
