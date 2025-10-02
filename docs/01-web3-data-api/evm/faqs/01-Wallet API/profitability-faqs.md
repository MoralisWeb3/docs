---
title: "Profitability FAQs"
slug: "/web3-data-api/evm/profitability-faqs"
sidebar_position: 2
---


This article provides a set of FAQs for the following wallet and token PnL endpoints:


  - <a href="/web3-data-api/evm/reference/wallet-api/get-wallet-profitability-summary?address=0xd8da6bf26964af9d7eed9e03e53415d37aa96045&chain=eth">Wallet PnL Summary</a>
  - <a href="/web3-data-api/evm/reference/wallet-api/get-wallet-profitability?address=0xd8da6bf26964af9d7eed9e03e53415d37aa96045&chain=eth&token_addresses=[]">Wallet PnL Breakdown</a>
  - <a href="/web3-data-api/evm/reference/get-top-profitable-wallet-per-token?address=0x7c9f4c87d911613fe9ca58b579f737911aad2d43&chain=eth">Top Profitable Wallets by Token</a>


### What type of PnL (Profit and Loss) is supported?

Currently we support realized PnL. This means that we calculate profits and losses based on actual token swaps. We do not include unrealized gains, which are based on market value fluctuations of tokens held in a wallet and have not been realized through a trade.

### What method do you use to calculate PNL (Profit and Loss)?

We utilize a method closely resembling the weighted average cost method. Here’s a breakdown of how it functions:

**Formula:**<br/>

- **`(avgSellPriceUsd − avgCostOfQuantitySold) × totalTokensSold`**
- **`avgSellPriceUsd`:** This value is continuously updated with each token sale, reflecting the average selling price based on the quantity sold and the corresponding sale prices.
- **`avgCostOfQuantitySold`:** With each token purchase, we update the total USD invested and the quantity of tokens acquired. The average cost of the tokens sold is computed as: `totalUsdInvested/totalTokensBought`

In essence, our method ensures that the profit or loss is determined by subtracting the average cost of the tokens sold from the average selling price, and then multiplying by the total number of tokens sold. This approach effectively employs a weighted average cost to calculate PNL.

### How are token trades (buys and sells) matched together?

Token swaps are tracked based on their specific pairings. For instance, when you buy UNI with WETH, a trade record for **UNI/WETH** is initiated. Subsequent purchases of UNI with WETH or sales of UNI for WETH will update this trade accordingly.

However, if you initially buy UNI with WETH and later sell UNI for PEPE, the original **UNI/WETH** trade remains unchanged. Instead, this transaction is treated as a new trade for **UNI/PEPE**.

### How does your API determine token prices and trade histories?

We index all of the supported swap events for a given token. We derive the swap price for a given trade from the swap log event and convert it to USD to return the token price. This is then used in the relevant data points within our PnL formula.

### Are transaction fees included in your PnL formula?

No, transactions are not included as part of our PnL formula.

### What DEXs are currently supported?

You can view [our supported DEXes here](/web3-data-api/evm/supported-dexs-token-api).

### What swap events / topics are currently supported?

We currently support the following topics:

- **Uniswap v2** topic: `0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822`
- **Uniswap v3** topic: `0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67`

### How soon after a trade has settled will it be reflected on the API?

Our PnL endpoints update in near real-time. On average you can expect wallet or token PnL to be updated within 10 seconds on a trade being settled on-chain.

### What ERC20 tokens are supported?

All ERC20 tokens that have been involved in a Swap involving either of the topics above are supported.

### Do you track wallet PnL for stablecoins?

No, we do not track wallet PnL for stablecoins.

### Do you track wallet PnL for native wrapped tokens, like WETH?

Yes, but only when traded for stablecoins such as USDC or USDT.

### What chains are currently supported?

Profitability is live across Ethereum, Polygon and Base Mainnets. More chains will be coming soon.
