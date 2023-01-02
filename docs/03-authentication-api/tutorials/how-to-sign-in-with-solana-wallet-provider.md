---
title: "How to Authenticate Users with Solana Wallet Adapter"
slug: "../how-to-sign-in-with-solana-wallet-provider"
---

This tutorial covers how to create full-stack Web3 authentication for the Solana wallet adaptor, using the popular NextJS framework.

## Introduction

This tutorial shows you how to create a NextJS application that allows users to log in using any wallet that uses the Solana wallet adapter. 

After Web3 wallet authentication, the **[next-auth](https://next-auth.js.org/)** library creates a session cookie with an encrypted **[JWT](https://jwt.io/introduction)** (**JWE**) stored inside. It contains session info (such as an address, signed message, and expiration time) in the user's browser. It's a secure way to store users' info without a database, and it's impossible to read/modify the **JWT** without a [secret key](https://next-auth.js.org/configuration/options#secret).

Once the user is logged in, they will be able to visit a page that displays all their user data.

You can find the repository with the final code here: [GitHub](https://github.com/JohnVersus/nextjs_solana_auth_api/tree/moralisweb3-next-client-auth).

![](/img/content/43e472f-image.png)

:::info
You can find the final dapp with implemented style on our [GitHub](https://github.com/JohnVersus/nextjs_solana_auth_api/tree/moralisweb3-next-client-auth).
:::

## Prerequisites

1. Create a [Moralis account](https://www.moralis.io).
2. Install and set up [Visual Studio](https://code.visualstudio.com/).
3. Create your NextJS dapp (you can create it using **[create-next-app](https://nextjs.org/docs/api-reference/create-next-app)** or follow the **[NextJS dapp](https://docs.moralis.io/docs/nextjs-dapp)** tutorial).

## Install the Required Dependencies

1. Install `@moralisweb3/next` (if not installed), `next-auth` and `@web3uikit/core` dependencies:

```bash npm2yarn
npm install @moralisweb3/next next-auth @web3uikit/core
```

2. To implement authentication using a Web3 wallet (e.g., Phantom), we need to use a Solana Web3 library. For the tutorial, we will use [wagmi](https://wagmi.sh/docs/getting-started). So, let's install the `wagmi` dependency:

```bash npm2yarn
npm install bs58 tweetnacl \
    @solana/wallet-adapter-base \
    @solana/wallet-adapter-react \
    @solana/wallet-adapter-react-ui \
    @solana/wallet-adapter-wallets \
    @solana/web3.js 
```

3. Add new environment variables in your `.env.local` file in the app root:

- **APP_DOMAIN**: RFC 4501 DNS authority that is requesting the signing.
- **MORALIS_API_KEY**: You can get it [here](https://admin.moralis.io/account/profile).
- **NEXTAUTH_URL**: Your app address. In the development stage, use [`http://localhost:3000`](http://localhost:3000).
- **NEXTAUTH_SECRET**: Used for encrypting JWT tokens of users. You can put any value here or generate it on [`https://generate-secret.now.sh/32`](https://generate-secret.now.sh/32). Here's an `.env.local` example: 

```text .env.local
APP_DOMAIN=amazing.finance
MORALIS_API_KEY=xxxx
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=7197b3e8dbee5ea6274cab37245eec212
```

:::caution
Keep your `NEXTAUTH_SECRET` value in secret to prevent security problems.
:::

:::caution
Every time you modify the `.env.local` file, you need to restart your dapp.
:::

## Wrapping App with `Solana Wallet Provider` and `SessionProvider`

4. Create the `pages/_app.jsx` file. We need to wrap our pages with `Solana Wallet Provider` ([docs](https://github.com/solana-labs/wallet-adapter/blob/master/APP.md)) and `SessionProvider` ([docs](https://next-auth.js.org/getting-started/client#sessionprovider)):

```javascript
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useMemo } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

function MyApp({ Component, pageProps }) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter({ network })],
    [network]
  );
  return (
    <SessionProvider session={pageProps.session}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Component {...pageProps} />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </SessionProvider>
  );
}

export default MyApp;

```

:::info 
NextJS uses the `App` component to initialize pages. You can override it and control the page initialization. Check out the [NextJS docs](https://nextjs.org/docs/advanced-features/custom-app).
:::

## Configure Next-Auth and MoralisNextAuth

5. Create a new file, `pages/api/auth/[...nextauth].ts`, with the following content:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
<TabItem value="typescript" label="[...nextauth].ts" default>

```typescript
import NextAuth from 'next-auth';
import { MoralisNextAuthProvider } from '@moralisweb3/next';

export default NextAuth({
  providers: [MoralisNextAuthProvider()],
  // adding user info to the user session object
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      (session as { user: unknown }).user = token.user;
      return session;
    },
  },
});
```

</TabItem>
<TabItem value="javascript" label="[...nextauth].js">

```javascript Javascript
import NextAuth from 'next-auth';
import { MoralisNextAuthProvider } from '@moralisweb3/next';

export default NextAuth({
  providers: [MoralisNextAuthProvider()],
  // adding user info to the user session object
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});
```

</TabItem>
</Tabs>


6. Add an authenticating config to the `pages/api/moralis/[...moralis].ts`:

<Tabs groupId="programming-language">
<TabItem value="typescript" label="[...moralis].ts" default>

```typescript \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[...moralis].ts
import { MoralisNextApi } from "@moralisweb3/next";

const DATE = new Date();
const FUTUREDATE = new Date(DATE);
FUTUREDATE.setDate(FUTUREDATE.getDate() + 1);

const { MORALIS_API_KEY, APP_DOMAIN, NEXTAUTH_URL } = process.env;

if (!MORALIS_API_KEY || !APP_DOMAIN || !NEXTAUTH_URL) {
  throw new Error(
    "Missing env variables. Please add the required env variables."
  );
}

export default MoralisNextApi({
  apiKey: MORALIS_API_KEY,
  authentication: {
    timeout: 120,
    domain: APP_DOMAIN,
    uri: NEXTAUTH_URL,
    expirationTime: FUTUREDATE.toISOString(),
    statement: "Sign message to authenticate.",
  },
});

```

</TabItem>
<TabItem value="javascript" label="[...moralis].js">

```typescript \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[...moralis].js
import { MoralisNextApi } from "@moralisweb3/next";

const DATE = new Date();
const FUTUREDATE = new Date(DATE);
FUTUREDATE.setDate(FUTUREDATE.getDate() + 1);

const { MORALIS_API_KEY, APP_DOMAIN, NEXTAUTH_URL } = process.env;

if (!MORALIS_API_KEY || !APP_DOMAIN || !NEXTAUTH_URL) {
  throw new Error(
    "Missing env variables. Please add the required env variables."
  );
}

export default MoralisNextApi({
  apiKey: MORALIS_API_KEY,
  authentication: {
    timeout: 120,
    domain: APP_DOMAIN,
    uri: NEXTAUTH_URL,
    expirationTime: FUTUREDATE.toISOString(),
    statement: "Sign message to authenticate.",
  },
});

```

</TabItem>
</Tabs>

## Create Wallet Component

7. Create a new file under `app/components/loginBtn/walletAdaptor.tsx`:

<Tabs groupId="programming-language">
<TabItem value="typescript" label="walletAdaptor.tsx" default>

```typescript walletAdaptor.tsx
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");
import base58 from "bs58";
import { signIn, signOut } from "next-auth/react";
import { useAuthRequestChallengeSolana } from "@moralisweb3/next";
import React from "react";
export default function WalletAdaptor() {
  const { publicKey, signMessage, disconnecting, disconnect, connected } =
    useWallet();
  const { requestChallengeAsync, error } = useAuthRequestChallengeSolana();
  const signCustomMessage = async () => {
    if (!publicKey) {
      throw new Error("Wallet not avaiable to process request.");
    }
    const address = publicKey.toBase58();
    const challenge = await requestChallengeAsync({
      address,
      network: "devnet",
    });
    const encodedMessage = new TextEncoder().encode(challenge?.message);
    if (!encodedMessage) {
      throw new Error("Failed to get encoded message.");
    }

    const signedMessage = await signMessage?.(encodedMessage);
    const signature = base58.encode(signedMessage as Uint8Array);
    try {
      const authResponse = await signIn("moralis-auth", {
        message: challenge?.message,
        signature,
        network: "Solana",
        redirect: false,
      });
      if (authResponse?.error) {
        throw new Error(authResponse.error);
      }
    } catch (e) {
      disconnect();
      console.log(e);
      return;
    }
  };

  useEffect(() => {
    if (error) {
      disconnect();
      console.log(error);
    }
  }, [disconnect, error]);

  useEffect(() => {
    if (disconnecting) {
      signOut({ redirect: false });
    }
  }, [disconnecting]);

  useEffect(() => {
    connected && signCustomMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  return <WalletMultiButton />;
}

```

</TabItem>
<TabItem value="javascript" label="walletAdaptor.jsx">

```typescript walletAdaptor.jsx
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");
import base58 from "bs58";
import { signIn, signOut } from "next-auth/react";
import { useAuthRequestChallengeSolana } from "@moralisweb3/next";
import React from "react";
export default function WalletAdaptor() {
  const { publicKey, signMessage, disconnecting, disconnect, connected } =
    useWallet();
  const { requestChallengeAsync, error } = useAuthRequestChallengeSolana();
  const signCustomMessage = async () => {
    if (!publicKey) {
      throw new Error("Wallet not avaiable to process request.");
    }
    const address = publicKey.toBase58();
    const challenge = await requestChallengeAsync({
      address,
      network: "devnet",
    });
    const encodedMessage = new TextEncoder().encode(challenge?.message);
    if (!encodedMessage) {
      throw new Error("Failed to get encoded message.");
    }

    const signedMessage = await signMessage?.(encodedMessage);
    const signature = base58.encode(signedMessage);
    try {
      const authResponse = await signIn("moralis-auth", {
        message: challenge?.message,
        signature,
        network: "Solana",
        redirect: false,
      });
      if (authResponse?.error) {
        throw new Error(authResponse.error);
      }
    } catch (e) {
      disconnect();
      console.log(e);
      return;
    }
  };

  useEffect(() => {
    if (error) {
      disconnect();
      console.log(error);
    }
  }, [disconnect, error]);

  useEffect(() => {
    if (disconnecting) {
      signOut({ redirect: false });
    }
  }, [disconnecting]);

  useEffect(() => {
    connected && signCustomMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  return <WalletMultiButton />;
}

```

</TabItem>
</Tabs>



## Create Page to Sign-In

8. Create a new page file, `pages/index.jsx`, with the following content: 

- You can get the app CSS from [GitHub](https://github.com/JohnVersus/nextjs_solana_auth_api/tree/moralisweb3-next-client-auth/styles) to style the app.

```javascript
import React, { useEffect, useTransition } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Typography } from "@web3uikit/core";
import { useSession } from "next-auth/react";
import WalletAdaptor from "../app/components/loginBtn/walletAdaptor";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      session && status === "authenticated" && router.push("./user");
    });
  }, [session, status]);

  useEffect(() => {
    startTransition(() => {
      session && console.log(session);
    });
  }, [session]);

  return (
    <div className={styles.body}>
      {!isPending && (
        <div className={styles.card}>
          <>
            {!session ? (
              <>
                <Typography variant="body18">
                  Select Wallet for Authentication
                </Typography>
                <br />
                <WalletAdaptor />
              </>
            ) : (
              <Typography variant="caption14">Loading...</Typography>
            )}
          </>
        </div>
      )}
    </div>
  );
}

```



## Logout and User Profile Component

8. Create components to perform the logout operation and to show the user data. 

<Tabs groupId="programming-language">
<TabItem value="typescript" label="logoutBtn.js" default>

```typescript logoutBtn.js
// File path
// app/components/logoutBtn/logoutBtn.js

import React from "react";
import { Button } from "@web3uikit/core";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <Button text="Logout" theme="outline" onClick={() => signOut()}></Button>
  );
}

```

</TabItem>
<TabItem value="typescript-1" label="userData.js">

```typescript userData.js
// File path
// app/components/logoutBtn/userData.js

import React from "react";
import styles from "../../../styles/User.module.css";
import { Typography } from "@web3uikit/core";
import { useSession } from "next-auth/react";

export default function UserData() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <div className={styles.data}>
        <div className={styles.dataCell}>
          <Typography variant="subtitle2">Profile Id:</Typography>
          <div className={styles.address}>
            <Typography variant="body16">{session?.user.profileId}</Typography>
          </div>
        </div>
        <div className={styles.dataCell}>
          <Typography variant="subtitle2">Account:</Typography>
          <div className={styles.address}>
            {/* account address */}
            <Typography copyable variant="body16">
              {session?.user.address}
            </Typography>
          </div>
        </div>
        <div className={styles.dataCell}>
          <Typography variant="subtitle2">Network:</Typography>
          <div className={styles.address}>
            <Typography variant="body16">{session?.user.network}</Typography>
          </div>
        </div>
        <div className={styles.dataCell}>
          <Typography variant="subtitle2">ExpTime:</Typography>
          <div className={styles.address}>
            <Typography variant="body16">
              {session?.user.expirationTime}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

```

</TabItem>
</Tabs>


## Showing the User Profile

9. Let's create a `user.jsx` page to view user data when the user is logged in. 

```javascript
import React, { useEffect, useTransition } from "react";
import styles from "../styles/User.module.css";
import { getSession, signOut } from "next-auth/react";
import UserData from "../app/components/userData/userData";
import LogoutBtn from "../app/components/logoutBtn/logoutBtn";
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
require("@solana/wallet-adapter-react-ui/styles.css");


export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: "/" } };
  }
  return {
    props: { userSession: session },
  };
}

export default function Home({ userSession }) {
  const { publicKey, disconnecting, connected } = useWallet();
  const [isPending, startTransition] = useTransition();

  console.log(userSession);

  useEffect(() => {
    startTransition(() => {
      publicKey && console.log(publicKey.toBase58());
    });
  }, [publicKey]);

  useEffect(() => {
    startTransition(() => {
      disconnecting && signOut();
    });
  }, [disconnecting]);

  useEffect(() => {
    startTransition(() => {
      console.log({ disconnecting });
    });
  }, [disconnecting]);

  if (userSession) {
    return (
      <div className={styles.body}>
        {!isPending && (
          <div className={styles.card}>
            <>
              <UserData />
              <div className={styles.buttonsRow}>
                {connected || disconnecting ? (
                  <WalletDisconnectButton />
                ) : (
                  <LogoutBtn />
                )}
              </div>
            </>
          </div>
        )}
      </div>
    );
  }
}

```



## Testing with any Solana Wallet

Visit [`http://localhost:3000`](http://localhost:3000`) to test the authentication.

1. Click on the `Select Wallet` button to select and connect to wallet:

![](/img/content/31c94d0-image.png)

2. Connect to the Solana wallet extension

![](/img/content/d7eb605-image.png)

![](/img/content/a7e2b4f-image.png)

3. Sign the message:

![](/img/content/08970f7-image.png)

4. After successful authentication, you will be redirected to the `/user` page:

![](/img/content/44500ea-image.png)

And that completes the authentication process for Solana wallets using the Solana wallet adapter.