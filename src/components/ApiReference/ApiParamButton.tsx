import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

const ApiParamButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={clsx(className, styles.button)} />;
};

export default ApiParamButton;
