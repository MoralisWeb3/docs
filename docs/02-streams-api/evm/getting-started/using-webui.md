---
title: "Create Streams via Admin Panel"
slug: "../using-webui"
description: "Learn how to create a new stream on the Admin Panel of Moralis.com. Follow the step-by-step instructions to monitor your chosen address and receive data through a webhook URL."
sidebar_position: 1
---

## Getting Started

1. Go to [http://admin.moralis.com/streams](http://admin.moralis.com/streams).

2. Click on `Create a new Stream` button.

![](/img/content/streams-webui-2.png)

3. Create a stream by choosing one of the templates:

- `Custom Event` - Customisable options for events and filters, allowing precise notifications.
- `Wallet Activity` - Track native transactions and smart contract interactions (transfers, approvals).
- `Contract Activity` - Monitor smart contract events (logs). 

![](/img/content/streams-webui-3.png)


## Setting Up the Stream

### 1. Name your stream, and select the types of events you want to track.

![](/img/content/streams-webui-5.png)

### 2. Set up event filtering.
You can fine more details in the [Filters Fundamentals](/streams-api/evm/streams-configuration/filter-streams).

![](/img/content/streams-webui-6.png)

### 3. Tag for your stream and choose if you wish to receive additional data.

![](/img/content/streams-webui-7.png)

### 4. Add the addresses you wish to track.

![](/img/content/streams-webui-8.png)

### 5. Pick what chain should be tracked.

![](/img/content/streams-webui-9.png)

### 6. Test your stream (Optional).

![](/img/content/streams-webui-10.png)

### 7. Add your webhook URL where the `POST` requests will be sent. 
In this example we will use https://webhook.site/

![](/img/content/streams-webui-11.png)

### 8 . SAVE your configuration. 

![](/img/content/streams-webui-12.png)


You will now be able to see your stream details and it's status in the dashboard

![](/img/content/streams-webui-13.png)


Depending on how you set up your server, once the addresses you have added in the configuration start sending/receiving transaction you should be able to see them on your side. Since we are using https://webhook.site/ , we can see the new event being receive.


![](/img/content/streams-webui-14.png)



