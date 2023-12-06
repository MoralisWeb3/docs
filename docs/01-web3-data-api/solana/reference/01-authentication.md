---
title: "Solana API – Authentication"
sidebar_label: "Authentication"
sidebar_position: 5
---

# Authentication

The Moralis API uses API keys to authenticate requests. You can view your API key in the Moralis [Admin panel](https://admin.moralis.io/).

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Authentication to the API is performed via API Keys. Provide your API key as an `X-API-Key` header:

```bash
curl --request GET \
     --url 'https://deep-index.moralis.io/api/v2.2/block/15863321?chain=eth&include=internal_transactions' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```
