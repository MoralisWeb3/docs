---
title: "Advanced SDK Setup"
slug: "../../advanced-sdk-setup"
---

:::info Advanced Use Case

Use the advanced setup if you want more control over what modules to add to Moralis. In most cases, you won't need to do this (and can use the umbrella `moralis` package as described above, as this is easier to use).

:::

### Install Moralis

Instead of installing the `moralis` umbrella package, you can need to install the packages _you_ want to use. Please note that you **always** need to install the `@moralisweb3/core` package.

Available packages:

- `@moralisweb3/core`
- `@moralisweb3/auth`
- `@moralisweb3/evm-api`
- `@moralisweb3/sol-api`
- `@moralisweb3/common-evm-utils`
- `@moralisweb3/common-sol-utils`

For example:

```bash npm2yarn
npm i @moralisweb3/core @moralisweb3/evm-api
```

### Set Up Moralis

To set up Moralis, you must register the modules to the core package at the top of your code (before any interaction with Moralis):

```javascript
import MoralisCore from "@moralisweb3/core";
import MoralisEvmApi from "@moralisweb3/evm-api";

const core = MoralisCore.create();
// Register all imported modules to the @moralisweb3/core module
core.registerModules([MoralisEvmApi]);
```

Then, initialize the app similarly to when using the umbrella `moralis` package. You only need to provide a configuration that is required by the packages. So, if you don't include an API package, you might not need to include the `apiKey`:

```javascript
core.start({
  apiKey: "<YOUR_API_KEY>",
  // ...and any other configuration
});
```

Now you can use any functionality from the installed modules. The only difference is that you need to call in your code:

```javascript
import MoralisEvmApi from "@moralisweb3/evm-api";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const evmApi = core.getModule < MoralisEvmApi > MoralisEvmApi.moduleName;
evmApi.block.getBlock({
  chain: EvmChain.ETHEREUM,
  blockNumberOrHash: "",
});
```

Instead of:

```javascript
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

Moralis.EvmApi.block.getBlock({
  chain: EvmChain.ETHEREUM,
  blockNumberOrHash: "",
});
```

Of course, you are free to combine the modules in a single object and use that in your dapp:

```javascript
// moralis.ts
import { MoralisCore } from "@moralisweb3/core";
import EvmApi from "@moralisweb3/evm-api";

const core = MoralisCore.create();
const evmApi = EvmApi.create(core);
core.registerModules([evmApi]);

export const Moralis = {
  EvmApi: evmApi,
};

// app.ts
import { Moralis } from "./moralis/";
import { EvmChain } from "@moralisweb3/common-evm-utils";

Moralis.EvmApi.block.getBlock({
  chain: EvmChain.ETHEREUM,
  blockNumberOrHash: "",
});
```
