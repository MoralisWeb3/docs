---
title: "Solana NFT Minter"
slug: "solana-nft-minter"
description: "This tutorial teaches you how to create your very own NFT minter dapp in NextJS using Metaplex JavaScript SDK, and the Moralis API."
---

## Introduction

This tutorial teaches you how to create your very own NFT minter dapp in NextJS using Metaplex JavaScript SDK, and the Moralis API.

Once complete, you can use this dapp to mint NFTs on the Solana blockchain in a few clicks.

We will use [Metaplex JavaScript SDK](https://github.com/metaplex-foundation/js) and the [Moralis API](/web3-data-api/solana/how-to-get-native-solana-balance-by-wallet) to mint and view the NFTs.

This is what the final application looks like.

![Solana NFT Minter Page View](/img/content/5863afd-image.webp)

Instead of going through the entire code, we will focus on the important sections of code that power the application.

You can find the repository with the final code here: [Solana-NFT-Minter](https://github.com/JohnVersus/solana-nft-minter).

## Step1: Project Setup

Follow these steps to run the project in your local environment.

- Clone the project from [GitHub](https://github.com/JohnVersus/solana-nft-minter) using the`git clone` command and `cd` into the project

```shell
git clone https://github.com/JohnVersus/solana-nft-minter.git

cd solana-nft-minter
```

- Install the dependencies using the`yarn` or `npm` package manager.

```shell
yarn install
```

- Rename `.env.local.example` file to `.env.local` and add the required environment secrets.

```shell .env.local
# devent is used for chain Id as we will be testing the app on devnet chain
APP_CHAIN_ID=devnet
APP_DOMAIN=ethereum.boilerplate

# Get your KEY https://admin.moralis.io/web3api
MORALIS_API_KEY= xxx

# Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/64
NEXTAUTH_SECRET= xxx

# Replace for production
NEXTAUTH_URL=http://localhost:3000

# Wallet private used to upload NFT metadata to arweave storage
PRIVATE_KEY = xxx
```

- Start the app in localhost port 3000.

```shell
yarn run dev
```

Once the command has been run successfully, you should be able to view the app in localhost port 3000, or click [here](http://localhost:3000) to open the page directly.

## Step2: Uploading and Minting NFT

In the app, you can find multiple tabs, but for our code, we only need to access the`/balances/nft` page to check the NFTs of the wallet, and the`/nftMinter`page to mint NFTs.

![Nav Bar](/img/content/8d845e2-image.webp)

To use the app, we must first connect to the Solana wallet. This can be done by clicking the "Select Wallet" button on the top right. You can then connect to the wallet of your choice.

![](/img/content/5e9b822-image.webp)

Once the wallet connection is successful, visit the`/balances/nft` page, and we can view the NFTs the wallet is holding.

The code related to authentication can be found in the `src/components/modules/ConnectButton` folder, although we won't be looking at the authentication code in this tutorial.

If you want to know how authentication works, you can take a look at this [video](https://www.youtube.com/watch?v=0fuevxebv_E). You can also check out this [tutorial](/web3-data-api/solana/how-to-get-native-solana-balance-by-wallet) to learn how to get all NFTs linked to a Solana wallet.

The first step of the app is to connect the Metaplex SDK with the wallet and the devnet cluster.

> Only partical code is shown here to keep it clean. Visit `src/components/templates/nftMinter` to view the entire code.

```typescript NFTMinter.tsx
/*
 * We use the connected wallet and the cluster connection
 * with metaplex for creating and processing the transactions.
 */
const wallet = useWallet();
const connection = new Connection(clusterApiUrl("devnet"));
const metaplex = new Metaplex(connection);
metaplex.use(walletAdapterIdentity(wallet));
```

The next step is to process the inputs which are entered by the user and upload them to decentralized storage like Arweave, IPFS, etc. In this tutorial, we will use Arweave as our storage solution, as it works seamlessly with the Metaplex SDK.

This is the code to process the image and send the data to the backend for uploading.

```typescript NFTMinter.tsx
// full code in `src/components/templates/nftMinter/NFTMinter.tsx`

//Function to process image to base64
const convertBase64 = (inputFile: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(inputFile);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

// NFT metadata
const base64Data = await convertBase64(file[0]);
const options = {
  name,
  description,
  image: base64Data,
  symbol: "M-NFT",
};

// Sending the metdata to the backend NextJs API route for uploading to arweave
const uri = await apiPost("/upload", options)
  .then((data: UploadMetadataOutput) => {
    console.log(data);
    return data.uri;
  })
  .catch((e) => {
    console.log(e);
  });
```

Here's the code to upload the metadata to Arweave.

```typescript upload.ts
// Complete code can be found in `pages/api/upload.ts`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Creating a new connetion the backend
  const connection = new Connection(clusterApiUrl("devnet"));
  const metaplex = new Metaplex(connection);

  // Using private key in backend to sign the transaction for uploading the metadata.
  const key = Uint8Array.from(base58.decode(process.env.PRIVATE_KEY));
  const keypair = Keypair.fromSecretKey(key);

  // Using bundlr storage for connecting to arweave storage
  metaplex.use(walletAdapterIdentity(keypair));
  metaplex.use(
    bundlrStorage({
      address: "https://devnet.bundlr.network",
      providerUrl: "https://api.devnet.solana.com",
      timeout: 60000,
      identity: keypair,
    })
  );

  // Uploading metadata
  const data = await metaplex
    .nfts()
    .uploadMetadata({ name, description, image, symbol })
    .run();

  // Send the response to frontend
  res.status(200).json(data);
}
```

Now let's take a look at the last step - how to mint the NFT.

Here is the code:

```typescript NFTMinter.tsx
// The data which we get from backend, after uploading, contains the URI of
// the metdata that was uploaded.
// We use it mint the NFT on blockchain.

const data = await metaplex
  .nfts()
  .create({
    uri,
    name,
    sellerFeeBasisPoints: 500, // represents the royality fee for the NFT
  })
  .run();
```

And there we have it! That's all the code we need to upload metadata to Arweave and mint an NFT on the Solana blockchain.

## Step3: Testing

The dapp can be tested by visiting the `/nftMinter` page.

First, add the required data to the form, then click on the `Mint` button to mint the NFT.

![Solana NFT Minter Form](/img/content/bc24085-image.webp)

The process will take a couple of seconds, and you will be asked to sign a transaction to mint the NFT. Once the transaction is signed and confirmed, you will get a notification that the minting is successful.

You can also visit the`/balances/nft` page to view your newly minted NFT.

![NFT balance](/img/content/64db1da-image.webp)

Congratulations!! 🥳

Now you know how to create your very own NFT minter dapp on the Solana blockchain.

## YouTube Tutorial

https://www.youtube.com/watch?v=JxkSHq0X-aE

## Support

If you have any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
