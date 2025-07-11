import { RefObject } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ButtonLink } from 'moralis-ui';
import { ERoutePath } from '@/utils/ERoutePath';
import { faArrowLeft } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex } from '@lib/ui';
import { Trans } from '@lingui/react/macro';
import styles from './WgetTitle.module.scss';

export const WgetTitle = ({
  title,
  description,
  headerRef,
}: {
  title: string;
  description: string;
  headerRef?: RefObject<HTMLDivElement | null>;
}) => {
  const router = useRouter();
  const isSubpageOfWidgets = router.pathname.startsWith(ERoutePath.widgets) && router.pathname !== ERoutePath.widgets;

  return (
    <div className={styles.header} ref={headerRef}>
      <Flex direction="column" justify="center" align="center" gap={12}>
        {isSubpageOfWidgets && (
          <Link href={ERoutePath.widgets} className={styles.link}>
            <ButtonLink>
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to Widgets
            </ButtonLink>
          </Link>
        )}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{description}</p>
        <p className={styles.tradingviewLink}>
          <Trans>
            Charts powered by{' '}
            <Link href="https://www.tradingview.com/chart" target="_blank">
              TradingView.
            </Link>
          </Trans>
        </p>
      </Flex>
    </div>
  );
};
