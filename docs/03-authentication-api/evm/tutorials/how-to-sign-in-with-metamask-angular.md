---
title: "How to Authenticate Users with MetaMask using Angular"
slug: "../how-to-sign-in-with-metamask-angular"
description: "Learn how Moralis authentication works and see how to add secure authentication to your Angular dapp. This tutorial covers how to create full-stack Web3 authentication using the popular Angular framework."
---

## Introduction

This tutorial demonstrates how to create an Angular application that allows users to log in using their Web3 wallets.

After Web3 wallet authentication, the server creates a session cookie with a signed [JWT](https://jwt.io/introduction) stored inside. It contains session info (such as an address, signed message) in the user's browser.

Once the user is logged in, they will be able to visit a page that displays all their user data.

## Prerequisites

1. Follow the [Your First Dapp - Angular](/web3-data-api/evm/quickstart-angular) tutorial to set up your Angular dapp and server

## Install the Required Dependencies

To implement authentication using a Web3 wallet (e.g., MetaMask), we will use a Web3 library. For the tutorial, we will use [@wagmi/core](https://github.com/wagmi-dev/wagmi/tree/main/packages/core).

1. Install `@wagmi/core`, `@wagmi/connectors`, `viem@2.x`, and `axios` dependencies.

```bash npm2yarn
npm install @wagmi/core @wagmi/connectors viem@2.x
```

2. Generate an environment file for our Angular app:

```bash npm2yarn
ng generate environments
```

3. Open `src/environments/environment.ts` and `src/environments/environment.prod.ts` - add a variable of `SERVER_URL` for our server.

```typescript
export const environment = {
  SERVER_URL: "http://localhost:3000",
};
```

4. We will generate two components (pages) - `/signin` (to authenticate) and `/user` (to show the user profile):

```shell
ng generate component signin
ng generate component user
```

5. Open `src/app/app.routes.ts`, add these two components as routes:

```typescript
import { SigninComponent } from "./signin/signin.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "user", component: UserComponent },
];
```

## Initial Setup

We will do an initial setup of our `/signin` and `/user` pages to make sure they work before integrating with our server.

1. Open `src/app/signin/signin.component.html` and replace the contents with:

```typescript
<h3>Web3 Authentication</h3>
<button type="button" (click)="handleAuth()">Authenticate via MetaMask</button>
```

2. Open `src/app/signin/signin.component.ts` and add an empty `handleAuth` function below `ngOnInit(): void {}`:

```typescript
ngOnInit(): void {}

async handleAuth() {}
```

3. Run `npm run start` and open [`http://localhost:4200/signin`](http://localhost:4200/signin) in your browser. It should look like:

![](/img/content/0fa10de-Angular_Sign_In_With_MetaMask_1.webp)

4. Import `NgIf` in `src/app/user/user.component.ts`:

```typescript
import { Component } from "@angular/core";
import { NgIf } from "@angular/common"; // Import NgIf

@Component({
  selector: "app-user",
  standalone: true,
  imports: [NgIf], // Include NgIf in the imports array
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent {}
```

5. Open `src/app/user/user.component.html` and replace the contents with:

```typescript
<div *ngIf="session">
  <h3>User session:</h3>
  <pre>{{ session }}</pre>
  <button type="button" (click)="signOut()">Sign out</button>
</div>
```

6. Open `src/app/user/user.component.ts` and add the variable we used above and an empty `signOut()` function:

```typescript
session = '';

ngOnInit(): void {}

async signOut() {}
```

## Server Setup

Now we will update our server's `index.js` for the code we need for authentication. In this demo, cookies will be used for the user data.

1. Install the required dependencies for our server:

```shell
npm install cookie-parser jsonwebtoken dotenv
```

2. Create a file called `.env` in your server's root directory (where `package.json` is):

- **APP_DOMAIN**: RFC 4501 DNS authority that is requesting the signing.
- **MORALIS_API_KEY**: You can get it [here](https://admin.moralis.com/account/profile).
- **ANGULAR_URL**: Your app address. By default Angular uses [`http://localhost:4200`](http://localhost:4200/).
- **AUTH_SECRET**: Used for signing JWT tokens of users. You can put any value here or generate it on [`https://generate-secret.now.sh/32`](https://generate-secret.now.sh/32). Here's an `.env` example:

```
APP_DOMAIN=localhost
MORALIS_API_KEY=xxxx
ANGULAR_URL=http://localhost:4200
AUTH_SECRET=1234
```

3. Open `index.js`. We will create a `/request-message` endpoint for making requests to `Moralis.Auth` to generate a unique message (Angular will use this endpoint on the `/signin` page):

```javascript
// to use our .env variables
require("dotenv").config();

// for our server's method of setting a user session
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const config = {
  domain: process.env.APP_DOMAIN,
  statement: "Please sign this message to confirm your identity.",
  uri: process.env.ANGULAR_URL,
  timeout: 60,
};

app.post("/request-message", async (req, res) => {
  const { address, chain } = req.body;

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      ...config,
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});
```

4. We will create a `/verify` endpoint for verifying the signed message from the user. After the user successfully verifies, they will be redirected to the `/user` page where their info will be displayed.

```javascript
app.post("/verify", async (req, res) => {
  try {
    const { message, signature } = req.body;

    const { address, profileId } = (
      await Moralis.Auth.verify({
        message,
        signature,
        networkType: "evm",
      })
    ).raw;

    const user = { address, profileId, signature };

    // create JWT token
    const token = jwt.sign(user, process.env.AUTH_SECRET);

    // set JWT cookie
    res.cookie("jwt", token, {
      httpOnly: true,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});
```

5. We will create an `/authenticate` endpoint for checking the JWT cookie we previously set to allow the user access to the `/user` page:

```javascript
app.get("/authenticate", async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) return res.sendStatus(403); // if the user did not send a jwt token, they are unauthorized

  try {
    const data = jwt.verify(token, process.env.AUTH_SECRET);
    res.json(data);
  } catch {
    return res.sendStatus(403);
  }
});
```

6. Lastly we will create a `/logout` endpoint for removing the cookie.

```javascript
app.get("/logout", async (req, res) => {
  try {
    res.clearCookie("jwt");
    return res.sendStatus(200);
  } catch {
    return res.sendStatus(403);
  }
});
```

Your final `index.js` should look like this:

```javascript
const Moralis = require("moralis").default;

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

// allow access to Angular app domain
app.use(
  cors({
    origin: process.env.ANGULAR_URL,
    credentials: true,
  })
);

const config = {
  domain: process.env.APP_DOMAIN,
  statement: "Please sign this message to confirm your identity.",
  uri: process.env.ANGULAR_URL,
  timeout: 60,
};

// request message to be signed by client
app.post("/request-message", async (req, res) => {
  const { address, chain } = req.body;

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      ...config,
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});

// verify message signed by client
app.post("/verify", async (req, res) => {
  try {
    const { message, signature } = req.body;

    const { address, profileId } = (
      await Moralis.Auth.verify({
        message,
        signature,
        networkType: "evm",
      })
    ).raw;

    const user = { address, profileId, signature };

    // create JWT token
    const token = jwt.sign(user, process.env.AUTH_SECRET);

    // set JWT cookie
    res.cookie("jwt", token, {
      httpOnly: true,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});

// verify JWT cookie to allow access
app.get("/authenticate", async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) return res.sendStatus(403); // if the user did not send a jwt token, they are unauthorized

  try {
    const data = jwt.verify(token, process.env.AUTH_SECRET);
    res.json(data);
  } catch {
    return res.sendStatus(403);
  }
});

// remove JWT cookie
app.get("/logout", async (req, res) => {
  try {
    res.clearCookie("jwt");
    return res.sendStatus(200);
  } catch {
    return res.sendStatus(403);
  }
});

const startServer = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();
```

7. Run `npm run start` to make sure your server runs without immediate errors.

```shell
node index.js
```

## Bringing It All Together

Now we will finish setting up our Angular pages to integrate with our server.

1. Open `src/app/signin/signin.component.ts`. Add our required imports:

```typescript
import { Component } from "@angular/core";
// for navigating to other routes
import { Router } from "@angular/router";

// for making HTTP requests
import axios from "axios";

import {
  connect,
  disconnect,
  getAccount,
  injected,
  signMessage,
} from "@wagmi/core";
import { http, createConfig } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";

import { environment } from "../../environments/environment";
```

2. Add this code to set up the Wagmi client:

```typescript
export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
```

3. Replace our empty `handleAuth()` function with the following:

```typescript
  async handleAuth() {
    const { isConnected } = getAccount(config);

    if (isConnected) await disconnect(config); //disconnects the web3 provider if it's already active

    const provider = await connect(config, { connector: injected() }); // enabling the web3 provider metamask

    const userData = {
      address: provider.accounts[0],
      chain: provider.chainId,
    };

    const { data } = await axios.post(
      `${environment.SERVER_URL}/request-message`,
      userData
    );

    const message = data.message;

    const signature = await signMessage(config, { message });

    await axios.post(
      `${environment.SERVER_URL}/verify`,
      {
        message,
        signature,
      },
      { withCredentials: true } // set cookie from Express server
    );

    // redirect to /user
    this.router.navigateByUrl('/user');
  }
```

4. The full `signin.component.ts` should look like:

```typescript
import { Component } from "@angular/core";
// for navigating to other routes
import { Router } from "@angular/router";

// for making HTTP requests
import axios from "axios";

import {
  connect,
  disconnect,
  getAccount,
  injected,
  signMessage,
} from "@wagmi/core";
import { http, createConfig } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";

import { environment } from "../../environments/environment";

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

@Component({
  selector: "app-signin",
  standalone: true,
  imports: [],
  templateUrl: "./signin.component.html",
  styleUrl: "./signin.component.css",
})
export class SigninComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  async handleAuth() {
    const { isConnected } = getAccount(config);

    if (isConnected) await disconnect(config); //disconnects the web3 provider if it's already active

    const provider = await connect(config, { connector: injected() }); // enabling the web3 provider metamask

    const userData = {
      address: provider.accounts[0],
      chain: provider.chainId,
    };

    const { data } = await axios.post(
      `${environment.SERVER_URL}/request-message`,
      userData
    );

    const message = data.message;

    const signature = await signMessage(config, { message });

    await axios.post(
      `${environment.SERVER_URL}/verify`,
      {
        message,
        signature,
      },
      { withCredentials: true } // set cookie from Express server
    );

    // redirect to /user
    this.router.navigateByUrl("/user");
  }
}
```

5. Open `src/app/user/user.component.ts`. Add our required imports:

```typescript
import { Router } from "@angular/router";

import axios from "axios";

import { environment } from "../../environments/environment";
```

6. Replace `ngOnInit(): void {}` with:

```typescript
async ngOnInit() {
  try {
    const { data } = await axios.get(
      `${environment.SERVER_URL}/authenticate`,
      {
        withCredentials: true,
      }
    );

    const { iat, ...authData } = data; // remove unimportant iat value

    this.session = JSON.stringify(authData, null, 2); // format to be displayed nicely
  } catch (err) {
    // if user does not have a "session" token, redirect to /signin
    this.router.navigateByUrl('/signin');
  }
}
```

7. Replace our empty `signOut()` function with the following:

```typescript
async signOut() {
  await axios.get(`${environment.SERVER_URL}/logout`, {
    withCredentials: true,
  });
  this.router.navigateByUrl('/signin');
}
```

8. The full `user.component.ts` should look like:

```typescript
import { Component } from "@angular/core";
import { NgIf } from "@angular/common"; // Import NgIf
import { Router } from "@angular/router";
import axios from "axios";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [NgIf], // Include NgIf in the imports array
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent {
  constructor(private router: Router) {}

  session = "";

  async ngOnInit() {
    try {
      const { data } = await axios.get(
        `${environment.SERVER_URL}/authenticate`,
        {
          withCredentials: true,
        }
      );

      const { iat, ...authData } = data; // remove unimportant iat value

      this.session = JSON.stringify(authData, null, 2); // format to be displayed nicely
    } catch (err) {
      // if user does not have a "session" token, redirect to /signin
      this.router.navigateByUrl("/signin");
    }
  }

  async signOut() {
    await axios.get(`${environment.SERVER_URL}/logout`, {
      withCredentials: true,
    });
    this.router.navigateByUrl("/signin");
  }
}
```

If you get errors related to default imports, open your `tsconfig.app.json` file and add `"allowSyntheticDefaultImports": true` under `compilerOptions`:

```json
"compilerOptions": {
  "allowSyntheticDefaultImports": true,
  "outDir": "./out-tsc/app",
  "types": []
}
```

## Testing the MetaMask Wallet Connector

Visit [`http://localhost:4200/signin`](http://localhost:4200/signin) to test the authentication.

1. Click on the `Authenticate via MetaMask` button:

![](/img/content/4ecf341-Angular_Sign_In_With_MetaMask_1.webp)

2. Connect the MetaMask wallet and sign the message:

![Signing the Message](/img/content/4dbf978-Angular_Sign_In_With_MetaMask_3.webp)

3. After successful authentication, you will be redirected to the `/user` page:

![User Page](/img/content/8c884b1-Angular_Sign_In_With_MetaMask_4.webp)

- When a user authenticates, we show the user's info on the page.
- When a user is not authenticated, we redirect to the `/signin` page.
- When a user is authenticated, we show the user's info on the page, even refreshing after the page.
