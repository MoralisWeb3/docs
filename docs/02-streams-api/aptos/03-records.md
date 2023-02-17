# Records

In the Aptos Streams API, a record is defined as a single transaction in the transactions list, or a single event in the events list. Each time a transaction or event is added to the respective list, it counts as one record.

When using the Aptos Streams API, it's important to keep track of the number of records being used in order to stay within your plan's limits. If you exceed your plan's record limit, your stream may be paused or terminated. You can monitor your usage of records in the Moralis admin panel.

If you have any further questions about records or the Aptos Streams API in general, please reach out to the Moralis Support Team for assistance.

Tip: When creating or editing a stream, you can set the "includeEvents" option to false to save on usage costs. This will prevent events from being included in the webhook payload. Additionally, events related to coin withdrawals and deposits (`0x1::coin::WithdrawEvent` and `0x1::coin::DepositEvent`) will always be free of cost. In the future, events related to `0x3` (NFTs) will also be automatically parsed at no additional cost.
