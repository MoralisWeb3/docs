import { PRICE_CHART_TIMEZONES } from "./timezone";

export type CodeLang = "html" | "react";

type Nominal<T, Name extends string> = T & {
  [Symbol.species]: Name;
};

export type ResolutionString = Nominal<string, "ResolutionString">;

export type ChartTimezone = (typeof PRICE_CHART_TIMEZONES)[number];

export type TradingViewCustomizationTheme = "light" | "dark" | "moralis";
