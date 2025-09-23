import React from "react";
import { Input } from "../../ui/input";
import { WgetForm } from "../utils/wget";

export const AddressInput = ({
    config,
    onChange,
}: {
    config: WgetForm;
    onChange: (key: keyof WgetForm, value: any) => void;
}) => (
    <div>
        <Input
            type="text"
            value={config.toggleAddressType ? config.tokenAddress || "" : config.pairAddress || ""}
            onChange={(e) =>
                onChange(config.toggleAddressType ? "tokenAddress" : "pairAddress", e.target.value)
            }
            placeholder="Enter address"
        />
    </div>
);
