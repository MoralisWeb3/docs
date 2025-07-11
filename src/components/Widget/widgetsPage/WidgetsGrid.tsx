import { ERoutePath } from '@/utils/ERoutePath';
import { t } from '@lingui/core/macro';
import { WidgetCard } from './WidgetCard';
import { WidgetMoreCard } from './WidgetMoreCard';
import styles from './WidgetsGrid.module.scss';

export const WidgetsGrid = () => {
  return (
    <div className={styles.inlineContainer}>
      <div className={styles.grid}>
        <WidgetCard
          title={t`Token Page`}
          description={t`Display full information of any cryptocurrency token in real-time.`}
          link={ERoutePath.widgetsTokenPage}
          image="/static/widgets/token-page.png"
        />
        <WidgetCard
          title={t`Price Chart`}
          description={t`Embed a customizable price chart for any cryptocurrency token.`}
          link={ERoutePath.widgetsPriceChart}
          image="/static/widgets/price-chart.png"
        />
        <WidgetMoreCard />
      </div>
    </div>
  );
};
