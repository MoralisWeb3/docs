import React from "react"
import styles from "./DisplayLink.module.css"

export interface DisplayLinkProps {
  label: string
  href: string
  subLabel?: string
  iconSrc?: string
}

export const DisplayLink = ({
  label,
  href,
  subLabel,
  iconSrc,
}: DisplayLinkProps) => {
  return (
    <>
      <a className={styles.wrapper} href={href}>
        <div className={styles.imageWrapper}>
          <img src={iconSrc} />
        </div>
        <div className={styles.content}>
          {subLabel && <div className={styles.subLabel}>{subLabel}</div>}
          <div className={styles.label}>{label}</div>
        </div>
      </a>
    </>
  )
}
