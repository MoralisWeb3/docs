import { popMessage } from 'moralis-ui';
import { t } from '@lingui/core/macro';
import { capitalize } from '@moralis/toolbox';

export type CodeLang = 'html' | 'react';
export const copyCode = ({ code, codeLanguage }: { code: string; codeLanguage: CodeLang }) => {
  const lang = capitalize(codeLanguage);
  popMessage({
    variant: 'success',
    message: t`${lang} code copied!`,
    title: 'Success',
  });
  navigator.clipboard.writeText(code);
};
