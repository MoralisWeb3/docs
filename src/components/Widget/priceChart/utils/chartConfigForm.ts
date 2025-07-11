import { CHAIN_ID_MAP } from '@/utils/supportedChains';
import { WgetForm } from '../PriceChartWidgetConfig';

export const PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES: WgetForm = {
  autoSize: true,
  chainId: CHAIN_ID_MAP.eth,
  pairAddress: '0x56534741cd8b152df6d48adf7ac51f75169a83b2',
  toggleAddressType: false,
  width: '980px',
  height: '620px',
  defaultInterval: '1D' as TradingView.ResolutionString,
  timeZone: 'auto',
  theme: 'moralis',
  locale: 'en',
  hideLeftToolbar: false,
  hideTopToolbar: false,
  hideBottomToolbar: false,
  showHoldersChart: true,
};
