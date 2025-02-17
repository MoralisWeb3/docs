---
sidebar_position: 1
sidebar_label: Get Top Gainers

slug: /web3-data-api/evm/reference/get-tokens-with-top-gainers
---

import ApiReference from "@site/src/components/ApiReference";
import Admonition from "@theme/Admonition";
import Link from "@docusaurus/Link";
import config from "../../../../../configs/api-reference/configs.json";

import { PremiumEndpointBadge } from "@site/src/components/PremiumEndpointBadge/PremiumEndpointBadge.js";
import { MainnetBadge } from "@site/src/components/MainnetBadge/MainnetBadge.js";

# Get tokens with top gainers <MainnetBadge /> <PremiumEndpointBadge />

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<Admonition type="info" icon="💡" title="Premium Endpoint">
  <p>
    To use this API, you will need an API key associated with a Moralis account
    on the <strong>Business</strong> plan or higher.
  </p>
</Admonition>

<ApiReference {...config.discovery.getTopGainersTokens} />
