import { PRICE_CHART_TIMEZONES } from "./timezone";

export type CodeLang = "html" | "react";

type Nominal<T, Name extends string> = T & {
  [Symbol.species]: Name;
};

export type ResolutionString = Nominal<string, "ResolutionString">;

export type ChartTimezone = (typeof PRICE_CHART_TIMEZONES)[number];

export type TradingViewCustomizationTheme = "light" | "dark" | "moralis";
export type TradingViewLanguageCode =
  | "ar"
  | "zh"
  | "ca_ES"
  | "en"
  | "fr"
  | "de"
  | "he_IL"
  | "id_ID"
  | "it"
  | "ja"
  | "ko"
  | "pl"
  | "pt"
  | "ru"
  | "es"
  | "sv"
  | "th"
  | "tr"
  | "vi"
  | "ms_MY"
  | "zh_TW";
