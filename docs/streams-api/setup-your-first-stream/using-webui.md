---
title: "Using the Admin Panel"
slug: "using-webui"
excerpt: "Learn how to create stream to monitor any address"
hidden: false
createdAt: "2022-10-21T12:39:03.112Z"
updatedAt: "2022-10-21T14:39:18.304Z"
---
1. Go to <http://admin.moralis.io/streams>.
2. Click on **New Stream** button and following page will open. You can either select some of our predefined template or create your stream from scratch. Let's create from scratch.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/93a3635-image.png",
        null,
        ""
      ],
      "border": true
    }
  ]
}
[/block]



3. Fill out the form:

   1. Address: \<ADDRESS_YOU_WANT_TO_MONITOR>  
      (\*\*You can monitor multiple address with a single stream)
   2. Webhook URL: <https://YOUR_WEBHOOK_URL>
   3. Add some tag and description to identify your stream
   4. Select the networks and activity you want to monitor your address.

   ![](https://files.readme.io/05d7960-image.png)

   ![](https://files.readme.io/98f3f0c-image.png)

4. Click on **Create Stream**. Now you should start receiving data to your webhook URL as soon some transactions are done on the address.