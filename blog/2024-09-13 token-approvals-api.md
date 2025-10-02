---
title: "ERC20 Token Approvals"
slug: "token-approvals"
authors:
  name: Reuben Salisbury
tags: [Web3 Data API]
---

Our latest update introduces the **Token Approvals API**, allowing you to easily access approval data for ERC20 tokens. Now you can track which addresses have approval to spend tokens from a given wallet 🔥

<!-- truncate -->

### Token Approvals Feature

The Token Approvals API provides detailed information, including:

- `spender`: The address of the spender that is approved.
- `approved_amount`: The amount of tokens that the spender is approved to spend.
- `usd_at_risk`: The USD value of the approved tokens at risk.
- `spender_label`: A label identifying the spender (e.g., "Binance 1").
- `entity`: The entity associated with the spender (e.g., "Opensea").

### Endpoints

| No. | Method               | Description                   | API Reference                                                                              | URL                                                                                                                                          |
| --- | -------------------- | ----------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | `getWalletApprovals` | Get ERC20 approvals by wallet | [Method Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals) | [https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getWalletApprovals](https://deep-index.moralis.io/api/v2.2/wallets/:address/approvals) |

### Example

To get the ERC20 token approvals for a specific wallet, use the following API call:

```bash
curl --request GET \
     --url 'https://deep-index.moralis.io/api/v2.2/wallets/0xcB1C1FdE09f811B294172696404e88E658659905/approvals?chain=eth' \
     --header 'accept: application/json' \
     --header 'X-API-Key: your-api-key-here'
```

### Sample Response

```json
{
  "page": 1,
  "page_size": 100,
  "result": [
    {
      "block_number": "12526958",
      "block_timestamp": "2021-04-02T10:07:54.000Z",
      "transaction_hash": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
      "spender": {
        "address": "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c",
        "address_label": "Binance 1",
        "entity": "Opensea"
      },
      "approved_amount": "1000000000000000",
      "usd_at_risk": "1000.00"
    }
  ]
}
```

For more details on how token approvals work and to explore other features, visit our [Token Approvals Documentation](/web3-data-api/evm/reference/wallet-api/get-wallet-token-approvals).
