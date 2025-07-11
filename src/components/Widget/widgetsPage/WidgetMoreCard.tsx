import Link from 'next/link';
import clsx from 'clsx';
import { ButtonLink, Empty } from 'moralis-ui';
import { emailAddress } from '@/utils/l10n/generic';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import styles from './WidgetCard.module.scss';

export const WidgetMoreCard = () => {
  return (
    <Link
      href={`mailto:${emailAddress.support}?subject=Moralis Widget Suggestion`}
      target="_blank"
      className={clsx(styles.link, styles.card)}
    >
      <Empty
        text={t`Have an idea for a another widget? Let us know and we’ll consider adding it!`}
        cta={
          <ButtonLink size="sm">
            <Trans>Suggest Widget</Trans>
            <FontAwesomeIcon icon={faPlus} className={styles.moreIcon} />
          </ButtonLink>
        }
        className={styles.emptyCard}
      />
    </Link>
  );
};
