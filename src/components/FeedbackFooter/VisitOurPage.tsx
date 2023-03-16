import React from "react";
import styles from "./styles.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

const VisitOurPage = () => {
  return (
    <BrowserOnly>
      {() => (
        <div style={{ flex: 1 }}>
          <h3>Need support?</h3>
          <p>
            Questions? Problems? Need more info? Contact Segment Support for
            assistance!
          </p>
          <button
            className={styles.visitOurButton}
            onClick={() => window.open("https://help.moralis.io/", "_blank")}
          >
            Visit our Support Page
          </button>
        </div>
      )}
    </BrowserOnly>
  );
};

export default VisitOurPage;
