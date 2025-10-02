---
title: "Breaking Changes"
sidebar_label: "Breaking Changes"
slug: "/web3-data-api/evm/breaking-changes-main"
sidebar_class_name: "sidebar-breaking-changes"
sidebar_position: 0
---

# Breaking changes to API and Streams

When integrating with Moralis APIs or Streams, you'll need to be aware of the types of changes that we might make when developing new endpoints or iterating on existing ones. Learn about what we consider a breaking-change and non-breaking change below.

## Breaking Changes

Breaking changes are typically any changes that might require action from our customers (i.e., code changes are required). For all breaking changes, we aim to provide you with at least 60 days' notice prior to making the change. In certain cases related to security, privacy, or urgent issues related to service resiliency, we may reduce the 60-day timeframe.

**Please note**: This notice period is applicable to endpoints that are released to general availability. However, for beta, experimental, or preview endpoints that are still in the early stages, we will continue to make frequent updates as we refine them. Such endpoints will be marked as beta or experimental on our API reference page.

### All breaking changes will be communicated across the following channels:


  - <a href="/changelog">Changelog</a>
  - <a href="https://forum.moralis.io/">Forum</a>

- <a href="https://x.com/moralisdevs">Twitter</a>
- Intercom
- Discord
- Product Emails
- Slack Channels (Enterprise Customers only)

### Below are examples of what we consider breaking changes:

- Removing support for a blockchain
- Removing an endpoint
- Removing a field from the response (a "field" in this case is a JSON key/value pair)
- Removing a query parameter
- Adding a new required field, header, or parameter in the request
- Renaming a field
- Changing the data type of a field
- Changing error response codes
- Changing authorization types
- Making validation more stringent
- Significantly increasing the size of a response (10x)

## Non-breaking changes (backwards-compatible)

We consider the following changes to be non-breaking and backwards-compatible:

- Adding new API resources
- Adding new optional request parameters to existing API methods
- Changing the default value of optional query parameters
- Adding new properties to existing API responses
- Changing the order of properties in existing API responses
- Changing the CU cost of an endpoint
