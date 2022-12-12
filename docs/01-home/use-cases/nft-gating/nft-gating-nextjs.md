---
title: "NextJS"
slug: "nft-gating-nextjs"
description: "This tutorial teaches you how to add NFT gated functionality to your NextJS dapp. You can set the rules using `getServerSide` for each page you want to protect. This tutorial works on almost any blockchain, including Ethereum, Polygon, BNB Smart Chain, Avalanche, Cronos, and many more!"
---
# Introduction

This tutorial shows you how to create a NextJS dapp containing NFT gated functionality. We will create a protected page that's only accessible to users who authenticate and own at least one NFT from the specified NFT collection.

You can find the repository with the final code here: <https://github.com/MoralisWeb3/demo-apps/tree/main/nextjs_moralis_nft_gating>.

![If User Fulfills Requirements - This is the Landing Page](/img/content/dfc9bf3-81e82ad-Untitled.png)

# Before Starting

You can start this tutorial if you already have a NextJS dapp with Web3 authorization using `next-auth`. (_Please check our [NextJS Web3 Auth Tutorial](https://docs.moralis.io/docs/sign-in-with-metamask)._)

# NFT Gated Page with `getServerSideProps`

1. Create a new page file, `pages/protected.jsx`, with the following content:

```javascript
function Protected() {
    return (
        <div>
            <h3>Protected content</h3>
        </div>
    );
}
export default Protected;
```



2. Add the `getServerSideProps` function for checking the user session. In case the user is not authenticated, we will redirect him to the `/signin` page. The message will be returned as a `message` prop and displayed on the client side:

```javascript
import { getSession } from 'next-auth/react';
import Moralis from 'moralis';

function Protected({ message }) {
    return (
        <div>
            <h3>Protected content</h3>
            <p>{message}</p>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }


    return {
        props: {
            message:
                // if user has at least one NFT he will get congrats message
                nftList.raw.total > 0 ? 'Nice! You have our NFT' : "Sorry, you don't have our NFT",
        },
    };
}
export default Protected;
```



> 📘 
> 
> The `getServerSideProps` only runs on the server side and never runs on the browser. When you request a page, `getServerSideProps` runs at request time, and this page will be pre-rendered with the returned props.

3. Extend `getServerSideProps` . We will get the user wallet address from the user session object and check if the user has at least one specific NFT using `Moralis.EvmApi`:

```javascript
import { getSession } from 'next-auth/react';
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

function Protected({ message, nftList }) {
    return (
        <div>
            <h3>Protected content</h3>
            <p>{message}</p>
            <pre>{JSON.stringify(nftList, null, 2)}</pre>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const nftList = await Moralis.EvmApi.nft.getWalletNFTs({
      	chain: EvmChain.ETHEREUM,
        address: session.user.address,
        tokenAddress: '0x...',
    });

    return {
        props: {
            message:
                // if user has at least one NFT he will get protected content
                nftList.raw.total > 0 ? 'Nice! You have our NFT' : "Sorry, you don't have our NFT",
            nftList: nftList.raw.result,
        },
    };
}
export default Protected;
```



4. Visit the [`http://localhost:3000/protected`](http://localhost:3000/protected`) page to test the NFT gated functionality. ([`http://localhost:3000/signin`](http://localhost:3000/signin`) for authentication.)

![Protected Page if User Does Not Fulfill Requirements](/img/content/f8b4e79-Untitled.png)

![Protected Page When the User is Authenticated and Holds Specified NFT](/img/content/81e82ad-Untitled.png)