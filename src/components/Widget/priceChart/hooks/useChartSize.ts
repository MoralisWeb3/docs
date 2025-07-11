import { useEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { WgetForm } from '../PriceChartWidgetConfig';
import { PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES } from '../utils/chartConfigForm';

export const useChartSize = ({
  autoSize,
  setValue,
}: {
  autoSize: WgetForm['autoSize'];
  setValue: UseFormSetValue<WgetForm>;
}) => {
  useEffect(() => {
    if (!autoSize) {
      // Set default values when autoSize is enabled
      setValue('width', PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES.width);
      setValue('height', PRICE_CHART_WIDGET_FORM_DEFAULT_VALUES.height);
    } else {
      // Clear values when autoSize is disabled
      setValue('width', '');
      setValue('height', '');
    }
  }, [autoSize, setValue]);
};
