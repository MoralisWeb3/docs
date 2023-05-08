---
title: "Azure PlayFab (NodeJS) with Unity"
slug: "azure-playfab-nodejs-unity"
description: "This tutorial will teach you how to set up a complete gaming backend platform for Web3 games. We use Unity as our game engine, Microsoft Azure PlayFab as our gaming backend, and Moralis to enable all the Web3 magic! You'll also learn how to use Web3 authentication and how to retrieve a user's native balance, a list of ERC-20 tokens, and the first ten NFTs they own using the Web3 API."
---

This tutorial will teach you how to set up a complete gaming backend platform for Web3 games. We use Unity as our game engine, Microsoft Azure PlayFab as our gaming backend, and Moralis to enable all the Web3 magic! You'll also learn how to use Web3 authentication and how to retrieve a user's native balance, a list of ERC-20 tokens, and the first ten NFTs they own using the Web3 API.

## The Steps We Will Take

1. Set up a Moralis account
2. Set up Microsoft Azure PlayFab (free plan)
3. Set up Azure Functions
4. Create Azure Functions with Visual Studio Code
5. Deploy Azure Functions with Visual Studio Code
6. Set up Unity and connect Microsoft Azure PlayFab 

## Set up a Moralis Account

This section describes how to set up your Moralis account and find the Web3 API you need to integrate. Your Moralis account provides access to all Moralis Web3 functionality.

1. [Create a Moralis account if you don't already have one](https://admin.moralis.io/register).
2. Go to **Web3 APIs** and copy and save the **API key v3**. You will need this when setting up Azure Functions.

![](/img/content/9c470bb-1.webp "1.webp")

## Set up Microsoft Azure PlayFab (free plan)

An active PlayFab account is required to use the functionality provided by PlayFab. Please note that a free plan is available. This section describes how to set up a PlayFab account and configure your first application.

:::info What is Microsoft Azure PlayFab?
PlayFab is a complete backend platform for live games with managed game services. PlayFab backend services reduce the barriers to launch for game developers, offering both large and small studios cost-effective development solutions that scale with their games and help them engage, retain, and monetize players. PlayFab enables developers to use the intelligent cloud to build and operate games, analyze gaming data, and improve overall gaming experiences. 
[Learn more](https://docs.microsoft.com/en-us/gaming/playfab/what-is-playfab)
:::

1. [Create a PlayFab Account](https://developer.playfab.com/).
2. Create a **new title** on PlayFab:

![](/img/content/622535b-2.webp "2.webp")

3. Open your new title and go to **Title settings**:

![](/img/content/3d13f75-3.webp "3.webp")

4. Go to the **API Features** tab and write down the **Title ID**. You will need this when setting up Azure Functions.
5. Go to the **Secret Keys** tab and write down the **secret key**. You will need this when setting up Azure Functions.

## Set up Azure Functions

To run Moralis on the backend of PlayFab, we need to use Azure Functions. Azure Functions integrates natively with PlayFab; however, Azure Functions is a separate product and requires an account separate from PlayFab.

:::info What is Azure Functions?
Azure Functions provides serverless compute. You can use Azure Functions to build web APIs, respond to database changes, process IoT streams, manage message queues, and more. PlayFab uses Azure Functions to make it possible to use Moralis on top of the PlayFab backend.
[More info](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview)
:::

1. [Create a free Azure account](https://portal.azure.com/).
2. [Create a Microsoft Customer Agreement subscription](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription#create-a-subscription).
3. Search for **Function App** and select it.

![](/img/content/b069353-4.webp)

4. Create a new Function App:

![](/img/content/cd8519e-image.webp)

5. Select **Review + create** and then **Create**.
6. Open the **MoralisAzureFunctions** resource:

![](/img/content/00720ee-6.webp "6.webp")

7. Go to **Configuration** and select **New application setting**:

![](/img/content/da6a902-7.webp "7.webp")

8. Create a new application setting and enter **MORALIS\_API\_KEY** as the name, and in the value, paste your Moralis API key. Leave **Deployment slot setting** unchecked and select **Ok**.
9. Create another application setting and enter **PLAYFAB\_TITLE\_ID** as the name, and in the value, paste your PlayFab title ID. Leave **Deployment slot setting** unchecked and select **Ok**.
10. Create another application setting and enter **PLAYFAB\_DEV\_SECRET\_KEY** as the name, and in the value, paste your PlayFab secret key. Leave **Deployment slot setting** unchecked and select **Ok**.
11. Select **Save** and then **Continue**.

![](/img/content/72eb186-8.webp "8.webp")

![](/img/content/4ba31c1-9.webp "9.webp")

## Create Azure Functions with Visual Studio Code

This section walks through coding functions that integrate the Moralis SDK.

:::info Main requirements
Make sure you have the **following requirements** in place:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) for Visual Studio Code
:::

### Prerequisites

- [NodeJS 16 LTS](https://nodejs.org/en/)

### Function creation

:::info 
The completed project with all the functions ready can be found on [GitHub](https://github.com/MoralisWeb3/example-auth-azure-functions-nodejs). **Download** it, **open** it with VS Code and jump to **_Installing dependencies_** to complete this section. However, continue exploring the section to learn how to do it yourself.
:::

#### Authentication API functions

##### Create [`ChallengeRequest`](/authentication-api/reference/request-challenge-evm) function

1. Open Visual Studio Code.
2. Select **Azure** and sign in.
3. Under **Workspace** select **Create Function**:

![](/img/content/0556f0c-azure_functions_1.webp "azure_functions_1.webp")

4. Select **Create new project** and create an empty folder. I named mine **example-auth-azure-functions-nodejs**:

![](/img/content/6f08068-image.webp)

5. For the language select **Javascript**:

![](/img/content/44a1fc3-image.webp)



6. Select **HTTP Trigger** for the template:

![](/img/content/352f141-image.webp)



7. Name it **ChallengeRequest** and press _Enter_:

![](/img/content/2a2b9fd-image.webp)



8. Select **Function** for the authorization level:

![](/img/content/aa78fbe-image.webp)



9. Finally, select **Open in current window**:

![](/img/content/d41d75b-image.webp)



10. We now have the **`ChallengeRequest`** function created:

![](/img/content/822b4ce-image.webp)

11. Replace the existing code in _**index.js**_ for this:

```javascript
const Moralis = require('moralis').default;

const ApiKey = process.env.MORALIS_API_KEY;

const NETWORK = 'evm'; // We assume it's we are using an EVM-compatible chain
const DOMAIN = 'moralis.io';
const STATEMENT = 'Please sign this message to confirm your identity.';
const URI = 'https://moralis.io/';
const EXPIRATION_TIME = '2023-01-01T00:00:00.000Z';
const TIMEOUT = 15;

Moralis.start({
    apiKey: ApiKey
})

module.exports = async function (context, req) {

    try {
        
        if (!req.body) {
            context.res = {
                status: 400,
                body: "Please pass a request body",
            };
        }

        const result = await Moralis.Auth.requestMessage({
            address: req.body.FunctionArgument.address, 
            chain: req.body.FunctionArgument.chainid, 
            network: NETWORK,
            domain: DOMAIN,
            statement: STATEMENT,
            uri: URI,
            expirationTime: EXPIRATION_TIME,
            timeout: TIMEOUT,
        })

        context.res = {
            body: result.raw.message // We just want to return the message
        };

    } catch (error) {

        console.log(error);
        context.res = {
            status: 500,
            body: JSON.stringify(error)
        }
    }
}   
```



As we can see at the top, we get the **`MORALIS_API_KEY`** from the environment (we set it up in Azure Functions), we set some constants we'll need later and we start Moralis using the key:

```javascript
const Moralis = require('moralis').default;

const ApiKey = process.env.MORALIS_API_KEY;

const NETWORK = 'evm'; // We assume it's we are using an EVM-compatible chain
const DOMAIN = 'moralis.io';
const STATEMENT = 'Please sign this message to confirm your identity.';
const URI = 'https://moralis.io/';
const EXPIRATION_TIME = '2023-01-01T00:00:00.000Z';
const TIMEOUT = 15;

Moralis.start({
    apiKey: ApiKey
})
```



Then, inside `module.exports` we call **`Moralis.Auth.requestMessage()`** passing the constants that we set on top and we get the `address` and the `chain` from the request body. This will return a message as a result:

```javascript
module.exports = async function (context, req) {

    try {
        
        if (!req.body) {
            context.res = {
                status: 400,
                body: "Please pass a request body",
            };
        }

        const result = await Moralis.Auth.requestMessage({
            address: req.body.FunctionArgument.address, 
            chain: req.body.FunctionArgument.chainid, 
            network: NETWORK,
            domain: DOMAIN,
            statement: STATEMENT,
            uri: URI,
            expirationTime: EXPIRATION_TIME,
            timeout: TIMEOUT,
        })

        context.res = {
            body: result.raw.message // We just want to return the message
        };

    } catch (error) {

        console.log(error);
        context.res = {
            status: 500,
            body: JSON.stringify(error)
        }
    }
}   
```



To summarize, to call this **`ChallengeRequest`** function we will need a POST request containing the **wallet address** and the **chain id** as arguments, but we'll see that later in the tutorial.

For now we need to create another function that will verify the message resulting of this one.

##### Create [`ChallengeVerify`](/authentication-api/reference/verify-challenge-evm) function

1. Repeat the same steps as for **`ChallengeRequest`** (no need to create a new project now) but this time name it **`ChallengeVerify`**:

![](/img/content/90ac5b9-image.webp)

2. Replace the existing code in **`index.js`** for this:

```javascript
const Moralis = require('moralis').default;
var PlayFab = require("playfab-sdk/Scripts/PlayFab/PlayFab.js");
var PlayFabServer = require("playfab-sdk/Scripts/PlayFab/PlayFabServer.js");

const PlayFabTitleId = process.env.PLAYFAB_TITLE_ID
const PlayFabDeveloperKey = process.env.PLAYFAB_DEV_SECRET_KEY 

const NETWORK = 'evm'; // We assume it's we are using an EVM-compatible chain

module.exports = async function (context, req) {

    try {
        
        if (!req.body) {
            context.res = {
                status: 400,
                body: "Please pass a request body",
            };
        }

        const verifiedData = await Moralis.Auth.verify({
            message: req.body.FunctionArgument.message,
            signature: req.body.FunctionArgument.signature,
            network: NETWORK,
        })

        // When do we consider that the authentication is completed? Before or After updating user data in PlayFab??
        // Maybe here we should already return if the data has been verified or not.
        
        context.res = {
            body: verifiedData.raw
        };

        //TODO Set PlayFab player data with some of the verified data!
        PlayFab.settings.titleId = PlayFabTitleId;
        PlayFab.settings.developerSecretKey = PlayFabDeveloperKey;

        // Preparing request
        var updateUserDataRequest = {
            PlayFabId: req.body.CallerEntityProfile.Lineage.MasterPlayerAccountId,
            Data: {
                "MoralisProfileId": verifiedData.raw.id,
                "Address": verifiedData.raw.address,
                "ChainId": verifiedData.raw.chainId
            }
        }

        PlayFabServer.UpdateUserReadOnlyData(
            updateUserDataRequest,
            (error, result) => {
                if (result !== null) {
                    context.log("API call was successful.");
                    context.res = {
                        status: 200,
                        body: result
                    };
                    context.done();
    
                } else if (error !== null) {
                    context.log("Something went wrong with the API call.");
                    context.res = {
                        status: 500,
                        body: JSON.stringify(error)
                    };
                    context.done();
                }
            }
        )

    } catch (error) {

        context.log(error);
        context.res = {
            status: 500,
            body: JSON.stringify(error)
        }
    }
}   
```



As we see at the top, in this function we need the **PlayFab SDK** besides Moralis (we will install both later). Then we get the PlayFab environment variables that we set in Azure Functions and we set the `NETWORK`:

```javascript
const Moralis = require('moralis').default;
var PlayFab = require("playfab-sdk/Scripts/PlayFab/PlayFab.js");
var PlayFabServer = require("playfab-sdk/Scripts/PlayFab/PlayFabServer.js");

const PlayFabTitleId = process.env.PLAYFAB_TITLE_ID
const PlayFabDeveloperKey = process.env.PLAYFAB_DEV_SECRET_KEY 

const NETWORK = 'evm'; // We assume it's we are using an EVM-compatible chain
```



Inside `module.exports` we call **`Moralis.Auth.verify()`**, receiving the `message` and the `signature` from the request body:

```javascript
const verifiedData = await Moralis.Auth.verify({
	message: req.body.FunctionArgument.message,
  signature: req.body.FunctionArgument.signature,
  network: NETWORK,
})

// When do we consider that the authentication is completed? Before or After updating user data in PlayFab??
// Maybe here we should already return if the data has been verified or not.

context.res = {
  body: verifiedData.raw
};
```


#### NFT API functions

##### Create [`GetWalletNfts`](/web3-data-api/evm/reference/get-wallet-nfts)  function

Repeat the same steps as before to create the new function but name it accordingly. Once created, copy the following code into `index.js`:

```javascript
const Moralis = require('moralis').default;

const ApiKey = process.env.MORALIS_API_KEY;

Moralis.start({
    apiKey: ApiKey
})

module.exports = async function (context, req) {

    try {
        
        if (!req.body) {
            context.res = {
                status: 400,
                body: "Please pass a request body",
            };
        }

        const response = await Moralis.EvmApi.nft.getWalletNFTs({
            address: req.body.FunctionArgument.walletAddress,
            chain: req.body.FunctionArgument.chainid
        });

        context.res = {
            body: response
        };

    } catch (error) {

        console.log(error);
        context.res = {
            status: 500,
            body: JSON.stringify(error)
        }
    }
}   
```



For this function we only need the `walletAddress` and the `chainid` in the request body. You can take a look on [how to do this](https://github.com/MoralisWeb3/web3-unity-sdk-sample-game-wump/blob/ee435a0ac58468f8ffee964aaaa6a87b953b63ff/Unity/Assets/CustomWeb3System/CustomWeb3System/Scripts/CustomBackendSystem/PlayFabBackendSystem/PlayFabBackendSystem.cs#L154) on Unity.

#### EVM API functions

##### Create [`RunContractFunction`](/web3-data-api/evm/reference/run-contract-function) function

Repeat the same steps as before to create the new function but name it accordingly. Once created, copy the following code into `index.js`:

```javascript
const Moralis = require('moralis').default;

const ApiKey = process.env.MORALIS_API_KEY;

Moralis.start({
    apiKey: ApiKey
})

module.exports = async function (context, req) {

    try {
        
        if (!req.body) {
            context.res = {
                status: 400,
                body: "Please pass a request body",
            };
        }

        const abi = JSON.parse(req.body.FunctionArgument.functionAbi);
        const params = JSON.parse(req.body.FunctionArgument.functionParams);

        const response = await Moralis.EvmApi.utils.runContractFunction({
            abi,
            functionName: req.body.FunctionArgument.functionName,
            address: req.body.FunctionArgument.contractAddress,
            chain: req.body.FunctionArgument.chainid,
            params
        });

        context.res = {
            body: response.result
        };

    } catch (error) {

        console.log(error);
        context.res = {
            status: 500,
            body: JSON.stringify(error)
        }
    }
}   
```



For this one we'll need to pass various parameters in the request body, related to the contract that we want to run the function from. You can see an example on [how to set the parameters](https://github.com/MoralisWeb3/web3-unity-sdk-sample-game-wump/blob/ee435a0ac58468f8ffee964aaaa6a87b953b63ff/Unity/Assets/CustomWeb3System/MoralisWeb3AuthService/Scripts/UnityWeb3Tools/Functions/RunContractFunctionSubsystem.cs#L34) in a Unity method and [how to call it](https://github.com/MoralisWeb3/web3-unity-sdk-sample-game-wump/blob/ee435a0ac58468f8ffee964aaaa6a87b953b63ff/Unity/Assets/CustomWeb3System/CustomWeb3System/Scripts/CustomBackendSystem/PlayFabBackendSystem/PlayFabBackendSystem.cs#L142).

### Installing dependencies

1. Open the terminal in VS Code:

![](/img/content/a3c6570-image.webp)

2. Install the **Moralis JS SDK** and the **PlayFab SDK** by running this command:

```powershell
npm install moralis playfab-sdk
```


## Deploy Azure Functions with Visual Studio Code

 This section walks through deploying Azure Functions.

1. Sign in to Azure:

![](/img/content/d39b1b6-11.webp "11.webp")

2. Right-click on **MoralisAzureFunctionsJS** and select **Deploy to Function App**:

![](/img/content/7316191-12.webp "12.webp")

3. Select **Deploy**:

![](/img/content/e0a7b20-13.webp "13.webp")

4. Go to your PlayFab title ID dashboard and go to **Automation**:

![](/img/content/6921c1c-14.webp "14.webp")

5. Select **Register function** and set the **Trigger** type to **HTTP**. Enter **ChallengeRequest** as the function name and copy the function URL from Visual Studio Code. Right-click on **ChallengeRequest** under **Functions** and select **Copy Function Url**, and paste it into the **Function** URL field. Select **Register function**.

![](/img/content/2dbbc01-15.webp "15.webp")

6. Create another **Register function** and set the **Trigger** type to **HTTP**. Enter **ChallengeVerify** as the function name and copy the function URL from Visual Studio Code. Right-click on **ChallengeVerify** under **Functions** and select **Copy Function Url**, and paste it into the **Function** URL field. Select **Register function**.

![](/img/content/34e079c-16.webp "16.webp")

7. If you want, repeat step #6 above for all the other functions we added.

## Set up Unity and Connect Microsoft Azure PlayFab

This section describes how to set up a Unity application and connect to PlayFab and enable secure Web3 authentication using the Moralis SDK.

:::info 
Currently this sample project only showcase how to call the **Authentication API functions**. To see how to call other functions implemented in this guide (like NFT or EVM related), check this more advanced [project](/example-dapps/evm/web3-unity-multiplayer-playground).
:::

1. Download as ZIP and extract the [Moralis PlayFab Unity demo project](https://github.com/MoralisWeb3/demo-unity-moralis-auth-via-playfab):
2. Open the project in Unity (recommend version: 2021.3.10f1).
3. Open PlayFab **Editor Extensions** (If the PlayFab menu doesn’t show this, restart Unity).

![](/img/content/6c4178c-unity_1.webp "unity_1.webp")

4. Login with your email and password:

![](/img/content/f16f1c3-unity_2.webp "unity_2.webp")

5. Go to **Settings** > **Project**:

![](/img/content/aaa98bc-unity_3.webp "unity_3.webp")

6. Select your **Studio** and **Title ID**.
7. Go to **Scenes** and open **SampleScene**:

![](/img/content/c489b31-unity_4.webp "unity_4.webp")

### Programmatically Interact with Moralis via PlayFab

If you choose the **Starter** project, this section will walk you through the code necessary to integrate with Moralis via PlayFab. 

If you choose the **Complete** project, feel free to skip this section and [**play the game!**](#play-the-game).

Programmatically integrate with Moralis via PlayFab.

![](/img/content/ea13d3e-unity_4a.webp "unity_4a.webp")

1. In the **Hierarchy** view, right-click and select **Create Empty**. Name this object **MoralisWeb3AuthService**.
2. In the **Assets/Scripts** folder view, create a new script called `MoralisWeb3AuthService.cs`:

![](/img/content/ce16bcf-unity_4b.webp "unity_4b.webp")

3. Drag and drop the `MoralisWeb3AuthService.cs` script into the **MoralisWeb3AuthService** object.
4. Open the edit the `MoralisWeb3AuthService.cs` script.
5. Remove the `Start` and `Update` functions.
6. Update the `using` statements to include required PlayFab, WalletConnect, Unity, and Moralis resources. Like this:

```c#
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using PlayFab;
using PlayFab.CloudScriptModels;
using WalletConnectSharp.Unity;
using Assets.Scripts.Moralis;
```



7. Next, we want to be able to respond to two events that will be evoked by **AuthenticationKit**. These will show in our scene object. Add two Unity events, `OnSuccess` and `OnFailed`. Also, add a reference to **AuthenticationKit**. Your `MoralisWeb3AuthService.cs` should now look similar to this:

```c#
  /// <summary>
  /// Invoked when authentication was 
  /// 
  [Header("Events")] public UnityEvent OnSuccess = new UnityEvent();

  /// <summary>
  /// Invoked when State==AuthenticationKitState.Disconnected
  /// 
  public UnityEvent OnFailed = new UnityEvent();

  private AuthenticationKit authenticationKit = null;
```



8. Add an `Awake` method that initializes the `authenticationKit` variable:

```c#
public void Awake()
{
	authenticationKit = FindObjectOfType<AuthenticationKit>(true);
}
```



9. Next, we will create a method to call the `ChallangeRequest` Azure Function via PlayFab. In the `MoralisWeb3AuthService` class, create a private method called `CreateMessage`. This method should accept two parameters, `address` (string) and `chainid` (int), and return `void`.
10. To communicate with PlayFab, we will use the `ExecuteFunction` method of the `PlayFabCloudScriptAPI` object provided by PlayFab. This function accepts three parameters, an **ExecuteFunctionRequest** object, a callback to handle a success response, and a callback to handle an error response. With these, your `CreateMessage` method should look similar to this:

```c#
private void CreateMessage(string address, int chainid)
{
	// Get message from Moralis with PlayFab Azure Functions 
	PlayFabCloudScriptAPI.ExecuteFunction(new ExecuteFunctionRequest()
	{
		Entity = null, // Security information
		FunctionName = null, //This should be the name of your Azure Function that you created.
		FunctionParameter = null, //This is the data that you would want to pass into your function.
		GeneratePlayStreamEvent = true //Set this to true if you would like this call to show up in PlayStream (logging)
	}, async (ExecuteFunctionResult result) =>
	{
	}, (PlayFabError error) =>
	{
	});
}
```



12. Set up the security information for the call. To do this, update the **Entity** property of `ExecuteFunctionRequest` to:

```c#
Entity = new PlayFab.CloudScriptModels.EntityKey()
{
	Id = PlayFabSettings.staticPlayer.EntityId, // Get this from when you logged in,
	Type = PlayFabSettings.staticPlayer.EntityType, // Get this from when you logged in
},
```



13. Update the error callback parameter of `PlayFabCloudScriptAPI.ExecuteFunction` to invoke the `OnFailed` Unity event:

```c#
(PlayFabError error) =>
{
	Debug.Log($"Oops Something went wrong: {error.GenerateErrorReport()}");
	// If there is an error, fire the OnFailed event
	OnFailed.Invoke();
});
```



14. Create a copy of the `CreateMessage` method and name it `Authenticate`. Change the parameters to `message` (string) and `signature` (string).
15. In the `CreateMessage` method, find the **FunctionName** parameter of `ExecuteFunctionRequest` and set this to "ChallengeRequest". This tells PlayFab which of the functions should be called.
16. In the `CreateMessage` method, find the **FunctionParameter** parameter of the `ExecuteFunctionRequest` and change it so that it passes in the two parameters supplied to the `CreateMessage` method:

```c#
FunctionParameter =
	new Dictionary<string, object>() //This is the data that you would want to pass into your function.
	{
		{ "address", address },
		{ "chainid", chainid }
	},
```



17. In the success callback parameter, add a conditional statement that checks if a PlayFab limit exceeded condition exists; if it does, invoke `OnFailed`:

```c#
if (result.FunctionResultTooLarge ?? false)
{
	Debug.Log(
		"This can happen if you exceed the limit that can be returned from an Azure Function; see PlayFab Limits Page for details.");
	// If there is an error, fire the OnFailed event
	OnFailed.Invoke();
	return;
}
```



18. Still, within success callback, retrieve the result. If a result was returned, extract the **message** returned by Moralis and request the user to cryptographically sign it.
19. If the user signs the message, call the `Authenticate` method, passing in the **message** and the resulting signature. If the signing of the message failed, invoke `OnFailed`. The complete `CreateMessage` method should look similar to this:

```c#
private void CreateMessage(string address, int chainid)
{
	// Get message from Moralis with PlayFab Azure Functions 
	PlayFabCloudScriptAPI.ExecuteFunction(new ExecuteFunctionRequest()
	{
		Entity = new PlayFab.CloudScriptModels.EntityKey()
		{
			Id = PlayFabSettings.staticPlayer.EntityId, //Get this from when you logged in,
			Type = PlayFabSettings.staticPlayer.EntityType, //Get this from when you logged in
		},
		FunctionName = "ChallengeRequest", //This should be the name of your Azure Function that you created.
		FunctionParameter =
			new Dictionary<string, object>() //This is the data that you would want to pass into your function.
			{
				{ "address", address },
				{ "chainid", chainid }
			},
		GeneratePlayStreamEvent = true //Set this to true if you would like this call to show up in PlayStream
	}, async (ExecuteFunctionResult result) =>
	{
		if (result.FunctionResultTooLarge ?? false)
		{
			Debug.Log(
				"This can happen if you exceed the limit that can be returned from an Azure Function; see PlayFab Limits Page for details.");
			// If there is an error, fire the OnFailed event
			OnFailed.Invoke();
			return;
		}

		// Check if we got a message
		string message = result.FunctionResult.ToString();
		if (!String.IsNullOrEmpty(message))
		{
			authenticationKit.State = AuthenticationKitState.WalletSigning;
			
#if !UNITY_WEBGL
			// Sign the message with WalletConnect
			string signature = await WalletConnect.ActiveSession.EthPersonalSign(address, message);
#else
			// Sign the message with Web3
			string signature = await Web3GL.Sign(message);
#endif
			if (!String.IsNullOrEmpty(signature))
			{
				// Send the message and signature to the Authenticate Azure function for validation
				Authenticate(message, signature);
			}
			else
			{
				// If there is no signature fire the OnFailed event
				OnFailed.Invoke();
			}
		}
		else
		{
			// If the is no message fire the OnFailed event
			OnFailed.Invoke();
		}
	}, (PlayFabError error) =>
	{
		Debug.Log($"Oops Something went wrong: {error.GenerateErrorReport()}");
		// If there is an error, fire the OnFailed event
		OnFailed.Invoke();
	});
}
```



20. In the `Authenticate` method, find the **FunctionName** parameter of the `ExecuteFunctionRequest` and set this to "ChallengeVerify". This tells PlayFab which of the functions should be called.
21. In the `CreateMessage` method, find the **FunctionParameter** parameter of the `ExecuteFunctionRequest` and change it so that it passes in the two parameters supplied to the `Authenticate` method:

```c#
FunctionParameter =
	new Dictionary<string, object>() //This is the data that you would want to pass into your function.
	{
		{ "message", message},
		{ "signature", signature}
	},
```



22. In the success callback parameter, add a conditional statement that checks if a PlayFab limit exceeded condition exists; if it does, invoke `OnFailed`:

```c#
if (result.FunctionResultTooLarge ?? false)
{
	Debug.Log(
		"This can happen if you exceed the limit that can be returned from an Azure Function; see PlayFab Limits Page for details.");
	// If there is an error, fire the OnFailed event
	OnFailed.Invoke();
	return;
}
```



23. Now, check to see if the result is empty. If not, the verification call succeeded, invoke `OnSuccess`; otherwise, invoke `OnFailed`. Your complete `Authenticate` method should look similar to this:

```c#
private void Authenticate(string message, string signature)
{
	// Send the message and signature to the Authenticate Azure function for validation
	PlayFabCloudScriptAPI.ExecuteFunction(new ExecuteFunctionRequest()
	{
		Entity = new PlayFab.CloudScriptModels.EntityKey()
		{
			Id = PlayFabSettings.staticPlayer.EntityId, //Get this from when you logged in,
			Type = PlayFabSettings.staticPlayer.EntityType, //Get this from when you logged in
		},
		FunctionName = "ChallengeVerify", //This should be the name of your Azure Function that you created.
		FunctionParameter =
			new Dictionary<string, object>() //This is the data that you would want to pass into your function.
			{
				{ "message", message },
				{ "signature", signature }
			},
		GeneratePlayStreamEvent = true //Set this to true if you would like this call to show up in PlayStream
	}, (ExecuteFunctionResult result) =>
	{
		if (result.FunctionResultTooLarge ?? false)
		{
			Debug.Log(
				"This can happen if you exceed the limit that can be returned from an Azure Function; see PlayFab Limits Page for details.");
			// If there is an error, fire the OnFailed event
			OnFailed.Invoke();
			return;
		}

		// If the authentication succeeded, the user profile is updated and we get the UpdateUserDataAsync return values as response
		// If it failed it returns empty
		if (!String.IsNullOrEmpty(result.FunctionResult.ToString()))
		{
			authenticationKit.State = AuthenticationKitState.WalletSigned;
			
			// On success fire the OnSuccess event
			OnSuccess.Invoke();
		}
		else
		{
			// If the response is empty, fire the OnFailed event
			OnFailed.Invoke();
		}
	}, (PlayFabError error) =>
	{
		Debug.Log($"Oops Something went wrong: {error.GenerateErrorReport()}");
		// If there is an error, fire the OnFailed event
		OnFailed.Invoke();
	});
}
```



24. The final step is to add a method that will be called when the authentication kit changes state. When the state changes to **AuthenticationKitState.WalletConnected**, we can extract the user's wallet address and chain ID to call the `CreateMessage` method. The code for this method is:

```c#
public void StateObservable_OnValueChanged(AuthenticationKitState authenticationKitState)
{
	switch (authenticationKitState)
	{
		case AuthenticationKitState.WalletConnected:

#if !UNITY_WEBGL
			// Get the address and chain ID with WalletConnect 
			string address = WalletConnect.ActiveSession.Accounts[0];
			int chainid = WalletConnect.ActiveSession.ChainId;
#else
			// Get the address and chain ID with Web3 
			string address = Web3GL.Account().ToLower();
			int chainid = Web3GL.ChainId();
#endif
			// Create sign message 
			CreateMessage(address, chainid);
			break;
	}
}
```



Your complete `MoralisWeb3AuthService.cs` file should now look similar to this:

```c#
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using PlayFab;
using PlayFab.CloudScriptModels;
using WalletConnectSharp.Unity;
using Assets.Scripts.Moralis;

public class MoralisWeb3AuthService : MonoBehaviour
{
    //  Events ----------------------------------------

    /// <summary>
    /// Invoked when authentication was 
    /// 
    [Header("Events")] public UnityEvent OnSuccess = new UnityEvent();

    /// <summary>
    /// Invoked when State==AuthenticationKitState.Disconnected
    /// 
    public UnityEvent OnFailed = new UnityEvent();

    private AuthenticationKit authenticationKit = null;

    public void Awake()
    {
        authenticationKit = FindObjectOfType<AuthenticationKit>(true);
    }

    public void StateObservable_OnValueChanged(AuthenticationKitState authenticationKitState)
    {
        switch (authenticationKitState)
        {
            case AuthenticationKitState.WalletConnected:

#if !UNITY_WEBGL
                // Get the address and chain ID with WalletConnect 
                string address = WalletConnect.ActiveSession.Accounts[0];
                int chainid = WalletConnect.ActiveSession.ChainId;
#else
                // Get the address and chain ID with Web3 
                string address = Web3GL.Account().ToLower();
                int chainid = Web3GL.ChainId();
#endif
                // Create sign message 
                CreateMessage(address, chainid);
                break;
        }
    }

    private void CreateMessage(string address, int chainid)
    {
        // Get message from Moralis with PlayFab Azure Functions 
        PlayFabCloudScriptAPI.ExecuteFunction(new ExecuteFunctionRequest()
        {
            Entity = new PlayFab.CloudScriptModels.EntityKey()
            {
                Id = PlayFabSettings.staticPlayer.EntityId, //Get this from when you logged in,
                Type = PlayFabSettings.staticPlayer.EntityType, //Get this from when you logged in
            },
            FunctionName = "ChallengeRequest", //This should be the name of your Azure Function that you created.
            FunctionParameter =
                new Dictionary<string, object>() //This is the data that you would want to pass into your function.
                {
                    { "address", address },
                    { "chainid", chainid }
                },
            GeneratePlayStreamEvent = true //Set this to true if you would like this call to show up in PlayStream
        }, async (ExecuteFunctionResult result) =>
        {
            if (result.FunctionResultTooLarge ?? false)
            {
                Debug.Log(
                    "This can happen if you exceed the limit that can be returned from an Azure Function; see PlayFab Limits Page for details.");
                // If there is an error, fire the OnFailed event
                OnFailed.Invoke();
                return;
            }

            // Check if we got a message
            string message = result.FunctionResult.ToString();
            if (!String.IsNullOrEmpty(message))
            {
                authenticationKit.State = AuthenticationKitState.WalletSigning;
                
#if !UNITY_WEBGL
                // Sign the message with WalletConnect
                string signature = await WalletConnect.ActiveSession.EthPersonalSign(address, message);
#else
                // Sign the message with Web3
                string signature = await Web3GL.Sign(message);
#endif
                if (!String.IsNullOrEmpty(signature))
                {
                    // Send the message and signature to the Authenticate Azure function for validation
                    Authenticate(message, signature);
                }
                else
                {
                    // If there is no signature, fire the OnFailed event
                    OnFailed.Invoke();
                }
            }
            else
            {
                // If there is no message, fire the OnFailed event
                OnFailed.Invoke();
            }
        }, (PlayFabError error) =>
        {
            Debug.Log($"Oops Something went wrong: {error.GenerateErrorReport()}");
            // If there is an error, fire the OnFailed event
            OnFailed.Invoke();
        });
    }

    private void Authenticate(string message, string signature)
    {
        // Send the message and signature to the Authenticate Azure function for validation
        PlayFabCloudScriptAPI.ExecuteFunction(new ExecuteFunctionRequest()
        {
            Entity = new PlayFab.CloudScriptModels.EntityKey()
            {
                Id = PlayFabSettings.staticPlayer.EntityId, //Get this from when you logged in,
                Type = PlayFabSettings.staticPlayer.EntityType, //Get this from when you logged in
            },
            FunctionName = "ChallengeVerify", //This should be the name of your Azure Function that you created.
            FunctionParameter =
                new Dictionary<string, object>() //This is the data that you would want to pass into your function.
                {
                    { "message", message },
                    { "signature", signature }
                },
            GeneratePlayStreamEvent = true //Set this to true if you would like this call to show up in PlayStream
        }, (ExecuteFunctionResult result) =>
        {
            if (result.FunctionResultTooLarge ?? false)
            {
                Debug.Log(
                    "This can happen if you exceed the limit that can be returned from an Azure Function; see PlayFab Limits Page for details.");
                // If there is an error, fire the OnFailed event
                OnFailed.Invoke();
                return;
            }

            // If the authentication succeeded, the user profile is updated and we get the UpdateUserDataAsync return values as response
            // If it fails it returns empty
            if (!String.IsNullOrEmpty(result.FunctionResult.ToString()))
            {
                authenticationKit.State = AuthenticationKitState.WalletSigned;
                
                // On success, fire the OnSuccess event
                OnSuccess.Invoke();
            }
            else
            {
                // If the response is empty, fire the OnFailed event
                OnFailed.Invoke();
            }
        }, (PlayFabError error) =>
        {
            Debug.Log($"Oops Something went wrong: {error.GenerateErrorReport()}");
            // If the is a error fire the OnFailed event
            OnFailed.Invoke();
        });
    }
}
```

#### Steps to Wire Up `MoralisWeb3AuthService`

1. In the Unity UI, in the **Hierarchy** view, select the `MoralisWeb3AuthService` object and add entries under both **On Success** and **On Failed**. Drag **AuthenticationKit** into each of these, selecting **AuthenticationKit/Connect** for **On Success** and **AuthenticationKit/Disconnect** for **On Failed**:

![](/img/content/429cebe-unity_4c.webp "unity_4c.webp")

2. In the Unity UI, in the **Hierarchy** view, select the **AuthenticationKit** object. Add an entry to **On State Changed (AuthenticationStateChanged)**. Drag the **MoralisWeb3AuthService** object to this entry and select **MoralisWeb3AuthService/StateObservable_OnValueChanged**:

![](/img/content/d657299-unity_4d.webp "unity_4d.webp")

### Play the Game!

1. Run the **SampleScene** and select **PLAY AS GUEST**:

![](/img/content/9f0d37e-unity_5.webp "unity_5.webp")

2. Select **CONNECT WALLET**:

![](/img/content/5b6bb54-unity_6.webp "unity_6.webp")

3. Select **CONNECT** and scan the QR code with your wallet and follow all the steps.
4. If you return to the **LOGGED IN** screen, the wallet information is added to the player's profile under **Players** > **Player Data**:

![](/img/content/5433ab6-unity_7.webp "unity_7.webp")

5. Celebrate your **epic setup** and start thinking of all the Web3 games you can now build!