import React, { useState } from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useLocation } from "@docusaurus/router";
import Layout from "@theme/Layout";
import BackToTopButton from "@theme/BackToTopButton";
import DocPageLayoutSidebar from "@theme/DocPage/Layout/Sidebar";
import DocPageLayoutMain from "@theme/DocPage/Layout/Main";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function DocPageLayout({ children }) {
  const sidebar = useDocsSidebar();
  const location = useLocation();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  
  // Determine section classes for styling
  const pathname = location.pathname;
  let sectionClass = "";
  
  if (pathname.includes("/get-started")) {
    sectionClass = "get-started";
  } else if (pathname.includes("/web3-data-api/evm")) {
    sectionClass = "web3-data-api";
  } else if (pathname.includes("/web3-data-api/solana")) {
    sectionClass = "web3-data-api";
  } else if (pathname.includes("/streams-api")) {
    sectionClass = "streams-api";
  } else if (pathname.includes("/rpc-nodes")) {
    sectionClass = "rpc-nodes";
  } else if (pathname.includes("/cortex") || pathname.includes("/moralis-cortex")) {
    sectionClass = "cortex";
  }

  return (
    <Layout 
      wrapperClassName={clsx(
        styles.docsWrapper,
        sectionClass,
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsDocPage
      )}
    >
      <BackToTopButton />
      <div className={clsx(styles.docPage, sectionClass)}>
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        
        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocPageLayoutMain>
      </div>
    </Layout>
  );
}
