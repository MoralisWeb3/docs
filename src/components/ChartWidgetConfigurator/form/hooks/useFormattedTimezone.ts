import { useMemo } from "react";
import {
    ChartTimezone,
    FormattedTimezone,
    getFormattedTimezone,
    PRICE_CHART_TIMEZONES,
} from "../../utils/timezone";

const AUTO_DETECT_TIMEZONE_OPT: FormattedTimezone = {
    offset: "Auto detect timezone",
    cityName: "Auto",
    timezone: "auto",
};

export const useFormattedTimezones = () => {
    return useMemo(() => {
        const formatted = PRICE_CHART_TIMEZONES.map(getFormattedTimezone)
            .filter(
                (
                    tz
                ): tz is {
                    offset: string;
                    cityName: string;
                    timezone: ChartTimezone;
                } => tz !== null
            )
            .sort((a, b) => {
                const parseOffset = (offsetStr: string) => {
                    const match = offsetStr.match(/UTC([+-])(\d{2}):(\d{2})/);
                    if (match) {
                        const sign = match[1] === "+" ? 1 : -1;
                        const hours = parseInt(match[2], 10);
                        const minutes = parseInt(match[3], 10);
                        return sign * (hours * 60 + minutes);
                    }
                    return 0;
                };
                return parseOffset(a.offset) - parseOffset(b.offset);
            });

        formatted.unshift(AUTO_DETECT_TIMEZONE_OPT);
        return formatted;
    }, []);
};
