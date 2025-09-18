---
sidebar_position: 2
sidebar_label: Get OHLCV by Pair Address
title: Get OHLCV Data by Pair Address for Solana
slug: /web3-data-api/solana/reference/price/get-ohlcv-by-pair-address
description: Access historical OHLCV data for token pairs on Solana. Track price trends and volume over time.
---

import ApiReference from "@site/src/components/ApiReference";
import config from "@site/docs/configs/api-reference/configs.json";
import EthereumApiBanner from "@site/src/components/EthBanner/EthApiBanner.tsx";

import ChartWidgetBanner from "@site/src/components/ChartWidgetBanner/ChartWidgetBanner.tsx";
import { MainnetBadge } from "@site/src/components/MainnetBadge/MainnetBadge.js";

# Get OHLCV by Pair Address <MainnetBadge />

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
