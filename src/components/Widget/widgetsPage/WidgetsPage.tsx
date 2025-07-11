import { t } from '@lingui/core/macro';
import { WgetTitle } from '../common/WgetTitle';
import { WidgetsGrid } from './WidgetsGrid';
import styles from './WidgetsPage.module.scss';

export const WidgetsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <WgetTitle
          title="Widgets"
          description={t`Explore our collection of embeddable crypto widgets. From customizable price charts to portfolio tools, find everything you need to enhance your website effortlessly.`}
        />
      </div>
      <WidgetsGrid />
    </div>
  );
};
