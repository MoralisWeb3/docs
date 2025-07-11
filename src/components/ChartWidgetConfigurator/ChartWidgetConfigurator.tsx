import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "../ui/utils";

interface ConfigState {
  networkId: string;
  addressType: "pair" | "token";
  address: string;
  showHoldersChart: boolean;
  automaticSize: boolean;
  width: string;
  height: string;
  backgroundColor: string;
  candleUpColor: string;
  candleDownColor: string;
  gridColor: string;
  textColor: string;
  colorTheme: string;
  hideTopToolbar: boolean;
  hideBottomToolbar: boolean;
  hideLeftToolbar: boolean;
  language: string;
  timezone: string;
  defaultInterval: string;
}

const ChartWidgetConfigurator = () => {
  const [activeTab, setActiveTab] = useState<"html" | "react">("html");
  const [config, setConfig] = useState<ConfigState>({
    networkId: "ethereum",
    addressType: "token",
    address: "0x56534741cd8b152df6d448df7ac51f75169a83b2",
    showHoldersChart: true,
    automaticSize: true,
    width: "",
    height: "",
    backgroundColor: "#071321",
    candleUpColor: "#4CE666",
    candleDownColor: "#E64C4C",
    gridColor: "#0d2035",
    textColor: "#68738D",
    colorTheme: "custom",
    hideTopToolbar: false,
    hideBottomToolbar: false,
    hideLeftToolbar: false,
    language: "en",
    timezone: "auto",
    defaultInterval: "1D",
  });

  const [embedCode, setEmbedCode] = useState("");

  const generateEmbedCode = () => {
    const chainIdMap = {
      ethereum: "0x1",
      polygon: "0x89",
      bsc: "0x38",
      avalanche: "0xa86a",
    };

    const widgetConfig = {
      autoSize: config.automaticSize,
      chainId: chainIdMap[config.networkId as keyof typeof chainIdMap],
      [config.addressType === "pair" ? "pairAddress" : "tokenAddress"]:
        config.address,
      showHoldersChart: config.showHoldersChart,
      defaultInterval: config.defaultInterval,
      timeZone:
        config.timezone === "auto"
          ? "Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Etc/UTC'"
          : `'${config.timezone}'`,
      theme: "moralis",
      locale: config.language,
      backgroundColor: config.backgroundColor,
      gridColor: config.gridColor,
      textColor: config.textColor,
      candleUpColor: config.candleUpColor,
      candleDownColor: config.candleDownColor,
      hideLeftToolbar: config.hideLeftToolbar,
      hideTopToolbar: config.hideTopToolbar,
      hideBottomToolbar: config.hideBottomToolbar,
    };

    const configString = JSON.stringify(widgetConfig, null, 2)
      .replace(/"/g, "'")
      .replace(
        /'Intl\.DateTimeFormat\(\)\.resolvedOptions\(\)\.timeZone \?\? 'Etc\/UTC''/g,
        "Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Etc/UTC'"
      );

    if (activeTab === "html") {
      return `<div id="price-chart-widget-container" style="width: ${
        config.automaticSize ? "100%" : config.width
      }; height: ${config.automaticSize ? "100%" : config.height};">
    <script type="text/javascript">
      (function() {
        function loadWidget() {
          if (typeof window.createMyWidget === 'function') {
            window.createMyWidget('price-chart-widget-container', ${configString});
          } else {
            console.error('createMyWidget function is not defined.');
          }
        }

        if (!document.getElementById('moralis-chart-widget')) {
          var script = document.createElement('script');
          script.id = 'moralis-chart-widget';
          script.src = 'https://moralis.com/static/embed/chart.js';
          script.type = 'text/javascript';
          script.async = true;
          script.onload = loadWidget;
          document.body.appendChild(script);
        } else {
          loadWidget();
        }
      })();
    </script>
  </div>`;
    } else {
      return `import React, { useEffect, useRef } from 'react';

const PRICE_CHART_ID = 'price-chart-widget-container';

export const PriceChartWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadWidget = () => {
      if (typeof window.createMyWidget === 'function') {
        window.createMyWidget(PRICE_CHART_ID, ${configString});
      } else {
        console.error('createMyWidget function is not defined.');
      }
    };

    if (!document.getElementById('moralis-chart-widget')) {
      const script = document.createElement('script');
      script.id = 'moralis-chart-widget';
      script.src = 'https://moralis.com/static/embed/chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = loadWidget;
      script.onerror = () => {
        console.error('Failed to load the chart widget script.');
      };
      document.body.appendChild(script);
    } else {
      loadWidget();
    }
  }, []);

  return (
    <div style={{ width: "${
      config.automaticSize ? "100%" : config.width
    }", height: "${config.automaticSize ? "100%" : config.height}" }}>
      <div
        id={PRICE_CHART_ID}
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};`;
    }
  };

  useEffect(() => {
    setEmbedCode(generateEmbedCode());
  }, [config, activeTab]);

  const handleConfigChange = (key: keyof ConfigState, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setConfig({
      networkId: "ethereum",
      addressType: "token",
      address: "0x56534741cd8b152df6d448df7ac51f75169a83b2",
      showHoldersChart: true,
      automaticSize: true,
      width: "",
      height: "",
      backgroundColor: "#071321",
      candleUpColor: "#4CE666",
      candleDownColor: "#E64C4C",
      gridColor: "#0d2035",
      textColor: "#68738D",
      colorTheme: "custom",
      hideTopToolbar: false,
      hideBottomToolbar: false,
      hideLeftToolbar: false,
      language: "en",
      timezone: "auto",
      defaultInterval: "1D",
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(embedCode);
  };

  const generatePreviewUrl = () => {
    const chainIdMap = {
      ethereum: "0x1",
      polygon: "0x89",
      bsc: "0x38",
      avalanche: "0xa86a",
    };

    const widgetConfig = {
      autoSize: true,
      chainId: chainIdMap[config.networkId as keyof typeof chainIdMap],
      [config.addressType === "pair" ? "pairAddress" : "tokenAddress"]:
        config.address,
      showHoldersChart: config.showHoldersChart,
      defaultInterval: config.defaultInterval,
      timeZone:
        config.timezone === "auto"
          ? "Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Etc/UTC'"
          : `'${config.timezone}'`,
      theme: "moralis",
      locale: config.language,
      backgroundColor: config.backgroundColor,
      gridColor: config.gridColor,
      textColor: config.textColor,
      candleUpColor: config.candleUpColor,
      candleDownColor: config.candleDownColor,
      hideLeftToolbar: config.hideLeftToolbar,
      hideTopToolbar: config.hideTopToolbar,
      hideBottomToolbar: config.hideBottomToolbar,
    };

    const configString = JSON.stringify(widgetConfig, null, 2)
      .replace(/"/g, "'")
      .replace(
        /'Intl\.DateTimeFormat\(\)\.resolvedOptions\(\)\.timeZone \?\? 'Etc\/UTC''/g,
        "Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Etc/UTC'"
      );

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Chart Preview</title>
  <style>
    body { margin: 0; padding: 0; background: ${config.backgroundColor}; }
    #preview-container { width: 100%; height: 100vh; }
  </style>
</head>
<body>
  <div id="preview-container">
    <script type="text/javascript">
      (function() {
        function loadWidget() {
          if (typeof window.createMyWidget === 'function') {
            window.createMyWidget('preview-container', ${configString});
          } else {
            console.error('createMyWidget function is not defined.');
          }
        }

        if (!document.getElementById('moralis-chart-widget')) {
          var script = document.createElement('script');
          script.id = 'moralis-chart-widget';
          script.src = 'https://moralis.com/static/embed/chart.js';
          script.type = 'text/javascript';
          script.async = true;
          script.onload = loadWidget;
          document.body.appendChild(script);
        } else {
          loadWidget();
        }
      })();
    </script>
  </div>
</body>
</html>`;

    return `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto">
      {/* Top Row - Embed Code and Configuration */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Panel - Embed Code */}
        <div className="flex-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">Embed Code</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant={activeTab === "html" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("html")}
                >
                  HTML
                </Button>
                <Button
                  variant={activeTab === "react" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab("react")}
                >
                  React
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto h-96 text-sm">
                  <code>{embedCode}</code>
                </pre>
                <div className="flex justify-between mt-4">
                  <Button variant="outline" onClick={handleCopyCode}>
                    Copy Code
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Configuration */}
        <div className="flex-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl">Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Network ID */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Network ID
                </label>
                <select
                  value={config.networkId}
                  onChange={(e) =>
                    handleConfigChange("networkId", e.target.value)
                  }
                  className="w-full p-2 border rounded-md bg-background"
                >
                  <option value="ethereum">🔵 Ethereum</option>
                  <option value="polygon">🟣 Polygon</option>
                  <option value="bsc">🟡 BSC</option>
                  <option value="avalanche">🔴 Avalanche</option>
                </select>
              </div>

              {/* Address Type Toggle */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Address Type
                </label>
                <div className="flex gap-2">
                  <Button
                    variant={
                      config.addressType === "pair" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleConfigChange("addressType", "pair")}
                  >
                    Pair address
                  </Button>
                  <Button
                    variant={
                      config.addressType === "token" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleConfigChange("addressType", "token")}
                  >
                    Token address
                  </Button>
                </div>
              </div>

              {/* Address Input */}
              <div>
                <input
                  type="text"
                  value={config.address}
                  onChange={(e) =>
                    handleConfigChange("address", e.target.value)
                  }
                  placeholder="Enter address"
                  className="w-full p-2 border rounded-md bg-background"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={config.showHoldersChart}
                    onChange={(e) =>
                      handleConfigChange("showHoldersChart", e.target.checked)
                    }
                    className="rounded"
                  />
                  <span>Show Holders Chart</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={config.automaticSize}
                    onChange={(e) =>
                      handleConfigChange("automaticSize", e.target.checked)
                    }
                    className="rounded"
                  />
                  <span>Automatic width & height</span>
                </label>
              </div>

              {/* Width/Height inputs */}
              {!config.automaticSize && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Width
                    </label>
                    <input
                      type="text"
                      value={config.width}
                      onChange={(e) =>
                        handleConfigChange("width", e.target.value)
                      }
                      placeholder="800px"
                      className="w-full p-2 border rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Height
                    </label>
                    <input
                      type="text"
                      value={config.height}
                      onChange={(e) =>
                        handleConfigChange("height", e.target.value)
                      }
                      placeholder="600px"
                      className="w-full p-2 border rounded-md bg-background"
                    />
                  </div>
                </div>
              )}

              {/* Color Controls */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Background Color
                  </label>
                  <input
                    type="color"
                    value={config.backgroundColor}
                    onChange={(e) =>
                      handleConfigChange("backgroundColor", e.target.value)
                    }
                    className="w-full h-10 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Candle Up
                  </label>
                  <input
                    type="color"
                    value={config.candleUpColor}
                    onChange={(e) =>
                      handleConfigChange("candleUpColor", e.target.value)
                    }
                    className="w-full h-10 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Grid</label>
                  <input
                    type="color"
                    value={config.gridColor}
                    onChange={(e) =>
                      handleConfigChange("gridColor", e.target.value)
                    }
                    className="w-full h-10 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Candle Down
                  </label>
                  <input
                    type="color"
                    value={config.candleDownColor}
                    onChange={(e) =>
                      handleConfigChange("candleDownColor", e.target.value)
                    }
                    className="w-full h-10 border rounded-md"
                  />
                </div>
              </div>

              {/* Text Color */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Text Color
                </label>
                <input
                  type="color"
                  value={config.textColor}
                  onChange={(e) =>
                    handleConfigChange("textColor", e.target.value)
                  }
                  className="w-full h-10 border rounded-md"
                />
              </div>

              {/* Color Theme */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Color Theme
                </label>
                <select
                  value={config.colorTheme}
                  onChange={(e) =>
                    handleConfigChange("colorTheme", e.target.value)
                  }
                  className="w-full p-2 border rounded-md bg-background"
                >
                  <option value="custom">Custom</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              {/* Toolbar Options */}
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={config.hideTopToolbar}
                    onChange={(e) =>
                      handleConfigChange("hideTopToolbar", e.target.checked)
                    }
                    className="rounded"
                  />
                  <span className="text-sm">Hide Top Toolbar</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={config.hideBottomToolbar}
                    onChange={(e) =>
                      handleConfigChange("hideBottomToolbar", e.target.checked)
                    }
                    className="rounded"
                  />
                  <span className="text-sm">Hide Bottom Toolbar</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={config.hideLeftToolbar}
                    onChange={(e) =>
                      handleConfigChange("hideLeftToolbar", e.target.checked)
                    }
                    className="rounded"
                  />
                  <span className="text-sm">Hide Left Toolbar</span>
                </label>
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Language
                </label>
                <select
                  value={config.language}
                  onChange={(e) =>
                    handleConfigChange("language", e.target.value)
                  }
                  className="w-full p-2 border rounded-md bg-background"
                >
                  <option value="en">English (en)</option>
                  <option value="es">Spanish (es)</option>
                  <option value="fr">French (fr)</option>
                  <option value="de">German (de)</option>
                  <option value="ja">Japanese (ja)</option>
                  <option value="ko">Korean (ko)</option>
                  <option value="zh">Chinese (zh)</option>
                </select>
              </div>

              {/* Timezone and Interval */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Timezone
                  </label>
                  <select
                    value={config.timezone}
                    onChange={(e) =>
                      handleConfigChange("timezone", e.target.value)
                    }
                    className="w-full p-2 border rounded-md bg-background"
                  >
                    <option value="auto">Auto detect timezone</option>
                    <option value="America/New_York">Eastern Time</option>
                    <option value="America/Los_Angeles">Pacific Time</option>
                    <option value="Europe/London">London</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Default Interval
                  </label>
                  <select
                    value={config.defaultInterval}
                    onChange={(e) =>
                      handleConfigChange("defaultInterval", e.target.value)
                    }
                    className="w-full p-2 border rounded-md bg-background"
                  >
                    <option value="1m">1 Minute</option>
                    <option value="5m">5 Minutes</option>
                    <option value="15m">15 Minutes</option>
                    <option value="1h">1 Hour</option>
                    <option value="4h">4 Hours</option>
                    <option value="1D">1 Day</option>
                    <option value="1W">1 Week</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <Button variant="outline" onClick={handleReset}>
                  Reset
                </Button>
                <Button onClick={handleCopyCode}>Apply</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Row - Live Preview */}
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <iframe
                src={generatePreviewUrl()}
                width="100%"
                height="600"
                style={{ border: "none", borderRadius: "8px" }}
                title="Chart Widget Preview"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChartWidgetConfigurator;
