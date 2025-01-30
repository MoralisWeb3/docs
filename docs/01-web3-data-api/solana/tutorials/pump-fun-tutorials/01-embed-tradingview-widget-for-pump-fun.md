---
title: "Embed a TradingView Candlestick Chart for Pump.fun Tokens"
slug: "../embed-tradingview-chart"
description: "Learn how to embed a real-time TradingView candlestick chart for Pump.fun tokens using the Moralis Price Chart Widget."
sidebar_label: "Embed Pump.fun TradingView Chart"
sidebar_position: 1
---

# 📈 Embed a TradingView Candlestick Chart for Pump.fun Tokens

Want to display **real-time price charts** for **Pump.fun tokens** on your website or app? With **Moralis' Price Chart Widget**, you can easily **embed TradingView-style candlestick charts** in just a few steps! 🚀

## Watch the Full Video Tutorial

To see a complete walkthrough of embedding TradingView charts using Moralis, check out the video tutorial below:

[![Watch the video](https://img.youtube.com/vi/n-HS97sFsTo/0.jpg)](https://www.youtube.com/watch?v=n-HS97sFsTo)

## ✨ What You Can Do

- Embed **real-time price charts** for any Pump.fun token.
- Customize **colors, layout, and time intervals**.
- Works for **pre-bonded Pump.fun tokens** too!
- Supports **HTML & React implementations**.

---

## 🛠 Step 1: Configure Your Chart

1. Go to **[Moralis Price Chart Widget](https://moralis.com/widgets/price-chart)**.
2. Enter your **token address or pair address**.
3. Customize your **theme, background, candle colors, text colors, etc.**.
4. Choose a **default time interval** (e.g., `1D`, `1H`, `5M`).
5. Copy the **embed code** for HTML or React.

---

## ⚡ Step 2: Embed the Chart in Your Project

If you're using a basic website, you can copy and paste the **HTML embed code**, you also can use the **React embed code** if you're using a React project.

### HTML Embed Code

```html
<div id="price-chart-widget-container" style="width: 100%; height:100%">
  <script type="text/javascript">
    (function () {
      function loadWidget() {
        if (typeof window.createMyWidget === "function") {
          window.createMyWidget("price-chart-widget-container", {
            width: "980px",
            height: "620px",
            chainId: "solana",
            tokenAddress: "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
            defaultInterval: "1D",
            timeZone:
              Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Etc/UTC",
            theme: "moralis",
            locale: "en",
            backgroundColor: "#071321",
            gridColor: "#0d2035",
            textColor: "#68738D",
            candleUpColor: "#4CE666",
            candleDownColor: "#E64C4C",
            hideLeftToolbar: false,
            hideTopToolbar: false,
            hideBottomToolbar: false,
          });
        } else {
          console.error("createMyWidget function is not defined.");
        }
      }

      if (!document.getElementById("moralis-chart-widget")) {
        var script = document.createElement("script");
        script.id = "moralis-chart-widget";
        script.src = "https://moralis.com/static/embed/chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.onload = loadWidget;
        document.body.appendChild(script);
      } else {
        loadWidget();
      }
    })();
  </script>
</div>
```

## 🎨 Step 3: Customize Your Chart

You can customize the chart's appearance by tweaking these options:

| Option            | Description                              |
| ----------------- | ---------------------------------------- |
| backgroundColor   | Background color of the chart            |
| candleUpColor     | Color for bullish candles                |
| candleDownColor   | Color for bearish candles                |
| textColor         | Text color for labels                    |
| gridColor         | Gridline color                           |
| defaultInterval   | Default time interval (1D, 1H, 5M, etc.) |
| hideLeftToolbar   | Hide/show the left toolbar               |
| hideTopToolbar    | Hide/show the top toolbar                |
| hideBottomToolbar | Hide/show the bottom toolbar             |

You can embed charts for pre-bonded Pump.fun tokens the same way!
Just enter the pre-bonded token address when configuring the widget.
