---

title: "How to Build Real-Time Crypto Charts with TradingView and Moralis OHLCV API"
slug: "../how-to-build-tradingview-crypto-charts"
description: "Learn how to create professional-grade cryptocurrency charts using TradingView's Lightweight Charts library and Moralis' OHLCV API. Build interactive candlestick charts with real-time price data across multiple chains."
sidebar_label: "Build TradingView Crypto Charts"
sidebar_position: 1
tags: [
"TradingView Charts",
"OHLCV API",
"Moralis API",
"Crypto Charts",
"Price Charts API",
"Technical Analysis"
]
keywords: [
"tradingview lightweight charts",
"crypto price charts",
"OHLCV data API",
"candlestick charts",
"cryptocurrency charts",
"real-time crypto data",
"trading charts API",
"technical analysis charts",
"Moralis price data",
"crypto charting library"
]

---

# Building a Crypto Trading Chart with Moralis OHLCV API and TradingView

This tutorial will guide you through creating a React application that displays cryptocurrency trading charts using Moralis' OHLCV API and TradingView's Lightweight Charts library.

## Watch the Full Video Tutorial

To see a complete walkthrough of building real-time crypto charts using TradingView's Lightweight Charts and Moralis' OHLCV API, check out the video tutorial below:

[![Watch the video](https://img.youtube.com/vi/Yo3aNhVLFq0/0.jpg)](https://youtu.be/Yo3aNhVLFq0)

## Prerequisites

- Node.js installed on your system
- Basic understanding of React
- A Moralis account for API access

## Step 1: Project Setup

1. Create a new React project:

```bash
npx create-react-app crypto-charts
cd crypto-charts
```

2. Install required dependencies:

```bash
npm install lightweight-charts axios react-spinners
```

3. Sign up at [Moralis](https://developers.moralis.io):

   - Create an account
   - Go to "Web3 APIs" section
   - Create a new API key
   - Copy your API key

4. Create a `.env` file in your project root:

```
REACT_APP_MORALIS_API_KEY=YOUR_API_KEY
```

## Step 2: Create Basic Components

1. Create a ChainSelector component (`src/components/ChainSelector.js`):

```javascript
import React from "react";
const chains = [
  { id: "eth", name: "Ethereum", icon: "🔷" },
  { id: "bsc", name: "BSC", icon: "💛" },
  { id: "polygon", name: "Polygon", icon: "💜" },
  { id: "arbitrum", name: "Arbitrum", icon: "🔵" },
  // Add more chains as needed
];

const ChainSelector = ({ onSelect }) => (
  <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
    <option value="" disabled>
      Select a Chain
    </option>
    {chains.map((chain) => (
      <option key={chain.id} value={chain.id}>
        {chain.icon} {chain.name}
      </option>
    ))}
  </select>
);

export default ChainSelector;
```

2. Create a TokenInput component (`src/components/TokenInput.js`):

```javascript
import React, { useState } from "react";
import axios from "axios";

const TokenInput = ({ chain, onPairsFetched, onReset }) => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPairs = async () => {
    const apiKey = process.env.REACT_APP_MORALIS_API_KEY;
    const url = `https://deep-index.moralis.io/api/v2.2/erc20/${tokenAddress}/pairs?chain=${chain}`;

    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: { "X-API-Key": apiKey, accept: "application/json" },
      });

      const sortedPairs = response.data.pairs
        .map((pair) => ({
          ...pair,
          liquidity: pair.liquidity_usd || pair.liquidityUsd || 0,
        }))
        .sort((a, b) => b.liquidity - a.liquidity);

      onPairsFetched(sortedPairs);
    } catch (error) {
      console.error("Error fetching token pairs:", error);
      onPairsFetched([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Token Address"
        value={tokenAddress}
        onChange={(e) => {
          setTokenAddress(e.target.value);
          onReset();
        }}
      />
      <button onClick={fetchPairs} disabled={!tokenAddress || !chain}>
        Fetch Pairs
      </button>
      {loading && <div>Loading pairs...</div>}
    </div>
  );
};

export default TokenInput;
```

## Step 3: Implement the Chart Component

Create CandlestickChart component (`src/components/CandlestickChart.js`):

```javascript
import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const CandlestickChart = ({ candlestickData }) => {
  const chartContainerRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    if (!chartRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.offsetWidth || 800,
        height: 400,
        layout: {
          backgroundColor: "#ffffff",
          textColor: "#333",
        },
        grid: {
          vertLines: { color: "#f0f3fa" },
          horzLines: { color: "#f0f3fa" },
        },
        timeScale: {
          timeVisible: true,
          borderVisible: true,
        },
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#4caf50",
        downColor: "#f44336",
        borderVisible: false,
        wickUpColor: "#4caf50",
        wickDownColor: "#f44336",
      });

      chartRef.current = { chart, candlestickSeries };
    }

    if (candlestickData.length > 0) {
      chartRef.current.candlestickSeries.setData(candlestickData);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.chart.remove();
        chartRef.current = null;
      }
    };
  }, [candlestickData]);

  return (
    <div
      ref={chartContainerRef}
      style={{ position: "relative", height: "400px" }}
    />
  );
};

export default CandlestickChart;
```

## Step 4: Implement Main App Component

Update your `App.js`:

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";
import ChainSelector from "./components/ChainSelector";
import TokenInput from "./components/TokenInput";
import CandlestickChart from "./components/CandlestickChart";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [chain, setChain] = useState("");
  const [pairs, setPairs] = useState([]);
  const [selectedPair, setSelectedPair] = useState("");
  const [candlestickData, setCandlestickData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCandlestickData = async (pairAddress) => {
    if (!pairAddress) return;

    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_MORALIS_API_KEY;
      const currentTime = Math.floor(Date.now() / 1000);
      const fromDate = currentTime - 30 * 24 * 60 * 60; // 30 days ago

      const response = await axios.get(
        `https://deep-index.moralis.io/api/v2.2/pairs/${pairAddress}/ohlcv`,
        {
          params: {
            chain,
            timeframe: "1d",
            currency: "usd",
            fromDate,
            toDate: currentTime,
            limit: 1000,
          },
          headers: { "X-API-Key": apiKey },
        }
      );

      const formattedData = response.data.result.map((item) => ({
        time: Math.floor(new Date(item.timestamp).getTime() / 1000),
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
      }));

      setCandlestickData(formattedData);
    } catch (error) {
      console.error("Error fetching candlestick data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedPair) {
      fetchCandlestickData(selectedPair);
    }
  }, [selectedPair]);

  return (
    <div className="app-container">
      <h1>Crypto Trading Charts</h1>

      <div className="controls-container">
        <ChainSelector onSelect={setChain} />

        <TokenInput
          chain={chain}
          onPairsFetched={setPairs}
          onReset={() => {
            setPairs([]);
            setSelectedPair("");
            setCandlestickData([]);
          }}
        />

        {pairs.length > 0 && (
          <select
            value={selectedPair}
            onChange={(e) => setSelectedPair(e.target.value)}
          >
            {pairs.map((pair) => (
              <option key={pair.pairAddress} value={pair.pairAddress}>
                {pair.pairLabel} (${Math.round(pair.liquidity).toLocaleString()})
              </option>
            ))}
          </select>
        )}
      </div>

      {loading ? (
        <div className="loading-spinner">
          <ClipLoader color="#2196f3" size={50} />
        </div>
      ) : (
        candlestickData.length > 0 && (
          <div className="chart-container">
            <CandlestickChart candlestickData={candlestickData} />
          </div>
        )
      )}
    </div>
  );
};

export default App;
```

## Step 5: Add Styling

Create `src/styles.css`:

```css
.app-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.controls-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto 2rem auto;
}

select,
input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  background: #2196f3;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

button:disabled {
  background: #e0e0e0;
  cursor: not-allowed;
}

.chart-container {
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.loading-spinner {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
```

## Step 6: Final Setup

1. Import the styles in your `App.js`:

```javascript
import "./styles.css";
```

2. Start the development server:

```bash
npm start
```

## Using the Application

1. Select a blockchain network from the dropdown
2. Enter a token address (e.g., USDT, WETH, etc.)
3. Click "Fetch Pairs" to get available trading pairs
4. Select a trading pair to view its price chart
5. The chart will display OHLCV data for the last 30 days

## Additional Features to Consider

1. Add technical indicators (MA, RSI, etc.)
2. Implement different timeframe selection
3. Add volume display
4. Include price statistics
5. Add export functionality for chart data

## Common Issues and Solutions

1. If you get CORS errors, make sure your API key is correct
2. If charts don't display, check console for errors
3. If data doesn't load, verify the token address is correct for the selected chain

## Resources

<ul>
  <li><a href="https://docs.moralis.com">Moralis Documentation</a></li>
  <li><a href="https://tradingview.github.io/lightweight-charts/">TradingView Lightweight Charts Documentation</a></li>
  <li><a href="https://reactjs.org">React Documentation</a></li>
</ul>
