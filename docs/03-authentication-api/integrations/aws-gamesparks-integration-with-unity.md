---
title: "AWS GameSparks"
slug: "aws-gamesparks-integration-with-unity"
---

In this tutorial we will create a game backend in GameSparks and we will connect it to [Using AWS Lambda](https://docs.moralis.io/docs/using-aws-lambda), invoking its functions. Then, we will connect a basic Unity game to the GameSparks backend. This way we will have a **fully modular "Web3 gaming setup"** using **AWS**, **Unity** and the power of **Moralis**.

:::info Tutorial's architectural diagram
:::

![](/img/content/71ab6cf-image.webp)

## Prerequisites

- Complete [AWS Lambda integration](https://docs.moralis.io/docs/using-aws-lambda) tutorial. Choose the [_Lambda App with multiple functions_](https://docs.moralis.io/docs/using-aws-lambda#lambda-app-with-multiple-functions) path.
- Have [Unity Hub](https://unity3d.com/get-unity/download) installed.
- Have a [2020.3 Unity version](https://unity3d.com/unity/qa/lts-releases?version=2020.3) installed (this project uses **2020.3.41f1**).

## Create a game backend (GameSparks)

[Open the GameSparks console](https://console.aws.amazon.com/gamesparks/home) and click on **_Next_** to create a game and get started developing your game backend:

![](/img/content/1c7969a-image.webp)

Set a name for your game and click on _**Create**_:

![](/img/content/6cc56f2-image.webp)

You now have a created a **GameSparks backend** that is ready for you to configure:

![](/img/content/853fdef-image.webp)

## Deployment

Before doing any configuration, let's deploy a fresh snapshot of the game backend. In the navigation pane, choose _**Dev**_:

`![](/img/content/318b565-image.webp)

On the _Dev_ page, under _Snapshot_, choose _**Deploy as new snapshot**_:

![](/img/content/3514e31-image.webp)

Enter an optional description and press **_Save_**:

![](/img/content/fc8c0e1-image.webp)

After less than 2 minutes we will have our game backend deployed:

![](/img/content/92f1007-image.webp)

**Remember:** everytime we add a new feature, like a request, we will need to deploy a new snapshot.

## Give the game backend permission to access Lambda

Now that we have the game backend deployed, let's **give it permission to invoke Lambda functions**. Remember that in this tutorial we will be calling the Lambda functions deployed in [_Lambda App with multiple functions_](https://docs.moralis.io/docs/using-aws-lambda#lambda-app-with-multiple-functions), but to do so, we first need to grant premissions.

### Create policy

First, let's create the permission itself. Open the [IAM Create policy page](https://console.aws.amazon.com/iam/home#/policies$new?step=edit) and choose **_Import managed policy_**:

![](/img/content/59c1d68-image.webp)

Here filter the policies typing _LambdaRole_ and select **_AWSLambdaRole_**. Then select **_Import_**:

![](/img/content/c4115c8-image.webp)

This policy allows invoking **any** Lambda function that we got deployed. If we click on the _JSON_ tab we can see there's a **`"*"`** in **`Resource`**. To specify which Lambda function we want its invocation to be allowed, we could paste its [ARN](https://docs.moralis.io/docs/using-aws-lambda#copy-function-arn) in `Resource`, but in this case we leave it as **`"*"`** as we want to allow the invocation of all our Lambda functions:

![](/img/content/b8ea8db-image.webp)

Choose **_Next: Tags_** and then **_Next: Review_**:

![](/img/content/f7bc2b3-image.webp)

In _Review_, name your policy, for example `AllowLambdaInvokeAll` and choose **_CreatePolicy_**:

![](/img/content/4cfa056-image.webp)

### Attach policy

Let's attach the created policy to the game backend IAM role. Open the [GameSparks console](https://console.aws.amazon.com/gamesparks/home), select your game and in the navigation pane, select _Dev_. Then under _Dev stage configuration_ choose **_View in IAM console_**:

![](/img/content/048379d-image.webp)

The IAM console opens to the IAM role for your Dev stage. On the _Permissions_ tab, choose _Add permissions_ and _**Attach policies**_:

![](/img/content/28d8e9f-image.webp)

Filter for _AllowLambda_, select your created policy and press **_Attach policies_**:

![](/img/content/e5d8446-image.webp)

**Nice!** Permission to call Lambda functions granted to our game backend:

![](/img/content/907810d-image.webp)

## Connecting the game backend to Lambda

:::info How this works?

To invoke Lambda functions from GameSparks you need to create a **_Message_** inside the game backend. There are **3 types of messages**:

- **_Events_**
- **_Requests_**
- **_Notifications_**

Once created, you can call a Lambda function from there. [Click here for more information](https://docs.aws.amazon.com/gamesparks/latest/dg/lambda.html).
:::

For this example we'll use _**requests**_, so that our client (Unity) can **get data** from our GameSparks backend. As said, this request will internally call a Lambda function from [_Lambda App with multiple functions_](https://docs.moralis.io/docs/using-aws-lambda#lambda-app-with-multiple-functions) and will return a response.

:::info There's a way to automate this process
Know that you can **skip the manual creation of requests** by **importing a snapshot**. If you like the idea, go into the [Automatic section](https://docs.moralis.io/docs/using-unity-aws-gamesparks#automatic).
:::

### Automatic

Open a text editor like VS Code and save this text as a **.JSON file**:

```json
{
  "Document" : {
    "Type" : "Game",
    "Sections" : {
      "GameSparks.Core.RequestHandlers" : {
        "GetNativeBalance" : {
          "Code" : {
            "Script" : "const response = GameSparks().Lambda(\"aws-node-project-dev-getNativeBalance\").Invoke(\r\n    {\r\n      // Example of how you would send a parameter to Lambda\r\n      \"address\": message.address,\r\n      \"chain\": message.chain\r\n    }\r\n);\r\n\r\nGameSparks().Logging().Debug(\"Result from Lambda is:\");\r\nGameSparks().Logging().Debug(JSON.stringify(response.Payload));\r\n\r\nreturn GameSparks().Messaging().Response({\"result\": parseFloat(response.Payload.result)});",
            "ScriptLanguage" : "Javascript_ES5_1"
          },
          "Enabled" : true,
          "Description" : ""
        },
        "GetWalletNfts" : {
          "Code" : {
            "Script" : "const response = GameSparks().Lambda(\"aws-node-project-dev-getWalletNfts\").Invoke(\r\n    {\r\n      \"address\": message.address,\r\n      \"chain\": message.chain\r\n    }\r\n);\r\n\r\nGameSparks().Logging().Debug(\"Result from Lambda is:\");\r\n\r\nreturn GameSparks().Messaging().Response({\"result\": response.Payload.result});",
            "ScriptLanguage" : "Javascript_ES5_1"
          },
          "Enabled" : true,
          "Description" : ""
        }
      },
      "GameSparks.Core.Requests" : {
        "GetNativeBalance" : {
          "AllowedSources" : [ "Player" ],
          "RequestShape" : "GetNativeBalanceRequest",
          "ResponseShape" : "GetNativeBalanceResponse",
          "Description" : ""
        },
        "GetWalletNfts" : {
          "AllowedSources" : [ "Player" ],
          "RequestShape" : "GetWalletNftsRequest",
          "ResponseShape" : "GetWalletNftsResponse",
          "Description" : ""
        }
      },
      "GameSparks.Core.Model" : {
        "GetNativeBalanceRequest" : {
          "Structure" : {
            "Description" : "",
            "Fields" : {
              "chain" : {
                "Cardinality" : "Required",
                "Shape" : "String"
              },
              "address" : {
                "Cardinality" : "Required",
                "Shape" : "String"
              }
            }
          }
        },
        "GetNativeBalanceResponse" : {
          "Structure" : {
            "Description" : "",
            "Fields" : {
              "result" : {
                "Cardinality" : "Required",
                "Shape" : "Decimal"
              }
            }
          }
        },
        "GetWalletNftsRequest" : {
          "Structure" : {
            "Description" : "",
            "Fields" : {
              "chain" : {
                "Cardinality" : "Required",
                "Shape" : "String"
              },
              "address" : {
                "Cardinality" : "Required",
                "Shape" : "String"
              }
            }
          }
        },
        "GetWalletNftsResponse" : {
          "Structure" : {
            "Description" : "",
            "Fields" : {
              "result" : {
                "Cardinality" : "Required",
                "Shape" : "String"
              }
            }
          }
        }
      }
    }
  }
}
```

![](/img/content/d2daed4-image.webp)

Now open the [GameSparks console](https://console.aws.amazon.com/gamesparks/home), select your game and in the navigation pane, select _Dev_. Then under _Snapshot_ choose **_Actions --> Import_**:

![](/img/content/3e6a84b-image.webp)

Choose the **.JSON file** and click on _**Import**_:

![](/img/content/62e830e-image.webp)

If you now go to **_Cloud Code_** in the navigation pane, you'll see the _GetNativeBalance_ and _GetWalletNfts_ requests:

![](/img/content/e6e5029-image.webp)

Click on one of them and then choose _**Test**_:

![](/img/content/c26c3ea-image.webp)

You'll see there's a notification. Because **we just imported a new snapshot** to the game backend, we need to **deploy it**. Let's do that:

![](/img/content/11db543-image.webp)

Enter an optional description and choose _**Save**_:

![](/img/content/9679c49-image.webp)

**Congratulations!** You can now test any of the requests by first pressing **_Populate example_** and then _**Send message**_:

![](/img/content/b78ebee-image.webp)

:::caution
Remember to add a valid `address` and `chain` in the request body parameters!
:::

### Manual

#### Create _GetNativeBalance_ request

Open the [GameSparks console](https://console.aws.amazon.com/gamesparks/home), select your game and in the navigation pane, select _Dev_, expand _Configuration_, and then choose _**Cloud code**_:

![](/img/content/63fa832-image.webp)

Choose **_Create Message_**:

![](/img/content/7fbf372-image.webp)

Choose _Request_ and name it _GetNativeBalance_. Then press **_Create_**:

![](/img/content/bf36875-image.webp)

Once created, follow the next steps:

- Select _**Enable client permission**_.
- In the expanded **_Game-defined request fields_** pane, add the following **request fields**:

| Field name | Shape  | Required |
| :--------- | :----- | :------- |
| address    | String | Yes      |
| chain      | String | Yes      |

- Then add the following **response field**:

| Field name | Shape   | Required |
| :--------- | :------ | :------- |
| result     | Decimal | Yes      |

- For the **_Request handler_** section, add the following code:

```
const response = GameSparks().Lambda("aws-node-project-dev-getNativeBalance").Invoke(
    {
      // Example of how you would send a parameter to Lambda
      "address": message.address,
      "chain": message.chain
    }
);

GameSparks().Logging().Debug("Result from Lambda is:");
GameSparks().Logging().Debug(JSON.stringify(response.Payload));

return GameSparks().Messaging().Response({"result": parseFloat(response.Payload.result)});
```

In this request, we want to call the **_GetNativeBalance_ Lambda function** created [here](https://docs.moralis.io/docs/using-aws-lambda#development). You can see we do that by calling:

```
GameSparks().Lambda("lambda-function-name").Invoke(
    {
    	//Event parameters
    }
);
```

:::info
[Check how to find a Lambda function name](https://docs.moralis.io/docs/using-aws-lambda#find-function-name).
:::

Your pane should look like this. Press **_Save_**:

![](/img/content/bcb81d1-image.webp)

Then press _**Test**_:

![](/img/content/206847a-image.webp)

You'll see there's a notification. Because **we just added a new request** to the game backend, we need to **deploy a new snapshot**. Let's do that:

![](/img/content/11db543-image.webp)

Enter an optional description and choose _**Save**_:

![](/img/content/9679c49-image.webp)


**Congratulations!** You can now test your request by first pressing **_Populate example_** and then _**Send message**_:

![](/img/content/3975b96-image.webp)

:::caution
Remember to add a valid `address` and `chain` in the request body parameters!
:::

#### Create _GetWalletNfts_ request

Create a new request as you did with _GetNativeBalance _ but this time name it **_GetWalletNfts_**:

![](/img/content/d31fbb6-image.webp)


Once created, follow the next steps:

- Select _**Enable client permission**_.
- In the expanded **_Game-defined request fields_** pane, add the following **request fields**:

| Field name | Shape  | Required |
| :--------- | :----- | :------- |
| address    | String | Yes      |
| chain      | String | Yes      |

- Then add the following **response field**:

| Field name | Shape  | Required |
| :--------- | :----- | :------- |
| result     | String | Yes      |

- For the **_Request handler_** section, add the following code:

```
const response = GameSparks().Lambda("aws-node-project-dev-getWalletNfts").Invoke(
    {
      // Example of how you would send a parameter to Lambda
      "address": message.address,
      "chain": message.chain
    }
);

GameSparks().Logging().Debug("Result from Lambda is:");

return GameSparks().Messaging().Response({"result": response.Payload.result});
```



Your pane should look like this. Press **_Save_**:

![](/img/content/8237c3b-image.webp)

Then press _**Test**_:

![](/img/content/206847a-image.webp)


You'll see there's a notification. Because **we just added a new request** to the game backend, we need to **deploy a new snapshot**. Let's do that:

![](/img/content/11db543-image.webp)

Enter an optional description and choose _**Save**_:

![](/img/content/9679c49-image.webp)

**Congratulations!** You can now test the _GetWalletNfts_ request by first pressing **_Populate example_** and then _**Send message**_:

![](/img/content/524d92c-image.webp)

:::caution
Remember to add a valid `address` and `chain` in the request body parameters!
:::

## Connecting Unity to the game backend

:::info Download the sample project
To start, [download the Unity sample project](https://github.com/MoralisWeb3/demo-unity-moralis-aws-gamesparks) we have prepared. It'll be very easy to set up.
:::

![](/img/content/4c58ff8-image.webp)

:::info It comes prepared!
This sample project already contains the **GameSparks SDK** installed. [Visit the official documentation](https://docs.aws.amazon.com/gamesparks/latest/dg/set-up.html#_install_the_gamesparks_client_sdk) for detailed information on how we did it.
:::

### Setting up

Open the project folder with **Unity Hub**:

![](/img/content/358621a-image.webp)

On the _Project_ tab, go to _Assets --> Amazon --> GameSparks_ and choose the **_Connection.asset_**:

![](/img/content/3a1005b-image.webp)

Now on the _Inspector_ tab you'll now see the GameSparks connection settings, with a _Game Key_ to fill up:

![](/img/content/89a498b-image.webp)

To find the key, open the [GameSparks console](https://console.aws.amazon.com/gamesparks/home), select your game and in the navigation pane, select _Dev_. Copy the **_Key_**:

![](/img/content/36bd47e-image.webp)

Now paste it in the **_Connection.asset_** in Unity:

![](/img/content/13b15eb-image.webp)

:::tip Setup completed!
:::

:::info To know more...
For more information on the setup process, check the [official documentation](https://docs.aws.amazon.com/gamesparks/latest/dg/hello-world.html).
:::

### Walkthrough

On the _Project_ tab, go to _Assets --> \_Project --> Scenes_ and open **_App.unity_**:

![](/img/content/afede81-image.webp)

This is the scene that we're going to run. Let's go ahead and hit **_Play_**:

![](/img/content/9461906-image.webp)

From here we're going to split the walkthrough between:

- [Authentication](https://docs.moralis.io/docs/using-unity-aws-gamesparks#authentication)
- [Calling backend requests](https://docs.moralis.io/docs/using-unity-aws-gamesparks#calling-backend-requests)

#### Authentication

:::info Using ChainSafe SDK
To handle authentication and get our **wallet information**, we are using [ChainSafe Unity SDK](https://github.com/ChainSafe/web3.unity), already imported into the project.
:::

Click on the **_Authenticate_** button to connect to your Web3 browser wallet:

![](/img/content/927f7f4-image.webp)

Your default browser will open automatically and if you have a Web3 wallet installed **you'll be able to sign**:

![](/img/content/f65b773-image.webp)

Then press **_Copy_**:

![](/img/content/a0cc117-image.webp)

Now go back to Unity and see that you're **successfully authenticated**. Unity also logged your **wallet public address**:

![](/img/content/403f92f-image.webp)

As informed in the beginning of this section, we used the **_ChainSafe SDK_** to handle this process. In the project you'll find a [class](https://github.com/MoralisWeb3/demo-unity-moralis-aws-gamesparks/blob/main/Assets/_Project/Scripts/CustomAuthService.cs) we created that wraps some of the ChainSafe SDK **authentication features** and simplifies its accessibility by [exposing just one method](https://github.com/MoralisWeb3/demo-unity-moralis-aws-gamesparks/blob/93328372d004e760e8bf8a8cc3cd03cbee08d157/Assets/_Project/Scripts/CustomAuthService.cs#L13).

This is the method called when we click on the _Authenticate_ button. [Managed in **_AppManager.cs_**](https://github.com/MoralisWeb3/demo-unity-moralis-aws-gamesparks/blob/93328372d004e760e8bf8a8cc3cd03cbee08d157/Assets/_Project/Scripts/AppManager.cs#L29).

#### Calling backend requests

:::info
With our **wallet public address** retrieved, we can now call the requests set up [here](https://docs.moralis.io/docs/using-unity-aws-gamesparks#connecting-the-game-backend-to-lambda).
:::

Once authenticated, you can now click on the _GetNativeBalance_ or _GetWalletNfts_ buttons to retrieve the desired information successfully:

![](/img/content/add7d5e-image.webp)

This is also handled in _AppManager.cs_:

- [_GetNativeBalance_](https://github.com/MoralisWeb3/demo-unity-moralis-aws-gamesparks/blob/93328372d004e760e8bf8a8cc3cd03cbee08d157/Assets/_Project/Scripts/AppManager.cs#L44)
- [_GetWalletNfts_](https://github.com/MoralisWeb3/demo-unity-moralis-aws-gamesparks/blob/93328372d004e760e8bf8a8cc3cd03cbee08d157/Assets/_Project/Scripts/AppManager.cs#L71)

You can see that both [access a class named _**MyWeb3GameBackendOperations**_](https://github.com/MoralisWeb3/demo-unity-moralis-aws-gamesparks/blob/93328372d004e760e8bf8a8cc3cd03cbee08d157/Assets/_Project/Scripts/AppManager.cs#L52), which is the one containing the methods to access the messages in our GameSparks game backend.

You can find [_MyWeb3GameBackendOperations.cs_](https://github.com/MoralisWeb3/demo-unity-moralis-aws-gamesparks/blob/93328372d004e760e8bf8a8cc3cd03cbee08d157/Assets/_Project/Scripts/GameSparks/MyWeb3GameBackendOperations.cs) in _Assets --> \_Project --> Scripts --> GameSparks_:

![](/img/content/14c8cab-image.webp)

The cool thing is that you can [import it automatically](https://docs.moralis.io/docs/using-unity-aws-gamesparks#importing-gamesparks-message-template) from the GameSparks console.

### Importing GameSparks message template

Open the [GameSparks console](https://console.aws.amazon.com/gamesparks/home), select your game and in the navigation pane, select _Dev_. Then under the _Snapshot_ section select _Actions --> **Generate SDK message template**_:

![](/img/content/fbf9019-image.webp)

Select **_Unity_** as _Game client platform_ and _**C#**_ as _Language_. Then click on **_Generate Code_**, wait for some seconds and click on **_Download_**:

![](/img/content/14cac47-image.webp)

Unzip the file that will be downloaded and drag the _.cs_ files to the _Assets_ folder in your Unity project. You'll now be able to access any message created in your game backend from Unity, like we just did in the section above.

:::tip Congratulations!
You've completed the **_Using Unity & AWS GameSparks_** tutorial.
:::


