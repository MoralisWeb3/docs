---
title: "Deploy to production"
slug: "deploy-to-production"
---

## Heroku

When hosting your server on Heroku you need make sure to:

- use a [hosted solution for MongoDB](https://docs.moralis.io/docs/run-parse-server-locally#c-use-hosted-mongodb-atlas-hosted)
- use a [hosted solution for Redis](https://docs.moralis.io/docs/run-parse-server-locally#b-use-hosted-redis-enterprise-cloud-hosted).

Next login or sign-up for Heroku and configure your app:

Create a new app from the top menu and set your app name and preferred region where the server is hosted:

![](https://files.readme.io/41607d4-Screenshot_2022-09-08_at_02.42.11.png)

![](https://files.readme.io/d4bb8cc-Screenshot_2022-09-08_at_02.42.38.png)

Deploy your by connecting via Github or using the Heroku CLI. This will import your code to heroku and will automatically rebuild your app when changes are pushed to your repo.

![](https://files.readme.io/00b9508-Screenshot_2022-09-08_at_02.43.11.png)

As a final step you need to set your environment variables.

Navigate to "Settings" and reveal the keys. Here you can paste all the variables from your `.env` file. Make sure that these variables are production-ready (no references to localhost, and different database that used in local development)

![](https://files.readme.io/914ac14-Screenshot_2022-09-08_at_02.44.26.png)

![](https://files.readme.io/6f65c9c-Screenshot_2022-09-08_at_02.44.49.png)

> 📘 
> 
> Make sure to update `SERVER_URL` in the config vars to the deployed url on Heroku. This looks something like `moralis-demo.herokuapp.com/server`. Also make sure to set this same serverUrl in your frontend.

## Google App Engine

### Prerequisites

- Complete [previous steps](https://docs.moralis.io/docs/run-parse-server-locally) and have your environment variables ready.
- Complete [GCP integration prerequisites](https://docs.moralis.io/docs/google-cloud#prerequisites)

### Deployment

> 🚧 Be aware!
> 
> If your [Google Cloud free trial](https://cloud.google.com/free) has ended, the following process **could resort to expenses**.

Replace the environment variables values in **`app.yaml`** with your own:

![](https://files.readme.io/161ccae-image.png)

Open the terminal, make sure you're in the root folder and run:

```
gcloud app deploy
```

Choose your region:

![](https://files.readme.io/d8a49da-image.png)

Type **`Y`** to continue:

![](https://files.readme.io/99306a1-image.png)

After a couple minutes the application is deployed:

![](https://files.readme.io/87f1739-image.png)

Now run the following command to see it on the browser:

```
gcloud app browse
```

Add **`/server`** to the URL and you'll be accessing your **_Moralis Parse Server_ hosted on Google App Engine**:

![](https://files.readme.io/7cbef58-image.png)



> 👍 Deployment successful



## AWS Elastic Beanstalk

### Prerequisites

- Complete [AWS Integration prerequisites](https://docs.moralis.io/docs/aws-integration#prerequisites)
- Environment variables ready from [previous steps](https://docs.moralis.io/docs/run-parse-server-locally#setup-your-project)

### Manual deployment

> 📘 Coming soon!

### One-click deployment

> 🚧 Warning
> 
> Be aware that this process **could resort to expenses** as **Elastic Beanstalk** is not part of [AWS Free Tier](https://aws.amazon.com/es/free/).

> 👍 [Click here to deploy automatically](https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/newApplication?applicationName=demo-parse-server-migration&platform=Node.js&tierName=WebServer&environmentType=SingleInstance&sourceBundleUrl=https://moralis-public-bucket.s3.amazonaws.com/parse-server-migration-build.zip)
> 
> And follow the **instructions below**:

Scroll down leaving all the other settings as default and choose _**Upload your code**_:

![](https://files.readme.io/31905da-image.png)

_**Public S3 URL**_ should be automatically selected and filled. Make sure it is so and choose _**Review and launch**_:

![](https://files.readme.io/3c4f4f6-image.png)

Scroll down leaving all the settings as default and choose _**Create app**_:

![](https://files.readme.io/a2a6af9-image.png)

After a couple minutes the application is created but the environment is **not ready** because you need to **set your environment variables**:

![](https://files.readme.io/2d9a5c2-image.png)

In the left navigation pane, go to **_Configuration_** and at the row where we find _Environment properties_, choose _**Edit**_:

![](https://files.readme.io/a2e78d0-image.png)

Paste the environment variables retrieved on the [previous steps](https://docs.moralis.io/docs/run-parse-server-locally#setup-your-project) to the corresponding fields (marked in green) and choose _**Apply**_:

![](https://files.readme.io/b8e3def-image.png)

> 📘 Need help?
> 
> This [video](https://youtu.be/9GtysZs-FrA?t=147) also shows you how to get the **environment variables**.

Elastic Beanstalk will update your environment and after a couple of minutes it will be ready:

![](https://files.readme.io/00d25ea-image.png)

In the left navigation pane, choose **_Go to environment_** to test it:

![](https://files.readme.io/42e04c4-image.png)

Add **`/server`** to the URL and you'll be accessing your **_Moralis Parse Server_ hosted on AWS Elastic Beanstalk**:

![](https://files.readme.io/d4ef788-image.png)

> 👍 Deployment successful!

## AWS ECS

<details>

<summary><b>Deprecated</b></summary>

### Setup ECS environment

#### Create ECR repository

Open the [Amazon ECR console](https://console.aws.amazon.com/ecr/) and choose _**Get Started**_ Create repo. Name it **`parse-server-moralis-repo`**:

![](https://files.readme.io/b368934-image.png)

Leave everything else as it is and choose _**Create repository**_.

Copy and save the _Repository name_ and the _URI_ as you'll need them in the next step:

![](https://files.readme.io/17b0fd0-image.png)

> 👍 
> 
> **ECR repository created!**

#### Create a Task Definition //TODO Maybe through JSON?

> 📘 
> 
> [Click here for more information](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-task-definition-classic.html).

Open the [Amazon ECS console](https://console.aws.amazon.com/ecs/). In the navigation pane, choose **_Task Definitions_** and **_Create new task definition_**:

![](https://files.readme.io/0bb5259-image.png)

On the _Select compatibilities_ page, select **_EC2_** and choose _**Next step**_:

![](https://files.readme.io/25f9568-image.png)

Name your task **`parse-server-moralis-task`**:

![](https://files.readme.io/60e8d1b-image.png)

On the _Container definitions_ section, click on **_Add container_**:

![](https://files.readme.io/aed6e67-image.png)

Fill the **_Container name_** and the **_Image_** with the _Repository name_ and the _URI_ that you copied from the [created ECR repository](https://docs.moralis.io/docs/deploy-to-production#create-ecr-repository):

![](https://files.readme.io/9f90980-image.png)

Set **_Memory Limits_** to **`500`** and **_Port mappings_** to **`80:80`**:

![](https://files.readme.io/2c27f99-image.png)

Leave all the other settings as default and choose _**Add**_.

With the container added, scroll down and choose _**Create**_. You should see the task definition created:

![](https://files.readme.io/4ca8475-image.png)

> 👍 
> 
> **Task definition created!**

#### Create a Cluster

> 📘 
> 
> [Click here for more information](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create_cluster.html).

Open the [Amazon ECS console](https://console.aws.amazon.com/ecs/). In the navigation pane, choose **_Clusters_** and **_Create Cluster_**:

![](https://files.readme.io/8cabb5b-image.png)

For _Select cluster compatibility_, choose **_EC2 Linux + Networking_** and then choose **_Next Step_**:

![](https://files.readme.io/dbaa74a-image.png)

On the _Configure cluster_ page, enter a **_Cluster name_**, like **`parse-server-moralis-cluster`**:

![](https://files.readme.io/928c5b4-image.png)

Scroll down leaving all the other settings as default and choose _**Create**_. After some seconds you should see the cluster created:

![](https://files.readme.io/2100f89-image.png)

> 👍 
> 
> **Cluster created!**

#### Create a service

> 📘 
> 
> [Click here for more information](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-service-console-v1.html).

Open the [Amazon ECS console](https://console.aws.amazon.com/ecs/). In the navigation pane, choose **_Clusters_** and select your created cluster:

![](https://files.readme.io/e3b3abb-image.png)

On the _Services_ tab, choose **_Create_**:

![](https://files.readme.io/9ae2ac5-image.png)

On the _Configure service_ page, choose _**EC2**_ as _Launch type_:

![](https://files.readme.io/2fc12c6-image.png)

Select the _**Task definition**_ and the _**Cluster**_ that you just created:

![](https://files.readme.io/d71da48-image.png)

Set the _**Service name**_ as **`parse-server-moralis-service`**:

![](https://files.readme.io/64deadc-image.png)

Set the following fields:

- _**Number of tasks**_: `1`
- _**Minimum healthy percent**_: `0`
- _**Maximum percent**_: `100`

> 📘 
> 
> This value configuration will allow the deployment of updated containers.

Scroll down leaving the other settings as default and choose **_Next step_** a couple times and then _**Create service**_. You should see the service created:

![](https://files.readme.io/2e39da7-image.png)

> 👍 
> 
> **Service created!**

</details>

## Railway

<details>

<summary><b>Instructions</b></summary>

> 👍 [Click here to deploy automatically](https://railway.app/new/template/1c87QZ)
> 
> This will also create a MongoDB and Redis instance for you automatically, all managed by Railway. If you are using your own MongoDB/Redis instances, you can follow [Manual Deployment](https://docs.moralis.io/docs/deploy-to-production#manual-deployment-1), or use this template and just delete the MongoDB and Redis services later.
> 
> 1. After your server has deployed, assign it a domain (see Step 4 of Manual Deployment).
> 2. Copy your MongoDB and Parse connection URL (from the "Connect" tab from Mongo).
> 3. Click on the "Variables" tab in your Parse Server and update:
> 
> - `SERVER_URL` with the domain from Step 1 e.g. [`https://***.up.railway.app/server`](https://***.up.railway.app/server)
> - `DATABASE_URI` with your MongoDB connection URL e.g. [`mongodb://mongo:***.railway.app:****`](mongodb://mongo:***.railway.app:****/parse) 
> - `REDIS_CONNECTION_STRING` with your Redis connection URL e.g. [`redis://***@containers-us-west-157.railway.app:****`](redis://***@containers-us-west-157.railway.app:****)
> 
> Your server will re-deploy after these changes.

### Manual Deployment

1. Go to [Railway](https://railway.app/), click "Start a New Project" and choose "Deploy from GitHub repo". Connect your GitHub account.
2. Give permission for Railway to access your self-hosted server repository and click "Deploy Now":

![](https://files.readme.io/50e28a0-Railway_2.png)

3. In your project's deployment page, click on the "Variables" tab and then "Raw Editor". Paste in your environment variables and click "Update Variables":

![](https://files.readme.io/43d1e9d-Railway_env_a.png)

![](https://files.readme.io/009db76-Railway_-_env.png)

4. Click on the "Settings" tab and under "Domains", click "Generate Domain". You can choose a different Railway domain or use your own custom domain:

![](https://files.readme.io/de66219-Railway_3.png)

5. Copy this domain and update your `SERVER_URL` environment variable. Your project will re-deploy:

![](https://files.readme.io/2bdc4b2-Railway_4.png)

6: After your re-deploy is successful, open your Railway project URL in your browser to test:

![](https://files.readme.io/63abd77-Railway_5.png)

</details>