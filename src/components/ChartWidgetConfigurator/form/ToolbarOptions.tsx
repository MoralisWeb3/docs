import React from "react";
import { WgetForm } from "../utils/wget";

export const ToolbarOptions = ({
  config,
  onChange,
}: {
  config: WgetForm;
  onChange: (key: keyof WgetForm, value: any) => void;
}) => (
  <div className="grid grid-cols-3 gap-4">
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={config.hideTopToolbar}
        onChange={(e) => onChange("hideTopToolbar", e.target.checked)}
        className="rounded"
      />
      <span className="text-sm">Hide Top Toolbar</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={config.hideBottomToolbar}
        onChange={(e) => onChange("hideBottomToolbar", e.target.checked)}
        className="rounded"
      />
      <span className="text-sm">Hide Bottom Toolbar</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={config.hideLeftToolbar}
        onChange={(e) => onChange("hideLeftToolbar", e.target.checked)}
        className="rounded"
      />
      <span className="text-sm">Hide Left Toolbar</span>
    </label>
  </div>
);
