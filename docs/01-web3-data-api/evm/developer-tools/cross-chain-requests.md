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

| Name                                  | Chain id    | EvmChain                  | Type    |
| :------------------------------------ | :---------- | :------------------------ | :------ |
| Ethereum Mainnet                      | 1           | `EvmChain.ETHEREUM`       | Mainnet |
| Ethereum Ropsten _(deprecated)_       | 3           | `EvmChain.ROPSTEN`        | Testnet |
| Ethereum Rinkeby _(deprecated)_       | 4           | `EvmChain.RINKEBY`        | Testnet |
| Ethereum Görli                        | 5           | `EvmChain.GOERLI`         | Testnet |
| Ethereum Kovan _(deprecated)_         | 42          | `EvmChain.KOVAN`          | Testnet |
| Ethereum Sepolia                      | 11155111    | `EvmChain.SEPOLIA`        | Testnet |
| Polygon Mainnet                       | 137         | `EvmChain.POLYGON`        | Mainnet |
| Polygon Mumbai                        | 80001       | `EvmChain.MUMBAI`         | Testnet |
| BNB Mainnet                           | 56          | `EvmChain.BSC`            | Mainnet |
| BNB Chain Testnet                     | 97          | `EvmChain.BSC_TESTNET`    | Testnet |
| Avalanche C-Chain                     | 43114       | `EvmChain.AVALANCHE`      | Mainnet |
| Avalanche Fuji Testnet _(deprecated)_ | 43113       | `EvmChain.FUJI`           | Testnet |
| Fantom                                | 250         | `EvmChain.FANTOM`         | Mainnet |
| Cronos Mainnet                        | 25          | `EvmChain.CRONOS`         | Mainnet |
| Cronos Testnet _(deprecated)_         | 338         | `EvmChain.CRONOS_TESTNET` | Testnet |
| Palm Mainnet                          | 11297108109 | `EvmChain.PALM`           | Mainnet |
| Arbitrum Mainnet                      | 42161       | `EvmChain.ARBITRUM`       | Mainnet |

## Solana

### Change the Default Network

We have two networks for the Solana API, which you can configure similarly. You can specify the mainnet or devnet:

```typescript
import Moralis from "moralis";
import { SolNetwork } from "@moralisweb3/sol-utils";

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
