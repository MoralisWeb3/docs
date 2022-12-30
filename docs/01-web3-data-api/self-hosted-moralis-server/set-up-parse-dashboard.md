---
title: "Set up parse-dashboard"
slug: "set-up-parse-dashboard"
---

## Prerequisites

Before getting started, make sure you have followed this section [Run parse-server locally](https://docs.moralis.io/docs/run-parse-server-locally) and have a server already set up locally.

You will set up your own dashboard to check your data synced with mongodb.

![parse dashboard](https://files.readme.io/834e9ba-Screenshot_2022-11-29_at_13.58.37.jpg)

## Install parse dashboard

```bash npm2yarn
npm install parse-dashboard
```

## Add configuration

Inside your `src` folder create a new file `parseDashboard.ts`. Inside this file add the following code.

```Text src/parseDashboard.ts
//@ts-nocheck
import ParseDashboard from 'parse-dashboard';
import config from './config';

export const parseDashboard = new ParseDashboard(
  {
    apps: [
      {
        appName: 'Moralis Server',
        serverURL: config.SERVER_URL,
        appId: config.APPLICATION_ID,
        masterKey: config.MASTER_KEY,
      },
    ],
  },
  { allowInsecureHTTP: true },
);
```

Back inside your `index.ts` file, import this configuration and create a new route for your dashboard.

```javascript src/index.ts
// @ts-ignore
import ParseServer from 'parse-server';
import Moralis from 'moralis';
import config from './config';
import cors from 'cors';
import express from 'express';
import http from 'http';
import ngrok from 'ngrok';
import { parseServer } from './parseServer';
import { streamsSync } from '@moralisweb3/parse-server';

        // Import parseDashboard // 
import { parseDashboard } from './parseDashboard';

//.....
```

```javascript src/index.ts
//......

app.use(
  streamsSync(parseServer, {
    apiKey: config.MORALIS_API_KEY,
    webhookUrl: '/streams',
  }),
);
app.use(`/server`, parseServer.app);

// Add the new route // 
app.use(`/dashboard`, parseDashboard);

//......
```



## Test your dashboard

You can now build the project and start it locally.

```bash npm2yarn
npm run build
```

Start the project.

```bash npm2yarn
npm run start
```

You can access <http://localhost:1337/dashboard/> and your should see your app.

![](https://files.readme.io/d03235c-image.png)

![](https://files.readme.io/2ecc8d4-image.png)

## Secure access

You can protect your dashboard from being accesses by the public using `username`and `password`.

Inside your `parseDashboard.ts` add the following.

```javascript src/parseDashboard.ts
//@ts-nocheck
import ParseDashboard from 'parse-dashboard';
import config from './config';

export const parseDashboard = new ParseDashboard(
  {
    apps: [
      {
        appName: 'Moralis Server',
        serverURL: config.SERVER_URL,
        appId: config.APPLICATION_ID,
        masterKey: config.MASTER_KEY,
      },
    ],
    users: [
      {
        user: "username123",
        pass: "password123",
      },
    ],
  },
  { allowInsecureHTTP: true },
);

```

Where `user` will be your username and `pass` will be your chosen password.

To test this you will have to rebuild and restart your local server.

```bash npm2yarn
npm run build
```

```bash npm2yarn
npm run start
```

Now head over <http://localhost:1337/dashboard/> and you should be asked to login.

![](https://files.readme.io/6f65c0b-image.png)