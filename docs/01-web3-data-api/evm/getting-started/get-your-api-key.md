---
title: "Setting Up Moralis: Getting Started"
slug: "../get-your-api-key"
description: "How to set up your Moralis account and get started"
sidebar_position: 2
---

Whether you are new to blockchain development or a seasoned developer, this guide serves as your gateway to unlocking the potential of seamless blockchain development.

This step-by-step tutorial shows how to set up your Moralis account, get your Moralis API Key, and install the Moralis SDK in your project.

## Prerequisites

Make sure that you have the installed all the following prerequisites:

<ul>
  <li><a href="https://nodejs.org/">Node.js</a> v14+ or [Python](https://www.python.org/downloads/)</li>
  <li><a href="https://www.npmjs.com/">NPM</a> /[Yarn](https://classic.yarnpkg.com/en/) or [Pip](https://pip.pypa.io/en/stable/)</li>
</ul>

## Step 1: Create Your Account

To begin, create your **free Moralis account** by visiting the [Moralis Dashboard](https://admin.moralis.com/register).

<img loading="eager" alt="Moralis Admin (Sign Up)" src="/img/content/d8b5b3d-Screen_Shot_2022-10-24_at_14.45.21.webp" width="1024" height="582" />

## Step 2: Get API Key

To begin, you need to get your Web3 Api Key, which serves as your access pass to Moralis's suite of services:

1. Log in to your [Moralis dashboard](https://admin.moralis.com/)
2. Navigate to your project’s **Settings > Secrets**, and copy the value from **Web3 API Key - Default**.

:::info Secure Your API Key - Best Practices for Cybersecurity
Protecting your API key is critical in safeguarding your sensitive account information. Adhere to these cybersecurity best practices to ensure optimal API security:

- **Restrict Access:** Only grant access to authorized users, ensuring secure user management.
- **Avoid Version Control Exposure:** Exclude the key from any version control systems to prevent unauthorized access and potential data breaches.
- **Leverage Secret Management Services:** Utilize reputable password managers or secret management services for enhanced security.
- **Prevent Public Exposure:** Do not embed the secret API key in publicly accessible web applications or forums, mitigating the risk of unauthorized access.
  :::

## Step 3: Installing Moralis SDK

With your Moralis API Key in hand, it's time to install the Moralis SDK in your project. The Moralis SDK acts as the bridge connecting your application to Moralis services, unlocking a world of possibilities for blockchain development.

You can install the Moralis SDK via one of the following commands:

### NPM

```bash
npm install moralis @moralisweb3/common-evm-utils
```

### Yarn

```bash
yarn add moralis @moralisweb3/common-evm-utils
```

### Pnpm

```bash
pnpm add moralis @moralisweb3/common-evm-utils
```

### Pip

```bash
pip install moralis
```

## Next Steps

Congratulations! You have successfully set up your Moralis account, obtained your Moralis API Key, and installed the Moralis SDK in your project.

Now you are ready to dive deeper into Moralis and explore its features.
Happy coding with Moralis!
