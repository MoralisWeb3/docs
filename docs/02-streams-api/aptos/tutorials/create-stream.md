# Setting up an Aptos Stream

To set up a stream, you will need to make a `PUT` request to the `/streams/aptos` endpoint with the following options in the request body:

`network` (required): An array containing one or more of the following values: `mainnet`, `testnet`, or `devnet`.

`tag` (required): A string that will be included in the webhook, allowing you to identify the stream.

`webhookUrl` (required): The URL that the webhooks should be sent to.

`allAddresses` (optional): A boolean value indicating whether to listen to all addresses or not. If set to `true`, you must specify at least one event or function to listen to. This feature is only available on paid plans.

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

## Filter Event and Functions

The APTOS streams API allows you to filter the data you receive by specifying events and functions. When you create or update a stream, you can specify a list of events or functions that you are interested in. If you don't specify any events or functions, you will receive all transactions where the attached address is involved.

As mentioned earlier if you listen to `allAddresses` you must specify at least one event or function to listen to.

## Event and Function Format

Events and functions must be in the following format:

`addressOrFramework::module::eventOrFunction`


## Example

This stream will listen to all addresses that are involved in a transaction(s) that emit `0x1::coin::WithdrawEvent` or `0x1::coin::DepositEvent` and send the webhook to the specified webhookUrl.

```json
{
  "allAddresses": true,
  "network": ["mainnet"],
  "tag": "my-stream",
  "webhookUrl": "https://webhook.site/5f7b1b7b-7b1b-7b1b-7b1b-7b1b7b1b7b1b",
  "demo": false,
  "description": "my first aptos stream",
  "events": ["0x1::coin::WithdrawEvent", "0x1::coin::DepositEvent"],
  "functions": [],
  "includeChanges": true,
  "includeEvents": true,
  "includePayload": true
}
```

If you do not want to listen to allAddresses that emit specific events or call specific functions, you can attach addresses to the stream instead. When attaching addresses instead of listening to all addresses, you are not forced to specify events or functions. Read more about attaching addresses to a stream [here](/docs/02-streams-api/aptos/add-address-to-stream).



## Via Admin Panel

1. Go to <http://admin.moralis.io/streams>.

2. Click on **Create a new Stream** button.
![](/img/content/streams-aptos-1.webp)

3. Enter any aptos address in the input and a demo stream will be created. For eg: `0xdefe51e841bbf8c1bcd50639e627b898ea3829677ddb64989c96df8191710689` 
**Note**: You can add multiple addresses to the same stream.
![](/img/content/streams-aptos-2.webp)

4. Whenever address is involved in a transaction you will receive data on the admin panel.
![](/img/content/streams-aptos-3.webp)

5. To get the webhook sent to your backend you have to configure your stream by adding `Webhook URL`, `Description`, and `Tag` and click on `Update stream`. 
![](/img/content/streams-aptos-4.webp)

6. Then click toggle to `Prod`. You will now get webhooks sent to the URL you provided. 
![](/img/content/streams-aptos-5.webp)
