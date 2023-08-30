---
title: "NFT Image Previews"
slug: "../../nft-image-previews"
description: "All NFTs served through our API include low, medium and high resolution images. Read more about how it works here."
sidebar_position: 5
---

The Moralis NFT API allows for the generation of low, medium, and high-resolution thumbnails for NFT images, improving the user experience by offering optimized image sizes for various use cases. This allows developers to easily integrate faster-loading images into their applications, reducing page load times and enhancing the overall user experience.

### What formats are supported?
We currently support popular image types such as JPG, JPEG, PNG, GIFs, TIFF etc. Currently WEBP and SVG are not supported. In future we plan to add support for wider media types, such as video.

### What endpoints does this affect?
NFT thumbnail previews are added across all endpoints that currently return NFTs today. Media items will be included when the query paramter, `media_items` is set to `true`, across the following endpoints:

* [Get Multiple NFTs](/web3-data-api/evm/reference/get-multiple-nfts) 
* [Get NFTs by wallet](/web3-data-api/evm/reference/get-wallet-nfts)
* [Get NFTs by contract](/web3-data-api/evm/reference/get-contract-nfts)
* [Get NFT owners by contract](/web3-data-api/evm/reference/get-nft-owners)
* [Get NFT owners by token id](/web3-data-api/evm/reference/get-nft-token-id-owners)
* [Get NFT metadata](/web3-data-api/evm/reference/get-nft-metadata)

### Does this cost additional CUs?
Yes, the use of `media_items=true` will increase the cost of that API request by an additional 2 CUs. This is regardless of how many NFTs are returned on that particular request. If no image previews are found or served, then the additional 2 CUs will not be charged.


### I'm using the query parameter, but I'm not receiving any previews, why?
If image previews for an NFT haven't been generated previously, the generation process starts when the NFT is accessed via the API for the very first time. Once processing has been completed, the image previews will then be available on subsequent API calls.

Preview generation can have the following statuses:
- `success` - The NFT preview was created and retrieved successfully.
- `processing` - The NFT preview does not yet exist for this NFT, and it is currently being processed.
- `unsupported_media` - The mime-type of the NFT's media file indicates a type not currently supported.
- `invalid_url` - The 'image' URL from the NFT's metadata is not a valid URL and cannot be processed.
- `host_unavailable` - The 'image' URL from the NFT's metadata returned a HttpCode indicating the host / file is not available.
- `temporarily_unavailable` - The attempt to load / parse the NFT media file failed (usually due to rate limiting) and will be tried again at next request.

Regardless of the preview generation status, in all cases the API will return the `original_media_url`.
