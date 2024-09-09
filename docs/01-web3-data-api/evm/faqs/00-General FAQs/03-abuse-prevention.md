---
title: "Abuse Prevention"
slug: "/web3-data-api/evm/reference/abuse-prevention"
sidebar_position: 2
---

It's important you study rate limits for your plan and the different services that you use.  
Please email [hello@moralis.io](mailto:hello@moralis.io) if you have any questions!

## Cloudflare errors

If you start getting Cloudflare errors, such as Cloudflare error 1020, you are likely being flagged by our abuse prevention system, and Cloudflare blocks your access on our behalf.

You may also see other error messages.

Below are a few scenarios where you may get temporarily banned.

1. If you are sending requests although your key is already rate-limited, we may temporarily ban you. For example, let's say your plan allows you to make 30 requests per second. If you try to make 200 requests in the same second - you will most likely get temporarily banned.
2. Use one key per project. For example, if you create 100 free accounts and send requests using the keys from these accounts - all accounts tied to the same project will be banned.
3. If you think you are temporarily banned by mistake, please email `hello@moralis.io`, and we will help you to sort out the issue.

## Avoid Getting Banned

1. Don't use more than one Moralis account.
2. Implement rate-limiting logic in your app so you don't try making more requests than your plan allows.
3. Email us at [hello@moralis.io](mailto:hello@moralis.io) if you have any questions.

## Am I Allowed to Create Multiple Accounts?

As we offer generous free plans, we don't allow the creation of multiple accounts.

Only one free account is allowed per user. You will need to upgrade to our Pro plan if you need more limits.

If you build your dapp based on resources spread over several free accounts, you will be banned, and your service will face unexpected downtime.

Please contact us at hello@moralis.io if you have any questions 🙌
