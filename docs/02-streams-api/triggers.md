---
title: "Moralis Triggers BETA 🔥"
slug: "triggers"
sidebar_position: 10
description: "Moralis Streams Triggers. Run smart contract functions against Blockchain Events."
---
## Introduction

With Moralis Triggers you can run (read-only) smart contract functions and have the result be part of your Webhook.

Let us dive into an example right away. Imagine you have a stream that listens to a bunch of addresses and in particular, you are interested in the "erc20Transfers" part of your Webhook. Because you are maintaining a database with all the token balances of the monitored addresses, you normally get the balances after receiving a Webhook with the Moralis API. But what if you can have the balances be part of each token transfer in your Webhook right away? That is now possible with Moralis Triggers! 

NOTE: We are currently in beta, things can change bugs can happen even the name can change - we appreciate any feedback.

Let us take look at what changed. Everything remains the same but there is a new field called "triggers" which is an array out of triggers. Let's dive deeper into each of those fields.

## Trigger Types

```typescript
interface Trigger {  
  type: "tx" | "log" | "erc20transfer" | "erc20approval" | "nfttransfer";  
  contractAddress: string;  
  functionAbi: AbiItem;  
  inputs?: (string | string[])[];  
  topic0?: string;  
  callFrom?: string;  
}
```

### type

The type indicates for what part of the Webhook you want to run the trigger against. Possible values are: `tx`, `log`, `erc20transfer`, `nfttransfer` and `erc20approval`. More to come soon.

For example if you want to run a trigger for each (ERC20) token transfer you would set the type to `erc20transfer`.

### contractAddress

The address of the smart contract that has the function you want to call.

Must be a valid address or the selector must be from type address.

[Selectors are supported!](#selectors)

### functionAbi

Single ABI Item of the function to call. Arrays are not allowed.

The function must be a [read-only function](#read-only-functions) `stateMutability` must be set to either `pure` or `view`!

You can modify the name of the outputs which will be part of the triggers result. 

Selectors are NOT supported.

### inputs (partially-optional)

Must be specified if the function you are calling requires parameters. 

The inputs must be in the same order as the function expects them.

[Selectors are supported!](#selectors) 

#### Edge cases

Non primitive types are arrays or objects (struct in Solidity).

```solidity Solidity
contract ComplexContract {
  
  struct Human {
    string name;
    int age;
    address user;
  }
  
  mapping(address => Human[]) friends;

	function getFriends(Human memory human) public view returns(Human[] memory friend) {
    return (friends[human.user]);
  }
}
```

> A Human has a name, age and an address. The function getFriends gets a human struct as a parameter and returns all of the humans friends.

Example Inputs: `inputs: [["Joe", "25", "$from"]]`

Structs must be an array, so the inputs actually take strings and arrays of string. Nested Structs are supported!

### topic0 (optional)

If you want to run a trigger on specific events you can specify it in topic0. 

Requires the ABI of that event in the root streams ABI array. 

Selectors are not allowed.

Can only be specified if type is `log`!

The benefit of specifying a topic0 is using Selectors against the decoded event log for [Inputs](##inputs) or the [caller's address](##callfrom-optional), or [smart contract](##contractaddress)  .

### callFrom (optional)

Allows you to manipulate the caller of the smart contract function (`msg.sender` in Solidity).  
This is useful if you want to run a trigger on behalf of a specific address.  
Must be a valid address. [Selectors are supported!](#selectors)

## Selectors

Selectors allow you to dynamically select information of your Webhook. They are allowed for `inputs`, `callFrom` and the `contractAddress`.  

Selectors begin with a `$`, and everything after that should be a valid field in your Webhook but have in mind that the selectors are strictly tied to the `type` of your trigger.

For example, if you want to get the sender of an ERC20 transfer to use the address as a parameter of a smart contract function the selector would be `inputs: [ '$from' ]` and the type of your trigger should be `erc20transfer`. `$fromAddress` for example is not a valid field in any object of `erc20Transfers` and the API rejects the request. 

If you use selectors for `callFrom` and the `contractAddress` the validation also checks if the field is a valid address field. For example you cant use `$value` as the `$callFrom` address. The API will reject your request.

## Example

In this tutorial we will add a trigger to an existing stream. The goal is to get the balances of the receiver and recipient of every ERC20 Transfer that occur in our stream.

### Get the balance of the sender of an ERC 20 Transfer

Every ERC20 Contract has a function called `balanceOf` so let's take a look at the ABI of that function first:

#### BalanceOf ABI

```javascript
const balanceOfSenderAbi = {
  "constant": true,
  "inputs": [
    {
      "name": "owner",
      "type": "address",
    },
  ],
  "name": "balanceOf",
  "outputs": [
    {
      "name": "",
      "type": "uint256",
    },
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function",
};
```



The balanceOf function takes in one parameter from type `address` and returns a `uint256` representing the balance. 

Our goal now is to call this function for each transfer in the ERC20 Transfers array. From what we know from the balanceOf ABI we must definitely specify `inputs` with one parameter representing the address that we want to check its balance.

```javascript
const trigger = {
  contractAddress: "$contract",
  functionAbi: balanceOfSenderAbi,
  inputs: ["$from"],
  type: "erc20transfer",
}

const triggers = [trigger];
```



As we do not know the contract Address and the sender address for each transfer we make use of the powerful selectors!

The contractAddress is set to `$contract` this is a valid field in each ERC20 Transfer which represents the ERC20 Contract address. The same applies to our inputs as `$from` represents the address of the sender of the tokens.

Now we can update the Stream with this trigger using the API, or if you are using the SDK:

```javascript
Moralis.Streams.update({
  id: 'YOUR_STREAM_ID',
  triggers,
});
```



Now, lets take a look at the result of the trigger:

```javascript
const erc20Transfers: [
  {
    transactionHash: "0xf0c7542c73e2d26cc0b249da63426643263463463646345",
    logIndex: "0",
    contract: "0x34b6a28edbbaf0c7542c73e2d26cc0b249da69a6",
    from: "0xbb6a28edbbaf0c7542c73212d26cc0b249da47a5",
    to: "0xbdc7237c3b3bfcfeca7ed8108d01854589c91d65",
    value: "100000000000000000",
    tokenName: "Moralis",
    tokenSymbol: "MOR",
    tokenDecimals: "18",
    valueWithDecimals: "0.1",
    triggers: [
      { name: "output1", value: "200000000000000000" },
    ],
  },
  {
    transactionHash: "0xc3sdg442c73e2d26cc0b249da2426643263vm646345",
    logIndex: "0",
    contract: "0x34b6a28edbbaf0c7542c73e2d26cc0b249da69a6",
    from: "0xdd6a28edbbaf2c7542c73212d26cc0b249da3ta5",
    to: "0xbdc7237c3b3bfcfeca7ed8108d01854589cf1g66",
    value: "100000000000000000",
    tokenName: "Moralis",
    tokenSymbol: "MOR",
    tokenDecimals: "18",
    valueWithDecimals: "0.1",
    triggers: [
      { name: "output1", value: "51390023141500000" },
    ],
  }
];
```



For every transfer in the `erc20Transfers` of our Webhook, the Streams API runs the `balanceOf` function and pushes the result in a list of trigger results. Every result contains of a `name` representing the output name and a `value` that is the result of the contract call.

Note that the name here is `output1` this is because the [balanceOf Abi](#balanceof-abi) has actually no name for the balance result. The cool thing is you can modify the output name of your ABI.

##### Modify Abi output

Let's take a look back at the outputs of the [balanceOf Abi](#balanceof-abi)

```javascript
outputs: [
  {
    name: "",
    type: "uint256",
  },
],
```



We have only one output from type uint256 but you can see that we didn't specify  
a name for the output. We can simply add a name or rename it if there is a name already

```javascript
[
  {
    name: "fromBalance",
    type: "uint256",
  },
];
```



This will result in the following output:

```javascript
const erc20Transfers: [
  {
    transactionHash: "0xf0c7542c73e2d26cc0b249da63426643263463463646345",
    logIndex: "0",
    contract: "0x34b6a28edbbaf0c7542c73e2d26cc0b249da69a6",
    from: "0xbb6a28edbbaf0c7542c73212d26cc0b249da47a5",
    to: "0xbdc7237c3b3bfcfeca7ed8108d01854589c91d65",
    value: "100000000000000000",
    tokenName: "Moralis",
    tokenSymbol: "MOR",
    tokenDecimals: "18",
    valueWithDecimals: "0.1",
    triggers: [
      { name: "fromBalance", value: "200000000000000000" },
    ],
  },
];
```



Now the output name is `fromBalance` instead of `output1` in the triggers result.

Cool! But now let us get the balances of the recipients too. For that lets copy the [balanceOf Abi](#balanceof-abi) so we don't have the same output name for both triggers.

```javascript
const balanceOfReceiverAbi = {
  "constant": true,
  "inputs": [
    {
      "name": "owner",
      "type": "address",
    },
  ],
  "name": "balanceOf",
  "outputs": [
    {
      "name": "toBalance",
      "type": "uint256",
    },
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function",
};
```



We copied the original balanceOfSenderAbi and call it balanceOfReceiverAbi and rename the output name to `toBalance` . Let's add it to our existing triggers array.

```javascript
const trigger = {
  contractAddress: "$contract",
  functionAbi: balanceOfSenderAbi,
  inputs: ["$from"],
  type: "erc20transfer"
}
const trigger2 = {
  contractAddress: "$contract",
  functionAbi: balanceOfReceiverAbi,
  inputs: ["$to"],
  type: "erc20transfer"
}
const triggers = [trigger, trigger2];
```



This will result in the following output:

```javascript
erc20Transfers: [
  {
    transactionHash: "0xf0c7542c73e2d26cc0b249da63426643263463463646345",
    logIndex: "0",
    contract: "0x34b6a28edbbaf0c7542c73e2d26cc0b249da69a6",
    from: "0xbb6a28edbbaf0c7542c73212d26cc0b249da47a5",
    to: "0xbdc7237c3b3bfcfeca7ed8108d01854589c91d65",
    value: "100000000000000000",
    tokenName: "Moralis",
    tokenSymbol: "MOR",
    tokenDecimals: "18",
    valueWithDecimals: "0.1",
    triggers: [
      { name: "fromBalance", value: "6967063534600021400000" },
      { name: "toBalance", value: "200000000000000000" },
    ],
  },
];
```



Note that the order of the results is the same as the order of the triggers we  
specified.

### Create triggers using Admin Panel

Goal: To add an `erc20transfer` trigger to get the balance of the sender of an ERC20 transfer

1. Go to streams page, add contract address(eg:USDC - `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`) to create a stream. You will start seeing new webhooks on the right side of the admin panel.
![](/img/content/streams-triggers-ui-1.webp)

2. Scroll down to the bottom and you will see triggers section. Click on `Add Trigger` and select the `type` of trigger you want to add. Let's add `erc20transfer` trigger. The `type` indicates for what part of the Webhook you want to run the trigger against.
![](/img/content/streams-triggers-ui-2.webp)

3. Click on `Enter Contract Address` and provide your contract address in the popup. You can also add selectors in this field. Read more about selectors from [here](#selectors). Let's add a selector here `$contract` and click on `Save Changes`.
![](/img/content/streams-triggers-ui-3.webp)

4. Click on `Add ABI` button and input your ABI (with read-only function) in the popup. For example, every ERC20 contract has a function called `balanceOf` let's add this to the input. And click on `Save Changes`.
![](/img/content/streams-triggers-ui-4.webp)

  `balanceOf` ABI
  ```json
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
  ```

5. The `balanceOf` function takes an address as a parameter. Therefore, we need to specify an input, and input fields also accept selectors. So, we can add `$from` to the input. You can read more about selectors here. [here](#selectors).
![](/img/content/streams-triggers-ui-5.webp)


6. `callFrom` takes an address or selectors as input, and this is used as the caller of the smart contract function. This input is optional.

7. Click on `Update Stream`. and you will start receiving new webhooks with triggers in the `erc20Transfers` part of the webhook. 
![](/img/content/streams-triggers-ui-6.webp)

### Error Handling

The Streams API will return an error if you try to add a trigger that is not  
valid and reject creating/editing the stream. The error will have a detailed  
message explaining what went wrong.

However there is no check if the contract exists or if the function exists in  
the smart contract. So if the read-only call fails you will still get the  
Webhook but the name is `error` and the `value` is the error message

## Extras

### Read-only functions

Read-only functions in Solidity are functions that do not require computation cost (gas/fee) , they are free so to speak. While functions that alter (write) the blockchain require a fee (gas) to run.

The ABI of read-only functions have `function` as a `type` and a `stateMutability` which is either `pure` or `view` which indicates if the function is a read or write function. If you have an ABI of an old contract that does not have `stateMutability` then you can simply add it to your ABI.