---
title: "Token Gating Website (Django)"
slug: "token-gating-website-django"
description: "This tutorial is a continuation of the previous tutorial on how to use Moralis' Auth API in Django. Now, in this tutorial, you will learn how to show content for a restricted page only when the currently authenticated user holds a specific NFT."
---
## Introduction

This tutorial is a continuation of the previous tutorial on how to use Moralis' Auth API in Django. Now, in this tutorial, you will learn how to show content for a restricted page only when the currently authenticated user holds a specific NFT.

This is an example of the final result:

![Protected Page](/img/content/1c0bae3-protected_with_nft_2.png)

## Prerequisites

1. Finish the previous tutorial on how to use the [Moralis Auth API in Django](/authentication-api/how-to-sign-in-with-metamask-python-django).

## Adding NFT Gated Functionality

1. Add a new view in `views.py` named `protected`:

```python views.py
def protected(request):
    eth_address = request.session.get(
        'verified_data', {}).get('address', None)
    nfts = []
    # this is the opensea contract address on polygon
    CONTRACT_ADDRESS = "0x2953399124f0cbb46d2cbacd8a89cf0599974963"
    WEB3_API_URL = 'https://deep-index.moralis.io/api/v2'
    REQUEST_URL = '%s/%s/nft?chain=polygon&token_addresses=%s' % (
        WEB3_API_URL,
        eth_address,
        CONTRACT_ADDRESS
        )
         
    x = requests.get(
        REQUEST_URL,
        headers={'X-API-KEY': API_KEY})
    print(json.loads(x.text))
    nfts = json.loads(x.text)['result']
    # show only 1 nft
    if nfts:
        nfts = json.dumps([nfts[0]], indent=4)
    print(eth_address)
    print(nfts)
    return render(
        request, 'protected.html',
        {'nfts': nfts})
```



In this view, we are going to extract the address from the current user session. Then, we will make a Web3 API request to get the NFTs for the current wallet address for a specific contract address. In this particular case, we decided to go with the Polygon chain.

2. Add a template named `protected.html`:

```html protected.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moralis Django NFT Gated Demo Page</title>
</head>
<body>
    <div>

    {% if user.is_authenticated %}
        <h1>Eth address: {{ user.username }}</h1>
        <h2>Protected content</h2>
        {% if nfts %}
          <h3>Nice! You have our NFT!</h3>
          <pre>
{{ nfts }}
          </pre>
        {% else %}
          <h3>Sorry, you don't have our NFT!</h3>
        {% endif %}
        <br/>
        <a href="{% url 'logout' %}?next={% url 'moralis_auth' %}">Logout</a>
    {% else %}
        <a href="{% url 'moralis_auth' %}"> Login page </a>
    {% endif %}
    </div>

</body>
</html>
```



3. Add this line in `urls.py` for the current Django application:

```python urls.py
path('protected', views.protected, name='protected'),
```



## Final Result

![Page When Wallet Address Holds An NFT From A Specific  Contract Address](/img/content/91158d8-protected_with_nft_2.png)

![Page When Wallet Address Does Not Hold NFT](/img/content/b74feb4-protected_without_nft.png)