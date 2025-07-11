import React, { useEffect } from "react";
import clsx from "clsx";
import { useThemeConfig, usePrismTheme } from "@docusaurus/theme-common";
import {
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
} from "@docusaurus/theme-common/internal";
import Highlight, { defaultProps } from "prism-react-renderer";
import Line from "@theme/CodeBlock/Line";
import CopyButton from "@theme/CodeBlock/CopyButton";
import Container from "@theme/CodeBlock/Container";
import styles from "./styles.module.css";
export default function CodeBlockString({
  children,
  className: blockClassName = "",
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {
  const {
    prism: { defaultLanguage, magicComments },
  } = useThemeConfig();
  const language =
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage;
  const prismTheme = usePrismTheme();
  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  const title = parseCodeBlockTitle(metastring) || titleProp;
  const { lineClassNames, code } = parseLines(children, {
    metastring,
    language,
    magicComments,
  });
  const showLineNumbers =
    showLineNumbersProp ?? containsLineNumbers(metastring);


  return (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language &&
          !blockClassName.includes(`language-${language}`) &&
          `language-${language}`
      )}
    >
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      <div className={styles.codeBlockContent}>
        <Highlight
          {...defaultProps}
          theme={prismTheme}
          code={code}
          language={language ?? "text"}
        >
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <pre
              tabIndex={0}
              className={clsx(className, styles.codeBlock, "thin-scrollbar")}
            >
              <code
                className={clsx(
                  styles.codeBlockLines,
                  showLineNumbers && styles.codeBlockLinesWithNumbering
                )}
              >
                {tokens.map((line, i) => (
                  <Line
                    key={i}
                    line={line}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                    classNames={lineClassNames[i]}
                    showLineNumbers={showLineNumbers}
                  />
                ))}
              </code>
            </pre>
          )}
        </Highlight>
        <div className={styles.buttonGroup}>
          <CopyButton className={styles.codeButton} code={code} />
        </div>
      </div>
    </Container>
  );
}
