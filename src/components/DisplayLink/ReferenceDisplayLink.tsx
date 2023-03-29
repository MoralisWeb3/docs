import React from "react";
import { DisplayLink, DisplayLinkProps } from "./DisplayLink";

export const ReferenceDisplayLink = ({
  ...props
}: Omit<DisplayLinkProps, "iconSrc">) => {
  const iconSrc = "/img/sidebar-icons/api-reference.svg";

  return <DisplayLink {...props} iconSrc={iconSrc} />;
};
