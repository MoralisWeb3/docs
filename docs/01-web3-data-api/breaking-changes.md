---
title: "Breaking Changes"
slug: "breaking-changes"
sidebar_position: 7
---

# Breaking changes to API and Streams

When integrating with Moralis APIs or Streams, you'll need to be aware of the types of changes that we might make when developing new endpoints or iterating on existing ones. Learn about what we consider a breaking-change and non-breaking change below.

# Breaking changes

Breaking changes are typically any changes that might require action from our customers (i.e. code changes are required).

For all breaking changes, we aim to provide you with at least 60 days notice prior to making the change. In certains cases related to security, privacy or urgent issues related to service resiliency we may reduce the 60 day timeframe.

**Please note:** This notice period is applicable to endpoints that are made released to general availability. However, for beta, experimental, or preview endpoints that are still in the early stages, we will continue to make frequent updates as we continue to refine them. Such endpoints will be marked as beta or experimental on our API reference page.

All breaking changes will be communicated across the following channels:

* [Changelog](https://docs.moralis.io/changelog)
* [Forum](https://forum.moralis.io/)
* [Twitter](https://twitter.com/MoralisWeb3)
* Intercom
* Discord
* Product Emails
* Slack channels (Enterprise customers only)

Below are examples of what we consider breaking changes:

* Removing support for a blockchain
* Removing an endpoint
* Removing a field from the response (a "field" in this case is a JSON key/value pair)
* Removing a query parameter
* Adding a new required field, header, or parameter in the request
* Renaming a field
* Changing the data type of a field
* Changing error response codes
* Changing authorization types
* Making validation more stringent
* Significantly increase the size of a response (10x)

# Non-breaking changes (backwards-compatible)

We consider the following changes to be non-breaking backwards-compatible:

* Adding new API resources
* Adding new optional request parameters to existing API methods
* Changing the default value of optional query parameters
* Adding new properties to existing API responses
* Changing the order of properties in existing API responses
* Changing the CU cost of an endpoint
