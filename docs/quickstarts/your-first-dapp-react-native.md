---
title: "React Native"
slug: "your-first-dapp-react-native"
excerpt: "This tutorial will teach you how to set up a React Native dapp that can query blockchain data such as NFTs, tokens, balances, transfers, transactions, and more."
hidden: true
createdAt: "2022-11-30T01:13:08.169Z"
updatedAt: "2022-12-02T02:14:54.478Z"
---
## Introduction

This tutorial shows you how to create a basic React Native dapp and use the Moralis SDK to display on-chain balances. You'll create a balances component and an [Express.js](https://expressjs.com/) API endpoint returning native and ERC20 balances.

## The Steps We Will Take

1. Create a React Native app
2. Set up the Moralis SDK on the server
3. Integrate your app with Moralis 
4. Read any blockchain data from any blockchain

## Prerequisites

1. Follow the [Your First Dapp for Node.js](https://docs.moralis.io/docs/your-first-dapp-nodejs) tutorial

## Create a React Native Dapp

We will follow the [instructions here](https://reactnative.dev/docs/environment-setup) for setting up a React Native project. We will use [Expo](https://expo.dev/), a framework for creating React Native apps faster.

1. Create a React Native (Expo) project:

```shell
npx create-expo-app your-first-dapp-react-native
cd your-first-dapp-react-native
```



2. Install the required dependencies:
   - `axios` - to make requests to our server

```shell npm
npm install axios
```



3. Run your app:

```shell npm
npm start # you can also use: npx expo start
```



4. Scan the QR code in your terminal with the Expo app (Android) or the Camera app (iOS). You should see an output similar to this:

```
Open up App.js to start working on your app!
```



Whenever you make changes to your app's code, it will update automatically on your phone.

We will now create our `balances` page which will make a request to our `balances` API (to be set up later), store the results in state (`useState`), and display it.

5. Open `App.js` - we will use this default component (and some styles) to display our balances. Replace the contents with:

```javascript App.js
import { useEffect, useState } from 'react';

import axios from 'axios';

import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';

export default function App() {
  const [balances, setBalances] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    axios('http://localhost:3000/balances').then(
      ({ data }) => {
        setBalances(data);
      }
    );
  }, []);

  const styles = StyleSheet.create({
    backgroundView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      opacity: modalVisible ? 0.5 : 1,
      backgroundColor: modalVisible ? 'black' : 'white',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.backgroundView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Wallet: {balances.address}</Text>
            <Text style={styles.modalText}>
              Native Balance: {balances.nativeBalance} ETH
            </Text>
            <Text style={styles.modalText}>
              Token Balances: {balances.tokenBalances}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Balances</Text>
      </Pressable>
    </View>
  );
}

```



## Set up the Server

[Follow this tutorial](https://docs.moralis.io/docs/your-first-dapp-nodejs) for setting up your server. We will need a server to use the Moralis API without needing to expose our API key on the client side.

1. Replace the contents of `index.js` with the following (make sure to add your own API key):

```javascript
const Moralis = require('moralis').default;

const express = require('express');

const { EvmChain } = require('@moralisweb3/evm-utils');

const app = express();
const port = 3000;

const MORALIS_API_KEY = 'replace_me';
const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

app.get('/balances', async (req, res) => {
  try {
    // Promise.all() for receiving data async from two endpoints
    const [nativeBalance, tokenBalances] = await Promise.all([
      Moralis.EvmApi.balance.getNativeBalance({
        chain: EvmChain.ETHEREUM,
        address,
      }),
      Moralis.EvmApi.token.getWalletTokenBalances({
        chain: EvmChain.ETHEREUM,
        address,
      }),
    ]);
    res.status(200).json({
      // formatting the output
      address,
      nativeBalance: nativeBalance.result.balance.ether,
      tokenBalances: tokenBalances.result.map((token) => token.display()),
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();

```



As we are running our app on a physical device and not on `localhost`, we can use [ngrok](https://ngrok.com/) to expose our server outside our local network.

2. [Install ngrok](https://ngrok.com/download) and run:

```shell
ngrok http 3000
```



3. Go back to App.js and swap out `[`<http://localhost:3000`>](<http://localhost:3000>) with your ngrok.io URL:

```javascript
axios('https://***.ngrok.io/balances').then(
  ({ data }) => {
    setBalances(data);
  }
);
```



4. Return to your app and tap "Show Balances" to see the results:

![](https://files.readme.io/c5093dc-1.jpg)

![](https://files.readme.io/271a38a-2.jpg)