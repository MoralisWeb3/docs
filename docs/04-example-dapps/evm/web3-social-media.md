---
title: "Web3 Social Media"
slug: "web3-social-media"
description: "This tutorial teaches you how to create your very own decentralized social profile using [Lens](https://www.lens.xyz/) and the Moralis API."
---
## Introduction

This tutorial teaches you how to create your very own decentralized social profile using [Lens](https://www.lens.xyz/) and the Moralis API.

Lens is a blockchain social media protocol that allows anyone to build Web3 social media apps on top of it.

You can find the repository with the [final code here](https://github.com/IAmJaysWay/lens).

## YouTube Tutorial

https://www.youtube.com/watch?v=Nn6N7IJKcgE

## How to Start

1. Setup a starter (Next.js) app
2. Connect to the Lens API
3. Import and set up the Moralis SDK
4. Integrate your app with Moralis 

## Prerequisites

1. Clone the [starter repo](https://github.com/IAmJaysWay/lens-starter), install it, and run the app:

```shell
git clone https://github.com/IAmJaysWay/lens-starter
cd lens-starter
cd web3profile-starter
npm install
npm run dev
```



2. Open [`http://localhost:3000`](http://localhost:3000) in your browser. You should see the following:

![](/img/content/8b6d8c8-Web3_Social_Media_1.webp)

## Initial Setup

We will set up our connection to Lens (using their [API](https://docs.lens.xyz/docs/introduction)) from our app. We will use the `urql` library to create a GraphQL client that will be used to query this API.

1. Inside `src/pages`, create a folder called `api`, and inside that folder, create a file called `lensCalls.js`. Open it and add our initial client setup code:

```javascript
import { createClient } from 'urql';

const APIURL = 'https://api.lens.dev';

export const client = new createClient({
  url: APIURL,
});

```



2. Add our API profile code:

```javascript
export const Profile = `
query Profile {
  profile(request: { profileId: "0x09" }) {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    followNftAddress
    metadata
    isDefault
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    handle
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    ownedBy
    dispatcher {
      address
      canUseRelay
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            symbol
            name
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
        type
      }
      ... on RevertFollowModuleSettings {
        type
      }
    }
  }
}
`
```



Now we will set up our page to call this API.

3. Open `pages/index.js`. At the top, add our imports for our client and the profile code we just set up:

```javascript
import { urqlClient, Profile } from './api/lensCalls';
```



4. We will call the Lens API with [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) which will run the code server side and return the data to the `index.js` page as props:

```javascript
export async function getServerSideProps() {
  const response = await urqlClient.query(Profile).toPromise();

  return {
    props: { profile: response?.data.profile },
  };
}
```



5. We will adjust the `Home` component to receive these props and log `profile` to make sure it all works:

```javascript
export default function Home({ profile }) {
  console.log(profile);
  
  // rest of Home
```



6. Check your browser console (developer tools), you should see similar output to the following:

```json
{
    "id": "0x09",
    "name": "Nicolo",
    "bio": "Strategy @AaveAave.lens & @LensProtocol\n\nnicolo.eth",
    "attributes": [
        {
            "displayType": null,
            "traitType": "string",
            "key": "location",
            "value": "London, UK",
            "__typename": "Attribute"
        },
        {
            "displayType": null,
            "traitType": "string",
            "key": "twitter",
            "value": "nicolo",
            "__typename": "Attribute"
        },
        {
            "displayType": null,
            "traitType": "string",
            "key": "statusMessage",
            "value": "🌿👻",
            "__typename": "Attribute"
        },
        {
            "displayType": null,
            "traitType": "string",
            "key": "app",
            "value": "Lenster",
            "__typename": "Attribute"
        }
    ],
    ...
}
```



## Populating Our Profile Page

We now have info about this user that we will use to populate our frontend.

1. In `pages/index.js`, we will swap out the default values with the properties from `profile`. The complete `return` should look like this:

```javascript
return (
    <div className={styles.container}>
      <img
        className={styles.banner}
        src={profile.coverPicture.original.url}
        alt="cover"
      />
      <div className={styles.profile}>
        <div className={styles.profileLeft}>
          <img
            className={styles.profileImg}
            src={profile.picture.original.url}
            alt="profileImg"
          />
          <div className={styles.info}>
            <div className={styles.name}>{profile.name}</div>
            <div className={styles.handle}>{profile.handle}</div>
            <div className={styles.bio}>{profile.bio}</div>
            <div className={styles.follow}>
              <div>Followers</div>
              <div>{profile.stats.totalFollowers}</div>
            </div>
            <div className={styles.follow}>
              <div>Following</div>
              <div>{profile.stats.totalFollowing}</div>
            </div>
          </div>
        </div>
        <div className={styles.profileRight}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="I'm Following" key="1">
              <div className={styles.followingNFTs}>
                {nftArray?.map((e) => {
                  return <iframe className={styles.animation} src={e}></iframe>;
                })}
              </div>
            </TabPane>
            <TabPane tab="Follow Me" key="2">
              <div className={styles.followMe}>
                <div>
                  <div className={styles.promptOne}>Hey There 👋🏼</div>
                  <div className={styles.promptTwo}>
                    Give me a follow and receive this cool NFT!
                  </div>
                  <Button onClick={follow} type="primary">
                    Follow Me
                  </Button>
                </div>
                {myNFT && (
                  <iframe className={styles.myNFT} src={myNFT}></iframe>
                )}
              </div>
            </TabPane>
            <TabPane tab="Social Posts" key="3" disabled={true} />
          </Tabs>
        </div>
      </div>
    </div>
  );
```



2. Check [`http://localhost:3000`](http://localhost:3000). Your app should now look similar to:

![](/img/content/2927bab-Web3_Social_Media_2.webp)

3. We can now change the profile ID in `pages/api/lensCalls.js` to use another profile for our app. We will use the following`0x81`:

```javascript
profile(request: { profileId: "0x81" }) {
  ...
```



4. Reload the page and it should look different:

![](/img/content/f00285d-Web3_Social_Media_3.webp)

## Using the Moralis API

We will now use the wallet address found in this profile (`ownedBy`) to get the Lens NFTs that they own which will display on the "I'm Following" tab. These NFTs represent which Lens profiles this user is following.

1. Create a file named `.env.local` in the root of your project (where `package.json` is) and add the following:

```Text .env.local
MORALIS_API_KEY=replace_me
```



To get your Moralis API key, [check out this guide](/web3-data-api/get-your-api-key).

2. In `pages/index.js`, add our Moralis SDK import at the top:

```javascript
import Moralis from 'moralis';
```



3. Inside `getServerSideProps`, add the following code that will call the Moralis API, filter the results for any Lens NFTs, and return the final NFT array:

```javascript
const balances = await Moralis.EvmApi.account.getNFTs({
    address: response?.data.profile.ownedBy,
    chain: 0x89,
  });

  let nftArray = [];
  let nfts = balances?.data.result;

  for (let i = 0; i < nfts.length; i++) {
    if (nfts[i].metadata !== null) {
      if (
        'animation_url' in JSON.parse(nfts[i].metadata) &&
        JSON.parse(nfts[i].metadata).animation_url !== null &&
        JSON.parse(nfts[i].metadata).animation_url.includes('.lens')
      ) {
        nftArray.push(JSON.parse(nfts[i].metadata).animation_url);
      }
    }
  }

  return {
    props: { profile: response?.data.profile, nftArray: nftArray },
  };
```



4. In our `Home` component, we will now include `nftArray`:

```javascript
export default function Home({ profile, nftArray }) {
  console.log(profile);

  // let nftArray; remove or comment this out
  let myNFT;
  
  ...
```



5. Reload [`http://localhost:3000`](http://localhost:3000), you should now see the follower NFTs:

![](/img/content/21ce843-Web3_Social_Media_4.webp)

## Add the Profile's "Follow" NFT

Now we will show the NFT that users would get if they followed this profile. The token address will be available in the profile data.

1. Inside `getServerSideProps`, add the following:

```
const followNFT = await Moralis.EvmApi.token.getTokenIdMetadata({
  address: response?.data.profile.followNftAddress,
  chain: 0x89,
  tokenId: 1,
});

const myNFT = JSON.parse(followNFT.data.metadata).animation_url;

return {
  props: {
    profile: response?.data.profile,
    nftArray: nftArray,
    myNFT: myNFT,
  },
};
}
```



2. In our `Home` component, we will now include `myNFT`:

```javascript
export default function Home({ profile, nftArray, myNFT }) {
  console.log(profile);

  //let myNFT; remove or comment this out
  
  ...
```



3. Reload [`http://localhost:3000`](http://localhost:3000)and click on the "Follow Me" tab. You should now see the "follow" NFT:

![](/img/content/58cad1f-Web3_Social_Media_5.webp)

## Adding Follow Functionality

The last feature we will add is allowing users to follow this profile. The ABI we need for interacting with the Lens contract is already included in the starter project.

We will use [wagmi](https://wagmi.sh/) for wallet integration.

1. In `pages/index.js`, add these imports:

```javascript
import { useConnect, useAccount, useDisconnect, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import abi from "../abi.json"; 
```



2. In our `Home` component, add the hooks needed to connect our wallet (MetaMask) and make a contract call:

```javascript
export default function Home({ profile, nftArray, myNFT }) {
  console.log(profile);

  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { config } = usePrepareContractWrite({
    addressOrName: '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d',
    contractInterface: abi,
    functionName: 'follow',
    args: [[profile.id], [0x0]],
  });

  const { write } = useContractWrite(config);
  
  ...
```



3. Replace the current `follow` function (which is called when the "Follow Me" button is clicked) with the following:

```javascript
async function follow() {
  if (isConnected) {
    await disconnectAsync();
  }
  await connectAsync({
    connector: new MetaMaskConnector({}),
  });

  write();
}
```



4. To test, reload [`http://localhost:3000`](http://localhost:3000), click the "Follow Me" button and sign the transaction:

![](/img/content/9aaf1ec-Web3_Social_Media_6.webp)

If you sign the following transaction, your wallet should then receive a new Lens NFT.