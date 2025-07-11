import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ApiBanner from '../../../components/ApiBanner/ApiBanner';
import { useLocation } from "@docusaurus/router";

import styles from './styles.module.css';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const location = useLocation();
  const path = location.pathname;
  const reversedPath = path.split("/").reverse().join("/");

  // Render API banner based on path
  const renderApiBanner = () => {
    if (reversedPath.includes("rpc-nodes")) {
      return (
        <ApiBanner
          customButtonText="Get your free RPC Node"
          customText="Start using RPC Nodes in your project today."
          customTitle="Don't have an RPC Node yet?"
        />
      );
    } else if (reversedPath.includes("web3-data-api") || 
               reversedPath.includes("streams-api") || 
               reversedPath.includes("guides") || 
               reversedPath.includes("authentication-api") || 
               reversedPath.includes("cortex")) {
      return <ApiBanner />;
    }
    return null;
  };

  return (
    <div className={styles.docLayoutWrapper}>
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        {docTOC.mobile}
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            {renderApiBanner()}
            <DocVersionBadge />
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && (
        <div className={clsx("col col--3", styles.tocColumn)}>
          {docTOC.desktop}
        </div>
      )}
    </div>
  );
}