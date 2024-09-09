---
title: "EVM Response codes"
slug: "/web3-data-api/evm/reference/api-response"
sidebar_label: "Response Codes"
sidebar_position: 3
---

Moralis uses conventional [HTTP response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) to indicate success or failure of an API request.

| Status Code | Message               | Description                                                  |
| :---------- | :-------------------- | :----------------------------------------------------------- |
| 200         | OK                    | Everything worked as expected.                               |
| 201         | Created               | Resource has been successfully created.                      |
| 400         | Bad Request           | Bad request, often due to missing or malformed parameter(s). |
| 401         | Unauthorized          | Missing or invalid API key.                                  |
| 429         | Rate Limited          | Too many requests. Consider upgrading your plan.             |
| 500         | Internal Server Error | Something went wrong on Moralis' end.                        |
