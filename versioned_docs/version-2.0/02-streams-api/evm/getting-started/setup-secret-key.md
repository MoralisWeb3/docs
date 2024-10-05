---
title: "Setting up Streams Secret Key"
slug: "../setup-secret-key"
description: "Learn how to set up the Streams secret key, essential for webhook signature verification."
sidebar_position: 0
---

## Introduction

Welcome to the guide on setting up the Streams secret key.

## What is a Secret Key in Streams?

The Streams `secret key` is a unique string used to identify the sender of a webhook through webhook signature verification.

## Updating the Secret Key

If you visit the [Moralis settings page](https://admin.moralis.com/streams), you can find a default `secret key` under the stream settings option. However, if you are using streams for the first time, make sure to edit this key to match the API key used in your code. Once edited, click on the Save Changes button to update the key.

![Setting page](https://github.com/MoralisWeb3/docs/assets/15834299/51f4186e-afef-40e3-8753-b0d21a09fef1)

You can update the `secret key` to be any string of your choice, but if you are using the Moralis SDK to verify the signature, we recommend using your `Web3 API key` that you are using in your code as the stream `secret key`.

To learn how to verify the Stream signature, check out the tutorial on [verifying the signature for the received webhook request](/streams-api/evm/response-body#how-to-verify-the-signature-for-the-received-webhook-request).
