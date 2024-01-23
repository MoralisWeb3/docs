---
title: "How to Fetch Web3 Data with Flutter"
slug: "flutter"
description: "Step-by-step guide to retrieving Web3 data using Dart, Flutter, and the Moralis NFT API."
sidebar_label: "Flutter"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

This tutorial integrates a Flutter frontend with a Flask backend using the Moralis API to get NFT data.

## Video Tutorial: Get Any Wallet NFTs Using Flutter and the Moralis API

For a visual guide, check out our YouTube tutorial:

https://www.youtube.com/watch?v=7tb47eTkshk


## NFT Application Structure

The application is composed of the following:

* A backend server
* A login page
* An NFT list component
* A main application file

### Backend Server

The [Flask-based backend server](https://github.com/MoralisWeb3/youtube-tutorials/blob/main/video_flutter_nfts/backend/app.py) serves as the bridge between the Moralis API endpoints and the Flutter frontend.

### NFT List Component

The [NFT list component](https://github.com/MoralisWeb3/youtube-tutorials/blob/main/video_flutter_nfts/lib/components/list_nfts.dart) in the Flutter app takes the user's blockchain `address` and `chain` as parameters for fetching NFT data. It then displays a list of NFTs associated with the user's account, where each NFT is displayed in a `Card`, showing its name, image, and description.

### Login Page

The [login page](https://github.com/MoralisWeb3/youtube-tutorials/blob/main/video_flutter_nfts/lib/pages/login_page.dart) manages user authentication using WalletConnect.

### Main Application File

The [main application file](https://github.com/MoralisWeb3/youtube-tutorials/blob/main/video_flutter_nfts/lib/main.dart) is the entry point of the Flutter application, setting the foundation for the app's routing and UI structure.

## Step 1: Set Up Moralis

Read the article, _[Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key)_, and make sure to finish all the steps. Only after that can you go ahead and complete this guide.

## Step 2: Make HTTP Requests to the Moralis REST API

You can find a detailed guide in Flutter's official documentation: _[Fetch data from the internet](https://docs.flutter.dev/cookbook/networking/fetch-data)_.

## Step 3: Get Any Wallet NFTs

Follow our tutorial on [how to get all the NFTs owned by an address](/web3-data-api/evm/how-to-get-all-nfts-owned-by-an-address).

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [forum](https://forum.moralis.io) to get 24/7 developer support.
