---
title: "Streams Get native balances"
slug: "streams-include-native-balances"
authors:
  name: Elias
tags: [Streams API]
---

There is a new option added to the Stream options. By setting getNativeBalances you can get the native balances of addresses in your webhook! Read more here!

Business plan is required to use this feature!

```json
{
  "webhookUrl": "https:<your_url>.com",
  "description": "some dedscription",
  "includeNativeTxs": true,
  "tag": "someTag",
  "chainIds": ["0x1"],
  "getNativeBalances": [
    {
      "selectors": ["$fromAddress", "$toAddress"],
      "type": "tx"
    }
  ]
}
```

<!--truncate-->

## Types

- selectors: An array of Selectors
- type: Indicates from where to select one or multiple address fields. Learn more here!

## Result

```js
{
    ...
    nativeBalances: [
    {
        address: "0xd119b250d83893860159f8a7b7a751bc044655a1",
        value: "100000"
    },
    {
      address: "0x6887246668a3b87f54deb3b94ba47a6f63f32985",
      value: "3528061000",
    }
  ],
 ...
}
```

Note that the values are not parsed into decimals. This is an example result inside the webhook
