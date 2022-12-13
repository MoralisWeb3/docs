---
title: "Quickstart .NET (C#)"
slug: "../quickstart-dot-net-csharp"
description: "This tutorial will teach you how to set up a server-side dapp to query blockchain data, such as NFTs, tokens, balances, transfers, transactions, etc., from any .NET application. \n\nThis tutorial dapp works on almost any blockchain, including Ethereum, Polygon, BNB Chain, Avalanche, Cronos, and many more!"
---
## The Steps We Will Take

1. Create a C# dapp
2. Import and set up the latest Moralis .NET SDK
3. Integrate your application with Moralis services
4. Read any blockchain data from any blockchain

## Prerequisites

1. Create a [Moralis account](https://www.moralis.io)
2. Install and set up [Visual Studio](https://visualstudio.microsoft.com/vs/community/)

## Create a C# Dapp

For this part of the tutorial, we will create a dapp that displays the native balance, ERC-20 tokens, and NFTs for any address and EVM chain! The complete code for this project can be found [here](https://github.com/MoralisWeb3/dot-net-sample-console-dapp).

1. Open Visual Studio and create a new project
2. Select C# Console as the template:

![Choose Console Template](/img/content/7f2c5e2-console_1.gif)

3. Configure your new project by entering the name of the project and location. For this demo, we use "MoralisDemo" as the project name.

![Configure Project](/img/content/56a86ff-console_2.gif)

4. Enter additional information and click on the "create" button. For this demo, we select ".NET 6.0" as the framework:

![Select Framework](/img/content/99113de-console_3.gif)

5. Visual Studio will generate a basic C# Console project. 

![New Project](/img/content/1cbb56b-console_4.gif)

## Import and Set Up the Latest Moralis .NET SDK

1. Open "NuGet Package Manager" by selecting _Tools _ > _NuGet Package Manager _ > _Manage NuGet Packages for Solution..._:

![Open NuGet](/img/content/87124fa-nuget1.gif)

2. Checkmark _Include prerelease_ and browse for Moralis.
3. Select the latest  **Moralis** package and click on the _Install_ button:

![Install the Moralis Package](/img/content/e46e5cd-nuget2.gif)

## Integrate Your Dapp with Moralis Services

1. In the _Solution Explorer_ window, open the `Program.cs` file.
2. Select the contents of this file and delete them.
3. Add the following `using` statements:

```csharp
using Moralis;
using Moralis.Web3Api.Models;
```

4. Add `namespace`, `class`, and basic public static `Main`.
5. Within the `Main` function, set `MoralisClient.ConnectionData` with the values specific to your dapp. You can find your Moralis dapp information by signing into your [Moralis account](https://www.moralis.io). 

```csharp
namespace ConsoleDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Setup Moralis
            MoralisClient.ConnectionData = new Moralis.Models.ServerConnectionData()
            {
                ApiKey = "YOUR MORALIS WEB3API KEY"
            };
        }
    }
}
```



5. Under the `Main` function, create a static `async` function called `DisplayCryptoData`. This function should accept two parameters `address` (string) and `chainId` (ChainList). The return type should be `Task`.

```csharp
internal static async Task DisplayCryptoData(string address, ChainList chainId)
{
    
}
```



6. The application will accept two arguments, the address and the chain ID. It is a good idea to make sure these are passed in and are valid before using them. At the top of the `Main` function, add code that validates the arguments. 
7. Now, add code to execute the `DisplayCryptoData` function. Since this is an `async` function, it needs to be called within a `Task.Run` statement. Your `Main` function should now be similar to:

```csharp
        static void Main(string[] args)
        {
            if (args.Length < 2)
            {
                Console.Write("Usage: ConsoleDemo.exe ADDRESS CLIENT_ID");
                return;
            }

            string address = args[0];
            int chainId = 1;

            if (!int.TryParse(args[1], out chainId))
            {
                Console.Error.WriteLine("CHAIN_ID must be a number.");
            }

            // Setup Moralis
            MoralisClient.ConnectionData = new Moralis.Models.ServerConnectionData()
            {
                ApiKey = "YOUR MORALIS WEB3API KEY"
            };
            
            Task.Run(async () =>
            {
                await DisplayCryptoData(address, (ChainList)chainId);
            }).Wait();
        }
```



## Read Any Blockchain Data From Any Blockchain

8. Within the `DisplayCryptoData` function, start by displaying the address specified:

```csharp
Console.WriteLine($"For address: {address}...\n");
```



### Fetch and Display Native Balance

9. Retrieve the native balance by calling the **Moralis SDK**. Use the `GetNativeBalance` operation of the _Web3Api Account_ endpoint to retrieve this information.

```csharp
// Load native balance for address
NativeBalance bal = await MoralisClient.Web3Api.Account.GetNativeBalance(address, chainId);

```



10. Format and display the native balance:

```csharp
double nativeBal = 0;

double.TryParse(bal.Balance, out nativeBal);

Console.WriteLine($"Your native balance is {nativeBal / Math.Pow(10,18)}");
```



### Fetch and Display ERC-20 Token Balances

11. Next, use the Moralis SDK to retrieve the ERC-20 token balances owned by the specified address. Use the `GetTokenBalances` operation of the _Web3Api Account_ endpoint to retrieve this list:

```csharp
// Load ERC-20 Token List for address
List<Erc20TokenBalance> erc20Balnaces = await MoralisClient.Web3Api.Account.GetTokenBalances(address, chainId);
```



12. If ERC-20 tokens were returned, format and display these. Otherwise, print "NONE".

```csharp
Console.WriteLine("\n\nYour ERC 20 Tokens:");

if (erc20Balnaces != null && erc20Balnaces.Count > 0)
{
    // Print out each token with symbol and balance.
    foreach (Erc20TokenBalance tb in erc20Balnaces)
    {
        Console.WriteLine($"\t{tb.Symbol} - {tb.Name}: {tb.NativeTokenBalance}"); 
    }
}
else
{
    Console.WriteLine("\tNone");
}
```



### Fetch and Display NFTs with Metadata

13. Finally, use the Moralis SDK to retrieve the NFT tokens owned by the specified address. For this demo, we will limit it to the first ten. Use the `GetNFTs` operation of the _Web3Api Account_ endpoint to retrieve this list:

```csharp
// Load first 10 NFTs for the address
NftOwnerCollection nfts = await MoralisClient.Web3Api.Account.GetNFTs(address, (ChainList)chainId, "", null, 10);

```



14. If a set of NFTs was returned, display the name, balance, and metadata for each. Your entire `DisplayCryptoData` \* function should look similar to:

```csharp
internal static async Task DisplayCryptoData(string address, ChainList chainId)
{
    try
    {
        Console.WriteLine($"For address: {address}...\n");

        // Load native balance for address
        NativeBalance bal = await MoralisClient.Web3Api.Account.GetNativeBalance(address, chainId);

        double nativeBal = 0;

        double.TryParse(bal.Balance, out nativeBal);

        Console.WriteLine($"Your native balance is {nativeBal / Math.Pow(10,18)}");

        // Load ERC-20 Token List for address
        List<Erc20TokenBalance> erc20Balnaces = await MoralisClient.Web3Api.Account.GetTokenBalances(address, chainId);

        Console.WriteLine("\n\nYour ERC 20 Tokens:");

        if (erc20Balnaces != null && erc20Balnaces.Count > 0)
        {
            // Print out each token with symbol and balance.
            foreach (Erc20TokenBalance tb in erc20Balnaces)
            {
               Console.WriteLine($"\t{tb.Symbol} - {tb.Name}: {tb.NativeTokenBalance}"); 
            }
        }
        else
        {
            Console.WriteLine("\tNone");
        }

        // Load first 10 NFTs for the address
        NftOwnerCollection nfts = await MoralisClient.Web3Api.Account.GetNFTs(address, (ChainList)chainId, "", null, 10);

        Console.WriteLine("\n\nYour NFTs:");

        if (nfts != null && nfts.Result.Count > 0)
        {
            // Print out each token with symbol and balance.
            foreach (NftOwner nft in nfts.Result)
            {
                Console.WriteLine($"\t{nft.Name}: {nft.Amount}\n\tMetaData: {nft.Metadata}\n\n");
            }
        }
        else
        {
            Console.WriteLine("\tNone");
        }

    }
    catch (Exception ex)
    {
        Console.Error.WriteLine(ex);
    }
}
```



If you run it as is in Visual Studio, your output should be similar to:  
`Usage: ConsoleDemo.exe ADDRESS CLIENT_ID`.

In _Solution Explorer_, right-click on _Properties \_then select \_Debug_ > _General_ and click on the _Open debug launch profile_ link:

![Open Debug Launch Profile](/img/content/fc042ce-console_6.gif)

In _Command Line Arguments_, enter your wallet address and chain ID.

![Set Input Args](/img/content/ad2af03-console_7.gif)

Now, when you run your dapp, your data is displayed!