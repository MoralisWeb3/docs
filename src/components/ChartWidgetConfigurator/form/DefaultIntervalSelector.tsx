import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { WgetForm } from "../utils/wget";

const PRICE_CHART_INTERVALS = [
  { label: "1 Minute", value: "1" },
  { label: "5 Minutes", value: "5" },
  { label: "15 Minutes", value: "15" },
  { label: "30 Minutes", value: "30" },
  { label: "1 Hour", value: "60" },
  { label: "4 Hours", value: "240" },
  { label: "1 Day", value: "1D" },
  { label: "1 Week", value: "1W" },
  { label: "1 Month", value: "1M" },
];

export const DefaultIntervalSelector = ({
  config,
  onChange,
}: {
  config: WgetForm;
  onChange: (key: keyof WgetForm, value: any) => void;
}) => (
  <div>
    <label className="block text-sm font-medium mb-1">Default Interval</label>
    <Select
      value={config.defaultInterval}
      onValueChange={(value) => onChange("defaultInterval", value)}
    >
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {PRICE_CHART_INTERVALS.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);
