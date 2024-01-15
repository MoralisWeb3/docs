---
title: "How to Fetch Web3 data with Flutter"
slug: "flutter"
description: "Step-by-step guide to retrieving Web3 data using Dart, Flutter, and the Moralis NFT API."
sidebar_label: "Flutter"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

This tutorial integrates a Flutter frontend with a Flask backend Using the Moralis API for getting NFT data.

## Video Tutorial: Get any Wallet NFTs using Flutter and Moralis API

For a visual guide, check out our YouTube tutorial:

https://www.youtube.com/watch?v=7tb47eTkshk


## NFT Application Structure

The application composed of:

* A backend server
* A login page
* An NFT list component
* A main application file

### Backend Server

The [Flask-based backend server](https://github.com/MoralisWeb3/youtube-tutorials/blob/main/video_flutter_nfts/backend/app.py) serves as the bridge between the Moralis API endpoints and the Flutter frontend.

### NFT List Component

The [NFT List Component](https://github.com/MoralisWeb3/youtube-tutorials/blob/main/video_flutter_nfts/lib/components/list_nfts.dart)) in the Flutter app takes user's blockchain `address` and `chain` as parameters for fetching NFT data then it displays a list of NFTs associated with the user's account where each NFT is displayed in a `Card`, showing its name, image, and description.

### Login Page

The [Login Page](https://github.com/MoralisWeb3/youtube-tutorials/blob/main/video_flutter_nfts/lib/pages/login_page.dart) manages user authentication using WalletConnect.

### Main Application File

The [Main Application File](https://github.com/MoralisWeb3/youtube-tutorials/blob/main/video_flutter_nfts/lib/main.dart) is the entry point of the Flutter application, setting the foundation for the app's routing and UI structure.

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Make HTTP Requests to the Moralis REST API

You can find a detailed guide in Flutter's official documentation: [Fetch data from the internet](https://docs.flutter.dev/cookbook/networking/fetch-data).

## Step 3: Get any Wallet NFTs

Follow the tutorial [How to get all the NFTs owned by an address](/web3-data-api/evm/how-to-get-all-nfts-owned-by-an-address).

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
