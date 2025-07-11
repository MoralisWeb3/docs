import React from "react";
import { Button } from "../../ui/button";
import { WgetForm } from "../utils/wget";

export const AddressTypeToggle = ({
  config,
  onChange,
}: {
  config: WgetForm;
  onChange: (key: keyof WgetForm, value: any) => void;
}) => (
  <div>
    <label className="block text-sm font-medium mb-2">Address Type</label>
    <div className="flex gap-2">
      <Button
        variant={!config.toggleAddressType ? "default" : "outline"}
        size="sm"
        onClick={() => onChange("toggleAddressType", false)}
      >
        Pair address
      </Button>
      <Button
        variant={config.toggleAddressType ? "default" : "outline"}
        size="sm"
        onClick={() => onChange("toggleAddressType", true)}
      >
        Token address
      </Button>
    </div>
  </div>
);
