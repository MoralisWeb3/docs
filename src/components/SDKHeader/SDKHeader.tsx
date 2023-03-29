import React from "react";
import styles from "./SDKHeader.module.css";

interface Shield {
  alt: string;
  src: string;
}
interface SDKHeaderProps {
  logoSrc: string;
  name: string;
  title: string;
  description?: string;
  shields?: Shield[];
}

export const SDKHeader = ({
  logoSrc,
  name,
  title,
  description,
  shields,
}: SDKHeaderProps) => {
  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.imgWrapper}>
          <img src="/img/favicon.svg" alt="moralis" />
          <span className={styles.x}>X</span>
          <img src={logoSrc} alt={name} />
        </div>
        {description && <p className={styles.description}>{description}</p>}
        {shields && shields.length > 0 && (
          <div className={styles.shields}>
            {shields.map((shield) => (
              <img alt={shield.alt} src={shield.src} key={shield.src} />
            ))}
          </div>
        )}
      </header>
    </>
  );
};
