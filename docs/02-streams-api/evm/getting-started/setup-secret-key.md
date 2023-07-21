---
title: "Setting up streams secret key"
slug: "../setup-secret-key"
description: "Learn how to setup streams secret key which is essential for webhook signature verification."
sidebar_position: 0
---

## Introduction

Welcome to the guide on setting up the Streams secret key.

## What is a Secret Key in Streams?

The Streams `secret key` is a unique string used to identify the sender of a webhook through webhook signature verification.

## Updating the Secret Key

You can edit the `secret key` by visiting the [Moralis settings page](https://admin.moralis.io/streams). Once edits use the Save Changes button to update the key.

![Setting page](https://github.com/MoralisWeb3/docs/assets/15834299/51f4186e-afef-40e3-8753-b0d21a09fef1)

If you are using Moralis SDK to verify the signature, we recommend using the `Web3 API key`, that you are using in your code, as the stream `secret key`.

 To learn how to verify the Stream signature, check out the tutorial on how to [verify the signature for the received webhook request](/streams-api/evm/response-body#how-to-verify-the-signature-for-the-received-webhook-request).
