import { hexToRgb } from '@/styles/hexToRgb';
import { loadingScreen, studyOverrides } from '@/utils/tradingview/widgetOptions';
import { ChartingLibraryWidgetOptions, WidgetOverrides } from '@tradingview/chart';
import { WgetUIOpts } from '../types';
import { isChartTheme, isMoralisCustomTheme, removeMoralisTheme } from './theme';

export const pushCustomizationOpts = (
  widgetOpts: ChartingLibraryWidgetOptions,
  widgetOverrides: Partial<WidgetOverrides>,
  customizationOpts: Partial<WgetUIOpts>,
) => {
  if (customizationOpts.interval) {
    widgetOpts.interval = customizationOpts.interval;
  }

  if (customizationOpts.timeZone) {
    widgetOpts.timezone = customizationOpts.timeZone as TradingView.Timezone;
  }

  if (customizationOpts.theme && isChartTheme(customizationOpts.theme)) {
    // light and dark are default themes, so we don't need to set custom css and overrides for them
    if (!isMoralisCustomTheme(customizationOpts.theme)) {
      widgetOpts.theme = customizationOpts.theme;
      removeMoralisTheme(widgetOpts);
    }
  }

  if (customizationOpts.autoSize) {
    widgetOpts.autosize = customizationOpts.autoSize;
  }

  if (customizationOpts.locale) {
    widgetOpts.locale = customizationOpts.locale;
  }

  if (customizationOpts.hideLeftToolbarByDefault) {
    widgetOpts.enabled_features?.push('hide_left_toolbar_by_default');
  }
  if (customizationOpts.hideLeftToolbar) {
    widgetOpts.disabled_features?.push('left_toolbar');
  }

  if (customizationOpts.priceScaleSelectionStrategyName) {
    widgetOverrides['priceScaleSelectionStrategyName'] = customizationOpts.priceScaleSelectionStrategyName;
  }

  if (customizationOpts.hideLegendLastDayChange) {
    widgetOverrides['paneProperties.legendProperties.showLastDayChange'] = !customizationOpts.hideLegendLastDayChange;
  }
  if (customizationOpts.hideLegendSeriesTitle) {
    widgetOverrides['paneProperties.legendProperties.showSeriesTitle'] = !customizationOpts.hideLegendSeriesTitle;
  }
  if (customizationOpts.hideLegendBarChange) {
    widgetOverrides['paneProperties.legendProperties.showBarChange'] = !customizationOpts.hideLegendBarChange;
  }
  if (customizationOpts.hideLegendVolume) {
    widgetOverrides['paneProperties.legendProperties.showVolume'] = !customizationOpts.hideLegendVolume;
  }

  if (customizationOpts.hideBottomToolbar) widgetOpts.disabled_features?.push('timeframes_toolbar');
  if (customizationOpts.hideEditButtonsInLegend) widgetOpts.disabled_features?.push('edit_buttons_in_legend');
  if (customizationOpts.hideLegendContextMenu) widgetOpts.disabled_features?.push('legend_context_menu');
  if (customizationOpts.hideTopToolbar) widgetOpts.disabled_features?.push('header_widget');
  if (customizationOpts.hideHeaderCompare) widgetOpts.disabled_features?.push('header_compare');
  if (customizationOpts.hideHeaderChartType) widgetOpts.disabled_features?.push('header_chart_type');
  if (customizationOpts.hideHeaderIndicators) widgetOpts.disabled_features?.push('header_indicators');
  if (customizationOpts.hideHeaderSettings) widgetOpts.disabled_features?.push('header_settings');
  if (customizationOpts.hideHeaderUndoRedo) widgetOpts.disabled_features?.push('header_undo_redo');
  if (customizationOpts.hideHeaderQuickSearch) widgetOpts.disabled_features?.push('header_quick_search');
  if (customizationOpts.hideHeaderScreenshot) widgetOpts.disabled_features?.push('header_screenshot');
  if (customizationOpts.hideHeaderInFullscreenMode) widgetOpts.disabled_features?.push('header_in_fullscreen_mode');
  if (customizationOpts.hideHeaderFullscreenButton) widgetOpts.disabled_features?.push('header_fullscreen_button');

  if (customizationOpts.hideHeaderResolutions) {
    const enabledFeatureIndex = widgetOpts.enabled_features?.findIndex((feature) => feature === 'header_resolutions');

    enabledFeatureIndex && widgetOpts.enabled_features?.splice(enabledFeatureIndex, 1);
    widgetOpts.disabled_features?.push('header_resolutions');
  }

  if (customizationOpts.hideItemsFavoriting) {
    const enabledFeatureIndex = widgetOpts.enabled_features?.findIndex((feature) => feature === 'items_favoriting');

    enabledFeatureIndex && widgetOpts.enabled_features?.splice(enabledFeatureIndex, 1);
    widgetOpts.disabled_features?.push('items_favoriting');
  }

  if (customizationOpts.hideSecondsResolution) {
    const enabledFeatureIndex = widgetOpts.enabled_features?.findIndex((feature) => feature === 'seconds_resolution');

    enabledFeatureIndex && widgetOpts.enabled_features?.splice(enabledFeatureIndex, 1);
    widgetOpts.disabled_features?.push('seconds_resolution');
  }

  if (customizationOpts.disableDefaultVolumeIndicator) {
    const enabledFeatureIndex = widgetOpts.enabled_features?.findIndex(
      (feature) => feature === 'create_volume_indicator_by_default',
    );

    enabledFeatureIndex && widgetOpts.enabled_features?.splice(enabledFeatureIndex, 1);
    widgetOpts.disabled_features?.push('create_volume_indicator_by_default');
  }

  if (customizationOpts.backgroundColor) {
    widgetOverrides['paneProperties.background'] = customizationOpts.backgroundColor;
    widgetOverrides['paneProperties.separatorColor'] = customizationOpts.backgroundColor;
    widgetOverrides['scalesProperties.lineColor'] = customizationOpts.backgroundColor;
    widgetOverrides['mainSeriesProperties.areaStyle.color2'] = customizationOpts.backgroundColor;
    loadingScreen.backgroundColor = customizationOpts.backgroundColor;

    // The color of the loader is a semi-transparent version of the background color
    loadingScreen.foregroundColor = `rgba(${hexToRgb(customizationOpts.backgroundColor)}, 0.5)`;
  }

  if (customizationOpts.gridColor) {
    widgetOverrides['paneProperties.vertGridProperties.color'] = customizationOpts.gridColor;
    widgetOverrides['paneProperties.horzGridProperties.color'] = customizationOpts.gridColor;
  }

  if (customizationOpts.textColor) {
    widgetOverrides['paneProperties.crossHairProperties.color'] = customizationOpts.textColor;
    widgetOverrides['scalesProperties.textColor'] = customizationOpts.textColor;
  }

  if (customizationOpts.candleUpColor) {
    widgetOverrides['mainSeriesProperties.candleStyle.upColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.candleStyle.borderUpColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.candleStyle.wickUpColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.lineStyle.color'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.baselineStyle.topLineColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.steplineStyle.color'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.barStyle.upColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.volCandlesStyle.upColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.areaStyle.color1'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.areaStyle.linecolor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.hlcAreaStyle.highLineColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.lineWithMarkersStyle.color'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.hollowCandleStyle.upColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.hollowCandleStyle.borderUpColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.haStyle.upColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.haStyle.borderUpColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.haStyle.wickUpColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.columnStyle.upColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.hiloStyle.color'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.hiloStyle.borderColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.renkoStyle.upColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.pbStyle.upColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.kagiStyle.upColor'] = customizationOpts.candleUpColor;
    widgetOverrides['mainSeriesProperties.pnfStyle.upColor'] = customizationOpts.candleUpColor;
    studyOverrides['volume.volume.color.0'] = customizationOpts.candleUpColor;
  }

  if (customizationOpts.candleDownColor) {
    widgetOverrides['mainSeriesProperties.candleStyle.downColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.candleStyle.borderDownColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.candleStyle.wickDownColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.baselineStyle.bottomLineColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.barStyle.downColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.volCandlesStyle.downColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.areaStyle.color2'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.hlcAreaStyle.lowLineColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.haStyle.downColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.haStyle.borderDownColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.haStyle.wickDownColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.columnStyle.downColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.renkoStyle.downColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.pbStyle.downColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.kagiStyle.downColor'] = customizationOpts.candleDownColor;
    widgetOverrides['mainSeriesProperties.pnfStyle.downColor'] = customizationOpts.candleDownColor;
    studyOverrides['volume.volume.color.1'] = customizationOpts.candleDownColor;
  }

  if (customizationOpts.chartType) {
    widgetOverrides['mainSeriesProperties.style'] = customizationOpts.chartType;
  }

  return widgetOpts;
};
