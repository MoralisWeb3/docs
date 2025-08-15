import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { WgetForm } from "../utils/wget";
import { useFormattedTimezones } from "./hooks/useFormattedTimezone";

export const TimezoneSelector = ({
  config,
  onChange,
}: {
  config: WgetForm;
  onChange: (key: keyof WgetForm, value: any) => void;
}) => {
  const formattedTimezones = useFormattedTimezones();
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Timezone</label>
      <Select
        value={config.timeZone}
        onValueChange={(value) => onChange("timeZone", value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedTimezones.map(({ timezone, offset, cityName }) => (
            <SelectItem key={timezone} value={timezone}>
              {timezone !== "auto" ? `(${offset}) ${cityName}` : offset}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
