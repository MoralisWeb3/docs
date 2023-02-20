---
title: "Solana NFT Burner"
slug: "solana-nft-burner"
description: "This tutorial teaches you how to create your very own NFT burner dapp in NextJS using Metaplex JS SDK, and the Moralis API."
---

## Introduction

This tutorial teaches you how to create your very own NFT burner dapp in NextJS using Metaplex JS SDK, and the Moralis API.

Once complete, you can use this dapp to burn spam or unwanted NFTs from your wallet in just a few clicks, and burning Solana NFTs also returns back Solana to your wallet.

#### Why Does Burning Solana NFTs Give You Solana Tokens Back?

Solana blockchain has this concept called "Rent" that should be paid every time we store data in the Solana account. When we [mint new NFTs](/example-dapps/solana/solana-nft-minter) we pay the rent through a transaction fee.

When we burn NFTs, the Solana program returns back the remaining rent in the NFT account to the current NFT owner. So, even by burning spam or unwanted NFTs, we can recover some Solana tokens from NFT accounts.

In this project, we will use [Metaplex JavaScript SDK](https://github.com/metaplex-foundation/js) to burn and the [Moralis API](/web3-data-api-solana/how-to-get-native-solana-balance-by-wallet) to view the NFTs.

This is what the final application looks like. You can click on any NFTs in your wallet that you want to remove and click on the burn button to burn the NFT.

![Final App UI](/img/content/c37a205-image.webp)

Instead of going through the entire code, we will focus on the important sections of code that power the application.

You can find the repository with the final code here: [Solana-NFT-Burner](https://github.com/JohnVersus/solana-nft-burner).

## Step1: Project Setup

Follow these steps to run the project in your local environment.

- Clone the project from [GitHub](https://github.com/JohnVersus/solana-nft-burner) using the`git clone` command and `cd` into the project

```shell
git clone https://github.com/JohnVersus/solana-nft-burner.git

cd solana-nft-burner
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

# Wallet private only if you want to use the NFT Minter page.
PRIVATE_KEY = xxx
```

- Start the app in localhost port 3000.

```shell
yarn run dev
```

Once the command has been run successfully, you should be able to view the app in localhost port 3000, or click [here](http://localhost:3000) to open the page directly.

## Step2: Burning the NFT

In the app, you'll find multiple tabs, but for our code, we only need to access the`/nftBurner` page to burn the NFTs of the wallet. If you want to mint a new NFT for testing you can use the`/nftMinter`page to mint NFTs.

![Nav Bar](/img/content/8fd2c8f-image.webp)

To use the app, we must first connect to the Solana wallet. This can be done by clicking the "Select Wallet" button on the top right. You can then connect to the wallet of your choice.

![Select Wallet Button](/img/content/5e9b822-image.webp)

The code related to authentication can be found in the `src/components/modules/ConnectButton` folder, although we won't be looking at the authentication code in this tutorial.

If you want to know how authentication works, you can take a look at this [video](https://www.youtube.com/watch?v=0fuevxebv_E). You can also check out this [tutorial](/web3-data-api-solana/how-to-get-native-solana-balance-by-wallet) to learn how to get all NFTs linked to a Solana wallet.

Once the wallet connection is successful, visit the`/nftBurner` page, and we can view the NFTs the wallet is holding.

The first step of the app is to connect the Metaplex SDK with the wallet and the devnet cluster.

> Only partical code is shown here to keep it clean. Visit `src/components/templates/nftBurner` to view the entire code.

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

The next step is to handle the NFTs selected by the user in the UI and then burn the NFTs.

Here is the code responsible for selecting the NFTs in UI.

```typescript NFTBurner.tsx
// Refer full code in `src/components/templates/nftBurner/NFTBurner.tsx`

//The NFTs selected in the UI are stored in state variable.
const [nftsToDelete, setNftsToDelete] = useState<Array<string>>([]);
const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
  const { value, checked } = e.target;
  if (!nftsToDelete?.includes(value) && checked) {
    setNftsToDelete((existing: Array<string>) => [...existing, value]);
  } else {
    const temp = nftsToDelete;
    if (temp.includes(value)) {
      temp.splice(temp.indexOf(value), 1);
      setNftsToDelete(() => [...temp]);
    }
  }
};

// Component responsible for selecting NFTs in the UI
<StyledCheckBox
  onChange={handleCheckbox}
  value={`${balance.mint}`}
  type={"checkbox"}
  checked={nftsToDelete.includes(`${balance.mint}`)}
/>;
```

Here is the code responsible for burning the selected NFTs.

```typescript NFTBurner.tsx
// Refer full code can be found in `src/components/templates/nftBurner/NFTBurner.tsx`

// The data stored in nftsToDelete state variable is used to
// delete the selected NFTs

const burnNFT = async () => {
  // ...
  const totalTxs = await Promise.all(
    nftsToDelete.map(async (nft) => {
      const tx = await metaplex
        .nfts()
        .delete({
          mintAddress: new PublicKey(nft),
        })
        .run();
      return tx;
    })
  );
  setNftsToDelete(() => []);
  //...
};
```

And there we have it! That's all the code we need to burn and delete NFTs from your wallet.

## Step3: Testing

The dapp can be tested by visiting the `/NFTBurner` page.

First, select the NFTs to delete in the UI.

![NFT Selection](/img/content/9caeb78-image.webp)

Then click on the "Burn" button to initiate the transaction and you will get a request from your wallet to sign the transaction. If you observe the gas fee in the transaction, you can see that it says `+0.0105 SOL`, which means that this transaction will return `+0.0105 SOL` back to your wallet.

![Transaction View](/img/content/c9948e2-image.webp)

Once the transaction is successful, your NFT will be successfully deleted from the Solana blockchain and you will find `+0.0105 SOL` added to your wallet.

Congratulations! 🥳

Now you know how to create your very own NFT burner dapp to delete spam or unwanted NFTs from the blockchain.

## YouTube Tutorial

https://www.youtube.com/watch?v=qARimfhe4Ys

## Support

If you have any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
