import React from "react";
import { Scanner } from "../Scan/Scan";
import styles from "./ScanToDeliver.module.css";
import { FaBox } from "react-icons/fa";
import cx from "classnames";

const ScanToDeliver = () => {
  return (
    <div class={styles.scanToDeliver}>
      <Scanner />

      <div className={styles.package}>
        <div className={styles.itemNumber}>12</div>
        <h3 className={styles.address}>107 hidden hills dr</h3>
        <p className={styles.name}>Thomas West</p>
        <div className={styles.tote}>
          {" "}
          <div className={styles.circleColor}></div>aa-p-5997-997-ylo
        </div>
        <div className={styles.packageInfo}>
          <FaBox className={styles.logo} />
          <span className={styles.packageType}>Envelope</span>
          <span className={styles.clusterNumber}>3552</span>
          <span className={styles.tba}>TBA080439555301</span>
        </div>
      </div>
    </div>
  );
};

export default ScanToDeliver;
