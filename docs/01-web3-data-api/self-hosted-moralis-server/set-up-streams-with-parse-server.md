---
title: "Set up streams with parse-server"
slug: "set-up-streams-with-parse-server"
description: "This tutorial teaches you how to set up streams for your self-hosted Parse server."
---

## Prerequisites

Before getting started, make sure you have followed this section [Run parse-server locally](https://docs.moralis.io/docs/run-parse-server-locally) and have a server already set up locally.

## Video Tutorial

https://www.youtube.com/watch?v=o8MAFOFc7H0

## Step 1: Set up webhook route

Inside `.env` file you can add a new variable `STREAMS_WEBHOOK_URL`.

```shell .env
STREAMS_WEBHOOK_URL = '/streams-webhook'
```

Inside `index.ts` import `streamSync` plugin.

```javascript index.ts
// @ts-ignore
import ParseServer from 'parse-server';
import Moralis from 'moralis';
import config from './config';
import cors from 'cors';
import express from 'express';
import http from 'http';
import ngrok from 'ngrok';
import { parseDashboard } from './parseDashboard';
import { parseServer } from './parseServer';

//Import the plugin
import { streamsSync } from '@moralisweb3/parse-server';
```

Set up your express app to use `streamSync` with your route and your API key.

```javascript index.ts
//........

app.use(cors());

//Set up streamSync
app.use(
  streamsSync(parseServer, {
    apiKey: config.MORALIS_API_KEY,
    webhookUrl: config.STREAMS_WEBHOOK_URL,
  }),
);

app.use(`/server`, parseServer.app);

//.........
```

Set up ngrok.

```javascript index.ts
const httpServer = http.createServer(app);
httpServer.listen(config.PORT, async () => {
  if (config.USE_STREAMS) {
    
    //Set up ngrok
    const url = await ngrok.connect(config.PORT);
    // eslint-disable-next-line no-console
    console.log(
      `Moralis Server is running on port ${config.PORT} and stream webhook url ${url}${config.STREAMS_WEBHOOK_URL}`,
    );
  } else {
    // eslint-disable-next-line no-console
    console.log(`Moralis Server is running on port ${config.PORT}.`);
  }
});
```

You can now build the project and start it locally.

```bash npm2yarn
npm run build
```

Start the project.

```bash npm2yarn
npm run start
```

After staring your server you shoud see a similar message in your terminal. This will be the webwook url your would use to create a stream

```shell Terminal
Moralis Server is running on port 1337 and stream webhook url https://23ae-5-12-44-202.ngrok.io/streams-webhook
```

## Step 2: Create a stream

To create a stream you can check the following docs [Create a stream using Admin Panel](https://docs.moralis.io/docs/using-webui) or follow the [Youtube Tutorial](https://youtu.be/o8MAFOFc7H0) starting from minute **7:15**.

You will have to provide your ngrok url that you got from the previous step.

Paste your ngrok url <https://xxxx-xx-xx-xxxx.ngrok.io/streams-webhook>

![](/img/content/5330afb-Screenshot_2022-12-01_at_00.17.56.webp)