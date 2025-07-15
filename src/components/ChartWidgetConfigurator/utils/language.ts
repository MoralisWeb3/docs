export const PRICE_CHART_LANGUAGES = [
  "ar",
  "zh",
  "ca_ES",
  "en",
  "fr",
  "de",
  "he_IL",
  "id_ID",
  "it",
  "ja",
  "ko",
  "pl",
  "pt",
  "ru",
  "es",
  "sv",
  "th",
  "tr",
  "vi",
  "ms_MY",
  "zh_TW",
] as const;

export type TradingViewLanguageCode = (typeof PRICE_CHART_LANGUAGES)[number];

export const getLanguageDisplayName = (code: string, locale = "en") => {
  // Static instance to avoid re-creating Intl.DisplayNames on every call
  // Ensures better performance, especially in loops or frequent calls
  const displayNames = getLanguageDisplayNames(locale);

  // Retrieve the display name for the provided code
  return displayNames.of(code) || "Unknown Language";
};

const getLanguageDisplayNames = (() => {
  // Cache to store Intl.DisplayNames instances per locale
  const cache: { [locale: string]: Intl.DisplayNames } = {};

  return (locale: string): Intl.DisplayNames => {
    if (!cache[locale]) {
      cache[locale] = new Intl.DisplayNames([locale], { type: "language" });
    }
    return cache[locale];
  };
})();

export const getPrimaryCode = (code: TradingViewLanguageCode) =>
  code.split("_")[0];
