import React from "react";
import { Input } from "../../ui/input";
import { WgetForm } from "../utils/wget";

export const TextColorControl = ({
  config,
  onChange,
}: {
  config: WgetForm;
  onChange: (key: keyof WgetForm, value: any) => void;
}) => (
  <div>
    <label className="block text-sm font-medium mb-1">Text Color</label>
    <Input
      type="color"
      value={config.textColor || "#68738D"}
      onChange={(e) => onChange("textColor", e.target.value)}
      className="w-full h-10"
    />
  </div>
);
