---
title: "How to Authenticate Users with MetaMask using C# (.NET)"
slug: "../how-to-sign-in-with-metamask-csharp-dot-net"
description: "This guide illustrates how to implement a full-stack .NET application where users can log in with their wallets and establish a web session."
---

This guide illustrates how to implement a full-stack .NET application where users can log in with their wallets and establish a web session.

## Prerequisites

1. Create a [Moralis account](https://www.moralis.io).
2. Install and set up [Visual Studio](https://visualstudio.microsoft.com/vs/community/).
3. Install [Visual Studio Code](https://code.visualstudio.com/).
4. In Visual Studio Code, install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

The complete code for both the client and server application you will build during this tutorial can be found [here](https://github.com/MoralisWeb3/dot-net-client-server-auth-demo).

## Create a REST Service Backend Application

### Create ASP.NET Core Web API

1. Open Visual Studio and create a new project.
2. Select C# ASP.NET Core Web API as the template:

![Select Template](/img/content/c2be548-template.gif)

3. Configure your new project by entering the project name, location, and solution name. For this demo, we use "MoralisDemo" as the project and solution names:

![Configure Project](/img/content/c2da301-config_proj.gif)

4. Enter additional information and click on the **Create** button. For this demo, we selected ".NET 6.0" as the framework:

![Enter Additional Information](/img/content/648bc30-add_info.gif)

5. Visual Studio will generate a basic ASP.NET REST API project with an example controller.

![New Project](/img/content/a2d5480-project.gif)

### Import the Moralis C# SDK Package

1. Open NuGet Package Manager by selecting **Tools** > **NuGet Package Manager** > **Manage NuGet Packages for Solution...**:

![Open NuGet Manager](/img/content/1dace65-nuget1.gif)

2. Checkmark the **Include prerelease** box, and browse for Moralis.
3. Select the latest  **Moralis** package and click on the **Install** button:

![Install Moralis Package](/img/content/zeEYSW1drxV7vtsk5JTfN_nuget2.gif)

### Set Up Moralis

1. In **Solution Explorer**,  open the `Program.cs` file.
2. Locate the statement `app.Run();`.
3. Set `MoralisClient.ConnectionData` with the values specific to your dapp before the `app.Run();` statement. You can find your Moralis dapp information by signing in to your [Moralis account](https://www.moralis.io). For this demo, we are only using Moralis authentication, so we will accept the default values.
4. Your updated code should look similar to this:

```csharp
var AllowedOrigins = "_allowedOrigins";

var builder = WebApplication.CreateBuilder(args);

// Define CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy(AllowedOrigins,
                    policy =>
                    {
                        policy.WithOrigins("http://127.0.0.1:5500")
                                            .AllowAnyHeader()
                                            .AllowAnyMethod();
                    });
});

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(AllowedOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Setup Moralis
Moralis.MoralisClient.ConnectionData = new Moralis.Models.ServerConnectionData()
{
    ApiKey = "MY API KEY"
};

app.Run();
```



### Add Moralis Authentication Endpoint

1. In the controllers folder, right-click and add a new controller (empty) named `AuthenticationController.cs`.
2. At the top of the file, add the following `using` statements:

```csharp
using Moralis;
using Moralis.AuthApi.Models;
using Moralis.Network;
using Moralis.Web3Api.Models;
```



3. Change the base object from `Controller`, to `ControllerBase` and delete the `Index` method that was added by default.
4. Add an `ApiController ` attribute and default `Route` attribute to the class definition. Your `AuthenticationController` class should now look like this:

```csharp
using Microsoft.AspNetCore.Mvc;
using Moralis;
using Moralis.AuthApi.Models;
using Moralis.Network;
using Moralis.Web3Api.Models;

namespace MoralisDemo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        
    }
}
```



5. Create a public, async, `HttpPost` operation named `RequestMessage`. This method will accept three path parameters: `address` (string), `network` (ChainNetworkType), and `chainId` (ChainList) and return `Task\<IActionResult>`.
6. The operation will call the `Challenge` operation of the Moralis Auth API endpoint. The `Challenge` operation will create an [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) compliant message that is meant to be signed by the calling application. This operation is "awaitable" and will return a `Moralis.AuthApi.Models.ChallengeResponseDto` object.
7. Surround the operation call with a try / catch block and catch `ApiException` and `Exception`. If an `ApiException` is caught, return a bad request error. If an `Exception` is caught, return an `InternalServerError`.
8. Your completed method should look like this:

```csharp
[HttpPost, Route("{address}/{network}/{chainId}")]
public async Task<IActionResult> RequestMessage(string address, ChainNetworkType network, ChainList chainId)
{
    try
    { 
        ChallengeRequestDto req = new ChallengeRequestDto()
        {
            // The Ethereum address performing the signing conformant to capitalization encoded
            // checksum specified in EIP-55 where applicable.
            Address = address,
            // The EIP-155 Chain ID to which the session is bound, and the network where Contract
            // Accounts MUST be resolved.
            ChainId = (long)chainId,
            // The RFC 3986 authority that is requesting the signing
            Domain = "defi.finance",
            // The ISO 8601 datetime string that, if present, indicates when the signed
            // authentication message is no longer valid.
            ExpirationTime = DateTime.UtcNow.AddMinutes(60),
            // The ISO 8601 datetime string that, if present, indicates when the signed
            // authentication message will become valid.
            NotBefore = DateTime.UtcNow,
            // A list of information or references to information the user wishes to have resolved
            // as part of authentication by the relying party. They are expressed as RFC 3986 URIs
            // separated by "\n- " where \n is the byte 0x0a.
            Resources = new string[] { "https://www.1155project.com" },
            // Time is seconds at which point this request becomes invalid.
            Timeout = 120,
            // A human-readable ASCII assertion that the user will sign, and it must not
            // contain '\n' (the byte 0x0a).
            Statement = "Please confirm",
            // An RFC 3986 URI referring to the resource that is the subject of the signing
            // (as in the subject of a claim).
            Uri = "https://defi.finance"
        };

        ChallengeResponseDto resp = await MoralisClient.AuthenticationApi.AuthEndpoint.Challenge(req, network);

        return new CreatedAtRouteResult(nameof(RequestMessage), resp);
    }
    catch (ApiException ex)
    {
        return new BadRequestResult();
    }
    catch (Exception ex)
    {
        return new StatusCodeResult((int)System.Net.HttpStatusCode.InternalServerError);
    }
}
```



**Note**: Make sure to change the example values in the `ChallengeRequestDto` object to reflect the needs of your own application.

9. Create a public, async, `HttpPost` operation named `VerifySignature`. This method will accept a path parameter network (`ChainNetworkType`), and body data (`CompleteChallengeRequestDto`) and return `Task\<IActionResult>`.
10. Use the supplied network and request parameters to call the `CompleteChallenge` operation of the Moralis Auth API endpoint. This method is "awaitable" and returns a `CompleteChallengeResponseDto` object.
11. When the response is received, perform any custom database operations and create your custom authentication response, such as JWT. For the purpose of this demo, we will just create and return a dummy token.
12. Surround the operation call with a try / catch block and catch `ApiException` and `Exception`. If an `ApiException` is caught, return a bad request error. If an `Exception` is caught, return an `InternalServerError`.
13. Your completed method should look similar this:

```csharp
[HttpPost, Route("verify/{network}")]
public async Task<IActionResult> VerifySignature(ChainNetworkType network, [FromBody] CompleteChallengeRequestDto req)
{
    try
    { 
        CompleteChallengeResponseDto completeResp = await MoralisClient.AuthenticationApi.AuthEndpoint.CompleteChallenge(req, network);

        // ---------------------------------------------------------------------------------
        // Here is where you would save authentication information to the database.
        // ---------------------------------------------------------------------------------

        // ---------------------------------------------------------------------------------
        // Here is where you would generate a JWT or other authentication response object.
        // ---------------------------------------------------------------------------------

        // Return custom authentication response here.
        string token =  $"{{\"token\":\"{completeResp.Address}:{completeResp.ProfileId}\"}}";

        return new CreatedAtRouteResult(nameof(VerifySignature), token);
    }
    catch (ApiException ex)
    {
        return new BadRequestResult();
    }
    catch (Exception ex)
    {
        return new StatusCodeResult((int)System.Net.HttpStatusCode.InternalServerError);
    }
}
```



14. Your complete `AuthenticationController` file should now look similar this:

```csharp
using Microsoft.AspNetCore.Mvc;
using Moralis;
using Moralis.AuthApi.Models;
using Moralis.Network;
using Moralis.Web3Api.Models;

namespace MoralisDemo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {

        [HttpPost, Route("{address}/{network}/{chainId}")]
        public async Task<IActionResult> RequestMessage(string address, ChainNetworkType network, ChainList chainId)
        {
            try
            { 
                ChallengeRequestDto req = new ChallengeRequestDto()
                {
                    // The Ethereum address performing the signing conformant to capitalization encoded
                    // checksum specified in EIP-55 where applicable.
                    Address = address,
                    // The EIP-155 Chain ID to which the session is bound, and the network where Contract
                    // Accounts MUST be resolved.
                    ChainId = (long)chainId,
                    // The RFC 3986 authority that is requesting the signing
                    Domain = "defi.finance",
                    // The ISO 8601 datetime string that, if present, indicates when the signed
                    // authentication message is no longer valid.
                    ExpirationTime = DateTime.UtcNow.AddMinutes(60),
                    // The ISO 8601 datetime string that, if present, indicates when the signed
                    // authentication message will become valid.
                    NotBefore = DateTime.UtcNow,
                    // A list of information or references to information the user wishes to have resolved
                    // as part of authentication by the relying party. They are expressed as RFC 3986 URIs
                    // separated by "\n- " where \n is the byte 0x0a.
                    Resources = new string[] { "https://www.1155project.com" },
                    // Time is seconds at which point this request becomes invalid.
                    Timeout = 120,
                    // A human-readable ASCII assertion that the user will sign, and it must not
                    // contain '\n' (the byte 0x0a).
                    Statement = "Please confirm",
                    // An RFC 3986 URI referring to the resource that is the subject of the signing
                    // (as in the subject of a claim).
                    Uri = "https://defi.finance"
                };

                ChallengeResponseDto resp = await MoralisClient.AuthenticationApi.AuthEndpoint.Challenge(req, network);

                return new CreatedAtRouteResult(nameof(RequestMessage), resp);
            }
            catch (ApiException ex)
            {
                return new BadRequestResult();
            }
            catch (Exception ex)
            {
                return new StatusCodeResult((int)System.Net.HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost, Route("verify/{network}")]
        public async Task<IActionResult> VerifySignature(ChainNetworkType network, [FromBody] CompleteChallengeRequestDto req)
        {
            try
            { 
                CompleteChallengeResponseDto completeResp = await MoralisClient.AuthenticationApi.AuthEndpoint.CompleteChallenge(req, network);

                // ---------------------------------------------------------------------------------
                // Here is where you would save authentication information to the database.
                // ---------------------------------------------------------------------------------

                // ---------------------------------------------------------------------------------
                // Here is where you would generate a JWT or other authentication response object.
                // ---------------------------------------------------------------------------------

                // Return custom authentication response here.
                string token =  $"{{\"token\":\"{completeResp.Address}:{completeResp.ProfileId}\"}}";

                return new CreatedAtRouteResult(nameof(VerifySignature), token);
            }
            catch (ApiException ex)
            {
                return new BadRequestResult();
            }
            catch (Exception ex)
            {
                return new StatusCodeResult((int)System.Net.HttpStatusCode.InternalServerError);
            }
        }
    }
}
```



## Adding JSON Web Tokens (JWT) to Your Application

This part of the tutorial will teach you how to generate JWTs for your application and include your own data (claims).

JSON Web Token (JWT) is an open standard ([RFC 7519](https://www.rfc-editor.org/rfc/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. 

A complete review of JWTs is beyond this tutorial. More information can be found [here](https://jwt.io/introduction).

1. Use your NuGet Manager to import these packages:  
   a. **Microsoft.Identity.Model.JsonWebTokens**  
   b. **System.IdentityModel.Tokens.Jwt**   
2. Add a new project named `JwtServices` and add a single class, `TokenManager.cs`. The token manager class will provide the routines we need to generate and validate JWTs.
3. Replace any code in `TokenManager.cs` with this:

```c#
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace JwtServices
{
    /// <summary>
    /// Provide routines for generating and processing JWTs.
    /// NOTE: depends on Nuget packages for Microsoft.Identity.Model.JsonWebTokens
    /// and System.IdentityModel.Tokens.Jwt
    /// </summary>
    public class TokenManager
    {
        // The secret can be any random text. This is a base64 text created from a random phrase.
        private static string Secret = "TW9yYWlscyBXZWIzIEFQSXMgYXJlIHRoZSBncmVhdGVzdCB0aGluZyBzaW5jZSBzbGljZWQgYnJlYWQh";

        /// <summary>
        /// Generates a new JWT Token with the specified claims.
        /// Claims are pieces of information such as ID Tokens, user name, etc.
        /// </summary>
        /// <param name="appClaims">IDictionary<string, string></param>
        /// <returns>string</returns>
        public static string GenerateToken(IDictionary<string, string> appClaims)
        {
            byte[] key = Convert.FromBase64String(Secret);
            SymmetricSecurityKey securityKey = new SymmetricSecurityKey(key);
            List<Claim> claims = new List<Claim>();

            // Capture each of the custom claims that will be included
            // in the JWT.
            if (appClaims != null && appClaims.Count > 0)
            {
                foreach (string k in appClaims.Keys)
                {
                    claims.Add(new Claim(k, appClaims[k]));
                }
            }

            // Define the token data.
            SecurityTokenDescriptor descriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = new SigningCredentials(securityKey,
                SecurityAlgorithms.HmacSha256Signature)
            };

            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
            JwtSecurityToken token = handler.CreateJwtSecurityToken(descriptor);

            return handler.WriteToken(token);
        }

        /// <summary>
        /// Reads a JWT token and extracts the Claims into a ClaimsPrincipal.
        /// </summary>
        /// <param name="token">string</param>
        /// <returns>ClaimsPrincipal</returns>
        public static ClaimsPrincipal GetPrincipal(string token)
        {
            try
            {
                // Read the JSON string into a Jwt object.
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                JwtSecurityToken jwtToken = (JwtSecurityToken)tokenHandler.ReadToken(token);

                if (jwtToken == null)
                {
                    return null;
                }

                // Use our know secret
                byte[] key = Convert.FromBase64String(Secret);

                TokenValidationParameters parameters = new TokenValidationParameters()
                {
                    RequireExpirationTime = true,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(key)
                };

                SecurityToken securityToken;

                // Validate the token using the known secret and extract any claims.
                ClaimsPrincipal principal = tokenHandler.ValidateToken(token,
                      parameters, out securityToken);

                return principal;
            }
            catch
            {
                return null;
            }
        }

        /// <summary>
        /// Validates a JWT.
        /// </summary>
        /// <param name="token">string</param>
        /// <returns>bool</returns>
        public static bool ValidateToken(string token)
        {
            bool resp = false;

            ClaimsPrincipal principal = GetPrincipal(token);

            if (principal != null && principal.Identity != null)
            {
                try
                {
                    ClaimsIdentity identity = (ClaimsIdentity)principal.Identity;


                    Claim? firstClaim = identity.FindFirst(ClaimTypes.Name);

                    resp = firstClaim?.Value != null;
                }
                catch (NullReferenceException)
                {
                    // Do nothing resp will be false.
                }
            }

            return resp;
        }
    }
}
```



4. If you want to include your own secret key (for a full application, you really should), the **secret** variable is a random phrase we converted into a **base64** string. 

If you are not sure how to do this, here is some code (note that this does not go into your app; I created a simple console app to run this):

```c#
string phrase = "Morails Web3 APIs are the greatest thing since sliced bread!";

string base64 = Convert.ToBase64String(Encoding.UTF8.GetBytes(phrase));

Console.WriteLine(base64);
```



5. In `AuthenticationController` in the `VerifySignature` method, find and delete this code:

```c#
                // ---------------------------------------------------------------------------------
                // Here is where you would generate a JWT or other authentication response object.
                // ---------------------------------------------------------------------------------

                // Return custom authentication response here.
                string token =  $"{{\"token\":\"{completeResp.Address}:{completeResp.ProfileId}\"}}";
```



6. In place of the above code, we are going to generate a JWT token. For your application, you can add as many claims as you want. For this tutorial, we will create a JWT with three claims. Notice that `TokenManager` is expecting a **Dictionary\<string, string>** object for the claims parameter (again, for your application, you could modify this to accept complex objects instead of just strings). The three parameters we will use are:  
   a. **Address** - The user's wallet address.  
   b. **ProfileId** - The Moralis profile ID for the user.  
   c. **SignatureValidated** - An extra value to provide a quick indicator that the authentication was successful.

Your JWT generating code should look similar to this:

```c#
Dictionary<string, string> claims = new Dictionary<string, string>();
claims.Add("Address", completeResp.Address);
claims.Add("AuthenticationProfileId", completeResp.ProfileId);
claims.Add("SignatureValidated", "true");

string token = TokenManager.GenerateToken(claims);
```



The complete `VerifySignature` method code should now look similar to this:

```c#
[HttpPost, Route("verify/{network}")]
public async Task<IActionResult> VerifySignature(ChainNetworkType network, [FromBody] CompleteChallengeRequestDto req)
{
    try
    { 
        CompleteChallengeResponseDto completeResp = await MoralisClient.AuthenticationApi.AuthEndpoint.CompleteChallenge(req, network);

        // ---------------------------------------------------------------------------------
        // Here is where you would save authentication information to the database.
        // ---------------------------------------------------------------------------------

        Dictionary<string, string> claims = new Dictionary<string, string>();
        claims.Add("Address", completeResp.Address);
        claims.Add("AuthenticationProfileId", completeResp.ProfileId);
        claims.Add("SignatureValidated", "true");

        string token = TokenManager.GenerateToken(claims);

        return new CreatedAtRouteResult(nameof(VerifySignature), token);
    }
    catch (ApiException ex)
    {
        return new BadRequestResult();
    }
    catch (Exception ex)
    {
        return new StatusCodeResult((int)System.Net.HttpStatusCode.InternalServerError);
    }
}
```



## Test with a Client Application

Now that the backend server is ready, we will test it and configure a client application to call the backend server.

1. Click on the green start button to initiate your application in **IIS Express**:

![Start the Application](/img/content/9fc903c-startapp.gif)

2. When the application starts, the swagger test page is displayed. Make note of **domain **and **port **of the expanded **Authentication** endpoint and the **Authentication/{address}/{network}/{chainId}** operation. Click on the **Try it now** button.
3. Enter the address, network, and chain ID values. For this example, we will enter `0x35ba4825204dcE15C7147eA89b31178a00750f81` as the address, `0` for the network (EVM), and `80001` (Polygon Mumbai) as the chain ID. Click on the **Execute** button.

![Test Authentication Endpoint](/img/content/b2f0984-auth_msg.gif)

4. Close the application and stop the process in Visual Studio.
5. Download the test client application below.

[Moralis_Auth_Demo.zip](https://drive.google.com/file/d/1dMzlslt7GHyfqhBnjW_FlPNmUs_8YFOf/view?usp=sharing)

6. Open the test client in Visual Studio Code.
7. Open the `index.js` file. At the top of the file, find the `// Create server urlconst myServerUrl = "[<https://localhost:7284">;](https://localhost:7284";`)\` line and change the port to match that of your own server application.
8. Navigate back to Visual Studio and your server application. Since the client application is run in a browser, you need to create a CORS policy in your server application.
9. In **Solution Explorer**,  open the `Program.cs` file. At the top of the file, add the following: `var AllowedOrigins = "_allowedOrigins";`.
10. After the `var builder = WebApplication.CreateBuilder(args);` statement, add the following code block, replacing the port with that for your client:

```csharp
// Define CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy(AllowedOrigins,
                    policy =>
                    {
                        policy.WithOrigins("http://127.0.0.1:5500")
                                            .AllowAnyHeader()
                                            .AllowAnyMethod();
                    });
});
```

11. Your `Program.cs` file should now be similar to this:

```csharp
var AllowedOrigins = "_allowedOrigins";

var builder = WebApplication.CreateBuilder(args);

// Define CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy(AllowedOrigins,
                    policy =>
                    {
                        policy.WithOrigins("http://127.0.0.1:5500")
                                            .AllowAnyHeader()
                                            .AllowAnyMethod();
                    });
});

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Setup Moralis
Moralis.MoralisClient.ConnectionData = new Moralis.Models.ServerConnectionData();

app.Run();
```



12. Restart your server application.
13. In Visual Studio Code, in the **Explorer** view, right-click on **index.html** and select **Open with Live Server**.

![Client Login](/img/content/f90ec14-client_login.gif)

14. Click on the **Log In** button.

![Sign Message](/img/content/32ab8b2-client_sign.gif)

15. The signature message generated by Moralis via your server application is displayed in your wallet. Click on the **Sign** button.

![](/img/content/f7e1d54-jwt_2.png)

16. Congratulations, the client is integrated with your server application which is integrated with Moralis!

## Bonus!

Curious about the JWT your application generated? You can view your JWT token at [`jwt.io`](https://www.jwt.io).

![A JWT De-Coded](/img/content/0b43888-jwt_1.png)

When you paste your JWT into the debugger, if it is valid, the claims of the JWT are displayed. You can also use this tool to verify the signature of your token.