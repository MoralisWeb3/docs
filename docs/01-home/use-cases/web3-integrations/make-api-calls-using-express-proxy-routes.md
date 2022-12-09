---
title: "Make API calls using Express proxy routes"
slug: "make-api-calls-using-express-proxy-routes"
excerpt: "You should not directly call the Moralis API from your front-end app. Your Moralis API key should be kept safe from theft or abuse. Even if your code is obfuscated, the HTTP Monitor can almost always extract your key. This is why your API key must be kept secure on the backend. In this tutorial, we'll show you how to do it for Express."
hidden: true
createdAt: "2022-08-24T08:28:58.949Z"
updatedAt: "2022-08-24T08:37:03.917Z"
---
In this guide we will generate proxy endpoints for Solana and EVM APIs and use this proxy on the frontend to make API calls. We will also secure the proxy a little bit more by rate limiting them.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a8a134e-express-proxy.gif",
        "express-proxy.gif",
        600,
        490,
        "#777e7f"
      ]
    }
  ]
}
[/block]
To get this started, we need to install `moralis`, `express`, `axios`, and `express-rate-limit`

```bash
yarn add moralis express express-rate-limit axios
```

Before we begin we need to initialize moralis

```ts
import Moralis from 'moralis';

Moralis.start({
  apiKey: 'your_api_key_here',
});
```

### Proxy generator function

Moralis provides API utility functions that provide descriptions for each API endpoint `Moralis.EvmApi.endpoints.getDescriptors()`. We are going to leverage this function to generate proxy endpoints.
The functions returns an array like this;

```js
[
  {
    name: 'getBalance',
    urlPatternParamNames: [ 'network', 'address' ],
    urlPattern: '/account/{network}/{address}/balance',
    method: 'get',
    bodyParamNames: []
  },
  {
    name: 'getNFTs',
    urlPatternParamNames: [ 'network', 'address' ],
    urlPattern: '/account/{network}/{address}/nft',
    method: 'get',
    bodyParamNames: []
  },
  ...
]

```

now let's create a file `proxyGenerator.ts` and create a or generator class.

```ts
import Moralis from 'moralis';
import express from 'express';
import axios from 'axios';
import { errorHandler } from '../middlewares/errorHandler';

const proxyRouter = express.Router();

export interface ProxyOptions {
  apiKey: string;
}

export class ProxyGenerator {
  private options: ProxyOptions;
  private api: string;
  constructor(api: 'evm' | 'solana', options: ProxyOptions) {
    this.options = options;
    this.api = api;
  }

  public getRouter() {
    let descriptors;
    let baseUrl: string;
    switch (this.api) {
      case 'evm':
        descriptors = Moralis.EvmApi.endpoints.getDescriptors();
        baseUrl = Moralis.EvmApi.baseUrl;
        break;
      case 'solana':
        descriptors = Moralis.SolApi.endpoints.getDescriptors();
        baseUrl = Moralis.SolApi.baseUrl;
        break;
      default:
        throw new Error('invalid api');
    }

    for (const descriptor of descriptors) {
      const urlPattern = descriptor.urlPattern.replace(/\{/g, ':').replace(/\}/g, '');
      proxyRouter.route(urlPattern)[descriptor.method](async (req, res, next) => {
        let url = descriptor.urlPattern;
        for (const param in req.params) {
          if (Object.prototype.hasOwnProperty.call(req.params, param)) {
            url = url.replace(`{${param}}`, req.params[param]);
          }
        }
        const body = Object.keys(req.body).reduce((result, key) => {
          if (descriptor.bodyParamNames.includes(key)) {
            return { ...result, [key]: req.body[key] };
          }
          return result;
        }, {});

        const params = Object.keys(req.body).reduce((result, key) => {
          if (!req.body[key] || key in body || descriptor.urlPatternParamNames.includes(key)) {
            return result;
          }
          return { ...result, [key]: req.body[key] };
        }, {});

        try {
          const response = await axios.request({
            method: descriptor.method,
            params: { ...params, ...req.query },
            url: `${baseUrl}${url}`,
            data: body,
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': this.options.apiKey,
            },
          });
          return res.send(response.data);
        } catch (error) {
          return errorHandler(error as Error, req, res, next);
        }
      });
    }
    return proxyRouter;
  }
}
```

Here, we developed a class that dynamically builds routes based on endpoint descriptions and sends an axios request to the Moralis API using your API key using the supplied parameters.

Now let us include this routes in our express app and add rate limit options in `apiRouter.ts`.

```ts
import express from 'express';
import { ProxyGenerator } from './api/proxyGenerator';
import rateLimit, { MemoryStore } from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // Limit each IP to 10 requests per `window` (here, per minute)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  store: new MemoryStore(),
});

export const apiRouter = express.Router();

const evmProxyRouter = new ProxyGenerator('evm', {
  apiKey: 'your_api_key_here',
});

const solanaProxyRouter = new ProxyGenerator('solana', {
  apiKey: 'your_api_key_here',
});

apiRouter.use('/evm-api-proxy', apiLimiter, evmProxyRouter.getRouter());
apiRouter.use('/solana-api-proxy', apiLimiter, solanaProxyRouter.getRouter());
```

Now that we have our proxy routes setup and rate limited let us put everything together in our express setup.

```ts
import Moralis from 'moralis';
import express from 'express';
import cors from 'cors';
import config from './config';
import { apiRouter } from './apiRouter';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

Moralis.start({
  apiKey: 'your_api_key_here',
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use('/api', apiRouter);
app.use(errorHandler);

app.use(express.static('public'));

app.listen(config.PORT, function () {
  // eslint-disable-next-line no-console
  console.log(`${config.APP_NAME} is running on port ${config.PORT}`);
});
```

Now you can make callees to Moralis API using the proxy endpoints

## Demo Project
You can find the repository with the final code here: [express-proxy](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/express-proxy).