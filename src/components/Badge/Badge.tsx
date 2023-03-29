// Implementation of https://infima.dev/docs/components/badge

import React from "react";

const colorClassnames = {
  primary: "badge--primary",
  secondary: "badge--secondary",
  success: "badge--success",
  warning: "badge--warning",
  danger: "badge--danger",
  info: "badge--info",
};
export type BadgeColor = keyof typeof colorClassnames;

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
}

export const Badge = ({ children, color = "primary" }: BadgeProps) => {
  return <span className={`badge ${colorClassnames[color]}`}>{children}</span>;
};
