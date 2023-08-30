---
title: "Moralis Data Types"
slug: "../../moralis-data-types"
---

# Moralis Data Types

Within the SDK, we have several data types to make your life easier when working with the SDK. These data types are useful for:

- Easy creation of data types by allowing different input formats (for example, `"0x1"` or `1` for a chain)
- Easy formatting of data types (lowercase and checksum addresses, for example)
- Utility methods (such as comparing two different data types regardless of the input/format)
- Additional properties (such as currency, `rpcUrls`, and paths to explorers)

## Using Data Types

The most common use cases for the data types are:

- As input for methods and API calls
- Creating new instances manually for usage within your dapp
- Using returned data types from the API

## Use as Input for Methods and API Calls

For many API calls, you can provide a `chain` or `address` parameter. In these cases, you can provide **any valid input value for an `EvmChain` or `EvmAddress`**. For example, these are all valid inputs:

```javascript
import { EvmChain, EvmAddress } from "@moralisweb3/common-evm-utils";

Moralis.EvmApi.nft.getWalletNFTs({
  chain: "0x1",
  address: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
});

Moralis.EvmApi.nft.getWalletNFTs({
  chain: "0x1",
  address: "0xa74476443119a942de498590fe1f2454d7d4ac0d",
});

Moralis.EvmApi.nft.getWalletNFTs({
  chain: EvmChain.ETHEREUM,
  address: EvmAddress.ZERO_ADDRESS,
});

Moralis.EvmApi.nft.getWalletNFTs({
  chain: EvmChain.create(1),
  address: EvmAddress.create("0xa74476443119A942dE498590Fe1f2454d7D4aC0d"),
});
```

## Creating New Instances Manually for Usage Within Your Dapp

If you need to use any of the data types within your apps, then you can import them from `'@moralisweb3/common-evm-utils` or `'@moralisweb3/common-sol-utils`, and create your instance via the `.create()` method.

For example:

```javascript
import { EvmNative } from "@moralisweb3/common-evm-utils";

const oneEth = EvmNative.create(1, "ether");

oneEth.wei; // 1000000000000000000
```

```javascript
import { EvmAddress } from "@moralisweb3/common-evm-utils";

const myAddress = EvmAddress.create(
  "0xa74476443119A942dE498590Fe1f2454d7D4aC0d"
);

myAddress.lowercase; // "0xa74476443119a942de498590fe1f2454d7d4ac0d"
```

## Using Returned Data Types from the API

You will encounter many data types as return values from any of the APIs. These provide a lot of extra value. For example:

```javascript
const response = await Moralis.EvmApi.balance.getNativeBalance(params);

// myBalance is an instance of the EvmNative data type
const myBalance = response.result.balance;

myBalance.wei; // 1000000000000000000
myBalance.ether; // 1.0
myBalance.equals("1000000000000000000"); // true
```

## EvmChain

Instead of handling EVM chains as decimal or hex string types, the Moralis SDK now handles them as a separate class instance, and we call them `Moralis Data Types`.

### Create EvmChain

```javascript
import { EvmChain } from "@moralisweb3/common-evm-utils";

//by name
const chain = EvmChain.ETHEREUM;
//or by hex string
const chain = EvmChain.create("0x1");
// or by decimal value
const chain = EvmChain.create(1);
```

### Read EvmChain

You can read the following values from the `EvmChain` instance:

#### ChainId

```javascript
console.log("decimal: ", chain.decimal);
// decimal: 1
console.log("hex: ", chain.hex);
// hex: "0x1"
console.log("hex: ", chain.format());
// output depends on specified by default formatting type
```

#### Name

```javascript
console.log("name: ", chain.name);
// name:"Ethereum Mainnet"
```

#### Currency

```javascript
console.log("currency: ", chain.currency);
// currency: {name : "Ether", symbol: "ETH", decimals: 18 }
```

### EvmChain - Comparing Equality

This utility method can be helpful when you handle decimals and hex values altogether in your dapp:

```javascript
console.log("check 1: ", chain.equals(1));
// check 1: true
console.log("check 2: ", chain.equals("0x1"));
// check 2: true
console.log("check 3: ", chain.equals(EvmChain.create(1)));
// check 3: true
console.log("check 4: ", chain.equals(EvmChain.create("0x1")));
// check 4: true
```

### EvmAddress

#### Create EvmAddress

```javascript
import { EvmAddress } from "@moralisweb3/common-evm-utils";

// by lowercase address
const address = EvmAddress.create("0xa9c4c85dd0495e32d08ef64d51fdeb35d200edfe");
// or by checksum
const address = EvmAddress.create("0xa9C4c85DD0495E32D08EF64d51fDEB35D200EDfe");
```

#### Read EvmAddress

```javascript
console.log("lowercase: ", address.lowercase);
// lowercase: "0xa9c4c85dd0495e32d08ef64d51fdeb35d200edfe"
console.log("checksum: ", address.checksum);
// checksum: "0xa9C4c85DD0495E32D08EF64d51fDEB35D200EDfe"
console.log("checksum: ", address.format());
// output depends on specified by default formatting type
```

#### EvmAddress - Comparing Equality

This utility method can be helpful when you handle lowercase and checksum values altogether in your dapp:

```javascript
console.log(
  "check 1: ",
  address.equals("0xa9c4c85dd0495e32d08ef64d51fdeb35d200edfe")
);
// check 1: true
console.log(
  "check 2: ",
  address.equals("0xa9C4c85DD0495E32D08EF64d51fDEB35D200EDfe")
);
// check 2: true
console.log(
  "check 3: ",
  address.equals(
    EvmAddress.create("0xa9c4c85dd0495e32d08ef64d51fdeb35d200edfe")
  )
);
// check 3: true
console.log(
  "check 4: ",
  address.equals(
    EvmAddress.create("0xa9C4c85DD0495E32D08EF64d51fDEB35D200EDfe")
  )
);
// check 4: true
```
