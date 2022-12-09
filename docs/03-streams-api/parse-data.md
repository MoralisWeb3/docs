---
title: "Parse data"
slug: "parse-data"
---

Moralis automatically parses the following data for you:

- ERC20 Transfers and Approvals
- NFT Transfers and Approvals

### Parsing Smart Contract Events

If you are streaming a smart contract event you can use the code below as a guide to extract the data from the webhook into a typed data structure.

```javascript index.ts
import Moralis from 'moralis';
import { BigNumber } from '@moralisweb3/core';

const test = async () => {

  interface URI{
    value: string;
    id: BigNumber;
  }

  const webhookData = {
    confirmed: true,
    chainId: '0x1',
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'string',
            name: 'value',
            type: 'string',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'URI',
        type: 'event',
      },
    ],
    streamId: 'b4dbc80e-8161-43d8-9c5a-05a8a4bba988',
    tag: 'URI-listener',
    retries: 0,
    block: {
      number: '15933519',
      hash: '0x192357541e97093ebdf99b4a04e7e33726b6eb01f88f7ab3df3ab2dc5242147c',
      timestamp: '1668009611',
    },
    logs: [
      {
        logIndex: '475',
        transactionHash:
          '0x55125fa34ce16c295c222d48fc3efe210864dc2fb017f5965b4e3743d72342d5',
        address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        data: '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000042697066733a2f2f6261666b726569687366326568636c78796d793467366836697163627361346c6961637a6f716b7373666b6e70787535796a356f67696a6f667175000000000000000000000000000000000000000000000000000000000000',
        topic0:
          '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b',
        topic1:
          '0xab6953e647a36018fc48d6223583597b84c755a0000000000000010000000001',
        topic2: null,
        topic3: null,
      },
    ],
    txs: [],
    txsInternal: [],
    erc20Transfers: [],
    erc20Approvals: [],
    nftApprovals: { ERC1155: [], ERC721: [] },
    nftTransfers: [],
  };

  const decodedLogs = Moralis.Streams.parsedLogs<URI>(webhookData);

  console.log(decodedLogs[0].value);
  console.log(decodedLogs[0].id.toString());
};

test();

```