---
title: "AWS Lambda (NodeJS)"
slug: "aws-lambda-nodejs"
description: "This tutorial shows how to easily integrate our [NodeJS SDK](/docs/introduction-to-moralis-sdk) with AWS Lambda. We're going to cover two ways of doing it:\n* Develop and deploy a [Lambda App with multiple functions](#lambda-app-with-multiple-functions).\n* Develop and deploy a [Lambda NodeJS Express API](#lambda-nodejs-express-api).\n\nTo make everything easier, we're going to use _[Serverless Framework](https://www.serverless.com/)_."
---
> 📘 What is AWS Lambda?
> 
> Lambda is a compute service that lets you run code without provisioning or managing servers. [More information](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

> 📘 What is Serverless Framework?
> 
> It's an all-in-one development solution for auto-scaling apps on AWS Lambda. [More information](https://www.serverless.com/framework/docs).

## Prerequisites

- Create a [Moralis account](https://admin.moralis.io/register)
- Install and set up your editor of choice (we will use [Visual Studio Code](https://code.visualstudio.com/) in this tutorial)
- Install [NodeJS](https://nodejs.org/en/)
- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions)
- Install [Serverless Framework](https://www.serverless.com/framework/docs/getting-started#installation)

## AWS setup

### Create an [AWS Account](https://docs.aws.amazon.com/accounts/latesthttps://docs.moralis.io/reference/manage-acct-creating.html)

To create an AWS account, simply follow the following guide [here](https://docs.aws.amazon.com/accounts/latesthttps://docs.moralis.io/reference/manage-acct-creating.html).

### Create an [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console)

When creating the user, make sure you select both **_AWS Credential types_**:

![](/img/content/c817a0e-image.png)

Also make sure to attach **_AdministratorAccess_** as a policy:

![](/img/content/34621f7-image.png)



> 🚧 
> 
> Be aware that the **_AdministratorAccess_** policy will give the **IAM user** a lot of control over your AWS environment. In a production environment, make sure to give the IAM users **only the policies they require**.

And last, but **very important**, download the credentials in a `.csv`:

![](/img/content/2f88fdb-image.png)

## Configure AWS Credentials

This is the first step we need to take. The project doesn't need to be set up yet as the credentials will be stored in your system. Thanks to having **AWS CLI** installed, you can open your terminal and run in any location:

```powershell
aws configure
```



You'll need to enter your **IAM User credentials** (`AWS Access Key ID` and `AWS Secret Access Key`). Then press two times enter:

```text
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: ENTER
Default output format [None]: ENTER
```



AWS credentials are configured!

## Lambda App with multiple functions

> 📘 Download completed project
> 
> You can download the completed VS Code project [here](https://github.com/MoralisWeb3/examples-aws-lambda-nodejs/tree/main/aws-node-project). If you do so, you can skip _Project setup_ and _Development_ steps and go straight to [_Install dependencies_](#install-dependencies).

### Project setup

Create an empty folder and open it with VS Code. Then, open the terminal there and run:

```
serverless
```



Running this command should give you some options. Choose **_Starter_**:

![](/img/content/c026f4e-image.png)



Press `ENTER` to choose a default project name or enter your own:

![](/img/content/ff45297-image.png)



After **Serverless** has downloaded the template, it will ask you to login/register to the dashboard. We don't need it for this project so type `n`:

![](/img/content/ac122a2-image.png)



Finally, type `n` again as we don't want to deploy now:

![](/img/content/8df9b06-image.png)



Type `n` again if the console seems stuck.

**Nice! We have the sample project created:**

![](/img/content/154ea8e-image.png)

Now, let's create a new folder inside the project named **_functions_** as we will be creating multiple functions and placing them there:

![](/img/content/c4da9f8-image.png)



Continue by placing the auto generated `handler.js` inside:

![](/img/content/bde5154-image.png)



Now we have to open **`serverless.yml`** and set the new location of `handler.js`:

![](/img/content/9a747e6-image.png)



We also want to add the `MORALIS_API_KEY` as an **environment variable**. Replace the code in `serverless.yml` with the following:

```
service: aws-node-project

frameworkVersion: '3'

provider:
  name: aws
  runtime: nodejs14.x
  environment:
    MORALIS_API_KEY: 'replace_me'

functions:
  hello:
    handler: functions/handler.hello
```

![](/img/content/cab8050-image.png)

> 👍 Done
> 
> **With that, we have the project set up.**

> 🚧 But remember...
> 
> Replace the `MORALIS_API_KEY` field with [your own key](/web3-data-api/get-your-api-key#step-2-get-api-key) before testing and deploying.

## Development

### Create `getNativeBalance` function

To start, let's use the existing `handler.js`. Rename it to **`getNativeBalance.js`**:

![](/img/content/6b7859d-image.png)



Also change `module.exports.hello` to **`module.exports.handler`**:

![](/img/content/53288c1-image.png)



Now open `serverless.yml` and change the function name and handler:

```text
service: aws-node-project

frameworkVersion: '3'

provider:
  name: aws
  runtime: nodejs14.x
  environment:
    MORALIS_API_KEY: 'replace_me'

functions:
  getNativeBalance:
    handler: functions/getNativeBalance.handler
```



![](/img/content/94f6ff0-image.png)



Finally it's time to customize the code in **`getNativeBalance.js`** and add the _getNativeBalance_ Moralis functionality. Let's start by adding the Moralis requirement:

```javascript
const Moralis = require('moralis').default;
```



![](/img/content/71df42f-image.png)



Add the function that will initialize `moralis`, using the `MORALIS_API_KEY` that we added as an enviromental variable:

```javascript
const startMoralis = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY
  });
};

startMoralis();
```



![](/img/content/431d2db-image.png)



Now swap all `module.exports.handler` code section for the following code, which implements the desired SDK method:

```javascript
module.exports.handler = async (event) => {
  // Get native balance
  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    address: event.address,
    chain: event.chain
  });

  // Format the native balance formatted in ether via the .ether getter
  const nativeBalanceEther = nativeBalance.result.balance.ether;
  
  return {
    result: nativeBalanceEther
  }
};
```



> 📘 
> 
> We pass the `address` and the `chain` as _**event** parameters_.

**The complete `getNativeBalance.js` should look like this:**

```javascript
'use strict';
const Moralis = require('moralis').default;

const startMoralis = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY
  });
};

startMoralis();

module.exports.handler = async (event) => {
  // Get native balance
  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    address: event.address,
    chain: event.chain
  });

  // Format the native balance formatted in ether via the .ether getter
  const nativeBalanceEther = nativeBalance.result.balance.ether;
  
  return {
    result: nativeBalanceEther
  }
};
```



### Create `getWalletNfts` function

Create a new file under `functions` folder and name it **`getWalletNfts.js`**:

![](/img/content/183defc-image.png)

Go to `serverless.yml` and add the following code in `functions`:

```
getWalletNfts:
    handler: functions/getWalletNfts.handler
```



![](/img/content/298f2fc-image.png)



**Finally, complete `getWalletNfts.js` by adding the following code:**

```javascript
'use strict';
const Moralis = require('moralis').default;

const startMoralis = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });
};

startMoralis();

module.exports.handler = async (event) => {
  // Get wallet NFTs
  const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
    address: event.address,
    chain: event.chain,
    limit: 10
  });

  return {
    result: JSON.stringify(nfts)
  }
};
```



## Install dependencies

**IMPORTANT:** On the terminal, place yourself at the root folder of the project. I named my project `aws-node-project` so in my case I need to run:

```powershell powersh
cd aws-node-project
```



![](/img/content/dc786c5-image.png)



Now that we're in the right location, let's install **`moralis`**:

```powershell
npm install moralis
```



## Local testing

Open **_event.json_** in the project root folder:

![](/img/content/facb326-image.png)

Replace the _address_ and _chain_ values with your own information:

![](/img/content/1bd433e-image.png)

Now let's test one of the functions, for example `getNativeBalance`. Open the terminal and run:

```powershell
serverless invoke -f getNativeBalance --path event.json
```



**Test run successfully!**

![](/img/content/39d265c-image.png)

# Lambda NodeJS Express API

> 📘 Download completed project
> 
> You can download the completed VS Code project [here](https://github.com/MoralisWeb3/examples-aws-lambda-nodejs/tree/main/aws-node-express-api-project). If you do so, you can skip _Project setup_ and _Development_ steps and go straight to [_Install dependencies_](#install-dependencies-1).

> 📘 
> 
> To continue, it's recommended **(but not mandatory)** that you complete [Your First Dapp - Using NodeJS](/docs/your-first-dapp-nodejs) first, as we'll be using a similar approach and code. However, in this case we use `serverless` to create and deploy the _Express _ app, as it's **_AWS Lambda-ready_**.

## Project setup

Create an empty folder and open it with VS Code. Then, open the terminal there and run:

```
serverless
```



Running this command should give you some options. Choose **_Express API_**:

![](/img/content/8c14ff0-image.png)



Press `ENTER` to choose a default project name or enter your own:

![](/img/content/94ca4be-image.png)



After **Serverless** has downloaded the template, it will ask you to login/register to the dashboard. We don't need it for this project so type `n`:

![](/img/content/4a32f31-image.png)



Finally, type `n` again as we don't want to deploy now:

![](/img/content/addbe83-image.png)



Type `n` again if the console seems stuck. 

Now the sample project is created:

![](/img/content/6402e0b-image.png)



We also want to add the `MORALIS_API_KEY` as an environment variable. Replace the whole code in **`serverless.yml`** with the following:

```
service: aws-node-express-api-project
frameworkVersion: '3'

provider:
  name: aws
  runtime: nodejs14.x
  environment:
    MORALIS_API_KEY: 'replace_me'

plugins:
  - serverless-offline

functions:
  api:
    handler: handler.handler
    events:
      - httpApi: '*'
```



![](/img/content/99cc149-image.png)

> 👍 Done
> 
> **With that, we have the project set up.**

> 🚧 But remember...
> 
> Replace the `MORALIS_API_KEY` field with [your own key](/web3-data-api/get-your-api-key#step-2-get-api-key) before testing and deploying.

## Development

Let's start by adding the packages needed in this app, which are `moralis` and `body-parser`. To do so, open **`handler.js`** and add the following:

```javascript
const bodyParser = require('body-parser');
const Moralis = require('moralis').default;
```



![](/img/content/4ca093c-image.png)

Add the following to allow the app accept all types of request body formats:

```javascript
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
```



![](/img/content/add76c3-image.png)

Finally let's add the function that will initialize `moralis`, using the `MORALIS_API_KEY` that we added in the environment:

```javascript
const startMoralis = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });
};

startMoralis();
```



![](/img/content/1be8b90-image.png)

### Create `getNativeBalance` endpoint

With `moralis` initialized, we can start adding our preferred functionalities. To do so, let's create a new **Express endpoint** and add a **Moralis SDK function** inside. Let's add the _getNativeBalance_ function, which will call the [getNativeBalance API endpoint](https://docs.moralis.io/reference/getnativebalance) when the Express endpoint is called:

```javascript
app.post("/getNativeBalance", async (req, res, next) => {
  try {
    // Get native balance
    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
      address: req.body.address,
      chain: req.body.chain,
    });

    // Format the native balance formatted in ether via the .ether getter
    const nativeBalanceEther = nativeBalance.result.balance.ether;

    res.status(200);
    res.send(nativeBalanceEther);

  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});
```



![](/img/content/03e3db9-image.png)

> 📘 
> 
> We pass the `address` and the `chain` as parameters in the **request body**.

### Create `getWalletNfts` endpoint

Let's create a new **Express endpoint** and add another **Moralis SDK function** inside. Let's add the _getWalletNfts_ function, which will call the [getWalletNfts API endpoint](https://docs.moralis.io/reference/getwalletnfts) when the Express endpoint is called:

![](/img/content/08eff9f-image.png)

```javascript
app.post("/getWalletNfts", async (req, res, next) => {
  try {

    // Get wallet NFTs
    const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
      address: req.body.address,
      chain: req.body.chain,
      limit: 10,
    });

    res.status(200);
    res.json(nfts);

  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});
```



> 📘 
> 
> We pass the `address` and the `chain` as parameters in the **request body**.

### Final code

This is how **`handler.js`** should be adding the endpoints. You could repeat the same process above to add other Moralis SDK functionalities:

```javascript
const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require('body-parser');
const Moralis = require('moralis').default;

const app = express();

// Accept all type of request body format
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

// Start Moralis
const startMoralis = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });
};

startMoralis();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.post("/getNativeBalance", async (req, res, next) => {
  try {
    // Get native balance
    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
      address: req.body.address,
      chain: req.body.chain,
    });

    // Format the native balance formatted in ether via the .ether getter
    const nativeBalanceEther = nativeBalance.result.balance.ether;

    res.status(200);
    res.send(nativeBalanceEther);

  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

app.post("/getWalletNfts", async (req, res, next) => {
  try {

    // Get wallet NFTs
    const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
      address: req.body.address,
      chain: req.body.chain,
      limit: 10,
    });

    res.status(200);
    res.json(nfts);

  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

module.exports.handler = serverless(app);
```



## Install dependencies

**IMPORTANT:** On the terminal, place yourself at the root folder of the project. I named my project `aws-node-express-api-project` so in my case I need to run:

```powershell powersh
cd aws-node-express-api-project
```



![](/img/content/cbd847c-image.png)



Now that we're in the right location, let's install `moralis` and `body-parser`:

```powershell
npm install moralis body-parser
```



## Local testing

Before deploying to AWS, it's always good to test things locally. We can do so by using the **`serverless-offline`** plugin. This plugin helps to emulate the API Gateway environment for local development.

Install the plugin:

```powershell
npm install --save-dev serverless-offline
```



Then add the plugin to **`serverless.yml`**:

```
plugins:
  - serverless-offline

```



![](/img/content/acf1d0f-image.png)

Then, start the serverless-offline server:

```powershell
serverless offline start
```



![](/img/content/e93d805-image.png)

To test, navigate to `[<http://localhost:3000`>](<http://localhost:3000`>) in your browser:

![](/img/content/c401071-image.png)

**Very nice!** And the best thing is that if you make a change in `handler.js` file, it will be automatically applied and you'll see the result the next time you hit the endpoint. **This rapidly improves development time.**

> 📘 
> 
> To test an endpoint that requires a request body, you can use [Postman](https://www.postman.com/downloads/) or any other API platform out there.

# Deployment

> 📘 Remember...
> 
> If you come from [GitHub completed projects](https://github.com/MoralisWeb3/examples-aws-lambda-nodejs), make sure you have the dependencies installed before deploying:
> 
> - [Install dependencies on `aws-node-project`](#install-dependencies)
> - [Install dependencies on `aws-node-express-api-project`](#install-dependencies-1)

It's time to deploy to **AWS**. Whatever project you chose, open the terminal and make sure you're in the root folder (where you installed the dependencies). Then, run this simple command:

```powershell
serverless deploy
```

![](/img/content/67fbb54-image.png)

> 👍 Congratulations!
> 
> Congratulations! Your app is running on **AWS Lambda** :)



# AWS Lambda Console

> 📘 
> 
> If you have followed the whole tutorial and deployed both the [Lambda App with multiple functions](#lambda-app-with-multiple-functions) and the [Lambda NodeJS Express API](#lambda-nodejs-express-api), your **[AWS Lambda Functions page](https://console.aws.amazon.com/lambda/home#/functions)** should look like this:

![](/img/content/26fe035-image.png)

The deployment of the **Lambda App with multiple functions** created two single functions:

![](/img/content/ec41b53-image.png)

By contrast, the **Lambda NodeJS Express API** is contained in just one function:

![](/img/content/e27401f-image.png)

**Next, we differentiate the testing process between these functions:**

- [Testing Express API function](#testing-express-api-function).
- [Testing single functions](#testing-single-functions).

## Testing Express API function

> 📘 
> 
> Open the [Functions page](https://console.aws.amazon.com/lambda/home#/functions) and choose **_aws-node-express-api-project-dev-api_**.

Select **_API Gateway_**:

![](/img/content/cc3e34e-image.png)

Here you will find the **API endpoint URL**. Click on it:

![](/img/content/ca4a3df-image.png)

![](/img/content/c0d7f46-image.png)

You could reach **_getNativeBalance_** and **_getWalletNfts_** endpoints by adding them at the end of the URL:

![](/img/content/3192fdf-image.png)

But because these are **POST requests** that need a body with _address_ and _chain_ parameters, you need to use an API platform like [Postman](https://www.postman.com/downloads/) to test it.

## Testing single functions

> 📘 
> 
> Open the [Functions page](https://console.aws.amazon.com/lambda/home#/functions) and choose **_aws-node-project-dev-getNativeBalance_** or **_aws-node-project-dev-getWalletNfts_**.

You can test your function by pressing the _Test_ tab. Set an _Event name_ and make sure to add your wallet `address` and `chain` as event parameters in the _Event JSON_ section:

```
{
  "address": "0x99939EXAMPLEADDRESS",
  "chain": "0x1"
}
```



![](/img/content/b1a4acd-image.png)

Then choose **_Test_** and see the result:

![](/img/content/9c93832-image.png)



## Find function name

> 📘 
> 
> Open the [Functions page](https://console.aws.amazon.com/lambda/home#/functions) and choose any function.

Marked with green is where you can find the **function name**:

![](/img/content/b89b4c7-image.png)

## Copy function ARN

> 📘 
> 
> Open the [Functions page](https://console.aws.amazon.com/lambda/home#/functions) and choose any function.

Marked with green is where you can copy the **ARN** which is the identifier of the function in all AWS:

![](/img/content/65a9750-image.png)