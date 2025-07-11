import { useEffect, useRef } from 'react';
import { FormProvider } from 'react-hook-form';
import { ChainIdString } from '@/utils/supportedChains';
import { t } from '@lingui/core/macro';
import { isServer } from '@moralis/toolbox';
import { CpCodeBtn } from '../common/CpCodeBtn';
import { EmbedCodeBox } from '../common/EmbedCodeBox';
import { WgetFormActions } from '../common/WgetFormActions';
import { WgetTitle } from '../common/WgetTitle';
import { useChartWidget } from './hooks/useChartWidget';
import { CHART_URL_SRC, getEmbedCode } from './utils/embedCode';
import { PriceChartWidgetConfig } from './PriceChartWidgetConfig';
import { WgetOpts } from './types';
import styles from './PriceChartWidget.module.scss';
import { Box, Flex, Text } from '@lib/ui';
import { Trans } from '@lingui/react/macro';
import { ButtonOutline } from 'moralis-ui';
import Link from 'next/link';
import { IcoSolidArrowRight } from '@moralis/icon';

export type PriceChartWidgetProps = {
  chainId?: ChainIdString;
  exchangeName?: string;
  pairLabel?: string;
  pairAddress?: string;
};

export const PriceChartWidget = ({ chainId, exchangeName, pairLabel, pairAddress }: PriceChartWidgetProps) => {
  const { chartConfig, codeLanguage, formData, headerRef, methods, setChartConfig, setCodeLanguage } = useChartWidget({
    chainId,
    exchangeName,
    pairLabel,
    pairAddress,
  });

  const code = getEmbedCode(codeLanguage, formData);

  const handleApply = () => {
    setChartConfig(methods.getValues());
    headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.container}>
      <WgetTitle
        title={t`Token Price Chart Widget`}
        description={t`Discover a powerful crypto chart that you can seamlessly embed onto any website. Customize it extensively to make it uniquely yours with a variety of options.`}
        headerRef={headerRef}
      />
      <div className={styles.chartWrapper}>
        <EmbeddedChart
          chartConfig={{
            chainId: chartConfig.chainId,
            pairAddress: chartConfig.pairAddress,
            tokenAddress: chartConfig.tokenAddress,
            timeZone: chartConfig.timeZone,
            theme: chartConfig.theme,
            locale: chartConfig.locale,
            hideLeftToolbar: chartConfig.hideLeftToolbar,
            hideTopToolbar: chartConfig.hideTopToolbar,
            hideBottomToolbar: chartConfig.hideBottomToolbar,
            autoSize: formData.autoSize,
            width: formData.width,
            height: formData.height,
            defaultInterval: chartConfig.defaultInterval,
            backgroundColor: formData.chartBgColor,
            gridColor: formData.gridColor,
            textColor: formData.textColor,
            candleUpColor: formData.candleUpColor,
            candleDownColor: formData.candleDownColor,
            showHoldersChart: chartConfig.showHoldersChart,
          }}
        />
      </div>

      <Box margin={20}>
        <Flex align="center" direction={{ base: 'column', md: 'row' }} gap={8}>
          <Text variant="body-14-regular" color="color-input-default">
            <Trans>Do you want to remove the Moralis badge?</Trans>
          </Text>

          <ButtonOutline size="sm">
            <Link href="https://developers.moralis.com/pricing/" target="_blank" className={styles.upgradeButton}>
              <IcoSolidArrowRight size="16" />
              <Trans>Upgrade to Business</Trans>
            </Link>
          </ButtonOutline>
        </Flex>
      </Box>

      <FormProvider {...methods}>
        <div className={styles.footer}>
          <EmbedCodeBox code={code} codeLang={codeLanguage} onCodeLangClick={setCodeLanguage} />
          <CpCodeBtn
            codeLang={codeLanguage}
            onCopy={() => getEmbedCode(codeLanguage, methods.getValues())}
            className={styles.copyButtonMobile}
          />
          <PriceChartWidgetConfig />
        </div>

        <div className={styles.footerButtons}>
          <CpCodeBtn
            codeLang={codeLanguage}
            className={styles.copyButtonDesktop}
            onCopy={() => getEmbedCode(codeLanguage, methods.getValues())}
          />

          <WgetFormActions onApply={handleApply} onReset={() => methods.reset()} />
        </div>
      </FormProvider>
    </div>
  );
};

const PRICE_CHART_ID = 'price-chart-widget-container';

const EmbeddedChart = ({ chartConfig }: { chartConfig: WgetOpts }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isServer) return;

    const loadWidget = () => {
      if (typeof window.createMyWidget === 'function') {
        window.createMyWidget(PRICE_CHART_ID, chartConfig);
      }
    };

    if (!document.getElementById('moralis-chart-widget')) {
      const script = document.createElement('script');
      script.id = 'moralis-chart-widget';
      script.src = CHART_URL_SRC;
      script.type = 'text/javascript';
      script.async = true;
      script.onload = loadWidget;

      document.body.appendChild(script);
    } else {
      loadWidget();
    }
  }, [chartConfig]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div id={PRICE_CHART_ID} ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
