import React, { useState } from "react";
import styles from "./Ready.module.css";
import { createBrowserHistory } from "history";

const ReadyToDeliver = () => {
  return (
    <div className={styles["ready__container"]}>
      <div className={styles["ready__warning"]}>
        <span className={styles["ready__warning-message"]}>
          {" "}
          Safety is our top priority. Ensure your temperature is below 100.4F /
          38C before arriving for deliveries every day.
        </span>
      </div>

      <h1 className={styles["ready__flex-logo"]}>X</h1>

      <button className={styles["ready__button"]}>ready to deliver</button>
    </div>
  );
};

export default ReadyToDeliver;
