import { BG_COLOR, TEXT_COLOR, TOOLTIP_TEXT_COLOR } from '@/utils/tradingview/widgetOptions';

const getTooltipTxtColor = (txtColor?: string) => txtColor || TOOLTIP_TEXT_COLOR;
const getTxtColor = (txtColor?: string) => txtColor || TEXT_COLOR;
const getBgColor = (bgColor?: string) => bgColor || BG_COLOR;
const getBgImg = (bgImgUrl?: string) =>
  bgImgUrl
    ? `
    .chart-page {
      border: 3px solid #06111D;
      background: linear-gradient(
        0deg,
        rgba(6, 17, 29, 0.50) 0%,
        rgba(6, 17, 29, 0.50) 100%
      ),
      url(${bgImgUrl}) lightgray 50% / contain no-repeat;
      box-shadow: 0px 4px 124px 120px #06111D inset;
    }`
    : '';

export const getCustomChartCss = ({
  bgColor,
  textColor,
  bgImgUrl,
  hideStatus,
}: {
  bgColor?: string;
  textColor?: string;
  bgImgUrl?: string;
  hideStatus?: boolean;
}) => `
:root:not(.theme-dark),
.theme-dark:root {
  --tv-color-platform-background:  ${getBgColor(bgColor)}; 
  --tv-color-pane-background: ${getBgColor(bgColor)}; 
  --tv-color-toolbar-button-background-hover: transparent; 
  --tv-color-toolbar-button-background-expanded: transparent; 
  --tv-color-toolbar-button-background-active: transparent; 
  --tv-color-toolbar-button-background-active-hover: transparent; 
  --tv-color-toolbar-button-text: ${getTxtColor(textColor)}; 
  --tv-color-toolbar-button-text-hover: #d1ac45; 
  --tv-color-toolbar-button-text-active: #d1ac45; 
  --tv-color-toolbar-button-text-active-hover: #d1ac45; 
  --tv-color-item-active-text: red;
  --tv-color-toolbar-toggle-button-background-active:${getTxtColor(textColor)}; 
  --tv-color-toolbar-toggle-button-background-active-hover:${getTxtColor(textColor)}; 
  --tv-color-toolbar-divider-background: ${getBgColor(bgColor)};
  --tv-color-toolbar-save-layout-loader: #d1ac45;
  --tv-color-popup-background:${getBgColor(bgColor)};
  --tv-color-popup-element-text:${getTxtColor(textColor)}; 
  --tv-color-popup-element-text-hover: #d1ac45; 
  --tv-color-popup-element-background-hover:${getBgColor(bgColor)};
  --tv-color-popup-element-divider-background: ${getBgColor(bgColor)};
  --tv-color-popup-element-secondary-text:${getTxtColor(textColor)}; 
  --tv-color-popup-element-hint-text:${getTxtColor(textColor)}; 
  --tv-color-popup-element-text-active: #d1ac45; 
  --tv-color-popup-element-background-active: transparent; 
  --tv-color-popup-element-toolbox-text: #d1ac45;
  --tv-color-popup-element-toolbox-text-hover: #d1ac45;
  --tv-color-popup-element-toolbox-text-active-hover: transparent; 
  --tv-color-popup-element-toolbox-background-hover: transparent; 
  --tv-color-popup-element-toolbox-background-active-hover: transparent; 
  --themed-color-bg-primary:${getBgColor(bgColor)};
  --themed-color-search-border: #1a3656; 
  --themed-color-text:${getTxtColor(textColor)}; 
  --themed-color-default-gray:${getTxtColor(textColor)}; 
  --themed-color-market-open: #4ce666;
  ${bgImgUrl ? '--themed-color-pane-bg: transparent;' : ''}
}
.chart-page div.apply-common-tooltip,
.chart-page div.apply-overflow-tooltip {
  font-weight: 700;
}
.chart-page div.apply-common-tooltip > button {
  color:${getTooltipTxtColor(textColor)} !important;
  font-size: 1rem;
}

.chart-page div[class^='dialog-'] [class^='highlighted-'] {
  color: #d1ac45;
}

${hideStatus ? '.chart-page div[class^="statusesWrapper"] { display: none; }' : ''}

.title-Wu2pIo3E,
.green-hPiAkrn3 {
  color: #4ce666 !important;
}

${getBgImg(bgImgUrl)}
`;
