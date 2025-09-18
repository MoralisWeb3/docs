---
title: "Get Token Bonding Status with Moralis API"
slug: "../get-token-bonding-status"
description: "Learn how to check the bonding status of any Pump.fun token using Moralis' Solana APIs."
sidebar_label: "Get Token Bonding Status"
sidebar_position: 9
---

# Get Token Bonding Status with Moralis API

Check the **bonding status and progress** of any **Pump.fun token** using the **Moralis Solana API**. This guide will show you how to fetch the exact bonding curve progress percentage for a specific token! 🚀

## ✨ What You Can Do

Using this API, you can:

- Get the **exact bonding curve progress** for any Pump.fun token
- Check if a token is **close to graduating** from the bonding phase
- Monitor a specific token's **bonding journey**

## 🛠 Step 1: Get Your Moralis API Key

Before making API calls, you **need an API key**. Here's how to get one:

1. Go to [developers.moralis.com](https://developers.moralis.com/) and **sign up** (it's free!).
2. Navigate to the **"API Keys"** section in your dashboard.
3. Copy your **API Key** – you'll need this for making requests.

## 🔍 Step 2: Find Your Pump.fun Token Address

Every **Pump.fun token** has a **unique contract address** on Solana. You'll need this to check its bonding status.

- If you already know the token's **Solana address**, you're good to go!
- If not, you can **find it on Pump.fun** or by using the **Get Bonding Tokens API** from the previous tutorial.

Example token address:  
`H2p8S7Ssd3mrBft1bcDGnzW8KNRAGtPTtJLv1tnupump`

## ⚡ Step 3: Fetch Bonding Status via API

Visit the [token bonding status API page](https://docs.moralis.com/web3-data-api/solana/reference/get-bonding-status-by-token-address) and make an API request.

You can use **cURL, Postman, or your favorite programming language**.

### 📝 Example API Request

```sh
curl --request GET \
     --url 'https://solana-gateway.moralis.io/token/mainnet/H2p8S7Ssd3mrBft1bcDGnzW8KNRAGtPTtJLv1tnupump/bonding-status' \
     --header 'accept: application/json' \
     --header 'X-API-Key: YOUR_API_KEY'
```

### 📝 Example API Response

```json
{
  "mint": "H2p8S7Ssd3mrBft1bcDGnzW8KNRAGtPTtJLv1tnupump",
  "bondingProgress": 96.788763272986
}
```

## 📖 Step 4: Understanding the Response

The response is simple but powerful:

- `mint` → The Solana address of the token you're checking
- `bondingProgress` → The exact progress percentage of the bonding curve (0-100%)

When a token reaches 100% progress, it graduates from the bonding phase and becomes a fully tradable token on Pump.fun.

## 🛠 Step 5: Integrate into Your Project

Now that you can check a token's bonding progress, you can use it in your app!

🎯 Some ideas:

- Build a **token graduation countdown** timer
- Create a **bonding progress tracker** for specific tokens
- Develop a **notification system** that alerts users when tokens are close to graduating
- Add bonding status to a **token information dashboard**

## 📊 Code Example: Real-time Bonding Progress Tracker

Here's a JavaScript example that creates a real-time progress tracker for a specific token:

```javascript
// The token address you want to track
const tokenAddress = "H2p8S7Ssd3mrBft1bcDGnzW8KNRAGtPTtJLv1tnupump";

async function trackBondingProgress() {
  try {
    const response = await fetch(
      `https://solana-gateway.moralis.io/token/mainnet/${tokenAddress}/bonding-status`,
      {
        headers: {
          accept: "application/json",
          "X-API-Key": "YOUR_API_KEY",
        },
      }
    );

    const data = await response.json();

    // Update the progress display
    updateProgressUI(data.bondingProgress);

    // Check if graduated
    if (data.bondingProgress >= 100) {
      showGraduationMessage();
    }

    // Schedule next update
    setTimeout(trackBondingProgress, 60000); // Check every minute
  } catch (error) {
    console.error("Error fetching bonding status:", error);
  }
}

function updateProgressUI(progress) {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const remainingProgress = document.getElementById("remaining-progress");

  // Update the progress bar
  progressBar.style.width = `${progress}%`;

  // Update text display
  progressText.textContent = `${progress.toFixed(2)}%`;

  // Calculate remaining progress
  const remaining = 100 - progress;
  remainingProgress.textContent = `${remaining.toFixed(2)}% to graduation`;

  // Change color based on progress
  if (progress > 95) {
    progressBar.classList.add("almost-complete");
  } else if (progress > 75) {
    progressBar.classList.add("high-progress");
  }
}

function showGraduationMessage() {
  const container = document.getElementById("progress-container");
  container.innerHTML = `
    <div class="graduation-message">
      <h2>🎉 Congratulations! 🎉</h2>
      <p>This token has graduated from the bonding curve!</p>
      <a href="https://pump.fun/swap?in=sol&out=${tokenAddress}" target="_blank">
        Trade on Pump.fun
      </a>
    </div>
  `;
}

// Start tracking when the page loads
document.addEventListener("DOMContentLoaded", () => {
  trackBondingProgress();

  // Also fetch token metadata to display name and symbol
  fetchTokenMetadata();
});

async function fetchTokenMetadata() {
  try {
    const response = await fetch(
      `https://solana-gateway.moralis.io/token/mainnet/${tokenAddress}/metadata`,
      {
        headers: {
          accept: "application/json",
          "X-API-Key": "YOUR_API_KEY",
        },
      }
    );

    const data = await response.json();

    // Update token information
    document.getElementById("token-name").textContent = data.name;
    document.getElementById("token-symbol").textContent = data.symbol;

    if (data.logo) {
      document.getElementById("token-logo").src = data.logo;
      document.getElementById("token-logo").style.display = "block";
    }
  } catch (error) {
    console.error("Error fetching token metadata:", error);
  }
}
```

With this API, you can precisely track a token's bonding progress and know exactly when it will graduate to the next phase!

## 📚 Combining with Other APIs

For the most complete tracking experience, combine this endpoint with:

1. The **Get Bonding Tokens API** to find tokens in the bonding phase
2. The **Get Graduated Tokens API** to see which tokens have already graduated
3. Solana's regular **token metadata API** to get more details about the token

This will give you a complete view of Pump.fun tokens at every stage of their lifecycle.

## 🔄 Practical Use Case: Building a Bonding Alert System

Here's a real-world example of how you might use this API to build a bonding alert system:

1. **Fetch tokens in bonding phase** daily using the "Get Bonding Tokens" API
2. For each token, **check its bonding progress** using this API
3. **Store the progress values** in your database
4. **Calculate the rate of progress** (e.g., % change per day)
5. **Send alerts** when:
   - A token reaches 95%+ bonding completion
   - A token shows unusually rapid bonding progress
   - A token is about to graduate within 24 hours based on progress rate

This alert system could be valuable for traders looking to position themselves before tokens complete the bonding phase and potentially experience price volatility.

## 🔗 Additional Resources

<ul>
  <li><a href="https://docs.moralis.com/web3-data-api/solana">Moralis Solana API Documentation</a></li>
  <li><a href="https://pump.fun">Pump.fun Official Website</a></li>
  <li><a href="https://solana.com/developers">Solana Developer Resources</a></li>
</ul>

With these Moralis APIs, you now have programmatic access to every aspect of the Pump.fun ecosystem, allowing you to build sophisticated tools, dashboards, and trading applications!
