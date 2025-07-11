import { ChainIdString } from '@/utils/supportedChains';
import { ChartPropertiesOverrides } from '@tradingview/chart';
import { TradingViewCustomizationTheme } from './utils/theme';
import { ChartTimezone } from './utils/timezone';

// create widget fn args
export type WgetOpts = {
  autoSize?: boolean;
  chainId: ChainIdString;
  defaultInterval: TradingView.ResolutionString;
  height?: string;
  hideBottomToolbar: boolean;
  hideLeftToolbar: boolean;
  hideTopToolbar: boolean;
  locale: TradingView.LanguageCode;
  pairAddress?: string;
  theme: TradingViewCustomizationTheme;
  timeZone: ChartTimezone;
  tokenAddress?: string;
  width?: string;
  showHoldersChart?: boolean;
} & WgetCustomColors;

export type TokenPageWgetOpts = {
  tokenAddress: string;
  chainId: ChainIdString;
};

// options to customize wget UI
export type WgetUIOpts = {
  interval: TradingView.ResolutionString;
  timeZone: ChartTimezone;
  theme: TradingViewCustomizationTheme;
  locale: TradingView.LanguageCode;
  hideLeftToolbar: boolean;
  hideLeftToolbarByDefault?: boolean;
  hideTopToolbar: boolean;
  hideBottomToolbar: boolean;
  autoSize?: boolean;
  preferHeight?: boolean;
  chartType?: TradingView.ChartStyle;
  width?: string;
  height?: string;
  priceScaleSelectionStrategyName?: ChartPropertiesOverrides['priceScaleSelectionStrategyName'];
  disableDefaultVolumeIndicator?: boolean;
  hideHeaderCompare?: boolean;
  hideHeaderChartType?: boolean;
  hideHeaderIndicators?: boolean;
  hideHeaderSettings?: boolean;
  hideHeaderUndoRedo?: boolean;
  hideHeaderQuickSearch?: boolean;
  hideHeaderScreenshot?: boolean;
  hideHeaderResolutions?: boolean;
  hideHeaderInFullscreenMode?: boolean;
  hideHeaderFullscreenButton?: boolean;
  hideEditButtonsInLegend?: boolean;
  hideLegendContextMenu?: boolean;
  hideItemsFavoriting?: boolean;
  hideSecondsResolution?: boolean;
  hideStatus?: boolean;
  hideLegendLastDayChange?: boolean;
  hideLegendSeriesTitle?: boolean;
  hideLegendBarChange?: boolean;
  hideLegendVolume?: boolean;
  showHoldersChart?: boolean;
} & WgetCustomColors;

type WgetCustomColors = {
  backgroundColor?: string;
  gridColor?: string;
  textColor?: string;
  candleUpColor?: string;
  candleDownColor?: string;
};

declare global {
  interface Window {
    createMyWidget: (id: string, params: WgetOpts) => void;
    createTokenWget: (id: string, params: TokenPageWgetOpts) => void;
  }
}
