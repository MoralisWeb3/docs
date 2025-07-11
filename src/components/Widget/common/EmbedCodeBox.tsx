import clsx from 'clsx';
import { ToggleButtons } from 'moralis-ui';
import { Flex } from '@lib/ui';
import { Trans } from '@lingui/react/macro';
import { CodeLang } from '../utils/code';
import styles from './EmbedCodeBox.module.scss';

export const EmbedCodeBox = ({
  code,
  codeLang,
  size = 'md',
  onCodeLangClick,
}: {
  code: string;
  codeLang: CodeLang;
  size?: 'sm' | 'md';
  onCodeLangClick: (id: CodeLang) => void;
}) => {
  return (
    <Flex direction="column" gap={24}>
      <div className={styles.titleAndToggle}>
        <p className={styles.title}>
          <Trans>Embed Code</Trans>
        </p>
        <ToggleButtons
          size="xs"
          onChange={(language) => onCodeLangClick(language as CodeLang)}
          items={[
            {
              id: 'html',
              label: 'HTML',
            },
            {
              id: 'react',
              label: 'React',
            },
          ]}
          value={codeLang}
        />
      </div>
      <pre className={clsx(styles.textArea, styles[size])}>{code}</pre>
    </Flex>
  );
};
