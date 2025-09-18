---
title: "Building with Based Agent"
slug: "../building-with-based-agent"
description: "Learn how to build and deploy AI agents using the Based Agent template and Moralis."
sidebar_label: "Building with Based Agent"
sidebar_position: 2
---

The Based Agent template is an experimental playground designed to facilitate the creation of autonomous AI agents capable of interacting directly with blockchain networks. Built on top of the [Coinbase Developer Platform (CDP)](https://cdp.coinbase.com/) and OpenAI's [Swarm](https://github.com/openai/swarm), it enables agents to perform on-chain actions autonomously.

## Watch the Full Video Tutorial

To see a complete walkthrough of building an autonomous AI agent for trading and on-chain data analysis using Based Agent and Moralis, check out the video tutorial below:

[![Watch the video](https://img.youtube.com/vi/DfnYSgwiJ1E/0.jpg)](https://youtu.be/DfnYSgwiJ1E)

## Key Features

- **Autonomous Execution**: Agents can think, decide, and act on-chain without human intervention.
- **Token Deployment**: Create and manage ERC-20 tokens.
- **NFT Deployment**: Deploy and mint NFTs.
- **Asset Transfers**: Transfer assets between addresses autonomously.
- **Balance Checks**: Monitor wallet balances.
- **ETH Faucet Requests**: Automatically request testnet ETH when needed.
- **Art Generation via DALL-E**: Generate artwork using AI.

## Getting Started

### Prerequisites

- Python 3.7 or higher.
- A Replit Core Account (optional, but recommended for easy setup). Contact sales@replit.com for a free upgrade (mention Coinbase).

### API Configuration

Set up your environment variables:

- `CDP_API_KEY_NAME`: Your CDP API key name.
- `CDP_PRIVATE_KEY`: Your CDP private key.
- `OPENAI_API_KEY`: Your OpenAI API key.

You can obtain the Coinbase Developer Platform API key [here](https://portal.cdp.coinbase.com/) and the OpenAI key [here](https://platform.openai.com/api-keys) (note: a paid account is required).

### Running the Agent

After configuring your API keys:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/murrlincoln/Based-Agent
   cd Based-Agent
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root directory and add:

   ```bash
   CDP_API_KEY_NAME=your_cdp_key_name
   CDP_PRIVATE_KEY=your_cdp_private_key
   OPENAI_API_KEY=your_openai_key
   MORALIS_API_KEY=your_moralis_key
   ```

4. **Run the Agent**:

   ```bash
   python run.py
   ```

### Configuring Moralis APIs

To enable Based Agent's blockchain data capabilities, head to the agents.py file and add additional functions to the agent. You can configure the agent to fetch trending tokens, check wallet PnL, fetch token details, monitor wallet balances, track swaps and liquidity, and execute buy/sell trades using the relevant Moralis APIs.

### Adding Moralis Functions to agents.py

Add these functions to your `agents.py` file to enable Moralis API capabilities:

```python

def get_token_metadata(token_address: str) -> str:
    """
    Fetch metadata for an ERC-20 token using the Moralis API.
    Automatically determines if the network is mainnet or testnet.

    Args:
        token_address (str): The address of the ERC-20 token

    Returns:
        str: A message with the token metadata or an error message if unsuccessful
    """
    # Read the Moralis API key from the environment
    if not MORALIS_API_KEY:
        return "Error: Moralis API key is missing. Please set the MORALIS_API_KEY environment variable."

    # Determine the network dynamically based on the agent's current network ID
    is_mainnet = agent_wallet.network_id in ["base", "base-mainnet"]
    chain = "base" if is_mainnet else "base sepolia"

    # API endpoint and headers
    url = "https://deep-index.moralis.io/api/v2.2/erc20/metadata"
    headers = {
        "accept": "application/json",
        "X-API-Key": MORALIS_API_KEY
    }
    params = {
        "chain": chain,
        "addresses[0]": token_address
    }

    # Fetch token metadata
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        metadata = response.json()

        if metadata:
            token_data = metadata[0]
            return (
                f"Token Name: {token_data.get('name')}\n"
                f"Symbol: {token_data.get('symbol')}\n"
                f"Decimals: {token_data.get('decimals')}\n"
                f"Total Supply: {token_data.get('total_supply_formatted')}\n"
                f"Contract Address: {token_data.get('address')}\n"
                f"Verified: {token_data.get('verified_contract')}\n"
                f"Logo URL: {token_data.get('logo')}\n"
            )
        else:
            return "No metadata found for the provided token address."

    except requests.exceptions.RequestException as e:
        return f"Error fetching token metadata: {str(e)}"

```

```python
def get_wallet_tokens() -> str:
    """
    Fetch the list of ERC-20 tokens held by the agent's wallet using the Moralis API.

    Returns:
        str: A message with the list of tokens and balances or an error message if unsuccessful
    """
    # Get the agent's wallet address
    address_id = agent_wallet.default_address.address_id

    # Determine the network dynamically based on the agent's current network ID
    is_mainnet = agent_wallet.network_id in ["base", "base-mainnet"]
    chain = "base" if is_mainnet else "base sepolia"

    # API endpoint and headers
    url = f"https://deep-index.moralis.io/api/v2.2/wallets/{address_id}/tokens"
    headers = {
        "accept": "application/json",
        "X-API-Key": MORALIS_API_KEY
    }
    params = {
        "chain": chain
    }

    # Fetch wallet token balances
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        tokens = response.json().get("result", [])

        # Format the output
        if tokens:
            token_list = "\n".join(
                [
                    f"Token: {token['name']} ({token['symbol']})\n"
                    f"Balance: {token['balance_formatted']} {token['symbol']}\n"
                    f"Contract Address: {token['token_address']}\n"
                    f"Verified: {'Yes' if token['verified_contract'] else 'No'}\n"
                    f"Price (USD): {token['usd_price'] or 'N/A'}\n"
                    for token in tokens
                ]
            )
            return f"Tokens held by {address_id}:\n{token_list}"
        else:
            return f"No tokens found for wallet {address_id}."

    except requests.exceptions.RequestException as e:
        return f"Error fetching wallet tokens: {str(e)}"
```

```python
def get_trending_tokens(security_score=80, min_market_cap=100000) -> str:
    """
    Fetch trending tokens with a minimum security score and market cap.

    Args:
        security_score (int): Minimum security score for tokens
        min_market_cap (int): Minimum market cap for tokens

    Returns:
        str: Trending token information or an error message
    """
    url = "https://deep-index.moralis.io/api/v2.2/discovery/tokens/trending"
    headers = {
        "accept": "application/json",
        "X-API-Key": MORALIS_API_KEY
    }
    params = {
        "chain": "base",
        "security_score": security_score,
        "min_market_cap": min_market_cap
    }

    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        tokens = response.json()

        # Format the output
        token_info = "\n".join(
            [
                f"Token Name: {token['token_name']} ({token['token_symbol']})\n"
                f"Price (USD): {token['price_usd']}\n"
                f"Market Cap: {token['market_cap']}\n"
                f"Security Score: {token['security_score']}\n"
                f"Logo: {token['token_logo']}\n"
                for token in tokens
            ]
        )
        return f"Trending Tokens:\n{token_info}"

    except requests.exceptions.RequestException as e:
        return f"Error fetching trending tokens: {str(e)}"
```

```python
def get_wallet_pnl() -> str:
    """
    Retrieve PnL information for the agent's wallet assets.

    Returns:
        str: Wallet PnL data or an error message if unsuccessful
    """
    # Get the agent's wallet address
    address_id = agent_wallet.default_address.address_id

    url = f"https://deep-index.moralis.io/api/v2.2/wallets/{address_id}/profitability"
    headers = {
        "accept": "application/json",
        "X-API-Key": MORALIS_API_KEY
    }
    params = {
        "chain": "base"
    }

    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        pnl_data = response.json().get("result", [])

        # Format the output
        if pnl_data:
            pnl_info = "\n".join(
                [
                    f"Token: {entry['name']} ({entry['symbol']})\n"
                    f"Total Invested: ${entry['total_usd_invested']}\n"
                    f"Realized Profit: ${entry['realized_profit_usd']}\n"
                    f"Avg Buy Price: ${entry['avg_buy_price_usd']}\n"
                    f"Total Tokens Bought: {entry['total_tokens_bought']}\n"
                    f"Logo: {entry['logo']}\n"
                    for entry in pnl_data
                ]
            )
            return f"Wallet PnL for {address_id}:\n{pnl_info}"
        else:
            return "No PnL data found for the wallet."

    except requests.exceptions.RequestException as e:
        return f"Error fetching wallet PnL: {str(e)}"
```

```python
def get_wallet_nfts() -> str:
    """
    Fetch the raw response of NFTs held by the agent's wallet on the Base blockchain.
    Automatically determines if the network is mainnet or testnet.

    Returns:
        str: Raw JSON response of NFTs or an error message if unsuccessful.
    """
    # Get the agent's wallet address
    wallet_address = agent_wallet.default_address.address_id

    # Determine the network dynamically based on the agent's current network ID
    is_mainnet = agent_wallet.network_id in ["base", "base-mainnet"]
    chain = "base" if is_mainnet else "base sepolia"

    # API endpoint and headers
    url = f"https://deep-index.moralis.io/api/v2.2/{wallet_address}/nft"
    headers = {
        "accept": "application/json",
        "X-API-Key": MORALIS_API_KEY
    }
    params = {
        "chain": chain,
        "format": "decimal",
        "media_items": "false"
    }

    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.text  # Return the raw JSON response as text

    except requests.exceptions.RequestException as e:
        return f"Error fetching wallet NFTs: {str(e)}"
```

```python
def get_token_pairs(token_address: str) -> str:
    """
    Fetch trading pairs for a specific ERC-20 token on the Base blockchain.
    Automatically determines if the network is mainnet or testnet.

    Args:
        token_address (str): The address of the ERC-20 token.

    Returns:
        str: Information about trading pairs or an error message if unsuccessful.
    """
    # Determine the network dynamically based on the agent's current network ID
    is_mainnet = agent_wallet.network_id in ["base", "base-mainnet"]
    chain = "base" if is_mainnet else "base sepolia"

    # API endpoint and headers
    url = f"https://deep-index.moralis.io/api/v2.2/erc20/{token_address}/pairs"
    headers = {
        "accept": "application/json",
        "X-API-Key": MORALIS_API_KEY
    }
    params = {
        "chain": chain
    }

    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        pairs = response.json().get("pairs", [])

        # Format the output
        if pairs:
            pairs_info = "\n".join(
                [
                    f"Pair: {pair['pair_label']}\n"
                    f"Price (USD): {pair['usd_price']}\n"
                    f"24hr Price Change (%): {pair['usd_price_24hr_percent_change']}\n"
                    f"Liquidity (USD): {pair['liquidity_usd']}\n"
                    f"Exchange Address: {pair['exchange_address']}\n"
                    f"Base Token: {pair['pair'][0]['token_name']} ({pair['pair'][0]['token_symbol']})\n"
                    f"Quote Token: {pair['pair'][1]['token_name']} ({pair['pair'][1]['token_symbol']})\n"
                    for pair in pairs
                ]
            )
            return f"Trading pairs for token {token_address}:\n{pairs_info}"
        else:
            return f"No trading pairs found for token {token_address}."

    except requests.exceptions.RequestException as e:
        return f"Error fetching token pairs: {str(e)}"
```

```python
def get_token_details(token_address: str) -> str:
    """
    Fetch detailed information about a specific ERC-20 token on the Base blockchain.
    Automatically determines if the network is mainnet or testnet.

    Args:
        token_address (str): The address of the ERC-20 token.

    Returns:
        str: Information about the token or an error message if unsuccessful.
    """
    # Determine the network dynamically based on the agent's current network ID
    is_mainnet = agent_wallet.network_id in ["base", "base-mainnet"]
    chain = "base" if is_mainnet else "base sepolia"

    # API endpoint and headers
    url = f"https://deep-index.moralis.io/api/v2.2/discovery/token"
    headers = {
        "accept": "application/json",
        "X-API-Key": MORALIS_API_KEY
    }
    params = {
        "chain": chain,
        "token_address": token_address
    }

    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        token_data = response.json()

        # Format the output
        token_info = (
            f"Token Name: {token_data.get('token_name')}\n"
            f"Symbol: {token_data.get('token_symbol')}\n"
            f"Price (USD): {token_data.get('price_usd')}\n"
            f"Market Cap: {token_data.get('market_cap')}\n"
            f"Security Score: {token_data.get('security_score')}\n"
            f"Token Age (days): {token_data.get('token_age_in_days')}\n"
            f"On-Chain Strength Index: {token_data.get('on_chain_strength_index')}\n"
            f"1-Day Holders Change: {token_data['holders_change'].get('1d')}\n"
            f"1-Day Volume Change (USD): {token_data['volume_change_usd'].get('1d')}\n"
            f"1-Month Price Change (%): {token_data['price_percent_change_usd'].get('1M')}\n"
            f"Logo: {token_data.get('token_logo')}\n"
        )
        return token_info

    except requests.exceptions.RequestException as e:
        return f"Error fetching token details: {str(e)}"
```

## Actions Configured in Based Agent

### Fetching Trending Tokens

- Uses Moralis API to retrieve **real-time trending tokens**.
- Helps Based Agent identify tokens with high trading activity.

### Checking Wallet PnL (Profit & Loss)

- Uses Moralis **Wallet API** to analyze **historical token balances and transactions**.
- Calculates wallet PnL based on **price fluctuations over time**.

### Fetching Token Details

- Uses Moralis **Token API** to retrieve **metadata, balances, and approval status**.
- Helps Based Agent understand token supply, market cap, and liquidity.

### Monitoring Wallet Balances

- Queries wallet balances across **multiple chains**.
- Uses Moralis' **multi-chain wallet tracking** feature.

### Tracking Swaps & Liquidity

- Monitors **DEX swaps** using Moralis **Streams API**.
- Identifies liquidity movements and trading activity in real time.

### Automated Buy/Sell Execution

- Based Agent decides to **buy/sell tokens** based on predefined logic.
- Uses Moralis **Price API** to check live token prices before executing trades.
