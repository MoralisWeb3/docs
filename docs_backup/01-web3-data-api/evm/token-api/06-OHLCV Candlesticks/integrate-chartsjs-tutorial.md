---
title: "How to Build Crypto Candlestick Charts with Chart.js and Moralis OHLCV API"
slug: "../how-to-build-chartjs-crypto-charts"
description: "Learn how to create interactive cryptocurrency candlestick charts using Chart.js and Moralis' OHLCV API. Build professional-grade financial charts with real-time price data for any token across multiple blockchains."
sidebar_label: "Build Chart.js Crypto Charts"
sidebar_position: 2
tags:
  [
    "Chart.js",
    "OHLCV API",
    "Moralis API",
    "Crypto Charts",
    "Price Charts",
    "Technical Analysis",
  ]
keywords:
  [
    "chart.js tutorial",
    "crypto candlestick charts",
    "OHLCV data visualization",
    "financial charts",
    "cryptocurrency charts",
    "chart.js candlesticks",
    "price charts API",
    "crypto data visualization",
    "Moralis price data",
    "crypto charting tutorial",
  ]
---

# Building Crypto Candlestick Charts with Chart.js and Moralis

Learn how to create professional cryptocurrency candlestick charts using Chart.js and Moralis' OHLCV API. This tutorial will guide you through building interactive financial charts that work across multiple blockchains.

## Prerequisites

- Node.js installed on your system
- Basic understanding of React
- A Moralis account for API access

## Step 1: Project Setup

1. Create a new React project:

```bash
npx create-react-app chartjs-crypto
cd chartjs-crypto
```

2. Install required dependencies:

```bash
npm install chart.js react-chartjs-2 axios react-spinners
```

3. Get your Moralis API key:

   - Sign up at [Moralis](https://developers.moralis.io)
   - Go to "Web3 APIs" section
   - Create a new API key
   - Copy your API key

4. Create a `.env` file in your project root:

```
REACT_APP_MORALIS_API_KEY=YOUR_API_KEY
```

## Step 2: Setup Chart.js Components

First, create a new file for the candlestick chart component (`src/components/CandlestickChart.js`):

```javascript
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CandlestickChart = ({ candlestickData }) => {
  const formatData = () => {
    const labels = candlestickData.map((data) =>
      new Date(data.time * 1000).toLocaleDateString()
    );

    return {
      labels,
      datasets: [
        {
          label: "High",
          data: candlestickData.map((data) => data.high),
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: false,
        },
        {
          label: "Low",
          data: candlestickData.map((data) => data.low),
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          fill: false,
        },
        {
          label: "Open",
          data: candlestickData.map((data) => data.open),
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          fill: false,
        },
        {
          label: "Close",
          data: candlestickData.map((data) => data.close),
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
          fill: false,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Cryptocurrency Price Chart",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <div className="chart-container">
      <Line options={options} data={formatData()} />
    </div>
  );
};

export default CandlestickChart;
```

## Step 3: Create Custom Candlestick Plugin

To create true candlestick charts, we need to create a custom plugin. Create a new file `src/plugins/candlestickPlugin.js`:

```javascript
const candlestickPlugin = {
  id: "candlestick",
  beforeDatasetsDraw(chart, args, options) {
    const {
      ctx,
      data,
      scales: { x, y },
    } = chart;

    ctx.strokeStyle = options.borderColor || "rgba(0, 0, 0, 0.8)";
    ctx.lineWidth = options.borderWidth || 1;

    const candleWidth = x.getPixelForValue(1) - x.getPixelForValue(0);
    const wickWidth = candleWidth / 10;

    data.datasets[0].data.forEach((point, i) => {
      const open = y.getPixelForValue(data.datasets[2].data[i]);
      const close = y.getPixelForValue(data.datasets[3].data[i]);
      const high = y.getPixelForValue(point);
      const low = y.getPixelForValue(data.datasets[1].data[i]);
      const x1 = x.getPixelForValue(i);

      // Draw the wicks
      ctx.beginPath();
      ctx.moveTo(x1, high);
      ctx.lineTo(x1, Math.min(open, close));
      ctx.moveTo(x1, Math.max(open, close));
      ctx.lineTo(x1, low);
      ctx.stroke();

      // Draw the candle body
      ctx.fillStyle = close > open ? "#26a69a" : "#ef5350";
      ctx.fillRect(
        x1 - candleWidth / 3,
        Math.min(open, close),
        (candleWidth * 2) / 3,
        Math.abs(close - open)
      );
    });
  },
};

export default candlestickPlugin;
```

## Step 4: Update Chart Component with Plugin

Update your CandlestickChart component to use the custom plugin:

```javascript
import candlestickPlugin from "../plugins/candlestickPlugin";

// ... previous imports ...

const CandlestickChart = ({ candlestickData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      candlestick: {
        borderColor: "rgba(0, 0, 0, 0.8)",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        type: "linear",
        position: "left",
      },
    },
  };

  const formatData = () => {
    const labels = candlestickData.map((data) =>
      new Date(data.time * 1000).toLocaleDateString()
    );

    return {
      labels,
      datasets: [
        {
          data: candlestickData.map((data) => data.high),
          yAxisID: "y",
        },
        {
          data: candlestickData.map((data) => data.low),
          yAxisID: "y",
        },
        {
          data: candlestickData.map((data) => data.open),
          yAxisID: "y",
        },
        {
          data: candlestickData.map((data) => data.close),
          yAxisID: "y",
        },
      ],
    };
  };

  return (
    <div className="chart-container">
      <Line
        options={options}
        data={formatData()}
        plugins={[candlestickPlugin]}
      />
    </div>
  );
};
```

## Step 5: Implement Main App Component

Update your `App.js`:

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";
import CandlestickChart from "./components/CandlestickChart";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [candlestickData, setCandlestickData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOHLCVData = async () => {
    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_MORALIS_API_KEY;
      const currentTime = Math.floor(Date.now() / 1000);
      const fromDate = currentTime - 30 * 24 * 60 * 60; // 30 days

      const response = await axios.get(
        `https://deep-index.moralis.io/api/v2.2/pairs/0xa478c2975ab1ea89e8196811f51a7b7ade33eb11/ohlcv`,
        {
          params: {
            chain: "eth",
            timeframe: "1d",
            currency: "usd",
            fromDate,
            toDate: currentTime,
            limit: 1000,
          },
          headers: {
            "X-API-Key": apiKey,
          },
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
      console.error("Error fetching OHLCV data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOHLCVData();
  }, []);

  return (
    <div className="app-container">
      <h1>Crypto Candlestick Chart</h1>
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

## Step 6: Add Styling

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

.chart-container {
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 500px;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

h1 {
  text-align: center;
  color: #1a237e;
  margin-bottom: 2rem;
}
```

## Step 7: Final Setup and Running the Application

1. Import the styles in your `App.js`:

```javascript
import "./styles.css";
```

2. Start the development server:

```bash
npm start
```

## Additional Features to Consider

1. **Add Volume Display**:

   - Create a separate bar chart below the candlesticks
   - Use volume data from the OHLCV API

2. **Implement Technical Indicators**:

   - Add moving averages
   - Include RSI or MACD indicators
   - Add Bollinger Bands

3. **Add Time Range Selection**:

   - Create buttons for different time periods
   - Implement custom date range picker

4. **Enhance Interactivity**:
   - Add zoom functionality
   - Implement price annotations
   - Add crosshair feature

## Common Issues and Solutions

1. **Chart Not Rendering**:

   - Check if data is properly formatted
   - Verify Chart.js registration
   - Check console for errors

2. **API Issues**:

   - Verify API key is correct
   - Check request parameters
   - Ensure proper error handling

3. **Performance Issues**:
   - Limit data points displayed
   - Implement data decimation
   - Use appropriate timeframe intervals

## Resources

- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Moralis API Documentation](https://docs.moralis.com)
- [React Chart.js 2](https://react-chartjs-2.js.org/)
