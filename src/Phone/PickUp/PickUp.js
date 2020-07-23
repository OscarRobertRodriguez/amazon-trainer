import React from "react";
import styles from "./PickUp.module.css";
import cx from "classnames";
import { MdDomain } from "react-icons/md";

const PickUp = () => {
  return (
    <div className={styles.pickUp}>
      <div className={styles.message}>
        <MdDomain className={styles.icon} color={"#ccc"} size={"1.3rem"} />
        <p>dau2</p>
        <h2>7000 metropolis drive</h2>
      </div>

      <button className={cx(styles.btn, styles.btnGrey)}>
        scan 103 packages
      </button>
      <button className={styles.btn}>return to station</button>
    </div>
  );
};

export default PickUp;
