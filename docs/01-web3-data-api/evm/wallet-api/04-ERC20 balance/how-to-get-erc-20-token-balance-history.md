---
title: "How to Get ERC-20 Token Balance History"
slug: "../how-to-get-erc-20-token-balance-history"
description: "Learn how to get historical ERC-20 token balance using Moralis Wallet API."
sidebar_label: "Get ERC-20 Token Balance History"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner />

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.


# Step 2: Get ERC-20 Token Balance History

Discover how to track ERC-20 token balance history with Moralis Web3 API, an essential skill for blockchain developers.

Our tutorial utilizes Moralis' robust functions, [getWalletTokenBalances](/web3-data-api/evm/reference/get-wallet-token-balances) and [getWalletTokenTransfers](/web3-data-api/evm/reference/get-wallet-token-transfers), to reveal both current and historical token balances. This guide is perfect for those seeking insights into ERC-20 token movements and trends.

this tutorial unlocks deep insights into token balance trends and changes, essential for effective blockchain data management and analysis. The provided code example illustrates the seamless integration and versatility of Moralis [Wallet API](https://moralis.io/api/wallet/) in tracking and understanding token movements over time.

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

```
Historical Balances with Token Identifiers and Addresses:  {
  'USDTOKEN (USDT) [0x3c978fc9a42c80a127863d786d8883614b01b3cd]': '10000000000000000000000',
  'Tether USD (USDT) [0xdac17f958d2ee523a2206206994597c13d831ec7]': '209355461',
  'ETH... (ETH) [0x3540396349f8218b60c9c16c659188e83931cca8]': '1000000000000000000',
  'NuPoW Quartz (NPQ) [0x5078dd37ee699eb59c096b41c6415417fa02ec8c]': '12682136550675316736',
  'Strong (STRONG) [0x990f341946a3fdb507ae7e52d17851b87168017c]': '394677600000000000000',
  'USDT (USDT) [0xd31d2c3c4619e6bdde0f6248add5e3fadd494aa9]': '13000000000000000000000000000000000000000',
  'Beep (BEEP) [0x9a0df129e798438a8ad995368bd82baa7eee8913]': '69000000000000000000',
  'Ethereum (ETH) [0x91c7b1779b4ee0f33b9fbf4da8b94c6a7fad26db]': '350000000000000000000',
  'Jesse (JLM) [0x56d66465162000fc6c1b1dbf92713f811c0a7bc5]': '2500000000000000000000',
  'Moonspot Token (MOONST) [0xe7b480a12cc42d8829414913b5315ee0ac27e2e5]': '1000000000000000000000',
  'ETH... (ETH) [0x1f6b71a41c191d63e1b339f08b7a1d34fb527b4c]': '1000000000000000000',
  'USA (USA) [0xcff142692c77e452244594c04204aac71a55df32]': '6700000000000000000000',
  'ETH... (ETH) [0x900138b0b4435c2e8837a381dda9eba4dae6b5fe]': '1000000000000000000',
  'ETH... (ETH) [0x228d72cba277e9246919ba2ac707dea4d13c4737]': '1000000000000000000',
  'smol (SMOL) [0x2216e873ea4282ebef7a02ac5aea220be6391a7c]': '100000000000000000',
  'SONM (SNM) [0x46d0dac0926fa16707042cadc23f1eb4141fe86b]': '676470070934651600000',
  'ETH... (ETH) [0x5a2b6a445c6f360a531b1f7f3cf08238efc81ba6]': '1000000000000000000',
  'BananerManToken (BAM) [0x7807822c7883e5b08b307440e98960c01774cb34]': '100000000000000000000',
  'Rebuttal (RBL) [0x602b81edf32318d0506ddfba225e810ab460d701]': '11999999400000000',
  'DOGE 2 (DOGE2) [0x7b643acf72c8ebab69e955bcd62fce73cd9546c0]': '312000000000',
  'ETH... (ETH) [0xa50d8d04a54f0cbb167b4f4d093f5fb383d20d75]': '1000000000000000000',
  'Kuma (KUMA) [0xe90cc7d807712b2b41632f3900c8bd19bdc502b1]': '3000000000000000000000000000',
  'Tether USD (USDT) [0xaf89c5a146fa39ef2f635487c051e5afe70aa0ee]': '450000000000000000000',
  'Bitcoin (BTC) [0xda23337cf4b878187923dbfdcf13fbd13224d1af]': '400000000000000000000',
  'CrashTestDummyToken (CTDT) [0x476dee1fc22115c1a02f6b220ff30e52974c44f6]': '50000000000000000000',
  'The Face of Anonymous (ANON) [0x0a6d69bac12aa267a4feb70b07260c97c85802e6]': '100000000000000000000000000',
  '$ usdcoin.finance ( /Visit https://usdcoin.finance to claim rewards.) [0xc07d836c2615f78da2e1f2ae435bf5a9ed4e83c2]': '1049000000000000000000',
  'ETH... (ETH) [0x0e04af0c9354cf982923cfe3d1aece0cb37893b3]': '1000000000000000000',
  'Pikachu (PIKA) [0x6ade03aba6223e90a22fad43df9bf3657f5f9e5c]': '18119999999999999999999969900088',
  'Inu Empire (inuEMPIRE) [0x989b6010a38f4d6703d9f30567c71b0aa4296dcd]': '212729464602260761',
  '环球股 (HQG) [0x57b9d10157f66d8c00a815b5e289a152dedbe7ed]': '1793000',
  'ETH... (ETH) [0xca50dd6e479ae78367a871a097a135109f165574]': '1000000000000000000',
  '$ usdswap.org ( *Visit https://usdswap.org to claim rewards) [0x72a934bdc5d49869590fbafca0e6678fd41c64de]': '3999990000000000000000',
  'ETH... (ETH) [0xe24c370c869509344dd15f67c24459602c050047]': '1000000000000000000',
  'ETHEREUM MINEABLE TOKEN WITH NO GOVERNANCE (GEMT) [0x4f8e54e2e840561e5aa8a296ad5f7b0ae18e6eff]': '7500000000000000000',
  'ETH... (ETH) [0x38316f9709ea03b56984e6855881625e7cd63321]': '1000000000000000000',
  'Gamma Staking ($VeN) [0xc11aab3e363e3ca9ff5e7e82c6298004c39b7ec2]': '1000000000000',
  'OCCoin (OCC) [0x4665e227c521849a202f808e927d1dc5f63c7941]': '602000000000000000000',
  'Sculpt3DToken (SCULP) [0x088c4b42689a4722c774ba2dcaf4885846458618]': '50000000000000000000',
  '# usd-coin.net ( +Visit https://usd-coin.net to claim rewards) [0xfafe8a7c0a9b3807cc1df0deb0ba0b5a5fb7a872]': '3999990000000000000000',
  'USD Coin (USDC) [0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48]': '10',
  'Mailbox (MAIL) [0xa245dfba733c0078782407dd5c6a3d7e1ace2d64]': '48999999020000000',
  'DerivaDAO (DDX) [0x3a880652f47bfaa771908c07dd8673a787daed3a]': '8164647330130000000000',
  '!SNXPool.com ($ sUSD) [0x65281b6d0402095d66f531268b4662524040fdfc]': '826150000000000000000',
  '# apyeth.org ( )Visit https://apyeth.org to claim rewards) [0x92de606e806838b3ed6f0506599e03fbd16e6497]': '1400000',
  'Refereum (RFR) [0xd0929d411954c47438dc1d871dd6081f5c5e149c]': '1323714289',
  'TallToken (TALL) [0xc7737dece126fcc656aafdb6bd7a78e04ac03a30]': '150000000000000000000',
  'Seekers Gaze (GAZE) [0x2497d91ee1f417b39d625e3804e6e62d4c158fb6]': '19400000000000000',
  '# apy-eth.net ( *Visit https://apy-eth.net to claim rewards) [0xa3e4b28bcc63e549886d642b2bf77ebbdfaba91b]': '1400000',
  'Pephereum (PEPHEREUM) [0xe679e9199bd9d3b967b6c4d2dd16a1133091e0f3]': '2818452874117817810',
  '# aeth.network ( #Visit aeth.network to claim rewards) [0x372d6a1f5f129fa48ef28e5b27922767855effea]': '1400000',
  'Bitcoin (BTC) [0x51b9dd7a3edcf66edfa6d9049dc2aaf576bbaa3a]': '100000000000000000000',
  'Tether USD (USDT) [0x9a94f59f1de48b2a84197dcafe92da4e045a5d41]': '350000000000000000000',
  'Tether USD (USDT) [0x119fcbc39109b788770be63b2d620f557cd66ec8]': '50000000000000000000',
  'Ethereum (ETH) [0x518ae805bd145c8ed1e22efd0b21bad253cf1bed]': '450000000000000000000',
  'TIME Token (TIME) [0x0f8f39b92776d9136408280c7209bebe4351123b]': '881790000000000000000',
  'Unknown (Unknown) [[object Object]]': '100019179134743501073338793'
}
```

Congratulations 🥳 You just got all ERC20 Token Balance History owned by an address with just a few lines of code using the Moralis Wallet API!

## Conclusion

This tutorial demonstrated how to track the historical balance of ERC-20 tokens for an Ethereum address utilizing the Moralis Web3 API. This technique is adaptable for various needs, including date-specific analysis and precision handling for different token decimals. It's an essential tool for developers and analysts in the evolving landscape of blockchain and cryptocurrency, providing insights into token transactions and balance changes over time.
