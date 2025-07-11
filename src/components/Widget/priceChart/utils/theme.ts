import { ChartingLibraryWidgetOptions } from '@tradingview/chart';

export type TradingViewCustomizationTheme = TradingView.ThemeName | 'moralis';

export const isMoralisCustomTheme = (theme: TradingViewCustomizationTheme) => theme === 'moralis';

export const removeMoralisTheme = (widgetOpts: ChartingLibraryWidgetOptions) => {
  delete widgetOpts.custom_css_url;
  delete widgetOpts.overrides;
  delete widgetOpts.studies_overrides;
  delete widgetOpts.loading_screen;
  return widgetOpts;
};

export const isChartTheme = (value: unknown): value is TradingView.ThemeName =>
  value === 'light' || value === 'dark' || value === 'moralis';
