---
sidebar_position: 4
sidebar_label: Get Token Pair Stats
slug: /web3-data-api/solana/reference/get-token-pair-stats
---

import ApiReference from "@site/src/components/ApiReference";
import config from "@site/docs/configs/api-reference/configs.json";
import EthereumApiBanner from "@site/src/components/EthBanner/EthApiBanner.tsx";

import Admonition from "@theme/Admonition";

# Get Token Pair Stats

<ApiReference {...config.solana.getPairStats} >
<EthereumApiBanner
  customTitle="Looking for token pair stats on EVM?"
  customText="Access token pair stats on EVM using our API."
  customButtonText="Explore EVM API"
  customButtonLink="/web3-data-api/evm/reference/get-token-pair-stats"
/>

<Admonition type="info" title="Note">

<p>
The data is updated every 30 seconds to ensure you have access to near real-time information about price changes, liquidity, volume, and trading activity.

</p>
</Admonition>
</ApiReference>
