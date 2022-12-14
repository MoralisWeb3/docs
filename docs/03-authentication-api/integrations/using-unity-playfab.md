---
title: "Azure PlayFab (NodeJS) with Unity"
slug: "azure-playfab-nodejs-unity"
description: "This tutorial will teach you how to set up a complete gaming backend platform for Web3 games. We use Unity as our game engine, Microsoft Azure PlayFab as our gaming backend, and Moralis to enable all the Web3 magic! You'll also learn how to use Web3 authentication and how to retrieve a user's native balance, a list of ERC-20 tokens, and the first ten NFTs they own using the Web3 API."
---
> 📘 Compatible with NodeJS and .NET
> 
> You can complete this tutorial using both environments. The steps where you can choose are split and specifically documented for each one, like [here](/docs/using-unity-playfab#set-up-azure-functions).

# The Steps We Will Take

1. Set up a Moralis account
2. Set up <<glossary:Microsoft Azure PlayFab>> (free plan)
3. Set up <<glossary:Azure Functions>>
4. Create <<glossary:Azure Functions>> with Visual Studio Code
5. Deploy <<glossary:Azure Functions>> with Visual Studio Code
6. Set up Unity and connect <<glossary:Microsoft Azure PlayFab>> 

# Set up a Moralis Account

This section describes how to set up your Moralis account and find the Web3 API you need to integrate. Your Moralis account provides access to all Moralis Web3 functionality.

1. [Create a Moralis account if you don't already have one](https://admin.moralis.io/register).
2. Go to **Web3 APIs** and copy and save the **API key v3**. You will need this when setting up Azure Functions.

![](/img/content/9c470bb-1.png "1.png")

# Set up Microsoft Azure PlayFab (free plan)

An active PlayFab account is required to use the functionality provided by PlayFab. Please note that a free plan is available. This section describes how to set up a PlayFab account and configure your first application.

> 📘 What is Microsoft Azure PlayFab?
> PlayFab is a complete backend platform for live games with managed game services. PlayFab backend services reduce the barriers to launch for game developers, offering both large and small studios cost-effective development solutions that scale with their games and help them engage, retain, and monetize players. PlayFab enables developers to use the intelligent cloud to build and operate games, analyze gaming data, and improve overall gaming experiences. 
> [Learn more](https://docs.microsoft.com/en-us/gaming/playfab/what-is-playfab)

1. [Create a PlayFab Account](https://developer.playfab.com/).
2. Create a **new title** on PlayFab:

![](/img/content/622535b-2.png "2.png")

3. Open your new title and go to **Title settings**:

![](/img/content/3d13f75-3.png "3.png")

4. Go to the **API Features** tab and write down the **Title ID**. You will need this when setting up Azure Functions.
5. Go to the **Secret Keys** tab and write down the **secret key**. You will need this when setting up Azure Functions.

# Set up Azure Functions

To run Moralis on the backend of PlayFab, we need to use Azure Functions. Azure Functions integrates natively with PlayFab; however, Azure Functions is a separate product and requires an account separate from PlayFab.

> 📘 What is Azure Functions?
> 
> Azure Functions provides serverless compute. You can use Azure Functions to build web APIs, respond to database changes, process IoT streams, manage message queues, and more. PlayFab uses Azure Functions to make it possible to use Moralis on top of the PlayFab backend.
> 
> [More info](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview)

1. [Create a free Azure account](https://portal.azure.com/).
2. [Create a Microsoft Customer Agreement subscription](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription#create-a-subscription).
3. Search for **Function App** and select it.

![](/img/content/b069353-4.png)



4. Create a new Function App. Because Moralis offers both **JS** and **.NET SDK**, you can choose the one that fits you better:

## NodeJS

![](/img/content/cd8519e-image.png)



## .NET

![](/img/content/30e91e7-image.png)



5. You can reproduce the next steps of this section equally for both apps (JS or .NET).
6. Select **Review + create** and then **Create**.
7. Open the **MoralisAzureFunctions** resource:

![](/img/content/00720ee-6.png "6.png")

7. Go to **Configuration** and select **New application setting**:

![](/img/content/da6a902-7.png "7.png")

8. Enter **MORALIS\_API\_KEY** as the name, and in the value, paste your Moralis API key. Leave **Deployment slot setting** unchecked and select **Ok**.
9. _(Only for .NET Setup)_ Create a second application setting. Enter **MORALIS\_AUTHENTICATION\_API\_URL** as the name, and in the value, enter **<https://authapi.moralis.io/>**. Leave **Deployment slot setting** unchecked and select **Ok**.
10. _(Only for .NET Setup)_ Create a third application setting. Enter **MORALIS_WEB3_API_URL** as the name, and in the value, enter **<https://deep-index.moralis.io/api/v2>**. Leave **Deployment slot setting** unchecked and select **Ok**.
11. Create another application setting and enter **PLAYFAB\_TITLE\_ID** as the name, and in the value, paste your PlayFab title ID. Leave **Deployment slot setting** unchecked and select **Ok**.
12. Create another application setting and enter **PLAYFAB\_DEV\_SECRET\_KEY** as the name, and in the value, paste your PlayFab secret key. Leave **Deployment slot setting** unchecked and select **Ok**.
13. Select **Save** and then **Continue**.

![](/img/content/72eb186-8.png "8.png")

![](/img/content/4ba31c1-9.png "9.png")

# Create Azure Functions with Visual Studio Code

This section walks through coding functions that integrate the Moralis SDK.

> 📘 Main requirements
> 
> You can follow this section using **NodeJS** or **.NET**. Either way, make sure you have the **following requirements** in place:
> 
> - [Visual Studio Code](https://code.visualstudio.com/)
> - [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) for Visual Studio Code

## NodeJS

<b>Using the Moralis NodeJS SDK</b>

### Prerequisites

- [NodeJS 16 LTS](https://nodejs.org/en/)

### Function creation

> 📘 
> 
> The completed project with all the functions ready can be found on [GitHub](https://github.com/MoralisWeb3/example-auth-azure-functions-nodejs). **Download** it, **open** it with VS Code and jump to **_Installing dependencies_** to complete this section. However, continue exploring the section to learn how to do it yourself.

<b>Authentication API functions</b>

#### Create [`ChallengeRequest`](https://docs.moralis.io/reference/requestchallengeevm) function

1. Open Visual Studio Code.
2. Select **Azure** and sign in.
3. Under **Workspace** select **Create Function**:

![](/img/content/0556f0c-azure_functions_1.gif "azure_functions_1.gif")

4. Select **Create new project** and create an empty folder. I named mine **example-auth-azure-functions-nodejs**:

![](/img/content/6f08068-image.png)

5. For the language select **Javascript**:

![](/img/content/44a1fc3-image.png)



6. Select **HTTP Trigger** for the template:

![](/img/content/352f141-image.png)



7. Name it **ChallengeRequest** and press _Enter_:

![](/img/content/2a2b9fd-image.png)



8. Select **Function** for the authorization level:

![](/img/content/aa78fbe-image.png)



9. Finally, select **Open in current window**:

![](/img/content/d41d75b-image.png)



10. We now have the **`ChallengeRequest`** function created:

![](/img/content/822b4ce-image.png)

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

#### Create [`ChallengeVerify`](https://docs.moralis.io/reference/verifychallengeevm) function

1. Repeat the same steps as for **`ChallengeRequest`** (no need to create a new project now) but this time name it **`ChallengeVerify`**:

![](/img/content/90ac5b9-image.png)

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



<b>NFT API functions</b>

#### Create [`GetWalletNfts`](https://docs.moralis.io/reference/getwalletnfts-2) function

Repeat the same steps as before to create the new functions but name it accordingly. Once created, copy the following code into `index.js`:

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

<b>EVM API functions</b>

#### Create [`RunContractFunction`](https://docs.moralis.io/reference/runcontractfunction) function

Repeat the same steps as before to create the new functions but name it accordingly. Once created, copy the following code into `index.js`:

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

![](/img/content/a3c6570-image.png)

2. Install the **Moralis JS SDK** and the **PlayFab SDK** by running this command:

```powershell
npm install moralis playfab-sdk
```



## .NET

<b>Using the Moralis C# .NET SDK</b>

### Prerequisites

Before you get started, make sure you have the following requirements in place:

1. [.NET 6.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
2. [Azure Functions Core Tools version 4.x](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash#v2)
3. [C# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) for  Visual Studio Code

### Project Setup

> 📘 
> 
> The completed project with all the functions ready can be found on [GitHub](https://github.com/MoralisWeb3/example-auth-azure-functions). However, continue exploring this section to learn how to do it yourself.

1. Open Visual Studio Code.
2. Select **Azure** and **Workspace** and add a function:

![](/img/content/0556f0c-azure_functions_1.gif "azure_functions_1.gif")

3. Click on **Create new project** and select or create a folder. For this example, we will create and select a new folder named **example-auth-azure-functions**.
4. For the language, select **C#**:

![](/img/content/e3747c2-azure_functions_2.gif "azure_functions_2.gif")

5. Select the **.NET** runtime you want to use. For this tutorial, we select **.NET 6.0 LTS**:

![](/img/content/3734344-azure_functions_3.gif "azure_functions_3.gif")

6. Select **HTTP trigger** as the template:

![](/img/content/a218747-azure_functions_4.gif "azure_functions_4.gif")

7. Provide a root namespace for your project:

![](/img/content/52ff37f-azure_functions_5.gif "azure_functions_5.gif")

8. For **AccessRights**, select **Function**:

![](/img/content/64041e4-azure_functions_6.gif "azure_functions_6.gif")

9. Select **Open in current window**.
10. You should see a pop-up window indicating missing dependencies; click on **Restore**:

![](/img/content/652d283-azure_functions_7.gif "azure_functions_7.gif")

11. Open the **.csproj** file. There will be an `ItemGroup` element with one or more `PackageReference` elements. Replace this section with the following code:

```xml
<ItemGroup>
	<PackageReference Include="Microsoft.NET.Sdk.Functions" Version="4.1.1"/>
	<PackageReference Include="PlayFabAllSDK" Version="1.127.220718"/>
	<PackageReference Include="PlayFabCloudScriptPlugin" Version="1.53.190627-alpha"/>
	<PackageReference Include="Moralis" Version="2.0.4-beta"/>
</ItemGroup>
```



Save the updated file. You should see the pop-up indicating missing dependencies; click on **Restore**.

### Main Code File

This section walks through coding our main functions code file. The functions created in this tutorial assume that requests are delivered via PlayFab.

1. When we created our function, it created `ChallengeRequest.cs`. For this tutorial, we will create two functions and will put them in the same file. Rename the `ChallengeRequest.cs` file and class to `MoralisPlayFab`.
2. In the `MoralisPlayFab.cs` file, replace the `using` statements with these:

```cs
using System;
using System.IO;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using PlayFab.ServerModels;
using Moralis.Network;
using Moralis.AuthApi.Models;
using Moralis.AuthApi.Interfaces;
using Newtonsoft.Json;
```



3. In the `MoralisPlayFab` class, create variables that provide the application settings defined [above](#setup-azure-account).

```cs
private static string AuthenticationApiUrl = Environment.GetEnvironmentVariable("MORALIS_AUTHENTICATION_API_URL", EnvironmentVariableTarget.Process);
private static string Web3ApiUrl = Environment.GetEnvironmentVariable("MORALIS_WEB3_API_URL", EnvironmentVariableTarget.Process);
private static string ApiKey = Environment.GetEnvironmentVariable("MORALIS_API_KEY", EnvironmentVariableTarget.Process);
```



4. Change the method name from `Run` to `ChallengeRequest` and remove the `get,` parameter of the `HttpTrigger`. Copy the `ChallengeRequest` method and rename it to `ChallengeVerify`. Your `MoralisPlayFab .cs` file should look like this:

```cs
using System;
using System.IO;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using PlayFab.ServerModels;
using Moralis.Network;
using Moralis.AuthApi.Models;
using Moralis.AuthApi.Interfaces;
using Newtonsoft.Json;

namespace PlayFab.AzureFunctions
{
    public static class MoralisPlayFab
    {        
        private static string AuthenticationApiUrl = Environment.GetEnvironmentVariable("MORALIS_AUTHENTICATION_API_URL", EnvironmentVariableTarget.Process);
        private static string Web3ApiUrl = Environment.GetEnvironmentVariable("MORALIS_WEB3_API_URL", EnvironmentVariableTarget.Process);
        private static string ApiKey = Environment.GetEnvironmentVariable("MORALIS_API_KEY", EnvironmentVariableTarget.Process);

        [FunctionName("ChallengeRequest")]
        public static async Task<IActionResult> ChallengeRequest (
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
        }
        
        [FunctionName("ChallengeVerify")]
        public static async Task<IActionResult> ChallengeVerify (
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
        }
    }
}
```



5. Add the following code to each method:

```cs
// Create the function execution's context through the request
string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
// Deserialize Playfab context
dynamic context = JsonConvert.DeserializeObject(requestBody);
var args = context.FunctionArgument;
```



This code converts the data passed in the request into a form that we can use in the code. Note that the `context` variable holds a PlayFab context; we will use this later in the `ChallengeVerify` method.

### `ChallengeRequest` Method

 This section walks through coding the ChallengeRequest method.

1. In the `ChallengeRequest` method, add code to define the `address` and `chainId` and populate these from the request args:

```cs
// Get the address from the request
dynamic address = null;
if (args != null && args["address"] != null)
{
    address = args["address"];
}

// Get the chainid from the request
dynamic chainid = null;
if (args != null && args["chainid"] != null)
{
    chainid = args["chainid"];
}
```



2. Add code to initialize and define a Moralis authentication API object:

```cs
// Connect with the Moralis Authentication Server
Moralis.AuthApi.MoralisAuthApiClient.Initialize(AuthenticationApiUrl, ApiKey);
IAuthClientApi AuthenticationApi = Moralis.AuthApi.MoralisAuthApiClient.AuthenticationApi;
```



3. Add and populate a `ChallengeRequestDto` object. This object is described in detail [here](https://docs.moralis.io/reference/authentication-api-overview#how-it-works). Populate this object as appropriate for your application.

```cs
// Create the authentication message and send it back to the client
// Resources must be RFC 3986 URIs
// More info here: https://eips.ethereum.org/EIPS/eip-4361#message-field-descriptions
ChallengeRequestDto request = new ChallengeRequestDto()
{
    Address = address,
    ChainId = (long)chainid,
    Domain = "moralis.io",
    ExpirationTime = DateTime.UtcNow.AddMinutes(60),
    NotBefore = DateTime.UtcNow,
    Resources = new string[] { "/" },
    Timeout = 120,
    Statement = "Please confirm",
    Uri = "https://moralis.io/"
};
```



4. Finally, call the `Challenge` operation of the Moralis `AuthenticationApi` endpoint. Return the `ChallengeResponseDto` object that is returned:

```cs
ChallengeResponseDto response = await AuthenticationApi.AuthEndpoint.Challenge(request, ChainNetworkType.evm);

return new OkObjectResult(response.Message);
```



Your complete `ChallengeRequest` method should look similar to this:

```cs
[FunctionName("ChallengeRequest")]
public static async Task<dynamic> ChallengeRequest(
    [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req, ILogger log)
{
    // Create the function execution's context through the request
    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
    // Deserialize Playfab context
    dynamic context = JsonConvert.DeserializeObject(requestBody);
    var args = context.FunctionArgument;

    // Get the address from the request
    dynamic address = null;
    if (args != null && args["address"] != null)
    {
        address = args["address"];
    }

    // Get the chainid from the request
    dynamic chainid = null;
    if (args != null && args["chainid"] != null)
    {
        chainid = args["chainid"];
    }

    try
    {
        // Connect with the Moralis Authentication Server
        Moralis.AuthApi.MoralisAuthApiClient.Initialize(AuthenticationApiUrl, ApiKey);
        IAuthClientApi AuthenticationApi = Moralis.AuthApi.MoralisAuthApiClient.AuthenticationApi;

        // Create the authentication message and send it back to the client
        // Resources must be RFC 3986 URIs
        // More info here: https://eips.ethereum.org/EIPS/eip-4361#message-field-descriptions
        ChallengeRequestDto request = new ChallengeRequestDto()
        {
            Address = address,
            ChainId = (long)chainid,
            Domain = "moralis.io",
            ExpirationTime = DateTime.UtcNow.AddMinutes(60),
            NotBefore = DateTime.UtcNow,
            Resources = new string[] { "/" },
            Timeout = 120,
            Statement = "Please confirm",
            Uri = "https://moralis.io/"
        };

        ChallengeResponseDto response = await AuthenticationApi.AuthEndpoint.Challenge(request, ChainNetworkType.evm);
        
        return new OkObjectResult(response.Message);
    }
    catch (ApiException aexp)
    {
        log.LogDebug($"aexp.Message: {aexp.ToString()}");
        return new BadRequestObjectResult(aexp.Message);
    }
    catch (Exception exp)
    {
        log.LogDebug($"exp.Message: {exp.ToString()}");
        return new BadRequestObjectResult(exp.Message);
    }
}
```



### `ChallengeVerify` Method

 This section walks through coding the ChallengeVerify method.

1. In the `ChallengeVerify` method, add code to define `message` and `signature` and populate these from the request args:

```cs
/// Get the message from the request
dynamic message = null;
if (args != null && args["message"] != null)
{
    message = args["message"];
}

// Get the signature from the request
dynamic signature = null;
if (args != null && args["signature"] != null)
{
    signature = args["signature"];
}
```



2. A `CompleteChallengeResponseDto` object will be needed. Go ahead and add a default definition for the response object:

```cs
CompleteChallengeResponseDto response = null;
```



3. Add code to initialize and define a Moralis authentication API object:

```cs
// Connect with the Moralis Authentication Server
Moralis.AuthApi.MoralisAuthApiClient.Initialize(AuthenticationApiUrl, ApiKey);
IAuthClientApi AuthenticationApi = Moralis.AuthApi.MoralisAuthApiClient.AuthenticationApi;
```



4. Create a `CompleteChallangeRequestDto` object populated with the `message` and `signature` and use it to call the `CompleteChallenge` operation of the Moralis authentication API endpoint. Use the response object created earlier to capture the response of this call:

```cs
// Create the authentication message and send it back to the client
CompleteChallengeRequestDto request = new CompleteChallengeRequestDto()
{
    Message = message,
    Signature = signature
};

response = await AuthenticationApi.AuthEndpoint.CompleteChallenge(request, ChainNetworkType.evm);
```



5. If the message and signature were successfully verified by Moralis, add the user's wallet address, chain ID, and the Moralis profile ID for this user to the user's PlayFab record. If this update receives, return the updated record to the caller:

```cs
// Get the setting from our Azure config and connect with the PlayFab API
var settings = new PlayFabApiSettings
{
    TitleId = Environment.GetEnvironmentVariable("PLAYFAB_TITLE_ID", EnvironmentVariableTarget.Process),
    DeveloperSecretKey = Environment.GetEnvironmentVariable("PLAYFAB_DEV_SECRET_KEY", EnvironmentVariableTarget.Process)
};

var serverApi = new PlayFabServerInstanceAPI(settings);

// Update the user read-only data with the validated data and return the reponse to the client
// Read-only data is data that the server can modify, but the client can only read
var updateUserDataRequest = new UpdateUserDataRequest
{
    PlayFabId = context.CallerEntityProfile.Lineage.MasterPlayerAccountId,
    Data = new Dictionary<string, string>()
    {
        {"MoralisProfileId", response.Id.ToString()},
        {"Address", response.Address.ToString()},
        {"ChainId", response.ChainId.ToString()}
    }
};

PlayFabResult<UpdateUserDataResult> updateUserDateResult = await serverApi.UpdateUserReadOnlyDataAsync(updateUserDataRequest);

if (updateUserDateResult.Error == null)
{
    return new OkObjectResult(updateUserDateResult.Result);
}
else
{
    log.LogInformation($"updateUserDateResult.Error.ErrorMessage: {updateUserDateResult.Error.ErrorMessage.ToString()}");
    return new BadRequestObjectResult(updateUserDateResult.Error.ErrorMessage);
}
```



6. Your complete `ChallengeVerify` function should look similar to this:

```cs
[FunctionName("ChallengeVerify")]
public static async Task<dynamic> ChallengeVerify(
    [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req, ILogger log)
{
    // Create the function execution's context through the request
    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
    // Deserialize PlayFab context
    dynamic context = JsonConvert.DeserializeObject(requestBody);
    var args = context.FunctionArgument;

    // Get the message from the request
    dynamic message = null;
    if (args != null && args["message"] != null)
    {
        message = args["message"];
    }

    // Get the signature from the request
    dynamic signature = null;
    if (args != null && args["signature"] != null)
    {
        signature = args["signature"];
    }

    CompleteChallengeResponseDto response = null;

    try
    {
        // Connect with the Moralis Authentication Server
        Moralis.AuthApi.MoralisAuthApiClient.Initialize(AuthenticationApiUrl, ApiKey);
        IAuthClientApi AuthenticationApi = Moralis.AuthApi.MoralisAuthApiClient.AuthenticationApi;

        // Create the authentication message and send it back to the client
        CompleteChallengeRequestDto request = new CompleteChallengeRequestDto()
        {
            Message = message,
            Signature = signature
        };

        response = await AuthenticationApi.AuthEndpoint.CompleteChallenge(request, ChainNetworkType.evm);
    }
    catch (ApiException aexp)
    {
        log.LogInformation($"aexp.Message: {aexp.ToString()}");
        return new BadRequestObjectResult(aexp.Message);
    }
    catch (Exception exp)
    {
        log.LogInformation($"exp.Message: {exp.ToString()}");
        return new BadRequestObjectResult(exp.Message);
    }

    try
    {
        // Get the setting from our Azure config and connect with the PlayFab API
        var settings = new PlayFabApiSettings
        {
            TitleId = Environment.GetEnvironmentVariable("PLAYFAB_TITLE_ID", EnvironmentVariableTarget.Process),
            DeveloperSecretKey = Environment.GetEnvironmentVariable("PLAYFAB_DEV_SECRET_KEY", EnvironmentVariableTarget.Process)
        };

        var serverApi = new PlayFabServerInstanceAPI(settings);

        // Update the user read-only data with the validated data and return the response to the client
        // Read-only data is data that the server can modify, but the client can only read
        var updateUserDataRequest = new UpdateUserDataRequest
        {
            PlayFabId = context.CallerEntityProfile.Lineage.MasterPlayerAccountId,
            Data = new Dictionary<string, string>()
            {
                {"MoralisProfileId", response.Id.ToString()},
                {"Address", response.Address.ToString()},
                {"ChainId", response.ChainId.ToString()}
            }
        };

        PlayFabResult<UpdateUserDataResult> updateUserDateResult = await serverApi.UpdateUserReadOnlyDataAsync(updateUserDataRequest);
        
        if (updateUserDateResult.Error == null)
        {
            return new OkObjectResult(updateUserDateResult.Result);
        }
        else
        {
            log.LogInformation($"updateUserDateResult.Error.ErrorMessage: {updateUserDateResult.Error.ErrorMessage.ToString()}");
            return new BadRequestObjectResult(updateUserDateResult.Error.ErrorMessage);
        }
    }
    catch (Exception exp)
    {
        log.LogInformation($"exp.Message: {exp.ToString()}");
        return new BadRequestObjectResult(exp.Message);
    }
}
```



### Add Methods to Retrieve Wallet Balances, Tokens Owned, and NFTs

One of the greatest advantages of using the Moralis SDK is the ability provided to easily retrieve just about any EVM chain data, including native balance, information about ERC-20 tokens, and NFTs. This section provides sample code just for that.

### Web3 API

The Moralis SDK provides the ability to easily query and search EVM data of all kinds. A detailed listing and description of the Moralis Web3 API can be found [here](https://docs.moralis.io/reference/evm-api-overview).

For this demonstration, we will provide examples of how to create Azure Functions to call three operations:  
  a. One to look up a user's native token balance using the [`getNativeBalance` operation of the **Account** endpoint](https://docs.moralis.io/reference/getnativebalance).  
  b. One to retrieve a list of ERC-20 tokens owned by a user using the [`getTokenBalances` operation of the **Account** endpoint](https://docs.moralis.io/reference/getwallettokenbalances).  
  c. One to retrieve the NFTs owned by a user using the [`getNfts` operation of the **Account** endpoint](https://docs.moralis.io/reference/getwalletnfts).

Each of the three functions we will now create are almost duplicates of the [`ChallengeRequest`](#challengerequest-method) method we created earlier.

1. Make a copy of the  `ChallengeRequest` method, rename it `GetNativeBalance`, and delete everything in the **try** block. 
2. In the **try** block, add code to initialize and define a Moralis `Web3Api` object:

```cs
// Connect with the Moralis Authentication Server
Moralis.Web3Api.MoralisWeb3ApiClient.Initialize(Web3ApiUrl, ApiKey);
IWeb3Api web3Api = Moralis.Web3Api.MoralisWeb3ApiClient.Web3Api;

ChainList chain = (ChainList)chainid;
```



3. Make two copies of this method, renaming one `GetTokenBalances` and one `GetNfts`.

### `GetNativeBalance`

1. In the **try** block, add a call to the `GetNativeBalance` operation of the **Account** endpoint of `Web3Api`. This operation returns a `NativeBalance` object which should be returned to the calling application.

```cs
NativeBalance response = await web3Api.Account.GetNativeBalance(address, chain);

return new OkObjectResult(response);
```



### `GetTokenBalances`

1. In the **try** block, add a call to the `GetTokenBalances` operation of the **Account** endpoint of `Web3Api`. This operation returns a List\<Erc20TokenBalance\> object which should be returned to the calling application.

```cs
List<Erc20TokenBalance> response = await web3Api.Account.GetTokenBalances(address, chain);

return new OkObjectResult(response);
```



### `GetNfts`

1. Add code to capture the `cursor` and `limit` parameters passed into the method:

```cs
// Get the cursor from the request
string cursor = null;
if (args != null && args["cursor"] != null)
{
    cursor = args["cursor"].ToString();
}

// Get the limit from the request
int limit = 1;
if (args != null && args["limit"] != null)
{
    limit = args["limit"];
    int.TryParse(args["limit"].ToString(), out limit);
}
```



2. In the **try** block, add a call to the `GetNfts` operation of the **Account** endpoint of `Web3Api`. This operation returns a `NftOwnerCollection` object which should be returned to the calling application.

```cs
NftOwnerCollection response = await web3Api.Account.GetNFTs(address, chain, cursor, null, limit);

return new OkObjectResult(response);
```



### Complete `MoralisPlayFab.cs`

Your complete `MoralisPlayFab.cs` file should look similar to:

```cs
using System;
using System.IO;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using PlayFab.ServerModels;
using Moralis.Network;
using Moralis.AuthApi.Models;
using Moralis.AuthApi.Interfaces;
using Moralis.Web3Api.Models;
using Moralis.Web3Api.Interfaces;
using Newtonsoft.Json;

namespace PlayFab.AzureFunctions
{
    public static class MoralisPlayFab
    {
        private static string AuthenticationApiUrl = Environment.GetEnvironmentVariable("MORALIS_AUTHENTICATION_API_URL", EnvironmentVariableTarget.Process);
        private static string Web3ApiUrl = Environment.GetEnvironmentVariable("MORALIS_WEB3_API_URL", EnvironmentVariableTarget.Process);
        private static string ApiKey = Environment.GetEnvironmentVariable("MORALIS_API_KEY", EnvironmentVariableTarget.Process);

        [FunctionName("ChallengeRequest")]
        public static async Task<dynamic> ChallengeRequest(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req, ILogger log)
        {
            // Create the function execution's context through the request
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            // Deserialize PlayFab context
            dynamic context = JsonConvert.DeserializeObject(requestBody);
            var args = context.FunctionArgument;

            // Get the address from the request
            dynamic address = null;
            if (args != null && args["address"] != null)
            {
                address = args["address"];
            }

            // Get the chainid from the request
            dynamic chainid = null;
            if (args != null && args["chainid"] != null)
            {
                chainid = args["chainid"];
            }

            try
            {
                // Connect with the Moralis Authentication Server
                Moralis.AuthApi.MoralisAuthApiClient.Initialize(AuthenticationApiUrl, ApiKey);
                IAuthClientApi AuthenticationApi = Moralis.AuthApi.MoralisAuthApiClient.AuthenticationApi;

                // Create the authentication message and send it back to the client
                // Resources must be RFC 3986 URIs
                // More info here: https://eips.ethereum.org/EIPS/eip-4361#message-field-descriptions
                ChallengeRequestDto request = new ChallengeRequestDto()
                {
                    Address = address,
                    ChainId = (long)chainid,
                    Domain = "moralis.io",
                    ExpirationTime = DateTime.UtcNow.AddMinutes(60),
                    NotBefore = DateTime.UtcNow,
                    Resources = new string[] { "/" },
                    Timeout = 120,
                    Statement = "Please confirm",
                    Uri = "https://moralis.io/"
                };

                ChallengeResponseDto response = await AuthenticationApi.AuthEndpoint.Challenge(request, ChainNetworkType.evm);
                
                return new OkObjectResult(response.Message);
            }
            catch (ApiException aexp)
            {
                log.LogDebug($"aexp.Message: {aexp.ToString()}");
                return new BadRequestObjectResult(aexp.Message);
            }
            catch (Exception exp)
            {
                log.LogDebug($"exp.Message: {exp.ToString()}");
                return new BadRequestObjectResult(exp.Message);
            }
        }

        [FunctionName("ChallengeVerify")]
        public static async Task<dynamic> ChallengeVerify(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req, ILogger log)
        {
            // Create the function execution's context through the request
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            // Deserialize PlayFab context
            dynamic context = JsonConvert.DeserializeObject(requestBody);
            var args = context.FunctionArgument;

            // Get the message from the request
            dynamic message = null;
            if (args != null && args["message"] != null)
            {
                message = args["message"];
            }

            // Get the signature from the request
            dynamic signature = null;
            if (args != null && args["signature"] != null)
            {
                signature = args["signature"];
            }

            CompleteChallengeResponseDto response = null;

            try
            {
                // Connect with the Moralis Authentication Server
                Moralis.AuthApi.MoralisAuthApiClient.Initialize(AuthenticationApiUrl, ApiKey);
                IAuthClientApi AuthenticationApi = Moralis.AuthApi.MoralisAuthApiClient.AuthenticationApi;

                // Create the authentication message and send it back to the client
                CompleteChallengeRequestDto request = new CompleteChallengeRequestDto()
                {
                    Message = message,
                    Signature = signature
                };

                response = await AuthenticationApi.AuthEndpoint.CompleteChallenge(request, ChainNetworkType.evm);
            }
            catch (ApiException aexp)
            {
                log.LogInformation($"aexp.Message: {aexp.ToString()}");
                return new BadRequestObjectResult(aexp.Message);
            }
            catch (Exception exp)
            {
                log.LogInformation($"exp.Message: {exp.ToString()}");
                return new BadRequestObjectResult(exp.Message);
            }

            try
            {
                // Get the setting from our Azure config and connect with the PlayFab API
                var settings = new PlayFabApiSettings
                {
                    TitleId = Environment.GetEnvironmentVariable("PLAYFAB_TITLE_ID", EnvironmentVariableTarget.Process),
                    DeveloperSecretKey = Environment.GetEnvironmentVariable("PLAYFAB_DEV_SECRET_KEY", EnvironmentVariableTarget.Process)
                };

                var serverApi = new PlayFabServerInstanceAPI(settings);

                // Update the user read-only data with the validated data and return the response to the client
                // Read-only data is data that the server can modify, but the client can only read
                var updateUserDataRequest = new UpdateUserDataRequest
                {
                    PlayFabId = context.CallerEntityProfile.Lineage.MasterPlayerAccountId,
                    Data = new Dictionary<string, string>()
                    {
                        {"MoralisProfileId", response.Id.ToString()},
                        {"Address", response.Address.ToString()},
                        {"ChainId", response.ChainId.ToString()}
                    }
                };

                PlayFabResult<UpdateUserDataResult> updateUserDateResult = await serverApi.UpdateUserReadOnlyDataAsync(updateUserDataRequest);
                
                if (updateUserDateResult.Error == null)
                {
                    return new OkObjectResult(updateUserDateResult.Result);
                }
                else
                {
                    log.LogInformation($"updateUserDateResult.Error.ErrorMessage: {updateUserDateResult.Error.ErrorMessage.ToString()}");
                    return new BadRequestObjectResult(updateUserDateResult.Error.ErrorMessage);
                }
            }
            catch (Exception exp)
            {
                log.LogInformation($"exp.Message: {exp.ToString()}");
                return new BadRequestObjectResult(exp.Message);
            }
        }


        [FunctionName("GetNativeBalance")]
        public static async Task<dynamic> GetNativeBalance(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req, ILogger log)
        {
            // Create the function execution's context through the request
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            // Deserialize PlayFab context
            dynamic context = JsonConvert.DeserializeObject(requestBody);
            var args = context.FunctionArgument;

            // Get the address from the request
            string address = null;
            if (args != null && args["address"] != null)
            {
                address = args["address"].ToString().ToLower();
            }

            // Get the chainid from the request
            int chainid = 1;
            if (args != null && args["chainid"] != null)
            {
                chainid = args["chainid"];
                int.TryParse(args["chainid"].ToString(), out chainid);
            }

            try
            {
                // Connect with the Moralis Authentication Server
                Moralis.Web3Api.MoralisWeb3ApiClient.Initialize(Web3ApiUrl, ApiKey);
                IWeb3Api web3Api = Moralis.Web3Api.MoralisWeb3ApiClient.Web3Api;

                ChainList chain = (ChainList)chainid;

                NativeBalance response = await web3Api.Account.GetNativeBalance(address, chain);

                return new OkObjectResult(response);
            }
            catch (ApiException aexp)
            {
                log.LogDebug($"aexp.Message: {aexp.ToString()}");
                return new BadRequestObjectResult(aexp.Message);
            }
            catch (Exception exp)
            {
                log.LogDebug($"exp.Message: {exp.ToString()}");
                return new BadRequestObjectResult(exp.Message);
            }
        }
        
        [FunctionName("GetNfts")]
        public static async Task<dynamic> GetNfts(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req, ILogger log)
        {
            // Create the function execution's context through the request
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            // Deserialize PlayFab context
            dynamic context = JsonConvert.DeserializeObject(requestBody);
            var args = context.FunctionArgument;

            // Get the address from the request
            string address = null;
            if (args != null && args["address"] != null)
            {
                address = args["address"].ToString().ToLower();
            }

            // Get the chainid from the request
            int chainid = 1;
            if (args != null && args["chainid"] != null)
            {
                chainid = args["chainid"];
                int.TryParse(args["chainid"].ToString(), out chainid);
            }

            // Get the cursor from the request
            string cursor = null;
            if (args != null && args["cursor"] != null)
            {
                cursor = args["cursor"].ToString();
            }

            // Get the limit from the request
            int limit = 1;
            if (args != null && args["limit"] != null)
            {
                limit = args["limit"];
                int.TryParse(args["limit"].ToString(), out limit);
            }

            try
            {
                // Connect with the Moralis Authentication Server
                Moralis.Web3Api.MoralisWeb3ApiClient.Initialize(Web3ApiUrl, ApiKey);
                IWeb3Api web3Api = Moralis.Web3Api.MoralisWeb3ApiClient.Web3Api;

                ChainList chain = (ChainList)chainid;

                NftOwnerCollection response = await web3Api.Account.GetNFTs(address, chain, cursor, null, limit);

                return new OkObjectResult(response);
            }
            catch (ApiException aexp)
            {
                log.LogDebug($"aexp.Message: {aexp.ToString()}");
                return new BadRequestObjectResult(aexp.Message);
            }
            catch (Exception exp)
            {
                log.LogDebug($"exp.Message: {exp.ToString()}");
                return new BadRequestObjectResult(exp.Message);
            }
        }
        
        [FunctionName("GetTokenBalances")]
        public static async Task<dynamic> GetTokenBalances(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req, ILogger log)
        {
            // Create the function execution's context through the request
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            // Deserialize PlayFab context
            dynamic context = JsonConvert.DeserializeObject(requestBody);
            var args = context.FunctionArgument;

            // Get the address from the request
            string address = null;
            if (args != null && args["address"] != null)
            {
                address = args["address"].ToString().ToLower();
            }

            // Get the chainid from the request
            int chainid = 1;
            if (args != null && args["chainid"] != null)
            {
                chainid = args["chainid"];
                int.TryParse(args["chainid"].ToString(), out chainid);
            }

            try
            {
                // Connect with the Moralis Authentication Server
                Moralis.Web3Api.MoralisWeb3ApiClient.Initialize(Web3ApiUrl, ApiKey);
                IWeb3Api web3Api = Moralis.Web3Api.MoralisWeb3ApiClient.Web3Api;

                ChainList chain = (ChainList)chainid;

                List<Erc20TokenBalance> response = await web3Api.Account.GetTokenBalances(address, chain);

                return new OkObjectResult(response);
            }
            catch (ApiException aexp)
            {
                log.LogDebug($"aexp.Message: {aexp.ToString()}");
                return new BadRequestObjectResult(aexp.Message);
            }
            catch (Exception exp)
            {
                log.LogDebug($"exp.Message: {exp.ToString()}");
                return new BadRequestObjectResult(exp.Message);
            }
        }
    }
}
```



# Deploy Azure Functions with Visual Studio Code

 This section walks through deploying Azure Functions.

1. Sign in to Azure:

![](/img/content/d39b1b6-11.png "11.png")

2. Right-click on **MoralisAzureFunctions** or **MoralisAzureFunctionsJS** (depending on the environment you're using) and select **Deploy to Function App**:

![](/img/content/7316191-12.png "12.png")

3. Select **Deploy**:

![](/img/content/e0a7b20-13.png "13.png")

4. Go to your PlayFab title ID dashboard and go to **Automation**:

![](/img/content/6921c1c-14.png "14.png")

5. Select **Register function** and set the **Trigger** type to **HTTP**. Enter **ChallengeRequest** as the function name and copy the function URL from Visual Studio Code. Right-click on **ChallengeRequest** under **Functions** and select **Copy Function Url**, and paste it into the **Function** URL field. Select **Register function**.

![](/img/content/2dbbc01-15.png "15.png")

6. Create another **Register function** and set the **Trigger** type to **HTTP**. Enter **ChallengeVerify** as the function name and copy the function URL from Visual Studio Code. Right-click on **ChallengeVerify** under **Functions** and select **Copy Function Url**, and paste it into the **Function** URL field. Select **Register function**.

![](/img/content/34e079c-16.png "16.png")

7. If you want, repeat step #6 above for all the other functions we added.

# Set up Unity and Connect Microsoft Azure PlayFab

This section describes how to set up a Unity application and connect to PlayFab and enable secure Web3 authentication using the Moralis SDK.

> 📘 
> 
> Currently this sample project only showcase how to call the **Authentication API functions**. To see how to call other functions implemented in this guide (like NFT or EVM related), check this more advanced [project](/docs/web3-multiplayer-playground).

1. Download as ZIP and extract the [Moralis PlayFab Unity demo project](https://github.com/MoralisWeb3/demo-unity-moralis-auth-via-playfab):
2. Open the project in Unity (recommend version: 2021.3.10f1).
3. Open PlayFab **Editor Extensions** (If the PlayFab menu doesn’t show this, restart Unity).

![](/img/content/6c4178c-unity_1.png "unity_1.png")

4. Login with your email and password:

![](/img/content/f16f1c3-unity_2.png "unity_2.png")

5. Go to **Settings** > **Project**:

![](/img/content/aaa98bc-unity_3.png "unity_3.png")

6. Select your **Studio** and **Title ID**.
7. Go to **Scenes** and open **SampleScene**:

![](/img/content/c489b31-unity_4.png "unity_4.png")

## Programmatically Interact with Moralis via PlayFab

If you choose the **Starter** project, this section will walk you through the code necessary to integrate with Moralis via PlayFab. 

If you choose the **Complete** project, feel free to skip this section and [**play the game!**](#play-the-game).

Programmatically integrate with Moralis via PlayFab.

![](/img/content/ea13d3e-unity_4a.png "unity_4a.png")

1. In the **Hierarchy** view, right-click and select **Create Empty**. Name this object **MoralisWeb3AuthService**.
2. In the **Assets/Scripts** folder view, create a new script called `MoralisWeb3AuthService.cs`:

![](/img/content/ce16bcf-unity_4b.png "unity_4b.png")

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

### Steps to Wire Up `MoralisWeb3AuthService`

1. In the Unity UI, in the **Hierarchy** view, select the `MoralisWeb3AuthService` object and add entries under both **On Success** and **On Failed**. Drag **AuthenticationKit** into each of these, selecting **AuthenticationKit/Connect** for **On Success** and **AuthenticationKit/Disconnect** for **On Failed**:

![](/img/content/429cebe-unity_4c.png "unity_4c.png")

2. In the Unity UI, in the **Hierarchy** view, select the **AuthenticationKit** object. Add an entry to **On State Changed (AuthenticationStateChanged)**. Drag the **MoralisWeb3AuthService** object to this entry and select **MoralisWeb3AuthService/StateObservable_OnValueChanged**:

![](/img/content/d657299-unity_4d.png "unity_4d.png")

## Play the Game!

1. Run the **SampleScene** and select **PLAY AS GUEST**:

![](/img/content/9f0d37e-unity_5.png "unity_5.png")

2. Select **CONNECT WALLET**:

![](/img/content/5b6bb54-unity_6.png "unity_6.png")

3. Select **CONNECT** and scan the QR code with your wallet and follow all the steps.
4. If you return to the **LOGGED IN** screen, the wallet information is added to the player's profile under **Players** > **Player Data**:

![](/img/content/5433ab6-unity_7.png "unity_7.png")

5. Celebrate your **epic setup** and start thinking of all the Web3 games you can now build!