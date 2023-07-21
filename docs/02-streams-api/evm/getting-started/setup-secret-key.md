---
title: "Setting up streams secret key"
slug: "../using-webui"
description: "Learn how to setup streams secret key which is essential for webhook signature verification."
sidebar_position: 1
---

## Introduction

Welcome to the guide on setting up the Streams secret key for webhook signature verification. In this tutorial, we'll explore what the secret key is, how to update it, and its role in verifying the authenticity of incoming webhooks.

## What is a Secret Key in Streams?

The Streams `secret key` is a unique string used to identify the sender of a webhook through webhook signature verification.

## Updating the Secret Key

You can update the `secret key` by visiting the [Moralis settings page](https://admin.moralis.io/streams). 

![Setting page](https://github.com/MoralisWeb3/docs/assets/15834299/51f4186e-afef-40e3-8753-b0d21a09fef1)

We recommend using the `Web3 API key` that you are using in your code as the stream `secret key` when using the Moralis SDK for webhook signature verification.

To learn how to verify the Stream signature, check out the tutorial on how to [verify the signature for the received webhook request](/streams-api/evm/response-body#how-to-verify-the-signature-for-the-received-webhook-request).
