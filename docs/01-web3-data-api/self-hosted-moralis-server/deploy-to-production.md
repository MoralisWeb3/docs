---
title: "Deploy to production"
slug: "deploy-to-production"
description: "This tutorial teaches you how to deploy your self-hosted Parse server."
---

## Heroku

When hosting your server on Heroku you need make sure to:

- use a [hosted solution for MongoDB](https://docs.moralis.io/docs/run-parse-server-locally#c-use-hosted-mongodb-atlas-hosted)
- use a [hosted solution for Redis](https://docs.moralis.io/docs/run-parse-server-locally#b-use-hosted-redis-enterprise-cloud-hosted).

Next login or sign-up for Heroku and configure your app:

Create a new app from the top menu and set your app name and preferred region where the server is hosted:

![](/img/content/41607d4-Screenshot_2022-09-08_at_02.42.11.webp)

![](/img/content/d4bb8cc-Screenshot_2022-09-08_at_02.42.38.webp)

Deploy your by connecting via Github or using the Heroku CLI. This will import your code to heroku and will automatically rebuild your app when changes are pushed to your repo.

![](/img/content/00b9508-Screenshot_2022-09-08_at_02.43.11.webp)

As a final step you need to set your environment variables.

Navigate to "Settings" and reveal the keys. Here you can paste all the variables from your `.env` file. Make sure that these variables are production-ready (no references to localhost, and different database that used in local development)

![](/img/content/914ac14-Screenshot_2022-09-08_at_02.44.26.webp)

![](/img/content/6f65c9c-Screenshot_2022-09-08_at_02.44.49.webp)

:::info
Make sure to update `SERVER_URL` in the config vars to the deployed url on Heroku. This looks something like `moralis-demo.herokuapp.com/server`. Also make sure to set this same serverUrl in your frontend.
:::

## Google App Engine

### Prerequisites

- Complete [previous steps](https://docs.moralis.io/docs/run-parse-server-locally) and have your environment variables ready.
- Complete [GCP integration prerequisites](https://docs.moralis.io/docs/google-cloud#prerequisites)

### Deployment

:::caution Be aware!
If your [Google Cloud free trial](https://cloud.google.com/free) has ended, the following process **could resort to expenses**.
:::

Replace the environment variables values in **`app.yaml`** with your own:

![](/img/content/161ccae-image.webp)

Open the terminal, make sure you're in the root folder and run:

```
gcloud app deploy
```

Choose your region:

![](/img/content/d8a49da-image.webp)

Type **`Y`** to continue:

![](/img/content/99306a1-image.webp)

After a couple minutes the application is deployed:

![](/img/content/87f1739-image.webp)

Now run the following command to see it on the browser:

```
gcloud app browse
```

Add **`/server`** to the URL and you'll be accessing your **_Moralis Parse Server_ hosted on Google App Engine**:

![](/img/content/7cbef58-image.webp)

:::tip Deployment successful 
:::

## AWS Elastic Beanstalk

### Prerequisites

- Complete [AWS Integration prerequisites](https://docs.moralis.io/docs/aws-integration#prerequisites)
- Environment variables ready from [previous steps](https://docs.moralis.io/docs/run-parse-server-locally#setup-your-project)

### Manual deployment

:::info Coming soon!
:::

### One-click deployment

:::caution
Be aware that this process **could resort to expenses** as **Elastic Beanstalk** is not part of [AWS Free Tier](https://aws.amazon.com/es/free/).
:::

[Click here to deploy automatically](https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/newApplication?applicationName=demo-parse-server-migration&platform=Node.js&tierName=WebServer&environmentType=SingleInstance&sourceBundleUrl=https://moralis-s3-bucket.s3.eu-west-1.amazonaws.com/parse-server-migration.zip)

 And follow the **instructions below**:

Scroll down leaving all the other settings as default and choose _**Upload your code**_:

![](/img/content/31905da-image.webp)

_**Public S3 URL**_ should be automatically selected and filled. Make sure it is so and choose _**Review and launch**_:

![](/img/content/3c4f4f6-image.webp)

Scroll down leaving all the settings as default and choose _**Create app**_:

![](/img/content/a2a6af9-image.webp)

After a couple minutes the application is created but the environment is **not ready** because you need to **set your environment variables**:

![](/img/content/2d9a5c2-image.webp)

In the left navigation pane, go to **_Configuration_** and at the row where we find _Environment properties_, choose _**Edit**_:

![](/img/content/a2e78d0-image.webp)

Paste the environment variables retrieved on the [previous steps](https://docs.moralis.io/docs/run-parse-server-locally#setup-your-project) to the corresponding fields (marked in green) and choose _**Apply**_:

![](/img/content/b8e3def-image.webp)

:::info
This [video](https://youtu.be/9GtysZs-FrA?t=147) also shows you how to get the **environment variables**.
:::

Elastic Beanstalk will update your environment and after a couple of minutes it will be ready:

![](/img/content/00d25ea-image.webp)

In the left navigation pane, choose **_Go to environment_** to test it:

![](/img/content/42e04c4-image.webp)

Add **`/server`** to the URL and you'll be accessing your **_Moralis Parse Server_ hosted on AWS Elastic Beanstalk**:

![](/img/content/d4ef788-image.webp)

:::tip Deployment successful! 
:::

## AWS ECS

<details>

<summary><b>Deprecated</b></summary>

### Setup ECS environment

#### Create ECR repository

Open the [Amazon ECR console](https://console.aws.amazon.com/ecr/) and choose _**Get Started**_ Create repo. Name it **`parse-server-moralis-repo`**:

![](/img/content/b368934-image.webp)

Leave everything else as it is and choose _**Create repository**_.

Copy and save the _Repository name_ and the _URI_ as you'll need them in the next step:

![](/img/content/17b0fd0-image.webp)

:::tip **ECR repository created!**
:::

#### Create a Task Definition //TODO Maybe through JSON?

:::info
[Click here for more information](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-task-definition-classic.html).
:::

Open the [Amazon ECS console](https://console.aws.amazon.com/ecs/). In the navigation pane, choose **_Task Definitions_** and **_Create new task definition_**:

![](/img/content/0bb5259-image.webp)

On the _Select compatibilities_ page, select **_EC2_** and choose _**Next step**_:

![](/img/content/25f9568-image.webp)

Name your task **`parse-server-moralis-task`**:

![](/img/content/60e8d1b-image.webp)

On the _Container definitions_ section, click on **_Add container_**:

![](/img/content/aed6e67-image.webp)

Fill the **_Container name_** and the **_Image_** with the _Repository name_ and the _URI_ that you copied from the [created ECR repository](https://docs.moralis.io/docs/deploy-to-production#create-ecr-repository):

![](/img/content/9f90980-image.webp)

Set **_Memory Limits_** to **`500`** and **_Port mappings_** to **`80:80`**:

![](/img/content/2c27f99-image.webp)

Leave all the other settings as default and choose _**Add**_.

With the container added, scroll down and choose _**Create**_. You should see the task definition created:

![](/img/content/4ca8475-image.webp)

:::tip **Task definition created!**
:::

#### Create a Cluster

:::info
[Click here for more information](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create_cluster.html).
:::

Open the [Amazon ECS console](https://console.aws.amazon.com/ecs/). In the navigation pane, choose **_Clusters_** and **_Create Cluster_**:

![](/img/content/8cabb5b-image.webp)

For _Select cluster compatibility_, choose **_EC2 Linux + Networking_** and then choose **_Next Step_**:

![](/img/content/dbaa74a-image.webp)

On the _Configure cluster_ page, enter a **_Cluster name_**, like **`parse-server-moralis-cluster`**:

![](/img/content/928c5b4-image.webp)

Scroll down leaving all the other settings as default and choose _**Create**_. After some seconds you should see the cluster created:

![](/img/content/2100f89-image.webp)

:::tip **Cluster created!**
:::

#### Create a service

:::info
[Click here for more information](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-service-console-v1.html).
:::

Open the [Amazon ECS console](https://console.aws.amazon.com/ecs/). In the navigation pane, choose **_Clusters_** and select your created cluster:

![](/img/content/e3b3abb-image.webp)

On the _Services_ tab, choose **_Create_**:

![](/img/content/9ae2ac5-image.webp)

On the _Configure service_ page, choose _**EC2**_ as _Launch type_:

![](/img/content/2fc12c6-image.webp)

Select the _**Task definition**_ and the _**Cluster**_ that you just created:

![](/img/content/d71da48-image.webp)

Set the _**Service name**_ as **`parse-server-moralis-service`**:

![](/img/content/64deadc-image.webp)

Set the following fields:

- _**Number of tasks**_: `1`
- _**Minimum healthy percent**_: `0`
- _**Maximum percent**_: `100`

:::info
This value configuration will allow the deployment of updated containers.
:::

Scroll down leaving the other settings as default and choose **_Next step_** a couple times and then _**Create service**_. You should see the service created:

![](/img/content/2e39da7-image.webp)

:::tip **Service created!**
:::

</details>

## Railway

<details>

<summary><b>Instructions</b></summary>

[Click here to deploy automatically](https://railway.app/new/template/1c87QZ)

This will also create a MongoDB and Redis instance for you automatically, all managed by Railway. If you are using your own MongoDB/Redis instances, you can follow [Manual Deployment](https://docs.moralis.io/docs/deploy-to-production#manual-deployment-1), or use this template and just delete the MongoDB and Redis services later.

1. After your server has deployed, assign it a domain (see Step 4 of Manual Deployment).
2. Copy your MongoDB and Parse connection URL (from the "Connect" tab from Mongo).
3. Click on the "Variables" tab in your Parse Server and update:

- `SERVER_URL` with the domain from Step 1 e.g. [`https://***.up.railway.app/server`](https://***.up.railway.app/server)
- `DATABASE_URI` with your MongoDB connection URL e.g. [`mongodb://mongo:***.railway.app:****`](mongodb://mongo:***.railway.app:****/parse) 
- `REDIS_CONNECTION_STRING` with your Redis connection URL e.g. [`redis://***@containers-us-west-157.railway.app:****`](redis://*@containers-us-west-157.railway.app:****)

Your server will re-deploy after these changes.

### Manual Deployment

1. Go to [Railway](https://railway.app/), click "Start a New Project" and choose "Deploy from GitHub repo". Connect your GitHub account.
2. Give permission for Railway to access your self-hosted server repository and click "Deploy Now":

![](/img/content/50e28a0-Railway_2.webp)

3. In your project's deployment page, click on the "Variables" tab and then "Raw Editor". Paste in your environment variables and click "Update Variables":

![](/img/content/43d1e9d-Railway_env_a.webp)

![](/img/content/009db76-Railway_-_env.webp)

4. Click on the "Settings" tab and under "Domains", click "Generate Domain". You can choose a different Railway domain or use your own custom domain:

![](/img/content/de66219-Railway_3.webp)

5. Copy this domain and update your `SERVER_URL` environment variable. Your project will re-deploy:

![](/img/content/2bdc4b2-Railway_4.webp)

6: After your re-deploy is successful, open your Railway project URL in your browser to test:

![](/img/content/63abd77-Railway_5.webp)

</details>
