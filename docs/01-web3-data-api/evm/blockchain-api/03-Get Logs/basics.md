---
sidebar_position: 0
title: "Get Started with ETH Get Logs Through Moralis: A Comprehensive Guide"
slug: "../../overview"
sidebar_label: "Overview"
---

In the blockchain space, insights into events happening on the Ethereum blockchain are vital, and ETH get logs offer a simplified way to access this wealth of data. One of the premier tools in this endeavor is the Moralis "getContractLogs" endpoint. This article also sheds light on another adept method, the [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) RPC call, providing a comparative analysis with Moralis to help you make an informed decision.

This article is a detailed guide for developers on how to use the Moralis SDK to efficiently retrieve and analyze Ethereum event logs, providing practical JavaScript examples and contrasting Moralis' [getContractLogs](/web3-data-api/evm/reference/get-contract-logs) endpoint with the [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) RPC call.

:::tip
You can learn how to get the logs for a contract using the Moralis Events API by following the article [Get logs for contract](/web3-data-api/evm/how-to-get-the-logs-for-a-contract)
:::

## The Gateway to Ethereum Events with eth_getlogs

ETH get logs are pivotal in the blockchain space, offering developers a powerful tool to monitor and analyze Ethereum blockchain events. As we explore further, we will understand the functions and advantages of this tool, and the comparative edge Moralis provides.

Ethereum event logs are stored in transaction receipts, capturing essential details such as gas used, transaction status, and more. Understanding the dynamics of storage enables us to explore how to efficiently retrieve this information using Moralis and other methods like `eth_getLogs`.

## Unveiling the Efficiency of Moralis' getContractLogs Endpoint

The [getContractLogs](/web3-data-api/evm/reference/get-contract-logs) endpoint from Moralis stands as a hallmark of convenience, offering an effective way to access ETH get logs. Before diving into Moralis, let's comprehend how it fares against `eth_getLogs`.

### Comparative Analysis with eth_getLogs

The `eth_getLogs` RPC call, akin to Moralis, allows fetching logs through filter objects which encapsulate parameters like fromBlock, toBlock, and address to define the range and source of logs. While potent, it entails a more detailed setup with JSON RPC calls, which might become intricate compared to the user-friendly single API call facilitated by Moralis. The setup for `eth_getLogs` involves parameter settings as illustrated:

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"topics":["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]}],"id":74}'
```

It is essential to evaluate the comprehensive filtration options rendered by `eth_getLogs` against the simplified, user-friendly approach of Moralis, aligning with the project's necessities.

### A Practical Approach: JavaScript Example using Moralis

To facilitate a practical understanding of Moralis, we present a JavaScript script illustrating how to employ Moralis SDK for querying Ethereum contract logs:

```javascript
import Moralis from 'moralis';

try {
  // Initializing the Moralis SDK with your unique API key
  await Moralis.start({
    apiKey: "YOUR_API_KEY"
  });

  // Executing the getContractLogs method to retrieve contract logs
  // Here, we target the Ethereum mainnet, denoted by the "chain" parameter set to "0x1".
  // You can modify this parameter to target other networks as per your requirements.
  // The "address" parameter specifies the contract address for fetching the logs.
  const response = await Moralis.EvmApi.events.getContractLogs({
    "chain": "0x1",
    "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    "topic0": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  });

  // Logging the response enables you to inspect and understand the structure of the data retrieved.
  console.log(response);
} catch (e) {
  // Any errors arising during the execution are caught here, facilitating a clean error-handling process.
  console.error(e);
}
```

**Deciphering the Script:**
In this segment, we dissect each part of the script to offer a deep understanding of utilizing the Moralis library effectively:
- **Import and initialization:** Start by importing the Moralis library and initializing the SDK using your API key.
- **Log retrieval:** This part describes how to retrieve contract logs using defined parameters.
- **Response and error handling:** This section underlines the response logging and error management process.

## Creating Real-World Applications

Embark on a hands-on tutorial to build applications capable of querying Ethereum smart contract's event logs utilizing Moralis.

### Step 1: Cloning and Setting Up the Project

Embark on this hands-on section by using the Moralis events API to build a robust application capable of querying any Ethereum smart contract's event logs. The steps to setting up include cloning the project from a [GitHub repository](https://github.com/MoralisWeb3/youtube-tutorials/tree/main/get-contract-logs) and installing the necessary Node packages:

```bash
npm i moralis @moralisweb3/common-evm-utils dotenv express
```

### Step 2: Backend Code Breakdown

Dive into the backend construction using Express and Moralis SDK. The code below outlines how to set up an Express server and define a route to handle the logs retrieval:

```javascript
const express = require("express");
const app = express();
const port = 5001;
const Moralis = require("moralis").default;
const cors = require("cors");
require("dotenv").config({ path: ".env" });
app.use(cors());
app.use(express.json());

const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

app.get("/getlogs", async (req, res) => {
  try {
    const { query } = req;
    const response = await Moralis.EvmApi.events.getContractLogs({
      address: query.address,
      chain: query.chain,
      topic0: query.topic0,
    });
    return res.status(200).json(response);
  } catch (e) {
    console.log(`Something went wrong ${e}`);
    return res.status(400).json();
  }
});

Moralis.start({
  apiKey: MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
```

### Step 3: Frontend Code Breakdown

The frontend is constructed using vanilla JavaScript, and it connects to the backend to fetch and display the Ethereum event logs. The `handleSubmit` function plays a crucial role in initiating the logs retrieval process:

```javascript
const handleSubmit = async () => {
  address = document.querySelector("#inputField").value;
  const chain = chainValue.value}
```

In this step-by-step guide, you have learned how to create a NodeJS and NextJS application to query Ethereum smart contract's event logs with Moralis. Understanding the backend and frontend code breakdown helps in comprehending the overall structure and functionality of the application. You now possess the knowledge to build a more complex application by expanding upon this basic structure.

## Conclusion

Having navigated through the potentials and the intricate workings of ETH get logs, you are now equipped with the knowledge and practical experience to integrate Moralis' "getContractLogs" endpoint into your projects. Leveraging Moralis not only simplifies the process but also enhances the efficiency, allowing you to focus on building stellar applications in the blockchain space.
