---
title: "Response codes"
slug: "api-response"
---

Moralis uses conventional [HTTP response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) to indicate success or failure of an API request.

| Status Code | Message               | Description                                                                                      |
| :---------- | :-------------------- | :----------------------------------------------------------------------------------------------- |
| 200         | OK                    | Everything worked as expected.                                                                   |
| 201         | Created               | Resource have been successfully created.                                                         |
| 400         | Bad Request           | The request was unacceptable, often due to missing a required parameter.                         |
| 424         | Unauthorized          | No valid API key provided.                                                                       |
| 429         | Rate Limited          | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| 500         | Internal Server Error | Something went wrong on Moralis' end. (These are rare.)                                          |
