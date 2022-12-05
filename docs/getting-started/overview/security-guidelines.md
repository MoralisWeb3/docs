---
title: "Security Guidelines"
slug: "security-guidelines"
excerpt: "Use the following security guidelines when building your dapp to keep it secure."
hidden: true
createdAt: "2022-11-10T16:00:56.234Z"
updatedAt: "2022-11-29T22:41:18.736Z"
---
## Store Your API Key as Secrets

You should avoid storing your credentials with code as they can get quite vulnerable, and consequences from unfortunate events may be irreversible. Instead, store your credentials as secret keys and environmental variables.

## Avoid API Calls from the Frontend

Avoid making calls from the frontend. Instead, you should store your API keys as **secrets** with respect to your production environment. Although this method still exposes the API key, this method avoids storing credentials with code.

If you plan to run your dapp locally for developing proof-of-concept (PoC), then you can use the above method.

> 📘 Best Practice for Securing Keys
> 
> If you want to secure exposing keys, you should move API calls to the backend using frameworks such as NodeJS so the client cannot see those network calls.

> 📘 SDK Security Guidelines
> 
> Make sure to update your SDK version regularly and check [changelog](https://github.com/MoralisWeb3/changelog) updates to make sure you stay up to date on vulnerability and security updates.

### Example Using NodeJS

```Text node.js
const Moralis = require("moralis").default;

await Moralis.start({
  apiKey: "YOUR_API_KEY",
  // ...and any other configuration
});
```



> 🚧 Streams Security Guidelines
> 
> Always verify the webhook signature to prevent bad actors: <https://docs.moralis.io/docs/webhook-security>.