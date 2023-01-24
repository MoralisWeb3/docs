# Moralis Aptos Streams API

The Moralis Aptos Streams API allows you to receive real-time webhooks containing blockchain events from the Aptos blockchain. With this API, you can easily track and monitor on-chain activity such as coin transfers, deposits, and withdrawals, as well as access raw transaction data and events.

# Setting up an Aptos Stream

To set up a stream, you will need to make a `POST` request to the `/streams/aptos` endpoint with the following options in the request body:

`network` (required): An array containing one or more of the following values: `mainnet`, `testnet`, or `devnet`.
`tag` (required): A string that will be included in the webhook, allowing you to identify the stream.
`webhookUrl` (required): The URL that the webhooks should be sent to.
`allAddresses` (optional): A boolean value indicating whether to listen to all addresses or not.
`demo` (optional): A boolean value indicating whether to send the webhook to the specified webhookUrl or to the Moralis admin panel.
`description` (required): A string that describes the stream and its purpose.
`events` (optional): An array of event names to include in the webhook. Strings must be in the [correct format](#event-and-function-format).
`functions` (optional): An array of function names to include in the webhook. Strings must be in the [correct format](#correct-event-and-function-format).
`includeChanges` (optional): A boolean value indicating whether to include state change data in the webhook.
`includeEvents` (optional): A boolean value indicating whether to include event data in the webhook. Helpful to reduce costs.
`includePayload` (optional): A boolean value indicating whether to include payload data in the webhook.

Note: 
- If `allAddresses` is set to `true`, you must specify at least one event or function to listen to. This will override addresses that you may have attached to the stream.
- at least one of `includeChanges`, `includeEvents`, or `includePayload` must be set to true.

## Event and Function Format

Events and functions must be in the following format:

`validAddress::module::eventOrFunction`


## Example

This stream 

```json
{
  "allAddresses": false,
  "network": ["mainnet"],
  "tag": "my-stream",
  "webhookUrl": "https://webhook.site/5f7b1b7b-7b1b-7b1b-7b1b-7b1b7b1b7b1b",
  "demo": false,
  "description": "my first aptos stream",
  "events": [],
  "functions": [],
  "includeChanges": true,
  "includeEvents": true,
  "includePayload": true
}
```