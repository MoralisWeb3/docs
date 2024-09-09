---
title: "Token Security Score FAQs"
slug: "../../evm/token-security-score-faqs"
sidebar_position: 4
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

# Moralis Token Security Score

Our Token Security Score is a bespoke metric designed to evaluate the security of ERC-20 tokens by analyzing multiple aspects of the token's smart contract. 

This comprehensive score leverages over 35 different factors, incorporating both on-chain and off-chain data to provide a thorough assessment of a token's security. These factors range from contract vulnerabilities and audit results to transaction patterns and liquidity metrics. 

The Token Security Score is regularly updated to ensure it reflects the most current information and trends, providing an up-to-date security assessment for users.

## How can the Security Score be used?

The Token Security Score plays a crucial role in safeguarding users in the crypto ecosystem. For traders, wallets, and decentralized exchanges (DEXs), displaying this score on token pages provides an immediate and transparent indicator of a token's security status, helping users make informed decisions before engaging with a token. 

Additionally, the score is invaluable when receiving unknown assets, as wallets can display the score to alert users to potential risks associated with newly received tokens. 

By integrating the Token Security Score into user interfaces, platforms can enhance trust and security, ultimately protecting users from engaging with potentially harmful tokens.

## How is the Security Score calculated?

Our Token Security Score leverages over 35 distinct metrics to provide a comprehensive analysis of an ERC-20 token's security. Below are some of the key metrics used in the scoring process:

- **Sell Tax:** This metric assesses whether a fee is applied to tokens when they are sold. High or modifiable sell taxes can indicate potential risks, such as attempts to disincentivize selling or manipulate token value.

- **Buy Tax:** Similar to the sell tax, this metric evaluates if a fee is imposed when purchasing tokens. High buy taxes can be used to exploit buyers or fund malicious activities.

- **Tax Modifiable:** This metric checks whether the contract allows for tax rates to be changed after deployment. The ability to modify tax rates post-deployment can be a red flag, as it may enable the contract owner to impose unexpected fees.

- **Mintable:** This metric determines if new tokens can be created after the contract is deployed. A mintable contract could potentially dilute token value or be used to manipulate the token supply.

- **Honeypot:** This crucial metric identifies whether a contract might be a honeypot—a type of scam that traps users by preventing them from selling tokens after purchase. Honeypots are a serious risk in the crypto space and are a primary focus in our security assessment.

- **Token Percentage of Owner:** This metric measures the proportion of the total token supply that is owned by the contract owner. A high percentage suggests a centralized control, which can be risky if the owner decides to sell or manipulate the market.

- **Is Airdrop Scam:** This metric evaluates whether the token is part of a suspected airdrop scam. Airdrop scams often involve distributing worthless tokens to users, which can then be used to phish for sensitive information or trick users into buying more tokens.

- **Addresses Related to Honeypot:** This metric flags any addresses associated with known honeypot scams. By identifying these connections, we can assess whether a token is potentially linked to fraudulent activities.

- **Phishing Activities:** This metric checks for any involvement of the token's contract in phishing schemes. Tokens associated with phishing activities pose significant risks to users, and this metric helps to highlight such dangers.

These metrics, along with many others, are combined to form a holistic view of a token's security, ensuring that users are better protected from potential threats in the decentralized finance ecosystem.

For a full comprehensive breakdown of all metrics we consider, as well as to get access to this detailed data, please contact our enterprise sales team.


## What criteria must a token meet to receive a security score?

As soon as a token begins trading, it qualifies for analysis and will be assigned a security score based on the available data.

Depending on the availability of data, the token will typically be scored within a few minutes of its first trade.


## How do you handle tokens with insufficient data for a security score?

If a supported token cannot be fully analyzed due to insufficient data, it will default to a score of `0`. For unsupported tokens, such as certain DeFi or LP tokens that are not actively traded, the security score will be displayed as `null`.

## Can a token’s security score change over time?

Yes, a token’s security score is dynamic and can change over time. After a token is initially analyzed and assigned a score, this score remains valid for one week. After this period, the token will be re-analyzed upon its next trade. If the token is not traded for another month, it will not be re-analyzed until a new trade occurs.


## Can I access a detailed breakdown of the factors contributing to a token's security score?
Yes, users can access a comprehensive breakdown of all the metrics that contribute to a token's security score. To view this detailed data, please contact our enterprise sales team.

## What chains are supported?
All mainnet chains are supported.

## Which endpoints are supported?

| Name                               | Endpoint                               | API Reference                                                                        |
| ---------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| Get Wallet History                 | `/wallets/:address/history`              | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-history)   |
| Get ERC20 Transfers by Wallet      | `/:address/erc20/transfers`              | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-transfers)      |
| Get ERC20 Transfers by Contract    | `/erc20/:address/transfers`              | [Method Documentation](/web3-data-api/evm/reference/get-token-transfers)             |
| Get ERC20 Price                    | `/erc20/:address/price`              | [Method Documentation](/web3-data-api/evm/reference/get-token-price)             |
| Get Multiple ERC20 Prices          | `/erc20/prices`              | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices)             |
| Get Wallet Token Balances          | `/:address/erc20`              | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances)             |
| Get Wallet Token Balances with Prices | `/wallets/{address}/tokens`              | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances-price)             |
| Get ERC20 Metadata by Contract     | `/erc20/metadata`              | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata)             |
| Get ERC20 Metadata by Symbol       | `/erc20/metadata/symbols`              | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata-by-symbol)             |
