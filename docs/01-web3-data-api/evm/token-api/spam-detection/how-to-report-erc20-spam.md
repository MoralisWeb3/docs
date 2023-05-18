---
title: "How to report spam ERC20 contracts"
slug: "../how-to-report-erc20-spam"
description: "Learn how to report spam ERC20 contracts using Moralis Utils API."
sidebar_label: "Report Spam ERC20 Contracts"
sidebar_position: 7
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Report spam ERC20 contracts

In order to run smart contract function, Moralis provides you a [contractsReview](/web3-data-api/evm/reference/contracts-review) endpoint to do so.

Here you'll need three parameters: `chain`, `contract_address`, and `reason`.

Once you've obtained `chain`, `contract_address`, and `reason`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const abi = require("abi.json");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const chain = EvmChain.ETHEREUM;

  const contractAddress = "0x06012c8cf97bead5deae237070f9587f8e7a266d";

  const reason = "My Reason";

  const response = await Moralis.EvmApi.utils.reviewContracts(
    {
      chain,
    },
    {
      contracts: [
        {
          reason,
          contractAddress,
          reportType: "spam",
          contractType: "ERC20",
        },
      ],
    }
  );

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import abi from "abi.json";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const chain = EvmChain.ETHEREUM;

  const contractAddress = "0x06012c8cf97bead5deae237070f9587f8e7a266d";

  const reason = "My Reason";

  const response = await Moralis.EvmApi.utils.reviewContracts(
    {
      chain,
    },
    {
      contracts: [
        {
          reason,
          contractAddress,
          reportType: "spam",
          contractType: "ERC20",
        },
      ],
    }
  );

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"

body = {
    "contracts": [
        {
            "contract_address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
            "reason": "My Reason",
            "report_type": "spam",
            "contract_type": "ERC20"
        }
    ]
}

params = {
    "chain": "eth"
}

result = evm_api.utils.review_contracts(
    api_key=api_key,
    params=params,
    body=body
)

print(result)
```

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{ "message": "Submission successful" }
```

Congratulations 🥳 You just report spam ERC20 contracts with just a few lines of code using the Moralis Utils API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [contractsReview](/web3-data-api/evm/reference/contracts-review)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
