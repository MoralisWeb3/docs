---
title: "Authentication"
slug: "authentication"
hidden: false
createdAt: "2022-11-01T14:19:37.181Z"
updatedAt: "2022-11-01T14:19:37.182Z"
---
> 📘 
> 
> For a complete guide on how to handle authentication and examples, see the following:
> 
> - <https://docs.moralis.io/docs/web3-authentication>
> - <https://docs.moralis.io/reference/requestchallengeevm>
> 
> Make sure to read these guides to understand the complete flow of how to integrate Web3 authentication.

To authenticate via the SDK, you need to implement two methods:

- `Moralis.Auth.requestMessage`
- `Moralis.Auth.verify`

# `requestMessage`

This method returns a message that needs to be signed by the user:

```javascript
import Moralis from 'moralis';

// Values set in the backend
const DOMAIN = 'defi.finance';
const STATEMENT = 'Please sign this message to confirm your identity.';
const URI = 'https://defi.finance';
const EXPIRATION_TIME = '2023-01-01T00:00:00.000Z';
const TIMEOUT = 15;

// Values provided by the user
const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
const chain = "0x1"
const network = "evm"

const result = await Moralis.Auth.requestMessage({
  address,
  chain,
  network,
  domain: DOMAIN,
  statement: STATEMENT,
  uri: URI,
  expirationTime: EXPIRATION_TIME,
  timeout: TIMEOUT,
});
```



# `verify`

To verify if a created message (by `requestMessage`) is signed by the user, use the `verify` method:

```javascript
import Moralis from 'moralis'

// Values provided by the user
const message = ""
const signature = ""
const network = "evm"

const verifiedData = Moralis.Auth.verify({
  message: message,
  signature: signature,
  network: network,
})
```