import { CHAIN_ID_MAP, ChainIdString } from "./chains";
import { ChartTimezone } from "./timezone";
import { ResolutionString, TradingViewCustomizationTheme } from "./types";
import { TradingViewLanguageCode } from "./language";

export const PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES: WgetForm = {
  autoSize: true,
  chainId: CHAIN_ID_MAP.ethereum,
  pairAddress: "0x56534741cd8b152df6d48adf7ac51f75169a83b2",
  toggleAddressType: false,
  width: "980px",
  height: "620px",
  defaultInterval: "1D" as ResolutionString,
  timeZone: "auto",
  theme: "moralis",
  locale: "en",
  hideLeftToolbar: false,
  hideTopToolbar: false,
  hideBottomToolbar: false,
  showHoldersChart: true,
  showCurrencyToggle: true,
};

export const CURRENCY_OPTIONS = ["usd", "native"] as const;
export type Currency = (typeof CURRENCY_OPTIONS)[number];

export type WgetForm = {
  chainId: ChainIdString;
  autoSize: boolean;
  width?: string;
  height?: string;
  toggleAddressType: boolean;
  tokenAddress?: string;
  pairAddress?: string;
  hideTopToolbar: boolean;
  hideBottomToolbar: boolean;
  hideLeftToolbar: boolean;
  theme: TradingViewCustomizationTheme;
  locale: TradingViewLanguageCode;
  timeZone: ChartTimezone;
  defaultInterval: ResolutionString;
  chartBgColor?: string;
  gridColor?: string;
  textColor?: string;
  candleUpColor?: string;
  candleDownColor?: string;
  showHoldersChart?: boolean;
  showCurrencyToggle?: boolean;
  currency?: Currency;
};
