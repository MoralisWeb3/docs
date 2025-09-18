---
title: "SDK Error Handling"
slug: "../../sdk-error-handling"
---

# Error Handling

Our SDK provides a comprehensive set of error codes to help you identify issues and rectify them. Errors are broadly categorized under four modules - Core, API, Auth, and Stream. Each of these modules has its unique error codes.

## Core Error Codes

| Code | Error | Description |
| --- | --- | --- |
| `C0001` | GENERIC_CORE_ERROR | An unspecified error occurred |
| `C0002` | DUPLICATE_MODULE | A module wants to register with a name that already is registered |
| `C0003` | MODULE_NOT_FOUND | The specified module could not be found or not registered |
| `C0004` | VALIDATION_ERROR | Data validation failed |
| `C0005` | INVALID_ARGUMENT | An invalid argument was provided to a function or method |
| `C0006` | REQUEST_ERROR | An error occurred while making a request |
| `C0007` | NO_DATA_FOUND | Expected data was not found |
| `C0008` | NOT_INITIALIZED | Attempted to use a component before it was initialized |
| `C0009` | ALREADY_INITIALIZED | Attempted to initialize a module that was already initialized |
| `C0010` | METHOD_FAILED | A method call failed |
| `C0011` | STATE_MACHINE_STARTED | Attempted to start an already started state machine |
| `C0012` | STATE_MACHINE_NOT_STARTED | Attempted to use a state machine that hasn't started |
| `C0013` | CONFIG_KEY_NOT_EXIST | The specified configuration key doesn't exist |
| `C0014` | CONFIG_INVALID_VALUE | An invalid value was provided for a configuration key |
| `C0015` | CONFIG_KEY_ALREADY_EXIST | Attempted to create a configuration key that already exists |
| `C0016` | INVALID_DATA | The provided data is invalid |
| `C0500` | BIG_NUMBER_ERROR | Encountered an error with big number operations |
| `C9000` | NOT_IMPLEMENTED | The called method or feature isn't implemented |

## API Error Codes

| Code | Error | Description |
| --- | --- | --- |
| `A0001` | GENERIC_API_ERROR | An unspecified error occurred while using the API |
| `A0002` | PAGE_LIMIT_EXCEEDED | The page limit for a list operation was exceeded |
| `A0003` | API_KEY_NOT_SET | The API key wasn't set |
| `A0004` | INVALID_PARAMS | Invalid parameters were supplied to an API call |
| `A0404` | NOT_FOUND | The requested resource wasn't found |
| `A9000` | NOT_IMPLEMENTED | The requested API method or feature isn't implemented |

## Auth Error Codes

| Code | Error | Description |
| --- | --- | --- |
| `U0001` | GENERIC_AUTH_ERROR | An unspecified error occurred during authentication |
| `U0002` | INCORRECT_NETWORK | The specified network is incorrect for the authentication request |
| `U0003` | INCORRECT_PARAMETER | The supplied parameters for the authentication request are incorrect |
| `U9000` | NOT_IMPLEMENTED | The requested authentication method or feature isn't implemented |

## Stream Error Codes

| Code | Error | Description |
| --- | --- | --- |
| `S0001` | GENERIC_STREAM_ERROR | An unspecified error occurred with the stream request |
| `S0002` | INCORRECT_NETWORK | The specified network is incorrect for the stream request |
| `S0003` | INCORRECT_PARAMETER | The supplied parameters for the stream request are incorrect |
| `S0004` | INVALID_SIGNATURE | The signature for the stream data is invalid |
| `S9000` | NOT_IMPLEMENTED | The requested stream method or feature isn't implemented |

## Error Handling Strategy

When using our SDK, ensure to implement error handling to handle these error codes. Capture the error and analyze the error code to understand the context and reason for the failure. This way, you can provide more informative feedback to your users or take corrective actions in your application.
