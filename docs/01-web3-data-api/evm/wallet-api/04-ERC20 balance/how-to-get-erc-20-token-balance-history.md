---
title: "How to Get ERC-20 Token Balance History"
slug: "../how-to-get-erc-20-token-balance-history"
description: "Learn how to get historical ERC-20 token balance using Moralis Wallet API."
sidebar_label: "Get ERC-20 token balance history"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.


# Step 2: Get ERC-20 Token Balance History

Discover how to track ERC-20 token balance history with Moralis Web3 API, an essential skill for blockchain developers.

Our tutorial utilizes Moralis' robust functions, [getWalletTokenBalances](/web3-data-api/evm/reference/get-wallet-token-balances) and [getWalletTokenTransfers](/web3-data-api/evm/reference/get-wallet-token-transfers), to reveal both current and historical token balances. This guide is perfect for those seeking insights into ERC-20 token movements and trends.

This tutorial unlocks deep insights into token balance trends and changes, essential for effective blockchain data management and analysis. The provided code example illustrates the seamless integration and versatility of Moralis [Wallet API](https://moralis.io/api/wallet/) in tracking and understanding token movements over time.

## Full Example Script

Below is the complete script that will serve as our basis for the tutorial. This script is designed to fetch the current token balances and past transfers, allowing us to calculate the historical balance of each token:

:::tip
Please replace `"YOUR_API_KEY"` with your actual Moralis API key before running the script.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  try {
    await Moralis.start({
      apiKey: "YOUR_API_KEY"
    });

    const address = "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326";
    const chain = "0x1"; // Ethereum mainnet

    // Fetch current token balances
    const currentBalancesResponse = await Moralis.EvmApi.token.getWalletTokenBalances({ chain, address });
    const currentBalances = currentBalancesResponse.raw;
    let balanceHistory = {};
    let tokenMapping = {};

    // Initialize balance history with current balances and create token mapping
    currentBalances.forEach(token => {
      balanceHistory[token.token_address] = BigInt(token.balance);
      tokenMapping[token.token_address] = { name: token.name, symbol: token.symbol };
    });

    // Fetch token transfers
    const transfersResponse = await Moralis.EvmApi.token.getWalletTokenTransfers({ chain, address });
    const transfers = transfersResponse.result ? transfersResponse.result : [];

    // Adjust historical balances based on transfers
    transfers.forEach(transfer => {
      const tokenAddress = transfer.address;
      const value = BigInt(transfer.value);
      const isSender = transfer.from_address ? transfer.from_address.toLowerCase() === address.toLowerCase() : false;

      if (!balanceHistory[tokenAddress]) {
        balanceHistory[tokenAddress] = BigInt(0);
      }

      balanceHistory[tokenAddress] += isSender ? -value : value;
    });

    // Map the balances to include token identifiers and addresses
    let mappedBalances = {};
    for (const [address, balance] of Object.entries(balanceHistory)) {
      const tokenInfo = tokenMapping[address];
      const tokenSymbol = tokenInfo ? tokenInfo.symbol : 'Unknown';
      const tokenName = tokenInfo ? tokenInfo.name : 'Unknown';
      mappedBalances[`${tokenName} (${tokenSymbol}) [${address}]`] = balance.toString();
    }

    console.log("Historical Balances with Token Identifiers and Addresses: ", mappedBalances);
  } catch (e) {
    console.error(e);
  }
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async (): Promise<void> => {
  try {
    await Moralis.start({ apiKey: "YOUR_API_KEY" });

    const address = "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326";
    const chain = EvmChain.ETHEREUM; // Ethereum mainnet

    // Fetch current token balances
    const currentBalancesResponse = await Moralis.EvmApi.token.getWalletTokenBalances({ chain, address });
    const currentBalances = currentBalancesResponse.raw;
    const balanceHistory: Record<string, bigint> = {};
    const tokenMapping: Record<string, { name: string; symbol: string }> = {};

    // Initialize balance history with current balances and create token mapping
    currentBalances.forEach(token => {
      balanceHistory[token.token_address] = BigInt(token.balance);
      tokenMapping[token.token_address] = { name: token.name, symbol: token.symbol };
    });

    // Fetch token transfers
    const transfersResponse = await Moralis.EvmApi.token.getWalletTokenTransfers({ chain, address });
    const transfers = transfersResponse.result ? transfersResponse.result : [];

    // Adjust historical balances based on transfers
    transfers.forEach(transfer => {
      const tokenAddress = transfer.address;
      const value = BigInt(transfer.value);
      const isSender = transfer.from_address ? transfer.from_address.toLowerCase() === address.toLowerCase() : false;

      if (!balanceHistory[tokenAddress]) {
        balanceHistory[tokenAddress] = BigInt(0);
      }

      balanceHistory[tokenAddress] += isSender ? -value : value;
    });

    // Map the balances to include token identifiers and addresses
    const mappedBalances: Record<string, string> = {};
    for (const [address, balance] of Object.entries(balanceHistory)) {
      const tokenInfo = tokenMapping[address];
      const tokenSymbol = tokenInfo ? tokenInfo.symbol : 'Unknown';
      const tokenName = tokenInfo ? tokenInfo.name : 'Unknown';
      mappedBalances[`${tokenName} (${tokenSymbol}) [${address}]`] = balance.toString();
    }

    console.log("Historical Balances with Token Identifiers and Addresses: ", mappedBalances);
  } catch (e) {
    console.error(e);
  }
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api
import asyncio

async def runApp():
    try:
        api_key = "YOUR_API_KEY"
        address = "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326"
        chain = "eth" # Ethereum mainnet

        # Fetch current token balances
        current_balances_response = await evm_api.token.get_wallet_token_balances(api_key=api_key, params={"chain": chain, "address": address})
        current_balances = current_balances_response['result']
        balance_history = {}
        token_mapping = {}

        # Initialize balance history with current balances and create token mapping
        for token in current_balances:
            balance_history[token['token_address']] = int(token['balance'])
            token_mapping[token['token_address']] = {'name': token['name'], 'symbol': token['symbol']}

        # Fetch token transfers
        transfers_response = await evm_api.token.get_wallet_token_transfers(api_key=api_key, params={"chain": chain, "address": address})
        transfers = transfers_response['result']

        # Adjust historical balances based on transfers
        for transfer in transfers:
            token_address = transfer['address']
            value = int(transfer['value'])
            is_sender = (transfer['from_address'].lower() == address.lower()) if 'from_address' in transfer else False

            if token_address not in balance_history:
                balance_history[token_address] = 0
            balance_history[token_address] += (-value if is_sender else value)

        # Map the balances to include token identifiers and addresses
        mapped_balances = {}
        for address, balance in balance_history.items():
            token_info = token_mapping.get(address, {})
            token_symbol = token_info.get('symbol', 'Unknown')
            token_name = token_info.get('name', 'Unknown')
            mapped_balances[f"{token_name} ({token_symbol}) [{address}]"] = balance

        print("Historical Balances with Token Identifiers and Addresses: ", mapped_balances)
    except Exception as e:
        print(e)

asyncio.run(runApp())
```

</TabItem>
</Tabs>

## Step-by-Step Explanation:

1. **Start Moralis Session**: Initialize Moralis with an API key.
2. **Define Address & Chain**: Set user's Ethereum address and chain (Ethereum mainnet).
3. **Fetch Current Token Balances**: Retrieve the latest token balances for the address.
4. **Initialize Balance History & Token Mapping**: Store each token's balance and map token addresses to their symbols and names.
5. **Fetch Token Transfers**: Get the history of token transactions for the address.
6. **Calculate Historical Balances**: Iterate over transactions, adjusting token balances based on whether the address sent or received tokens.
7. **Display Results with Identifiers**: Log each token's historical balance alongside its name, symbol, and contract address.

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{
  "USDTOKEN (USDT) [0x3c978fc9a42c80a127863d786d8883614b01b3cd]": "10000000000000000000000",
  "Tether USD (USDT) [0xdac17f958d2ee523a2206206994597c13d831ec7]": "209355461",
  "Unknown (Unknown) [[object Object]]": "100019179134743501073338793"
}
```

Congratulations 🥳 You just got all ERC20 Token Balance History owned by an address with just a few lines of code using the Moralis Wallet API!

## Conclusion

This tutorial demonstrated how to track the historical balance of ERC-20 tokens for an Ethereum address utilizing the Moralis Web3 API. This technique is adaptable for various needs, including date-specific analysis and precision handling for different token decimals. It's an essential tool for developers and analysts in the evolving landscape of blockchain and cryptocurrency, providing insights into token transactions and balance changes over time.
