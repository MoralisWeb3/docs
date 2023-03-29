// Implementation of https://infima.dev/docs/layout/grid
import React from "react";

interface RowProps {
  children?: React.ReactNode;
}

export const Row = ({ children }: RowProps) => {
  return <div className="row">{children}</div>;
};
