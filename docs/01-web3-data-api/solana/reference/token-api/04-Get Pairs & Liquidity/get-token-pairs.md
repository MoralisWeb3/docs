---
sidebar_position: 3
sidebar_label: Get Token Pairs by Address
slug: /web3-data-api/solana/reference/get-token-pairs-by-address
title: Get Token Pairs for Solana
description: Retrieve a list of token pairs on Solana, including their addresses and metadata.
---

import ApiReference from "@site/src/components/ApiReference";
import config from "@site/docs/configs/api-reference/configs.json";
import EthereumApiBanner from "@site/src/components/EthBanner/EthApiBanner.tsx";
import { MainnetBadge } from "@site/src/components/MainnetBadge/MainnetBadge.js";

# Get Token Pairs by Address <MainnetBadge />

<EthereumApiBanner
  customTitle="Looking for token pairs by address on EVM?"
  customText="Access token pairs data on EVM using our API."
  customButtonText="Explore EVM API"
  customButtonLink="/web3-data-api/evm/reference/get-token-pairs"
/>

<ApiReference {...config.solana.getTokenPairs} />
