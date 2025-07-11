import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { isNullish } from '@moralis/toolbox';
import { CodeLang } from '../../utils/code';
import { PriceChartWidgetProps } from '../PriceChartWidget';
import { PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES } from '../utils/chartConfigForm';

const getFormDefaultValues = (config?: PriceChartWidgetProps) => {
  if (config?.chainId && config?.pairLabel && config?.pairAddress) {
    return {
      ...PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES,
      chainId: config.chainId,
      exchangeName: !isNullish(config.exchangeName) ? config.exchangeName : '',
      pairLabel: config.pairLabel,
      pairAddress: config.pairAddress,
    };
  }
  return PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES;
};

export const useChartWidget = ({ chainId, exchangeName, pairLabel, pairAddress }: PriceChartWidgetProps) => {
  const [chartConfig, setChartConfig] = useState(
    getFormDefaultValues({ chainId, exchangeName, pairLabel, pairAddress }),
  );

  const methods = useForm({ defaultValues: chartConfig, mode: 'onChange' });
  const [codeLanguage, setCodeLanguage] = useState<CodeLang>('html');
  const headerRef = useRef<HTMLDivElement>(null);
  const formData = methods.watch();

  useEffect(() => {
    const formCfg = getFormDefaultValues({ chainId, exchangeName, pairLabel, pairAddress });
    methods.reset(formCfg);
    setChartConfig(formCfg);
  }, [chainId, exchangeName, pairLabel, pairAddress]);

  return {
    chartConfig,
    codeLanguage,
    formData,
    headerRef,
    methods,
    setChartConfig,
    setCodeLanguage,
  };
};
