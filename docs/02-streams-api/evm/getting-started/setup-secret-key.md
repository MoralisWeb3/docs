---
title: "Setting up streams secret key"
slug: "../using-webui"
description: "Learn how to setup streams secret key which is essential for webhook signature verification."
sidebar_position: 1
---

## What is a secert key in streams?

Streams `secret key` is unique string which can be used to identify the sender of webhook, through webhook signature verification.

## How to update the secret key? 

You can update the `secret key` by visiting the [Moralis settings page](https://admin.moralis.io/streams). 

You can use any string as `secret key` but when you are using Moralis SDK to verify stream signature, it is recommended to use the `Web3 API key` that you are using in your code as the stream `sectet key`.

Learn how to verify the Stream signature by visiting this [tutorial doc](/streams-api/evm/response-body#how-to-verify-the-signature-for-the-received-webhook-request).

