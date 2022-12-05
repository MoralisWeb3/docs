---
title: "Quickstart"
slug: "quickstart"
excerpt: "Learn how to get an API Key and make your first request with the Moralis API."
hidden: false
createdAt: "2022-10-24T09:17:17.781Z"
updatedAt: "2022-11-23T23:01:41.601Z"
---
## Step 1: Create Your Free Moralis Account

Go to [Moralis Admin](https://admin.moralis.io/register) to create your Moralis account and get started.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d8b5b3d-Screen_Shot_2022-10-24_at_14.45.21.png",
        null,
        "Moralis Admin (Sign Up)"
      ],
      "caption": "Moralis Admin (Sign Up)"
    }
  ]
}
[/block]

## Step 2: Get API Key

1. Go to <https://admin.moralis.io/web3apis>.
2. Click on the copy icon to copy your API Key:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1de1f4d-Screen_Shot_2022-10-24_at_14.49.31.png",
        null,
        "Web3 APIs Page"
      ],
      "caption": "Web3 APIs Page"
    }
  ]
}
[/block]

> 📘 Keep Your API Key Safe
> 
> Your API key is linked to your private account. Keep your keys safe by following these best practices:
> 
> - Provide access only to those who need it
> - Keep the key out of any version control system you might be using
> - Use a password manager or secret management service to control access to your key
> - Don't embed your secret API key in web applications or in other places where the key could be easily obtained

## Step 3: Make Your First Request

To make your first request, we are going to use a simple curl command to get the [CryptoPunks NFT](https://larvalabs.com/cryptopunks) metadata. 

1. Pick your preferred command line tool and copy the command.
2. Replace `YOUR_API_KEY` with the API Key you retrieved in step 2.
3. Execute the command.

```shell Windows CMD
curl -X GET ^
     "https://deep-index.moralis.io/api/v2/nft/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/metadata" ^
     -H "X-API-Key: YOUR_API_KEY" ^
     -H "Content-Type: application/json"
```
```powershell Windows PowerShell
$headers=@{}
$headers.Add("accept", "application/json")
$headers.Add("X-API-Key", "YOUR_API_KEY")
Invoke-RestMethod -Uri 'https://deep-index.moralis.io/api/v2/nft/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/metadata' -Method GET -Headers $headers

```
```shell Mac Terminal
curl --request GET \
     --url https://deep-index.moralis.io/api/v2/nft/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/metadata \
     --header 'X-API-Key: YOUR_API_KEY' \
     --header 'accept: application/json'
```
```shell Linux Shell
curl --request GET \
     --url https://deep-index.moralis.io/api/v2/nft/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/metadata \
     --header 'X-API-Key: YOUR_API_KEY' \
     --header 'accept: application/json'
```



Result:

```json
{
  "token_address": "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
  "name": "CRYPTOPUNKS",
  "symbol": "Ͼ",
  "contract_type": null,
  "synced_at": "2022-01-20T00:00:00.000Z"
}
```



## Next Steps (Tutorials, Use Cases)

Now that you've made your first request with the Moralis API, you can start learning how to easily integrate Moralis APIs with your dapp using the [Moralis SDK](https://docs.moralis.io/docs/moralis-sdk), along with some more advanced features:

- [Installation](https://docs.moralis.io/docs/installation)
- [Advanced Setup](https://docs.moralis.io/docs/advanced-setup)
- [Moralis Data Types](https://docs.moralis.io/docs/moralis-data-types)
- [Query from EVM or Solana](https://docs.moralis.io/docs/query-from-evm-or-solana)
- [Authentication](https://docs.moralis.io/docs/authentication)
- [Cross-Chain Requests](https://docs.moralis.io/docs/cross-chain-requests)

## API Reference

- [Get collection metadata](https://docs.moralis.io/reference/getnftcontractmetadata)