---
title: "NFT Image Previews"
slug: "../../automatic-metadata-updates"
description: "All NFTs served through our API include low, medium and high resolution images. Read more about how it works here."
sidebar_position: 5
---

The Moralis NFT API allows for the generation of low, medium, and high-resolution thumbnails for NFT images, improving the user experience by offering optimized image sizes for various use cases. This allows developers to easily integrate faster-loading images into their applications, reducing page load times and enhancing the overall user experience.

### What formats are supported?
We currently support popular image types such as JPG, JPEG, PNG, GIFs, TIFF etc. Currently WEBP and SVG are not supported. In future we plan to add support for wider media types, such as video.

### What endpoints does this affect?
NFT thumbnail previews are added across all endpoints that currently return NFTs today. Media items will be included when the query paramter, `media_items` is set to `true`, across the following endpoints:

* [Get Multiple NFTs](https://docs.moralis.io/web3-data-api/reference/get-multiple-nfts) 
* [Get NFTs by wallet](https://docs.moralis.io/web3-data-api/reference/get-wallet-nfts)
* [Get NFTs by contract](https://docs.moralis.io/web3-data-api/reference/get-contract-nfts)
* [Get NFT owners by contract](https://docs.moralis.io/web3-data-api/reference/get-nft-owners)
* [Get NFT owners by token id](https://docs.moralis.io/web3-data-api/reference/get-nft-token-id-owners)
* [Get NFT metadata](https://docs.moralis.io/web3-data-api/reference/get-nft-metadata)

### Does this cost additional CUs?
Yes, the use of `media_items=true` will increase the cost of that API request by an additional 2 CUs. This is regardless of how many NFTs are returned on that particular request. If no image previews are found or served, then the additional 2 CUs will not be charged.


### I'm using the query parameter, but I'm not receiving any previews, why?
If image previews for an NFT haven't been generated previously, the generation process starts when the NFT is accessed via the API for the first time. The image previews will then be available on subsequent API calls.
