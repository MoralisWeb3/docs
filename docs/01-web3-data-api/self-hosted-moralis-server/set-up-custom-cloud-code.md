---
title: "Set up custom cloud code"
slug: "set-up-custom-cloud-code"
---

## Prerequisites

Before getting started, make sure you have followed this section [Run parse-server locally](https://docs.moralis.io/docs/run-parse-server-locally) and have a server already set up locally.

## Step 1: Add custom cloud code.

Inside a self-hosted server you will have to use the `parse-server` syntax.  
[Parse server cloud code documentation](https://docs.parseplatform.org/cloudcode/guide/).

By default the cloud code is located in `src/cloud/main.ts`.

Begin by creating a new file inside your `cloud` folder and give it the name you want. For this example we will use `cloud.ts`.

Inside your newly created file `src/cloud/cloud.ts`add your cloud funtictions.

```typescript cloud.ts
declare const Parse: any;

Parse.Cloud.define('Hello', () => {
  return `Hello! Cloud functions are cool!`;
});

Parse.Cloud.define('SayMyName', (request: any) => {
  return `Hello ${request.params.name}! Cloud functions are cool!`;
});
```

You can now import this file in your `main.ts`

```typescript main.ts
declare const Parse: any;
import './generated/evmApi';
import './generated/solApi';

//import your file
import './cloud';


//.........
```



## Step 2: Testing

You can now build the project and start it locally.

```bash npm2yarn
npm run build
```

Start the project.

```bash npm2yarn
npm run start
```

On the client side, call the cloud function using the Moralis v1 syntax.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="Vanilla Javascript" default>

```typescript
const response = await Moralis.Cloud.run("Hello");
console.log(response);
```

  </TabItem>
  <TabItem value="react" label="React">

```typescript
const { fetch, data, error } = useMoralisCloudFunction("Hello");

<button onClick={() => fetch()}>Fetch<button>
```

  </TabItem>
</Tabs>

## Video Tutorial

https://www.youtube.com/watch?v=eZeGEy33SgY

## Set up jobs with parse-server

We will add custom jobs to our self-hosted server.

![](/img/content/263def3-image.png)

First, before creating a job we need to install the required package:

```bash npm2yarn
npm install parse-server-jobs-scheduler
```

Back inside your `src/cloud/` folder, create a new file called `jobs.ts` and add the following code:

```typescript jobs.ts
declare const Parse: any;

import Scheduler from 'parse-server-jobs-scheduler';
const scheduler = new Scheduler();

// Recreates all crons when the server is launched
scheduler.recreateScheduleForAllJobs();

// Recreates schedule when a job schedule has changed
Parse.Cloud.afterSave('_JobSchedule', async (request: any) => {
  scheduler.recreateSchedule(request.object.id);
});

// Destroy schedule for removed job
Parse.Cloud.afterDelete('_JobSchedule', async (request: any) => {
  scheduler.destroySchedule(request.object.id);
});

```

Import the new file inside `src/cloud/main.ts`

```typescript main.ts
declare const Parse: any;
import './generated/evmApi';
import './generated/solApi';
import './cloud';

//import your file
import './jobs';
```

Inside your custom `cloud.ts` file lets create a job:

```typescript cloud.ts
declare const Parse: any;

Parse.Cloud.define('Hello', () => {
  return `Hello! Cloud functions are cool!`;
});

Parse.Cloud.define('SayMyName', (request: any) => {
  return `Hello ${request.params.name}! Cloud functions are cool!`;
});

Parse.Cloud.job('newJob', () => {
  console.log('The code inside newJob has beed executed');
  return 'test';
});
```



You can now rebuild and start your server.

```bash npm2yarn
npm run build
```

Start the project.

```bash npm2yarn
npm run start
```

Now head over  <http://localhost:1337/dashboard/> and select `Schedule a job` to test it.

![](/img/content/de70fe6-image.png)

After you chose the job and the desire interval you can now click schedule:

![](/img/content/305932c-image.png)

If `Start immediately` was selected your job will start right away and repeat based on the selected time interval.

![](/img/content/5b811e2-image.png)