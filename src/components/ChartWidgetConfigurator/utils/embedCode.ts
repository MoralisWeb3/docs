import { getReactContainerStyle } from "./chartContainterStyle";
import { isMoralisCustomTheme } from "./theme";
import { CodeLang } from "./types";
import { WgetForm } from "./wget";

const SEO_DOMAIN = "https://moralis.com";

export const CHART_URL_SRC = `${SEO_DOMAIN}/static/embed/chart.js`;

export const getEmbedCode = (language: CodeLang, params: WgetForm) => {
  return language === "html" ? getHtmlCode(params) : getReactCode(params);
};

const buildOptions = (args: WgetForm) => {
  const options: string[] = [];

  if (args.autoSize) {
    options.push(`autoSize: ${args.autoSize}`);
  } else {
    options.push(`width: '${args.width}'`);
    options.push(`height: '${args.height}'`);
  }

  // Add required parameters
  options.push(`chainId: '${args.chainId}'`);

  // Add address based on toggle state
  if (args.toggleAddressType) {
    // Token address mode
    args.tokenAddress && options.push(`tokenAddress: '${args.tokenAddress}'`);
  } else {
    // Pair address mode
    args.pairAddress && options.push(`pairAddress: '${args.pairAddress}'`);
  }

  // Add holders chart boolean parameter
  options.push(`showHoldersChart: ${args.showHoldersChart}`);

  // Add optional parameters if they are defined
  if (args.defaultInterval) {
    options.push(`defaultInterval: '${args.defaultInterval}'`);
  }
  if (args.timeZone) {
    if (args.timeZone === "auto") {
      // Insert the timezone expression without quotes
      options.push(
        `timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Etc/UTC'`
      );
    } else {
      // Insert the timezone as a string
      options.push(`timeZone: '${args.timeZone}'`);
    }
  }
  if (args.theme) {
    options.push(`theme: '${args.theme}'`);
  }
  if (args.locale) {
    options.push(`locale: '${args.locale}'`);
  }

  if (isMoralisCustomTheme(args.theme)) {
    if (args.chartBgColor) {
      options.push(`backgroundColor: '${args.chartBgColor}'`);
    }
    if (args.gridColor) {
      options.push(`gridColor: '${args.gridColor}'`);
    }
    if (args.textColor) {
      options.push(`textColor: '${args.textColor}'`);
    }
    if (args.candleUpColor) {
      options.push(`candleUpColor: '${args.candleUpColor}'`);
    }
    if (args.candleDownColor) {
      options.push(`candleDownColor: '${args.candleDownColor}'`);
    }
  }

  // Add boolean parameters
  options.push(`hideLeftToolbar: ${args.hideLeftToolbar}`);
  options.push(`hideTopToolbar: ${args.hideTopToolbar}`);
  options.push(`hideBottomToolbar: ${args.hideBottomToolbar}`);

  return options;
};

const stringifyOptions = (options: string[]) => {
  return options.join(",\n          ");
};

const getReactCode = (args: WgetForm) => {
  const options = buildOptions(args);
  const optionsString = stringifyOptions(options);

  return `import React, { useEffect, useRef } from 'react';

const PRICE_CHART_ID = 'price-chart-widget-container';

export const PriceChartWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadWidget = () => {
      if (typeof window.createMyWidget === 'function') {
        window.createMyWidget(PRICE_CHART_ID, {
          ${optionsString}
        });
      } else {
        console.error('createMyWidget function is not defined.');
      }
    };

    if (!document.getElementById('moralis-chart-widget')) {
      const script = document.createElement('script');
      script.id = 'moralis-chart-widget';
      script.src = '${CHART_URL_SRC}';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = loadWidget;
      script.onerror = () => {
        console.error('Failed to load the chart widget script.');
      };
      document.body.appendChild(script);
    } else {
      loadWidget();
    }
  }, []);

  return (
    <div ${getReactContainerStyle(args)}>
      <div
        id={PRICE_CHART_ID}
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};`;
};

const getHtmlCode = (args: WgetForm) => {
  const options = buildOptions(args);
  const optionsString = stringifyOptions(options);

  return `<div id="price-chart-widget-container" style="width: 100%; height:100%">
    <script type="text/javascript">
      (function() {
        function loadWidget() {
          if (typeof window.createMyWidget === 'function') {
            window.createMyWidget('price-chart-widget-container', {
              ${optionsString}
            });
          } else {
            console.error('createMyWidget function is not defined.');
          }
        }

        if (!document.getElementById('moralis-chart-widget')) {
          var script = document.createElement('script');
          script.id = 'moralis-chart-widget';
          script.src = '${CHART_URL_SRC}';
          script.type = 'text/javascript';
          script.async = true;
          script.onload = loadWidget;
          document.body.appendChild(script);
        } else {
          loadWidget();
        }
      })();
    </script>
  </div>
`;
};
