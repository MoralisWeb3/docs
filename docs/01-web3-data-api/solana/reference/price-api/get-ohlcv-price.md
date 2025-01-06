---
sidebar_position: 1
sidebar_label: Get OHLCV by Pair Address
slug: /web3-data-api/solana/reference/price/get-ohlcv-by-pair-address
description: Retrieve historical OHLCV (Open, High, Low, Close, Volume) data for a specific token pair address. This endpoint provides detailed candlestick data for price and trading volume, allowing you to analyze token pair trends and market activity over specified timeframes.
---

import ApiReference from "@site/src/components/ApiReference";
import config from "@site/docs/configs/api-reference/configs.json";
import EthereumApiBanner from "@site/src/components/EthBanner/EthApiBanner.tsx";

import ChartWidgetBanner from "@site/src/components/ChartWidgetBanner/ChartWidgetBanner.tsx";

# Get OHLCV by Pair Address

<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch", // Ensures both banners have the same width
  }}
>
  <div style={{ width: "100%" }}>
    <ChartWidgetBanner />
  </div>
  <div style={{ width: "100%" }}>
    <EthereumApiBanner
  customTitle="Looking for OHLCV data on EVM?"
  customText="Access OHLCV data by pair address on EVM using our API."
  customButtonText="Explore EVM API"
  customButtonLink="/web3-data-api/evm/reference/get-ohlcv-by-pair-address"
/>

  </div>
</div>

<ApiReference {...config.solana.getCandleSticks} />
