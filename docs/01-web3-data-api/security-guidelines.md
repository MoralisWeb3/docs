---
title: "Security Guidelines"
slug: "security-guidelines"
excerpt: "Use the following security guidelines when building your dapp to keep it secure."
sidebar_position: 7
---
## Securing Your API Key

Your [Moralis API key](/web3-data-api/get-your-api-key) is a sensitive information that will give access to all Moralis API for those who hold it. In other words, if your [Moralis API key](/web3-data-api/get-your-api-key) is exposed to bad actors, they will be able to abuse your Moralis API usage while you pay the bill for those unauthorized usage.

In order to avoid such scenario, it is best practice for you to always follow these security guidelines when using Moralis:

### Step 1: Store your API key as secrets

It is highly recommended that you separate your [Moralis API key](/web3-data-api/get-your-api-key) and your code. For the separation, it is best practice for you to store your [Moralis API key](/web3-data-api/get-your-api-key) as an **environment variable**, specifically in [secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) manager for production environment and `.env` files for local environment.

To add your [Moralis API key](/web3-data-api/get-your-api-key) as environment variable in your local environment, first you will need to install package that will enable you to inject those environment variables into your project.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```shell
# Read more about Dotenv at https://www.npmjs.com/package/dotenv
npm install dotenv
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
## Read more about Dotenv at https://www.npmjs.com/package/dotenv
yarn add dotenv
```

</TabItem>
<TabItem value="pip" label="pip">

```shell
# Read more about Python Decouple at https://pypi.org/project/python-decouple/
pip install python-decouple
```

</TabItem>
</Tabs>

After installing the necessary package, create a `.env` file to store your [Moralis API key](/web3-data-api/get-your-api-key) and have your `.env` file in `.gitignore` to avoid accidentally pushing your `.env` file to public repositories.


<Tabs>
  <TabItem value="env" label=".env" default>

```shell .env
# Get your Moralis API Key at https://admin.moralis.io/web3apis
MORALIS_API_KEY=xxx
```

</TabItem>
<TabItem value="gitignore" label=".gitignore">

```Text .gitignore
.env
```

</TabItem>
</Tabs>

Once all are setup, you can use the installed package to read the environment variable to get the [Moralis API key](/web3-data-api/get-your-api-key) to be used in your code.

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const dotenv = require("dotenv");

// inject environment variables
dotenv.config()

const apiKey: string = process.env.MORALIS_API_KEY;
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";
import dotenv from "dotenv";

// inject environment variables
dotenv.config();

const apiKey: string = process.env.MORALIS_API_KEY;
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from decouple import config

api_key = config('MORALIS_API_KEY')
```

</TabItem>
</Tabs>

In production environment, secrets manager setup will differ from one platform to another. However, the similar principles apply where you'll need to store your [Moralis API key](/web3-data-api/get-your-api-key) as an (encrypted) environment variable, with `MORALIS_API_KEY` as the key and the API key as its value.

### Step 2: Avoid API Calls from the client-side

[Moralis API key](/web3-data-api/get-your-api-key) is used in the header of any Moralis API calls. In general, as long as the API call is made through HTTPS, unauthorized third-party will not be able to get your Moralis API key as it is encrypted.

However, if the API call is made through the client-side, this will expose all the API call metadata, including the header information which contains your [Moralis API key](/web3-data-api/get-your-api-key). As a consequence, if there is a technically savvy bad actor using your dapp, they will be able to steal your API key from the client-side and abuse it without your authorization.

It is important to note as well that if you make any Moralis API call on the frontend, storing the Moralis API key as secrets, as explained in the previous step, will not help. This is because once the API key is injected to your client-side dapp, it will likely be accessible to JS and therefore vulnerable to XSS attack.

In order to avoid bad actor stealing your [Moralis API key](/web3-data-api/get-your-api-key), it is recommended that you make all Moralis API calls from the server-side. If you are integrating Moralis to your NodeJS or Python project, you can achieve that by using our backend-focused [Moralis SDK](/web3-data-api/moralis-sdk). For NextJS users, we also provide client-side package [`@moralisweb3/next`](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/packages/next) to call Moralis API from NextJS backend using React Hooks.

## References

- [Moralis API Key](/web3-data-api/get-your-api-key)
- [Moralis SDK](/web3-data-api/moralis-sdk)
- [`@moralisweb3/next`](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/packages/next)

## Next Steps

To secure your dapp even further, we have more in-depth guides on specific APIs:

- [Streams API Webhook Security](/streams-api/webhook-security)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.