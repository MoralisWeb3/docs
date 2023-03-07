import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useHistory, useLocation } from "@docusaurus/router";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import { FiCheck, FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./styles.module.css";
import EthereumIcon from "@site/static/img/network-icons/ethereum.svg";
import AptosIcon from "@site/static/img/network-icons/aptos.svg";
import AptosDarkIcon from "@site/static/img/network-icons/aptosDark.svg";
import SolanaIcon from "@site/static/img/network-icons/solana.svg";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { useWindowSize } from "@docusaurus/theme-common";

interface PageSidebar {
  path: string;
  network: string;
}

const networks = {
  "web3-data-api": [
    {
      value: "evm",
      label: "EVM",
      icon: EthereumIcon,
      iconDark: EthereumIcon,
    },
    {
      value: "aptos",
      label: "Aptos",
      icon: AptosIcon,
      iconDark: AptosDarkIcon,
    },

    {
      value: "solana",
      label: "Solana",
      icon: SolanaIcon,
      iconDark: SolanaIcon,
    },
  ],
  "streams-apix": [
    // hiding sidebar temporary
    {
      value: "evm",
      label: "EVM",
      icon: EthereumIcon,
      iconDark: EthereumIcon,
    },
    {
      value: "aptos",
      label: "Aptos",
      icon: AptosIcon,
      iconDark: AptosDarkIcon,
    },
  ],
  "authentication-apix": [
    // hiding sidebar temporary
    {
      value: "evm",
      label: "EVM",
      icon: EthereumIcon,
      iconDark: EthereumIcon,
    },
    {
      value: "aptos",
      label: "Aptos",
      icon: AptosIcon,
      iconDark: AptosDarkIcon,
    },
    {
      value: "solana",
      label: "Solana",
      icon: SolanaIcon,
      iconDark: SolanaIcon,
    },
  ],
};

const NetworkSelect = () => {
  const { colorMode } = useColorMode();
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [pageState] = useState<PageSidebar | undefined>(() => {
    const [path, network] = pathname.split("/").slice(1);
    if (path && network) return { path, network };
    return;
  });

  const windowSize = useWindowSize();
  const mobileSidebar = useNavbarMobileSidebar();

  const handleNetWorkChange = (selectedNetwork) => {
    push(`/${pageState?.path}/${selectedNetwork}`);

    if (windowSize === "mobile" && mobileSidebar.shown) {
      mobileSidebar.toggle();
    }
  };

  return pageState && networks?.[pageState?.path] ? (
    <div className={styles.netWorkSelect}>
      <div className={styles.netWorkSelect__inner}>
        <div className={styles.netWorkSelectLabel}>
          {pageState?.path?.split("-")?.join(" ")?.toUpperCase()}
        </div>
        <Select.Root
          defaultValue={pageState?.network}
          onValueChange={handleNetWorkChange}
        >
          <Select.Trigger
            aria-label="Select Network"
            className={clsx("sections-menu-trigger")}
          >
            <Select.Value />
            <Select.Icon>
              <FiChevronDown className="sections-menu-scrollButton" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className={clsx("sections-menu-content")}>
              <Select.ScrollUpButton className="sections-menu-scrollButton">
                <FiChevronUp />
              </Select.ScrollUpButton>

              <Select.Viewport>
                <Select.Group>
                  {networks?.[pageState?.path as string]?.map(
                    ({ value, label, icon: Icon, iconDark: IconDark }) => (
                      <Select.Item
                        key={value}
                        value={value}
                        className={clsx("sections-menu-item")}
                      >
                        <Select.ItemText>
                          <div className="item-text">
                            {colorMode === "dark"
                              ? IconDark && <IconDark />
                              : Icon && <Icon />}
                            <span>{label}</span>
                          </div>
                        </Select.ItemText>
                        <Select.ItemIndicator className="flex items-center">
                          <FiCheck className="item-indicator" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    )
                  )}
                </Select.Group>
              </Select.Viewport>

              <Select.ScrollDownButton className="sections-menu-scrollButton">
                <FiChevronDown />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
        {pageState.path === "web3-data-api" &&
          pageState.network === "aptos" && (
            <ToggleGroup.Root
              className="ToggleGroup"
              type="single"
              defaultValue="mainnet"
              orientation="horizontal"
            >
              <ToggleGroup.Item
                className={styles.ToggleGroupItem}
                value="mainnet"
              >
                Mainnet
              </ToggleGroup.Item>
              <ToggleGroup.Item
                className={styles.ToggleGroupItem}
                value="testnet"
              >
                Testnet
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NetworkSelect;
