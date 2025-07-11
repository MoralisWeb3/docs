import React from "react";
import { Input } from "../../ui/input";
import { WgetForm } from "../utils/wget";

export const SizeControls = ({
  config,
  onChange,
}: {
  config: WgetForm;
  onChange: (key: keyof WgetForm, value: any) => void;
}) => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-1">Width</label>
      <Input
        type="text"
        value={config.width || ""}
        onChange={(e) => onChange("width", e.target.value)}
        placeholder="800px"
        disabled={config.autoSize}
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Height</label>
      <Input
        type="text"
        value={config.height || ""}
        onChange={(e) => onChange("height", e.target.value)}
        placeholder="600px"
        disabled={config.autoSize}
      />
    </div>
  </div>
);
