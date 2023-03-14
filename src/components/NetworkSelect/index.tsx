import React from "react";
import * as Select from "@radix-ui/react-select";
import { useHistory } from "@docusaurus/router";
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
import usePageState from "../../hooks/usePageState";

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
  "streams-api-hide": [
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
  "authentication-api-hide": [
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
  const pageState = usePageState();
  const windowSize = useWindowSize();
  const mobileSidebar = useNavbarMobileSidebar();

  const handleNetWorkChange = (selectedNetwork) => {
    push(`/${pageState?.path}/${selectedNetwork}`);

    if (windowSize === "mobile" && mobileSidebar.shown) {
      mobileSidebar.toggle();
    }
  };

  // Workaround for issue: https://github.com/radix-ui/primitives/issues/1658
  const handleOnOpenChange = (open) => {
    const items = document.querySelectorAll(
      ".menu__link, .navbar-sidebar__back, .navbar__brand"
    );

    items.forEach((item) => {
      if (open) {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
      } else {
        item.removeEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
      }
    });
  };

  return pageState && networks?.[pageState?.path] ? (
    <>
      <div className={styles.netWorkSelect}>
        <div className={styles.netWorkSelect__inner}>
          <Select.Root
            defaultValue={pageState?.network}
            onValueChange={handleNetWorkChange}
            onOpenChange={handleOnOpenChange}
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
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default NetworkSelect;
