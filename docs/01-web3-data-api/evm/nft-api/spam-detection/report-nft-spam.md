---
title: "Report Spam"
slug: "../../report-nft-spam"
description: "NFT spam detection is designed to provide an extra layer of protection and help you easily identify potentially harmful contracts."
sidebar_position: 1
---

## Step 1: Setup Moralis

Read the article [Setting Up Moralis: Getting Started](/web3-data-api/evm/get-your-api-key) and make sure to finish all the steps. Only after that you can go ahead to complete this guide.

## Step 2: Report spam NFT contracts

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
          contractType: "NFT",
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
          contractType: "NFT",
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
            "contract_type": "NFT"
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

Congratulations 🥳 You just report spam NFT contracts with just a few lines of code using the Moralis Utils API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [contractsReview](/web3-data-api/evm/reference/contracts-review)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
