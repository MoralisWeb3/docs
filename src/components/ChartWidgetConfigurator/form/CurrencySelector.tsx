import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { CURRENCY_OPTIONS, WgetForm } from "../utils/wget";

export const CurrencySelector = ({
    config,
    onChange,
}: {
    config: WgetForm;
    onChange: (key: keyof WgetForm, value: any) => void;
}) => (
    <div>
        <label className="block text-sm font-medium mb-2">Currency</label>
        <Select
            value={config.currency || ""}
            onValueChange={(value) => onChange("currency", value)}
        >
            <SelectTrigger className="w-full">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {CURRENCY_OPTIONS.map((code) => (
                    <SelectItem key={code} value={code}>
                        {code}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);
