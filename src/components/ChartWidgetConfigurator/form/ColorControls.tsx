import React from "react";
import { Input } from "../../ui/input";
import { WgetForm } from "../utils/wget";

export const ColorControls = ({
  config,
  onChange,
}: {
  config: WgetForm;
  onChange: (key: keyof WgetForm, value: any) => void;
}) => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-1">Background Color</label>
      <Input
        type="color"
        value={config.chartBgColor || "#071321"}
        onChange={(e) => onChange("chartBgColor", e.target.value)}
        className="w-full h-10"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Candle Up</label>
      <Input
        type="color"
        value={config.candleUpColor || "#4CE666"}
        onChange={(e) => onChange("candleUpColor", e.target.value)}
        className="w-full h-10"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Grid</label>
      <Input
        type="color"
        value={config.gridColor || "#0d2035"}
        onChange={(e) => onChange("gridColor", e.target.value)}
        className="w-full h-10"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Candle Down</label>
      <Input
        type="color"
        value={config.candleDownColor || "#E64C4C"}
        onChange={(e) => onChange("candleDownColor", e.target.value)}
        className="w-full h-10"
      />
    </div>
  </div>
);
