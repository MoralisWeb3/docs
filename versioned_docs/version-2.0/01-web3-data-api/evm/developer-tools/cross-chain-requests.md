---
title: "Cross-Chain Requests"
slug: "../../cross-chain-requests"
---

# Cross-Chain EVM Requests

All our API methods are supported for cross-chain calls. You only need to specify the `chain` parameter. For example, this request will query block info on Polygon:

```typescript
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

evmApi.block.getBlock({
  blockNumberOrHash: "33000000",
  chain: EvmChain.POLYGON,
});
```

If no `chain` is specified, it will, by default, be set to the `defaultEvmApiChain`, which is set in your config (defaults to "Ethereum mainnet").

## Change the Default Chain

To change the default chain, you can specify `defaultEvmApiChain` in your config:

```typescript
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

Moralis.start({
  apiKey: "YOUR_API_KEY",
  defaultEvmApiChain: EvmChain.POLYGON,
});

Moralis.EvmApi.block.getBlock({
  blockNumberOrHash: "33000000",
});
```

## Supported EVM Chains

import { EVMChainData } from '@site/src/components/SupportedChains';

<EVMChainData/>

## Solana

### Change the Default Network

We have two networks for the Solana API, which you can configure similarly. You can specify the mainnet or devnet:

```typescript
import Moralis from "moralis";
import { SolNetwork } from "@moralisweb3/common-sol-utils";

Moralis.start({
  apiKey: "YOUR_API_KEY",
  defaultSolNetwork: SolNetwork.DEVNET,
});

Moralis.SolApi.account.getBalance({
  address: "ADDRESS",
});
```

### Supported Solana Networks

| Name           | SolNetwork           |
| :------------- | :------------------- |
| Solana mainnet | `SolNetwork.MAINNET` |
| Solana devnet  | `SolNetwork.DEVNET`  |
