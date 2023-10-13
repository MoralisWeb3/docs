---
sidebar_position: 0
title: "Blockchain Data Retrieval Using the eth_call RPC Method"
slug: "../../eth_call-and-getblock"
sidebar_label: "eth_call and getBlock"
description: "How to read from the blockchain and how to call read-only functions of a smart contract using eth_call and Moralis getBlock RPC methods"
---

In the rapidly evolving realm of decentralized exchanges (DEXs), blockchain data retrieval is the lifeblood of security, transparency, and control. Traditional approaches like Ethereum's [`eth_call`](https://web3js.readthedocs.io/en/v3.0.0-rc.5/web3-eth.html?highlight=eth.call#call) are giving way to innovative solutions like [Moralis](https://moralis.io/).

Decentralized exchanges (DEXs) are the backbone of blockchain's decentralization promise, offering security, transparency, and control. These platforms rely heavily on efficient data retrieval systems for functions like wallet balance display and contract detail fetching. This article explores how Moralis revolutionizes DEX development and why it is a compelling choice over the traditional [eth_call](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call) RPC method.

Furthermore, this article also showcases how Moralis simplifies and streamlines ETH data retrieval and blockchain interactions for DEX developers.

:::tip
You can learn how to get a block by number using the Moralis Events API by following the [Get logs for contract](/web3-data-api/evm/how-to-get-block-content-by-block-number) article.
:::

## Understanding eth_call and eth_getBalance

### Exploring eth_call

While exploring contract interactions and blockchain data retrieval, it is important for DApp developers to use the `eth_call` method to simulate and execute message calls directly in the node’s Virtual Machine (VM), without making any modifications and without creating a transaction to the blockchain. This read-only interaction capability is quintessential for querying smart contract functions, such as retrieving ERC-20 token balances with the `balanceOf` function.

Moralis offers a groundbreaking equivalent for `eth_call` with the [getBlock](/web3-data-api/evm/reference/get-block) RPC method, showcasing its innovative approach to data retrieval and blockchain interactions. This endpoint serves as a modern alternative, allowing developers to access extensive information about transactions, contract interactions, and more, all in a user-friendly manner.

### Exploring eth_getBalance

Developers use `eth_getBalance` to get the Ether balance of a given address or in other words to return account's balance of a given address. This method is a fundamental aspect for managing transactions and displaying real-time user balance information.

Moralis presents the [getNativeBalance](/web3-data-api/evm/reference/get-native-balance) RPC method as the nearest equivalent to `eth_getBalance`. You can use it to obtain the native balance of an address which can be an important part in transaction management.


## Traditional vs. Modern: A Quick Comparison

Historically, developers have used Ethereum's `eth_call` RPC method to interact with contracts without modifying the blockchain state. Here is an example:


```javascript
const Web3 = require('web3');
const web3 = new Web3('YOUR_INFURA_ENDPOINT');

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const data = 'YOUR_DATA';

web3.eth.call({
    to: contractAddress,
    data: data
}).then(console.log);
```

In comparison, Moralis introduces a revolutionary approach that streamlines data retrieval and blockchain interactions using the [getBlock](/web3-data-api/evm/reference/get-block) endpoint. In the following example, you can see how Moralis' `getBlock` endpoint compares to `eth_call`:

```javascript
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

async function runApp() {
  await Moralis.start({ apiKey: "YOUR_API_KEY" });

  const blockNumberOrHash = "15863321";
  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.block.getBlock({
    blockNumberOrHash,
    chain,
  });
  console.log(response.toJSON());
}

runApp();
```

## Why DEX Developers Should Choose Moralis

Seamless user experiences are the essence of DEXs, and the `eth_call` RPC method has been instrumental in laying the foundation. However, the current landscape demands tools that combine speed with efficiency. Moralis stands as a pioneer in this regard, ushering in the next era of DEX development with advanced features using single lines of code, faster data retrieval, and enhanced security protocols.


## ETH Blockchain Data Retrieval Using the eth_call RPC Method: Conclusion

The realm of decentralized exchanges is quickly evolving, and so is blockchain development. Although the eth_call RPC method is quite powerful, new solutions that streamline Web3 development and outperform legacy methods like eth_call are emerging. One of these solutions is Moralis'  getBlock endpoint, making ETH blockchain data retrieval a breeze!

In sum, this article compares Moralis to a more traditional solution and invites you to explore the world of Moralis and become a leader in the unfolding decentralized future. Armed with knowledge and supported by a community of like-minded developers, you can shape the future of DEXs with Moralis.
