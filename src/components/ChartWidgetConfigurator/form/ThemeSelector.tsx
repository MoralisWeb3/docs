import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { WgetForm } from "../utils/wget";

const THEME_OPTIONS = [
    { label: "Custom", value: "moralis" },
    { label: "Light (Overrides custom color settings)", value: "light" },
    { label: "Dark (Overrides custom color settings)", value: "dark" },
];

export const ThemeSelector = ({
    config,
    onChange,
}: {
    config: WgetForm;
    onChange: (key: keyof WgetForm, value: any) => void;
}) => (
    <div>
        <label className="block text-sm font-medium mb-2">Color Theme</label>
        <Select value={config.theme} onValueChange={(value) => onChange("theme", value)}>
            <SelectTrigger className="w-full">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {THEME_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);
