import React from "react";
import OriginalIdealImage from "@theme-original/IdealImage";

import styles from "./styles.module.css";

function IdealImage(props) {
  return (
    <figure className={styles.image} style={{ maxWidth: props.width }}>
      <OriginalIdealImage {...props} />

      {props.alt && <figcaption>{props.alt}</figcaption>}
    </figure>
  );
}

export default IdealImage;
