---
title: "How to Build ZapperFi"
slug: "how-to-build-zapperfi"
---
## Introduction

This tutorial teaches you how to build a Zapper-like application where you can check Token Balance, Transaction History and NFT balances.

## Prerequisites

Before getting started, make sure you have the following ready:

- NodeJS v14+
- A package manager: NPM, Yarn, PNPM

## Step 1: Backend setup

### Initial setup

1. Inside your project root directory, create a new folder that will hold our express backend.

```shell
mkdir backend
cd backend
```



2. Install the required dependencies.

```shell npm
npm install moralis express cors dotenv nodemon
```
```shell yarn
yarn add moralis express cors dotenv nodemon
```
```shell pnpm
pnpm install moralis express cors dotenv nodemon
```



3. Create a new file with a basic express app inside`backend/index.js`

```javascript index.js
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```



4. Add our start script inside `backend/package.json`

```json package.json
{
  "name": "zapper",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "moralis": "^2.4.0",
    "nodemon": "^2.0.19"
  }
}
```



5. Create a `.env` file and add your Moralis API Key inside. You can get your own key following this tutorial [How to get an API Key](/docs/quickstart).

```typescript .env
MORALIS_API_KEY = YOUR_KEY_HERE
```



6. Now in your `backend/index.js` you can add Moralis.

```Text index.js
const Moralis = require("moralis").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 8080;

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```



### Setup our custom endpoints.

We can now start adding our endpoints which will be called from our frontend app.

1. Get the native balance.

```javascript index.js
//GET AMOUNT AND VALUE OF NATIVE TOKENS

app.get("/nativeBalance", async (req, res) => {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const { address, chain } = req.query;

    const response = await Moralis.EvmApi.balance.getNativeBalance({
      address: address,
      chain: chain,
    });

    const nativeBalance = response.data;

    let nativeCurrency;
    if (chain === "0x1") {
      nativeCurrency = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    } else if (chain === "0x89") {
      nativeCurrency = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
    }

    const nativePrice = await Moralis.EvmApi.token.getTokenPrice({
      address: nativeCurrency, //WETH Contract
      chain: chain,
    });

    nativeBalance.usd = nativePrice.data.usdPrice;

    res.send(nativeBalance);
  } catch (e) {
    res.send(e);
  }
});
```



2. Get ERC20 balances and prices.

```Text index.js
//GET AMOUNT AND VALUE OF ERC20 TOKENS

app.get("/tokenBalances", async (req, res) => {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const { address, chain } = req.query;

    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      address: address,
      chain: chain,
    });

    let tokens = response.data;
    let legitTokens = [];
    for (let i = 0; i < tokens.length; i++) {
      try {
        const priceResponse = await Moralis.EvmApi.token.getTokenPrice({
          address: tokens[i].token_address,
          chain: chain,
        });
        if (priceResponse.data.usdPrice > 0.01) {
          tokens[i].usd = priceResponse.data.usdPrice;
          legitTokens.push(tokens[i]);
        } else {
          console.log("💩 coin");
        }
      } catch (e) {
        console.log(e);
      }
    }


    res.send(legitTokens);
  } catch (e) {
    res.send(e);
  }
});
```



3. Get NFTs.

```Text index.js
//GET Users NFT's

app.get("/nftBalance", async (req, res) => {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const { address, chain } = req.query;

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address: address,
      chain: chain,
    });

    const userNFTs = response.data;

    res.send(userNFTs);
  } catch (e) {
    res.send(e);
  }
});
```



4. Get historical ERC20 transfers.

```Text index.js
//GET USERS TOKEN TRANSFERS

app.get("/tokenTransfers", async (req, res) => {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const { address, chain } = req.query;

    const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
      address: address,
      chain: chain,
    });
    
    const userTrans = response.data.result;

    let userTransDetails = [];
    
    for (let i = 0; i < userTrans.length; i++) {
      
      try {
        const metaResponse = await Moralis.EvmApi.token.getTokenMetadata({
          addresses: [userTrans[i].address],
          chain: chain,
        });
        if (metaResponse.data) {
          userTrans[i].decimals = metaResponse.data[0].decimals;
          userTrans[i].symbol = metaResponse.data[0].symbol;
          userTransDetails.push(userTrans[i]);
        } else {
          console.log("no details for coin");
        }
      } catch (e) {
        console.log(e);
      }

    }



    res.send(userTransDetails);
  } catch (e) {
    res.send(e);
  }
});
```



### Start the express app.

```shell npm
npm run start
```
```shell yarn
yarn run start
```
```shell pnpm
pnpm start
```



## Step 2: Frontend setup

### React app setup

We will set up a react frontend and start building our UI.

To style our UI we will be using [Web3uikit](https://github.com/web3ui/web3uikit).

1. Go back to your root directory and create a React application.

```
npx create-react-app frontend
```
```
yarn create react-app frontend
```
```shell pnpm
pnpm create react-app frontend
```



2. Go inside the frontend directory using `cd frontend` and install the required dependencies.

```shell npm
npm install axios @web3uikit/core @web3uikit/web3 @web3uikit/icons
```
```Text yarn
yarn add axios @web3uikit/core @web3uikit/web3 @web3uikit/icons
```
```Text pnpm
pnpm add axios @web3uikit/core @web3uikit/web3 @web3uikit/icons
```



3. Inside the`src` directory, create a new folder that will hold React components. We will call it components.

![](/img/content/65f3f8a-image.png)

### Creating custom components

Inside the components folder, we will create multiple components which will be used inside our React app.

1. NativeTokens.js

```Text NativeTokens.js
import React from "react";
import axios from "axios";
import { Table } from "@web3uikit/core";
import {Reload} from '@web3uikit/icons'


function NativeTokens({
  wallet,
  chain,
  nativeBalance,
  setNativeBalance,
  nativeValue,
  setNativeValue,
}) {


  async function getNativeBalance() {
    const response = await axios.get("http://localhost:8080/nativeBalance", {
      params: {
        address: wallet,
        chain: chain,
      },
    });
    if (response.data.balance && response.data.usd) {
      setNativeBalance((Number(response.data.balance) / 1e18).toFixed(3));
      setNativeValue(
        (
          (Number(response.data.balance) / 1e18) *
          Number(response.data.usd)
        ).toFixed(2)
      );
    }
  }

  return (
    <>
      <div className="tabHeading">Native Balance <Reload onClick={getNativeBalance}/></div>
      {(nativeBalance >0 && nativeValue >0) && 
      <Table
      pageSize={1}
      noPagination={true}
      style={{width:"900px"}}
      columnsConfig="300px 300px 250px"
      data={[["Native", nativeBalance, `$${nativeValue}`]]}
      header={[
        <span>Currency</span>,
        <span>Balance</span>,
        <span>Value</span>,
      ]}
    />
      }
      
    </>
  );
}

export default NativeTokens;
```



2. Nfts.js

```Text Nfts.js
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Reload } from "@web3uikit/icons";
import { Input } from "@web3uikit/core"

function Nfts({ chain, wallet, filteredNfts, setFilteredNfts, nfts, setNfts }) {
  const [nameFilter, setNameFilter] = useState("");
  const [idFilter, setIdFilter] = useState("");

  async function getUserNfts() {
    const response = await axios.get("http://localhost:8080/nftBalance", {
      params: {
        address: wallet,
        chain: chain,
      },
    });

    if (response.data.result) {
      nftProcessing(response.data.result);
    }
  }

  function nftProcessing(t) {
    for (let i = 0; i < t.length; i++) {
      let meta = JSON.parse(t[i].metadata);
      if (meta && meta.image) {
        if (meta.image.includes(".")) {
          t[i].image = meta.image;
        } else {
          t[i].image = "https://ipfs.moralis.io:2053/ipfs/" + meta.image;
        }
      }
    }
    setNfts(t);
    setFilteredNfts(t);
  }

  useEffect(() => {
    if (idFilter === "" && nameFilter === "") {
      return setFilteredNfts(nfts);
    }

    let filNfts = [];

    for (let i = 0; i < nfts.length; i++) {
      if (
        nfts[i].name.toLowerCase().includes(nameFilter) &&
        idFilter.length === 0
      ) {
        filNfts.push(nfts[i]);
      } else if (
        nfts[i].token_id.includes(idFilter) &&
        nameFilter.length === 0
      ) {
        filNfts.push(nfts[i]);
      } else if (
        nfts[i].token_id.includes(idFilter) &&
        nfts[i].name.toLowerCase().includes(nameFilter)
      ) {
        filNfts.push(nfts[i]);
      }
    }

    setFilteredNfts(filNfts);
  }, [nameFilter, idFilter]);

  return (
    <>
      <div className="tabHeading">
        NFT Portfolio <Reload onClick={getUserNfts} />
      </div>
      <div className= "filters">
      <Input
          id="NameF"
          label="Name Filter"
          labelBgColor="rgb(33, 33, 38)"
          value={nameFilter}
          style={{}}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <Input
          id="IdF"
          label="Id Filter"
          labelBgColor="rgb(33, 33, 38)"
          value={idFilter}
          style={{}}
          onChange={(e) => setIdFilter(e.target.value)}
        />
        </div>
        <div className="nftList">
        {filteredNfts.length > 0 &&
        
          filteredNfts.map((e) => {
            return (
              <>
                <div className="nftInfo">
                {e.image && <img src={e.image} width={200} />}
                
                <div>Name: {e.name}, </div>
                <div>(ID: {e.token_id.slice(0,5)})</div>
                </div>
              </>
            );
          })
          }
          </div>
      
    </>
  );
}

export default Nfts;
```



3. PortfolioValue.js

```Text PortfolioValue.js
import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

function PortfolioValue({ tokens, nativeValue }) {
  const [totalValue, setTotalValue] = useState(0);


  useEffect(() => {
    let val = 0;
    for (let i = 0; i < tokens.length; i++) {
      val = val + Number(tokens[i].val);
    }
    val = val + Number(nativeValue);

    setTotalValue(val.toFixed(2));
  }, [nativeValue, tokens]);

  return (
    <>
    <div className="totalValue">
      <h3>Portfolio Total Value</h3>
      <h2>
       ${totalValue}
      </h2>
    </div>
    </>
  );
}

export default PortfolioValue;
```



4. Tokens.js

```Text Token.js
import React from "react";
import axios from "axios";
import { Table } from "@web3uikit/core";
import { Reload } from "@web3uikit/icons";

function Tokens({ wallet, chain, tokens, setTokens }) {

  async function getTokenBalances() {
    const response = await axios.get("http://localhost:8080/tokenBalances", {
      params: {
        address: wallet,
        chain: chain,
      },
    });

    if (response.data) {
      tokenProcessing(response.data);
    }
  }

  function tokenProcessing(t) {

    
    for (let i = 0; i < t.length; i++) {
      t[i].bal = (Number(t[i].balance) / Number(`1E${t[i].decimals}`)).toFixed(3); //1E18
      t[i].val = ((Number(t[i].balance) / Number(`1E${t[i].decimals}`)) *Number(t[i].usd)).toFixed(2);
    }

    setTokens(t);

    
  }

  return (
    <>
      <div className="tabHeading">ERC20 Tokens <Reload onClick={getTokenBalances}/></div>

      {tokens.length > 0 && (
        <Table
          pageSize={6}
          noPagination={true}
          style={{ width: "900px" }}
          columnsConfig="300px 300px 250px"
          data={tokens.map((e) => [e.symbol, e.bal, `$${e.val}`] )}
          header={[
            <span>Currency</span>,
            <span>Balance</span>,
            <span>Value</span>,
          ]}
        />
      )}
    </>
  );
}

export default Tokens;
```



5. TransferHistory.js

```Text TransferHistory.js
import React from "react";
import axios from "axios";
import { Reload } from "@web3uikit/icons";
import { Table } from "@web3uikit/core";

function TransferHistory({ chain, wallet, transfers, setTransfers }) {
  async function getTokenTransfers() {
    const response = await axios.get("http://localhost:8080/tokenTransfers", {
      params: {
        address: wallet,
        chain: chain,
      },
    });

    if (response.data) {
      setTransfers(response.data);
      console.log(response.data);
    }
  }


  return (
    <>
      <div className="tabHeading">
        Tansfer History <Reload onClick={getTokenTransfers} />
      </div>
      <div>
        {transfers.length > 0 && (
          <Table
            pageSize={8}
            noPagination={false}
            style={{ width: "90vw" }}
            columnsConfig="16vw 18vw 18vw 18vw 16vw"
            data={transfers.map((e) => [
              e.symbol,
              (Number(e.value) / Number(`1e${e.decimals}`)).toFixed(3),
              `${e.from_address.slice(0, 4)}...${e.from_address.slice(38)}`,
              `${e.to_address.slice(0, 4)}...${e.to_address.slice(38)}`,
              e.block_timestamp.slice(0,10),
            ])}
            header={[
              <span>Token</span>,
              <span>Amount</span>,
              <span>From</span>,
              <span>To</span>,
              <span>Date</span>,
            ]}
          />
        )}
      </div>
    </>
  );
}

export default TransferHistory;
```



6. WalletInputs.js

```Text WalletInputs.js
import React from "react";
import "../App.css";
import {Input, Select, CryptoLogos} from '@web3uikit/core'

function WalletInputs({chain, wallet, setChain, setWallet}) {
  return (
    <>
    <div className="header">
      <div className="title">
        <svg width="40" height="40" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="logo_exterior" d="M500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500C388.071 500 500 388.071 500 250Z" fill="#784FFE"></path><path id="logo_interior" fill-rule="evenodd" clip-rule="evenodd" d="M154.338 187.869L330.605 187L288.404 250.6L388 250.118L345.792 312.652L168.382 313.787L211.25 250.633L112 250.595L154.338 187.869Z" fill="white"></path></svg>
        <h1>Zapper</h1>
      </div>
      <div className="walletInputs">
        <Input
          id="Wallet"
          label="Wallet Address"
          labelBgColor="rgb(33, 33, 38)"
          value={wallet}
          style={{height: "50px"}}
          onChange={(e) => setWallet(e.target.value)}
        />
        <Select
          defaultOptionIndex={0}
          id="Chain"
          onChange={(e) => setChain(e.value)}
          options={[
          {
            id: 'eth',
            label: 'Ethereum',
            value: "0x1",
            prefix: <CryptoLogos chain="ethereum"/>
          },
          {
            id: 'matic',
            label: 'Polygon',
            value: "0x89",
            prefix: <CryptoLogos chain="polygon"/>
          },
          ]}
        />
      </div>
    </div>
    </>
  );
}

export default WalletInputs;
```



### Import our components

Now we have to import everything inside `App.js`

```Text App.js
import "./App.css";
import { useState } from "react";
import NativeTokens from "./components/NativeTokens";
import Tokens from "./components/Tokens";
import TransferHistory from "./components/TransferHistory";
import Nfts from "./components/Nfts";
import WalletInputs from "./components/WalletInputs";
import PortfolioValue from "./components/PortfolioValue";
import { Avatar, TabList, Tab } from "@web3uikit/core";

function App() {
  const [wallet, setWallet] = useState("");
  const [chain, setChain] = useState("0x1");
  const [nativeBalance, setNativeBalance] = useState(0);
  const [nativeValue, setNativeValue] = useState(0);
  const [tokens, setTokens] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [transfers, setTransfers] = useState([]);


  return (
    <div className="App">
      <WalletInputs
        chain={chain}
        setChain={setChain}
        wallet={wallet}
        setWallet={setWallet}
      />
      <div className="content">
        <div className="walletInfo">
          {wallet.length === 42 && (
            <>
              <div>
                <Avatar isRounded size={130} theme="image" />
                <h2>{`${wallet.slice(0, 6)}...${wallet.slice(36)}`}</h2>
              </div>
              <PortfolioValue
                nativeValue={nativeValue}
                tokens={tokens}
              />
            </>
          )}
        </div>

        <TabList>
          <Tab tabKey={1} tabName={"Tokens"}>
            <NativeTokens
              wallet={wallet}
              chain={chain}
              nativeBalance={nativeBalance}
              setNativeBalance={setNativeBalance}
              nativeValue={nativeValue}
              setNativeValue={setNativeValue}
            />
            <Tokens
              wallet={wallet}
              chain={chain}
              tokens={tokens}
              setTokens={setTokens}
            />
          </Tab>
          <Tab tabKey={2} tabName={"Transfers"}>
            <TransferHistory 
              chain={chain} 
              wallet={wallet} 
              transfers={transfers}
              setTransfers={setTransfers}
            />
          </Tab>
          <Tab tabKey={3} tabName={"NFT's"}>
            <Nfts 
              wallet={wallet} 
              chain={chain} 
              nfts={nfts}
              setNfts={setNfts}
              filteredNfts={filteredNfts}
              setFilteredNfts={setFilteredNfts}  
            />
          </Tab>
        </TabList>
      </div>
    </div>
  );
}

export default App;
```



## Step 3: Frontend styling

We will now add the required CSS style for our app.

1. Inside our `src/App.css` add the following styles.

```Text App.css
.App {
  text-align: left;
  min-height: 100vh;
}

.header {
  height: 80px;
  width: calc(100vw - 100px);
  display: flex;
  justify-content: flex-start;
  background-color: rgb(33, 33, 38);
  border-bottom: 1px solid rgb(121, 121, 121);
  padding: 5px 50px;
  align-items: center;
}

.title {
  display: flex;
  height: 60px;
  align-items: center;
  gap: 25px;
}

.walletInputs {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  gap: 25px;
}

.content {
  height: 100%;
  margin: 0;
  padding: 100px;
  background: linear-gradient(180deg, rgba(142, 211, 182, 0.3) 0%, rgba(36,20,0,0) 50%);
}

.walletInfo {
  display: flex;
  justify-content: space-between;
}

.totalValue {
  width: 350px;
  height: 150px;
  padding: 10px 30px; 
  border-radius: 20px;
  background-color: rgba(33, 33, 38, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tabHeading {
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0px;
  align-items: center;
  display: flex;
  gap: 20px;
}

.filters {
  display: flex;
  gap: 20px;
  margin: 30px 0px;
}

.nftInfo {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 5px;
  background-color: rgb(42, 42, 47);
  border-radius: 5px;
  padding: 10px;
}

.nftList {
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;
}
```



2. Inside `src/index.css` add the following:

```Text index.css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(33, 33, 38);
  color: white;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```



## Step 4: Start the app

We can now start our React app and check everything we have built.

1. Run the start script inside the frontend directory.

```Text npm
npm run start
```
```Text yarn
yarn run start
```
```Text pnpm
pnpm start
```



2. You can now access `<http://localhost:3000/`> and should see your app running.

![](/img/content/1d5da92-image.png)

## Youtube Video

https://www.youtube.com/watch?v=C9yA8LcJsIY