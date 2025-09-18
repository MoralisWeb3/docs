---
sidebar_position: 3
sidebar_label: Search Tokens
slug: /web3-data-api/evm/reference/search-tokens
title: Search Tokens on EVM & Solana
description: Search for tokens based on contract address, token name, or token symbol - EVM & Solana
---

import ApiReference from "@site/src/components/ApiReference";
import config from "@site/configs/api-reference/configs.json";
import Admonition from "@theme/Admonition";
import { PremiumEndpointBadge } from "@site/src/components/PremiumEndpointBadge/PremiumEndpointBadge.js";
import { MainnetBadge } from "@site/src/components/MainnetBadge/MainnetBadge.js";

# Search Tokens <MainnetBadge /> <PremiumEndpointBadge />

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<Admonition type="info" icon="💡" title="Premium Endpoint">
    <p>
      To use this API, you will need an API key associated with a Moralis 
      account on the <strong>Business</strong> plan or a custom Enterprise plan.
    </p>
    <p>
      For FAQs and more information about token search, please check out our <a href="/web3-data-api/evm/token-search">Token Search API FAQ</a>.
    </p>
</Admonition>

<ApiReference {...config.token.searchTokens} />
