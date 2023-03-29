// Implementation of https://infima.dev/docs/layout/grid
import React from "react";

export type GridColSpan = 1 | 2 | 3 | 4 | 6 | 12;

interface ColProps {
  children?: React.ReactNode;
  span: GridColSpan;
}

export const Col = ({ children, span = 12 }: ColProps) => {
  return (
    <div className={`col col--${span}`}>
      <div>{children}</div>
    </div>
  );
};
