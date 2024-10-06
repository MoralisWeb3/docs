---
title: "Quickstart with Python"
slug: "../quickstart-python"
description: "Welcome to the Python Quickstart! Here we will walk through the process of getting your API keys, installing the SDK, and making your first API call with Python. "
---

Welcome to the Python Quickstart! Here we will walk through the process of getting your API keys, installing the SDK, and making your first API call with Python.

## Prerequisites

1. [Sign up for Moralis](https://admin.moralis.com/register)
2. Install and set up your editor of choice (we will use [Visual Studio Code](https://code.visualstudio.com/) in this tutorial)
3. Install the latest version of [Python](https://www.python.org/downloads/)
4. [Get Your Moralis API Key](/web3-data-api/aptos/get-your-api-key)

## Using the SDK

### Installing the SDK

Run the following command in your project directory to install the SDK via npm:

```shell showLineNumbers
pip install moralis
```

### Get Account Transactions

Now, we can get data by using the Moralis SDK. Let's use the `getAccountTransactions` function to get Account Transactions. Replace `YOUR_API_KEY` with your own [API Key](https://admin.moralis.com/web3apis) and run `python index.py`.

```python showLineNumbers title="index.py"
from moralis import aptos_api

api_key = "YOUR_API_KEY"

params = {
    "network": "mainnet",
    "address": "0x1d8727df513fa2a8785d0834e40b34223daff1affc079574082baadb74b66ee4"
}

result = aptos_api.transactions.get_account_transactions(
    api_key=api_key,
    params=params,
)

print(result)
```
