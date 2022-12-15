---
title: "How to sign in with MetaMask"
slug: "../how-to-sign-in-with-metamask"
description: "Learn how Moralis authentication works and see how to add secure authentication to your NextJS dapp. This tutorial covers how to create full-stack Web3 authentication using the popular NextJS framework."
---
![Result of Using Moralis Web3 Authentication with MetaMask](/img/content/d73d147-metamask.gif)

## Introduction

This tutorial demonstrates how to create a NextJS application that allows users to log in using their Web3 wallets.

After Web3 wallet authentication, the **[next-auth](https://next-auth.js.org/)** library creates a session cookie with an encrypted **[JWT](https://jwt.io/introduction)** (**JWE**) stored inside. It contains session info (such as an address, signed message, and expiration time) in the user's browser. It's a secure way to store users' info without a database, and it's impossible to read/modify the **JWT** without a [secret key](https://next-auth.js.org/configuration/options#secret).

Once the user is logged in, they will be able to visit a page that displays all their user data.

You can find the repository with the final code here: <https://github.com/MoralisWeb3/demo-apps/tree/main/nextjs_moralis_auth>.

![The above shows what the user will see once they log in using their wallet.](/img/content/9094178-1bc0b65-Untitled.png)

:::info 

You can find the final dapp with implemented style on our [GitHub](https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/beta/demos/nextjs).

:::

## Prerequisites

1. Create a [Moralis account](https://www.moralis.io).
2. Install and set up [Visual Studio](https://code.visualstudio.com/).
3. Create your NextJS dapp (you can create it using **[create-next-app](https://nextjs.org/docs/api-reference/create-next-app)** or follow the **[NextJS dapp](/web3-data-api/quickstart-nextjs)** tutorial).

## Install the Required Dependencies

1. Install `moralis` and `@moralisweb3/next` (if not installed) and `next-auth`dependencies:

```bash npm2yarn
npm install moralis @moralisweb3/next next-auth
```

2. To implement authentication using a Web3 wallet (e.g., MetaMask), we need to use a Web3 library. For the tutorial, we will use [wagmi](https://wagmi.sh/docs/getting-started). So, install the `wagmi` dependency:

```bash npm2yarn
npm install wagmi ethers
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



:::danger

Keep your `NEXTAUTH_SECRET` value in secret to prevent security problems.

:::

:::caution

Every time you modify the `.env.local` file, you need to restart your dapp.

:::

## Wrapping App with `WagmiConfig` and `SessionProvider`

4. Create the `pages/_app.jsx` file. We need to wrap our pages with `WagmiConfig` ([docs](https://wagmi.sh/docs/WagmiConfig)) and `SessionProvider` ([docs](https://next-auth.js.org/getting-started/client#sessionprovider)):

```javascript
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
```



:::info 
> 
> NextJS uses the `App` component to initialize pages. You can override it and control the page initialization. Check out the [NextJS docs](https://nextjs.org/docs/advanced-features/custom-app).

## Configure Next-Auth and MoralisNextAuth

5. Create a new file, `pages/api/auth/[...nextauth].ts`, with the following content:

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



6. Add an authenticating config to the `pages/api/moralis/[...moralis].ts`:

```
import { MoralisNextApi } from '@moralisweb3/next';

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY,
  authentication: {
    domain: 'amazing.dapp',
    uri: process.env.NEXTAUTH_URL,
    timeout: 120,
  },
});
```



## Create Sign-In Page

7. Create a new page file, `pages/signin.jsx`, with the following content:

```javascript
function SignIn() {
    return (
        <div>
            <h3>Web3 Authentication</h3>
        </div>
    );
}

export default SignIn;
```



8. Let's create a button for enabling our Web3 provider and `console.log` users' information:

```javascript
import { useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

function SignIn() {
    const { connectAsync } = useConnect();

    const handleAuth = async () => {
        const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

        const userData = { address: account, chainId: chain.id };

        console.log(userData)
    };

    return (
        <div>
            <h3>Web3 Authentication</h3>
            <button onClick={handleAuth}>Authenticate via Metamask</button>
        </div>
    );
}

export default SignIn;
```



![Web3 Authentication Page](/img/content/2dc7cb6-Untitled.png)

9. Extend the `handleAuth` functionality for calling `useSignMessage()` hook: 

```javascript
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';

function SignIn() {
    const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { requestChallengeAsync } = useAuthRequestChallengeEvm();

    const handleAuth = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

        const { message } = await requestChallengeAsync({ address: account, chainId: chain.id });

        const signature = await signMessageAsync({ message });
      
        console.log(signature)

    };

    return (
        <div>
            <h3>Web3 Authentication</h3>
            <button onClick={handleAuth}>Authenticate via Metamask</button>
        </div>
    );
}

export default SignIn;

```



## Secure Authentication after Signing and Verifying the Signed Message

10. Return to the `pages/signin.jsx` file. Let's add the `next-auth` authentication: 

```javascript
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';

function SignIn() {
    const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { requestChallengeAsync } = useAuthRequestChallengeEvm();
    const { push } = useRouter();

    const handleAuth = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

        const { message } = await requestChallengeAsync({ address: account, chainId: chain.id });

        const signature = await signMessageAsync({ message });

        // redirect user after success authentication to '/user' page
        const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/user' });
        /**
         * instead of using signIn(..., redirect: "/user")
         * we get the url from callback and push it to the router to avoid page refreshing
         */
        push(url);
    };

    return (
        <div>
            <h3>Web3 Authentication</h3>
            <button onClick={handleAuth}>Authenticate via Metamask</button>
        </div>
    );
}

export default SignIn;

```



## Showing the User Profile

11. Let's create a user page, `pages/user.jsx`, with the following content:

```javascript
import { getSession, signOut } from 'next-auth/react';

// gets a prop from getServerSideProps
function User({ user }) {
    return (
        <div>
            <h4>User session:</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => signOut({ redirect: '/signin' })}>Sign out</button>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    
    // redirect if not authenticated
    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
}

export default User;
```



## Testing the MetaMask Wallet Connector

Visit [`http://localhost:3000/signin`](http://localhost:3000/signin`) to test the authentication.

1. Click on the `Authenticate via Metamask` button:

![Sign-In Page](/img/content/1e597e7-12.png)

2. Connect the MetaMask wallet:

![Selecting a MetaMask Wallet](/img/content/3b5a4b9-38.png)

![MetaMask Wallet Connecting](/img/content/a504ae5-56.png)

3. Sign the message:

![Signing the Message](/img/content/d5e9a3b-105.png)

4. After successful authentication, you will be redirected to the `/user` page:

![User Page](/img/content/23c7fde-142.png)

5. Visit [`http://localhost:3000/user`](http://localhost:3000/user`) to test the user session functionality: 

- When a user authenticates, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page. 
- When a user is authenticated, we show the user's info on the page, even refreshing after the page. 
  - (**Explanation:** _After Web3 wallet authentication, the `next-auth` library creates a session cookie with an encrypted **[JWT](https://jwt.io/introduction)** (**JWE**) stored inside. It contains session info [such as an address and signed message] in the user's browser.)_

![User Session Page](/img/content/1bc0b65-Untitled.png)