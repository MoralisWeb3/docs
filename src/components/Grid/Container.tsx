// Implementation of https://infima.dev/docs/layout/grid
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};
