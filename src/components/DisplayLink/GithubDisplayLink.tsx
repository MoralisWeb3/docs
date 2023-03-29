import React from "react";
import { DisplayLink, DisplayLinkProps } from "./DisplayLink";
import { useColorMode } from "@docusaurus/theme-common";

export const GithubDisplayLink = ({
  ...props
}: Omit<DisplayLinkProps, "iconSrc">) => {
  const { isDarkTheme } = useColorMode();
  const iconSrc = isDarkTheme
    ? "/img/external-logos/github-white.svg"
    : "/img/external-logos/github-black.svg";

  return <DisplayLink {...props} iconSrc={iconSrc} />;
};
