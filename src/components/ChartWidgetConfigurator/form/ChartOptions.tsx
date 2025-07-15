import React from "react";
import { WgetForm } from "../utils/wget";

export const ChartOptions = ({
  config,
  onChange,
}: {
  config: WgetForm;
  onChange: (key: keyof WgetForm, value: any) => void;
}) => (
  <div className="space-y-3">
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={config.showHoldersChart}
        onChange={(e) => onChange("showHoldersChart", e.target.checked)}
        className="rounded"
      />
      <span>Show Holders Chart</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={config.autoSize}
        onChange={(e) => onChange("autoSize", e.target.checked)}
        className="rounded"
      />
      <span>Automatic width & height</span>
    </label>
  </div>
);
