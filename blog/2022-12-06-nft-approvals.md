---
title: "Streams NFT Approvals"
slug: "streams-nft-approvals"
authors:
  name: Elias
tags: [Streams]
---

`nftApprovals` in webhooks becomes deprecated. A new list `nftTokenApprovals` is introduced. The new field will not split between `ERC1155` and `ERC721` instead it unifies the NFT Approvals.

```js
{
  ...,
  nftTokenApprovals: [
   {
     transactionHash: "0xf0c7542c73e2d26cc0b249da63426643263463463646345",
     logIndex: "0",
     contract: "0xf573d99385c05c23b24ed33de616ad16a43a0919",
     account: "0x6887246668a3b87f54deb3b94ba47a6f63f32985",
     operator: "0x34b6a28edbbaf0c7542c73e2d26cc0b249da69a6",
     approvedAll: false,
     tokenId: '1',
     tokenName: 'STREAMSNFT',
     tokenSymbol: 'StrNft',
     tokenContractType: 'ERC721',
    },
    {
      transactionHash: "0x60c7542c73e2d26cc0b249da63426643263463467846235",
      logIndex: '0',
      contract: '0xd119b250d83893860159f8a7b7a751bc044655a1',
      account: '0x6887246668a3b87f54deb3b94ba47a6f63f32985',
      operator: '0x34b6a28edbbaf0c7542c73e2d26cc0b249da69a6',
      approvedAll: true,
      tokenId: null,
      tokenName: 'ERC1155_Name',
      tokenSymbol: 'ERC1155_SYMBOL',
      tokenContractType: 'ERC1155',
    }
  ],
  ...
}
```
<!--truncate-->

## Fields

`contract` The Address of the NFT smart contract.

`account` The Address of the token owner. The Party that allows someone to use their own tokens

`operator` The Address of the operator. The Party that is allowed (or not) to use all or specific Tokens from account.

`approvedAll` A boolean that indicates whether all Token were approved or not

`tokenId` A string that indicates the token id that was approved. If all tokens were approved tokenId is null
