import { ButtonSecondary } from 'moralis-ui';
import { Trans } from '@lingui/react/macro';
import { CodeLang, copyCode } from '../utils/code';

export const CpCodeBtn = ({
  codeLang,
  className,
  onCopy,
}: {
  codeLang: CodeLang;
  className?: string;
  onCopy: () => string;
}) => {
  return (
    <ButtonSecondary
      className={className}
      size="sm"
      onClick={() =>
        copyCode({
          code: onCopy(),
          codeLanguage: codeLang,
        })
      }
    >
      <Trans>Copy Code</Trans>
    </ButtonSecondary>
  );
};
