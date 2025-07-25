---
sidebar_position: 0
sidebar_label: Get Filtered Tokens
slug: /web3-data-api/solana/reference/get-filtered-tokens
title: Get Filtered Tokens API - Get a list of filtered tokens
description: Learn how to use the Get Filtered Tokens API endpoint to retrieve a list of tokens that match specified filters and criteria.
---

import ApiReference from "@site/src/components/ApiReference";
import config from "../../../../../configs/api-reference/configs.json";
import Admonition from "@theme/Admonition";
import ReactMarkdown from "react-markdown";
import { PremiumEndpointBadge } from "@site/src/components/PremiumEndpointBadge/PremiumEndpointBadge.js";
import { MainnetBadge } from "@site/src/components/MainnetBadge/MainnetBadge.js";

# Get Filtered Tokens <MainnetBadge /> <PremiumEndpointBadge />

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<Admonition type="info" icon="💡" title="Premium Endpoint">
    <p>
      To use this API, you will need an API key associated with a Moralis
      account on the <strong>Business</strong> plan or higher.
    </p>
    <p>
      For FAQs and more information about the filtered tokens API, please check out our <a href="/web3-data-api/evm/filtered-token-api-faq">Filtered Tokens FAQ</a>. For tutorials, please see the <a href="/web3-data-api/evm/tutorials/filtered-tokens-api/overview">Filtered Tokens API tutorials</a>.
    </p>
</Admonition>

<ApiReference {...config.solana.getFilteredTokens}></ApiReference>
