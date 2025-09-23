import React from "react";
import clsx from "clsx";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
import ApiBanner from "../../../../components/ApiBanner/ApiBanner";
import { useLocation } from "@docusaurus/router";
export default function DocPageLayoutMain({ hiddenSidebarContainer, children }) {
    const sidebar = useDocsSidebar();
    const location = useLocation();
    const path = location.pathname;
    const reversedPath = path.split("/").reverse().join("/");

    return (
        <main
            className={clsx(
                styles.docMainContainer,
                (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced
            )}
        >
            <div
                className={clsx(
                    "container padding-top--md padding-bottom--lg",
                    styles.docItemWrapper,
                    hiddenSidebarContainer && styles.docItemWrapperEnhanced
                )}
            >
                <>
                    {reversedPath.includes("rpc-nodes") ? (
                        <ApiBanner
                            customButtonText="Get your free RPC Node"
                            customText="Start using RPC Nodes in your project today."
                            customTitle="Don't have an RPC Node yet?"
                        />
                    ) : reversedPath.includes("web3-data-api") ? (
                        <ApiBanner />
                    ) : reversedPath.includes("streams-api") ? (
                        <ApiBanner />
                    ) : reversedPath.includes("guides") ? (
                        <ApiBanner />
                    ) : reversedPath.includes("authentication-api") ? (
                        <ApiBanner />
                    ) : reversedPath.includes("cortex") ? (
                        <ApiBanner />
                    ) : (
                        <> </>
                    )}
                    {children}
                </>
            </div>
        </main>
    );
}
