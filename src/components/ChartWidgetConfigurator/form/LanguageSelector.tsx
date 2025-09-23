import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { WgetForm } from "../utils/wget";
import { getLanguageDisplayName, getPrimaryCode, PRICE_CHART_LANGUAGES } from "../utils/language";

export const LanguageSelector = ({
    config,
    onChange,
}: {
    config: WgetForm;
    onChange: (key: keyof WgetForm, value: any) => void;
}) => (
    <div>
        <label className="block text-sm font-medium mb-2">Language</label>
        <Select value={config.locale} onValueChange={(value) => onChange("locale", value)}>
            <SelectTrigger className="w-full">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {PRICE_CHART_LANGUAGES.map((code) => (
                    <SelectItem key={code} value={code}>
                        {getLanguageDisplayName(getPrimaryCode(code))} ({code})
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);
