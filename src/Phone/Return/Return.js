import React from "react";
import styles from "./Return.module.css";

const Return = () => {
  return (
    <div className={styles.return}>
      <div className={styles.message}>
        <h3>Return to the station</h3>
        <p>Go back to the station to finish. When you arrive, swipe below.</p>
      </div>

      <button className={styles.btn}>return to station</button>
    </div>
  );
};

export default Return;
