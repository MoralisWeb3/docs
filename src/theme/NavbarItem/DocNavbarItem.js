import React from "react";
import { useActiveDocContext, useLayoutDoc } from "@docusaurus/plugin-content-docs/client";
import DefaultNavbarItem from "@theme/NavbarItem/DefaultNavbarItem";
export default function DocNavbarItem({ docId, label: staticLabel, docsPluginId, ...props }) {
    const { activeDoc } = useActiveDocContext(docsPluginId);
    const doc = useLayoutDoc(docId, docsPluginId);
    // Draft items are not displayed in the navbar.
    if (doc === null) {
        return null;
    }

    /**
     * @name checkIsActive
     * @description
     * This function is used to check if the current doc is active.
     * It is used to check if the current doc is active.
     *
     * @param {string} doc.sidebar
     * @param {string} activeDoc.sidebar
     * @param {string} activeDoc.path
     * @param {string} doc.path
     * @returns {boolean}
     */
    const checkIsActive = () => {
        // Check if there is any active sidebar, no `.sidebar` for Changelog pages
        if (activeDoc?.sidebar) {
            switch (doc.sidebar) {
                // Associate `web3apiEvmSidebar` with other Web3 API Chain sidebars
                case "web3apiEvmSidebar":
                    switch (activeDoc.sidebar) {
                        case "web3apiEvmSidebar":
                            return activeDoc.path.includes("/web3-data-api/evm");
                        case "web3apiAptosSidebar":
                            return activeDoc.path.includes("/web3-data-api/aptos");
                        case "web3apiSolanaSidebar":
                            return activeDoc.path.includes("/web3-data-api/solana");
                        default:
                            return false;
                    }
                // Associate `streamsEvmSidebar` with other Streams API Chain sidebars
                case "streamsEvmSidebar":
                    switch (activeDoc.sidebar) {
                        case "streamsEvmSidebar":
                            return activeDoc.path.includes("/streams-api/evm");
                        case "streamsAptosSidebar":
                            return activeDoc.path.includes("/streams-api/aptos");
                        default:
                            return false;
                    }
                case "authenticationEvmSidebar":
                    switch (activeDoc.sidebar) {
                        case "authenticationEvmSidebar":
                            return activeDoc.path.includes("/authentication-api/evm");
                        case "authenticationAptosSidebar":
                            return activeDoc.path.includes("/authentication-api/aptos");
                        case "authenticationSolanaSidebar":
                            return activeDoc.path.includes("/authentication-api/solana");
                        default:
                            return false;
                    }
                case "exampledappsSidebar":
                default:
                    return (
                        activeDoc?.path === doc.path ||
                        (!!activeDoc?.sidebar && activeDoc.sidebar === doc.sidebar)
                    );
            }
        }

        return false;
    };

    return (
        <DefaultNavbarItem
            exact
            {...props}
            isActive={checkIsActive}
            label={staticLabel ?? doc.id}
            to={doc.path}
        />
    );
}
