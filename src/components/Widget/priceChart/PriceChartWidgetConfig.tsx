import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Checkbox, Input, SelectOption, SelectSingle, Toggle, Tooltip } from 'moralis-ui';
import { Control, Controller, useFormContext, useWatch } from 'react-hook-form';
import { ChainLogo } from '@/components/common/ChainLogo';
import { chainOptions } from '@/utils/chainOptions';
import { ChainIdString } from '@/utils/supportedChains';
import { BG_COLOR, CANDLE_DOWN, CANDLE_UP, GRID_COLOR, TEXT_COLOR } from '@/utils/tradingview/widgetOptions';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex } from '@lib/ui';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { LanguageCode } from '@tradingview/chart';
import { Sketch } from '@uiw/react-color';
import { useChartSize } from './hooks/useChartSize';
import { useFormattedTimezones } from './hooks/useFormattedTimezone';
import { getLanguageDisplayName, getPrimaryCode, PRICE_CHART_LANGUAGES } from './utils/language';
import { TradingViewCustomizationTheme } from './utils/theme';
import { ChartTimezone } from './utils/timezone';
import styles from './PriceChartWidgetConfig.module.scss';

export type WgetForm = {
  chainId: ChainIdString;
  autoSize: boolean;
  width?: string;
  height?: string;
  toggleAddressType: boolean;
  tokenAddress?: string;
  pairAddress?: string;
  hideTopToolbar: boolean;
  hideBottomToolbar: boolean;
  hideLeftToolbar: boolean;
  theme: TradingViewCustomizationTheme;
  locale: LanguageCode;
  timeZone: ChartTimezone;
  defaultInterval: TradingView.ResolutionString;
  chartBgColor?: string;
  gridColor?: string;
  textColor?: string;
  candleUpColor?: string;
  candleDownColor?: string;
  showHoldersChart?: boolean;
};

type ColorPickerOpts = 'candleDownColor' | 'candleUpColor' | 'chartBgColor' | 'gridColor' | 'textColor';

export const PriceChartWidgetConfig = () => {
  const { control, setValue } = useFormContext<WgetForm>();
  const autoSize = useWatch<Pick<WgetForm, 'autoSize'>>({
    name: 'autoSize',
    defaultValue: false,
  });
  const toggleValue = useWatch<Pick<WgetForm, 'toggleAddressType'>>({
    name: 'toggleAddressType',
    defaultValue: false,
  });

  const addressType = toggleValue ? 'token' : 'pair';
  useChartSize({ autoSize, setValue });

  // Tracks which color picker is open (null if none)
  const [activePicker, setActivePicker] = useState<keyof Pick<WgetForm, ColorPickerOpts> | null>(null);
  // picker is disabled if theme !== 'moralis'
  const theme = useWatch<Pick<WgetForm, 'theme'>>({
    name: 'theme',
    defaultValue: 'moralis',
  });
  const colorPickerDisabled = theme !== 'moralis';

  useEffect(() => {
    if (addressType === 'pair') {
      setValue('tokenAddress', '');
    } else {
      setValue('pairAddress', '');
    }
  }, [addressType, setValue]);

  useEffect(() => {
    setActivePicker(null);
  }, [theme]);

  return (
    <Flex direction="column" gap={24} width="100%">
      <p className={styles.title}>Configuration</p>

      <ChainId control={control} />

      <Flex direction="column" gap={8} width="100%">
        <ToggleAddressType control={control} />
        <div style={{ display: addressType === 'pair' ? 'block' : 'none', width: '100%' }}>
          <PairAddress control={control} />
        </div>
        <div style={{ display: addressType === 'token' ? 'block' : 'none', width: '100%' }}>
          <TokenAddress control={control} />
        </div>
      </Flex>

      <HideHolders control={control} />

      <ToggleAutoSize control={control} />
      <ControlWidthAndHeight control={control} autoSize={autoSize} />

      <div className={styles.colors}>
        <div className={styles.colorGroup}>
          <ColorPicker
            name="chartBgColor"
            label={t`Background Color`}
            defaultColor={BG_COLOR}
            activePicker={activePicker}
            disabled={colorPickerDisabled}
            setActivePicker={setActivePicker}
          />
          <ColorPicker
            name="gridColor"
            label={t`Grid`}
            defaultColor={GRID_COLOR}
            activePicker={activePicker}
            disabled={colorPickerDisabled}
            setActivePicker={setActivePicker}
          />
          <ColorPicker
            name="textColor"
            label={t`Text Color`}
            defaultColor={TEXT_COLOR}
            activePicker={activePicker}
            disabled={colorPickerDisabled}
            setActivePicker={setActivePicker}
          />
        </div>

        <div className={styles.colorGroup}>
          <ColorPicker
            name="candleUpColor"
            label={t`Candle Up`}
            defaultColor={CANDLE_UP}
            activePicker={activePicker}
            disabled={colorPickerDisabled}
            setActivePicker={setActivePicker}
          />
          <ColorPicker
            name="candleDownColor"
            label={t`Candle Down`}
            defaultColor={CANDLE_DOWN}
            activePicker={activePicker}
            disabled={colorPickerDisabled}
            setActivePicker={setActivePicker}
          />
        </div>
      </div>

      <Theme control={control} />

      <Flex gap={16} direction={{ lg: 'row', md: 'column' }} justify="space-between">
        <HideTopToolbar control={control} />
        <HideBottomToolbar control={control} />
        <HideLeftToolbar control={control} />
      </Flex>

      <Flex gap={16} direction="row" justify="space-between">
        <Locale control={control} />
      </Flex>

      <Flex gap={16} direction="row" justify="space-between">
        <TimeZone control={control} />
        <Interval control={control} />
      </Flex>
    </Flex>
  );
};

const ToggleAutoSize = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="autoSize"
    defaultValue={true}
    render={({ field }) => (
      <Flex direction="row" gap={8} align="center">
        <Checkbox
          id="chart-widget-autoSize"
          label={t`Automatic width & height`}
          checked={field.value}
          onChange={field.onChange}
          size="sm"
        />
        <Tooltip
          maxWidth={365}
          size="lg"
          color="aero"
          content={t`When "Automatic width & height" is on, the Chart Widget uses 100% of available width and height of the enclosing element. It is important to set a specific height for the parent element for the widget to work properly.`}
          trigger={<FontAwesomeIcon icon={faInfoCircle} width={14} height={14} />}
        />
      </Flex>
    )}
  />
);

const ControlWidthAndHeight = ({ control, autoSize }: { control: Control<WgetForm>; autoSize: boolean }) => (
  <Flex gap={16} direction="row" justify="space-between">
    <Controller
      control={control}
      name="width"
      render={({ field }) => (
        <Input
          transparent
          id="chart-widget-width"
          label={t`Width`}
          placeholder={t`Chart width`}
          size="sm"
          disabled={autoSize}
          {...field}
        />
      )}
    />
    <Controller
      control={control}
      name="height"
      render={({ field }) => (
        <Input
          transparent
          id="chart-widget-height"
          label={t`Height`}
          placeholder={t`Chart height`}
          size="sm"
          disabled={autoSize}
          {...field}
        />
      )}
    />
  </Flex>
);

const PairAddress = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="pairAddress"
    render={({ field }) => (
      <Input transparent id="chart-widget-pairAddress" placeholder={t`Pair Address`} size="sm" {...field} />
    )}
  />
);

const TokenAddress = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="tokenAddress"
    render={({ field }) => (
      <Input transparent id="chart-widget-tokenAddress" placeholder={t`Token Address`} size="sm" {...field} />
    )}
  />
);

const ToggleAddressType = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="toggleAddressType"
    defaultValue={false}
    render={({ field }) => (
      <Toggle
        alwaysOn
        id="addressType"
        labelPrefix={t`Pair address`}
        label={t`Token address`}
        name="addressType"
        size="sm"
        onChange={(e) => field.onChange(e.target.checked)}
      />
    )}
  />
);

const ChainId = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="chainId"
    render={({ field }) => (
      <SelectSingle id="chart-widget-chainId" size="sm" isTransparent label="Network ID" {...field}>
        {chainOptions.map((chain) => (
          <SelectOption id={chain.id} key={chain.id}>
            <Flex direction="row" gap={12} align="center" justify="center">
              <div className={styles.iconContainer}>
                <ChainLogo chainId={chain.id} />
              </div>
              {chain.label}
            </Flex>
          </SelectOption>
        ))}
      </SelectSingle>
    )}
  />
);

const HideHolders = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="showHoldersChart"
    defaultValue={true}
    render={({ field }) => (
      <Checkbox
        size="sm"
        id="chart-widget-holders"
        label={t`Show Holders Chart`}
        checked={field.value}
        onChange={field.onChange}
      />
    )}
  />
);

const HideTopToolbar = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="hideTopToolbar"
    defaultValue={false}
    render={({ field }) => (
      <Checkbox
        size="sm"
        id="hideTopToolbar"
        label={t`Hide Top Toolbar`}
        checked={field.value}
        onChange={field.onChange}
      />
    )}
  />
);

const HideBottomToolbar = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="hideBottomToolbar"
    defaultValue={false}
    render={({ field }) => (
      <Checkbox
        size="sm"
        id="hideBottomToolbar"
        label={t`Hide Bottom Toolbar`}
        checked={field.value}
        onChange={field.onChange}
      />
    )}
  />
);

const HideLeftToolbar = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="hideLeftToolbar"
    defaultValue={false}
    render={({ field }) => (
      <Checkbox
        size="sm"
        id="hideLeftToolbar"
        label={t`Hide Left Toolbar`}
        checked={field.value}
        onChange={field.onChange}
      />
    )}
  />
);

const Theme = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="theme"
    defaultValue="moralis"
    render={({ field }) => (
      <SelectSingle id="chart-widget-theme" size="sm" isTransparent label="Color Theme" {...field}>
        <SelectOption key="moralis" id="moralis">
          <Trans>Custom</Trans>
        </SelectOption>
        <SelectOption key="dark" id="dark">
          <Trans>Dark (Overrides custom color settings)</Trans>
        </SelectOption>
        <SelectOption key="light" id="light">
          <Trans> Light (Overrides custom color settings)</Trans>
        </SelectOption>
      </SelectSingle>
    )}
  />
);

const Locale = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="locale"
    defaultValue="en"
    render={({ field }) => (
      <SelectSingle id="chart-widget-locale" size="sm" isTransparent label={t`Language`} {...field}>
        {PRICE_CHART_LANGUAGES.map((code) => (
          <SelectOption key={code} id={code}>
            {getLanguageDisplayName(getPrimaryCode(code))} ({code})
          </SelectOption>
        ))}
      </SelectSingle>
    )}
  />
);

const TimeZone = ({ control }: { control: Control<WgetForm> }) => {
  const formattedTimezones = useFormattedTimezones();
  return (
    <Controller
      control={control}
      name="timeZone"
      defaultValue="Etc/UTC"
      render={({ field }) => (
        <SelectSingle
          id="chart-widget-timeZone"
          size="sm"
          isTransparent
          label={t`Timezone`}
          {...field}
          value={field.value}
        >
          {formattedTimezones.map(({ timezone, offset, cityName }) => (
            <SelectOption key={timezone} id={timezone}>
              {timezone !== 'auto' ? `(${offset}) ${cityName}` : offset}
            </SelectOption>
          ))}
        </SelectSingle>
      )}
    />
  );
};

const PRICE_CHART_INTERVALS = [
  { label: '1 Minute', value: '1' },
  { label: '5 Minutes', value: '5' },
  { label: '15 Minutes', value: '15' },
  { label: '30 Minutes', value: '30' },
  { label: '1 Hour', value: '60' },
  { label: '4 Hours', value: '240' },
  { label: '1 Day', value: '1D' },
  { label: '1 Week', value: '1W' },
  { label: '1 Month', value: '1M' },
];

const Interval = ({ control }: { control: Control<WgetForm> }) => (
  <Controller
    control={control}
    name="defaultInterval"
    defaultValue={'1D' as TradingView.ResolutionString}
    render={({ field }) => (
      <SelectSingle
        id="chart-widget-interval"
        size="sm"
        isTransparent
        label={t`Default Interval`}
        {...field}
        value={field.value}
      >
        {PRICE_CHART_INTERVALS.map(({ label, value }) => (
          <SelectOption key={value} id={value}>
            {label}
          </SelectOption>
        ))}
      </SelectSingle>
    )}
  />
);

// Updated ColorPicker so only one is open at a time
const ColorPicker = ({
  name,
  label,
  defaultColor,
  activePicker,
  disabled,
  setActivePicker,
}: {
  name: ColorPickerOpts;
  label: string;
  defaultColor: string;
  activePicker: ColorPickerOpts | null;
  disabled: boolean;
  setActivePicker: (val: ColorPickerOpts | null) => void;
}) => {
  const { control, setValue } = useFormContext<WgetForm>();
  const isActive = activePicker === name;

  const togglePicker = () => {
    setActivePicker(isActive ? null : name);
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultColor}
      render={({ field }) => (
        <div
          className={clsx({
            [styles.colorPickerDisabled]: disabled,
          })}
        >
          <div className={styles.colorPickerLabelAndButton}>
            {label}
            <button
              type="button"
              onClick={togglePicker}
              style={{ backgroundColor: field.value || defaultColor }}
              className={styles.colorPickerBtn}
            />
          </div>
          {isActive && (
            <div style={{ position: 'absolute', marginTop: 10, zIndex: 2 }}>
              <Sketch
                className={styles.customSketchPicker}
                color={field.value || defaultColor}
                onChange={(color) => {
                  setValue(name, color.hex);
                }}
                onBlur={() => setActivePicker(null)}
              />
            </div>
          )}
        </div>
      )}
    />
  );
};
