import React from "react";
import styles from "./DisplayLink.module.css";

export interface DisplayLinkProps {
  label: string;
  href: string;
  subLabel?: string;
  iconSrc?: string;
  emoji?: string;
}

export const DisplayLink = ({
  label,
  href,
  subLabel,
  iconSrc,
  emoji,
}: DisplayLinkProps) => {
  return (
    <>
      <a className={styles.wrapper} href={href}>
        {(emoji || iconSrc) && (
          <div className={styles.imageWrapper}>
            {emoji ? (
              <span className={styles.emoji}>{emoji}</span>
            ) : (
              <img src={iconSrc} />
            )}
          </div>
        )}
        <div className={styles.content}>
          {subLabel && <div className={styles.subLabel}>{subLabel}</div>}
          <div className={styles.label}>{label}</div>
        </div>
      </a>
    </>
  );
};
