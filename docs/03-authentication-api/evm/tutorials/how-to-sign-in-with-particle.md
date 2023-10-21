---
title: "How to Authenticate Users with Particle Network"
slug: "../how-to-sign-in-with-particle"
description: "This tutorial will teach you how to add secure Web3 Moralis authentication to your NextJS application by walking you through the process of creating a full-stack Web3 authentication solution using the popular NextJS framework."
---

<video controls>
	<source src="/video/particle.mp4"/>
</video>

## What is Particle Network?

:::info

Visit [Particle Network docs](https://docs.particle.network/) to get more information.

:::

**Particle Network** is the Intent-Centric, Modular Access Layer of Web3. With Particle's Wallet-as-a-Service, developers can curate unparalleled user experience through modular and customizable EOA/AA embedded wallet components. By utilizing MPC-TSS for key management, Particle can streamline onboarding via familiar Web2 accounts—such as Google accounts, email addresses, and phone numbers.

## Before Starting

You can start this tutorial if you already have a NextJS dapp with [MetaMask sign-in](/authentication-api/evm/how-to-sign-in-with-metamask) functionality.

## Installing Particle Connect & associated dependencies

Install the `@particle-network/connect-react-ui` dependency:
```bash npm2yarn
npm install @particle-network/connext-react-ui
```

Install the `@particle-network/connect` dependency:
```bash npm2yarn
npm install @particle-network/connect
```

Install the `@particle-network/chains` dependency:
```bash npm2yarn
npm install @particle-network/chains
```

## Configuring Particle Connect
1. Open the `pages/signin.jsx` file and structure your code to instead use Particle Connect's `ModalProvider` for handling initial connection, along with `useAccount` and `useConnectKit` for handling wallet interaction.

```javascript
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAccount, ConnectButton, useConnectKit, ModalProvider } from '@particle-network/connect-react-ui';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import { signIn } from 'next-auth/react';
import { Ethereum } from '@particle-network/chains';
import { evmWallets } from '@particle-network/connect';
import '@particle-network/connect-react-ui/dist/index.css';

export default function SignIn() {
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();
  const account = useAccount();
  const connect = useConnectKit();

  useEffect(() => {
    if (account) {
      (async () => {
        const { message } = await requestChallengeAsync({
          address: account,
          chainId: '0x1',
        });
        
        const signature = await connect.particle.evm.personalSign(`0x${Buffer.from(message).toString('hex')}`); // Conversion to hex, then signing with connected Particle account (whether that be through Particle Auth or otherwise)

        const result = await signIn("moralis-auth", {
          message,
          signature,
          redirect: false,
          callbackUrl: '/user',
        });

        if (result && result.url) {
          push(result.url);
        }
      })();
    }
  }, [account]);

  return (
    <ModalProvider
      options={{ // Options for Particle Auth; the projectId, clientKey, and appId can be retrieved from https://dashboard.particle.network/
        projectId: process.env.PARTICLE_PROJECT_ID,
        clientKey: process.env.PARTICLE_CLIENT_KEY,
        appId: process.env.PARTICLE_APP_ID,
        chains: [Ethereum],
        wallets: evmWallets({ showQrModal: true, projectId: process.env.WALLETCONNECT_PROJECT_ID }), // WalletConnect for Web3 wallet connections (non Particle Auth)
      }}
    >
      <div>
        <h3>Web3 Authentication</h3>
        <ConnectButton />
      </div>
    </ModalProvider>
  );
}
```

### Testing Particle Connect
Visit [`http://localhost:3000/signin`](http://localhost:3000/signin) to test authentication.

1. Click on `Connect Wallet`
This leverages Particle Connect; login can be initiated through either a social login with Particle Auth, or a supported Web3 (EVM) wallet.

![Connect Wallet](/img/content/particle-connect.webp)

2. Choose a sign-in method

![Sign In](/img/content/particle-page.webp)

3. After successful authentication, the `/user` page will be opened

![Completed Authentication](/img/content/particle-user.webp)

4. Visit [`http://localhost:3000/user`](http://localhost:3000/user) to test the user session's functionality:

- When a user is authenticated, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page.
- When a user is authenticated, we show the user's info on the page, even refreshing after the page. (_**Explanation:** After Web3 wallet authentication, the `next-auth` library creates a session cookie with an encrypted [JWT](https://jwt.io/introduction) [JWE] stored inside. It contains session info [such as an address and signed message] in the user's browser._)
