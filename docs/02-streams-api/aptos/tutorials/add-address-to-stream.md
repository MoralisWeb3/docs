# Add Address(es) to an APTOS Stream

APTOS Streams API allows you to track transactions and events for specific addresses on the Ethereum blockchain. In this tutorial, we will show you how to add an address to an existing APTOS stream.

## Prerequisites

You must have an existing APTOS stream. If you do not have one, you can create one by making a PUT request to the /streams/aptos endpoint.

You must know the `streamId` of the stream to which you want to add an address.

## Attach an Address

To add an address to a stream, you will need to make a `POST` request to the `/streams/aptos/{streamId}/address` endpoint, where `{streamId}` is the ID of the stream to which you want to add an address. The request body should contain a JSON object with the following structure:

```json
{
    "address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
}
```

You can also add multiple addresses at once by passing an array of addresses instead of a single address:

```json
{
    "address": ["0x742d35Cc6634C0532925a3b844Bc454e4438f44e","0x742d35Cc6634C0532925a3b844Bc454e4438f44f"]
}
```

Note that the address field can either be a single string or an array of strings

If the request is successful, the API will return the streamId and the address(es) that was/were added to the stream.

```json
{
    "streamId": "5f7b1b7b-7b1b-7b1b-7b1b-7b1b7b1b7b1b",
    "address": ["0x742d35Cc6634C0532925a3b844Bc454e4438f44e"]
}
```

## Via Admin Panel

1. You must have an existing APTOS stream. If you do not have one, you can create one by following this tutorial [here](/streams-api/aptos/tutorials/create-stream#via-admin-panel)

2. Enter a new aptos address in the input. For eg: `0x867ed1f6bf916171b1de3ee92849b8978b7d1b9e0a8cc982a3d19d535dfd9c0c` and click on `Add new address` button.
![](/img/content/streams-aptos-add-address-1.webp)
![](/img/content/streams-aptos-add-address-2.webp)

