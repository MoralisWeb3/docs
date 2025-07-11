import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartPreview } from "./ChartPreview";
import { AddressInput } from "./form/AddressInput";
import { AddressTypeToggle } from "./form/AddressTypeToggle";
import { ChartOptions } from "./form/ChartOptions";
import { ColorControls } from "./form/ColorControls";
import { DefaultIntervalSelector } from "./form/DefaultIntervalSelector";
import { LanguageSelector } from "./form/LanguageSelector";
import { NetworkSelector } from "./form/NetworkSelector";
import { SizeControls } from "./form/SizeControls";
import { TextColorControl } from "./form/TextColorControl";
import { ThemeSelector } from "./form/ThemeSelector";
import { TimezoneSelector } from "./form/TimezoneSelector";
import { ToolbarOptions } from "./form/ToolbarOptions";
import { getEmbedCode } from "./utils/embedCode";
import { CodeLang } from "./utils/types";
import { PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES, WgetForm } from "./utils/wget";

const ChartWidgetConfigurator = () => {
  const [activeTab, setActiveTab] = useState<CodeLang>("html");
  const [config, setConfig] = useState<WgetForm>(
    PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES
  );

  const [embedCode, setEmbedCode] = useState("");

  useEffect(() => {
    setEmbedCode(getEmbedCode(activeTab, config));
  }, [config, activeTab]);

  const handleConfigChange = (key: keyof WgetForm, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setConfig(PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(embedCode);
  };

  return (
    <div className="flex flex-col gap-6 max-w mx-auto">
      <ChartPreview config={config} />
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
            <CardContent className="h-full">
              <div className="relative">
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto h-full text-sm">
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
              <NetworkSelector config={config} onChange={handleConfigChange} />
              <AddressTypeToggle
                config={config}
                onChange={handleConfigChange}
              />
              <AddressInput config={config} onChange={handleConfigChange} />
              <ChartOptions config={config} onChange={handleConfigChange} />
              <SizeControls config={config} onChange={handleConfigChange} />
              <ColorControls config={config} onChange={handleConfigChange} />
              <TextColorControl config={config} onChange={handleConfigChange} />
              <ThemeSelector config={config} onChange={handleConfigChange} />
              <ToolbarOptions config={config} onChange={handleConfigChange} />
              <LanguageSelector config={config} onChange={handleConfigChange} />
              <div className="grid grid-cols-2 gap-4">
                <TimezoneSelector
                  config={config}
                  onChange={handleConfigChange}
                />
                <DefaultIntervalSelector
                  config={config}
                  onChange={handleConfigChange}
                />
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
    </div>
  );
};

export default ChartWidgetConfigurator;
