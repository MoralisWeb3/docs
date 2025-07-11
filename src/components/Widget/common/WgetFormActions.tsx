import { ButtonOutline, ButtonPrimary } from 'moralis-ui';
import { Flex } from '@lib/ui';
import { Trans } from '@lingui/react/macro';
import styles from './WgetFormActions.module.scss';

export const WgetFormActions = ({ onApply, onReset }: { onApply: () => void; onReset: () => void }) => {
  return (
    <Flex
      gap={16}
      direction={{ base: 'column-reverse', lg: 'row' }}
      width="100%"
      justify={{ base: 'center', lg: 'flex-end' }}
    >
      <ButtonOutline size="sm" onClick={onReset} className={styles.configButtons}>
        <Trans>Reset</Trans>
      </ButtonOutline>
      <ButtonPrimary size="sm" onClick={onApply} className={styles.configButtons}>
        <Trans>Apply</Trans>
      </ButtonPrimary>
    </Flex>
  );
};
