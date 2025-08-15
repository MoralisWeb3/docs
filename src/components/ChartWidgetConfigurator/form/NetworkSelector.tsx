import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { WgetForm } from "../utils/wget";
import { CHAIN_ID_MAP } from "../utils/chains";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const NETWORK_OPTIONS = Object.entries(CHAIN_ID_MAP).map(([key, value]) => ({
  label: capitalize(key),
  value,
}));

export const NetworkSelector = ({
  config,
  onChange,
}: {
  config: WgetForm;
  onChange: (key: keyof WgetForm, value: any) => void;
}) => (
  <div>
    <label className="block text-sm font-medium mb-2">Network ID</label>
    <Select
      value={config.chainId}
      onValueChange={(value) => onChange("chainId", value)}
    >
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {NETWORK_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);
